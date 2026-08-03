"use client";

import Link from "next/link";
import { type CSSProperties, useEffect, useMemo, useState } from "react";

import styles from "./home-venue-experience.module.css";

export type HomeVenueExperienceItem = {
  id: string;
  title: string;
  href: string;
  excerpt: string | null;
  body: string | null;
  location: string | null;
  schedule: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  actionLabel: string | null;
};

type HomeVenueExperienceProps = {
  items: HomeVenueExperienceItem[];
};

const VENUE_TONES = ["#34352f", "#40312c", "#29343a", "#3b342b", "#2f3530", "#382f37"];

function getFeatures(item: HomeVenueExperienceItem): string[] {
  const source = item.body ?? item.excerpt ?? "";
  return source
    .split(/\n|[.;](?:\s|$)/g)
    .map((entry) => entry.trim().replace(/[,:]+$/, ""))
    .filter((entry) => entry.length >= 4 && entry.length <= 64)
    .slice(0, 3);
}

export function HomeVenueExperience({ items }: HomeVenueExperienceProps) {
  const venues = useMemo(() => items.filter((item) => item.title.trim().length > 0), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [venues.length]);

  useEffect(() => {
    venues.forEach((venue) => {
      if (!venue.imageUrl) return;
      const image = new Image();
      image.src = venue.imageUrl;
    });
  }, [venues]);

  if (venues.length === 0) return null;

  const activeVenue = venues[Math.min(activeIndex, venues.length - 1)];
  const features = getFeatures(activeVenue);
  const style = {
    "--venue-background": VENUE_TONES[activeIndex % VENUE_TONES.length],
  } as CSSProperties;

  const setRelativeVenue = (offset: number) => {
    setActiveIndex((current) => (current + offset + venues.length) % venues.length);
  };

  const onSelectorKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    setRelativeVenue(event.key === "ArrowDown" ? 1 : -1);
  };

  return (
    <section className={styles.experience} data-header-theme="dark" style={style}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Nuestros restaurantes</span>
            <h2>Una identidad para cada momento.</h2>
          </div>
          <p>
            Cada restaurante tiene una voz propia. Cambian la cocina, la atmósfera y la ocasión; permanece una misma forma
            de recibir.
          </p>
        </header>

        <div className={styles.stage}>
          <div
            className={styles.selector}
            role="tablist"
            aria-label="Seleccionar restaurante"
            onKeyDown={onSelectorKeyDown}
          >
            {venues.map((venue, index) => (
              <button
                key={venue.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="home-venue-panel"
                className={`${styles.venueButton} ${index === activeIndex ? styles.venueButtonActive : ""}`.trim()}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{venue.title}</strong>
              </button>
            ))}
          </div>

          <div className={styles.panel} id="home-venue-panel" role="tabpanel" aria-live="polite">
            <div className={styles.mediaFrame} key={`${activeVenue.id}-${activeIndex}`}>
              {activeVenue.videoUrl ? (
                <video src={activeVenue.videoUrl} autoPlay muted loop playsInline preload="metadata" />
              ) : activeVenue.imageUrl ? (
                <img src={activeVenue.imageUrl} alt={`Ambiente de ${activeVenue.title}`} />
              ) : (
                <div className={styles.mediaFallback}>
                  <span>Vento Group</span>
                  <strong>{activeVenue.title}</strong>
                </div>
              )}
            </div>

            <article className={styles.detail}>
              <div className={styles.detailTopline}>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} / {String(venues.length).padStart(2, "0")}
                </span>
                <div className={styles.controls}>
                  <button type="button" onClick={() => setRelativeVenue(-1)} aria-label="Restaurante anterior">
                    ←
                  </button>
                  <button type="button" onClick={() => setRelativeVenue(1)} aria-label="Restaurante siguiente">
                    →
                  </button>
                </div>
              </div>

              <h3>{activeVenue.title}</h3>
              <p className={styles.description}>
                {activeVenue.body ?? activeVenue.excerpt ?? "Una experiencia gastronómica con identidad propia."}
              </p>

              <dl className={styles.meta}>
                <div>
                  <dt>Ubicación</dt>
                  <dd>{activeVenue.location ?? "Cúcuta, Colombia"}</dd>
                </div>
                <div>
                  <dt>Horario</dt>
                  <dd>{activeVenue.schedule ?? "Consultar disponibilidad"}</dd>
                </div>
              </dl>

              {features.length > 0 ? (
                <ul className={styles.features} aria-label="Aspectos destacados">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : null}

              <Link className={styles.link} href={activeVenue.href}>
                {activeVenue.actionLabel ?? "Explorar restaurante"}
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
