import { Head } from "vite-react-ssg";
import SmoothScrollProvider from "../app/providers/SmoothScrollProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Atuacao from "../components/sections/Atuacao";
import AIDevelopment from "../components/sections/AIDevelopment";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Education from "../components/sections/Education";
import Contact from "../components/sections/Contact";
import { useContent, useLocale } from "../content/useContent";
import type { Locale } from "../i18n/paths";

type SectionKey = "about" | "atuacao" | "experience" | "stack" | "iaDev" | "education" | "contact";

const SECTION_IDS: Record<Locale, Record<SectionKey, string>> = {
  pt: {
    about: "sobre",
    atuacao: "atuacao",
    experience: "experiencia",
    stack: "stack",
    iaDev: "ia-dev",
    education: "formacao",
    contact: "contato",
  },
  en: {
    about: "about",
    atuacao: "atuacao",
    experience: "experience",
    stack: "stack",
    iaDev: "ia-dev",
    education: "education",
    contact: "contact",
  },
};

const SEO: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Matheus Fuzati — Engenheiro de Dados & AI Developer",
    description:
      "Engenheiro de Dados e AI Developer. Pipelines multi-cloud (GCP e AWS) no Itaú e plataformas internas de dados desenvolvidas com IA na DP6, com Spec Driven, ADRs e guardrails.",
  },
  en: {
    title: "Matheus Fuzati — Data Engineer & AI Developer",
    description:
      "Data Engineer and AI Developer. Multi-cloud (GCP and AWS) pipelines at Itaú, and internal data platforms built with AI at DP6, using Spec-Driven Development, ADRs, and guardrails.",
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
          <Atuacao id={ids.atuacao} />
          <AIDevelopment id={ids.iaDev} />
          <Experience id={ids.experience} />
          <Skills id={ids.stack} />
          <Education id={ids.education} />
          <Contact id={ids.contact} />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
