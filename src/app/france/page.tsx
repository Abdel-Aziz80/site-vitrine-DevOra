import Link from "next/link";
import type { Metadata } from "next";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import TrackedLink from "@/components/TrackedLink";
import { creationOffers } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Création de site internet à distance en France",
  description:
    "Création de sites premium, pages de vente et outils métier à distance. DEVORA accompagne les professionnels depuis la Normandie.",
  alternates: { canonical: "/france" },
};

const remoteBenefits = [
  "Cadrage clair par email, téléphone ou visio",
  "Structure du site validée avant réalisation",
  "Devis transparent avant de commencer",
  "Suivi simple des priorités et contenus",
  "Site responsive et base SEO propre",
  "Accompagnement possible après mise en ligne",
];

export default function FrancePage() {
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
            Création de site internet à distance
          </span>
          <h1 className="local-hero-title">
            Une plateforme claire, même si le cadrage se fait à distance.
          </h1>
          <p className="local-hero-lead">
            Basée en Normandie, DEVORA accompagne aussi des professionnels et
            petites entreprises partout en France quand le besoin est bien cadré.
          </p>
          <p className="local-hero-note">
            Les tarifs restent cohérents : page de vente à <strong>300€ HT</strong>,
            site starter à <strong>600€ HT</strong> et site vitrine
            complet à <strong>1200€ HT</strong>.
          </p>
          <div className="local-actions">
            <TrackedLink
              href="/contact"
              eventName="cta_france_contact"
              eventLabel="France contact"
              className="local-cta local-cta-primary"
            >
              Demander un cadrage
            </TrackedLink>
            <Link
              href="/portfolio"
              className="local-cta local-cta-secondary"
            >
              Voir les études de cas
            </Link>
          </div>
        </div>
      </section>

      <section className="local-section">
        <div className="local-grid local-grid-two">
          <div className="local-card">
            <p className="local-kicker">
              Travail à distance
            </p>
            <h2 className="local-section-title">
              Un fonctionnement simple sans rendez-vous physique.
            </h2>
            <p className="local-copy">
              Un projet web peut avancer efficacement à distance si les échanges
              sont clairs. On définit vos services, votre cible, votre zone, vos
              contenus et les priorités avant de lancer la réalisation.
            </p>
          </div>
          <div className="local-card">
            <p className="local-kicker">
              Avantages
            </p>
            <h2 className="local-section-title">
              Une base pro sans complexité.
            </h2>
            <div className="local-list">
              {remoteBenefits.map((benefit) => (
                <div key={benefit} className="local-list-item">
                  <span>✓ </span>
                  {benefit}
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
              Offres disponibles
            </p>
            <h2 className="local-section-title">
              Les mêmes repères, même à distance.
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

      <section className="local-section local-section-final">
        <div className="devora-dark-section local-final-panel">
          <h2>
            Vous êtes hors Normandie ?
          </h2>
          <p>
            Décrivez votre activité et votre besoin. DEVORA vous dira rapidement
            si un accompagnement à distance est adapté.
          </p>
          <div className="local-actions">
            <TrackedLink
              href="/contact"
              eventName="cta_france_final"
              eventLabel="France final"
              className="local-cta local-cta-primary"
            >
              Échanger sur mon projet
            </TrackedLink>
            <Link
              href="/normandie"
              className="local-cta local-cta-secondary"
            >
              Voir la page Normandie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
