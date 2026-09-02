# 03 — Spec Técnica

> Status: **implementado e buildando** (`npm run build` verificado localmente, 4 páginas geradas).

## Stack (como foi implementado)
- Framework: **Astro** (output estático, sem SSR)
- Estilo: **CSS puro** com tokens (`src/styles/global.css`) — nada de Tailwind. Decisão tomada
  na implementação: a paleta/tipografia já são um sistema pequeno e autoral, Tailwind seria peso
  extra sem ganho real aqui.
- Animações: **vanilla JS** — um único `IntersectionObserver` no layout base (`Base.astro`)
  que adiciona `.is-visible` a qualquer elemento com `data-reveal`, mais transições em CSS.
  Sem React/Framer Motion — mais simples, zero JS de framework no bundle, e o direcionamento
  "sério/minimalista" pede menos, não mais, artifício visual. `prefers-reduced-motion` respeitado.
- i18n: roteamento nativo do Astro (`i18n.defaultLocale: "pt"`, `prefixDefaultLocale: false`) —
  PT-BR na raiz (`/`), EN em `/en/`.
- Hospedagem: GitHub Pages — repositório de usuário `matheus-fuzati.github.io`
- Deploy: `.github/workflows/deploy.yml`, via `withastro/action` + `actions/deploy-pages`, a
  cada push em `main`

## Estrutura de pastas (real)
```
portfolio/
├── specs/                       # specs + artifact da paleta
├── src/
│   ├── data/content.ts          # todo o conteúdo do site, PT+EN, tipado
│   ├── components/              # Header, Hero, About, Experience, Skills,
│   │                             Projects, Education, Contact, Footer
│   ├── layouts/Base.astro       # <head>, fontes, script de scroll-reveal
│   ├── styles/global.css        # design tokens (paleta Ardósia) + estilos
│   └── pages/
│       ├── index.astro          # home PT
│       ├── en/index.astro       # home EN
│       ├── cv/index.astro       # currículo PT (imprimível)
│       └── en/cv/index.astro    # currículo EN (imprimível)
├── public/favicon.svg
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## Como rodar
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve o build
```

## Domínio
`matheus-fuzati.github.io` (site de usuário). Domínio próprio: não configurado — pendente de
decisão do autor; se vier, é só um `CNAME` em `public/` + ajuste de `site` em `astro.config.mjs`.

## Analytics
Nenhum configurado no v1 (nem GTM, o site anterior tinha — decisão deliberada de não trazer de
volta sem necessidade real).

## Performance / acessibilidade
Meta: Lighthouse ≥ 90 em Performance/Accessibility/SEO. Ainda não medido contra o deploy real
(fica pra depois de publicado — ver `04-tasks.md`).
