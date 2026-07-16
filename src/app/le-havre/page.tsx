import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";
import { localPages } from "@/lib/siteContent";

const page = localPages["le-havre"];

export const metadata: Metadata = {
  title: "Création de site internet au Havre pour artisans et TPE",
  description:
    "Création de site vitrine au Havre pour artisans, indépendants et petites entreprises. Site starter à 600€ HT, responsive et SEO local.",
  alternates: { canonical: "/le-havre" },
};

export default function LeHavrePage() {
  return <LocalLandingPage pageKey={page.slug} />;
}
