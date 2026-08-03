"use client";

import { useMemo, useState, type KeyboardEvent } from "react";

import styles from "./service-portfolio.module.css";

export type ServicePortfolioItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  availability: string | null;
  modality: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  actionLabel: string | null;
  actionUrl: string | null;
};

type ServicePortfolioProps = {
  items: ServicePortfolioItem[];
};

function parseBody(body: string | null) {
  const lines = (body ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const points = lines
    .filter((line) => /^[-*•]\s+/.test(line))
    .map((line) => line.replace(/^[-*•]\s+/, "").trim())
    .filter(Boolean);

  const description = lines
    .filter((line) => !/^[-*•]\s+/.test(line))
    .join(" ");

  return { description, points };
}

function serviceHref(item: ServicePortfolioItem) {
  if (item.actionUrl && item.actionUrl !== "#") return item.actionUrl;

  const subject = `Consulta sobre ${item.title}`;
  const body = [
    `Hola, quiero conocer más sobre el servicio ${item.title}.`,
    item.availability ? `Disponibilidad indicada: ${item.availability}.` : null,
    item.modality ? `Modalidad indicada: ${item.modality}.` : null,
    "Quisiera revisar si aplica para mi necesidad.",
  ]
    .filter(Boolean)
    .join("\n\n");

  return `mailto:hola@ventogroup.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ServicePortfolio({ items }: ServicePortfolioProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? null;
  const activeBody = useMemo(() => parseBody(activeItem?.body ?? null), [activeItem]);

  const move = (direction: -1 | 1) => {
    if (items.length === 0) return;
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }

    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <span>Portafolio público</span>
        <h3>No hay servicios publicados en este momento.</h3>
        <p>
          La página solo muestra servicios activados desde VISO. Para una consulta general, puedes comunicarte con el
          equipo de Vento Group.
        </p>
        <a href="mailto:hola@ventogroup.co?subject=Consulta%20general%20de%20servicios">Contactar al equipo</a>
      </div>
    );
  }

  return (
    <div className={styles.portfolio} onKeyDown={handleKeyDown}>
      <div className={styles.selector} role="tablist" aria-label="Servicios publicados">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.id}
              id={`service-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`service-panel-${item.id}`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`.trim()}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              <span className={styles.tabNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.tabText}>
                <strong>{item.title}</strong>
                <span>{item.excerpt ?? "Conoce el alcance publicado de este servicio."}</span>
              </span>
              <span className={styles.tabArrow} aria-hidden="true">
                →
              </span>
            </button>
          );
        })}
      </div>

      {activeItem ? (
        <article
          id={`service-panel-${activeItem.id}`}
          className={styles.panel}
          role="tabpanel"
          aria-labelledby={`service-tab-${activeItem.id}`}
          key={activeItem.id}
        >
          <div className={styles.media}>
            {activeItem.videoUrl ? (
              <video src={activeItem.videoUrl} autoPlay muted loop playsInline preload="metadata" />
            ) : activeItem.imageUrl ? (
              <img src={activeItem.imageUrl} alt={`Servicio ${activeItem.title}`} />
            ) : (
              <div className={styles.mediaFallback} aria-hidden="true">
                <span>Vento Group</span>
                <strong>{activeItem.title}</strong>
              </div>
            )}
          </div>

          <div className={styles.content}>
            <div className={styles.contentHead}>
              <span className={styles.eyebrow}>Servicio publicado</span>
              <h3>{activeItem.title}</h3>
            </div>

            <dl className={styles.meta}>
              <div>
                <dt>Disponibilidad</dt>
                <dd>{activeItem.availability ?? "Consultar"}</dd>
              </div>
              <div>
                <dt>Modalidad</dt>
                <dd>{activeItem.modality ?? "Por definir con el equipo"}</dd>
              </div>
            </dl>

            <p className={styles.description}>
              {activeBody.description || activeItem.excerpt || "Consulta con el equipo para conocer el alcance."}
            </p>

            {activeBody.points.length > 0 ? (
              <div className={styles.scope}>
                <span>Alcance publicado</span>
                <ul>
                  {activeBody.points.slice(0, 6).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <a className={styles.action} href={serviceHref(activeItem)}>
              {activeItem.actionLabel ?? "Consultar servicio"}
            </a>
          </div>
        </article>
      ) : null}

      <div className={styles.controls} aria-label="Navegar servicios">
        <button type="button" onClick={() => move(-1)} aria-label="Servicio anterior">
          ←
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => move(1)} aria-label="Servicio siguiente">
          →
        </button>
      </div>
    </div>
  );
}
