import { Suspense, lazy, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContent } from "../../content/useContent";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useWebglSupport } from "../../hooks/useWebglSupport";
import SceneErrorBoundary from "../../three/SceneErrorBoundary";
import HeroNameEffect from "../motion/HeroNameEffect";

const HeroScene = lazy(() => import("../../three/HeroScene"));

export default function Hero() {
  const { hero } = useContent();
  const prefersReduced = usePrefersReducedMotion();
  const webglSupported = useWebglSupport();
  const showScene = webglSupported === true && !prefersReduced;

  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);

  // coreografia de entrada do hero inteiro (não só o nome) + parallax de scroll
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

  // destaca o trecho depois do travessão (ex: "— da ingestão ao dashboard")
  const taglineParts = hero.tagline.split(/—/);
  const taglineLead = taglineParts[0]?.trim();
  const taglineHighlight = taglineParts[1]?.trim();

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
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="hero-badge" data-hero-in>
            {hero.eyebrow}
          </span>
          <p className="hero-greeting" data-hero-in>
            {hero.greeting}
          </p>
          <h1 data-hero-in>
            <HeroNameEffect name={hero.name} />
          </h1>
          <div className="hero-caption" data-hero-in>
            {hero.meta.map((m) => (
              <span key={m.k}>
                <strong>{m.k}:</strong> {m.v}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <p className="hero-statement" data-hero-in>
            {taglineLead}
            {taglineHighlight && (
              <>
                {" — "}
                <span className="hero-highlight">{taglineHighlight}</span>
              </>
            )}
          </p>
          <div className="actions" data-hero-in>
            <a className="btn btn-primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
            </a>
            <a className="btn btn-ghost" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
