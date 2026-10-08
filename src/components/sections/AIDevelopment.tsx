import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import ParallaxLabel from "../motion/ParallaxLabel";
import SectionSideLabel from "../motion/SectionSideLabel";

interface Props {
  id: string;
}

const SIDES = ["left", "right"] as const;

export default function AIDevelopment({ id }: Props) {
  const { aiDev } = useContent();

  return (
    <section id={id} className="section">
      <ParallaxLabel text={aiDev.eyebrow} />
      <SectionSideLabel text={aiDev.eyebrow} />
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{aiDev.eyebrow}</span>
          <h2>{aiDev.title}</h2>
          <p className="ai-dev-intro">{aiDev.intro}</p>
        </Reveal>
        <div className="ai-dev-grid">
          {aiDev.items.map((item, i) => (
            <Reveal className="ai-dev-card" delay={(i % 2) * 0.1} from={SIDES[i % 2]} key={item.title}>
              <h3>{item.title}</h3>
              <p className="ai-dev-summary">{item.summary}</p>
              <dl>
                <div>
                  <dt>{aiDev.labels.problem}</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>{aiDev.labels.solution}</dt>
                  <dd>{item.solution}</dd>
                </div>
                <div>
                  <dt>{aiDev.labels.result}</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
              <ul className="ai-dev-stack">
                {item.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
