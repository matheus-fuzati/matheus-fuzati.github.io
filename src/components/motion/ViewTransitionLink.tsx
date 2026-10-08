import { Link, useNavigate, type LinkProps } from "react-router-dom";
import type { MouseEvent } from "react";

/**
 * Link do React Router que dispara `document.startViewTransition` quando o
 * navegador suporta e `prefers-reduced-motion` não está ativo. Nos outros
 * casos, cai pro comportamento normal do `<Link>` — sem erro, sem animação.
 */
export default function ViewTransitionLink({ to, onClick, children, ...rest }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsViewTransition = typeof document.startViewTransition === "function";

    if (supportsViewTransition && !prefersReduced) {
      e.preventDefault();
      document.startViewTransition(() => {
        navigate(to as string);
      });
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
