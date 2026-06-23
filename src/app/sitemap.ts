import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Sitemap basilare: single-page, quindi una sola URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
