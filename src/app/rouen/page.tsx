import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";
import { localPages } from "@/lib/siteContent";

const page = localPages.rouen;

export const metadata: Metadata = {
  title: "Création de site internet à Rouen pour artisans et TPE",
  description:
    "Site vitrine à Rouen pour artisans, indépendants et TPE. Offre starter à 600€ HT, formulaire, responsive et SEO local de base.",
  alternates: { canonical: "/rouen" },
};

export default function RouenPage() {
  return <LocalLandingPage pageKey={page.slug} />;
}
