import Image from "next/image";
import Link from "next/link";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import { GsapAnimations } from "@/components/GsapAnimations";
import PrivateProjectVeil from "@/components/PrivateProjectVeil";
import { processSteps, services, siteUrl } from "@/data/site";
import { portfolioProjects } from "@/lib/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DEVORA",
  url: siteUrl,
  image: `${siteUrl}/assets/devora-logo.png`,
  description:
    "Plateforme premium qui aide les entreprises à mieux présenter leur offre, suivre leurs priorités, automatiser les tâches répétitives et protéger certains outils internes.",
  areaServed: "France",
  slogan: "Des outils clairs pour vendre, piloter et gagner du temps.",
  serviceType: [
    "Sites et pages de conversion",
    "Tableaux de pilotage métier",
    "Automatisation business",
    "Outils internes privés",
    "Surveillance défensive locale",
  ],
  sameAs: [siteUrl],
};

const featuredPortfolioProjects = portfolioProjects.slice(0, 2);

export default function Home() {
  return (
    <>
      <GsapAnimations />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="site-shell">
        <main id="accueil">
          <section className="hero-section">
            <CodeAtmosphere />
            <div className="hero-content" data-reveal>
              <p className="eyebrow">Plateforme business, IA utile et outils privés</p>
              <h1>DEVORA crée des outils clairs pour vendre mieux, suivre vos priorités et gagner du temps.</h1>
              <p className="hero-lead">
                DEVORA aide les indépendants, commerces, TPE, PME et projets tech à transformer
                leurs idées en interfaces utiles : pages de vente, tableaux de pilotage,
                automatisations, outils internes et DEVORA Sentinel pour surveiller des signaux
                sensibles sans tout exposer publiquement.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="primary-cta" data-magnetic>
                  Demander un cadrage
                </Link>
                <Link href="/portfolio" className="secondary-cta">
                  Voir les projets
                </Link>
              </div>
              <div className="trust-strip" aria-label="Domaines d'intervention DEVORA">
                <span>Sites premium</span>
                <span>DEVORA Sentinel</span>
                <span>IA locale utile</span>
                <span>Tableaux métier</span>
                <span>Gain de temps</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal data-float>
              <Image
                src="/assets/devora-logo.png"
                alt="Logo DEVORA, identité premium bleu cyan violet magenta"
                width={900}
                height={600}
                priority
                className="hero-logo"
              />
              <div className="hero-dashboard" aria-hidden="true">
                <div>
                  <span>Conversion</span>
                  <strong>+31%</strong>
                </div>
                <div>
                  <span>Tâches gagnées</span>
                  <strong>18</strong>
                </div>
                <div>
                  <span>Score UX/SEO</span>
                  <strong>96</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="section positioning-grid" aria-label="Positionnement DEVORA" data-reveal>
            <article className="positioning-card">
              <p className="eyebrow">Positionnement</p>
              <h2>Une vitrine claire en public, des démonstrations détaillées en privé.</h2>
              <p>
                Le site présente les bénéfices, des captures choisies et des cas d&apos;usage compréhensibles.
                Les détails sensibles restent réservés aux rendez-vous pour garder un discours crédible,
                sûr et adapté aux produits DEVORA.
              </p>
            </article>
            <article className="positioning-card">
              <p className="eyebrow">IA locale</p>
              <h2>Une IA pensée pour aider le métier, pas pour faire de la magie.</h2>
              <p>
                DEVORA explore des assistants capables d&apos;aider à trier des demandes, préparer des réponses,
                suivre des priorités ou analyser des informations, avec une logique utile, maîtrisée et
                respectueuse des données.
              </p>
            </article>
          </section>

          <section className="section" id="expertises" aria-labelledby="expertises-title">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Solutions</p>
              <h2 id="expertises-title">Des solutions conçues pour résoudre un problème concret.</h2>
              <p>
                Chaque projet doit répondre à une question simple : qu&apos;est-ce que le client comprend
                mieux, fait plus vite ou pilote plus facilement après la mise en place ?
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title} data-reveal>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Projets DEVORA</p>
              <h2 id="portfolio-title">Des exemples concrets, montrés sans dévoiler les parties sensibles.</h2>
              <p>
                Certaines interfaces sont visibles, d&apos;autres restent volontairement partielles. Ce choix
                protège les outils internes, tout en montrant clairement le problème traité et le bénéfice
                pour l&apos;utilisateur.
              </p>
            </div>
            <div className="project-grid">
              {featuredPortfolioProjects.map((project) => (
                <article className="project-card" key={project.slug} data-project-card>
                  <div className="project-real-shot">
                    {project.screenshots?.[0] ? (
                      <Image
                        src={project.screenshots[0].src}
                        alt={project.screenshots[0].alt}
                        width={1440}
                        height={1000}
                        className="project-real-shot-img"
                      />
                    ) : (
                      <PrivateProjectVeil
                        title="Produit interne protégé"
                        description="Aperçu volontairement limité. La démonstration complète se fait en privé."
                      />
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-kicker">
                      <span>{project.type}</span>
                      <span>{project.availability}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-slogan">{project.positioning}</p>
                    <p>{project.shortDescription}</p>
                    <div className="business-use">
                      <strong>Fonctions concrètes</strong>
                      <span>{project.features.slice(0, 3).join(" · ")}</span>
                    </div>
                    {project.launchOffer ? (
                      <div className="business-use sentinel-offer-card">
                        <strong>{project.launchOffer.title}</strong>
                        <span>{project.launchOffer.text}</span>
                        <a className="primary-cta" href={project.launchOffer.href} data-magnetic>
                          {project.launchOffer.cta}
                        </a>
                      </div>
                    ) : null}
                    <div className="tag-row" aria-label={`Repères projet ${project.title}`}>
                      {project.services.slice(0, 4).map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a className="secondary-cta" href={`/portfolio/${project.slug}`}>
                        Voir l&apos;étude de cas
                      </a>
                      <Link className="secondary-cta" href="/contact">
                        Demander un cadrage
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="portfolio-more" data-reveal>
              <Link href="/portfolio" className="primary-cta">
                Voir tout le portfolio
              </Link>
              <Link href="/simulateur" className="secondary-cta">
                Préqualifier mon besoin
              </Link>
            </div>
          </section>

          <section className="section proof-section" aria-labelledby="credibilite-title">
            <div className="proof-copy" data-reveal>
              <p className="eyebrow">Crédibilité</p>
              <h2 id="credibilite-title">Une présence premium, mais surtout utile au business.</h2>
              <p>
                Le design donne confiance, les textes expliquent clairement, les boutons facilitent le
                contact et les pages aident Google à comprendre l&apos;activité. Rien n&apos;est là uniquement
                pour faire joli.
              </p>
            </div>
            <div className="proof-metrics" data-reveal>
              <div>
                <strong>SEO</strong>
                <span>Pages structurées, titres clairs, descriptions utiles et maillage interne.</span>
              </div>
              <div>
                <strong>UX</strong>
                <span>Sections lisibles, boutons visibles et parcours simple sur mobile comme sur desktop.</span>
              </div>
              <div>
                <strong>Business</strong>
                <span>Solutions pensées pour gagner du temps, rassurer et prioriser les bonnes actions.</span>
              </div>
            </div>
          </section>

          <section className="section" id="methode" aria-labelledby="methode-title">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Méthode</p>
              <h2 id="methode-title">Un processus lisible, du besoin à la mise en ligne.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((item) => (
                <article className="process-step" key={item.step} data-reveal>
                  <span>{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <i data-pulse-line />
                </article>
              ))}
            </div>
          </section>

          <section
            className="section contact-section home-final-cta"
            id="contact"
            aria-labelledby="contact-title"
            data-reveal
          >
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Vous avez un besoin à clarifier ou un outil à construire ?</h2>
              <p>
                DEVORA peut vous aider à créer une page qui vend, un espace de suivi, une automatisation,
                un outil métier ou une demande d&apos;accès Sentinel. Le premier échange sert à comprendre
                le problème et choisir la solution la plus utile.
              </p>
            </div>
            <div className="contact-panel">
              <span>Réponse orientée décision</span>
              <Link className="primary-cta" href="/contact" data-magnetic>
                Demander un cadrage
              </Link>
              <a className="secondary-cta" href="mailto:contact@devora-freelance.fr">
                contact@devora-freelance.fr
              </a>
              <p>Expliquez le contexte, l&apos;objectif et les blocages. DEVORA répond avec une orientation claire.</p>
            </div>
          </section>
        </main>

      </div>
    </>
  );
}
