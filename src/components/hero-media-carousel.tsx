"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import type { HeroSlide } from "@/lib/content";

type HeroMediaCarouselProps = {
  slides: HeroSlide[];
};

function inferMediaType(mediaUrl: string | null): "image" | "video" {
  if (!mediaUrl) return "image";
  const lowered = mediaUrl.toLowerCase();
  if (
    lowered.endsWith(".mp4") ||
    lowered.endsWith(".webm") ||
    lowered.endsWith(".mov") ||
    lowered.includes("/video/")
  ) {
    return "video";
  }
  return "image";
}

export function HeroMediaCarousel({ slides }: HeroMediaCarouselProps) {
  const orderedSlides = useMemo(
    () => [...slides].sort((a, b) => a.sortOrder - b.sortOrder),
    [slides],
  );
  const safeSlides = orderedSlides.length > 0 ? orderedSlides : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set([0, 1]));
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pointerDownRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragDeltaXRef = useRef(0);
  const dragDeltaYRef = useRef(0);
  const DRAG_THRESHOLD = 48;

  useEffect(() => {
    setActiveIndex(0);
  }, [safeSlides.length]);

  useEffect(() => {
    if (safeSlides.length === 0) return;
    setLoadedIndices((prev) => {
      const next = new Set(prev);
      next.add(activeIndex);
      next.add((activeIndex + 1) % safeSlides.length);
      next.add((activeIndex - 1 + safeSlides.length) % safeSlides.length);
      return next;
    });
  }, [activeIndex, safeSlides.length]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsPaused(document.visibilityState !== "visible");
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    if (isPaused || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, [safeSlides.length, isPaused, reducedMotion]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion) return;

    const move = (event: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty("--parallax-x", String(x * 16));
      stage.style.setProperty("--parallax-y", String(y * 16));
    };

    const reset = () => {
      stage.style.setProperty("--parallax-x", "0");
      stage.style.setProperty("--parallax-y", "0");
    };

    stage.addEventListener("mousemove", move);
    stage.addEventListener("mouseleave", reset);

    return () => {
      stage.removeEventListener("mousemove", move);
      stage.removeEventListener("mouseleave", reset);
    };
  }, [reducedMotion]);

  const goPrev = () => {
    if (safeSlides.length <= 1) return;
    setActiveIndex((current) => (current - 1 + safeSlides.length) % safeSlides.length);
  };

  const goNext = () => {
    if (safeSlides.length <= 1) return;
    setActiveIndex((current) => (current + 1) % safeSlides.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (safeSlides.length <= 1) return;
    pointerDownRef.current = true;
    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    dragDeltaXRef.current = 0;
    dragDeltaYRef.current = 0;
    setIsDragging(true);
    setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current || pointerIdRef.current !== event.pointerId) return;
    const stage = stageRef.current;
    if (!stage) return;
    const dx = event.clientX - dragStartXRef.current;
    const dy = event.clientY - dragStartYRef.current;
    dragDeltaXRef.current = dx;
    dragDeltaYRef.current = dy;

    if (Math.abs(dx) > Math.abs(dy)) {
      stage.style.setProperty("--drag-x", `${dx}px`);
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current || pointerIdRef.current !== event.pointerId) return;
    pointerDownRef.current = false;
    pointerIdRef.current = null;
    setIsDragging(false);
    setIsPaused(false);

    const stage = stageRef.current;
    if (stage) {
      stage.style.setProperty("--drag-x", "0px");
    }

    const dx = dragDeltaXRef.current;
    const dy = dragDeltaYRef.current;
    if (Math.abs(dx) >= DRAG_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        goPrev();
      } else {
        goNext();
      }
    }

    dragDeltaXRef.current = 0;
    dragDeltaYRef.current = 0;
  };

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div
        ref={stageRef}
        className={`hero-carousel-stage ${isDragging ? "dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {safeSlides.map((slide, index) => {
          const mediaType = slide.mediaType ?? inferMediaType(slide.mediaUrl);
          const isActive = index === activeIndex;
          const shouldLoad = loadedIndices.has(index) || isActive;
          return (
            <article key={slide.id} className={`hero-slide ${isActive ? "hero-slide-active" : ""}`}>
              {slide.mediaUrl ? (
                mediaType === "video" ? (
                  <video
                    className="hero-slide-media"
                    src={shouldLoad ? slide.mediaUrl : undefined}
                    autoPlay={isActive}
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload={isActive ? "auto" : "metadata"}
                  />
                ) : (
                  <img
                    className="hero-slide-media"
                    src={shouldLoad ? slide.mediaUrl : undefined}
                    alt={slide.title ?? "Slide"}
                    loading={isActive ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={isActive ? "high" : "auto"}
                  />
                )
              ) : (
                <div className="placeholder">Hero slide · media pendiente</div>
              )}

              <div className="hero-slide-overlay">
                <h3 className="hero-slide-title">{slide.title ?? "Slide"}</h3>
                {slide.subtitle ? <p className="hero-slide-copy">{slide.subtitle}</p> : null}
                {slide.ctaLabel && slide.ctaUrl ? (
                  <Link className="hero-slide-cta" href={slide.ctaUrl}>
                    {slide.ctaLabel}
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      <div className="hero-carousel-progress-wrap" aria-hidden="true">
        <div
          className={`hero-carousel-progress ${isPaused || reducedMotion ? "hero-carousel-progress-paused" : ""}`}
          key={`${activeIndex}-${isPaused}-${reducedMotion}`}
        />
      </div>

      <div className="hero-carousel-controls">
        <button type="button" className="hero-carousel-btn" onClick={goPrev} aria-label="Slide anterior">
          Prev
        </button>
        <div className="hero-carousel-dots" aria-label="Indicadores de slides">
          {safeSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.id}
              className={`hero-carousel-dot ${index === activeIndex ? "hero-carousel-dot-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
        <button type="button" className="hero-carousel-btn" onClick={goNext} aria-label="Slide siguiente">
          Next
        </button>
      </div>
    </div>
  );
}
