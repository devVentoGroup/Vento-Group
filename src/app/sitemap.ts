import type { MetadataRoute } from "next";

import { getItems } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: absoluteUrl("/restaurantes"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: absoluteUrl("/eventos"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: absoluteUrl("/empleos"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: absoluteUrl("/servicios"), lastModified: now, changeFrequency: "weekly", priority: 0.75 },
    { url: absoluteUrl("/ecosistema"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const restaurants = await getItems("restaurant");
  const restaurantRoutes: MetadataRoute.Sitemap = restaurants.map((item) => ({
    url: absoluteUrl(`/restaurantes/${item.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.78,
  }));

  return [...staticRoutes, ...restaurantRoutes];
}
