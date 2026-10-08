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

## v4 — reescrita de conteúdo completa (ditada pelo autor)

> Autor passou um documento único com as 7 seções do site reescritas (Hero, Sobre, Atuação,
> Projetos com IA, Experiência, Stack, Contato), inspirado num mock visual anterior
> (marianalavy.com). Ver `01-content-spec.md` pro detalhe de conteúdo.

- [x] Hero: eyebrow/tagline/meta reescritos (agora "Engenheiro de Dados & AI Developer")
- [x] Sobre: 4 parágrafos novos (duas frentes na DP6, processo de IA, trajetória)
- [x] Seção nova "Atuação" (3 cards descritivos) — `Atuacao.tsx`
- [x] "IA Development" renomeada "Projetos com IA", expandida de 4 pra 5 projetos (+ Plugin
      ci-polaris), cards da home simplificados (resumo + link)
- [x] 5 páginas dedicadas de projeto (`/projetos/:slug`, `/en/projetos/:slug`) via
      `getStaticPaths` do `vite-react-ssg` — template: capa (placeholder) → problema → solução →
      galeria (3 placeholders) → arquitetura → decisões → destaque → resultados → stack
- [x] Experiência: DP6 vira item com sub-itens aninhados (`highlights`) — Itaú, CI Polaris,
      Magalu Ads como frentes simultâneas, não mais um item plano com nota
- [x] Stack: 5 categorias (era 3), grid `auto-fit`
- [x] Antiga seção "Projetos" (backlog vazio) removida — nav e componente
- [x] Contato: WhatsApp removido do conjunto de canais
- [x] Bug corrigido no processo: `ScrollTrigger` não registrado na rota de projeto (só
      `SmoothScrollProvider` registrava) — `Reveal.tsx` agora registra o próprio plugin
- [x] **Pendente do autor**: capturas de tela reais pros projetos — ainda esperando os arquivos
      (ver v5 abaixo pra atualização do número de projetos)
- [x] Commit/push desta rodada

## v5 — correção do hero + remoção da foto + ajustes pontuais (ditado pelo autor)

> Autor reportou print do hero quebrado/desproporcional em produção (tagline dominando a tela,
> foto colidindo com o nav) e pediu replanejar a distribuição, tirar a foto de vez, remover o
> projeto "Plugin ci-polaris", mais animação 3D/transições, e um conjunto de ícones leve. Também
> pediu 5 mocks de paleta pra escolher — entregues como Artifact (não como arquivo no repo), já
> que o autor não consegue ver screenshot do Playwright.

- [x] Foto do Hero removida (markup, CSS `.hero-photo`, parallax de scroll que a acompanhava)
- [x] "Plugin ci-polaris" removido de `content.ts` (PT+EN) — volta a 4 projetos com IA
- [x] Hero reequilibrado: `.hero-grid` menos espremido (breakpoint de 980px pra 1180px), `h1`
      ligeiramente menor, `.hero-statement` reduzido de peso/tamanho (700→600, até 48px→34px) e
      alongado (`max-width` 21ch→28ch) pra não competir visualmente com o nome
- [x] `FloatingShards`: de 4 pra 6 fragmentos + tilt de paralaxe seguindo o cursor (lerp simples,
      sem lib nova)
- [x] Transição de rota com giro 3D leve (`perspective` + `rotateY` nos pseudo-elementos
      `::view-transition-old/new(root)`), só CSS, sem mudar `ViewTransitionLink.tsx`
- [x] 3 ícones inline (email/LinkedIn/GitHub, `ContactIcons.tsx`, ~0.3kb cada, sem lib) nos
      cards de Contato
- [x] Mock de 5 direções de paleta entregue como Artifact (link na conversa, não arquivo de
      repo) — mesma estrutura corrigida do hero em 5 paletas (Daylight atual, Terminal Ink,
      Glacier, Graphite Signal, Clay Studio) pro autor escolher antes de aplicar no site de
      verdade
