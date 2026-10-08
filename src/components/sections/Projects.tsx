import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";

interface Props {
  id: string;
}

export default function Projects({ id }: Props) {
  const { projects } = useContent();

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{projects.eyebrow}</span>
          <h2>{projects.title}</h2>
        </Reveal>
        <Reveal className="projects-empty" delay={0.1}>
          <strong>{projects.emptyTitle}</strong>
          <p>{projects.emptyBody}</p>
          <div style={{ marginTop: 20 }}>
            <a className="btn btn-ghost" href={projects.emptyCta.href} target="_blank" rel="noopener">
              {projects.emptyCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
