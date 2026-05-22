"use client";

import { useEffect } from "react";

/**
 * Scroll suave global (estilo Darling Group) con Lenis.
 * - Respeta prefers-reduced-motion (no se activa si el usuario lo pide).
 * - Se desactiva en pantallas tactiles finas si el navegador prefiere scroll nativo.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let cancelled = false;

    // Import dinamico para no bloquear el render inicial.
    import("lenis")
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      })
      .catch(() => {
        // Si Lenis no esta instalado todavia, el sitio sigue funcionando con scroll nativo.
      });

    return () => {
      cancelled = true;
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
