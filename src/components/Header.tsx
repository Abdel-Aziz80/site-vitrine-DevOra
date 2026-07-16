"use client";

import { useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TrackedLink from "@/components/TrackedLink";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/offre", label: "Offres" },
  { href: "/portfolio", label: "Projets" },
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
  const mobileMenuId = useId();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071126]/88 text-white shadow-2xl shadow-[#061A35]/20 backdrop-blur-xl">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-2 py-1">
            <Image
              src="/assets/devora-hexagon.png"
              alt=""
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-xl object-contain"
            />
            <span className="pr-2 text-sm font-semibold text-white">DEVORA</span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-5 lg:flex xl:gap-8">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/68 transition hover:text-[#22D3EE]"
              >
                {link.label}
              </Link>
            ))}

            <details className="group relative">
              <summary className="cursor-pointer list-none text-sm font-semibold text-white/85 transition hover:text-[#22D3EE] focus:outline-none focus-visible:text-[#22D3EE]">
                Zones <span className="inline-block text-white/55 transition group-open:rotate-180">▾</span>
              </summary>

              <div className="absolute left-0 top-full z-[70] mt-3 w-52 rounded-2xl border border-white/12 bg-[#071121] p-2 shadow-2xl shadow-black/40">
                {zoneLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white/78 transition hover:bg-white/8 hover:text-[#22D3EE]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            {links.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/68 transition hover:text-[#22D3EE]"
              >
                {link.label}
              </Link>
            ))}

            <TrackedLink
              href="/contact"
              eventName="cta_header_contact"
              eventLabel="Header contact"
              className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition hover:brightness-110"
            >
              Demander un cadrage
            </TrackedLink>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-controls={mobileMenuId}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <span className="text-xl leading-none">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id={mobileMenuId}
            className="mt-4 rounded-2xl border border-white/10 bg-[#071121] p-4 shadow-xl shadow-black/20 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-[#22D3EE]"
                >
                  {link.label}
                </Link>
              ))}

              <TrackedLink
                href="/contact"
                eventName="cta_mobile_contact"
                eventLabel="Menu mobile contact"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-3 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
              >
                Demander un cadrage
              </TrackedLink>

              <div className="border-t border-white/10 pt-3">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-[#22D3EE]">
                  Zones
                </p>

                <div className="flex flex-col gap-2">
                  {zoneLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-[#22D3EE]"
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
