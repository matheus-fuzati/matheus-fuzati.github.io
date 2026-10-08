import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
}

/**
 * Só a Home monta este provider — a página de CV nunca instancia Lenis
 * (ver specs/03-tech-spec.md, isolamento da stack pesada). Sob
 * prefers-reduced-motion, Lenis nem é instanciado: o scroll nativo
 * (já suave via `scroll-behavior` no global.css) é o fallback.
 */
export default function SmoothScrollProvider({ children }: Props) {
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
