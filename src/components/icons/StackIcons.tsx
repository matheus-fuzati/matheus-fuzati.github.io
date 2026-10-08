import type { ReactElement } from "react";

// Ícones inline minúsculos (sem lib externa) — usados no carrossel de stack.
const common = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function DbIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M7 18a4 4 0 1 1 .9-7.9 5.5 5.5 0 0 1 10.3 2.3A3.6 3.6 0 0 1 17.5 19H7Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 2.5 13.8 9l6.2 1.8-6.2 1.7L12 19l-1.8-6.5L4 10.8 10.2 9Z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="m9 7-5 5 5 5" />
      <path d="m15 7 5 5-5 5" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

export type StackIconKind = "db" | "cloud" | "spark" | "code" | "bolt";

export const stackIcons: Record<StackIconKind, () => ReactElement> = {
  db: DbIcon,
  cloud: CloudIcon,
  spark: SparkIcon,
  code: CodeIcon,
  bolt: BoltIcon,
};
