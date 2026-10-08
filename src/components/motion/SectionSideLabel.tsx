interface Props {
  text: string;
}

/** Nome da seção na lateral esquerda, uma letra embaixo da outra (vertical-rl + upright). */
export default function SectionSideLabel({ text }: Props) {
  return (
    <span className="section-side-label" aria-hidden="true">
      {text}
    </span>
  );
}
