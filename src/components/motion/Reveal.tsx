import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

// Registro próprio — Reveal agora também roda em rotas que não montam o
// SmoothScrollProvider (ex: ProjectPage), então não pode depender dele
// pra registrar o plugin primeiro. gsap.registerPlugin é idempotente.
gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: ReactNode;
  className?: string;
  /** segundos de atraso — usado pra criar stagger em listas */
  delay?: number;
  /** "up" (padrão) sobe+escala; "left"/"right" entra de lado — dá variedade ao scroll */
  from?: "up" | "left" | "right";
  /** true = só entra (fica visível depois); não some de novo ao sair da viewport —
   * usado em páginas de leitura longa (ProjectPage), onde o fade bi-direcional da
   * home faz o conteúdo já lido "sumir" atrás do scroll */
  once?: boolean;
}

/**
 * Substitui o antigo `data-reveal` + IntersectionObserver por um reveal
 * dirigido por ScrollTrigger. Bi-direcional: entra ao aparecer na viewport
 * (de baixo ou de volta pra baixo) e sai (fade+offset) ao deixar a tela em
 * qualquer sentido — não é mais `once`. Sob prefers-reduced-motion não
 * anima nada — o conteúdo já nasce visível (ver "Make the page complete
 * at rest").
 */
export default function Reveal({ children, className, delay = 0, from = "up", once = false }: Props) {
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

    const show = () => gsap.to(el, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.9, delay, ease: "power3.out", overwrite: true });
    const hide = () => gsap.to(el, { ...fromVars, duration: 0.5, ease: "power2.inOut", overwrite: true });

    gsap.set(el, fromVars);
    const trigger = once
      ? ScrollTrigger.create({ trigger: el, start: "top 85%", once: true, onEnter: show })
      : ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          end: "bottom 15%",
          onEnter: show,
          onEnterBack: show,
          onLeave: hide,
          onLeaveBack: hide,
        });

    return () => {
      trigger.kill();
      gsap.set(el, { clearProps: "opacity,transform" });
    };
  }, [prefersReduced, delay, from, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
