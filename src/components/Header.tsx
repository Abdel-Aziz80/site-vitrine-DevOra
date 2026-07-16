"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const zonesRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function closeZonesOnOutsideClick(event: PointerEvent) {
      if (!zonesRef.current?.open) {
        return;
      }

      if (!zonesRef.current.contains(event.target as Node)) {
        zonesRef.current.open = false;
      }
    }

    document.addEventListener("pointerdown", closeZonesOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeZonesOnOutsideClick);
    };
  }, []);

  function closeZonesMenu() {
    if (zonesRef.current) {
      zonesRef.current.open = false;
    }
  }

  return (
    <header className="devora-header">
      <nav className="devora-header-nav" aria-label="Navigation principale">
        <div className="devora-header-row">
          <Link href="/" className="devora-header-brand">
            <Image
              src="/assets/devora-hexagon.png"
              alt=""
              width={40}
              height={40}
              priority
              className="devora-header-logo"
            />
            <span className="devora-header-brand-text">DEVORA</span>
          </Link>

          {/* Desktop */}
          <div className="devora-header-desktop">
            {links.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="devora-header-link"
              >
                {link.label}
              </Link>
            ))}

            <details
              ref={zonesRef}
              className="devora-header-zones"
              onMouseLeave={closeZonesMenu}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  event.currentTarget.open = false;
                }
              }}
            >
              <summary className="devora-header-zones-trigger">
                Zones <span className="devora-header-zones-arrow">▾</span>
              </summary>

              <div className="devora-header-zones-menu">
                {zoneLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeZonesMenu}
                    className="devora-header-zone-link"
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
                className="devora-header-link"
              >
                {link.label}
              </Link>
            ))}

            <TrackedLink
              href="/contact"
              eventName="cta_header_contact"
              eventLabel="Header contact"
              className="devora-header-cta"
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
            className="devora-header-menu-button"
          >
            <span>{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id={mobileMenuId}
            className="devora-header-mobile-menu"
          >
            <div className="devora-header-mobile-stack">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="devora-header-mobile-link"
                >
                  {link.label}
                </Link>
              ))}

              <TrackedLink
                href="/contact"
                eventName="cta_mobile_contact"
                eventLabel="Menu mobile contact"
                onClick={() => setIsOpen(false)}
                className="devora-header-mobile-cta"
              >
                Demander un cadrage
              </TrackedLink>

              <div className="devora-header-mobile-zones">
                <p className="devora-header-mobile-zones-title">
                  Zones
                </p>

                <div className="devora-header-mobile-zones-list">
                  {zoneLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="devora-header-mobile-link"
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
