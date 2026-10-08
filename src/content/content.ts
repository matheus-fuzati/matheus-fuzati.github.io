// Fonte de conteúdo do site — ver specs/01-content-spec.md para o schema.

export type Locale = "pt" | "en";

interface LabeledValue {
  k: string;
  v: string;
}

interface CtaLink {
  label: string;
  href: string;
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

interface AtuacaoItem {
  title: string;
  description: string;
}

export interface AIDevCase {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  decisions: string;
  results: string;
  highlight: string;
  stack: string[];
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
    greeting: string;
    name: string;
    tagline: string;
    ctaPrimary: CtaLink;
    ctaSecondary: CtaLink;
    meta: LabeledValue[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: LabeledValue[];
  };
  atuacao: {
    eyebrow: string;
    title: string;
    items: AtuacaoItem[];
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
    howTitle: string;
    how: string[];
    labels: {
      problem: string;
      solution: string;
      architecture: string;
      decisions: string;
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
        { href: "#sobre", label: "Sobre" },
        { href: "#atuacao", label: "Atuação" },
        { href: "#ia-dev", label: "Projetos IA" },
        { href: "#experiencia", label: "Experiência" },
        { href: "#stack", label: "Stack" },
        { href: "#formacao", label: "Formação" },
        { href: "#contato", label: "Contato" },
      ],
    },
    hero: {
      eyebrow: "Engenheiro de Dados & AI Developer",
      greeting: "Olá, eu sou",
      name: "Matheus Fuzati",
      tagline:
        "Construo e governo data pipelines multi-cloud (GCP e AWS) aplicando boas práticas de Governança, FinOps, Observabilidade, Qualidade e IaC, utilizando IA agêntica no processo. Desenvolvo ferramentas e plataformas de dados com IA, com frameworks como Spec Driven e Loop Engineering.",
      ctaPrimary: { label: "Ver Projetos", href: "#ia-dev" },
      ctaSecondary: { label: "Contato", href: "#contato" },
      meta: [
        { k: "Atual", v: "DP6 — Data Engineer Consultant" },
        { k: "Formação", v: "Ciência de Dados" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Sobre mim",
      paragraphs: [
        "Sou Engenheiro de Dados formado em Ciência de Dados. Atuo com data pipelines de ponta a ponta em ambientes multi-cloud (GCP e AWS), da extração à entrega de produtos de dados.",
        "Hoje atuo em duas frentes na DP6. No Itaú, faço parte da squad de democratização de dados (Data Mesh), onde mantenho e crio pipelines que conectam dados do GA4 no BigQuery ao processamento na AWS, com Glue, Lambda, Step Functions, EMR, S3 e Athena. Em paralelo, lidero e desenvolvo o CI Polaris, iniciativa interna que reúne as ferramentas de dia a dia da engenharia de dados: governança no GCP, FinOps da conta de faturamento, gestão de certificações e a base de conhecimento da área.",
        "Essas ferramentas foram construídas com IA, dentro de um processo de engenharia. Isso inclui Spec-Driven Development, ADRs, infraestrutura em Terraform, CI/CD com ambientes dev e prod, e um plugin com hook de política que impede o agente de executar ações irreversíveis sem confirmação. A IA acelera a entrega, e o processo garante que o resultado seja confiável.",
        "Antes da DP6, passei pela Atento (ETL on-premise com SQL Server e Azure/Databricks, em consultoria para grandes clientes) e pela ESEG (pipelines em GCP, gestão de data lake e automação em Python).",
      ],
      facts: [
        { k: "Empresa", v: "DP6 — consultoria de dados" },
        { k: "Alocação atual", v: "Itaú" },
        { k: "Base", v: "Brasil" },
        { k: "Inglês", v: "C1" },
        { k: "Idiomas do site", v: "PT-BR / EN" },
      ],
    },
    atuacao: {
      eyebrow: "Atuação",
      title: "Como eu atuo",
      items: [
        {
          title: "Engenharia de Dados",
          description:
            "Pipelines de ponta a ponta em on-premise e multi-cloud: ingestão, processamento, orquestração e modelagem.",
        },
        {
          title: "Cloud e Infraestrutura",
          description:
            "Infraestrutura como código com Terraform, ambientes dev e prod espelhados, CI/CD com GitHub Actions e Workload Identity Federation, autenticação com IAP e FinOps com labels, budgets e showback.",
        },
        {
          title: "AI Development",
          description:
            "Plataformas completas construídas com Claude Code: backend, frontend, infraestrutura e documentação. O processo é Spec-Driven, e o plugin próprio traz hook de política e skills reutilizáveis.",
        },
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
            "Consultoria de dados atuando em duas frentes: cliente (Itaú) e iniciativa interna (CI Polaris), depois de uma passagem inicial pela conta Magalu Ads.",
          highlights: [
            {
              label: "Itaú",
              period: "Desde 06/2026",
              description:
                "Squad de democratização de dados (Data Mesh) — mantenho e crio pipelines que conectam dados do GA4 no BigQuery ao processamento na AWS, com Glue, Lambda, Step Functions, EMR, S3 e Athena.",
            },
            {
              label: "CI Polaris",
              period: "Desde 04/2026",
              description:
                "Desenvolvimento e liderança das plataformas internas e dos padrões do hub — organizo entregas e prazos e gerencio demandas.",
            },
            {
              label: "Magalu Ads",
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
      title: "Projetos com IA",
      intro:
        "Ferramentas que desenhei e construí com IA dentro do CI Polaris, iniciativa interna da DP6. Cada projeto tem uma página com problema, arquitetura, decisões técnicas e como a IA entrou no processo.",
      howTitle: "Como eu trabalho com IA",
      how: ["spec antes do código", "decisões registradas em ADRs", "guardrails automáticos", "um fato, um lugar"],
      labels: {
        problem: "Problema",
        solution: "Solução",
        architecture: "Arquitetura",
        decisions: "Decisões técnicas",
        results: "Resultados",
        highlight: "Destaque",
        stack: "Stack",
        gallery: "Capturas de tela",
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
          results: "Tornou-se o exemplo mais maduro de desenvolvimento assistido por IA da iniciativa e a referência de autenticação para os demais projetos.",
          highlight: "Dev e prod no mesmo projeto GCP, isolados por nomes de recurso — foi restrição do cliente.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-Driven Development"],
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
          results: "Em produção, com visibilidade de custo em nível de projeto e ambiente pra toda a conta de faturamento, incluindo evolução, anomalias e forecast.",
          highlight: "Nasceu como fork estrutural do Cost Model. A sincronização incremental por partição rodou em modo sombra antes do cutover.",
          stack: ["GCP BigQuery", "Dataform", "API de custo", "Painel FinOps"],
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
          results: "Plataforma ativa, em uso interno na DP6 para catálogo, badges, aprovação e campanhas de certificação.",
          highlight: "É o projeto de referência do Spec-Driven, com 10 specs. O armazenamento é híbrido, Firestore mais BigQuery.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
        },
        {
          slug: "polaris-heap",
          title: "Polaris Heap",
          summary: "Guia do engenheiro de dados da DP6: padrões, boas práticas e cases.",
          problem: "O conhecimento de engenharia de dados da DP6 estava espalhado, sem um lugar único e vivo de documentação pro time.",
          solution:
            "Construí um hub de documentação em Docusaurus reunindo padrões, boas práticas e cases, centralizando convenções entre repositórios e integrando o design system da iniciativa.",
          architecture: "Site estático Docusaurus, com os tokens de design compartilhados da iniciativa CI Polaris.",
          decisions: "Um script próprio verifica links e regras de conteúdo automaticamente a cada atualização, pra evitar link quebrado ou página fora do padrão.",
          results: "Base de conhecimento ativa da iniciativa de dados da DP6.",
          highlight: "Um script verifica links e regras de conteúdo automaticamente.",
          stack: ["Docusaurus", "Site estático", "Design tokens"],
        },
        {
          slug: "plugin-ci-polaris",
          title: "Plugin ci-polaris",
          summary:
            "Hook de política e skills do Claude Code que mantêm o agente dentro das regras. Pede confirmação para ações irreversíveis e tem 147 casos de teste.",
          problem:
            "Trabalhar com agentes de IA em múltiplos repositórios de infraestrutura real traz um risco direto: um agente pode rodar um comando destrutivo (force-push, terraform apply, merge) sem supervisão.",
          solution:
            "Desenvolvi um plugin pro Claude Code com um hook de política e skills reutilizáveis entre os repositórios da iniciativa, criando uma camada de guardrail automática em vez de depender só de instrução em prompt.",
          architecture: "Hook de política interceptando ações do agente antes da execução, mais um conjunto de skills compartilhadas entre os repositórios do CI Polaris.",
          decisions:
            "O hook falha fechado — por padrão, bloqueia em vez de permitir. Force-push e push direto em main são bloqueados; terraform apply, merge e deploy exigem confirmação explícita. Coberto por 147 casos de teste.",
          results: "Em uso em todos os repositórios da iniciativa CI Polaris, mantendo o agente dentro das regras combinadas sem depender de repetir a instrução em cada sessão.",
          highlight: "O hook falha fechado. Force-push e push em main são bloqueados, e terraform apply, merge e deploy exigem confirmação.",
          stack: ["Claude Code", "Plugin / hook de política", "Skills reutilizáveis", "147 testes automatizados"],
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
        { href: "#about", label: "About" },
        { href: "#atuacao", label: "Practice" },
        { href: "#ia-dev", label: "AI Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#stack", label: "Stack" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Data Engineer & AI Developer",
      greeting: "Hi, I'm",
      name: "Matheus Fuzati",
      tagline:
        "I build and govern multi-cloud (GCP and AWS) data pipelines following strong practices in governance, FinOps, observability, quality, and IaC, using agentic AI throughout the process. I develop data tools and platforms with AI, using frameworks like Spec-Driven Development and Loop Engineering.",
      ctaPrimary: { label: "View Projects", href: "#ia-dev" },
      ctaSecondary: { label: "Contact", href: "#contact" },
      meta: [
        { k: "Currently", v: "DP6 — Data Engineer Consultant" },
        { k: "Background", v: "Data Science" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "About me",
      paragraphs: [
        "I'm a Data Engineer with a degree in Data Science. I work on end-to-end data pipelines across multi-cloud environments (GCP and AWS), from extraction to delivering data products.",
        "Today I work on two fronts at DP6. At Itaú, I'm part of the data democratization squad (Data Mesh), where I maintain and build pipelines connecting GA4 data in BigQuery to processing on AWS, using Glue, Lambda, Step Functions, EMR, S3, and Athena. In parallel, I lead and develop CI Polaris, an internal initiative that brings together the data engineering team's everyday tools: GCP governance, billing-account FinOps, certification management, and the team's knowledge base.",
        "These tools were built with AI, inside an engineering process. That includes Spec-Driven Development, ADRs, Terraform infrastructure, CI/CD with dev and prod environments, and a plugin with a policy hook that stops the agent from taking irreversible actions without confirmation. AI speeds up delivery, and the process keeps the result reliable.",
        "Before DP6, I worked at Atento (on-premise ETL with SQL Server and Azure/Databricks, consulting for large clients) and at ESEG (GCP pipelines, data lake management, and Python automation).",
      ],
      facts: [
        { k: "Company", v: "DP6 — data consultancy" },
        { k: "Current allocation", v: "Itaú" },
        { k: "Based in", v: "Brazil" },
        { k: "English", v: "C1" },
        { k: "Site languages", v: "PT-BR / EN" },
      ],
    },
    atuacao: {
      eyebrow: "Practice",
      title: "How I work",
      items: [
        {
          title: "Data Engineering",
          description: "End-to-end pipelines across on-premise and multi-cloud environments: ingestion, processing, orchestration, and modeling.",
        },
        {
          title: "Cloud & Infrastructure",
          description:
            "Infrastructure as code with Terraform, mirrored dev and prod environments, CI/CD with GitHub Actions and Workload Identity Federation, IAP authentication, and FinOps with labels, budgets, and showback.",
        },
        {
          title: "AI Development",
          description:
            "Full platforms built with Claude Code: backend, frontend, infrastructure, and documentation. The process is Spec-Driven, and my own plugin brings a policy hook and reusable skills.",
        },
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
          description: "Data consulting across two fronts: a client account (Itaú) and an internal initiative (CI Polaris), after an initial stint on the Magalu Ads account.",
          highlights: [
            {
              label: "Itaú",
              period: "Since 06/2026",
              description:
                "Data democratization squad (Data Mesh) — I maintain and build pipelines connecting GA4 data in BigQuery to processing on AWS, using Glue, Lambda, Step Functions, EMR, S3, and Athena.",
            },
            {
              label: "CI Polaris",
              period: "Since 04/2026",
              description: "Development and leadership of the internal platforms and hub standards — I organize deliveries, deadlines, and manage demand.",
            },
            {
              label: "Magalu Ads",
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
      title: "AI Projects",
      intro:
        "Tools I designed and built with AI inside CI Polaris, an internal DP6 initiative. Each project has its own page with problem, architecture, technical decisions, and how AI was part of the process.",
      howTitle: "How I work with AI",
      how: ["spec before code", "decisions logged as ADRs", "automatic guardrails", "one fact, one place"],
      labels: {
        problem: "Problem",
        solution: "Solution",
        architecture: "Architecture",
        decisions: "Technical decisions",
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
          results: "Became the most mature example of AI-assisted development in the initiative, and the authentication reference for the other projects.",
          highlight: "Dev and prod share the same GCP project, isolated by resource names — a client constraint.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-Driven Development"],
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
          results: "In production, with project- and environment-level cost visibility across the entire billing account, including trends, anomalies, and forecasting.",
          highlight: "Started as a structural fork of the Cost Model. Incremental per-partition sync ran in shadow mode before cutover.",
          stack: ["GCP BigQuery", "Dataform", "Cost API", "FinOps dashboard"],
        },
        {
          slug: "dp6-certifications",
          title: "DP6 Certifications",
          summary: "Employee certification management: catalog, badges, campaigns, and analytics.",
          problem: "DP6 needed a structured way to catalog, approve, and track employee certifications and run campaigns, with no dedicated platform for it.",
          solution: "I built the platform in Next.js with hybrid storage (Firestore + BigQuery), using GitHub's formal Spec-Kit flow (spec → plan → tasks) and ADRs.",
          architecture: "Next.js on frontend/backend, Firestore for operational data (catalog, badges, approvals), and BigQuery for analytics and campaigns — hybrid storage, each database doing what it does best.",
          decisions: "It's the initiative's most spec'd project (10 formal specs), serving as the reference for how to structure the Spec-Kit flow in the other repositories.",
          results: "Active platform, used internally at DP6 for certification catalog, badges, approval, and campaigns.",
          highlight: "The Spec-Driven reference project, with 10 specs. Storage is hybrid — Firestore plus BigQuery.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
        },
        {
          slug: "polaris-heap",
          title: "Polaris Heap",
          summary: "DP6's data engineering handbook: standards, best practices, and case studies.",
          problem: "DP6's data engineering knowledge was scattered, with no single, living place to document it for the team.",
          solution: "I built a Docusaurus documentation hub bringing together standards, best practices, and case studies, centralizing cross-repository conventions and integrating the initiative's design system.",
          architecture: "Static Docusaurus site, sharing the CI Polaris initiative's design tokens.",
          decisions: "A custom script automatically checks links and content rules on every update, to catch broken links or off-standard pages.",
          results: "The active knowledge base for DP6's data initiative.",
          highlight: "A script automatically checks links and content rules.",
          stack: ["Docusaurus", "Static site", "Design tokens"],
        },
        {
          slug: "plugin-ci-polaris",
          title: "ci-polaris Plugin",
          summary: "A Claude Code policy hook and skill set that keep the agent inside the rules. Asks for confirmation on irreversible actions, backed by 147 test cases.",
          problem: "Working with AI agents across multiple real-infrastructure repositories carries a direct risk: an agent could run a destructive command (force-push, terraform apply, merge) unsupervised.",
          solution: "I built a Claude Code plugin with a policy hook and reusable skills shared across the initiative's repositories, creating an automatic guardrail layer instead of relying only on prompt instructions.",
          architecture: "A policy hook intercepting agent actions before execution, plus a set of skills shared across the CI Polaris repositories.",
          decisions:
            "The hook fails closed — it blocks by default instead of allowing. Force-push and direct pushes to main are blocked; terraform apply, merge, and deploy require explicit confirmation. Covered by 147 automated test cases.",
          results: "In use across every CI Polaris repository, keeping the agent inside the agreed rules without relying on repeating the instruction in every session.",
          highlight: "The hook fails closed. Force-push and pushes to main are blocked, and terraform apply, merge, and deploy require confirmation.",
          stack: ["Claude Code", "Plugin / policy hook", "Reusable skills", "147 automated tests"],
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
