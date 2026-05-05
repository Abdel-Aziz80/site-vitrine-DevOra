import type { Metadata } from "next";

// Définition des métadonnées pour la page de contact.
// Ce fichier est exécuté côté serveur et permet d'exposer `metadata`
// tout en laissant la page `page.tsx` fonctionner comme un composant client.

export const metadata: Metadata = {
  title: "Contact - DevOra",
  description:
    "Contactez DevOra pour discuter de votre projet de site internet, refonte de site ou accompagnement digital en Normandie.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - DevOra",
    description:
      "Échangeons autour de votre projet de site internet en Normandie.",
    url: "/contact",
  },
};