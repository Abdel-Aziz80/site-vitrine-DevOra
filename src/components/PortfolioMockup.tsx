import type { ReactNode } from "react";
import type { PortfolioProject } from "@/lib/portfolio";

const chartHeights = [48, 62, 54, 72, 66, 88, 76, 94];
const fluxNodes = [
  { label: "Lead", x: "14%", y: "30%" },
  { label: "IA", x: "42%", y: "18%" },
  { label: "Client", x: "72%", y: "34%" },
  { label: "SEO", x: "28%", y: "70%" },
  { label: "Action", x: "62%", y: "68%" },
];

function Frame({
  project,
  children,
  tone = "dark",
}: {
  project: PortfolioProject;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div className={`portfolio-frame portfolio-frame-${tone} rounded-[2rem] border p-3 shadow-2xl`}>
      <div className="overflow-hidden rounded-[1.5rem]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#050A16]/86 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#34D399]" />
          </div>
          <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-semibold text-white/72">
            {project.type}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="devora-hover-lift rounded-2xl border border-white/12 bg-white/[0.075] p-4">
      <p className="text-xs font-semibold text-white/55">{label}</p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function CommandCenter({ project }: { project: PortfolioProject }) {
  return (
    <Frame project={project}>
      <div className="command-center-scene relative min-h-[470px] overflow-hidden bg-[#040812] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_24%,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_76%_70%,rgba(124,58,237,0.22),transparent_24rem)]" />
        <div className="absolute left-7 top-10 h-56 w-40 rounded-t-full bg-[#02040A] shadow-[0_0_70px_rgba(34,211,238,0.20)]">
          <div className="absolute left-1/2 top-8 h-24 w-28 -translate-x-1/2 rounded-t-full border-t-2 border-[#67E8F9]/55 bg-[#030711]" />
          <div className="absolute inset-x-9 bottom-0 h-40 rounded-t-[2.5rem] border border-white/8 bg-linear-to-b from-[#101827] to-[#02040A]" />
          <div className="absolute left-4 top-14 h-36 w-px bg-[#22D3EE]/55 blur-[1px]" />
          <div className="absolute right-6 top-20 h-28 w-px bg-[#F59E0B]/45 blur-[1px]" />
        </div>

        <div className="relative ml-auto grid max-w-[72%] gap-4">
          <div className="rounded-3xl border border-[#22D3EE]/18 bg-[#061426]/78 p-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#67E8F9]">
                Carte des priorites
              </p>
              <span className="rounded-full bg-[#22D3EE]/10 px-3 py-1 text-xs font-bold text-[#67E8F9]">
                IA prete
              </span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <MiniMetric key={metric.label} {...metric} />
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4">
              <div className="h-44 rounded-2xl border border-[#22D3EE]/18 bg-[#020711] p-4">
                <div className="relative mx-auto h-full max-w-sm">
                  <span className="absolute left-[42%] top-[28%] h-24 w-24 rounded-full border border-[#22D3EE]/40" />
                  <span className="absolute left-[36%] top-[18%] h-40 w-40 rounded-full border border-[#7C3AED]/25" />
                  <span className="absolute left-[49%] top-[44%] h-4 w-4 rounded-full bg-[#22D3EE] shadow-[0_0_28px_rgba(34,211,238,0.8)]" />
                  {[18, 38, 66, 84].map((left, index) => (
                    <span
                      key={left}
                      className="absolute top-[52%] h-px bg-[#22D3EE]/40"
                      style={{ left: `${left}%`, width: `${index % 2 ? 22 : 34}%`, transform: `rotate(${index % 2 ? -18 : 18}deg)` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-4">
              <p className="font-bold text-white">Actions a suivre</p>
              <div className="mt-4 space-y-3">
                {project.features.slice(0, 4).map((feature, index) => (
                  <div key={feature} className="rounded-2xl bg-[#020711]/70 p-3 text-sm text-white/72">
                    <span className="mr-2 text-[#67E8F9]">0{index + 1}</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function AtlasCommerce({ project }: { project: PortfolioProject }) {
  return (
    <Frame project={project}>
      <div className="atlas-scene min-h-[470px] bg-linear-to-br from-[#071126] via-[#0A1630] to-[#160F2D] p-5 text-white">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#67E8F9]">
                Lecture commerce
              </p>
              <h3 className="mt-2 text-3xl font-black text-white">
                Atlas Commerce OS
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/12 bg-white/[0.075] p-4 shadow-sm">
                  <p className="text-xs font-semibold text-white/58">{metric.label}</p>
                  <p className="mt-2 text-2xl font-black text-white">{metric.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/[0.065] p-5 shadow-xl shadow-[#2563EB]/8">
              <div className="flex h-40 items-end gap-2">
                {chartHeights.map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="flex-1 rounded-t-xl bg-linear-to-t from-[#2563EB] via-[#22D3EE] to-[#A78BFA]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/12 bg-white/[0.065] p-5 shadow-xl shadow-[#7C3AED]/8">
              <div className="flex items-center justify-between">
                <p className="font-black text-white">Canaux de vente</p>
                <span className="rounded-full bg-[#22D3EE]/10 px-3 py-1 text-xs font-bold text-[#67E8F9]">
                  Actif
                </span>
              </div>
              <div className="mt-5 grid grid-cols-[120px_1fr] gap-5">
                <div className="h-28 w-28 rounded-full bg-[conic-gradient(from_120deg,#22D3EE,#7C3AED,#F725D9,#2563EB,#22D3EE)] p-4">
                  <div className="h-full rounded-full bg-[#071126]" />
                </div>
                <div className="space-y-3">
                  {["Google", "Publicite", "Email", "Direct"].map((item, index) => (
                    <div key={item} className="grid grid-cols-[68px_1fr] items-center gap-3 text-sm">
                      <span className="font-semibold text-white/68">{item}</span>
                      <span className="h-2 rounded-full bg-linear-to-r from-[#22D3EE] to-[#7C3AED]" style={{ width: `${95 - index * 14}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {project.features.slice(0, 4).map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/12 bg-white/[0.07] p-4 text-sm font-semibold text-white/72">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function FluxPilot({ project }: { project: PortfolioProject }) {
  return (
    <Frame project={project}>
      <div className="flux-scene relative min-h-[470px] overflow-hidden bg-[#070615] p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(247,37,217,0.20),transparent_22rem),radial-gradient(circle_at_28%_18%,rgba(124,58,237,0.32),transparent_26rem),radial-gradient(circle_at_82%_72%,rgba(34,211,238,0.18),transparent_24rem)]" />
        <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[330px] rounded-3xl border border-white/10 bg-white/[0.045] p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#F0ABFC]">
              Taches a simplifier
            </p>
            {fluxNodes.map((node, index) => (
              <div
                key={node.label}
                className="flux-node absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-white/14 bg-[#120A2A]/86 text-xs font-black text-white shadow-[0_0_34px_rgba(124,58,237,0.28)]"
                style={{
                  left: node.x,
                  top: node.y,
                  animationDelay: `${index * 0.45}s`,
                }}
              >
                {node.label}
              </div>
            ))}
            <div className="absolute left-[21%] top-[39%] h-px w-[54%] rotate-[9deg] bg-linear-to-r from-[#22D3EE]/10 via-[#F725D9]/60 to-[#22D3EE]/10" />
            <div className="absolute left-[35%] top-[58%] h-px w-[36%] -rotate-[28deg] bg-linear-to-r from-[#22D3EE]/10 via-[#7C3AED]/70 to-[#22D3EE]/10" />
            <div className="absolute left-[28%] top-[33%] h-36 w-36 rounded-full border border-[#F725D9]/20" />
            <div className="absolute right-[18%] bottom-[18%] h-44 w-44 rounded-full border border-[#22D3EE]/16" />
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5">
              <p className="font-bold text-white">Suivi automatisation</p>
              <div className="mt-5 space-y-3">
                {project.features.slice(0, 5).map((feature, index) => (
                  <div key={feature} className="rounded-2xl bg-[#030711]/62 p-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-white/72">{feature}</span>
                      <span className="h-2 w-16 rounded-full bg-linear-to-r from-[#F725D9] to-[#22D3EE]" style={{ opacity: 0.55 + index * 0.08 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((metric) => (
                <MiniMetric key={metric.label} {...metric} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default function PortfolioMockup({ project }: { project: PortfolioProject }) {
  if (project.slug === "devora-command-center") {
    return <CommandCenter project={project} />;
  }

  if (project.slug === "atlas-commerce-os") {
    return <AtlasCommerce project={project} />;
  }

  return <FluxPilot project={project} />;
}
