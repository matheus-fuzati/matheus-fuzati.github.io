import { useEffect, useRef } from "react";

interface Props {
  name: string;
}

/**
 * Decrypt/scramble reveal, ported from the Astro version. Runs client-only
 * (useEffect never fires during SSG render), so the prerendered HTML and the
 * no-JS fallback both just show the plain name.
 */
export default function HeroNameEffect({ name }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || prefersReduced) return;

    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const framesPerChar = 3;
    const scrambleFrames = 8;
    let frame = 0;
    let raf = 0;

    const tick = () => {
      let output = "";
      let done = true;
      for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (char === " ") {
          output += " ";
          continue;
        }
        const revealAt = i * framesPerChar + scrambleFrames;
        if (frame >= revealAt) {
          output += char;
        } else {
          output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          done = false;
        }
      }
      el.textContent = output;
      frame++;
      if (!done) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [name]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {name}
      </span>
      <span className="sr-only">{name}</span>
    </>
  );
}
