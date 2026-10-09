import { useEffect } from "react";

interface Props {
  src: string | null;
  alt: string;
  onClose: () => void;
}

/**
 * Overlay simples pra ver a imagem (capa/galeria de projeto) em tamanho
 * grande — Esc ou clique fora fecha. Sem lib externa.
 */
export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    if (!src) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Fechar">
        ×
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
