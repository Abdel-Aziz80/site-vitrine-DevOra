"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/Logo-site-devora.svg"
              alt="Logo DevOra"
              width={44}
              height={44}
              priority
              className="h-11 w-11"
            />
            <div className="leading-tight">
              <span className="block text-2xl font-bold tracking-tight text-neutral-900">
                DevOra
              </span>
              <span className="block text-sm text-[#D97757]">
                Développement web
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition hover:text-[#D97757]"
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
            className="inline-flex items-center justify-center rounded-xl border border-black/10 px-3 py-2 text-neutral-800 transition hover:bg-[#FFF3EA] md:hidden"
          >
            <span className="text-xl leading-none">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="mt-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-[#FFF8F3] hover:text-[#D97757]"
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