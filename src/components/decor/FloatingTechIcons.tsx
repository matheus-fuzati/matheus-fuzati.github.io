import type { CSSProperties } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface IconSpec {
  glyph: string;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
}

// Posições/fases fixas (não aleatórias) — vite-react-ssg pré-renderiza em
// Node, e Math.random() aqui criaria mismatch entre o HTML do servidor e a
// primeira hidratação no cliente.
const ICONS: IconSpec[] = [
  { glyph: "</>", top: 8, left: 10, size: 26, duration: 26, delay: 0, drift: 18 },
  { glyph: "{ }", top: 16, left: 84, size: 30, duration: 32, delay: 3, drift: -22 },
  { glyph: "db", top: 28, left: 5, size: 20, duration: 24, delay: 6, drift: 16 },
  { glyph: "<tag/>", top: 40, left: 72, size: 18, duration: 30, delay: 2, drift: -14 },
  { glyph: "</>", top: 52, left: 22, size: 24, duration: 28, delay: 8, drift: 20 },
  { glyph: "{ }", top: 63, left: 90, size: 20, duration: 34, delay: 4, drift: -18 },
  { glyph: "db", top: 74, left: 42, size: 26, duration: 25, delay: 1, drift: 14 },
  { glyph: "<tag/>", top: 86, left: 62, size: 18, duration: 29, delay: 7, drift: -16 },
  { glyph: "</>", top: 12, left: 48, size: 18, duration: 27, delay: 5, drift: 12 },
  { glyph: "{ }", top: 92, left: 15, size: 22, duration: 31, delay: 9, drift: -20 },
];

/**
 * Camada decorativa fixa, atrás de todo o conteúdo (z-index 0 — `.section`
 * e seus filhos têm `position: relative`, então pintam por cima na ordem
 * de stacking). Puramente ambiental: sob prefers-reduced-motion não
 * renderiza nada, em vez de parar a animação e deixar ícones estáticos
 * sem função.
 */
export default function FloatingTechIcons() {
  const prefersReduced = usePrefersReducedMotion();
  if (prefersReduced) return null;

  return (
    <div className="floating-icons" aria-hidden="true">
      {ICONS.map((icon, i) => (
        <span
          className="floating-icon"
          key={i}
          style={
            {
              top: `${icon.top}%`,
              left: `${icon.left}%`,
              fontSize: icon.size,
              animationDuration: `${icon.duration}s`,
              animationDelay: `${icon.delay}s`,
              "--drift": `${icon.drift}px`,
            } as CSSProperties
          }
        >
          {icon.glyph}
        </span>
      ))}
    </div>
  );
}
