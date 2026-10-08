import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContent } from "../../content/useContent";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import Reveal from "../motion/Reveal";
import ParallaxLabel from "../motion/ParallaxLabel";
import SectionSideLabel from "../motion/SectionSideLabel";

interface Props {
  id: string;
}

export default function Experience({ id }: Props) {
  const { experience } = useContent();
  const timelineRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    const container = timelineRef.current;
    const rail = railRef.current;
    if (!container || !rail || prefersReduced) return;

    gsap.set(rail, { scaleY: 0 });
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 75%",
      end: "bottom 55%",
      scrub: 0.6,
      onUpdate: (self) => gsap.set(rail, { scaleY: self.progress }),
    });

    return () => {
      trigger.kill();
      gsap.set(rail, { clearProps: "transform" });
    };
  }, [prefersReduced]);

  return (
    <section id={id} className="section">
      <ParallaxLabel text={experience.eyebrow} />
      <SectionSideLabel text={experience.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2>{experience.title}</h2>
        </Reveal>
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-rail" ref={railRef} aria-hidden="true" />
          {experience.items.map((item, i) => (
            <Reveal className="tl-item" delay={Math.min(i, 3) * 0.05} key={`${item.company}-${item.period}`}>
              <span className="period">
                {item.period}
                {item.current && <span className="badge">●</span>}
              </span>
              <p className="role">{item.role}</p>
              <p className="company">
                {item.company}
                {item.companyNote && <> — {item.companyNote}</>}
              </p>
              <p className="desc">{item.description}</p>
              {item.highlights && (
                <div className="tl-highlights">
                  {item.highlights.map((h) => (
                    <div className="tl-highlight" key={h.label}>
                      <span className="tl-highlight-head">
                        <strong>{h.label}</strong> <span className="period">{h.period}</span>
                      </span>
                      <p>{h.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
        {experience.footnote && (
          <p style={{ marginTop: 20, fontSize: 12.5, color: "var(--muted)" }}>{experience.footnote}</p>
        )}
      </div>
    </section>
  );
}
