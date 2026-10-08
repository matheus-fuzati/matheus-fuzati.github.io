import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function readDomTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/**
 * Lê o tema já aplicado pelo script inline do `index.html` (que roda
 * antes do React montar, pra não piscar o tema errado) e expõe um
 * toggle que também grava em localStorage.
 */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(readDomTheme);

  useEffect(() => {
    setTheme(readDomTheme());
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // storage indisponível (modo privado etc.) — tema some ao recarregar, sem quebrar nada
      }
      return next;
    });
  }, []);

  return [theme, toggle];
}
