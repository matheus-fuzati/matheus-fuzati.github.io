declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Empurra um evento pro dataLayer do GTM — sem SDK/lib de analytics no
 * bundle (ver specs/05-analytics-spec.md). `window.dataLayer` já existe
 * graças ao snippet do GTM no index.html; o `|| []` aqui é só defesa caso
 * o GTM não tenha carregado ainda (ad-blocker, offline) — nunca lança erro.
 */
export function pushEvent(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
