import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Site de usuário GH Pages (matheus-fuzati.github.io) — serve da raiz, diferente
// de um project page que precisaria de base: '/repo/'.
export default defineConfig({
  base: "/",
  plugins: [react()],
  ssgOptions: {
    // /cv -> dist/cv/index.html (mantém as URLs com barra final de hoje)
    dirStyle: "nested",
    // vite-react-ssg injeta modulepreload pra todo import() estaticamente
    // alcançável do módulo da rota, mesmo quando o import só roda sob um
    // gate em runtime (useWebglSupport + reduced-motion, ver Hero.tsx) —
    // sem isso, o chunk do hero 3D (~900KB) baixaria em toda visita, não
    // só de quem de fato roda o WebGL.
    onPageRendered: (_route, html) =>
      html.replace(/<link rel="modulepreload"[^>]*href="[^"]*HeroScene[^"]*"[^>]*>/g, ""),
  },
});
