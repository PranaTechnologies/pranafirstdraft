import type { MetadataRoute } from "next";
import {
  FEATURED_BLOG_POST,
  SITE_URL,
  TECHNOLOGY_LAYERS,
} from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/technology",
    "/systems",
    "/systems/pivo",
    "/applications",
    "/research",
    `/research/${FEATURED_BLOG_POST.slug}`,
    "/about",
    "/contact",
    "/privacy",
  ];

  const techRoutes = TECHNOLOGY_LAYERS.map((layer) => `/technology/${layer.slug}`);

  return [...staticRoutes, ...techRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/systems/pivo" ? 0.9 : 0.8,
  }));
}
