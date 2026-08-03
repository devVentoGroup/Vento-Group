"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { HeroMediaCarousel } from "@/components/hero-media-carousel";
import type { HeroSlide } from "@/lib/content";

import styles from "./home-hero-intro.module.css";

type HomeHeroIntroProps = {
  slides: HeroSlide[];
  venues: Array<{ title: string; href: string }>;
};

type SplashPhase = "intro" | "venues" | "exit" | "complete";

export function HomeHeroIntro({ slides, venues }: HomeHeroIntroProps) {
  const [phase, setPhase] = useState<SplashPhase>("intro");

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("home-intro-active");
    document.body.classList.remove("home-intro-complete");

    if (reducedMotion) {
      setPhase("complete");
      document.body.classList.add("home-intro-complete");
      return () => {
        document.body.classList.remove("home-intro-active");
        document.body.classList.remove("home-intro-complete");
      };
    }

    const venuesTimer = window.setTimeout(() => setPhase("venues"), 1780);
    const exitTimer = window.setTimeout(() => setPhase("exit"), 5000);
    const completeTimer = window.setTimeout(() => {
      setPhase("complete");
      document.body.classList.add("home-intro-complete");
    }, 5800);

    return () => {
      window.clearTimeout(venuesTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
      document.body.classList.remove("home-intro-active");
      document.body.classList.remove("home-intro-complete");
    };
  }, []);

  const splashClass = [
    styles.splash,
    phase === "venues" ? styles.venuesPhase : "",
    phase === "exit" ? styles.exitPhase : "",
    phase === "complete" ? styles.complete : "",
  ]
    .filter(Boolean)
    .join(" ");

  const linksEnabled = phase === "venues";

  return (
    <section className="darling-hero" aria-label="Vento Group hero" data-header-theme="dark">
      <HeroMediaCarousel slides={slides} variant="immersive" />
      <div className="darling-hero-overlay" aria-hidden="true" />

      <div className={splashClass} aria-hidden={phase === "complete" || phase === "exit"}>
        <div className={styles.stage}>
          <h1 className={styles.srOnly}>Vento Group</h1>

          <div className={styles.logoMark}>
            <div className={styles.logoArtwork} aria-hidden="true">
              <div className={`${styles.logoHalf} ${styles.logoTop}`}>
                <img src="/branding/vento-wordmark-white.svg" alt="" draggable={false} />
              </div>
              <div className={`${styles.logoHalf} ${styles.logoBottom}`}>
                <img src="/branding/vento-wordmark-white.svg" alt="" draggable={false} />
              </div>
            </div>

            <nav className={styles.links} aria-label="Restaurantes destacados">
              {venues.slice(0, 11).map((venue) => (
                <Link key={venue.href} href={venue.href} tabIndex={linksEnabled ? 0 : -1}>
                  {venue.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="darling-hero-shell" />
    </section>
  );
}
