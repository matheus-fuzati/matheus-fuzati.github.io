import type { RouteRecord } from "vite-react-ssg";

// `lazy` (convenção nativa do React Router) garante chunk separado por rota —
// crítico pra /cv e /en/cv nunca carregarem o bundle de Lenis/GSAP/R3F que só
// a Home usa (ver specs/03-tech-spec.md, isolamento da stack pesada).
export const routes: RouteRecord[] = [
  { path: "/", lazy: () => import("./HomePage") },
  { path: "/en", lazy: () => import("./HomePage") },
  { path: "/cv", lazy: () => import("./CvPage") },
  { path: "/en/cv", lazy: () => import("./CvPage") },
];
