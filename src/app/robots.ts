import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portfolio-sources/", "/node_modules/", "/.next/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
