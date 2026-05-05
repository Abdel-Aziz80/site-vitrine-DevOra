import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://devora-freelance.fr";

const routes = [
  "",
  "/a-propos",
  "/services",
  "/offre",
  "/portfolio",
  "/contact",
  "/simulateur",
  "/normandie",
  "/rouen",
  "/caen",
  "/le-havre",
  "/evreux",
  "/france",
  "/mentions-legales",
  "/politique-de-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/normandie" ? 0.9 : 0.7,
  }));
}
