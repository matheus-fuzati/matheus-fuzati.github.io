# 04 — Plano de Implementação

> Status: **v2 publicada e no ar** em https://matheus-fuzati.github.io (deploy automático via
> `.github/workflows/deploy.yml` a cada push em `main`).

- [x] Fechar specs 00–03 o suficiente pra destravar implementação
- [x] Scaffold do projeto Astro
- [x] Design tokens + paleta (Ardósia, escolhida entre 4 opções — artifact em `02-design-spec.md`)
- [x] Conteúdo real PT+EN em `src/data/content.ts` (Sobre, Experiência, Stack, IA Development,
      Formação, Contato)
- [x] Componentes de todas as seções + Header/Footer com toggle PT/EN
- [x] Página Home (PT `/` e EN `/en/`)
- [x] Seção de Projetos com estado vazio (backlog) em vez de fake content
- [x] Páginas de Currículo geradas do próprio conteúdo (`/cv/`, `/en/cv/`) com impressão
- [x] Workflow de deploy (GitHub Actions → Pages)
- [x] Repositório criado, push feito, Pages ativo — site no ar
- [x] Build local verificado (`npm run build` — 4 páginas, sem erro)
- [x] Animação de decrypt/scramble no nome do Hero (`src/components/Hero.astro`), vanilla JS,
      respeitando `prefers-reduced-motion`
- [x] Hover glow em `.skill-card` e `.projects-empty` (`src/styles/global.css`)
- [x] Datas de Experiência confirmadas pelo autor (transição Atento → DP6 em 02/2026)
- [x] Seção "IA Development" (Atlas, Billing Platform, Polaris/Heap, Certifications) — processo
      de desenvolvimento assistido por IA, sem dados de cliente nem artefatos proprietários
- [ ] Revisão de acessibilidade e performance pós-deploy (Lighthouse)
- [ ] Preencher o primeiro case de projeto público quando sair do backlog (seção "Projetos",
      distinta da "IA Development")
- [ ] Decidir enquadramento das ferramentas internas de IA dev (SDD, Harness etc.) sem repo
      público — autor ainda não definiu como apresentar, fica de fora por enquanto

## Pendências de revisão (v1/v2 — ainda valem)
1. Revisar os textos em EN (foram reescritos, não traduzidos — vale uma leitura)
2. Decidir se/quando troca o CV "gerado do site" por um PDF definitivo
3. Autor precisa revisar o enquadramento de autoria dos 4 cases de "IA Development" (arquitetei/
   desenvolvi vs. contribuí) antes de publicar — texto foi inferido da presença dos repositórios
   no ambiente do autor, não de confirmação explícita de papel em cada um

## v3 — reescrita cinematográfica (Vite + React)

> Motivo: o autor quer o próprio portfólio como playground de técnica avançada de frontend
> (ver `00-constitution.md`). Reverte a decisão "vanilla JS, sem framework" da v1/v2.

- [x] Artifact de direção visual+motion (`specs/_direction-picker.html`, 3 opções) — autor
      escolheu **Daylight Systems** (light, serif+mono, movimento contido)
- [x] Scaffold Vite + React 19 + React Router 6 + `vite-react-ssg`, substituindo Astro
      (`astro.config.mjs`, `*.astro` removidos do histórico git, não do disco)
- [x] Node fixado em 22 (`.nvmrc`) — WSL tem 18.x por padrão, baixo demais pra stack atual
- [x] Conteúdo portado pra `src/content/content.ts` sem mudar texto, com `SiteContent`
      explícito (interfaces, não só `as const`) — necessário pra tipagem de campos opcionais
      (`current?`, `companyNote?`, `footnote?`) funcionar fora do Astro
- [x] `i18n/paths.ts` corrige bug latente do toggle PT/EN (`Header.astro` antigo sempre voltava
      pra home; nunca se manifestou porque Header nunca rodou fora da home, mas o fix já vale
      pra arquitetura nova)
- [x] `<head>` por rota via `Head` de `vite-react-ssg` (não `react-helmet-async` direto —
      só o wrapper da lib sabe injetar no HTML pré-renderizado)
- [x] Rotas lazy (`lazy: () => import(...)`) — chunk separado por página, CV isolado do
      bundle de Lenis/GSAP/Three.js
- [x] Base cinematográfica: Lenis + GSAP ScrollTrigger (substitui `data-reveal`), rail de
      progresso na Experiência, View Transitions nativas (Header, toggle, CTA de CV)
- [x] Hero 3D/WebGL: React Three Fiber + `meshPhysicalMaterial`, gated por suporte a WebGL +
      reduced-motion + error boundary
- [x] GitHub Actions reescrito (Node 22 explícito, `npm ci` + `npm run build`, sem
      `withastro/action`)
- [x] `tsc --noEmit` limpo e `npm run build` gerando as 4 rotas pré-renderizadas
- [ ] **Ação do autor**: validar visualmente no navegador (este ambiente não tem Chromium/
      Playwright disponível — só foi possível verificar HTML gerado, chunks e tipos, não
      render real) — ver checklist de verificação em `04-tasks.md`/plano da sessão
- [ ] Medir Lighthouse real pós-deploy e decidir se a meta ≥90 em Performance se mantém com o
      chunk do hero 3D a bordo (ver nota em `03-tech-spec.md`)
- [ ] Reavaliar `react-router-dom@7` quando `vite-react-ssg` suportar (ver CVEs aceitos em
      `03-tech-spec.md`)
- [ ] Decidir commit/push — nada foi commitado ainda nesta rodada, aguardando autor
