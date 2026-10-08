import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props {
  children: ReactNode;
  className?: string;
  /** segundos de atraso — usado pra criar stagger em listas */
  delay?: number;
  /** "up" (padrão) sobe+escala; "left"/"right" entra de lado — dá variedade ao scroll */
  from?: "up" | "left" | "right";
}

/**
 * Substitui o antigo `data-reveal` + IntersectionObserver por um reveal
 * dirigido por ScrollTrigger. Sob prefers-reduced-motion não anima nada —
 * o conteúdo já nasce visível (ver "Make the page complete at rest").
 */
export default function Reveal({ children, className, delay = 0, from = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    const fromVars =
      from === "left"
        ? { opacity: 0, x: -48, y: 0, scale: 1 }
        : from === "right"
          ? { opacity: 0, x: 48, y: 0, scale: 1 }
          : { opacity: 0, x: 0, y: 48, scale: 0.96 };

    gsap.set(el, fromVars);
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.9, delay, ease: "power3.out" }),
    });

    return () => {
      trigger.kill();
      gsap.set(el, { clearProps: "opacity,transform" });
    };
  }, [prefersReduced, delay, from]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
