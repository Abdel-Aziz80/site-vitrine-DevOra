import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { creationOffers, localFaqs, localPages } from "@/lib/siteContent";

type LocalPageKey = keyof typeof localPages;

const zoneLinks = [
  { href: "/normandie", label: "Normandie" },
  { href: "/rouen", label: "Rouen" },
  { href: "/caen", label: "Caen" },
  { href: "/le-havre", label: "Le Havre" },
  { href: "/evreux", label: "Évreux" },
  { href: "/france", label: "France" },
];

const services = [
  "Site vitrine professionnel",
  "Refonte ou amélioration",
  "Landing page locale",
  "SEO local de base",
  "Formulaire de contact",
  "Maintenance après mise en ligne",
];

export default function LocalLandingPage({ pageKey }: { pageKey: LocalPageKey }) {
  const page = localPages[pageKey];

  return (
    <main className="devora-page devora-immersive-page local-page">
      <section className="devora-dark-section local-hero">
        <div className="local-hero-backdrop">
          <CodeAtmosphere />
          <div className="local-hero-glow local-hero-glow-violet" />
          <div className="local-hero-glow local-hero-glow-cyan" />
        </div>

        <div className="local-hero-content">
          <span className="local-eyebrow-pill">
            {page.title}
          </span>
          <h1 className="local-hero-title">
            {page.h1}
          </h1>
          <h2 className="local-hero-subtitle">
            {page.subtitle}
          </h2>
          <p className="local-hero-lead">
            {page.intro}
          </p>
          <p className="local-hero-note">
            Site starter à <strong>600€ HT</strong>, page de vente à
            <strong> 300€ HT</strong> et site complet à
            <strong> 1200€ HT</strong>.
          </p>
          <div className="local-actions">
            <TrackedLink
              href="/contact"
              eventName={`cta_local_${page.slug}_contact`}
              eventLabel={`Contact ${page.city}`}
              className="local-cta local-cta-primary"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/offre"
              className="local-cta local-cta-secondary"
            >
              Voir les offres
            </Link>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="local-grid local-grid-two">
          <div className="local-card">
            <p className="local-kicker">
              Contexte local
            </p>
            <h2 className="local-section-title">
              Un site doit parler à vos clients {page.label}.
            </h2>
            <p className="local-copy">{page.localAngle}</p>
          </div>
          <div className="local-card">
            <p className="local-kicker">
              Exemples de besoins
            </p>
            <h2 className="local-section-title">
              Des cas simples, très concrets.
            </h2>
            <div className="local-list">
              {page.examples.map((example) => (
                <div key={example} className="local-list-item">
                  <span>✓ </span>
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="local-card local-card-wide">
          <div className="local-split">
            <div>
              <p className="local-kicker">
                Prestations
              </p>
              <h2 className="local-section-title">
                Ce que DEVORA peut construire pour vous.
              </h2>
              <p className="local-copy">
                L&apos;objectif reste le même : une vitrine claire, responsive et
                crédible qui aide vos visiteurs à vous contacter.
              </p>
            </div>
            <div className="local-list local-list-two">
              {services.map((service) => (
                <div key={service} className="local-list-item">
                  <span>✓ </span>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="local-container">
          <div className="local-section-heading">
            <p className="local-kicker">
              Offres utiles {page.label}
            </p>
            <h2 className="local-section-title">
              Une grille simple pour choisir.
            </h2>
          </div>
          <div className="local-grid local-grid-three local-offset">
            {creationOffers.map((offer) => (
              <article key={offer.title} className="local-card local-offer-card">
                <p className="local-kicker">
                  {offer.tag}
                </p>
                <h3>
                  {offer.title}
                </h3>
                <p className="local-price">
                  {offer.price}
                </p>
                <p className="local-small-copy">
                  {offer.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="local-container local-container-narrow">
          <div className="local-section-heading">
            <p className="local-kicker">
              FAQ locale
            </p>
            <h2 className="local-section-title">
              Questions fréquentes.
            </h2>
          </div>
          <div className="local-stack local-offset">
            {localFaqs.map((item) => (
              <article key={item.question} className="local-card local-faq-card">
                <h3>{item.question}</h3>
                <p className="local-copy">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="local-section local-section-final">
        <div className="local-card local-card-wide local-section-heading">
          <p className="local-kicker">
            Maillage local
          </p>
          <h2 className="local-section-title">
            Autres zones d&apos;intervention.
          </h2>
          <div className="local-zone-links">
            {zoneLinks.map((zone) => (
              <Link
                key={zone.href}
                href={zone.href}
                className="local-zone-link"
              >
                {zone.label}
              </Link>
            ))}
          </div>
          <div className="local-final-action">
            <TrackedLink
              href="/contact"
              eventName={`cta_local_${page.slug}_final`}
              eventLabel={`Final ${page.city}`}
              className="local-cta local-cta-primary"
            >
              Parler de mon projet {page.label}
            </TrackedLink>
          </div>
        </div>
      </section>
    </main>
  );
}
