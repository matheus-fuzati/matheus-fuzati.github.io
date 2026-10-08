import { useContent, useLocale } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import ParallaxLabel from "../motion/ParallaxLabel";
import SectionSideLabel from "../motion/SectionSideLabel";
import ViewTransitionLink from "../motion/ViewTransitionLink";

interface Props {
  id: string;
}

const SIDES = ["left", "right"] as const;

export default function AIDevelopment({ id }: Props) {
  const { aiDev } = useContent();
  const locale = useLocale();
  const base = locale === "pt" ? "/projetos" : "/en/projetos";

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
            <Reveal className="ai-dev-card" delay={(i % 2) * 0.1} from={SIDES[i % 2]} key={item.slug}>
              <h3>{item.title}</h3>
              <p className="ai-dev-summary">{item.summary}</p>
              <ViewTransitionLink className="ai-dev-link" to={`${base}/${item.slug}`}>
                {aiDev.labels.viewProject} →
              </ViewTransitionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
