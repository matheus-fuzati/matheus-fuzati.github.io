import { Head } from "vite-react-ssg";
import { useContent, useLocale } from "../content/useContent";
import { pushEvent } from "../lib/analytics";
import type { Locale } from "../i18n/paths";

const SEO: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Currículo — Matheus Fuzati",
    description: "Currículo de Matheus Fuzati, Engenheiro de Dados.",
  },
  en: {
    title: "Resume — Matheus Fuzati",
    description: "Resume of Matheus Fuzati, Data Engineer.",
  },
};

/**
 * Standalone — não monta Header/Footer nem nenhum provider de animação
 * (Lenis/GSAP/R3F). Code-splitting por rota garante que o chunk dessa
 * página nunca carrega `three`/`gsap`/`lenis`, pra não vazar nada na
 * impressão (ver specs/03-tech-spec.md).
 */
export function Component() {
  const locale = useLocale();
  const d = useContent();
  const seo = SEO[locale];
  const backHref = locale === "pt" ? "/" : "/en";

  return (
    <>
      <Head htmlAttributes={{ lang: d.lang }}>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>
      <main className="container cv-main">
        <div
          className="no-print"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}
        >
          <a href={backHref} style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
            ← {d.cv.backCta}
          </a>
          <button
            className="btn btn-primary"
            onClick={() => {
              pushEvent("cv_print_click", { locale });
              window.print();
            }}
          >
            {d.cv.printCta}
          </button>
        </div>

        <header className="cv-header">
          <h1 className="cv-name">{d.hero.name}</h1>
          <p className="cv-eyebrow">{d.hero.eyebrow}</p>
          <p className="cv-lead">{d.about.paragraphs[0]}</p>
          <div className="cv-channels">
            {d.contact.channels
              .filter((c) => c.k !== "WhatsApp")
              .map((c) => (
                <a href={c.href} className="cv-channel" key={c.k}>
                  {c.k}: {c.v}
                </a>
              ))}
          </div>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-title">{d.experience.title}</h2>
          <div className="timeline">
            {d.experience.items.map((item) => (
              <div className="tl-item" key={`${item.company}-${item.period}`}>
                <span className="period">{item.period}</span>
                <p className="role">{item.role}</p>
                <p className="company">
                  {item.company}
                  {item.companyNote ? ` — ${item.companyNote}` : ""}
                </p>
                <p className="desc">{item.description}</p>
                {item.highlights && (
                  <div className="tl-highlights">
                    {item.highlights.map((h) => (
                      <div className="tl-highlight" key={h.label}>
                        <span className="tl-highlight-head">
                          <strong>{h.label}</strong> <span className="period">{h.period}</span>
                        </span>
                        <p>{h.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {d.experience.footnote && <p className="cv-footnote">{d.experience.footnote}</p>}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{d.skills.title}</h2>
          <div className="cv-skills-list">
            {d.skills.categories.map((cat) => (
              <div key={cat.title} className="cv-skill-cat">
                <p className="cv-skill-cat-title">{cat.title}</p>
                <p className="cv-skill-cat-items">{cat.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">{d.education.title}</h2>
          {d.education.academic.map((a) => (
            <div className="edu-item" key={a.degree}>
              <span className="period">{a.period}</span>
              <p className="title">{a.degree}</p>
              <p className="inst">{a.institution}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
