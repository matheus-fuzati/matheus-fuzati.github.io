import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import SectionSideLabel from "../motion/SectionSideLabel";

interface Props {
  id: string;
}

const SIDES = ["left", "up", "right"] as const;

export default function Atuacao({ id }: Props) {
  const { atuacao } = useContent();

  return (
    <section id={id} className="section">
      <SectionSideLabel text={atuacao.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{atuacao.eyebrow}</span>
          <h2>{atuacao.title}</h2>
        </Reveal>
        <div className="atuacao-grid">
          {atuacao.items.map((item, i) => (
            <Reveal className="atuacao-card" delay={i * 0.08} from={SIDES[i % SIDES.length]} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
