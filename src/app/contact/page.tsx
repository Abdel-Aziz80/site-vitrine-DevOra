import { Suspense } from "react";
import type { Metadata } from "next";
import ContactFrom from "./ContactFrom";

export const metadata: Metadata = {
  title: "Contact DEVORA - site, outil métier, automatisation ou Sentinel",
  description:
    "Contactez DEVORA pour clarifier un besoin : site premium, page de vente, outil de suivi, automatisation, e-commerce, Sentinel ou visibilité Google.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - site, outil métier, automatisation ou Sentinel | DEVORA",
    description:
      "Décrivez votre projet web et recevez une première orientation claire.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactFrom />
    </Suspense>
  );
}
