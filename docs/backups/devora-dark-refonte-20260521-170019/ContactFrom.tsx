"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import CodeAtmosphere from "@/components/CodeAtmosphere";
import {
  contactEmail,
  reassuranceBadges,
  socialLinks,
} from "@/lib/siteContent";
import { trackConversion } from "@/lib/tracking";

export default function ContactFrom() {
  // Récupère le résumé du devis passé via l'URL et le décode pour pré-remplir le message.
  const searchParams = useSearchParams();
  const devisEncoded = searchParams.get("devis") ?? "";
  const devisDecoded = decodeURIComponent(devisEncoded);
  return (
    <main className="devora-page devora-immersive-page min-h-screen">
      <section className="devora-dark-section relative overflow-hidden px-6 py-20 text-center text-white">
        <CodeAtmosphere />
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            Contact
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Expliquez simplement votre besoin. DEVORA vous aide à choisir la bonne solution.
          </h1>

          <p className="mt-6 text-lg text-white/72 leading-8 max-w-3xl mx-auto">
            Site plus crédible, page de vente, outil de suivi, automatisation,
            e-commerce, Sentinel ou visibilité Google : quelques lignes suffisent
            pour recevoir une première orientation claire.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {reassuranceBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/78 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid items-start gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#061A35]">
              Votre demande
            </h2>

            <p className="mt-4 text-[#475569] leading-7">
              Plus votre message est concret, plus la réponse sera utile :
              activité, objectif, problème actuel, délai souhaité et budget si vous
              avez déjà une enveloppe.
            </p>

            <form
              action="https://formspree.io/f/xdaypbde"
              method="POST"
              onSubmit={() =>
                trackConversion({
                  name: "form_contact_submit",
                  label: devisDecoded ? "Avec devis simulateur" : "Contact direct",
                  page: window.location.pathname,
                })
              }
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande depuis DEVORA"
              />
              <div className="hidden">
                <label htmlFor="website">Site Web</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  autoComplete="off"
                />
              </div>
              {devisDecoded && (
                <input
                  type="hidden"
                  name="devis"
                  value={devisDecoded}
                />
              )}
              <div>
                <label
                  htmlFor="nom"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  required
                  placeholder="Votre nom ou entreprise"
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              {/* Sujet simplifié : non obligatoire, incite à envoyer rapidement */}
              <div>
                <label
                  htmlFor="sujet"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Sujet (optionnel)
                </label>
                <input
                  id="sujet"
                  name="sujet"
                  type="text"
                  placeholder="Site starter, outil de suivi, automatisation, e-commerce, visibilité Google..."
                  className="w-full rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#1E293B]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Exemple : je veux mieux présenter mon offre, suivre mes demandes, automatiser une tâche ou demander un accès Sentinel..."
                  className="w-full resize-none rounded-2xl border border-[#061A35]/10 bg-white px-4 py-3 text-[#061A35] outline-none transition focus:border-[#173C91] focus:ring-2 focus:ring-[#B8F3ED]"
                  required
                  defaultValue={devisDecoded}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-linear-to-r from-[#061A35] via-[#173C91] to-[#2DBEB5] px-8 py-4 shadow-sm font-semibold text-white transition hover:brightness-110"
              >
                Envoyer ma demande à DEVORA
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#061A35]">
                Comment se passe la suite ?
              </h2>

              <div className="mt-6 space-y-5 text-[#475569] leading-7">
                <p>
                  1. Vous expliquez votre besoin, votre activité et vos objectifs.
                </p>
                <p>
                  2. DEVORA répond sous 24 à 48h ouvrées avec une première
                  orientation claire.
                </p>
                <p>
                  3. Si c’est cohérent, on cadre les pages, les écrans utiles,
                  le délai et le budget.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#061A35]">
                Repères de budget
              </h2>

              <div className="mt-5 grid gap-3 text-sm text-[#334155]">
                <p className="rounded-2xl bg-[#F4FAFC] p-4">
                  Landing page : <strong>300€ HT</strong>
                </p>
                <p className="rounded-2xl bg-[#F4FAFC] p-4">
                  Site starter : <strong>600€ HT</strong>
                </p>
                <p className="rounded-2xl bg-[#F4FAFC] p-4">
                  Outil métier, suivi ou automatisation : <strong>sur devis</strong>
                </p>
                <p className="rounded-2xl bg-[#F4FAFC] p-4">
                  Interventions rapides : <strong>50€ / 100€ / 150€ HT</strong>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-[#061A35]/10 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-bold text-[#061A35]">
                Me contacter autrement
              </h2>

              <div className="mt-6 grid gap-3 text-sm font-medium">
                <a
                  href={`mailto:${contactEmail}`}
                  className="rounded-2xl border border-[#22D3EE]/15 bg-[#EFF6FF] p-4 text-[#173C91] transition hover:border-[#22D3EE]/35 hover:bg-[#ECFEFF]"
                >
                  {contactEmail}
                </a>
                {socialLinks.map((link) => {
                  const isPending = link.href.startsWith("#");
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isPending ? undefined : "_blank"}
                      rel={isPending ? undefined : "noreferrer"}
                      aria-disabled={isPending}
                      className="rounded-2xl border border-[#22D3EE]/15 bg-[#EFF6FF] p-4 text-[#173C91] transition hover:border-[#22D3EE]/35 hover:bg-[#ECFEFF]"
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="devora-dark-section rounded-3xl border border-white/10 p-8 text-white shadow-xl shadow-[#061A35]/20 md:p-10">
              <h2 className="text-2xl font-bold">
                Pas sûr de votre besoin ?
              </h2>
              <p className="mt-4 leading-7 text-white/75">
                Utilisez le simulateur DEVORA pour préqualifier le besoin, puis
                envoyez le résumé dans le formulaire.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/simulateur"
                  className="rounded-full bg-linear-to-r from-[#2563EB] via-[#7C3AED] to-[#22D3EE] px-6 py-3 text-center font-semibold text-white shadow-lg shadow-[#2563EB]/25 transition hover:brightness-110"
                >
                  Estimer mon projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
