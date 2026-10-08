import { useContent } from "../../content/useContent";
import Reveal from "../motion/Reveal";
import ViewTransitionLink from "../motion/ViewTransitionLink";

interface Props {
  id: string;
}

export default function Contact({ id }: Props) {
  const { contact } = useContent();

  return (
    <section id={id} className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16 }}>{contact.body}</p>
          <div style={{ marginTop: 24 }}>
            <ViewTransitionLink className="btn btn-primary" to={contact.cvHref}>
              {contact.cvLabel}
            </ViewTransitionLink>
          </div>
        </Reveal>
        <Reveal className="contact-grid" delay={0.1}>
          {contact.channels.map((c) => (
            <a className="contact-card" href={c.href} target="_blank" rel="noopener" key={c.k}>
              <span className="k">{c.k}</span>
              <span className="v">{c.v}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
