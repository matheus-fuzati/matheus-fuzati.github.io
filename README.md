# Portfólio — Matheus Fuzati

Site pessoal de portfólio, construído em **spec-driven development** e publicado no GitHub Pages.

Status: **v1 implementada e buildando localmente** — falta só publicar (ver "Publicar" abaixo).

## Fluxo de trabalho (spec-driven)

Antes do código, o comportamento e o conteúdo do site foram descritos em `specs/`. Cada spec é
a fonte da verdade para aquele aspecto do projeto.

| Arquivo | O que define |
|---|---|
| `specs/00-constitution.md` | Objetivo do site, público-alvo, princípios e tom de voz |
| `specs/01-content-spec.md` | Conteúdo real (PT/EN) e o que ainda falta revisar |
| `specs/02-design-spec.md` | Sistema visual: paleta, tipografia, referências |
| `specs/03-tech-spec.md` | Stack, arquitetura de pastas, pipeline de deploy no GH Pages |
| `specs/04-tasks.md` | Progresso e pendências |
| `specs/_palette-picker.html` | Fonte do artifact de comparação de paletas |

## Rodando localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve o build de produção
```

## Stack

Astro (estático, CSS puro, sem framework de UI) → GitHub Actions → GitHub Pages.
Bilíngue: PT-BR em `/`, EN em `/en/`.

## Publicar no GitHub Pages

1. Criar o repositório **`fuzatimatheus/fuzatimatheus.github.io`** no GitHub (vazio, sem README).
2. Neste diretório:
   ```bash
   git remote add origin git@github.com:fuzatimatheus/fuzatimatheus.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. O workflow em `.github/workflows/deploy.yml` builda e publica a cada push em `main`.
5. Site fica em `https://fuzatimatheus.github.io`.
