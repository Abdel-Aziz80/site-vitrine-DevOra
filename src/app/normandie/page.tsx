import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";
import { localPages } from "@/lib/siteContent";

const page = localPages.normandie;

export const metadata: Metadata = {
  title: "Création de site internet en Normandie pour artisans et TPE",
  description:
    "Création de sites vitrines en Normandie pour artisans, indépendants et TPE. Offre starter à 600€ HT, SEO local de base et devis gratuit.",
  alternates: { canonical: "/normandie" },
};

export default function NormandiePage() {
  return <LocalLandingPage pageKey={page.slug} />;
}
