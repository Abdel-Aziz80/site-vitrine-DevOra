import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.devora.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DevOra | Création de site internet en Normandie – Développeur web freelance",
    template: "%s | DevOra",
  },
  description:
    "Développeur web freelance en Normandie. Création de sites vitrines modernes, refonte de site et accompagnement digital pour entreprises, artisans et indépendants.",
  applicationName: "DevOra",
  keywords: [
    "développeur web en Normandie",
    "création site internet en Normandie",
    "site vitrine en Normandie",
    "refonte site web en Normandie",
    "freelance web en Normandie",
    "création site vitrine Normandie",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DevOra",
    images: [
      {
        url: "/Header.png",
        width: 1200,
        height: 630,
        alt: "DevOra - Création de sites internet à en Normandie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Header.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-neutral-950">
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
