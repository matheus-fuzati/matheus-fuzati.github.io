import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface IconSpec {
  glyph: string;
  size: number;
  wobbleDuration: number;
  wobbleDelay: number;
  drift: number;
  offset: number;
}

// Posições/fases fixas (não aleatórias) — vite-react-ssg pré-renderiza em
// Node, e Math.random() aqui criaria mismatch entre o HTML do servidor e a
// primeira hidratação no cliente.
const LEFT_LANE: IconSpec[] = [
  { glyph: "</>", size: 26, wobbleDuration: 26, wobbleDelay: 0, drift: 14, offset: 0 },
  { glyph: "db", size: 20, wobbleDuration: 24, wobbleDelay: 2, drift: -12, offset: 18 },
  { glyph: "{ }", size: 24, wobbleDuration: 28, wobbleDelay: 4, drift: 16, offset: -10 },
  { glyph: "<tag/>", size: 18, wobbleDuration: 30, wobbleDelay: 1, drift: -14, offset: 8 },
  { glyph: "db", size: 22, wobbleDuration: 25, wobbleDelay: 3, drift: 12, offset: -16 },
];

const RIGHT_LANE: IconSpec[] = [
  { glyph: "{ }", size: 28, wobbleDuration: 32, wobbleDelay: 1, drift: -18, offset: 0 },
  { glyph: "<tag/>", size: 18, wobbleDuration: 29, wobbleDelay: 5, drift: 14, offset: -14 },
  { glyph: "</>", size: 22, wobbleDuration: 27, wobbleDelay: 2, drift: -16, offset: 12 },
  { glyph: "db", size: 20, wobbleDuration: 31, wobbleDelay: 6, drift: 18, offset: -8 },
  { glyph: "{ }", size: 18, wobbleDuration: 26, wobbleDelay: 3, drift: -12, offset: 16 },
];

function Lane({ icons, className, duration }: { icons: IconSpec[]; className: string; duration: number }) {
  // conteúdo duplicado + translateY(-50%) em loop linear = marquee vertical
  // sem emenda (mesma técnica do .stack-carousel-track, só que no eixo Y).
  const render = (keyPrefix: string) =>
    icons.map((icon, i) => (
      <span
        className="floating-icon"
        key={`${keyPrefix}-${i}`}
        style={
          {
            fontSize: icon.size,
            marginLeft: icon.offset,
            animationDuration: `${icon.wobbleDuration}s`,
            animationDelay: `${icon.wobbleDelay}s`,
            "--drift": `${icon.drift}px`,
          } as CSSProperties
        }
      >
        {icon.glyph}
      </span>
    ));

  return (
    <div className={`floating-lane ${className}`}>
      <div className="floating-lane-track" style={{ animationDuration: `${duration}s` }}>
        {render("a")}
        {render("b")}
      </div>
    </div>
  );
}

/**
 * Camada decorativa fixa, atrás de todo o conteúdo — confinada às margens
 * (lado esquerdo/direito) pra nunca cruzar o texto do container central.
 * Cada lado é um "trilho" vertical em loop infinito (sai por uma borda,
 * entra pela outra), com uma leve oscilação própria por ícone por cima.
 * Some em telas sem margem sobrando pros lados (ver @media em global.css)
 * e sob prefers-reduced-motion não renderiza nada.
 */
export default function FloatingTechIcons() {
  const prefersReduced = usePrefersReducedMotion();
  if (prefersReduced) return null;

  return (
    <div className="floating-icons" aria-hidden="true">
      <Lane icons={LEFT_LANE} className="floating-lane-left" duration={46} />
      <Lane icons={RIGHT_LANE} className="floating-lane-right floating-lane-reverse" duration={52} />
    </div>
  );
}
