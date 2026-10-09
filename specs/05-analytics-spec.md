# 05 — Spec de Analytics (GTM + GA4)

> Status: conta GA4 e container GTM já criados — Measurement ID `G-NFTH0GYHQQ`, Container ID
> `GTM-WFGD5HGP` (já no `index.html`). **Pendente do autor**: configurar as tags/triggers dentro
> do GTM (tag de configuração do GA4 + 1 tag por evento custom) e publicar o container. Sem a
> publicação, os `pushEvent(...)` já chamam `window.dataLayer.push(...)` normalmente, mas o GTM
> ainda não tem instrução de repassar nada pro GA4.

## Objetivo

Taguear o site com Google Tag Manager + GA4, via `dataLayer`, pra responder 3 perguntas de
negócio que o autor escolheu (de uma lista maior de candidatas, separando o que o GA4 já dá de
graça do que precisa de tag manual):

1. Quais projetos despertam mais interesse
2. Se o site está gerando contato real
3. Quem lê os cases a fundo vs. só passa o olho

Uma ferramenta separada (fora deste repo, iniciativa futura) vai ler o export GA4→BigQuery e
visualizar esses 3 objetivos — este spec cobre só a instrumentação do site em si.

## Decisões

- **Sem gate de consentimento** — GTM/GA4 disparam direto, sem banner de cookies (decisão
  explícita do autor, dado o perfil de dado coletado aqui).
- **`dataLayer` puro, sem SDK/lib de analytics no bundle** — `src/lib/analytics.ts` expõe só
  `pushEvent(event, params)`, que faz `window.dataLayer.push({ event, ...params })`. Toda a lógica
  de tags/triggers vive dentro do GTM, não no código do site.
- **Container ID do GTM não é segredo** (fica público no HTML de qualquer site que usa GTM) —
  hardcoded direto no `index.html`, sem criar infraestrutura de env var pra isso (o repo não usa
  nenhuma `import.meta.env` hoje).
- **Toggle de idioma e toggle de tema ficaram de fora** — não servem a nenhum dos 3 objetivos
  acima. "Preferência de idioma" já dá pra ler segmentando `page_view` por URL (`/en/` vs sem),
  sem precisar rastrear o clique no toggle.

## Taxonomia de eventos — precisa de tag customizada

| Interação | Evento GA4 | Tipo | Parâmetros | Onde no código |
|---|---|---|---|---|
| Clique em "Ver projeto →" | `select_content` | Recomendado do GA4 | `content_type: "project"`, `item_id: <slug>` | `src/components/sections/AIDevelopment.tsx` |
| Abrir imagem (capa ou galeria) | `project_gallery_open` | Custom | `item_id: <slug>`, `image: <nome do arquivo>` | `src/routes/ProjectPage.tsx` |
| Clique em Email / LinkedIn / GitHub | `contact_click` | Custom | `channel: "email"\|"linkedin"\|"github"`, `placement: "header"\|"contact_section"` | `src/components/sections/Contact.tsx`, `src/components/layout/Header.tsx` |
| Clique em "Imprimir / Salvar PDF" do currículo | `cv_print_click` | Custom | `locale: "pt"\|"en"` | `src/routes/CvPage.tsx` |

## Automático — sem tag customizada

- Visualização de cada página de projeto/currículo → `page_view` padrão do GA4, segmentado por
  `page_path`.
- "Quem lê a fundo" → Enhanced Measurement do GA4 (evento `scroll` a 90% + "tempo médio de
  engajamento" por página), ligado por padrão em propriedades novas. Granularidade extra
  (25/50/75%) nas páginas de projeto, se o autor quiser mais detalhe depois, dá pra configurar
  via trigger nativo "Scroll Depth" direto no console do GTM — zero código novo.

## Passo a passo — conta/propriedade (fora do código, feito pelo autor no console do Google)

1. **GA4**: analytics.google.com → Admin → Criar conta → Criar propriedade → fluxo de dados Web
   com a URL do site → gera o Measurement ID (`G-XXXXXXXXXX`).
2. **GTM**: tagmanager.google.com → Criar conta → Criar container (Web) → gera o Container ID
   (`GTM-XXXXXXX`) — substitui o placeholder no `index.html`.
3. **Tag de configuração GA4 dentro do GTM**: Tags → Nova → "Google Analytics: Configuração do
   GA4" → cola o Measurement ID do passo 1 → trigger "All Pages".
4. **1 tag "Evento GA4" por evento custom da tabela acima** (`project_gallery_open`,
   `contact_click`, `cv_print_click`, e também `select_content` apesar de "recomendado" — ainda
   precisa de tag+trigger dentro do GTM pra virar hit de GA4), cada uma com trigger de "Evento
   personalizado" batendo o nome que o `pushEvent` manda.
5. **Link GA4 → BigQuery**: GA4 Admin → "Links do BigQuery" → vincular a um projeto GCP →
   exportação diária (gratuita, suficiente pro volume de um portfólio pessoal) — prepara o
   terreno pra ferramenta de visualização futura, sem custo extra agora.
6. **Publicar** o container GTM só depois que as tags/triggers acima estiverem configuradas —
   até lá, dá pra testar tudo em modo Preview sem afetar dado real.

## Tarefas desta rodada

- [x] `src/lib/analytics.ts` — helper `pushEvent(event, params)`, puro `dataLayer`, sem lib externa
- [x] Instrumentados os 4 pontos da tabela (`AIDevelopment.tsx`, `ProjectPage.tsx` — capa e
      galeria —, `Contact.tsx`, `Header.tsx`, `CvPage.tsx`)
- [x] Snippet do GTM no `index.html` (`<script>` em `<head>` + `<noscript>` em `<body>`), com o
      Container ID real `GTM-WFGD5HGP`
- [x] `tsc --noEmit` e `npm run build` limpos
- [x] **Ação do autor**: criar a conta GA4 (Measurement ID `G-NFTH0GYHQQ`) + o container GTM real
      (`GTM-WFGD5HGP`)
- [ ] **Ação do autor**: configurar as tags/triggers dentro do GTM (passos 3–4 acima) e publicar
- [ ] **Ação do autor**: vincular GA4 ao BigQuery (passo 5 acima)
- [ ] Verificar os 4 eventos reais no GTM Preview / GA4 DebugView depois que o container for
      publicado com o ID real — não dá pra verificar isso agora sem um container de verdade
