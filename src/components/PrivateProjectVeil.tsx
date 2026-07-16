import type { CSSProperties } from "react";

const veilLines = [
  "mission.runtime.ts",
  "analytics.queue",
  "sentinel.watch",
  "priority.score",
  "business.pipeline",
  "workflow.pending",
  "alexcore.signal",
  "responseGate",
  "incident.timeline",
  "queue.runtime",
  "action.score",
  "devora.ai",
  "monitoring.safe",
  "client.request",
  "secure.review",
  "automation.ready",
];

export default function PrivateProjectVeil({
  title = "Aperçu protégé",
  description = "Interface interne volontairement limitée. Les vues détaillées sont réservées aux démonstrations privées.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="private-veil" aria-label={`${title}. ${description}`}>
      <div className="private-veil-rain" aria-hidden="true">
        {[0, 1, 2, 3].map((column) => (
          <div
            key={column}
            className="private-veil-column"
            style={{ "--veil-delay": `${column * -6}s` } as CSSProperties}
          >
            {[...veilLines, ...veilLines].map((line, index) => (
              <span key={`${line}-${column}-${index}`}>{line}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="private-veil-depth" aria-hidden="true" />
      <div className="private-veil-content">
        <span>Démo privée</span>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}
