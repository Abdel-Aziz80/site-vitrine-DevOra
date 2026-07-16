import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";
import { localPages } from "@/lib/siteContent";

const page = localPages.caen;

export const metadata: Metadata = {
  title: "Création de site internet à Caen pour professionnels locaux",
  description:
    "Création de site vitrine à Caen pour artisans, indépendants et TPE. Offre starter à 600€ HT, SEO local, formulaire et accompagnement.",
  alternates: { canonical: "/caen" },
};

export default function CaenPage() {
  return <LocalLandingPage pageKey={page.slug} />;
}
