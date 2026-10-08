import { Head } from "vite-react-ssg";
import SmoothScrollProvider from "../app/providers/SmoothScrollProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import AIDevelopment from "../components/sections/AIDevelopment";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import { useContent, useLocale } from "../content/useContent";
import type { Locale } from "../i18n/paths";

type SectionKey = "about" | "experience" | "stack" | "iaDev" | "projects" | "education" | "contact";

const SECTION_IDS: Record<Locale, Record<SectionKey, string>> = {
  pt: {
    about: "sobre",
    experience: "experiencia",
    stack: "stack",
    iaDev: "ia-dev",
    projects: "projetos",
    education: "formacao",
    contact: "contato",
  },
  en: {
    about: "about",
    experience: "experience",
    stack: "stack",
    iaDev: "ia-dev",
    projects: "projects",
    education: "education",
    contact: "contact",
  },
};

const SEO: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Matheus Fuzati — Engenheiro de Dados",
    description:
      "Portfólio de Matheus Fuzati, Engenheiro de Dados na DP6, alocado no Itaú. Cloud, pipelines de dados e engenharia de dados.",
  },
  en: {
    title: "Matheus Fuzati — Data Engineer",
    description: "Portfolio of Matheus Fuzati, Data Engineer at DP6, on-site at Itaú. Cloud, data pipelines, and data engineering.",
  },
};

export function Component() {
  const locale = useLocale();
  const d = useContent();
  const ids = SECTION_IDS[locale];
  const seo = SEO[locale];

  return (
    <>
      <Head htmlAttributes={{ lang: d.lang }}>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
      </Head>
      <SmoothScrollProvider>
        <Header />
        <main>
          <Hero />
          <About id={ids.about} />
          <Experience id={ids.experience} />
          <Skills id={ids.stack} />
          <AIDevelopment id={ids.iaDev} />
          <Projects id={ids.projects} />
          <Education id={ids.education} />
          <Contact id={ids.contact} />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
