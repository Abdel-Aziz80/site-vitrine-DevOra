import Image from "next/image";

const activity = [
  { label: "Demandes plus qualifiees", value: "+28%", tone: "text-[#22D3EE]" },
  { label: "Clarte SEO", value: "94", tone: "text-[#A78BFA]" },
  { label: "Taches simplifiees", value: "12", tone: "text-[#F0ABFC]" },
];

const pipeline = [
  "Page de vente locale",
  "Tableau de suivi metier",
  "Automatisation utile",
  "Pilotage e-commerce",
];

export default function HeroShowcase() {
  return (
    <div className="devora-glow-border devora-float devora-reveal devora-reveal-delay-2 relative rounded-[2rem]">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/16 bg-[#071426] p-4 shadow-2xl shadow-[#000]/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.34),transparent_34%),radial-gradient(circle_at_50%_70%,rgba(247,37,217,0.14),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-[#030711] to-transparent" />

        <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/15 bg-[#030711]">
                <Image
                  src="/assets/devora-hexagon.png"
                  alt="Logo DEVORA"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Plateforme DEVORA</p>
                <p className="text-xs text-white/55">Outils business intelligents</p>
              </div>
            </div>
            <span className="rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-3 py-1 text-xs font-bold text-[#67E8F9]">
              Concept prive
            </span>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl border border-white/12 bg-[#0A1A33]/84 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#22D3EE]">
                    Parcours commercial
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold text-white">
                    Vendre, suivre, automatiser
                  </h2>
                </div>
                <p className="rounded-2xl bg-white/8 px-3 py-2 text-right text-xs font-semibold text-white/70">
                  Site
                  <br />
                  Outil
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {pipeline.map((item, index) => (
                  <div key={item} className="grid grid-cols-[34px_1fr_auto] items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-[#2563EB] via-[#7C3AED] to-[#22D3EE] text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white/82">{item}</span>
                    <span className="h-2 w-16 rounded-full bg-linear-to-r from-[#22D3EE] via-[#7C3AED] to-[#F725D9]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {activity.map((item) => (
                <div key={item.label} className="devora-hover-lift rounded-3xl border border-white/12 bg-white/[0.07] p-5">
                  <p className="text-sm font-medium text-white/55">{item.label}</p>
                  <p className={`mt-2 text-4xl font-black ${item.tone}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-white/10 bg-[#030711]/75 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-white">Interface métier</p>
                <p className="mt-1 text-xs text-white/55">
                  SEO, devis, ventes, automatisation, suivi.
                </p>
              </div>
              <div className="flex -space-x-2">
                {["#22D3EE", "#7C3AED", "#F725D9", "#2563EB"].map((color) => (
                  <span
                    key={color}
                    className="h-9 w-9 rounded-full border-2 border-[#030711]"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
