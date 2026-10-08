import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props {
  text: string;
}

/** Rótulo gigante e quase invisível atrás da seção, que se desloca num ritmo
 * diferente do conteúdo conforme o scroll — parallax de verdade, não só smooth scroll. */
export default function ParallaxLabel({ text }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest(".section");
    if (!el || !section || prefersReduced) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.6,
      onUpdate: (self) => gsap.set(el, { yPercent: (self.progress - 0.5) * 45 }),
    });

    return () => {
      trigger.kill();
      gsap.set(el, { clearProps: "transform" });
    };
  }, [prefersReduced]);

  return (
    <span className="parallax-label" ref={ref} aria-hidden="true">
      {text}
    </span>
  );
}
