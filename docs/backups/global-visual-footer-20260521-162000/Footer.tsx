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
    <footer className="devora-footer relative overflow-hidden border-t border-white/10 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#2563EB]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#7C3AED]/18 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-[#22D3EE]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.055] p-2 pr-4 shadow-2xl shadow-[#061A35]/25 transition hover:border-[#22D3EE]/35 hover:bg-white/[0.08]"
            >
              <Image
                src="/assets/devora-hexagon.png"
                alt=""
                width={42}
                height={42}
                className="h-10 w-10 rounded-xl object-contain"
              />
              <span className="text-sm font-black tracking-wide">DEVORA</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">
              Plateforme premium pour créer des sites, outils métier, automatisations
              utiles, interfaces business et systèmes locaux comme DEVORA Sentinel.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-5 inline-flex rounded-full border border-[#22D3EE]/25 bg-[#22D3EE]/10 px-4 py-2 text-sm font-bold text-[#A5F3FC] transition hover:border-[#22D3EE]/55 hover:bg-[#22D3EE]/16 hover:text-white"
            >
              {contactEmail}
            </a>
          </div>

          <nav aria-label="Liens DEVORA" className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#67E8F9]">
              Plateforme
            </p>
            <div className="grid gap-3 text-sm text-white/68">
              {productLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Liens entreprise" className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#67E8F9]">
              DEVORA
            </p>
            <div className="grid gap-3 text-sm text-white/68">
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.055] p-5 shadow-2xl shadow-[#061A35]/20 backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#67E8F9]">
              Réseaux
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const isPending = link.href.startsWith("#");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isPending ? undefined : "_blank"}
                    rel={isPending ? undefined : "noreferrer"}
                    aria-disabled={isPending}
                    className="rounded-full border border-white/12 bg-white/[0.055] px-3 py-2 text-xs font-bold text-white/72 transition hover:border-[#22D3EE]/45 hover:bg-[#22D3EE]/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <p className="mt-5 text-sm leading-6 text-white/62">
              Une demande, un lancement, une démo privée Sentinel ou une refonte à
              cadrer proprement ?
            </p>

            <TrackedLink
              href="/contact"
              eventName="cta_footer_contact"
              eventLabel="Footer contact"
              className="mt-5 inline-flex w-full justify-center rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#2563EB]/25 transition hover:scale-[1.01] hover:brightness-110"
            >
              Parler à DEVORA
            </TrackedLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 DEVORA. Tous droits réservés.</p>
          <p>Vitrine contrôlée : les démonstrations détaillées restent privées.</p>
        </div>
      </div>
    </footer>
  );
}
