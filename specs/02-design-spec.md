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
**[PENDENTE — decidir com o autor]**, opções a validar:
- Manter fundo escuro + mono, mas trocar o acento âmbar por outra cor de marca (ex: algo mais
  "dado/azul-verde/roxo" para diferenciar visualmente do antigo)
- Composição de layout diferente (o antigo é single-page com scroll; podemos manter isso ou
  variar a grade dos cards de projeto/experiência)
- Motivo de fundo diferente (ex: ao invés de "RAW/STAGE/MART" como decoração, usar outro
  artefato visual ligado a dados/DP6 — grafo, terminal, linha do tempo)

## Referências visuais adicionais
_(o autor mencionou que vai passar mais referências — aguardando)_

## Paleta de cores
Base herdada (sujeita a ajuste, ver seção acima):
| Uso | Cor |
|---|---|
| Fundo | `#051226` |
| Texto principal | `#F4F3EE` |
| Destaque/CTA | `#F5B700` |

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
