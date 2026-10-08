import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";

interface Props {
  id: string;
}

export default function About({ id }: Props) {
  const { about } = useContent();

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="fact-list">
              {about.facts.map((f) => (
                <li key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">{f.v}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
