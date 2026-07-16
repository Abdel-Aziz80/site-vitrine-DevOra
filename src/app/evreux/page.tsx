import type { Metadata } from "next";
import LocalLandingPage from "@/components/LocalLandingPage";
import { localPages } from "@/lib/siteContent";

const page = localPages.evreux;

export const metadata: Metadata = {
  title: "Création de site internet à Évreux pour professionnels locaux",
  description:
    "Création de site vitrine à Évreux pour artisans, indépendants et TPE. Offre starter à 600€ HT, formulaire, responsive et SEO local.",
  alternates: { canonical: "/evreux" },
};

export default function EvreuxPage() {
  return <LocalLandingPage pageKey={page.slug} />;
}
