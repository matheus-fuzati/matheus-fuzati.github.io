import type { ReactElement } from "react";

// Ícones inline minúsculos (sem lib externa) — 3 traços, ~0.3kb cada.
const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function EmailIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10.5V17M7.5 7.5v.01M12 17v-4.2c0-1.4 1-2.3 2.2-2.3s1.8.9 1.8 2.3V17" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M9 19c-4 1.2-4-2.2-6-2.5m12 4.5v-3.3c0-.9.3-1.5.7-1.8-2.4-.3-5-1.2-5-5.3 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.1-2.6 5-5 5.3.4.3.8 1 .8 2v3.8" />
    </svg>
  );
}

export const contactIcons: Record<string, () => ReactElement> = {
  Email: EmailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
};