- [x] **Aguardando o autor**: qual paleta do mock escolher (ou pedido de ajuste) — resolvido na v6
- [ ] **Pendente do autor**: capturas de tela reais pros 4 projetos (capa + galeria)

## v6 — redesign completo: tema claro/escuro, hero minimalista, nova estrutura (ditado pelo autor)

> A partir dos mocks de paleta (v5) e de várias rodadas de Artifact comparando estrutura de home
> (hero, carrossel de stack, linha do tempo, Atuação→Stack/Formação), o autor fechou a direção:
> **Glacier** (claro) e **Cobalt Night** (escuro) como as duas paletas finais, tipografia
> Poppins/Inter/Roboto, hero reduzido ao essencial, e uma reestruturação de seções. Aprovado e
> publicado nesta rodada, com os prints dos projetos ainda pendentes.

- [x] **Tema claro/escuro de verdade**: script inline no `index.html` aplica `data-theme` antes do
      primeiro paint (sem flash); toggle (`ThemeToggle.tsx` + `useTheme.ts`) no header, persistido
      em `localStorage`. Tokens em `global.css`: `:root` (claro, Glacier) + `[data-theme="dark"]` +
      fallback `@media (prefers-color-scheme: dark)` (Cobalt Night)
- [x] Tipografia trocada: Fraunces/IBM Plex Sans/IBM Plex Mono → Poppins (`--font-display`),
      Inter (`--font-body`), Roboto (`--font-mono` — nome mantido por histórico, não é mais mono)
- [x] Hero reduzido ao essencial: só eyebrow, nome e uma linha horizontal Cargo/Formação — tagline
      e CTAs removidos de vez (`hero.tagline`/`ctaPrimary`/`ctaSecondary` saíram do `content.ts`).
      Cena 3D (`FloatingShards`+`ParticleField`) mantida atrás do conteúdo
- [x] `StackCarousel.tsx` novo: carrossel infinito (CSS puro, sem lib) de ícone+nome da stack,
      sem chapa/fundo — só entre o hero e a Experiência. Para sob `prefers-reduced-motion`
- [x] `Experience.tsx` reescrito: linha do tempo **horizontal** (era vertical), cronológica da
      esquerda (mais antigo) pra direita (atual, destacado/pulsando) — texto sempre abaixo da
      linha, nunca em cima. Cada parada expande/colapsa o detalhe daquela experiência ao clicar
      (estado local em React, sem nova lib)
- [x] Seção "Atuação" removida (componente e dado); "Stack & Formação" (`StackFormacao.tsx`) nova,
      reaproveitando `content.skills` + `content.education` sem mudar o schema
- [x] Ordem final das seções: Home → Experiência → Projetos com IA → Stack & Formação → Contato
      (nav, `SECTION_IDS` e `nav.links` atualizados; "Sobre" também saiu da Home — `about` continua
      em `content.ts` só porque o CvPage ainda usa `about.paragraphs[0]`)
- [x] Página de projeto reestruturada: "Problema"+"Solução" viraram "Descrição", "Arquitetura"+
      "Decisões técnicas" viraram "Como foi construído", nova seção "Funcionalidades" (campo
      `features: string[]` novo em `AIDevCase`, preenchido pros 4 projetos em PT+EN a partir do
      texto já existente, sem inventar fato novo). Layout em 2 colunas (conteúdo + stack/destaque/
      resultados) com a galeria "Prints das telas" embaixo, full-width
- [x] Componentes removidos (substituídos): `About.tsx`, `Atuacao.tsx`, `Skills.tsx`,
      `Education.tsx`. CSS correspondente (`.about-grid`, `.fact-list`, `.skills-grid`,
      `.skill-card`, `.atuacao-grid`, `.atuacao-card`) removido também
- [x] `public/profile.png` e toda a lógica de foto no Hero já tinham saído na v5 — nada de novo
      aqui, só confirmando que não voltou
