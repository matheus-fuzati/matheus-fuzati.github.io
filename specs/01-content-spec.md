# 01 — Spec de Conteúdo

> Status: rascunho v1 — trajetória/projetos ainda com pendências (marcadas `[PENDENTE]`).

## Seções do site
- [x] Hero (nome, headline, CTA "Ver Projetos" / "Contato")
- [x] Sobre mim
- [x] Experiência (trajetória profissional)
- [x] Stack técnica (skills)
- [x] Projetos / Cases
- [x] Contato
- [ ] Formação — perguntar se entra (site anterior tinha; autor não citou explicitamente)

## Hero
- Nome: Matheus Fuzati
- Headline curta, estilo do site anterior: `Analytics Engineer | Cloud Computing | Business Intelligence`
  → **[PENDENTE]** atualizar para refletir o momento atual (Engenheiro de Dados, DP6/Itaú) —
  confirmar headline definitiva com o autor.
- CTAs: "Ver Projetos" (→ #projetos), "Contato" (→ #contato)

## Sobre mim
Base textual do site anterior (reaproveitável/adaptável, tom já bate com a constituição):

> "Atuo na área de dados com foco em engenharia de dados, BI e analytics, trabalhando com
> grandes volumes de informação para transformar dados brutos em insights acionáveis."
>
> "Tenho experiência no desenvolvimento de pipelines de dados de ponta a ponta, em ambientes
> on-premise e cloud, sempre priorizando qualidade, organização e confiabilidade dos dados.
> Acredito que boas análises começam com uma base sólida, por isso aplico práticas de
> engenharia de software como versionamento, padronização e modelagem analítica consistente."

**[PENDENTE]** revisar/atualizar esse texto para citar DP6/Itaú/Magalu Ads e o momento atual
(não estava lá quando esse texto foi escrito).

## Experiência (trajetória profissional)
Confirmado pelo autor:
- **DP6** (consultoria) — Engenheiro de Dados
  - Atualmente: **consultor alocado no Itaú**
  - Também já esteve alocado em: **Itaú** (uma passagem anterior) e **Magalu Ads**
- Experiências mais antigas (pré-DP6): **[PENDENTE]** — autor vai enviar depois

**[PENDENTE]** ordem cronológica exata e datas (mês/ano) de cada alocação DP6 (Itaú → Magalu Ads
→ Itaú atual? ou outra ordem?), para montar a timeline.

## Stack técnica
O site anterior usava 3 categorias com grid de skills + stats (ex: "12+ Ferramentas",
"3+ Anos de Experiência", "Cloud" como especialização). Estrutura de categoria é reaproveitável;
**conteúdo está desatualizado** (não reflete Airflow, dbt, Databricks etc. que aparecem nos
projetos do disco) — vai ser refeito com base no que o autor confirmar.

```yaml
categoria: string        # ex: "Linguagens & Dados", "Cloud e BI", "ETL & Modelagem"
skills: [string]
```

**[PENDENTE]** lista definitiva de categorias + ferramentas atuais.

## Schema de "Projeto"
Cada projeto no portfólio deve ter, no mínimo:

```yaml
titulo: string
resumo: string          # 1-2 linhas
problema: string        # que dor/contexto motivou o projeto
solucao: string         # o que foi construído
stack: [string]
papel: string            # seu papel no projeto (solo, squad, liderança...)
resultados: string       # métrica/impacto, se houver
link_repo: string?
link_demo: string?
imagens: [string]?
confidencial: bool       # se true, descrever sem vazar dados sensíveis do empregador
```

## Projetos — status
O autor confirmou que a descrição dos projetos **será enviada separadamente** (não vamos
inferir a partir do código nas pastas do Desktop, por causa de possível conteúdo confidencial
dos projetos ligados a cliente — ex. pastas com "itau" no nome).

**[PENDENTE]** — aguardando, projeto a projeto, preenchimento do schema acima. Candidatos
identificados no disco (a confirmar quais entram e quais ficam de fora por confidencialidade):

- King_of_Languages
- Toolkit_Engenharia_de_Dados
- imagens-hub-gcp
- itau_dados_tardios *(provável confidencial)*
- itau_score_tagueamento *(provável confidencial)*
- multa
- pipeline_airflow
- scripts

## Currículo / CV
**Confirmado: sim**, disponibilizar para download (botão no Hero e/ou Contato).
**[PENDENTE]** definir: PDF já existente do autor, ou gerado a partir do conteúdo do site
(mesmos dados de Experiência/Stack, formatado para impressão)?

## Contato
Canais confirmados: **e-mail, LinkedIn, GitHub**.

- E-mail: `fuzatimatheus@gmail.com`
- LinkedIn: https://www.linkedin.com/in/matheus-fuzati-de-carvalho/
- GitHub: **[PENDENTE]** usuário do GitHub a exibir/linkar

O site anterior tinha um fluxo de "Iniciar conversa?" redirecionando pro WhatsApp — **[PENDENTE]**
perguntar se isso entra de novo ou fica só e-mail/LinkedIn/GitHub.
