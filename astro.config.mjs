import { defineConfig } from "astro/config";

// Site de usuário: publica na raiz de fuzatimatheus.github.io
export default defineConfig({
  site: "https://fuzatimatheus.github.io",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
