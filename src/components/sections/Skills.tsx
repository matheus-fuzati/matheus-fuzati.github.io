import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";

interface Props {
  id: string;
}

export default function Skills({ id }: Props) {
  const { skills } = useContent();

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{skills.eyebrow}</span>
          <h2>{skills.title}</h2>
        </Reveal>
        <div className="skills-grid">
          {skills.categories.map((cat, i) => (
            <Reveal className="skill-card" delay={i * 0.08} key={cat.title}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
