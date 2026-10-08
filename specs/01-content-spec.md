# 01 — Spec de Conteúdo

> Status: **v6 implementada** (ver `04-tasks.md` pro histórico completo v1→v6). Conteúdo em
> `src/content/content.ts` (fonte única PT/EN).

## Seções do site (v6)
Home (Hero minimalista + carrossel de stack) → Experiência (linha do tempo horizontal) →
Projetos com IA (+ 4 páginas dedicadas) → Stack & Formação → Contato — em PT (`/`) e EN (`/en/`).
"Sobre" e "Atuação" **saíram da Home** na v6 (ver `04-tasks.md`); `about` continua em
`content.ts` só porque o CvPage ainda usa `about.paragraphs[0]`.

## Idioma
Site bilíngue PT-BR / EN. Textos em inglês são **reescritos**, não traduzidos literalmente.

## Hero
- Eyebrow: "Engenheiro de Dados & AI Developer" / "Data Engineer & AI Developer"
- Tagline (2 frases, vira o `hero-statement` grande no layout v3-mock): processo de pipelines
  multi-cloud (GCP+AWS) com Governança/FinOps/Observabilidade/Qualidade/IaC e IA agêntica, +
  ferramentas de dados construídas com IA (Spec-Driven, Loop Engineering)
- Meta: "DP6 — Data Engineer Consultant" + "Ciência de Dados"
- CTA primário aponta pra `#ia-dev` (era `#projetos`, que não existe mais)

## Sobre mim
4 parágrafos: (1) quem é/formação, (2) as duas frentes atuais na DP6 (Itaú/Data Mesh + liderança
do CI Polaris), (3) como essas ferramentas foram construídas com IA (processo de engenharia,
não só a ferramenta), (4) trajetória anterior (Atento, ESEG).

## Atuação (seção nova)
3 cards descritivos (não lista de bullets, ao contrário de Stack): Engenharia de Dados, Cloud e
Infraestrutura, AI Development. Fica entre Sobre e Projetos com IA.

## Projetos com IA (renomeada de "IA Development")
Cards resumidos na home (título + resumo + link "Ver projeto") — o detalhe foi pra **páginas
dedicadas** (`/projetos/:slug`, `/en/projetos/:slug`, pré-renderizadas via `getStaticPaths` do
`vite-react-ssg`). Intro ganhou um selo "Como eu trabalho com IA" (4 chips). 4 projetos agora
(voltou de 5 — **Plugin ci-polaris removido** a pedido do autor nesta rodada) — a autoria
("desenhei e construí", "lidero e desenvolvo") foi **confirmada explicitamente pelo autor**
numa rodada anterior, resolvendo o `[TODO]` de revisão de autoria das specs antigas:
- **Polaris Atlas** — observabilidade/governança no GCP (catálogo, lineage, PII, qualidade,
  freshness, FinOps, Cloud Storage)
- **Billing Platform** — FinOps da conta de faturamento inteira (custo, evolução, anomalias,
  forecast)
- **DP6 Certifications** — catálogo/badges/campanhas/análises de certificação
- **Polaris Heap** — guia do engenheiro de dados da DP6

Cada página de projeto segue o template: voltar · eyebrow/título/resumo · **placeholder de
capa** · problema · solução · **3 placeholders de galeria** · arquitetura · decisões técnicas ·
destaque (citação) · resultados · stack. Os placeholders (`.project-cover-placeholder`,
`.project-gallery-item`) são caixas tracejadas aguardando os prints reais — **o autor vai mandar
em separado**; ainda não existem imagens reais nesta rodada. Sem dado de cliente/Itaú em
nenhum case — tudo é sobre a iniciativa interna CI Polaris da DP6.

## Experiência
DP6 agora é **um item com sub-itens aninhados** (`experience.items[].highlights[]`), não mais
um item plano com `companyNote` — reflete que o autor atua em 3 frentes simultâneas sob o mesmo
vínculo (DP6, desde 02/2026): Itaú (Data Mesh, desde 06/2026), CI Polaris (liderança, desde
04/2026) e Magalu Ads (discovery, 02/2026–06/2026, encerrado). Itens anteriores (Atento, ESEG ×2,
Los Carvalhos) mantidos; **Grupo Vamos (Assistente Financeiro) removido** — não apareceu na
lista que o autor passou nesta rodada.

## Stack técnica
5 categorias agora (antes 3): Engenharia de Dados, Cloud e Infraestrutura, AI Development,
Aplicações, Automação — ver `src/content/content.ts` → `skills.categories` pro detalhe completo
de cada uma (grid virou `auto-fit` pra acomodar o número variável de categorias).

## Currículo / CV
Sem mudança de mecanismo (gerado do conteúdo do site, `/cv/` e `/en/cv/`). Passou a renderizar
os sub-itens de experiência (`highlights`) também, de forma compacta.

## Contato
- E-mail, LinkedIn, GitHub — **WhatsApp removido** do conjunto de canais (não apareceu na lista
  que o autor passou nesta rodada; fácil de devolver se for só omissão).

## Formação Acadêmica e Cursos
Sem mudança — autor confirmou manter como está, mesmo não aparecendo na lista de 7 seções que
ele passou.
