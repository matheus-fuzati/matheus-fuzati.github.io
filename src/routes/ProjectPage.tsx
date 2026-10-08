import { useParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { useContent, useLocale } from "../content/useContent";
import type { Locale } from "../i18n/paths";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Reveal from "../components/motion/Reveal";
import ViewTransitionLink from "../components/motion/ViewTransitionLink";

const NOT_FOUND: Record<Locale, string> = {
  pt: "Projeto não encontrado.",
  en: "Project not found.",
};

export function Component() {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const d = useContent();
  const { aiDev } = d;
  const project = aiDev.items.find((p) => p.slug === slug);
  const backHref = locale === "pt" ? "/#ia-dev" : "/en/#ia-dev";

  if (!project) {
    return (
      <>
        <Header />
        <main className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <p>{NOT_FOUND[locale]}</p>
          <a href={backHref}>←</a>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head htmlAttributes={{ lang: d.lang }}>
        <title>{`${project.title} — Matheus Fuzati`}</title>
        <meta name="description" content={project.summary} />
      </Head>
      <Header />
      <main className="project-page">
        <div className="container">
          <ViewTransitionLink className="project-back" to={locale === "pt" ? "/" : "/en"}>
            ← {aiDev.labels.back}
          </ViewTransitionLink>

          <Reveal className="project-hero">
            <span className="eyebrow">{aiDev.eyebrow}</span>
            <h1>{project.title}</h1>
            <p className="project-summary">{project.summary}</p>
          </Reveal>

          <Reveal className="project-cover-placeholder">
            <span>{aiDev.labels.gallery} — capa</span>
          </Reveal>

          <div className="project-body">
            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.problem}</span>
              <p>{project.problem}</p>
            </Reveal>

            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.solution}</span>
              <p>{project.solution}</p>
            </Reveal>

            <Reveal className="project-gallery">
              {[1, 2, 3].map((n) => (
                <div className="project-gallery-item" key={n}>
                  <span>{aiDev.labels.gallery} {n}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.architecture}</span>
              <p>{project.architecture}</p>
            </Reveal>

            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.decisions}</span>
              <p>{project.decisions}</p>
            </Reveal>

            <Reveal className="project-highlight">
              <span className="project-label">{aiDev.labels.highlight}</span>
              <p>{project.highlight}</p>
            </Reveal>

            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.results}</span>
              <p>{project.results}</p>
            </Reveal>

            <Reveal className="project-section">
              <span className="project-label">{aiDev.labels.stack}</span>
              <ul className="ai-dev-stack">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
