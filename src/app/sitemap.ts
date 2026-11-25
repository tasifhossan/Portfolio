import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tasif-dev.vercel.app";
  const lastModifiedDate = "2026-10-13T00:00:00.000Z";

  // Root and Projects directory
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: lastModifiedDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic project detail pages (only visible, non-hidden slugs)
  const projectRoutes: MetadataRoute.Sitemap = projectsData
    .filter((project) => !project.hidden)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...projectRoutes];
}
