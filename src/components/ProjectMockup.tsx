import type { projects } from "@/data/site";

type Variant = (typeof projects)[number]["variant"];

const mockupCopy: Record<Variant, { metric: string; value: string; label: string; rows: string[] }> = {
  sentinel: {
    metric: "92%",
    value: "Risque priorisé",
    label: "Sentinel scan",
    rows: ["Anomalie paiement", "Signal stock", "Ticket urgent"],
  },
  commerce: {
    metric: "+38%",
    value: "Commandes suivies",
    label: "Suivi commerce",
    rows: ["Nouveau panier", "Stock critique", "Client fidèle"],
  },
  flux: {
    metric: "14",
    value: "Flux actifs",
    label: "FluxPilot flow",
    rows: ["Brief reçu", "Validation", "Action envoyée"],
  },
  command: {
    metric: "7.4k€",
    value: "Opportunites",
    label: "Centre de suivi",
    rows: ["Projet web", "Facture prête", "Relance client"],
  },
  atlas: {
    metric: "4.8x",
    value: "Lecture ventes",
    label: "Atlas commerce",
    rows: ["CA mensuel", "Panier moyen", "Top produit"],
  },
  agent: {
    metric: "24h",
    value: "Suivi accéléré",
    label: "Agent business",
    rows: ["Besoin qualifié", "Réponse prête", "Prochaine action"],
  },
};

export function ProjectMockup({ variant }: { variant: Variant }) {
  const content = mockupCopy[variant];

  return (
    <div className={`mockup mockup-${variant}`} aria-hidden="true">
      <div className="mockup-topbar">
        <span />
        <span />
        <span />
        <strong>{content.label}</strong>
      </div>
      <div className="mockup-grid">
        <div className="mockup-panel metric-panel">
          <small>Impact</small>
          <strong>{content.metric}</strong>
          <span>{content.value}</span>
        </div>
        <div className="mockup-panel chart-panel">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="mockup-flow">
        {content.rows.map((row, index) => (
          <div className="mockup-row" key={row}>
            <span>{index + 1}</span>
            <strong>{row}</strong>
            <i />
          </div>
        ))}
      </div>
      <div className="mockup-glow" />
    </div>
  );
}
