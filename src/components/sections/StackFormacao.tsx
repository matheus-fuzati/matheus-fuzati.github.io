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

        {/* Ferramentas e Habilidades em cima, 1 linha (grid de 5 colunas —
            uma por categoria); Formação embaixo, 2 linhas (acadêmica e
            cursos, cada uma sua própria linha horizontal de cards). */}
        <Reveal className="stack-formacao-block">
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

        <Reveal className="stack-formacao-block" delay={0.1}>
          <h3 className="stack-formacao-subtitle">{education.title}</h3>
          <div className="edu-row-group">
            <h4 className="edu-row-title">{education.academicTitle}</h4>
            <div className="edu-row academic">
              {education.academic.map((a) => (
                <div className="edu-card" key={a.degree}>
                  <span className="period">{a.period}</span>
                  <p className="title">{a.degree}</p>
                  <p className="inst">{a.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="edu-row-group">
            <h4 className="edu-row-title">{education.coursesTitle}</h4>
            <div className="edu-row courses">
              {education.courses.map((c) => (
                <div className="edu-card" key={c.course}>
                  <p className="title">{c.course}</p>
                  <p className="inst">{c.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
