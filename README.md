# Сайт практики подологии Татьяны Оксанычевой

Статический сайт на Next.js 16. После сборки папку `out` можно разместить на Nginx, Apache, Cloudflare Pages, Netlify или другом хостинге статических файлов.

## Локальный запуск

```powershell
npm install
npm run dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000).

## Production-сборка для домена

Перед сборкой обязательно укажите полный HTTPS-адрес сайта без завершающего слеша:

```powershell
$env:SITE_URL='https://example.ru'
npm run build
```

Готовые файлы появятся в папке `out`. Значение `SITE_URL` используется для:

- canonical URL;
- `robots.txt`;
- `sitemap.xml`;
- Open Graph;
- Schema.org JSON-LD;
- абсолютных адресов индексируемых страниц.

Не публикуйте production-сборку с локальным значением `SITE_URL`.

## Размещение на Nginx

Корневая папка виртуального хоста должна указывать на содержимое `out`. Для маршрутов с завершающим слешем достаточно следующей схемы:

```nginx
server {
    listen 80;
    server_name example.ru www.example.ru;
    root /var/www/podolog/out;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    error_page 404 /404.html;
}
```

HTTPS и перенаправления `http → https`, а также `www → основной домен` настраиваются на сервере после привязки домена.

## Проверки перед публикацией

```powershell
npm run lint
$env:SITE_URL='https://example.ru'
npm run build
```

После деплоя проверьте:

- `/robots.txt`;
- `/sitemap.xml`;
- canonical на главной и страницах услуг;
- переходы в Dikidi;
- Google Rich Results Test;
- PageSpeed Insights;
- добавление домена в Яндекс Вебмастер, Google Search Console и Bing Webmaster Tools.
