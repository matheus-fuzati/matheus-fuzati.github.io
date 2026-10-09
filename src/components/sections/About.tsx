import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import SectionSideLabel from "../motion/SectionSideLabel";

interface Props {
  id: string;
}

/**
 * Resumo curto entre o Hero e a Experiência — "poucas linhas" de
 * trajetória + stack + estudos. O conteúdo completo (about.paragraphs)
 * segue existindo só pro currículo (CvPage); aqui é só o teaser.
 */
export default function About({ id }: Props) {
  const { about } = useContent();

  return (
    <section id={id} className="section">
      <SectionSideLabel text={about.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          <p className="about-summary">{about.summary}</p>
        </Reveal>
      </div>
    </section>
  );
}
