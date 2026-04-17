"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  mode?: "once" | "toggle";
  threshold?: number;
  rootMargin?: string;
};

export function Reveal({
  children,
  className,
  delayMs = 0,
  mode = "once",
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (mode === "toggle") {
          setVisible(entry.isIntersecting);
          return;
        }

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mode, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className ?? ""}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
