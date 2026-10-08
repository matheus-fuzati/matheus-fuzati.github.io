import { Fragment, Suspense, lazy, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContent } from "../../content/useContent";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useWebglSupport } from "../../hooks/useWebglSupport";
import SceneErrorBoundary from "../../three/SceneErrorBoundary";
import HeroNameEffect from "../motion/HeroNameEffect";

const HeroScene = lazy(() => import("../../three/HeroScene"));

/**
 * Hero minimalista (v6): só eyebrow, nome e a linha Cargo/Formação —
 * sem tagline nem CTA, pedido do autor pra reduzir o hero ao essencial.
 * Mantém a cena 3D (FloatingShards + ParticleField) atrás do conteúdo.
 */
export default function Hero() {
  const { hero } = useContent();
  const prefersReduced = usePrefersReducedMotion();
  const webglSupported = useWebglSupport();
  const showScene = webglSupported === true && !prefersReduced;

  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReduced) return;

    const targets = section.querySelectorAll<HTMLElement>("[data-hero-in]");
    gsap.set(targets, { opacity: 0, y: 28 });
    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(targets, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07, ease: "power3.out" });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => {
      tl.kill();
      trigger.kill();
    };
  }, [prefersReduced]);

  return (
    <section className="hero" ref={sectionRef}>
      {showScene && (
        <div className="hero-scene" aria-hidden="true">
          <SceneErrorBoundary>
            <Suspense fallback={null}>
              <HeroScene scrollRef={scrollProgress} />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
      <div className="container hero-center">
        <span className="hero-badge" data-hero-in>
          {hero.eyebrow}
        </span>
        <p className="hero-greeting" data-hero-in>
          {hero.greeting}
        </p>
        <h1 data-hero-in>
          <HeroNameEffect name={hero.name} />
        </h1>
        <div className="hero-meta-row" data-hero-in>
          {hero.meta.map((m, i) => (
            <Fragment key={m.k}>
              {i > 0 && <span className="hero-meta-divider" aria-hidden="true" />}
              <div className="hero-meta-item">
                <span className="hero-meta-k">{m.k}</span>
                <span className="hero-meta-v">{m.v}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
