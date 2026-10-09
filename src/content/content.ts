// Fonte de conteúdo do site — ver specs/01-content-spec.md para o schema.

export type Locale = "pt" | "en";

interface LabeledValue {
  k: string;
  v: string;
}

interface ExperienceHighlight {
  label: string;
  period: string;
  description: string;
}

interface ExperienceItem {
  period: string;
  current?: boolean;
  role: string;
  company: string;
  companyNote?: string;
  description: string;
  highlights?: ExperienceHighlight[];
}

interface SkillCategory {
  title: string;
  items: string[];
}

export interface AIDevCase {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  decisions: string;
  features: string[];
  results: string;
  highlight: string;
  stack: string[];
  cover: string;
  gallery: string[];
}

interface EducationAcademic {
  period: string;
  degree: string;
  institution: string;
}

interface EducationCourse {
  institution: string;
  course: string;
}

interface ContactChannel {
  k: string;
  v: string;
  href: string;
}

export interface SiteContent {
  lang: string;
  nav: {
    brand: string;
    links: { href: string; label: string }[];
  };
  hero: {
    eyebrow: string;
    name: string;
    meta: LabeledValue[];
  };
  about: {
    eyebrow: string;
    title: string;
    summary: string;
    paragraphs: string[];
    facts: LabeledValue[];
  };
  experience: {
    eyebrow: string;
    title: string;
    footnote?: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    categories: SkillCategory[];
  };
  aiDev: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      description: string;
      built: string;
      features: string;
      results: string;
      highlight: string;
      stack: string;
      gallery: string;
      viewProject: string;
      back: string;
    };
    items: AIDevCase[];
  };
  education: {
    eyebrow: string;
    title: string;
    academicTitle: string;
    coursesTitle: string;
    academic: EducationAcademic[];
    courses: EducationCourse[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cvLabel: string;
    cvHref: string;
    channels: ContactChannel[];
  };
  footer: {
    rights: string;
  };
  cv: {
    title: string;
    printCta: string;
    backCta: string;
  };
}

