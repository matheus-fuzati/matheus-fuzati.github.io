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

## Pendências de revisão
1. Validar a paleta escolhida (Ardósia) ou trocar por B/C/D no artifact
2. Revisar os textos em EN (foram reescritos, não traduzidos — vale uma leitura)
3. Decidir se/quando troca o CV "gerado do site" por um PDF definitivo
4. Autor precisa revisar o enquadramento de autoria dos 4 cases de "IA Development" (arquitetei/
   desenvolvi vs. contribuí) antes de publicar — texto foi inferido da presença dos repositórios
   no ambiente do autor, não de confirmação explícita de papel em cada um
