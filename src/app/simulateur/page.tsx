import type { Metadata } from "next";
import QuoteSimulator from "./QuoteSimulator";

export const metadata: Metadata = {
  title: "Simulateur de devis site web | DevOra",
  description:
    "Estimez le prix de votre projet web en quelques secondes : site vitrine, landing page, SEO, maintenance ou projet sur mesure.",
  alternates: {
    canonical: "/simulateur",
  },
};

export default function SimulateurPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FBFDFF] via-[#F4FAFC] to-[#EFF9F8]">
      <QuoteSimulator />
    </main>
  );
}