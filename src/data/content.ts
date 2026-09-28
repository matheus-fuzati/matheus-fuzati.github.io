// Fonte de conteúdo do site — ver specs/01-content-spec.md para o schema.
// Itens marcados com TODO precisam de confirmação do autor (ver specs).

export type Locale = "pt" | "en";

export const content = {
  pt: {
    lang: "pt-BR",
    nav: {
      brand: "MF",
      links: [
        { href: "#sobre", label: "Sobre" },
        { href: "#experiencia", label: "Experiência" },
        { href: "#stack", label: "Stack" },
        { href: "#ia-dev", label: "IA Dev" },
        { href: "#projetos", label: "Projetos" },
        { href: "#formacao", label: "Formação" },
        { href: "#contato", label: "Contato" },
      ],
    },
    hero: {
      eyebrow: "Engenheiro de Dados",
      name: "Matheus Fuzati",
      tagline: "Dados, na prática — da ingestão ao dashboard.",
      ctaPrimary: { label: "Ver Projetos", href: "#projetos" },
      ctaSecondary: { label: "Contato", href: "#contato" },
      meta: [
        { k: "Atual", v: "DP6 · Itaú" },
        { k: "Formação", v: "Ciência de Dados" },
        { k: "Foco", v: "Cloud · AWS/GCP" },
      ],
    },
    about: {
      eyebrow: "Sobre",
      title: "Sobre mim",
      paragraphs: [
        "Atuo com dados desde 2021, migrando de operação e BI tradicional para engenharia de dados cloud-native. Hoje sou consultor de dados na DP6, alocado no Itaú, depois de uma passagem pela Magalu Ads. Construo pipelines de ponta a ponta — de ingestão a consumo — com foco em qualidade, automação e custo (FinOps), em AWS e GCP.",
        "Antes da consultoria, passei por BI e ETL on-premise e em nuvem, sempre próximo do dado bruto: dashboards, modelagem, automações e, mais recentemente, infraestrutura como código. Formado em Ciência de Dados pela Estácio, com pós em Arquitetura e Projetos de Cloud Computing em andamento pela GRAN.",
      ],
      facts: [
        { k: "Empresa", v: "DP6 — consultoria de dados" },
        { k: "Alocação atual", v: "Itaú" },
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
          role: "Engenheiro de Dados",
          company: "DP6 — consultoria",
          companyNote: "Alocado no Itaú · anteriormente alocado na Magalu Ads",
          description:
            "Consultor de dados atuando em ambiente de cliente (Itaú), com foco em pipelines de dados, cloud e boas práticas de engenharia. Passagem anterior pela conta Magalu Ads.",
        },
        {
          period: "07/2025 – 02/2026",
          role: "Analista de Dados Pleno",
          company: "Atento Brasil",
          description:
            "Atuação com clientes como META, Itaú, Alelo, Qualicorp e Mercado Livre, em processos ETL on-premise (SQL Server, jobs e procedures, camadas Raw/Stage/Mart) e demandas em Azure (Python/Databricks). Desenvolvimento de relatórios em Power BI com DAX avançado e modelagem Star Schema.",
        },
        {
          period: "09/2024 – 07/2025",
          role: "Analista de Inteligência de Mercado",
          company: "Faculdade ESEG",
          description:
            "Pipelines ETL completos (extração, staging, Data Warehouse) com Python, SQL e Google Cloud (Cloud Storage, BigQuery, Cloud Scheduler, Cloud Run Functions). Dashboards automatizados em Power BI/Looker Studio, gestão de Data Lake e automações (RPA) com Python.",
        },
        {
          period: "11/2023 – 09/2024",
          role: "Estágio em Business Intelligence",
          company: "Faculdade ESEG",
          description:
            "Dashboards automatizados em Power BI e Looker Studio integrando MySQL, BigQuery e Google Analytics, para marketing, atendimento e análises educacionais. Pipelines ETL via API em Python.",
        },
        {
          period: "03/2023 – 10/2023",
          role: "Assistente Financeiro",
          company: "Grupo Vamos",
          description:
            "Conciliação de contas bancárias com o sistema; extração de dados em SQL e relatórios em Power BI.",
        },
        {
          period: "05/2021 – 01/2023",
          role: "Analista de Dados",
          company: "Los Carvalhos",
          description:
            "Dashboards em Power BI para estoque, projeção de vendas e análises financeiras; pipelines ETL em Python/SQL integrando CRM, ERP e Excel.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Ferramentas e Habilidades",
      categories: [
        {
          title: "Cloud & Infraestrutura",
          items: [
            "AWS — Glue Jobs, Lambda, Step Functions, EMR, Athena, S3",
            "GCP — BigQuery, Cloud SQL, Data Transfer, Cloud Run, Workflows, Dataform",
            "Terraform",
            "Infraestrutura como Código (IaC)",
          ],
        },
        {
          title: "Engenharia de Dados",
          items: [
            "Pipelines ETL/ELT",
            "CI/CD",
            "Data Quality",
            "Modelagem de dados",
          ],
        },
        {
          title: "Dados & Operação",
          items: ["Analytics", "FinOps", "Governança e observabilidade de dados"],
        },
      ],
    },
    aiDev: {
      eyebrow: "IA Development",
      title: "Desenvolvimento assistido por IA",
      intro:
        "Uso IA como parte do processo de engenharia, não como ferramenta pontual: specs escritas antes do código, arquivo de contexto por repositório, ADRs para decisões e sessões multi-repositório orquestradas com Claude Code. Os cases abaixo são de iniciativas internas reais da DP6 — sem dados de cliente ou capturas de tela, só problema, solução e resultado.",
      labels: { problem: "Problema", solution: "Solução", result: "Resultado" },
      items: [
        {
          title: "Atlas",
          summary: "Plataforma de observabilidade de dados no GCP",
          problem:
            "A iniciativa de dados da DP6 não tinha visibilidade centralizada sobre saúde e custo dos pipelines entre os projetos do programa.",
          solution:
            "Arquitetura em monorepo (backend, frontend e infraestrutura em Terraform), com dev/prod no mesmo projeto GCP, conduzida em specs antes do código — arquivo de contexto próprio, ADRs para decisões e disciplina de changelog/sessionlog a cada entrega.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-driven development"],
          result:
            "Tornou-se a referência de autenticação (OAuth via IAP) reaproveitada pelos outros repositórios da iniciativa e o exemplo mais maduro do processo de desenvolvimento assistido por IA usado no programa.",
        },
        {
          title: "Billing Platform",
          summary: "Camada de custo (FinOps) para toda a conta de faturamento GCP",
          problem:
            "O modelo de custo existente cobria só um projeto GCP por vez; faltava visibilidade de FinOps para a conta de faturamento inteira, por projeto.",
          solution:
            "Adaptação de uma arquitetura de custo já validada (Dataform + API + painel) para ingerir o billing export da conta inteira, adicionando a dimensão de projeto — mesmo processo de specs e ADRs documentado no repositório de origem.",
          stack: ["GCP BigQuery", "Dataform", "API de custo", "Painel FinOps"],
          result: "Em produção, com visibilidade de custo em nível de projeto para toda a conta de faturamento.",
        },
        {
          title: "Polaris (Heap)",
          summary: "Acervo de conhecimento da Engenharia de Dados da DP6",
          problem:
            "O conhecimento de engenharia de dados da DP6 estava espalhado, sem um lugar único e vivo de documentação para o time.",
          solution:
            "Hub de documentação em Docusaurus, centralizando convenções entre repositórios e integrando o design system da iniciativa.",
          stack: ["Docusaurus", "Site estático", "Design tokens"],
          result: "Base de conhecimento ativa da iniciativa de dados da DP6.",
        },
        {
          title: "Certifications",
          summary: "Plataforma de certificações dos colaboradores DP6",
          problem:
            "A DP6 precisava de um jeito estruturado de catalogar, aprovar e acompanhar certificações dos colaboradores e rodar campanhas, sem plataforma própria para isso.",
          solution:
            "Plataforma em Next.js com Firestore/BigQuery, usando o fluxo formal de Spec-Kit do GitHub (spec → plano → tarefas) e ADRs — o exemplo mais rigoroso de desenvolvimento orientado a specs entre os projetos da iniciativa.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
          result: "Plataforma ativa, em uso interno na DP6 para catálogo, badges, aprovação e campanhas de certificação.",
        },
      ],
    },
    projects: {
      eyebrow: "Projetos & Cases",
      title: "Projetos",
      emptyTitle: "Cases em construção",
      emptyBody:
        "O primeiro case entra aqui em breve — projeto e escrita ainda em backlog. Enquanto isso, dá pra ver código e experimentos no GitHub.",
      emptyCta: { label: "Ver GitHub", href: "https://github.com/matheus-fuzati" },
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
      body: "Aberto a oportunidades, projetos e conversas sobre dados, engenharia e cloud.",
      cvLabel: "Baixar Currículo",
      cvHref: "/cv/",
      channels: [
        { k: "Email", v: "fuzatimatheus@gmail.com", href: "mailto:fuzatimatheus@gmail.com" },
        { k: "LinkedIn", v: "/in/matheus-fuzati-de-carvalho", href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho/" },
        { k: "GitHub", v: "@matheus-fuzati", href: "https://github.com/matheus-fuzati" },
        { k: "WhatsApp", v: "Iniciar conversa", href: "https://wa.me/5511940403278" },
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
        { href: "#experience", label: "Experience" },
        { href: "#stack", label: "Stack" },
        { href: "#ia-dev", label: "AI Dev" },
        { href: "#projects", label: "Projects" },
        { href: "#education", label: "Education" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      eyebrow: "Data Engineer",
      name: "Matheus Fuzati",
      tagline: "Data, in practice — from ingestion to dashboard.",
      ctaPrimary: { label: "View Projects", href: "#projects" },
      ctaSecondary: { label: "Contact", href: "#contact" },
      meta: [
        { k: "Currently", v: "DP6 · Itaú" },
        { k: "Background", v: "Data Science" },
        { k: "Focus", v: "Cloud · AWS/GCP" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "About me",
      paragraphs: [
        "I've worked with data since 2021, moving from traditional BI and operations into cloud-native data engineering. I'm currently a data consultant at DP6, on-site at Itaú, after an earlier engagement with Magalu Ads. I build end-to-end pipelines — from ingestion to consumption — with a focus on quality, automation, and cost (FinOps), across AWS and GCP.",
        "Before consulting, I worked through BI and ETL, on-premise and in the cloud, always close to raw data: dashboards, modeling, automation, and more recently, infrastructure as code. I hold a degree in Data Science from Estácio, and I'm completing a postgraduate program in Cloud Architecture & Design at GRAN.",
      ],
      facts: [
        { k: "Company", v: "DP6 — data consultancy" },
        { k: "Current allocation", v: "Itaú" },
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
          role: "Data Engineer",
          company: "DP6 — consulting",
          companyNote: "On-site at Itaú · previously allocated to Magalu Ads",
          description:
            "Data consultant working on-site at a client environment (Itaú), focused on data pipelines, cloud, and engineering best practices. Previously on the Magalu Ads account.",
        },
        {
          period: "07/2025 – 02/2026",
          role: "Mid-level Data Analyst",
          company: "Atento Brasil",
          description:
            "Worked with clients such as META, Itaú, Alelo, Qualicorp, and Mercado Livre on on-premise ETL (SQL Server, jobs and procedures, Raw/Stage/Mart layers) and Azure workloads (Python/Databricks). Built Power BI reports with advanced DAX and Star Schema modeling.",
        },
        {
          period: "09/2024 – 07/2025",
          role: "Market Intelligence Analyst",
          company: "Faculdade ESEG",
          description:
            "End-to-end ETL pipelines (extraction, staging, Data Warehouse) with Python, SQL, and Google Cloud (Cloud Storage, BigQuery, Cloud Scheduler, Cloud Run Functions). Automated dashboards in Power BI/Looker Studio, data lake management, and Python-based RPA.",
        },
        {
          period: "11/2023 – 09/2024",
          role: "Business Intelligence Intern",
          company: "Faculdade ESEG",
          description:
            "Automated dashboards in Power BI and Looker Studio integrating MySQL, BigQuery, and Google Analytics for marketing, support, and academic analytics. API-based ETL pipelines in Python.",
        },
        {
          period: "03/2023 – 10/2023",
          role: "Financial Assistant",
          company: "Grupo Vamos",
          description:
            "Bank account reconciliation; data extraction in SQL and Power BI reporting.",
        },
        {
          period: "05/2021 – 01/2023",
          role: "Data Analyst",
          company: "Los Carvalhos",
          description:
            "Power BI dashboards for inventory, sales forecasting, and financial analysis; Python/SQL ETL pipelines integrating CRM, ERP, and Excel.",
        },
      ],
    },
    skills: {
      eyebrow: "Stack",
      title: "Tools & Skills",
      categories: [
        {
          title: "Cloud & Infrastructure",
          items: [
            "AWS — Glue Jobs, Lambda, Step Functions, EMR, Athena, S3",
            "GCP — BigQuery, Cloud SQL, Data Transfer, Cloud Run, Workflows, Dataform",
            "Terraform",
            "Infrastructure as Code (IaC)",
          ],
        },
        {
          title: "Data Engineering",
          items: ["ETL/ELT pipelines", "CI/CD", "Data quality", "Data modeling"],
        },
        {
          title: "Data & Operations",
          items: ["Analytics", "FinOps", "Data governance & observability"],
        },
      ],
    },
    aiDev: {
      eyebrow: "IA Development",
      title: "AI-Assisted Development",
      intro:
        "I use AI as part of the engineering process, not as a one-off tool: specs written before code, a context file per repository, ADRs for decisions, and multi-repository sessions orchestrated with Claude Code. The cases below are real internal DP6 initiatives — no client data or screenshots, just problem, solution, and result.",
      labels: { problem: "Problem", solution: "Solution", result: "Result" },
      items: [
        {
          title: "Atlas",
          summary: "Data observability platform on GCP",
          problem:
            "DP6's data initiative had no centralized visibility into pipeline health and cost across the program's projects.",
          solution:
            "Monorepo architecture (backend, frontend, and Terraform infrastructure), with dev/prod in the same GCP project, driven by specs written before code — its own context file, ADRs for decisions, and changelog/sessionlog discipline on every delivery.",
          stack: ["GCP", "Terraform", "Monorepo (backend + frontend)", "OAuth/IAP", "Spec-driven development"],
          result:
            "Became the authentication reference (OAuth via IAP) reused by the initiative's other repositories, and the most mature example of the AI-assisted development process used across the program.",
        },
        {
          title: "Billing Platform",
          summary: "FinOps cost layer for the entire GCP billing account",
          problem:
            "The existing cost model covered a single GCP project at a time; leadership needed FinOps visibility across the entire billing account, per project.",
          solution:
            "Adapted an already-validated cost architecture (Dataform + API + dashboard) to ingest the full account's billing export, adding a project dimension — same specs-and-ADRs process documented in the source repository.",
          stack: ["GCP BigQuery", "Dataform", "Cost API", "FinOps dashboard"],
          result: "In production, with project-level cost visibility across the entire billing account.",
        },
        {
          title: "Polaris (Heap)",
          summary: "DP6 Data Engineering knowledge base",
          problem: "DP6's data engineering knowledge was scattered, with no single, living place to document it for the team.",
          solution:
            "Docusaurus documentation hub, centralizing cross-repository conventions and integrating the initiative's design system.",
          stack: ["Docusaurus", "Static site", "Design tokens"],
          result: "The active knowledge base for DP6's data initiative.",
        },
        {
          title: "Certifications",
          summary: "DP6 employee certifications platform",
          problem:
            "DP6 needed a structured way to catalog, approve, and track employee certifications and run campaigns, with no dedicated platform for it.",
          solution:
            "Next.js platform with Firestore/BigQuery, using GitHub's formal Spec-Kit flow (spec → plan → tasks) and ADRs — the most rigorous spec-driven example among the initiative's projects.",
          stack: ["Next.js", "Firestore", "BigQuery", "GitHub Spec-Kit"],
          result: "Active platform, used internally at DP6 for certification catalog, badges, approval, and campaigns.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects & Cases",
      title: "Projects",
      emptyTitle: "Case studies in progress",
      emptyBody:
        "The first case study is coming soon — still in the backlog. In the meantime, check out code and experiments on GitHub.",
      emptyCta: { label: "View GitHub", href: "https://github.com/matheus-fuzati" },
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
      body: "Open to opportunities, projects, and conversations about data, engineering, and cloud.",
      cvLabel: "Download Resume",
      cvHref: "/en/cv/",
      channels: [
        { k: "Email", v: "fuzatimatheus@gmail.com", href: "mailto:fuzatimatheus@gmail.com" },
        { k: "LinkedIn", v: "/in/matheus-fuzati-de-carvalho", href: "https://www.linkedin.com/in/matheus-fuzati-de-carvalho/" },
        { k: "GitHub", v: "@matheus-fuzati", href: "https://github.com/matheus-fuzati" },
        { k: "WhatsApp", v: "Start a conversation", href: "https://wa.me/5511940403278" },
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
} as const;

export type SiteContent = typeof content.pt;
