"use client";

import { useMemo, useState, type KeyboardEvent } from "react";

import styles from "./ecosystem-products.module.css";

export type EcosystemProductItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  platform: string | null;
  status: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  actionLabel: string | null;
  actionUrl: string | null;
};

type EcosystemProductsProps = {
  items: EcosystemProductItem[];
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

  return {
    description: lines.filter((line) => !/^[-*•]\s+/.test(line)).join(" "),
    points,
  };
}

function productLayer(slug: string) {
  if (slug === "vento-pass") return "Experiencia del cliente";
  if (slug === "vento-anima") return "Experiencia del equipo";
  if (slug === "vento-os") return "Operación";
  return "Producto digital";
}

function hasPublicAction(url: string | null) {
  return Boolean(url && url.trim() && url !== "#");
}

export function EcosystemProducts({ items }: EcosystemProductsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] ?? null;
  const activeBody = useMemo(() => parseBody(activeItem?.body ?? null), [activeItem]);

  const move = (direction: -1 | 1) => {
    if (items.length === 0) return;
    setActiveIndex((current) => (current + direction + items.length) % items.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      move(1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      move(-1);
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <span>Productos publicados</span>
        <h3>No hay productos visibles en este momento.</h3>
        <p>Esta sección se alimenta exclusivamente de los productos activados desde VISO Web Studio.</p>
      </div>
    );
  }

  return (
    <div className={styles.explorer} onKeyDown={handleKeyDown}>
      <div className={styles.navigation} role="tablist" aria-label="Productos del ecosistema">
        {items.map((item, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={item.id}
              id={`ecosystem-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`ecosystem-panel-${item.id}`}
              className={`${styles.tab} ${active ? styles.tabActive : ""}`.trim()}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <span className={styles.tabNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.tabCopy}>
                <small>{productLayer(item.slug)}</small>
                <strong>{item.title}</strong>
                <span>{item.excerpt ?? "Producto publicado dentro del ecosistema Vento."}</span>
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
          key={activeItem.id}
          id={`ecosystem-panel-${activeItem.id}`}
          className={styles.panel}
          role="tabpanel"
          aria-labelledby={`ecosystem-tab-${activeItem.id}`}
        >
          <div className={styles.media}>
            {activeItem.videoUrl ? (
              <video src={activeItem.videoUrl} autoPlay muted loop playsInline preload="metadata" />
            ) : activeItem.imageUrl ? (
              <img src={activeItem.imageUrl} alt={`Producto ${activeItem.title}`} />
            ) : (
              <div className={styles.mediaFallback} aria-hidden="true">
                <span>{productLayer(activeItem.slug)}</span>
                <strong>{activeItem.title}</strong>
              </div>
            )}
          </div>

          <div className={styles.panelContent}>
            <span className={styles.eyebrow}>{productLayer(activeItem.slug)}</span>
            <h3>{activeItem.title}</h3>

            {(activeItem.platform || activeItem.status) && (
              <dl className={styles.meta}>
                {activeItem.platform ? (
                  <div>
                    <dt>Plataforma</dt>
                    <dd>{activeItem.platform}</dd>
                  </div>
                ) : null}
                {activeItem.status ? (
                  <div>
                    <dt>Estado publicado</dt>
                    <dd>{activeItem.status}</dd>
                  </div>
                ) : null}
              </dl>
            )}

            <p className={styles.description}>
              {activeBody.description || activeItem.excerpt || "Información administrada desde VISO Web Studio."}
            </p>

            {activeBody.points.length > 0 ? (
              <ul className={styles.points}>
                {activeBody.points.slice(0, 6).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}

            {hasPublicAction(activeItem.actionUrl) ? (
              <a className={styles.action} href={activeItem.actionUrl ?? undefined}>
                {activeItem.actionLabel ?? "Conocer producto"}
              </a>
            ) : (
              <p className={styles.noAction}>VISO no tiene un enlace público configurado para este producto.</p>
            )}
          </div>
        </article>
      ) : null}

      <div className={styles.controls} aria-label="Navegar productos">
        <button type="button" onClick={() => move(-1)} aria-label="Producto anterior">
          ←
        </button>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => move(1)} aria-label="Producto siguiente">
          →
        </button>
      </div>
    </div>
  );
}
