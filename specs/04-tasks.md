# 04 — Plano de Implementação

> Status: **v1 implementada localmente, ainda não publicada** (falta criar o repo no GitHub e
> ligar o Pages — precisa de ação do autor, ver abaixo).

- [x] Fechar specs 00–03 o suficiente pra destravar implementação
- [x] Scaffold do projeto Astro
- [x] Design tokens + paleta (Ardósia, escolhida entre 4 opções — artifact em `02-design-spec.md`)
- [x] Conteúdo real PT+EN em `src/data/content.ts` (Sobre, Experiência, Stack, Formação, Contato)
- [x] Componentes de todas as seções + Header/Footer com toggle PT/EN
- [x] Página Home (PT `/` e EN `/en/`)
- [x] Seção de Projetos com estado vazio (backlog) em vez de fake content
- [x] Páginas de Currículo geradas do próprio conteúdo (`/cv/`, `/en/cv/`) com impressão
- [x] Workflow de deploy (GitHub Actions → Pages)
- [x] Build local verificado (`npm run build` — 4 páginas, sem erro)
- [ ] **Ação do autor**: criar o repositório `matheus-fuzati/matheus-fuzati.github.io` no GitHub,
      push deste código, ativar Pages → "GitHub Actions" nas settings do repo
- [ ] Revisão de conteúdo (ver `[TODO]`s em `01-content-spec.md`: datas DP6/Atento Brasil)
- [ ] Revisão de acessibilidade e performance pós-deploy (Lighthouse)
- [ ] Preencher o primeiro case de projeto quando sair do backlog

## Pendências de revisão (não bloqueiam o site, mas valem 5 min amanhã)
1. Confirmar mês/ano de início na DP6 e fim na Atento Brasil (`specs/01-content-spec.md`)
2. Validar a paleta escolhida (Ardósia) ou trocar por B/C/D no artifact
3. Revisar os textos em EN (foram reescritos, não traduzidos — vale uma leitura)
4. Decidir se/quando troca o CV "gerado do site" por um PDF definitivo
