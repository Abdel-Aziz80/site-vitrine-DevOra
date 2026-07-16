import type { Metadata, Viewport } from "next";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DEVORA - Sites premium, outils métier, IA utile et Sentinel",
    template: "%s | DEVORA",
  },
  description:
    "DEVORA crée des sites premium, outils métier, tableaux de pilotage, automatisations utiles, IA locale et solutions Sentinel pour mieux vendre, suivre et gagner du temps.",
  keywords: [
    "DEVORA",
    "outils métier",
    "DEVORA Sentinel",
    "création site premium",
    "tableau de pilotage",
    "outil business",
    "automatisation utile",
    "sécurité défensive",
    "IA locale",
    "site premium",
  ],
  authors: [{ name: "DEVORA" }],
  creator: "DEVORA",
  publisher: "DEVORA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DEVORA - Sites premium, outils métier, IA utile et Sentinel",
    description:
      "Sites premium, tableaux de pilotage, automatisations utiles, outils privés et Sentinel pour mieux vendre, suivre et gagner du temps.",
    url: siteUrl,
    siteName: "DEVORA",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/devora-logo.png",
        width: 1536,
        height: 1024,
        alt: "Identité visuelle DEVORA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEVORA - Sites premium, outils métier, IA utile et Sentinel",
    description:
      "Sites premium, outils métier, automatisations utiles et DEVORA Sentinel.",
    images: ["/assets/devora-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/assets/devora-hexagon.png", type: "image/png" }],
    shortcut: "/assets/devora-hexagon.png",
    apple: "/assets/devora-hexagon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050713",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
