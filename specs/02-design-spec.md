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
O autor pediu explicitamente para **desconsiderar toda a identidade visual anterior** (não só a
cor) em favor de algo **sério, moderno e minimalista**. Publiquei 4 direções completas
(cor + preview de hero) num artifact para revisão:
https://claude.ai/code/artifact/40d59467-0a38-401d-a0d1-0beef653ba1a — fonte em
`specs/_palette-picker.html`.

**Decisão tomada para destravar a implementação** (autorização do autor: "manda bala, amanhã
revisa"): opção **A — Ardósia**. Fácil de trocar depois — é tudo token de CSS.

| Token | Cor | Uso |
|---|---|---|
| `bg` | `#12161C` | Fundo |
| `surface` | `#1A2028` | Cards |
| `text` | `#E7EAEE` | Texto principal |
| `muted` | `#8A94A3` | Texto secundário |
| `accent` | `#5C8DF6` | CTA, links, destaque |

Vibe: escuro, frio, confiante — azul-aço em vez de âmbar, lê como engenharia/cloud, não como
terminal hacker. As outras 3 opções (B Papel, C Grafite, D Latão) continuam no artifact caso o
autor prefira trocar na revisão.

Layout também é uma variação real em relação ao site antigo: sem motivo RAW/STAGE/MART, sem
"//" como label decorativo de seção (eyebrow ainda usa mono, mas como label discreto, não como
comentário de código), timeline vertical mais sóbria, cards de skill sem glow.

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

## Animações
- **[x] Hero**: efeito de digitação/decrypt no nome (`src/components/Hero.astro`) — scramble
  progressivo esquerda→direita em vanilla JS (`requestAnimationFrame`), com fallback estático
  (nome legível sem JS) e guard explícito de `prefers-reduced-motion`.
- **[x] Scroll-reveal** em seções e cards — `IntersectionObserver` + `data-reveal` em
  `Base.astro`, já cobrindo todas as seções exceto o Hero (above the fold).
- **[x] Hover glow** nos cards de skill (`.skill-card`) e no estado vazio de projetos
  (`.projects-empty`) — `box-shadow` com `--accent`/`--accent-dim`, mesma linguagem de transição
  do `.btn-ghost`/`.contact-card`.
- Implementação real: **vanilla JS + CSS**, sem framework de UI (ver decisão em
  `03-tech-spec.md`) — mais simples e sem JS de framework no bundle.

## Responsividade
Mobile-first, breakpoints padrão (Tailwind: sm/md/lg/xl).

## Dark mode
Site de referência é dark-only. **[PENDENTE]** perguntar se v2 mantém dark-only ou ganha
light mode.
