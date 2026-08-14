#!/usr/bin/env bash

set -Eeuo pipefail

readonly SCRIPT_NAME="$(basename "$0")"
readonly NODE_IMAGE="node:22-alpine"
readonly CADDY_IMAGE="caddy:2.10-alpine"

log() {
  printf '\n\033[1;36m[%s]\033[0m %s\n' "$SCRIPT_NAME" "$*"
}

fail() {
  printf '\n\033[1;31mОшибка:\033[0m %s\n' "$*" >&2
  exit 1
}

cleanup() {
  if [[ -n "${BUILD_DIR:-}" && -d "${BUILD_DIR:-}" ]]; then
    rm -rf -- "$BUILD_DIR"
  fi
}

trap cleanup EXIT

if [[ "${EUID}" -ne 0 ]]; then
  fail "Запусти скрипт от root: sudo bash $SCRIPT_NAME"
fi

if ! grep -qiE 'ubuntu|debian' /etc/os-release 2>/dev/null; then
  fail "Скрипт рассчитан на Ubuntu или Debian."
fi

printf '\nАвтоматический деплой сайта подолога\n'
printf 'DNS-записи домена должны заранее указывать на этот сервер.\n\n'

read -r -p "Основной домен без https:// (например, example.ru): " DOMAIN
DOMAIN="${DOMAIN,,}"
DOMAIN="${DOMAIN#http://}"
DOMAIN="${DOMAIN#https://}"
DOMAIN="${DOMAIN%%/*}"

if [[ ! "$DOMAIN" =~ ^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$ ]]; then
  fail "Некорректный домен: $DOMAIN"
fi

read -r -p "Email для выпуска SSL-сертификата: " SSL_EMAIL
if [[ ! "$SSL_EMAIL" =~ ^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$ ]]; then
  fail "Некорректный email."
fi

read -r -p "Git-репозиторий (HTTPS или SSH): " REPOSITORY_URL
[[ -n "$REPOSITORY_URL" ]] || fail "Адрес репозитория не может быть пустым."

read -r -p "Ветка [master]: " BRANCH
BRANCH="${BRANCH:-master}"

read -r -p "Добавить редирект с www.$DOMAIN? [Y/n]: " ENABLE_WWW
ENABLE_WWW="${ENABLE_WWW:-Y}"

readonly SITE_URL="https://$DOMAIN"
readonly SAFE_DOMAIN="${DOMAIN//./-}"
readonly CONTAINER_NAME="podolog-${SAFE_DOMAIN}"
readonly SOURCE_DIR="/opt/podolog-sites/$DOMAIN/source"
readonly WEB_ROOT="/var/www/$DOMAIN"
readonly CONFIG_DIR="/etc/podolog-sites/$DOMAIN"
readonly CADDYFILE="$CONFIG_DIR/Caddyfile"
readonly DATA_VOLUME="podolog_caddy_${SAFE_DOMAIN}_data"
readonly CONFIG_VOLUME="podolog_caddy_${SAFE_DOMAIN}_config"

log "Проверяю DNS"
SERVER_IP=""
if command -v curl >/dev/null 2>&1; then
  SERVER_IP="$(curl -4fsS --max-time 15 https://api.ipify.org || true)"
fi
DOMAIN_IP="$(getent ahostsv4 "$DOMAIN" | awk 'NR == 1 {print $1}')"

if [[ -z "$DOMAIN_IP" ]]; then
  fail "Домен $DOMAIN пока не имеет A-записи. Настрой DNS и повтори запуск."
fi

if [[ -n "$SERVER_IP" && "$DOMAIN_IP" != "$SERVER_IP" ]]; then
  printf '\nВнимание: %s сейчас указывает на %s, а публичный IP сервера — %s.\n' "$DOMAIN" "$DOMAIN_IP" "$SERVER_IP"
  read -r -p "Продолжить несмотря на несовпадение? [y/N]: " CONTINUE_DNS
  [[ "${CONTINUE_DNS,,}" == "y" ]] || fail "Деплой отменён."
fi

log "Устанавливаю системные зависимости"
export DEBIAN_FRONTEND=noninteractive
apt-get update
apt-get install -y --no-install-recommends ca-certificates curl git
if ! command -v docker >/dev/null 2>&1; then
  apt-get install -y --no-install-recommends docker.io
