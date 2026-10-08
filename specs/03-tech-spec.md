# 03 — Spec Técnica

> Status: **v3 implementada e buildando** (`npm run build` verificado localmente, 4 páginas
> pré-renderizadas, `tsc --noEmit` limpo). Substitui a stack Astro da v1/v2 por completo —
> ver `00-constitution.md` pro porquê (playground de técnica avançada de frontend).

## Stack (como foi implementado)
- Framework: **Vite + React 19 + React Router 6** (library mode, `createBrowserRouter`) +
  **`vite-react-ssg`** pra pré-renderizar cada rota em HTML real no build (preserva o
  comportamento de hoje: link direto funciona sem JS, `<head>` por rota, hidrata como SPA
  depois pra permitir View Transitions na navegação interna).
- Rotas são **lazy** (`lazy: () => import(...)`, convenção nativa do React Router, não
  `React.lazy`+Suspense manual) — cada página vira um chunk separado. Crítico pra `/cv` e
  `/en/cv` nunca carregarem o chunk de Lenis/GSAP/Three.js que só a Home usa.
- `<head>` por rota: `Head` exportado por `vite-react-ssg` (wrapper de `react-helmet-async`
  internamente) — **não** usar `react-helmet-async` direto, só `vite-react-ssg` sabe injetar
  no HTML pré-renderizado.
- Estilo: **CSS puro** com tokens (`src/styles/global.css`) — mesma decisão da v1/v2, continua
  valendo (nada de Tailwind).
- Smooth scroll: **Lenis**, sincronizado com `gsap.ticker` (`SmoothScrollProvider.tsx`,
  montado só pela Home). Não instancia sob `prefers-reduced-motion` — scroll nativo é o
  fallback, não um Lenis capado.
- Scroll storytelling: **GSAP + ScrollTrigger** — `Reveal.tsx` (substitui `data-reveal`/
  `IntersectionObserver` da v1/v2) e o rail de progresso da Experiência
  (`Experience.tsx`, `scrub` ligado ao `ScrollTrigger`).
- Transições: **View Transitions API nativa** (`document.startViewTransition`, sem lib) via
  `ViewTransitionLink.tsx` — feature-detecta e respeita `prefers-reduced-motion`; navegação
  cross-document usa `@view-transition { navigation: auto }` em CSS (Chromium hoje, inerte nos
  outros navegadores).
- Hero 3D: **React Three Fiber** (`@react-three/fiber`) + `meshPhysicalMaterial` nativo do
  Three.js (sem `@react-three/drei` — testado com `MeshTransmissionMaterial` do drei primeiro,
  o tamanho do chunk não mudou de forma relevante porque o custo é o Three.js em si, não o
  material; removida a dependência extra por simplicidade). Carregado via `lazy()` do React,
  só baixa o chunk (~900KB) quando `useWebglSupport()` confirma suporte **e**
  `prefers-reduced-motion` está desligado. `SceneErrorBoundary` cobre falha de carregamento do
  chunk — cai pro hero 2D sem crash.
- i18n: roteamento do React Router (`/`, `/en`, `/cv`, `/en/cv`) + `useLocale()`/`useContent()`
  (deriva o locale do `pathname`, sem Context) + `i18n/paths.ts` (`localizePath`) pro toggle
  PT/EN preservar a página atual (ex: alternar idioma estando no CV não volta pra home).
- Hospedagem: GitHub Pages — repositório de usuário `matheus-fuzati.github.io`, `base: '/'`
  (site de usuário serve da raiz, diferente de project page).
- Deploy: `.github/workflows/deploy.yml` — `actions/setup-node@v4` (Node 22) → `npm ci` →
  `npm run build` → `actions/upload-pages-artifact` → `actions/deploy-pages`.
- `.npmrc` com `legacy-peer-deps=true`: `vite-react-ssg` depende de `react-helmet-async@^1.3.0`
  internamente, que só declara peer de React até a v18 — funciona bem com React 19 na prática,
  mas o npm moderno recusa resolver sem esse flag.

