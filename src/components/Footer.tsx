import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { contactEmail, socialLinks } from "@/lib/siteContent";

const productLinks = [
  { href: "/services", label: "Services" },
  { href: "/offre", label: "Offres" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/devora-sentinel", label: "DEVORA Sentinel" },
  { href: "/simulateur", label: "Simulateur" },
];

const companyLinks = [
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-de-confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer className="devora-footer devora-footer-shell">
      <div className="devora-footer-backdrop">
        <div className="devora-footer-glow devora-footer-glow-blue" />
        <div className="devora-footer-glow devora-footer-glow-violet" />
        <div className="devora-footer-glow devora-footer-glow-cyan" />
      </div>

      <div className="devora-footer-inner">
        <div className="devora-footer-grid">
          <div>
            <Link
              href="/"
              className="devora-footer-brand"
            >
              <Image
                src="/assets/devora-hexagon.png"
                alt=""
                width={42}
                height={42}
                className="devora-footer-logo"
              />
              <span>DEVORA</span>
            </Link>

            <p className="devora-footer-description">
              Plateforme premium pour créer des sites, outils métier, automatisations
              utiles, interfaces business et systèmes locaux comme DEVORA Sentinel.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="devora-footer-email"
            >
              {contactEmail}
            </a>
          </div>

          <nav aria-label="Liens DEVORA" className="devora-footer-nav">
            <p className="devora-footer-title">
              Plateforme
            </p>
            <div className="devora-footer-links">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Liens entreprise" className="devora-footer-nav">
            <p className="devora-footer-title">
              DEVORA
            </p>
            <div className="devora-footer-links">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="devora-footer-social">
            <p className="devora-footer-title">
              Réseaux
            </p>
            <div className="devora-footer-social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="devora-footer-social-link"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <p className="devora-footer-social-copy">
              Une demande, un lancement, une démo privée Sentinel ou une refonte à
              cadrer proprement ?
            </p>

            <TrackedLink
              href="/contact"
              eventName="cta_footer_contact"
              eventLabel="Footer contact"
              className="devora-footer-cta"
            >
              Demander un cadrage
            </TrackedLink>
          </div>
        </div>

        <div className="devora-footer-bottom">
          <p>© 2026 DEVORA. Tous droits réservés.</p>
          <p>Vitrine contrôlée : les démonstrations détaillées restent privées.</p>
        </div>
      </div>
    </footer>
  );
}
