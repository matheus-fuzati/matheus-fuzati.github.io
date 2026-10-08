export type Locale = "pt" | "en";

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

/** Maps any of the 4 known routes (/, /en, /cv, /en/cv) to its equivalent in `target`. */
export function localizePath(pathname: string, target: Locale): string {
  const isCv = pathname === "/cv" || pathname === "/en/cv";
  if (target === "en") return isCv ? "/en/cv" : "/en";
  return isCv ? "/cv" : "/";
}
