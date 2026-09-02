import { defineConfig } from "astro/config";

// Site de usuário: publica na raiz de matheus-fuzati.github.io
export default defineConfig({
  site: "https://matheus-fuzati.github.io",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
