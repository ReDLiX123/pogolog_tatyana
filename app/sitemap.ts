import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { serviceSeoPages } from "@/lib/service-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/politika-konfidencialnosti/"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    ...serviceSeoPages.map((page) => ({
      url: absoluteUrl(`/uslugi/${page.slug}/`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
