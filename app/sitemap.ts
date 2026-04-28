import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jegatheesh.dev", // ✏️ CONTENT REPLACED
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
