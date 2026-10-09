import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const SESSION_KEY = "splash-seen";
const SUBTITLE_HOLD_MS = 1100;
const FADE_OUT_MS = 550;

type Phase = "hidden" | "cipher" | "subtitle" | "out";

/**
 * Tela de abertura (uma vez por sessão, via sessionStorage) — cifra os
 * dois nomes em paralelo (mesmo algoritmo do HeroNameEffect, mas em 2
 * spans separados pra colorir cada um), depois revela "Data Engineer"
 * sem cifra, segura um instante e dissolve pro site por trás.
 * Sob prefers-reduced-motion não mostra nada (marca como visto direto).
 */
export default function Splash() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const prefersReduced = usePrefersReducedMotion();
  const matheusRef = useRef<HTMLSpanElement>(null);
  const fuzatiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // storage indisponível — não bloqueia, só não mostra de novo nessa aba
    }
    if (seen) return;
    if (prefersReduced) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ver acima
      }
      return;
    }
    setPhase("cipher");
  }, [prefersReduced]);

  useEffect(() => {
    if (phase !== "cipher") return;
    const mEl = matheusRef.current;
    const fEl = fuzatiRef.current;
    if (!mEl || !fEl) return;

    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const framesPerChar = 3;
    const scrambleFrames = 8;
    const names = [
      ["Matheus", mEl],
      ["Fuzati", fEl],
    ] as const;
    const totalFrames = Math.max(...names.map(([t]) => t.length)) * framesPerChar + scrambleFrames;
    let frame = 0;
    let raf = 0;

    const tick = () => {
      for (const [text, el] of names) {
        let output = "";
        for (let i = 0; i < text.length; i++) {
          const revealAt = i * framesPerChar + scrambleFrames;
          output += frame >= revealAt ? text[i] : scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
        el.textContent = output;
      }
      frame++;
      if (frame <= totalFrames) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("subtitle");
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  useEffect(() => {
    if (phase !== "subtitle") return;
    const t = setTimeout(() => setPhase("out"), SUBTITLE_HOLD_MS);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "out") return;
    const t = setTimeout(() => {
      setPhase("hidden");
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ver acima
      }
    }, FADE_OUT_MS);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div className={`splash${phase === "out" ? " splash-out" : ""}`} aria-hidden="true">
      <div className="splash-name">
        <span ref={matheusRef} className="splash-matheus">
          Matheus
        </span>{" "}
        <span ref={fuzatiRef} className="splash-fuzati">
          Fuzati
        </span>
      </div>
      <div className={`splash-subtitle${phase === "subtitle" || phase === "out" ? " visible" : ""}`}>Data Engineer</div>
    </div>
  );
}