## Contrato de fallback (por técnica)
| Técnica | Guard | Fallback |
|---|---|---|
| Lenis | `usePrefersReducedMotion()` | não instancia; scroll nativo |
| `Reveal` (ScrollTrigger) | idem | conteúdo nasce visível, sem animação |
| View Transitions | `typeof document.startViewTransition === "function"` + reduced-motion | navegação normal do React Router |
| Hero 3D (R3F) | `useWebglSupport()` (teste real de `getContext`) + reduced-motion + `SceneErrorBoundary` | hero 2D/CSS, sem canvas quebrado |
| Nome do Hero (decrypt) | reduced-motion (guard próprio, herdado da v1/v2) | nome estático, legível sem JS |

## Estrutura de pastas (real)
```
portfolio/
├── specs/                          # specs + artifacts (_palette-picker, _direction-picker)
├── public/favicon.svg
├── index.html                      # <head> mínimo (título/descrição vêm do Head por rota)
├── vite.config.ts                  # base: '/', plugin react, ssgOptions.dirStyle: "nested"
├── .nvmrc                          # 22
├── .npmrc                          # legacy-peer-deps=true
├── src/
│   ├── main.tsx                    # ViteReactSSG(routes)
│   ├── routes/
│   │   ├── routes.tsx              # 4 rotas, todas lazy
│   │   ├── HomePage.tsx            # Head + SmoothScrollProvider + seções
│   │   └── CvPage.tsx              # standalone, sem Header/Footer/providers pesados
│   ├── app/providers/SmoothScrollProvider.tsx
│   ├── components/
│   │   ├── layout/ (Header.tsx, Footer.tsx)
│   │   ├── sections/ (Hero, About, Experience, Skills, AIDevelopment, Projects, Education, Contact)
│   │   └── motion/ (Reveal.tsx, HeroNameEffect.tsx, ViewTransitionLink.tsx)
│   ├── three/ (HeroScene.tsx, GlassBlob.tsx, SceneErrorBoundary.tsx)
│   ├── content/ (content.ts, useContent.ts)
│   ├── i18n/paths.ts
│   ├── hooks/ (usePrefersReducedMotion.ts, useWebglSupport.ts)
│   └── styles/global.css
└── .github/workflows/deploy.yml
```

## Como rodar
Precisa de **Node 22** (ver `.nvmrc`) — o Node padrão do WSL deste ambiente é 18.x, baixo
demais pro Vite 8/Three.js atuais. Binário 22 já existe em
`~/.nvm/versions/node/v22.23.3/bin` (nvm em si está com a integração de shell quebrada —
não vale a pena arrumar, só apontar o PATH pro binário quando precisar).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # vite-react-ssg build -> dist/ (client + SSR + prerender das 4 rotas)
npm run preview   # serve o build de produção
```

## Domínio
`matheus-fuzati.github.io` (site de usuário). Domínio próprio: não configurado — pendente de
decisão do autor; se vier, é um `CNAME` em `public/` + ajuste de `site`/`base` no
`vite.config.ts`.

## Analytics
Nenhum configurado (decisão mantida da v1/v2).

## Performance / acessibilidade
Meta herdada da v1/v2: Lighthouse ≥ 90 em Performance/Accessibility/SEO. **Essa meta precisa
ser reavaliada com o autor** — o chunk do hero 3D (Three.js + R3F, ~900KB/~240KB gzip) é um
custo real que a v1/v2 (quase zero JS) não tinha. Mitigado por ser lazy + gated (só quem passa
WebGL e não pediu reduced-motion baixa esse chunk), mas o número de Performance provavelmente
cai pra quem baixa. Ainda não medido contra o deploy real.

## Vulnerabilidade conhecida, aceita conscientemente
`npm audit` reporta 2 CVEs moderados em `react-router` (open redirect via backslash;
desserialização de erro no SSR) na faixa `6.0.0–7.17.0`. O fix exigiria `react-router-dom@7`,
que `vite-react-ssg@0.9.2` não suporta (peer dependency presa em `^6.14.1`). Avaliação: nenhum
dos dois CVEs se aplica aqui — todo `to`/`navigate` do site é um path fixo (nunca input do
usuário) e o site é SSG puro (sem servidor SSR real recebendo payload em produção). Mantido em
`react-router-dom@^6.30.6` deliberadamente; reavaliar se `vite-react-ssg` suportar v7 no futuro.
