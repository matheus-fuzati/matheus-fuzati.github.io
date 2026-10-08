import { useLocation } from "react-router-dom";
import { content } from "./content";
import { localeFromPath, type Locale } from "../i18n/paths";

export function useLocale(): Locale {
  const { pathname } = useLocation();
  return localeFromPath(pathname);
}

export function useContent() {
  return content[useLocale()];
}
