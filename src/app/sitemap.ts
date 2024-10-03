import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://favimaker.com",
      lastModified: new Date(),
    },
  ];
}
