# 02 — Spec de Design

> Status: **v3 implementada** — direção "Daylight Systems", escolhida entre 3 opções no
> artifact `specs/_direction-picker.html` (https://claude.ai/artifact/RUAx8r6q67m7Va5q521Xxs).
> Supera a v1/v2 (paleta "Ardósia", dark-only, vanilla JS sem framework) — o autor pediu
> explicitamente o oposto desta vez: visão cinematográfica, transições, interatividade,
> disruptivo, como playground de técnica avançada de frontend (ver `00-constitution.md`).

## Como a direção foi escolhida
Mesmo exercício do `_palette-picker.html` da v1/v2, mas estendido pra cobrir **movimento**, não
só cor: 3 direções (Signal, Kinetic Ledger, Daylight Systems), cada uma com paleta de 6 tokens
(incluindo um `accent2` pra iluminar a cena 3D), tipografia real, uma prévia de pacing em CSS
puro, e um parágrafo de como Lenis/GSAP ScrollTrigger/hero 3D expressariam aquela direção.
Nenhuma clona a Ardósia ou o navy/âmbar do portfólio original (pré-Astro).

**Decisão do autor: Daylight Systems.** É a única das três que resolve de vez o modo
claro/escuro que ficava `[PENDENTE]` desde a v1.

| Token | Cor | Uso |
|---|---|---|
| `bg` | `#F3F1EB` | Fundo |
| `surface` | `#FFFFFF` | Cards |
| `surface-2` | `#ECE9E1` | Camada secundária |
| `text` | `#1B1A17` | Texto principal |
| `muted` | `#6B6860` | Texto secundário |
| `accent` | `#2F5BD1` | CTA, links, destaque |
| `accent2` | `#1E8F77` | Luz secundária da cena 3D do Hero |

Vibe: claro, editorial, preciso — índigo em vez do terracota clichê de "papel + serif"
(ver nota de `avoid-ai-generated-design` seguida na escolha). Light **único tema** por decisão
de escopo v3 (mesmo padrão de "single visual world" que a Ardósia já usava, só que no claro).

## Tipografia
- Display: **Fraunces** (headings) — serif editorial, contraste com o resto
- Corpo: **IBM Plex Sans**
- Mono / labels técnicos: **IBM Plex Mono** (único fio tipográfico comum entre as 3 direções
  do picker, mantido como elemento de continuidade da marca)

## Estilo geral
Editorial técnico e preciso, não minimalista vazio. Movimento **contido e preciso, sem
overshoot** — reveals rápidos, scroll com pacing de interface, não de abertura de filme.

## Animações
- **[x] Hero**: decrypt/scramble no nome (`src/components/motion/HeroNameEffect.tsx`, portado
  da v1/v2 sem mudança de algoritmo) — mantido como camada 2D de texto, coexistindo com a cena
  3D de fundo (são coisas diferentes: texto vs. ambiente). Fallback estático sem JS +
  `prefers-reduced-motion` preservados.
- **[x] Smooth scroll** (Lenis) + **scroll storytelling** (GSAP ScrollTrigger) em toda a Home —
  `Reveal.tsx` substitui o antigo `data-reveal`/`IntersectionObserver`; a seção Experiência
  ganha um "rail" de progresso que preenche conforme o scroll avança pela timeline.
- **[x] View Transitions** nativas entre rotas internas (`ViewTransitionLink.tsx`) — Header,
  toggle PT/EN, CTA de CV. Chromium hoje; Firefox/Safari caem pra navegação normal, sem erro.
- **[x] Hero 3D/WebGL**: objeto de vidro/soft (`src/three/GlassBlob.tsx`, React Three Fiber +
  `meshPhysicalMaterial` nativo do Three.js — sem `@react-three/drei`, menos dependência pro
  mesmo resultado), rotação lenta e tilt sutil seguindo o cursor, luz quente contida do
  `accent2`. Gated por suporte a WebGL + `prefers-reduced-motion`; cai pro hero 2D se qualquer
  um dos dois não passar, ou se o chunk lazy falhar.
- **[x] Hover glow** nos cards (`.skill-card`, `.ai-dev-card`, `.projects-empty`) — mantido da
  v1/v2, só com os tokens novos.
- Contrato de fallback (todas as técnicas acima): sob `prefers-reduced-motion`, Lenis não
  instancia, `Reveal` não anima (conteúdo nasce visível), View Transition não dispara, hero 3D
  não monta. Ver `03-tech-spec.md` para o detalhe técnico de cada guard.

## Responsividade
Mobile-first. A cena 3D do Hero (`.hero-scene`) é ocultada abaixo de 980px — decisão
deliberada de simplicidade/performance em telas pequenas, não um bug.

## Dark mode
**Resolvido nesta v3**: light-only, por escolha de direção (Daylight Systems). Não há mais
pendência — se o autor quiser dark mode no futuro, é uma nova decisão de design, não uma
dívida herdada.
