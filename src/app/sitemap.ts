import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";
import { portfolioProjects } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/offre",
    "/portfolio",
    "/simulateur",
    "/contact",
    "/a-propos",
    "/normandie",
    "/rouen",
    "/caen",
    "/le-havre",
    "/evreux",
    "/france",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : route === "/portfolio" || route === "/contact" ? 0.9 : 0.75,
    })),
    ...portfolioProjects.map((project) => ({
      url: `${siteUrl}/portfolio/${project.slug}`,
      lastModified: new Date("2026-05-21"),
      changeFrequency: "weekly" as const,
      priority: project.slug === "devora-sentinel" ? 0.95 : 0.8,
    })),
  ];
}
