import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { useContent, useLocale } from "../content/useContent";
import { pushEvent } from "../lib/analytics";
import type { Locale } from "../i18n/paths";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Reveal from "../components/motion/Reveal";
import ViewTransitionLink from "../components/motion/ViewTransitionLink";
import Lightbox from "../components/ui/Lightbox";

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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // navegação via ViewTransitionLink é SPA (sem reload) — o browser mantém
  // o scroll da página anterior, então a página de projeto abria no meio.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
        <div className="container project-container">
          <ViewTransitionLink
            className="project-back"
            to={backHref}
            onClick={() => pushEvent("nav_click", { link: "back_to_home" })}
          >
            ← {aiDev.labels.back}
          </ViewTransitionLink>

          <Reveal className="project-hero" once>
            <span className="eyebrow">{aiDev.eyebrow}</span>
            <h1>{project.title}</h1>
            <p className="project-summary">{project.summary}</p>
          </Reveal>

          <Reveal className="project-cover" once>
            <button
              type="button"
              className="project-cover-btn"
              onClick={() => {
                pushEvent("project_gallery_open", { item_id: project.slug, image: "cover" });
                setLightbox({ src: project.cover, alt: project.title });
              }}
            >
              <img src={project.cover} alt={project.title} loading="lazy" />
            </button>
          </Reveal>

          <div className="project-body">
            <div className="project-main">
              <Reveal className="project-section" once>
                <span className="project-label">{aiDev.labels.description}</span>
                <p>{project.problem}</p>
                <p>{project.solution}</p>
              </Reveal>

              <Reveal className="project-section" once>
                <span className="project-label">{aiDev.labels.built}</span>
                <p>{project.architecture}</p>
                <p>{project.decisions}</p>
              </Reveal>

              <Reveal className="project-section" once>
                <span className="project-label">{aiDev.labels.features}</span>
                <ul className="project-features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="project-aside">
              <Reveal className="project-aside-card" once>
                <span className="project-label">{aiDev.labels.stack}</span>
                <ul className="ai-dev-stack">
                  {project.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="project-highlight" delay={0.05} once>
                <span className="project-label">{aiDev.labels.highlight}</span>
                <p>{project.highlight}</p>
              </Reveal>

              <Reveal className="project-aside-card" delay={0.1} once>
                <span className="project-label">{aiDev.labels.results}</span>
                <p>{project.results}</p>
              </Reveal>
            </div>
          </div>

          <Reveal className="project-section project-gallery-section" once>
            <span className="project-label">{aiDev.labels.gallery}</span>
            <div className="project-gallery">
              {project.gallery.map((src, i) => {
                const alt = `${project.title} — ${aiDev.labels.gallery} ${i + 1}`;
                return (
                  <div className="project-gallery-item" key={src}>
                    <button
                      type="button"
                      onClick={() => {
                        pushEvent("project_gallery_open", { item_id: project.slug, image: src.split("/").pop() });
                        setLightbox({ src, alt });
                      }}
                    >
                      <img src={src} alt={alt} loading="lazy" />
                    </button>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={() => setLightbox(null)} />
    </>
  );
}
