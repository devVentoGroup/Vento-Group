"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { HeroMediaCarousel } from "@/components/hero-media-carousel";
import type { HeroSlide } from "@/lib/content";

type HomeHeroIntroProps = {
  slides: HeroSlide[];
  venues: Array<{ title: string; href: string }>;
};

export function HomeHeroIntro({ slides, venues }: HomeHeroIntroProps) {
  const [phase, setPhase] = useState<"intro" | "links" | "complete">("intro");

  useEffect(() => {
    document.body.classList.add("home-intro-active");

    const linksTimer = window.setTimeout(() => {
      setPhase("links");
    }, 1800);

    const completeTimer = window.setTimeout(() => {
      setPhase("complete");
      document.body.classList.add("home-intro-complete");
    }, 3200);

    return () => {
      window.clearTimeout(linksTimer);
      window.clearTimeout(completeTimer);
      document.body.classList.remove("home-intro-active");
      document.body.classList.remove("home-intro-complete");
    };
  }, []);

  return (
    <section className="darling-hero" aria-label="Vento Group hero">
      <HeroMediaCarousel slides={slides} variant="immersive" />
      <div className="darling-hero-overlay" aria-hidden="true" />

      <div
        className={`darling-splash ${phase !== "intro" ? "darling-splash-softened" : ""} ${phase === "complete" ? "darling-splash-hidden" : ""}`}
        aria-hidden={phase === "complete"}
      >
        <div className="darling-splash-inner">
          <div className="darling-splash-title" aria-hidden="true">
            <span className="darling-splash-title-top">VENTO</span>
            <span className="darling-splash-title-bottom">GROUP</span>
          </div>

          <div className={`darling-splash-links ${phase === "links" ? "darling-splash-links-visible" : ""}`}>
            {venues.map((venue) => (
              <Link key={venue.href} href={venue.href}>
                {venue.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="darling-hero-shell" />
    </section>
  );
}