export const content: Record<Locale, SiteContent> = {
  pt: {
    lang: "pt-BR",
    nav: {
      brand: "MF",
      links: [
        { href: "#experiencia", label: "Experiência" },
        { href: "#ia-dev", label: "Projetos IA" },
        { href: "#stack", label: "Stack & Formação" },
        { href: "#contato", label: "Contato" },
      ],
    },
    hero: {
      eyebrow: "Engenheiro de Dados & AI Developer",
      name: "Matheus Fuzati",
      meta: [
        { k: "Cargo", v: "DP6 — Data Engineer Consultant" },
        { k: "Formação", v: "Ciência de Dados" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Sobre mim",
      summary:
        "Engenheiro de Dados formado em Ciência de Dados, com pós-graduação em Arquitetura e Projetos de Cloud Computing em andamento. Construo pipelines multi-cloud (GCP e AWS) na DP6, atuando como consultor em clientes externos e também em liderança e desenvolvimento de iniciativas internas de engenharia de dados desenvolvidas com IA.",
      paragraphs: [
        "Sou Engenheiro de Dados formado em Ciência de Dados. Atuo com data pipelines de ponta a ponta em ambientes multi-cloud (GCP e AWS), da extração à entrega de produtos de dados.",
        "Hoje atuo em duas frentes na DP6, como consultor de engenharia de dados em clientes externos, onde já passei por grandes bancos e ecommerces, lidando com pipelines que conectam dados do GA4 no BigQuery ao processamento na AWS, com Glue, Lambda, Step Functions, EMR, S3 e Athena. Em paralelo, atuo na liderança e desenvolvimento de iniciativas internas de inovação, que reúnem as ferramentas de dia a dia da engenharia de dados: governança no GCP, FinOps da conta de faturamento, gestão de certificações e a base de conhecimento da área.",
        "Essas ferramentas foram construídas com IA, dentro de um processo de engenharia. Isso inclui Spec-Driven Development, ADRs, infraestrutura em Terraform, CI/CD com ambientes dev e prod, e um plugin com hook de política que impede o agente de executar ações irreversíveis sem confirmação. A IA acelera a entrega, e o processo garante que o resultado seja confiável.",
        "Antes da DP6, passei pela Atento (ETL on-premise com SQL Server e Azure/Databricks, em consultoria para grandes clientes) e pela ESEG (pipelines em GCP, gestão de data lake e automação em Python).",
      ],
      facts: [
        { k: "Empresa", v: "DP6 — consultoria de dados" },
        { k: "Alocação atual", v: "Consultoria externa" },
        { k: "Base", v: "Brasil" },
        { k: "Inglês", v: "C1" },
        { k: "Idiomas do site", v: "PT-BR / EN" },
      ],
    },
    experience: {
      eyebrow: "Experiência",
      title: "Trajetória Profissional",
      items: [
        {
          period: "Desde 02/2026",
          current: true,
          role: "Data Engineer Consultant",
          company: "DP6",
          description:
            "Consultoria de dados atuando em duas frentes: cliente do setor bancário e iniciativa interna de inovação, depois de uma passagem inicial por um cliente de e-commerce.",
          highlights: [
            {
              label: "Setor Bancário",
              period: "Desde 06/2026",
              description:
                "Squad de democratização de dados (Data Mesh) — mantenho e crio pipelines que conectam dados do GA4 no BigQuery ao processamento na AWS, com Glue, Lambda, Step Functions, EMR, S3 e Athena.",
            },
            {
              label: "Inovação Interna",
              period: "Desde 04/2026",
              description:
                "Desenvolvimento e liderança das plataformas internas e dos padrões do hub — organizo entregas e prazos e gerencio demandas.",
            },
            {
              label: "Setor de E-commerce",
              period: "02/2026 – 06/2026",
              description:
                "Discovery de dados e processos do cliente e definição da nova arquitetura do Data Warehouse, incluindo um cubo de dados.",
            },
          ],
        },
        {
          period: "07/2025 – 02/2026",
          role: "Analista de Dados Pleno",
          company: "Atento",
          description:
            "ETL on-premise com SQL Server (camadas Raw, Stage e Mart) e demandas em Azure com Python e Databricks, em consultoria para grandes clientes.",
        },
        {
          period: "09/2024 – 07/2025",
          role: "Analista de Inteligência de Mercado",
          company: "ESEG",
          description:
            "Pipelines ETL em GCP (Cloud Storage, BigQuery, Cloud Scheduler e Cloud Run Functions), gestão de data lake e automações em Python.",
        },
        {
          period: "11/2023 – 09/2024",
          role: "Estágio em Business Intelligence",
          company: "ESEG",
          description:
            "Dashboards automatizados em Power BI e Looker Studio integrando MySQL, BigQuery e Google Analytics; pipelines ETL via API em Python.",
        },
        {
          period: "05/2021 – 01/2023",
          role: "Analista de Dados",
          company: "Los Carvalhos",
          description: "Pipelines ETL em Python e SQL, com dashboards e análises para o negócio.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Ferramentas e Habilidades",
      categories: [
        {
          title: "Engenharia de Dados",
          items: [
            "SQL",
            "Python",
            "BigQuery",
            "Dataform",
            "AWS Glue",
            "Athena",
            "Step Functions",
            "Lambda",
            "S3",
            "EMR",
            "SQL Server",
            "Databricks",
            "Airflow",
          ],
        },
        {
          title: "Cloud e Infraestrutura",
          items: [
            "GCP — BigQuery, Cloud Run, Cloud Storage, Cloud Scheduler, Cloud Logging, Firestore, IAM, IAP, WIF",
            "AWS",
            "Azure",
            "Terraform",
            "Docker",
            "GitHub Actions",
            "FinOps",
          ],
        },
        {
          title: "AI Development",
          items: ["Claude Code (hooks, skills e plugins)", "Spec-Driven Development (Spec-Kit)", "Loop Engineering", "ADRs"],
        },
        {
          title: "Aplicações",
          items: ["FastAPI", "React", "TypeScript", "Next.js", "Tailwind", "Docusaurus"],
        },
        {
          title: "Automação",
          items: ["Python (Selenium, BeautifulSoup, PyAutoGUI)", "Integração com APIs"],
        },
      ],
    },
    aiDev: {
      eyebrow: "Projetos com IA",
      title: "Plataformas Desenvolvidas - IA Development",
      intro:
        "Soluções desenvolvidas com IA. Cada projeto tem uma página com problema, arquitetura, decisões técnicas e como a IA entrou no processo.",
      labels: {
        description: "Descrição",
        built: "Como foi construído",
        features: "Funcionalidades",
        results: "Resultados",
        highlight: "Destaque",
        stack: "Stack",
        gallery: "Prints das telas",
        viewProject: "Ver projeto",
        back: "Voltar",
      },
      items: [
        {
          slug: "polaris-atlas",
          title: "Polaris Atlas",
          summary: "Observabilidade e governança de dados no GCP: catálogo, lineage, PII, qualidade, freshness, FinOps e Cloud Storage.",
          problem:
            "A iniciativa de dados da DP6 não tinha visibilidade centralizada sobre saúde, qualidade e custo dos pipelines entre os projetos do programa — cada time descobria problema de dado tarde, sem um catálogo ou histórico de linhagem comum.",
          solution:
            "Arquitetei e desenvolvi o Atlas como monorepo (backend, frontend e infraestrutura em Terraform): catálogo de dados, lineage, detecção de PII, métricas de qualidade e freshness, FinOps e integração com Cloud Storage — conduzido em specs antes do código, com arquivo de contexto próprio e disciplina de changelog/sessionlog a cada entrega.",
          architecture:
            "Dev e prod rodam no mesmo projeto GCP, isolados por convenção de nome de recurso em vez de projetos separados — restrição do cliente para esse programa. Autenticação via OAuth sobre IAP.",
          decisions:
            "A autenticação OAuth/IAP do Atlas virou a implementação de referência reaproveitada pelos outros repositórios da iniciativa (Billing Platform, Certifications), em vez de cada um implementar a própria.",
          features: [
            "Catálogo de dados centralizado",
            "Lineage entre pipelines",
            "Detecção automática de PII",
            "Métricas de qualidade e freshness",
            "FinOps da iniciativa",
            "Integração com Cloud Storage",
          ],
          results: "Tornou-se o exemplo mais maduro de desenvolvimento assistido por IA da iniciativa e a referência de autenticação para os demais projetos.",
          highlight: "Dev e prod no mesmo projeto GCP, isolados por nomes de recurso — foi restrição do cliente.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-Driven Development"],
          cover: "/projects/polaris-atlas/cover.png",
          gallery: [
            "/projects/polaris-atlas/gallery-1.png",
            "/projects/polaris-atlas/gallery-2.png",
            "/projects/polaris-atlas/gallery-3.png",
            "/projects/polaris-atlas/gallery-4.png",
            "/projects/polaris-atlas/gallery-5.png",
            "/projects/polaris-atlas/gallery-6.png",
          ],
        },
        {
          slug: "billing-platform",
          title: "Billing Platform",
          summary: "Central de FinOps da conta de faturamento: custo por projeto e ambiente, evolução, anomalias e forecast.",
          problem:
            "O modelo de custo existente (Cost Model) cobria só um projeto GCP por vez; faltava visibilidade de FinOps pra conta de faturamento inteira, com granularidade por projeto e ambiente.",
          solution:
            "Parti de um fork estrutural do Cost Model e adaptei a arquitetura (Dataform + API + painel) pra ingerir o billing export da conta inteira, adicionando a dimensão de projeto — permitindo ver evolução de custo, detectar anomalias e montar forecast.",
          architecture:
            "Mesma espinha dorsal do Cost Model (Dataform sobre BigQuery + API + painel), com grão adicional de projeto/ambiente vindo do billing export completo da conta.",
          decisions:
            "A sincronização incremental por partição rodou em modo sombra antes do cutover — validando os números em paralelo com o pipeline antigo antes de desligar a fonte anterior, pra não arriscar quebrar um relatório de custo que a liderança já usava.",
          features: [
            "Ingestão do billing export da conta inteira",
            "Granularidade por projeto e ambiente",
            "Evolução de custo",
            "Detecção de anomalias",
            "Forecast de gastos",
          ],
          results: "Em produção, com visibilidade de custo em nível de projeto e ambiente pra toda a conta de faturamento, incluindo evolução, anomalias e forecast.",
          highlight: "Nasceu como fork estrutural do Cost Model. A sincronização incremental por partição rodou em modo sombra antes do cutover.",
          stack: ["GCP BigQuery", "Dataform", "API de custo", "Painel FinOps"],
          cover: "/projects/billing-platform/cover.png",
          gallery: [
            "/projects/billing-platform/gallery-1.png",
            "/projects/billing-platform/gallery-2.png",
            "/projects/billing-platform/gallery-3.png",
          ],
        },
        {
          slug: "dp6-certifications",
          title: "DP6 Certifications",
          summary: "Gestão das certificações dos colaboradores: catálogo, badges, campanhas e análises.",
          problem:
            "A DP6 precisava de um jeito estruturado de catalogar, aprovar e acompanhar certificações dos colaboradores e rodar campanhas, sem plataforma própria pra isso.",
          solution:
            "Desenvolvi a plataforma em Next.js com armazenamento híbrido (Firestore + BigQuery), usando o fluxo formal de Spec-Kit do GitHub (spec → plano → tarefas) e ADRs.",
          architecture:
            "Next.js no frontend/backend, Firestore pra dados operacionais (catálogo, badges, aprovações) e BigQuery pras análises e campanhas — armazenamento híbrido, cada banco no que faz melhor.",
          decisions:
            "É o projeto com mais specs formais da iniciativa (10), servindo de referência de como estruturar o fluxo Spec-Kit pros outros repositórios.",
          features: [
            "Catálogo de certificações",
            "Sistema de badges",
            "Fluxo de aprovação",
            "Campanhas de certificação",
            "Análises em BigQuery",
          ],
          results: "Plataforma ativa, em uso interno na DP6 para catálogo, badges, aprovação e campanhas de certificação.",
          highlight: "É o projeto de referência do Spec-Driven, com 10 specs. O armazenamento é híbrido, Firestore mais BigQuery.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
          cover: "/projects/dp6-certifications/cover.png",
          gallery: [
            "/projects/dp6-certifications/gallery-1.png",
            "/projects/dp6-certifications/gallery-2.png",
            "/projects/dp6-certifications/gallery-3.png",
          ],
        },
        {
          slug: "polaris-heap",
          title: "Polaris Heap",
          summary: "Guia do engenheiro de dados da DP6: padrões, boas práticas e cases.",
          problem: "O conhecimento de engenharia de dados da DP6 estava espalhado, sem um lugar único e vivo de documentação pro time.",
          solution:
            "Construí um hub de documentação em Docusaurus reunindo padrões, boas práticas e cases, centralizando convenções entre repositórios e integrando o design system da iniciativa.",
          architecture: "Site estático Docusaurus, com os tokens de design compartilhados entre os projetos da iniciativa.",
          decisions: "Um script próprio verifica links e regras de conteúdo automaticamente a cada atualização, pra evitar link quebrado ou página fora do padrão.",
          features: [
            "Hub de documentação centralizado",
            "Padrões e boas práticas",
            "Cases documentados",
            "Verificação automática de links e regras de conteúdo",
            "Design tokens compartilhados da iniciativa",
          ],
          results: "Base de conhecimento ativa da iniciativa de dados da DP6.",
          highlight: "Um script verifica links e regras de conteúdo automaticamente.",
          stack: ["Docusaurus", "Site estático", "Design tokens"],
          cover: "/projects/polaris-heap/cover.png",
          gallery: [
            "/projects/polaris-heap/gallery-1.png",
            "/projects/polaris-heap/gallery-2.png",
            "/projects/polaris-heap/gallery-3.png",
          ],
        },
      ],
    },
    education: {
      eyebrow: "Formação",
      title: "Formação Acadêmica e Cursos",
      academicTitle: "Formação Acadêmica",
      coursesTitle: "Cursos e Certificados",
      academic: [
        {
          period: "2026 – 2027 (em andamento)",
          degree: "Pós-graduação em Arquitetura e Projetos de Cloud Computing",
          institution: "Faculdade GRAN",
        },
        {
          period: "2023 – 2025",
          degree: "Graduação em Ciência de Dados",
          institution: "Faculdade Estácio",
        },
      ],
      courses: [
        { institution: "Udemy", course: "Engenharia de Dados com Databricks, Spark e PySpark" },
        { institution: "Udemy", course: "Google Cloud Associate Cloud Engineer (GCP)" },
        { institution: "Udemy", course: "Engenharia de Dados com Python e Bancos de Dados SQL e NoSQL" },
        { institution: "FIAP", course: "Business Intelligence" },
        { institution: "FIAP", course: "Big Data e Analytics" },
        { institution: "Data Science Academy", course: "Microsoft Power BI para Business Intelligence e Data Science" },
        { institution: "Data Science Academy", course: "Python para Análise de Dados e Data Science" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar?",
      body: "Aberto a conversar sobre engenharia de dados, cloud e desenvolvimento com IA.",
      cvLabel: "Baixar Currículo",
      cvHref: "/cv/",
      channels: [
        { k: "Email", v: "fuzatimatheus@gmail.com", href: "mailto:fuzatimatheus@gmail.com" },
        { k: "LinkedIn", v: "/in/matheus-fuzati-de-carvalho", href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho/" },
        { k: "GitHub", v: "@matheus-fuzati", href: "https://github.com/matheus-fuzati" },
      ],
    },
    footer: {
      rights: "© 2026 Matheus Fuzati. Todos os direitos reservados.",
    },
    cv: {
      title: "Currículo",
      printCta: "Imprimir / Salvar PDF",
      backCta: "Voltar ao site",
    },
  },

  en: {
    lang: "en",
    nav: {
      brand: "MF",
      links: [
        { href: "#experience", label: "Experience" },
        { href: "#ia-dev", label: "AI Projects" },
        { href: "#stack", label: "Stack & Education" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Data Engineer & AI Developer",
      name: "Matheus Fuzati",
      meta: [
        { k: "Role", v: "DP6 — Data Engineer Consultant" },
        { k: "Background", v: "Data Science" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "About me",
      summary:
        "Data Engineer with a degree in Data Science, currently pursuing a postgraduate program in Cloud Architecture & Design. I build multi-cloud (GCP and AWS) pipelines at DP6, working as a consultant for external clients and also leading and developing internal data engineering initiatives built with AI.",
      paragraphs: [
        "I'm a Data Engineer with a degree in Data Science. I work on end-to-end data pipelines across multi-cloud environments (GCP and AWS), from extraction to delivering data products.",
        "Today I work on two fronts at DP6: as a data engineering consultant for external clients, where I've worked with large banks and e-commerce companies, handling pipelines that connect GA4 data in BigQuery to processing on AWS, using Glue, Lambda, Step Functions, EMR, S3, and Athena. In parallel, I lead and develop internal innovation initiatives that bring together the data engineering team's everyday tools: GCP governance, billing-account FinOps, certification management, and the team's knowledge base.",
        "These tools were built with AI, inside an engineering process. That includes Spec-Driven Development, ADRs, Terraform infrastructure, CI/CD with dev and prod environments, and a plugin with a policy hook that stops the agent from taking irreversible actions without confirmation. AI speeds up delivery, and the process keeps the result reliable.",
        "Before DP6, I worked at Atento (on-premise ETL with SQL Server and Azure/Databricks, consulting for large clients) and at ESEG (GCP pipelines, data lake management, and Python automation).",
      ],
      facts: [
        { k: "Company", v: "DP6 — data consultancy" },
        { k: "Current allocation", v: "External Consulting" },
        { k: "Based in", v: "Brazil" },
        { k: "English", v: "C1" },
        { k: "Site languages", v: "PT-BR / EN" },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional Journey",
      items: [
        {
          period: "Since 02/2026",
          current: true,
          role: "Data Engineer Consultant",
          company: "DP6",
          description: "Data consulting across two fronts: a banking-sector client and an internal innovation initiative, after an initial stint with an e-commerce client.",
          highlights: [
            {
              label: "Banking Sector",
              period: "Since 06/2026",
              description:
                "Data democratization squad (Data Mesh) — I maintain and build pipelines connecting GA4 data in BigQuery to processing on AWS, using Glue, Lambda, Step Functions, EMR, S3, and Athena.",
            },
            {
              label: "Internal Innovation",
              period: "Since 04/2026",
              description: "Development and leadership of the internal platforms and hub standards — I organize deliveries, deadlines, and manage demand.",
            },
            {
              label: "E-commerce Sector",
              period: "02/2026 – 06/2026",
              description: "Data and process discovery for the client, and defining the new Data Warehouse architecture, including a data cube.",
            },
          ],
        },
        {
          period: "07/2025 – 02/2026",
          role: "Mid-level Data Analyst",
          company: "Atento",
          description: "On-premise ETL with SQL Server (Raw, Stage, and Mart layers) and Azure workloads with Python and Databricks, consulting for large clients.",
        },
        {
          period: "09/2024 – 07/2025",
          role: "Market Intelligence Analyst",
          company: "ESEG",
          description: "ETL pipelines on GCP (Cloud Storage, BigQuery, Cloud Scheduler, Cloud Run Functions), data lake management, and Python automation.",
        },
        {
          period: "11/2023 – 09/2024",
          role: "Business Intelligence Intern",
          company: "ESEG",
          description: "Automated dashboards in Power BI and Looker Studio integrating MySQL, BigQuery, and Google Analytics; API-based ETL pipelines in Python.",
        },
        {
          period: "05/2021 – 01/2023",
          role: "Data Analyst",
          company: "Los Carvalhos",
          description: "ETL pipelines in Python and SQL, with dashboards and analysis for the business.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Tools & Skills",
      categories: [
        {
          title: "Data Engineering",
          items: ["SQL", "Python", "BigQuery", "Dataform", "AWS Glue", "Athena", "Step Functions", "Lambda", "S3", "EMR", "SQL Server", "Databricks", "Airflow"],
        },
        {
          title: "Cloud & Infrastructure",
          items: [
            "GCP — BigQuery, Cloud Run, Cloud Storage, Cloud Scheduler, Cloud Logging, Firestore, IAM, IAP, WIF",
            "AWS",
            "Azure",
            "Terraform",
            "Docker",
            "GitHub Actions",
            "FinOps",
          ],
        },
        {
          title: "AI Development",
          items: ["Claude Code (hooks, skills, plugins)", "Spec-Driven Development (Spec-Kit)", "Loop Engineering", "ADRs"],
        },
        {
          title: "Applications",
          items: ["FastAPI", "React", "TypeScript", "Next.js", "Tailwind", "Docusaurus"],
        },
        {
          title: "Automation",
          items: ["Python (Selenium, BeautifulSoup, PyAutoGUI)", "API integrations"],
        },
      ],
    },
    aiDev: {
      eyebrow: "AI Projects",
      title: "Developed Platforms - IA Development",
      intro:
        "Solutions built with AI. Each project has its own page with problem, architecture, technical decisions, and how AI was part of the process.",
      labels: {
        description: "Description",
        built: "How it was built",
        features: "Features",
        results: "Results",
        highlight: "Highlight",
        stack: "Stack",
        gallery: "Screenshots",
        viewProject: "View project",
        back: "Back",
      },
      items: [
        {
          slug: "polaris-atlas",
          title: "Polaris Atlas",
          summary: "Data observability and governance on GCP: catalog, lineage, PII, quality, freshness, FinOps, and Cloud Storage.",
          problem:
            "DP6's data initiative had no centralized visibility into pipeline health, quality, and cost across the program's projects — teams found data issues late, with no shared catalog or lineage history.",
          solution:
            "I architected and built Atlas as a monorepo (backend, frontend, and Terraform infrastructure): a data catalog, lineage, PII detection, quality and freshness metrics, FinOps, and Cloud Storage integration — driven by specs written before code, with its own context file and changelog/sessionlog discipline on every delivery.",
          architecture:
            "Dev and prod run in the same GCP project, isolated by resource-naming convention instead of separate projects — a client constraint for this program. Authentication via OAuth over IAP.",
          decisions: "Atlas's OAuth/IAP authentication became the reference implementation reused by the initiative's other repositories (Billing Platform, Certifications) instead of each one building its own.",
          features: [
            "Centralized data catalog",
            "Pipeline lineage",
            "Automatic PII detection",
            "Quality and freshness metrics",
            "Initiative FinOps",
            "Cloud Storage integration",
          ],
          results: "Became the most mature example of AI-assisted development in the initiative, and the authentication reference for the other projects.",
          highlight: "Dev and prod share the same GCP project, isolated by resource names — a client constraint.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-Driven Development"],
          cover: "/projects/polaris-atlas/cover.png",
          gallery: [
            "/projects/polaris-atlas/gallery-1.png",
            "/projects/polaris-atlas/gallery-2.png",
            "/projects/polaris-atlas/gallery-3.png",
            "/projects/polaris-atlas/gallery-4.png",
            "/projects/polaris-atlas/gallery-5.png",
            "/projects/polaris-atlas/gallery-6.png",
          ],
        },
        {
          slug: "billing-platform",
          title: "Billing Platform",
          summary: "FinOps hub for the billing account: cost by project and environment, trends, anomalies, and forecasting.",
          problem: "The existing cost model covered a single GCP project at a time; leadership needed FinOps visibility across the entire billing account, broken down by project and environment.",
          solution:
            "I started from a structural fork of the Cost Model and adapted the architecture (Dataform + API + dashboard) to ingest the full account's billing export, adding a project dimension — enabling cost trend views, anomaly detection, and forecasting.",
          architecture: "Same backbone as the Cost Model (Dataform over BigQuery + API + dashboard), with an added project/environment grain coming from the full account billing export.",
          decisions:
            "Incremental per-partition sync ran in shadow mode before cutover — validating the numbers alongside the old pipeline before switching off the previous source, so as not to risk breaking a cost report leadership already relied on.",
          features: [
            "Full-account billing export ingestion",
            "Per-project and per-environment granularity",
            "Cost trend tracking",
            "Anomaly detection",
            "Spend forecasting",
          ],
          results: "In production, with project- and environment-level cost visibility across the entire billing account, including trends, anomalies, and forecasting.",
          highlight: "Started as a structural fork of the Cost Model. Incremental per-partition sync ran in shadow mode before cutover.",
          stack: ["GCP BigQuery", "Dataform", "Cost API", "FinOps dashboard"],
          cover: "/projects/billing-platform/cover.png",
          gallery: [
            "/projects/billing-platform/gallery-1.png",
            "/projects/billing-platform/gallery-2.png",
            "/projects/billing-platform/gallery-3.png",
          ],
        },
        {
          slug: "dp6-certifications",
          title: "DP6 Certifications",
          summary: "Employee certification management: catalog, badges, campaigns, and analytics.",
          problem: "DP6 needed a structured way to catalog, approve, and track employee certifications and run campaigns, with no dedicated platform for it.",
          solution: "I built the platform in Next.js with hybrid storage (Firestore + BigQuery), using GitHub's formal Spec-Kit flow (spec → plan → tasks) and ADRs.",
          architecture: "Next.js on frontend/backend, Firestore for operational data (catalog, badges, approvals), and BigQuery for analytics and campaigns — hybrid storage, each database doing what it does best.",
          decisions: "It's the initiative's most spec'd project (10 formal specs), serving as the reference for how to structure the Spec-Kit flow in the other repositories.",
          features: [
            "Certification catalog",
            "Badge system",
            "Approval workflow",
            "Certification campaigns",
            "BigQuery analytics",
          ],
          results: "Active platform, used internally at DP6 for certification catalog, badges, approval, and campaigns.",
          highlight: "The Spec-Driven reference project, with 10 specs. Storage is hybrid — Firestore plus BigQuery.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
          cover: "/projects/dp6-certifications/cover.png",
          gallery: [
            "/projects/dp6-certifications/gallery-1.png",
            "/projects/dp6-certifications/gallery-2.png",
            "/projects/dp6-certifications/gallery-3.png",
          ],
        },
        {
          slug: "polaris-heap",
          title: "Polaris Heap",
          summary: "DP6's data engineering handbook: standards, best practices, and case studies.",
          problem: "DP6's data engineering knowledge was scattered, with no single, living place to document it for the team.",
          solution: "I built a Docusaurus documentation hub bringing together standards, best practices, and case studies, centralizing cross-repository conventions and integrating the initiative's design system.",
          architecture: "Static Docusaurus site, sharing the design tokens used across the initiative's projects.",
          decisions: "A custom script automatically checks links and content rules on every update, to catch broken links or off-standard pages.",
          features: [
            "Centralized documentation hub",
            "Standards and best practices",
            "Documented case studies",
            "Automatic link and content-rule checking",
            "Shared design tokens",
          ],
          results: "The active knowledge base for DP6's data initiative.",
          highlight: "A script automatically checks links and content rules.",
          stack: ["Docusaurus", "Static site", "Design tokens"],
          cover: "/projects/polaris-heap/cover.png",
          gallery: [
            "/projects/polaris-heap/gallery-1.png",
            "/projects/polaris-heap/gallery-2.png",
            "/projects/polaris-heap/gallery-3.png",
          ],
        },
      ],
    },
    education: {
      eyebrow: "Education",
      title: "Education & Courses",
      academicTitle: "Academic Background",
      coursesTitle: "Courses & Certificates",
      academic: [
        {
          period: "2026 – 2027 (in progress)",
          degree: "Postgraduate Program in Cloud Architecture & Design",
          institution: "Faculdade GRAN",
        },
        {
          period: "2023 – 2025",
          degree: "B.S. in Data Science",
          institution: "Faculdade Estácio",
        },
      ],
      courses: [
        { institution: "Udemy", course: "Data Engineering with Databricks, Spark and PySpark" },
        { institution: "Udemy", course: "Google Cloud Associate Cloud Engineer (GCP)" },
        { institution: "Udemy", course: "Data Engineering with Python and SQL/NoSQL Databases" },
        { institution: "FIAP", course: "Business Intelligence" },
        { institution: "FIAP", course: "Big Data and Analytics" },
        { institution: "Data Science Academy", course: "Microsoft Power BI for Business Intelligence and Data Science" },
        { institution: "Data Science Academy", course: "Python for Data Analysis and Data Science" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk?",
      body: "Open to talking about data engineering, cloud, and AI-assisted development.",
      cvLabel: "Download Resume",
      cvHref: "/en/cv/",
      channels: [
        { k: "Email", v: "fuzatimatheus@gmail.com", href: "mailto:fuzatimatheus@gmail.com" },
        { k: "LinkedIn", v: "/in/matheus-fuzati-de-carvalho", href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho/" },
        { k: "GitHub", v: "@matheus-fuzati", href: "https://github.com/matheus-fuzati" },
      ],
    },
    footer: {
      rights: "© 2026 Matheus Fuzati. All rights reserved.",
    },
    cv: {
      title: "Resume",
      printCta: "Print / Save PDF",
      backCta: "Back to site",
    },
  },
};
