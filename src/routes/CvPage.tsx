import { Head } from "vite-react-ssg";
import { useContent, useLocale } from "../content/useContent";
import type { Locale } from "../i18n/paths";

const SEO: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Currículo — Matheus Fuzati",
    description: "Currículo de Matheus Fuzati, Engenheiro de Dados na DP6, alocado no Itaú.",
  },
  en: {
    title: "Resume — Matheus Fuzati",
    description: "Resume of Matheus Fuzati, Data Engineer at DP6, on-site at Itaú.",
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
      <main className="container" style={{ maxWidth: 820, paddingTop: 56, paddingBottom: 80 }}>
        <div
          className="no-print"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}
        >
          <a href={backHref} style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
            ← {d.cv.backCta}
          </a>
          <button className="btn btn-primary" onClick={() => window.print()}>
            {d.cv.printCta}
          </button>
        </div>

        <header style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 34 }}>{d.hero.name}</h1>
          <p style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 14, marginTop: 6 }}>{d.hero.eyebrow}</p>
          <p style={{ marginTop: 14, color: "var(--muted)", maxWidth: "60ch" }}>{d.about.paragraphs[0]}</p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16, fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--muted)" }}>
            {d.contact.channels
              .filter((c) => c.k !== "WhatsApp")
              .map((c) => (
                <a href={c.href} style={{ color: "var(--muted)", textDecoration: "none" }} key={c.k}>
                  {c.k}: {c.v}
                </a>
              ))}
          </div>
        </header>

        <section style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: ".07em",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {d.experience.title}
          </h2>
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
          {d.experience.footnote && (
            <p style={{ marginTop: 12, fontSize: 11.5, color: "var(--muted)" }}>{d.experience.footnote}</p>
          )}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: ".07em",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {d.skills.title}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {d.skills.categories.map((cat) => (
              <div key={cat.title}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--text)", marginBottom: 6 }}>{cat.title}</p>
                <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7 }}>{cat.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: ".07em",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            {d.education.title}
          </h2>
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