- [x] Build limpo (12 páginas), `tsc --noEmit` limpo, verificado via Playwright em todas as rotas
      (PT/EN, 4 páginas de projeto, CV) nos dois temas — zero erro de console/página
- [ ] **Pendente do autor**: capturas de tela reais pros 4 projetos (capa + galeria) — os
      placeholders "Prints das telas" já estão no lugar certo

## v7 — ajustes de conteúdo, scroll bi-direcional, interação de trajetória e equilíbrio de layout

> Rodada pedida pelo autor como um brief único de 4 blocos (conteúdo, animações globais,
> interação de clique na Experiência, ajustes de layout), depois de publicada a v6.

- [x] Removida a saudação "Olá, eu sou" do Hero (`hero.greeting` saiu do `content.ts` e da UI)
- [x] Removido o bloco "Como eu trabalho com IA" (chips) da seção de Projetos com IA
      (`aiDev.howTitle`/`aiDev.how` saíram do `content.ts` e da UI)
- [x] Título da seção renomeado: "Projetos com IA" → "Plataformas Desenvolvidas - IA Development"
      (eyebrow mantido como estava; só o `<h2>` mudou)
- [x] Item de Experiência da DP6: `company` virou "DP6 | Itaú & MagaluAds" (PT+EN) — aparece tanto
      na timeline horizontal quanto no CvPage, que lê o mesmo campo
- [x] `Reveal.tsx` ficou bi-direcional: trocado `once:true`/`onEnter` único por
      `onEnter`+`onEnterBack` (mostra) e `onLeave`+`onLeaveBack` (esconde de novo ao sair da
      viewport em qualquer sentido) — verificado via scroll simulado (opacidade 0→1→0)
- [x] Fundo decorativo novo: `FloatingTechIcons.tsx` — camada fixa atrás de todo o conteúdo com
      ícones técnicos (`</>`, `{ }`, `<tag/>`, `db`) em opacidade 0.05, posições fixas (não
      aleatórias, pra não gerar mismatch de hidratação no `vite-react-ssg`), drift lento via CSS
      `@keyframes`. Não renderiza nada sob `prefers-reduced-motion` (decorativo puro, sem razão
      pra existir estático)
- [x] `Experience.tsx`: clique numa parada agora é exclusivo (um `activeKey` em vez de um
      `Set` de abertos) — a parada ativa expande (flip 3D via `@keyframes` de `rotateX` no
      `.tl-h-detail`, domina a largura da linha, ganha borda/sombra de destaque) e as demais
      encolhem pra ~68px com `blur(3px)` + opacidade 0.35. Fallback mobile (`.tl-h-list`)
      continua um accordion simples, sem flip/blur — não faz sentido com o card já ocupando a
      largura toda
- [x] `StackFormacao.tsx`: colunas "Ferramentas e Habilidades" e "Formação Acadêmica e Cursos"
      igualadas em altura (`align-items: stretch` no grid + `flex`/`align-content`/
      `justify-content: space-between` internos) em vez de uma ficar visivelmente mais curta
- [x] `Contact.tsx`: conteúdo (eyebrow, título, corpo, botão de CV, grid de canais) centralizado
      — era alinhado à esquerda
- [x] **Bug de regressão da v6 encontrado e corrigido**: `.tl-h-list` (fallback mobile da
      Experiência) nunca aparecia — uma regra `display: none` sem media query estava depois do
      `@media (max-width: 900px)` que tentava reativá-la, então sempre ganhava o empate de
      especificidade. Mobile ficava sem nenhum conteúdo de timeline desde a v6. Corrigido
      reordenando as regras
- [x] Verificado: `tsc --noEmit` limpo, `npm run build` limpo (12 páginas), Playwright em
      desktop (1440px) e mobile (390px) — bi-directional reveal, clique/flip/blur da Experiência,
      alturas iguais no Stack/Formação (906px nos dois lados), centralização do Contato e
      ausência de scroll horizontal no mobile, todos confirmados por medição (não só visual)
