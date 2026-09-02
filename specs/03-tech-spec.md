# 03 — Spec Técnica

## Stack
- Framework: Astro
- Hospedagem: GitHub Pages — repositório de usuário `fuzatimatheus.github.io`
- Deploy: GitHub Actions (build Astro → publish para Pages) a cada push em `main`

## Estrutura de pastas (proposta)
```
portfolio/
├── specs/                  # specs (este diretório)
├── src/
│   ├── content/
│   │   └── projects/       # um .md/.yaml por projeto (schema em 01-content-spec.md)
│   ├── components/
│   ├── layouts/
│   └── pages/
├── public/
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## Domínio
_(usar domínio custom via CNAME? ou só fuzatimatheus.github.io?)_

## Analytics
_(algum tipo de analytics leve/privado? ex: Plausible, GoatCounter, ou nenhum)_

## Performance / acessibilidade
Lighthouse ≥ 90 em Performance/Accessibility/SEO como meta de aceite.
