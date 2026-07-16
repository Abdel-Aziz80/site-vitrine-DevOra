import type { Metadata, Viewport } from "next";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DEVORA - Plateforme IA, SaaS, sécurité et outils business",
    template: "%s | DEVORA",
  },
  description:
    "DEVORA conçoit une plateforme business/dev/IA : dashboards métier, SaaS internes, automatisations, IA locale, sécurité défensive et expériences digitales premium.",
  keywords: [
    "DEVORA",
    "plateforme IA",
    "DEVORA Sentinel",
    "développement Next.js",
    "dashboard business",
    "application SaaS",
    "automatisation IA",
    "sécurité défensive",
    "IA locale",
    "copilote IA",
  ],
  authors: [{ name: "DEVORA" }],
  creator: "DEVORA",
  publisher: "DEVORA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DEVORA - Plateforme IA, SaaS, sécurité et outils business",
    description:
      "Dashboards métier, SaaS internes, automatisations IA, sécurité défensive et interfaces premium pour activités ambitieuses.",
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
    title: "DEVORA - Plateforme IA, SaaS, sécurité et outils business",
    description:
      "Plateforme business/dev/IA pour dashboards, SaaS, automatisations et sécurité défensive.",
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
