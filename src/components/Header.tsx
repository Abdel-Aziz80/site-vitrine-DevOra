"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/rouen", label: "Rouen" },
  { href: "/normandie", label: "Normandie" },
  { href: "/france", label: "France" },
  { href: "/offre", label: "Offres" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="hidden items-center gap-5 lg:gap-8 lg:flex">
            {links.map((link) => (
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
          <div className="mt-4 rounded-2xl border border-[#061A35]/10 bg-white p-4 shadow-sm md:hidden">
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}