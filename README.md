# Portfólio — Matheus Fuzati

Site pessoal de portfólio, construído em **spec-driven development** e publicado no GitHub Pages.
Desde a v3, o próprio site funciona como **playground de técnicas avançadas de frontend**
(scroll storytelling, smooth scroll, View Transitions, WebGL) — ver `specs/00-constitution.md`.

Status: **v3 (reescrita cinematográfica) implementada e buildando localmente**, já no ar em
https://matheus-fuzati.github.io.

## Fluxo de trabalho (spec-driven)

Antes do código, o comportamento e o conteúdo do site foram descritos em `specs/`. Cada spec é
a fonte da verdade para aquele aspecto do projeto.

| Arquivo | O que define |
|---|---|
| `specs/00-constitution.md` | Objetivo do site, público-alvo, princípios e tom de voz |
| `specs/01-content-spec.md` | Conteúdo real (PT/EN) e o que ainda falta revisar |
| `specs/02-design-spec.md` | Sistema visual: paleta "Daylight Systems", tipografia, animações |
| `specs/03-tech-spec.md` | Stack, arquitetura de pastas, pipeline de deploy no GH Pages |
| `specs/04-tasks.md` | Progresso e pendências |
| `specs/_palette-picker.html` | Artifact de comparação de paletas (v1/v2) |
| `specs/_direction-picker.html` | Artifact de comparação de direções visuais+motion (v3) |

## Rodando localmente

Precisa de **Node 22** (`.nvmrc`). Se `node -v` mostrar algo mais antigo, aponte pro binário
certo antes de instalar:

```bash
node -v   # se não for 22.x:
export PATH="$HOME/.nvm/versions/node/v22.23.3/bin:$PATH"

npm install
npm run dev       # http://localhost:5173
npm run build     # gera dist/ (vite-react-ssg: build client + SSR + prerender das 4 rotas)
npm run preview   # serve o build de produção
```

## Stack

Vite + React + React Router (`vite-react-ssg` pré-renderiza cada rota em HTML real) →
GitHub Actions → GitHub Pages. Lenis (smooth scroll) + GSAP ScrollTrigger (scroll storytelling)
+ View Transitions nativas na Home; React Three Fiber no hero (gated por suporte a WebGL e
`prefers-reduced-motion`). CV (`/cv`, `/en/cv`) é isolado — sem Lenis/GSAP/Three.js no chunk.
Bilíngue: PT-BR em `/`, EN em `/en/`.

## Publicar no GitHub Pages

Já publicado — `git push` em `main` dispara o workflow (`.github/workflows/deploy.yml`), que
builda com Node 22 e publica via `actions/deploy-pages`. Site em
`https://matheus-fuzati.github.io`.
