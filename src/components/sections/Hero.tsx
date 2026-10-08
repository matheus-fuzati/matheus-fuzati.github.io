import { Suspense, lazy } from "react";
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

  return (
    <section className="hero">
      {showScene && (
        <div className="hero-scene" aria-hidden="true">
          <SceneErrorBoundary>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </SceneErrorBoundary>
        </div>
      )}
      <div className="container">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>
          <HeroNameEffect name={hero.name} />
        </h1>
        <p className="tagline">{hero.tagline}</p>
        <div className="actions">
          <a className="btn btn-primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a className="btn btn-ghost" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
        <div className="meta">
          {hero.meta.map((m) => (
            <span key={m.k}>
              <strong>{m.k}:</strong> {m.v}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
