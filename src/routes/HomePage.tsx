import { Head } from "vite-react-ssg";
import SmoothScrollProvider from "../app/providers/SmoothScrollProvider";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import StackCarousel from "../components/sections/StackCarousel";
import AIDevelopment from "../components/sections/AIDevelopment";
import Experience from "../components/sections/Experience";
import StackFormacao from "../components/sections/StackFormacao";
import Contact from "../components/sections/Contact";
import { useContent, useLocale } from "../content/useContent";
import type { Locale } from "../i18n/paths";

type SectionKey = "experience" | "stack" | "iaDev" | "contact";

const SECTION_IDS: Record<Locale, Record<SectionKey, string>> = {
  pt: {
    experience: "experiencia",
    stack: "stack",
    iaDev: "ia-dev",
    contact: "contato",
  },
  en: {
    experience: "experience",
    stack: "stack",
    iaDev: "ia-dev",
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
          <StackCarousel />
          <Experience id={ids.experience} />
          <AIDevelopment id={ids.iaDev} />
          <StackFormacao id={ids.stack} />
          <Contact id={ids.contact} />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
