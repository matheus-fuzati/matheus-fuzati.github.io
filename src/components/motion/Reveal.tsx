import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props {
  children: ReactNode;
  className?: string;
  /** segundos de atraso — usado pra criar stagger em listas */
  delay?: number;
}

/**
 * Substitui o antigo `data-reveal` + IntersectionObserver por um reveal
 * dirigido por ScrollTrigger. Sob prefers-reduced-motion não anima nada —
 * o conteúdo já nasce visível (ver "Make the page complete at rest").
 */
export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced) return;

    gsap.set(el, { opacity: 0, y: 16 });
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: "power2.out" }),
    });

    return () => {
      trigger.kill();
      gsap.set(el, { clearProps: "opacity,transform" });
    };
  }, [prefersReduced, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
