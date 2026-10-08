import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import SectionSideLabel from "../motion/SectionSideLabel";

interface Props {
  id: string;
}

/**
 * Substitui as antigas Skills.tsx + Education.tsx por uma seção só
 * (pedido do autor: "Atuação sai e entra formação/cursos e stack
 * técnica"). Reaproveita `content.skills` e `content.education` sem
 * mudar o schema — só a composição visual muda.
 */
export default function StackFormacao({ id }: Props) {
  const { skills, education } = useContent();

  return (
    <section id={id} className="section">
      <SectionSideLabel text={skills.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{skills.eyebrow}</span>
          <h2>{skills.title} &amp; {education.title}</h2>
        </Reveal>
        <div className="stack-formacao-grid">
          <Reveal className="stack-formacao-col" from="left">
            <h3 className="stack-formacao-subtitle">{skills.title}</h3>
            <div className="stack-cat-grid">
              {skills.categories.map((cat) => (
                <div className="stack-cat-card" key={cat.title}>
                  <h4>{cat.title}</h4>
                  <p>{cat.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="stack-formacao-col" from="right" delay={0.1}>
            <h3 className="stack-formacao-subtitle">{education.title}</h3>
            <div className="edu-block">
              <h3>{education.academicTitle}</h3>
              {education.academic.map((a) => (
                <div className="edu-item" key={a.degree}>
                  <span className="period">{a.period}</span>
                  <p className="title">{a.degree}</p>
                  <p className="inst">{a.institution}</p>
                </div>
              ))}
            </div>
            <div className="edu-block">
              <h3>{education.coursesTitle}</h3>
              {education.courses.map((c) => (
                <div className="edu-item" key={c.course}>
                  <p className="title">{c.course}</p>
                  <p className="inst">{c.institution}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
