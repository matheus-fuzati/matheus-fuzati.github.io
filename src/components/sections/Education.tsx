import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";

interface Props {
  id: string;
}

export default function Education({ id }: Props) {
  const { education } = useContent();

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{education.eyebrow}</span>
          <h2>{education.title}</h2>
        </Reveal>

        <Reveal className="edu-block">
          <h3>{education.academicTitle}</h3>
          {education.academic.map((a) => (
            <div className="edu-item" key={a.degree}>
              <span className="period">{a.period}</span>
              <p className="title">{a.degree}</p>
              <p className="inst">{a.institution}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="edu-block" delay={0.1}>
          <h3>{education.coursesTitle}</h3>
          {education.courses.map((c) => (
            <div className="edu-item" key={c.course}>
              <p className="title">{c.course}</p>
              <p className="inst">{c.institution}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
