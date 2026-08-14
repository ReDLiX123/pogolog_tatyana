const configuredUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteUrl = configuredUrl.replace(/\/$/, "");
export const siteName = "Практика подологии Татьяны Оксанычевой";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export const socialProfiles = [
  "https://t.me/Pedikurpodologia38",
  "https://ok.ru/group/70000000993544",
];
