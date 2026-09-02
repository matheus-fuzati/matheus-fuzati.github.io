# 01 — Spec de Conteúdo

> Status: **implementado** em `src/data/content.ts` (fonte única PT/EN). Itens `[TODO]` abaixo
> são correções pontuais a fazer na revisão, não bloqueiam o site no ar.

## Seções do site
Hero · Sobre · Experiência · Stack · Projetos · Formação · Contato — todas implementadas,
em PT (`/`) e EN (`/en/`).

## Idioma
Site bilíngue PT-BR / EN. Textos em inglês foram **reescritos**, não traduzidos literalmente
(pedido do autor). Toggle "PT · EN" no header.

## Hero
- Nome: Matheus Fuzati · Eyebrow: "Engenheiro de Dados" / "Data Engineer"
- Tagline: "Dados, na prática — da ingestão ao dashboard."
- CTAs: Ver Projetos (→#projetos) · Contato (→#contato)

## Sobre mim
Reescrito a partir do texto do site anterior + trajetória atual (DP6/Itaú/Magalu Ads) e dados
de formação. Ver texto final em `src/data/content.ts` → `about.paragraphs`.

## Experiência
Timeline com 6 posições, mais recente primeiro. Fontes: o que o autor confirmou no chat (DP6,
atual no Itaú, antes na Magalu Ads) + as 5 posições anteriores extraídas do site de referência
(Atento Brasil, Faculdade ESEG ×2, Grupo Vamos, Los Carvalhos — já publicadas pelo próprio autor
lá, reaproveitadas aqui).

**`[TODO]`** — únicas datas não confirmadas pelo autor: mês/ano de início na DP6 (Magalu Ads →
Itaú) e a data de saída da Atento Brasil. O site já expõe isso de forma transparente: o item
DP6 mostra período "Atual" (sem inventar data de início) e há uma nota de rodapé na seção
avisando que essa transição está em confirmação. **Não fabriquei nenhuma data** — só omiti o
que não foi informado.

## Stack técnica
3 categorias, com a lista de ferramentas que o autor passou (não é mais a lista desatualizada
do site antigo):
- **Cloud & Infraestrutura** — AWS (Step Functions, Glue, Lambda, EventBridge, EMR), GCP
  (BigQuery, Dataform, Cloud Run, Workflows), Terraform, IaC
- **Engenharia de Dados** — ETL/ELT, CI/CD, Data Quality, Modelagem de dados
- **Dados & Operação** — Analytics, FinOps, Governança e observabilidade

## Schema de "Projeto" (para quando o backlog for preenchido)
```yaml
titulo: string
resumo: string
problema: string
solucao: string
stack: [string]
papel: string
resultados: string
link_repo: string?
link_demo: string?
imagens: [string]?
confidencial: bool
```

## Projetos — em backlog
Confirmado pelo autor: **nenhum case pronto ainda**. A seção existe no site com um estado vazio
("Cases em construção") + link para o GitHub, em vez de ficar oculta — mantém a promessa de
"Ver Projetos" do Hero coerente. Quando o primeiro case estiver pronto, populamos com o schema
acima.

## Currículo / CV
**Gerado a partir do conteúdo do site** (não havia PDF pronto). Páginas dedicadas
`/cv/` (PT) e `/en/cv/` (EN), com layout de currículo compacto + botão "Imprimir / Salvar PDF"
(`window.print()`, com CSS de impressão próprio). Puxa os mesmos dados de Experiência,
Stack e Formação — sem duplicar conteúdo.

**`[TODO]` de produto, não de spec**: se o autor gerar um PDF definitivo por fora (ex: export do
LinkedIn/Canva), dá pra trocar o link do botão de CV para apontar direto pra um arquivo estático
em `public/`.

## Contato
- E-mail: `fuzatimatheus@gmail.com`
- LinkedIn: https://www.linkedin.com/in/matheus-fuzati-de-carvalho/
- GitHub: https://github.com/matheus-fuzati
- WhatsApp: `(11) 94040-3278` → CTA "Iniciar conversa" / "Start a conversation" (`wa.me`)

## Formação Acadêmica e Cursos
- **Graduação** — Ciência de Dados, Faculdade Estácio, 2023–2025
- **Pós-graduação** — Arquitetura e Projetos de Cloud Computing, Faculdade GRAN, 2026–2027 (em
  andamento)
- **Cursos**: 3 na Udemy (Databricks/Spark/PySpark; GCP Associate Cloud Engineer; Python +
  SQL/NoSQL), 2 na FIAP (BI; Big Data e Analytics), 2 na Data Science Academy (Power BI; Python
  para Data Science) — todos herdados do site anterior, reaproveitados porque o autor não sinalizou
  mudança.