fi
systemctl enable --now docker

log "Проверяю порты 80 и 443"
mapfile -t PORT_CONTAINERS < <(docker ps --format '{{.Names}} {{.Ports}}' | awk '$0 ~ /0\.0\.0\.0:(80|443)->|\[::\]:(80|443)->/ {print $1}' | sort -u)
for PORT_CONTAINER in "${PORT_CONTAINERS[@]:-}"; do
  if [[ -n "$PORT_CONTAINER" && "$PORT_CONTAINER" != "$CONTAINER_NAME" ]]; then
    fail "Порты 80/443 заняты контейнером '$PORT_CONTAINER'. Скрипт не будет останавливать чужой сайт автоматически."
  fi
done

if command -v ss >/dev/null 2>&1; then
  if ss -H -ltn '( sport = :80 or sport = :443 )' | grep -q . && [[ ${#PORT_CONTAINERS[@]} -eq 0 ]]; then
    fail "Порты 80/443 заняты системным сервисом. Останови его осознанно и повтори запуск."
  fi
fi

log "Получаю исходный код"
mkdir -p "$(dirname "$SOURCE_DIR")"
BUILD_DIR="$(mktemp -d "/tmp/podolog-build-${SAFE_DOMAIN}-XXXXXX")"

GIT_TERMINAL_PROMPT=0 git clone --depth 1 --branch "$BRANCH" "$REPOSITORY_URL" "$BUILD_DIR" || \
  fail "Не удалось клонировать репозиторий. Для приватного SSH-репозитория сначала добавь серверный SSH-ключ в GitHub."

[[ -f "$BUILD_DIR/package-lock.json" ]] || fail "В репозитории нет package-lock.json."
[[ -f "$BUILD_DIR/next.config.ts" || -f "$BUILD_DIR/next.config.js" || -f "$BUILD_DIR/next.config.mjs" ]] || \
  fail "В репозитории не найден Next.js-конфиг. Проверь адрес репозитория."

log "Проверяю код и собираю сайт для $SITE_URL"
docker pull "$NODE_IMAGE"
docker run --rm \
  -e "SITE_URL=$SITE_URL" \
  -e NEXT_TELEMETRY_DISABLED=1 \
  -v "$BUILD_DIR:/app" \
  -w /app \
  "$NODE_IMAGE" \
  sh -lc 'npm ci && npm run lint && npm run build'

[[ -f "$BUILD_DIR/out/index.html" ]] || fail "Сборка завершилась без out/index.html. Проверь output: export в Next.js."
[[ -f "$BUILD_DIR/out/robots.txt" ]] || fail "В сборке нет robots.txt."
[[ -f "$BUILD_DIR/out/sitemap.xml" ]] || fail "В сборке нет sitemap.xml."
grep -Fq "$SITE_URL" "$BUILD_DIR/out/index.html" || fail "В главной странице нет production-домена. Проверь SITE_URL."

log "Готовлю конфигурацию HTTPS"
mkdir -p "$CONFIG_DIR"

{
  printf '{\n\temail %s\n}\n\n' "$SSL_EMAIL"
  if [[ "${ENABLE_WWW,,}" != "n" ]]; then
    printf 'www.%s {\n\tredir https://%s{uri} permanent\n}\n\n' "$DOMAIN" "$DOMAIN"
  fi
  cat <<CADDY_CONFIG
$DOMAIN {
\tencode zstd gzip
\troot * /srv

\t@immutable path /_next/static/*
\theader @immutable Cache-Control "public, max-age=31536000, immutable"

\t@images path /images/*
\theader @images Cache-Control "public, max-age=2592000"

\theader {
\t\tStrict-Transport-Security "max-age=31536000; includeSubDomains"
\t\tX-Content-Type-Options "nosniff"
\t\tX-Frame-Options "SAMEORIGIN"
\t\tReferrer-Policy "strict-origin-when-cross-origin"
\t\tPermissions-Policy "camera=(), microphone=(), geolocation=()"
\t}

\ttry_files {path} {path}/ /404.html
\tfile_server
}
CADDY_CONFIG
} > "$CADDYFILE"

docker pull "$CADDY_IMAGE"
docker run --rm \
  -v "$CADDYFILE:/etc/caddy/Caddyfile:ro" \
  "$CADDY_IMAGE" \
  caddy validate --config /etc/caddy/Caddyfile

log "Публикую новую версию"
STAGING_ROOT="/var/www/.${DOMAIN}.new-$(date +%Y%m%d-%H%M%S)"
BACKUP_ROOT="/var/www/.${DOMAIN}.backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$STAGING_ROOT"
cp -a "$BUILD_DIR/out/." "$STAGING_ROOT/"
find "$STAGING_ROOT" -type d -exec chmod 755 {} +
find "$STAGING_ROOT" -type f -exec chmod 644 {} +

if [[ -d "$WEB_ROOT" ]]; then
  mv -- "$WEB_ROOT" "$BACKUP_ROOT"
fi
mv -- "$STAGING_ROOT" "$WEB_ROOT"

OLD_CONTAINER=""
if docker container inspect "$CONTAINER_NAME" >/dev/null 2>&1; then
  OLD_CONTAINER="${CONTAINER_NAME}-rollback-$(date +%s)"
  docker rename "$CONTAINER_NAME" "$OLD_CONTAINER"
  docker stop "$OLD_CONTAINER"
fi

if ! docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p 80:80 \
  -p 443:443 \
  -p 443:443/udp \
  -v "$CADDYFILE:/etc/caddy/Caddyfile:ro" \
  -v "$WEB_ROOT:/srv:ro" \
  -v "$DATA_VOLUME:/data" \
  -v "$CONFIG_VOLUME:/config" \
  "$CADDY_IMAGE"; then
  printf '\nНовый веб-сервер не запустился, выполняю откат.\n' >&2
  docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
  if [[ -n "$OLD_CONTAINER" ]]; then
    docker rename "$OLD_CONTAINER" "$CONTAINER_NAME"
    docker start "$CONTAINER_NAME"
  fi
  if [[ -d "$BACKUP_ROOT" ]]; then
    rm -rf -- "$WEB_ROOT"
    mv -- "$BACKUP_ROOT" "$WEB_ROOT"
  fi
  fail "Деплой не завершён; предыдущая версия возвращена."
fi

if [[ -n "$OLD_CONTAINER" ]]; then
  docker rm "$OLD_CONTAINER" >/dev/null
fi

if [[ -d "$SOURCE_DIR" ]]; then
  SOURCE_BACKUP="${SOURCE_DIR}.backup-$(date +%Y%m%d-%H%M%S)"
  mv -- "$SOURCE_DIR" "$SOURCE_BACKUP"
fi
mv -- "$BUILD_DIR" "$SOURCE_DIR"
BUILD_DIR=""

log "Жду выпуск SSL и проверяю сайт"
SUCCESS=0
for ATTEMPT in {1..18}; do
  HTTP_CODE="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 15 "$SITE_URL/" || true)"
  if [[ "$HTTP_CODE" == "200" ]]; then
    SUCCESS=1
    break
  fi
  sleep 5
done

if [[ "$SUCCESS" -ne 1 ]]; then
  docker logs --tail 80 "$CONTAINER_NAME" >&2 || true
  fail "Сайт запущен, но HTTPS пока не ответил кодом 200. Проверь DNS и логи команды: docker logs $CONTAINER_NAME"
fi

curl -fsS "$SITE_URL/robots.txt" | grep -Fq "$SITE_URL/sitemap.xml" || fail "robots.txt не содержит правильную ссылку на sitemap.xml."
curl -fsS "$SITE_URL/sitemap.xml" | grep -Fq "$SITE_URL/" || fail "sitemap.xml не содержит production-домен."

printf '\n\033[1;32mГотово!\033[0m Сайт опубликован: %s\n' "$SITE_URL"
printf 'Файлы сайта: %s\n' "$WEB_ROOT"
printf 'Контейнер: %s\n' "$CONTAINER_NAME"
printf 'Логи: docker logs %s\n' "$CONTAINER_NAME"
if [[ -d "$BACKUP_ROOT" ]]; then
  printf 'Резервная копия предыдущей версии: %s\n' "$BACKUP_ROOT"
fi
