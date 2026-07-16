import type { CSSProperties } from "react";

const columns = [
  ["DEVORA", "Sentinel", "Next.js", "local-first", "workflow", "API", "className="],
  ["AlexCore", "await", "useState()", "copilot", "automation", "Tailwind", "SaaS"],
  ["dashboard", "IA", "route.ts", "monitoring", "metadata", "analytics", "secure"],
  ["interface", "Promise<Data>", "JSON", "server action", "pipeline", "CTA", "webhook"],
  ["business OS", "fetch()", "conversion", "e-commerce", "stack", "deploy", "UI system"],
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
