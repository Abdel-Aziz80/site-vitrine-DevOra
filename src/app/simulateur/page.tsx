import type { Metadata } from "next";
import QuoteSimulator from "./QuoteSimulator";

export const metadata: Metadata = {
  title: "Simulateur DEVORA - trouver la bonne solution pour votre besoin",
  description:
    "Préqualifiez votre besoin DEVORA : site, page de vente, outil métier, tableau de suivi, automatisation, e-commerce, Sentinel, SEO ou conversion.",
  alternates: {
    canonical: "/simulateur",
  },
};

export default function SimulateurPage() {
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <QuoteSimulator />
    </main>
  );
}
