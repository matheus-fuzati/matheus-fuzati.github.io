# 02 — Spec de Design

> Status: rascunho v1, baseado na análise do portfólio anterior do autor
> (https://portfolio-matheusfuzati.vercel.app/). Diretriz do autor: **"moderno assim, com
> animações e etc, mas não exatamente o que tem hoje"** → usar como referência de *linguagem*
> visual, não clonar layout/conteúdo 1:1. Stack de implementação é livre para mudar.

## Como o site de referência foi analisado
O site é uma SPA (Vite + React + React Router), 100% client-rendered — não dá pra ler o HTML
direto. O conteúdo foi extraído lendo os bundles `.js`/`.css` publicados (strings, classes
Tailwind, variáveis de cor/fonte). É informação pública do próprio autor sobre o próprio site,
sem engenharia reversa de nada de terceiros.

## O que o site de referência estabelece (DNA a manter)
- **Metáfora de engenharia de dados** como identidade visual: comentários de código como
  section labels (`// Sobre`, `// Projetos & Cases`), vocabulário de pipeline (`RAW`, `STAGE`,
  `MART`, `SELECT`), efeito de texto "decriptografando"/digitando no hero.
- **Estética dev/terminal**: tipografia monoespaçada nos títulos, fundo escuro, um único
  acento de cor vibrante.
- **Animações discretas orientadas a scroll**: reveal on scroll (fade+slide ao entrar na
  viewport), delays escalonados em listas/grids, hovers com transição de borda/sombra na cor
  de destaque.
- Paleta de referência: fundo **#051226** (navy quase preto), texto **#F4F3EE** (off-white),
  destaque **#F5B700** (âmbar).
- Tipografia de referência: **Inter** (corpo) + **JetBrains Mono** (headers/labels técnicos).

## O que muda nesta v2 (para não ser um clone)
Confirmado com o autor: **fundo escuro + mono ficam, mas o acento troca de cor** (era âmbar
`#F5B700`). Opções propostas — todas testadas para bom contraste sobre `#051226`:

| Opção | Cor | Vibe |
|---|---|---|
| **A — Cyan de dados** | `#2DD4BF` | Frio, técnico, "data/cloud" — o mais distante do site antigo |
| **B — Violeta moderno** | `#A78BFA` | Premium, SaaS moderno, ainda dev mas menos "terminal" |
| **C — Verde terminal** | `#4ADE80` | Mantém o clichê hacker/terminal só que trocando de cor |

**[PENDENTE]** o autor escolhe uma (ou pede outra direção) na próxima rodada.

Composição/layout também vão variar em relação ao site antigo (grid de cards e ritmo de seção
diferentes) — isso é trabalho de implementação, não uma decisão que precisa de aprovação prévia
linha a linha.

## Referências visuais adicionais
_(o autor mencionou que vai passar mais referências — aguardando)_

## Paleta de cores
| Uso | Cor |
|---|---|
| Fundo | `#051226` |
| Texto principal | `#F4F3EE` |
| Destaque/CTA | **[PENDENTE]** — ver opções A/B/C acima |

Se o site ganhar gráficos/dashboards embutidos nos cases, seguir a skill `dataviz` para paleta
categórica/sequencial acessível — não reaproveitar o acento sozinho para série de dados.

## Tipografia
- Corpo: **Inter** (300–600)
- Headers / labels técnicos / código: **JetBrains Mono** (400–700)

## Estilo geral
Dev-terminal / editorial técnico. Moderno, não minimalista vazio — tem textura (grid, bordas,
labels tipo comentário de código), mas sem poluir.

## Animações (a especificar em detalhe na implementação)
- Hero: efeito de digitação/decrypt no nome ou headline
- Scroll-reveal em seções e cards (stagger em listas)
- Hover states nos cards de projeto/skill com transição de borda + glow na cor de destaque
- Implementação: dado que a stack é Astro, animações ficam em **islands** (componente
  React/Preact isolado com Framer Motion, ou vanilla JS + GSAP/CSS) — o resto do site
  permanece HTML estático para performance.

## Responsividade
Mobile-first, breakpoints padrão (Tailwind: sm/md/lg/xl).

## Dark mode
Site de referência é dark-only. **[PENDENTE]** perguntar se v2 mantém dark-only ou ganha
light mode.
