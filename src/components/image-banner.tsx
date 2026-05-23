"use client";

import { useEffect, useRef } from "react";

import { MediaSlot } from "@/components/media-slot";

type ImageBannerProps = {
  mediaUrl: string | null;
  mediaType?: "image" | "video" | null;
  title?: string;
  eyebrow?: string;
  label?: string;
  /** Intensidad del parallax (0 = sin movimiento). */
  strength?: number;
};

/**
 * Banda de imagen full-bleed con parallax al hacer scroll (estilo Darling .image-banner).
 * Calcula el desplazamiento desde la posicion del elemento en el viewport.
 * Respeta prefers-reduced-motion (sin parallax).
 */
export function ImageBanner({
  mediaUrl,
  mediaType,
  title,
  eyebrow,
  label = "Image banner",
  strength = 0.12,
}: ImageBannerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    const media = mediaRef.current;
    if (!el || !media) return;

    let frame = 0;
    let visible = false;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2);
      const offset = -progress * rect.height * strength;
      media.style.setProperty("--parallax", offset.toFixed(2));
    };

    const onScroll = () => {
      if (!visible) return;
      if (!frame) frame = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) onScroll();
      },
      { threshold: 0 },
    );
    io.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [strength]);

  const hasOverlay = Boolean(title || eyebrow);

  return (
    <section className="image-banner" ref={ref} aria-label={title ?? label}>
      <div className="image-banner-media" ref={mediaRef}>
        <MediaSlot label={label} mediaUrl={mediaUrl} mediaType={mediaType ?? undefined} />
      </div>
      {hasOverlay ? (
        <div className="image-banner-overlay">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          {title ? <h2 className="image-banner-title">{title}</h2> : null}
        </div>
      ) : null}
    </section>
  );
}
