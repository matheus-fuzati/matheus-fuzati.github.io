# Portfólio — Matheus Fuzati

Site pessoal de portfólio, construído em **spec-driven development** e publicado no GitHub Pages.

## Fluxo de trabalho (spec-driven)

Antes de qualquer código, o comportamento e o conteúdo do site são descritos em `specs/`.
Cada spec é a fonte da verdade para aquele aspecto do projeto — o código é gerado/ajustado
para satisfazê-la, não o contrário.

| Arquivo | O que define |
|---|---|
| `specs/00-constitution.md` | Objetivo do site, público-alvo, princípios e tom de voz |
| `specs/01-content-spec.md` | Estrutura de conteúdo e o "schema" de cada projeto/seção |
| `specs/02-design-spec.md` | Sistema visual: paleta, tipografia, layout, referências |
| `specs/03-tech-spec.md` | Stack, arquitetura de pastas, pipeline de deploy no GH Pages |
| `specs/04-tasks.md` | Plano de implementação, quebrado em tarefas rastreáveis |

Status atual: **em entrevista** — specs ainda não preenchidas, aguardando input de conteúdo.

## Stack

Astro (build estático) → GitHub Actions → GitHub Pages (`fuzatimatheus.github.io`).
