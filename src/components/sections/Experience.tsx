import { useEffect, useRef, useState } from "react";
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

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/**
 * Linha do tempo horizontal (v6) — substitui a lista vertical. Texto
 * sempre abaixo da linha (nunca em cima dela); cada parada expande o
 * detalhe daquela experiência ao clicar (estado local, sem Reveal nos
 * itens — eles nascem visíveis, só o detalhe abre/fecha).
 */
export default function Experience({ id }: Props) {
  const { experience } = useContent();
  // o conteúdo vem do mais recente pro mais antigo (convenção de currículo);
  // a linha do tempo horizontal lê da esquerda (mais antigo) pra direita
  // (atual, como terminus) — por isso inverte só pra esse componente.
  const chronological = [...experience.items].reverse();
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const track = trackRef.current;
    const line = lineRef.current;
    if (!track || !line || prefersReduced) return;

    gsap.set(line, { scaleX: 0 });
    const trigger = ScrollTrigger.create({
      trigger: track,
      start: "top 80%",
      end: "bottom 60%",
      scrub: 0.6,
      onUpdate: (self) => gsap.set(line, { scaleX: self.progress }),
    });

    return () => {
      trigger.kill();
      gsap.set(line, { clearProps: "transform" });
    };
  }, [prefersReduced]);

  const toggle = (key: string) =>
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  return (
    <section id={id} className="section">
      <ParallaxLabel text={experience.eyebrow} />
      <SectionSideLabel text={experience.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2>{experience.title}</h2>
        </Reveal>

        <div className="tl-h">
          <div className="tl-h-track" ref={trackRef}>
            <div className="tl-h-line" ref={lineRef} aria-hidden="true" />
            <div className="tl-h-stops">
              {chronological.map((item) => {
                const key = `${item.company}-${item.period}`;
                return (
                  <div className="tl-h-stop" key={key}>
                    <button
                      type="button"
                      className={`tl-h-toggle${item.current ? " current" : ""}${openKeys.has(key) ? " open" : ""}`}
                      aria-expanded={openKeys.has(key)}
                      onClick={() => toggle(key)}
                    >
                      <ChevronIcon />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tl-h-labels">
            {chronological.map((item) => {
              const key = `${item.company}-${item.period}`;
              return (
                <div className="tl-h-label" key={key}>
                  {item.current && <span className="tl-h-current-tag">{"●"} Atual</span>}
                  <div className="period">{item.period}</div>
                  <h3>{item.role}</h3>
                  <p className="short">
                    {item.company}
                    {item.companyNote ? ` — ${item.companyNote}` : ""}
                  </p>
                  {openKeys.has(key) && (
                    <div className="tl-h-detail">
                      <p>{item.description}</p>
                      {item.highlights?.map((h) => (
                        <p key={h.label}>
                          <strong>{h.label}</strong> ({h.period}) — {h.description}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* fallback empilhado pra telas estreitas (ver @media em global.css) */}
          <div className="tl-h-list">
            {chronological.map((item) => {
              const key = `${item.company}-${item.period}`;
              return (
                <div className="tl-h-label" key={key} style={{ marginBottom: 28, textAlign: "left" }}>
                  {item.current && <span className="tl-h-current-tag">{"●"} Atual</span>}
                  <div className="period">{item.period}</div>
                  <h3>{item.role}</h3>
                  <p className="short">
                    {item.company}
                    {item.companyNote ? ` — ${item.companyNote}` : ""}
                  </p>
                  <button
                    type="button"
                    className={`tl-h-toggle${openKeys.has(key) ? " open" : ""}`}
                    aria-expanded={openKeys.has(key)}
                    onClick={() => toggle(key)}
                    style={{ width: 22, height: 22, border: "1px solid var(--line-strong)", color: "var(--muted)", marginTop: 8 }}
                  >
                    <ChevronIcon />
                  </button>
                  {openKeys.has(key) && (
                    <div className="tl-h-detail">
                      <p>{item.description}</p>
                      {item.highlights?.map((h) => (
                        <p key={h.label}>
                          <strong>{h.label}</strong> ({h.period}) — {h.description}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="tl-h-hint">clica no ícone de cada parada pra expandir os detalhes</p>
        </div>

        {experience.footnote && (
          <p style={{ marginTop: 20, fontSize: 12.5, color: "var(--muted)" }}>{experience.footnote}</p>
        )}
      </div>
    </section>
  );
}
