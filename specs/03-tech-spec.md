# 03 — Spec Técnica

## Stack
- Framework: Astro (output estático)
- Animações: island isolada (React/Preact + Framer Motion, ou vanilla JS + GSAP) só nos
  componentes que precisam — resto do site em HTML/CSS puro para performance (ver spec 02)
- Estilo: Tailwind CSS (o site de referência já usa; mantém velocidade de execução)
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
│   │   └── islands/        # componentes interativos/animados hidratados no client
│   ├── layouts/
│   └── pages/
├── public/
│   └── cv.pdf              # currículo para download (spec 01)
├── astro.config.mjs
└── .github/workflows/deploy.yml
```

## Domínio
_(usar domínio custom via CNAME? ou só fuzatimatheus.github.io?)_

## Analytics
_(algum tipo de analytics leve/privado? ex: Plausible, GoatCounter, ou nenhum)_

## Performance / acessibilidade
Lighthouse ≥ 90 em Performance/Accessibility/SEO como meta de aceite.
