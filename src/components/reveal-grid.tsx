"use client";

import { useEffect, useRef, useState } from "react";

type RevealGridProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Contenedor que revela a sus hijos en cascada (stagger) al entrar en viewport.
 * Los delays incrementales viven en globals.css (.reveal-grid.is-in > *:nth-child).
 * Respeta prefers-reduced-motion (muestra todo de inmediato).
 */
export function RevealGrid({
  children,
  className,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: RevealGridProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={`reveal-grid ${inView ? "is-in" : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
