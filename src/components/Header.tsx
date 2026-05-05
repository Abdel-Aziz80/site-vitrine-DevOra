"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/offre", label: "Offres" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const zoneLinks = [
  { href: "/normandie", label: "Normandie" },
  { href: "/rouen", label: "Rouen" },
  { href: "/caen", label: "Caen" },
  { href: "/le-havre", label: "Le Havre" },
  { href: "/evreux", label: "Évreux" },
  { href: "/france", label: "France" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#061A35]/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/devora-header.png"
              alt="Logo DevOra Freelance - Développement web"
              width={180}
              height={70}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#334155] transition hover:text-[#173C91]"
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setZonesOpen(true)}
              onMouseLeave={() => setZonesOpen(false)}
            >
              <button
                type="button"
                className="text-sm font-medium text-[#334155] transition hover:text-[#173C91]"
              >
                Zones ▾
              </button>

              {zonesOpen && (
                <div className="absolute left-0 top-full w-48 rounded-2xl border border-[#061A35]/10 bg-white p-2 shadow-lg">
                  {zoneLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#F4FAFC] hover:text-[#173C91]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#334155] transition hover:text-[#173C91]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-[#061A35]/10 px-3 py-2 text-[#1E293B] transition hover:bg-[#EFF9F8] lg:hidden"
          >
            <span className="text-xl leading-none">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 rounded-2xl border border-[#061A35]/10 bg-white p-4 shadow-sm lg:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#F4FAFC] hover:text-[#173C91]"
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-[#061A35]/10 pt-3">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-[#173C91]">
                  Zones
                </p>

                <div className="flex flex-col gap-2">
                  {zoneLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-[#334155] transition hover:bg-[#F4FAFC] hover:text-[#173C91]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}