import { stackIcons, type StackIconKind } from "../icons/StackIcons";

// Nomes de tecnologia são iguais nos dois idiomas — lista única, sem i18n.
const STACK: [string, StackIconKind][] = [
  ["Python", "db"],
  ["SQL", "db"],
  ["BigQuery", "db"],
  ["Dataform", "db"],
  ["AWS Glue", "db"],
  ["Athena", "db"],
  ["Airflow", "db"],
  ["Databricks", "db"],
  ["GCP", "cloud"],
  ["AWS", "cloud"],
  ["Azure", "cloud"],
  ["Terraform", "cloud"],
  ["Docker", "cloud"],
  ["GitHub Actions", "cloud"],
  ["Claude Code", "spark"],
  ["Spec-Driven Development", "spark"],
  ["FastAPI", "code"],
  ["React", "code"],
  ["Next.js", "code"],
  ["Selenium", "bolt"],
];

/**
 * Carrossel infinito (CSS puro) de ícone + nome — sem chapa/fundo, pedido
 * do autor. Sob prefers-reduced-motion a animação para (ver global.css),
 * a lista continua legível e acessível (não depende do scroll pra ler).
 */
export default function StackCarousel() {
  const items = STACK.map(([name, kind]) => {
    const Icon = stackIcons[kind];
    return (
      <span className="stack-chip" key={name}>
        <Icon />
        <span>{name}</span>
      </span>
    );
  });

  return (
    <div className="stack-carousel" aria-hidden="true">
      <div className="stack-carousel-track">
        {items}
        {items}
      </div>
    </div>
  );
}
