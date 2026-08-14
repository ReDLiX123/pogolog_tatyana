import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Практика подологии Татьяны Оксанычевой",
    short_name: "Подолог Оксанычева",
    description: "Подологическая практика в Иркутске",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#4f9a8f",
    lang: "ru-RU",
  };
}
