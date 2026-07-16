import Image from "next/image";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import { GsapAnimations } from "@/components/GsapAnimations";
import { navigation, processSteps, services, siteUrl } from "@/data/site";
import { portfolioProjects } from "@/lib/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DEVORA",
  url: siteUrl,
  image: `${siteUrl}/assets/devora-logo.png`,
  description:
    "Plateforme tech spécialisée en dashboards business, SaaS internes, automatisations IA, sécurité défensive et interfaces premium.",
  areaServed: "France",
  slogan: "Plateforme business/dev/IA pour projets ambitieux.",
  serviceType: [
    "Plateforme IA business",
    "Dashboard business",
    "Application SaaS",
    "Automatisation IA",
    "Sécurité défensive locale",
  ],
  sameAs: [siteUrl],
};

export default function Home() {
  return (
    <>
      <GsapAnimations />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="site-shell">
        <header className="site-header" data-reveal>
          <a className="brand" href="#accueil" aria-label="Retour à l'accueil DEVORA">
            <span className="brand-logo">
              <Image src="/assets/devora-hexagon.png" alt="" width={34} height={34} priority />
            </span>
            <span>DEVORA</span>
          </a>
          <nav aria-label="Navigation principale">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="header-cta" href="#contact" data-magnetic>
            Démo privée
          </a>
        </header>

        <main id="accueil">
          <section className="hero-section">
            <CodeAtmosphere />
            <div className="hero-content" data-reveal>
              <p className="eyebrow">Plateforme business/dev/IA & sécurité défensive</p>
              <h1>DEVORA construit des outils IA, dashboards et systèmes de pilotage qui transforment le business en avantage opérationnel.</h1>
              <p className="hero-lead">
                Une suite premium pour cadrer, vendre, automatiser et surveiller :
                plateformes web, cockpits métier, copilotes IA, SaaS internes et Early Access
                DEVORA Sentinel pour projets tech, TPE/PME, commerces et équipes qui veulent
                avancer sans exposer leurs systèmes internes.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="primary-cta" data-magnetic>
                  Demander une démo privée
                </a>
                <a href="#portfolio" className="secondary-cta">
                  Explorer les produits DEVORA
                </a>
              </div>
              <div className="trust-strip" aria-label="Domaines d'intervention DEVORA">
                <span>Next.js</span>
                <span>DEVORA Sentinel</span>
                <span>IA locale</span>
                <span>Dashboards métier</span>
                <span>Conversion</span>
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
                  <span>Workflows IA</span>
                  <strong>18</strong>
                </div>
                <div>
                  <span>Score UX/SEO</span>
                  <strong>96</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="section intro-band" aria-labelledby="positionnement" data-reveal>
            <div>
              <p className="eyebrow">Positionnement</p>
              <h2 id="positionnement">Une plateforme claire en public, précise en démo privée, robuste côté produit.</h2>
            </div>
            <p>
              DEVORA montre uniquement ce qui sert la confiance et la conversion. Les vues publiques
              restent contrôlées ; les workflows détaillés, automatisations, runtimes et mécaniques
              avancées sont réservés aux rendez-vous et aux démonstrations privées.
            </p>
          </section>

          <section className="section intro-band" aria-labelledby="ia-locale" data-reveal>
            <div>
              <p className="eyebrow">R&D IA locale</p>
              <h2 id="ia-locale">DEVORA développe aussi une IA locale, privée et généraliste.</h2>
            </div>
            <p>
              Le chantier IA reste volontairement filtré publiquement. L&apos;objectif est de construire
              une base local-first, exploitable pour le business, le développement, les workflows et
              l&apos;assistance métier, sans publier les prompts, l&apos;orchestration ou la logique profonde.
            </p>
          </section>

          <section className="section" id="expertises" aria-labelledby="expertises-title">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">Expertises</p>
              <h2 id="expertises-title">Des modules pensés pour les usages réels, pas pour décorer une page.</h2>
              <p>
                Un même niveau d&apos;exigence pour une plateforme, un dashboard interne, un SaaS,
                un cockpit Sentinel ou une automatisation IA : lisibilité, vitesse, crédibilité et conversion.
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
              <p className="eyebrow">Produits contrôlés</p>
              <h2 id="portfolio-title">Des produits internes concrets, visibles sans dévoiler le système.</h2>
              <p>
                DEVORA fonctionne comme une vitrine maîtrisée : captures partielles, mockups premium,
                dashboards sélectionnés et extraits safe. Les démos détaillées se font en rendez-vous.
              </p>
            </div>
            <div className="project-grid">
              {portfolioProjects.map((project) => (
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
                      <div className="project-real-shot-placeholder">
                        <span>Capture non publiée</span>
                        <strong>Produit interne</strong>
                      </div>
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
                    <div className="tag-row" aria-label={`Stack technique ${project.title}`}>
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a className="secondary-cta" href={`/portfolio/${project.slug}`}>
                        Voir l&apos;étude de cas
                      </a>
                      <a className="secondary-cta" href="#contact">
                        Projet similaire
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section proof-section" aria-labelledby="credibilite-title">
            <div className="proof-copy" data-reveal>
              <p className="eyebrow">Crédibilité</p>
              <h2 id="credibilite-title">Une présence premium, pilotée par des objectifs mesurables.</h2>
              <p>
                L&apos;esthétique sert la confiance. La structure sert le référencement. Les CTA servent
                la prise de contact, l&apos;Early Access et la démo privée. Les animations donnent du rythme
                sans masquer la valeur produit.
              </p>
            </div>
            <div className="proof-metrics" data-reveal>
              <div>
                <strong>SEO</strong>
                <span>Metadata, JSON-LD, sitemap, robots, hiérarchie Hn.</span>
              </div>
              <div>
                <strong>UX</strong>
                <span>Sections courtes, CTA visibles, responsive mobile/tablette/desktop.</span>
              </div>
              <div>
                <strong>Produit</strong>
                <span>Next.js App Router, TypeScript, Tailwind CSS, GSAP, dashboards et intégrations.</span>
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

          <section className="section contact-section" id="contact" aria-labelledby="contact-title" data-reveal>
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Besoin d&apos;un outil, d&apos;une démo Sentinel ou d&apos;un cadrage IA ?</h2>
              <p>
                DEVORA peut intervenir sur une plateforme, une refonte, un dashboard, un outil métier,
                une automatisation IA, une base SaaS ou une démo privée DEVORA Sentinel. Le premier
                échange sert à cadrer l&apos;objectif, les contraintes et le meilleur chemin de livraison.
              </p>
            </div>
            <div className="contact-panel">
              <span>Réponse orientée décision</span>
              <a className="primary-cta" href="mailto:contact@devora-freelance.fr" data-magnetic>
                contact@devora-freelance.fr
              </a>
              <p>Brief, audit rapide, cadrage technique ou estimation de faisabilité.</p>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <a className="brand" href="#accueil" aria-label="DEVORA">
            <span className="brand-logo">
              <Image src="/assets/devora-hexagon.png" alt="" width={34} height={34} />
            </span>
            <span>DEVORA</span>
          </a>
          <p>Plateforme IA, SaaS, sécurité défensive et dashboards business.</p>
          <p className="copyright">© 2026 DEVORA. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}
