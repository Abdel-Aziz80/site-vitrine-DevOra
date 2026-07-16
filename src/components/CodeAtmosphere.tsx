import type { CSSProperties } from "react";

const columns = [
  ["DEVORA", "Sentinel", "client.ready", "priority.score", "suivi", "secure"],
  ["AlexCore", "automation", "copilot", "gain.temps", "relance", "signal"],
  ["commerce", "IA locale", "monitoring", "analytics", "vente", "alerte"],
  ["interface", "mission.runtime", "queue", "validation", "preuve", "contact"],
  ["business", "conversion", "e-commerce", "pilotage", "responseGate", "support"],
];

export default function CodeAtmosphere() {
  return (
    <div className="devora-code-rain" aria-hidden="true">
      {columns.map((items, index) => (
        <div
          key={items.join("-")}
          className="devora-code-column"
          style={{ "--column-delay": `${index * -5}s` } as CSSProperties}
        >
          {[...items, ...items].map((item, itemIndex) => (
            <span key={`${item}-${itemIndex}`}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
