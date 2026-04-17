"use client";

import { useEffect, useMemo, useState } from "react";

import { MediaSlot } from "@/components/media-slot";
import { getItemHref, type WebsiteItem } from "@/lib/content";

type HomeVenuesShowcaseProps = {
  items: WebsiteItem[];
};

function getFeatures(item: WebsiteItem): string[] {
  const source = item.body ?? item.excerpt ?? "";
  const lines = source
    .split(/\n|\. /g)
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (lines.length >= 3) {
    return lines.slice(0, 4).map((entry) => entry.replace(/[.,;:]+$/, ""));
  }

  return [
    "Comedor privado",
    "Eventos corporativos",
    "Celebraciones",
    "Experiencias de Marca",
  ];
}

export function HomeVenuesShowcase({ items }: HomeVenuesShowcaseProps) {
  const safeItems = useMemo(() => (items.length > 0 ? items : []), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [safeItems.length]);

  if (safeItems.length === 0) {
    return null;
  }

  const current = safeItems[activeIndex] ?? safeItems[0];
  const features = getFeatures(current);
  const href = getItemHref(current);
  const isExternal = /^https?:\/\//i.test(href);
  const goPrev = () => setActiveIndex((currentIndex) => (currentIndex - 1 + safeItems.length) % safeItems.length);
  const goNext = () => setActiveIndex((currentIndex) => (currentIndex + 1) % safeItems.length);

  return (
    <section className="section venues-showcase-section">
      <div className="container venues-showcase-shell">
        <header className="venues-showcase-header">
          <div>
            <div className="eyebrow">Restaurantes</div>
            <h2 className="venues-showcase-heading">Portafolio de hospitalidad</h2>
          </div>
          <div className="venues-showcase-list" role="tablist" aria-label="Seleccion de venues">
            {safeItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`venues-showcase-item ${index === activeIndex ? "venues-showcase-item-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="venues-showcase-panel"
              >
                {item.title}
              </button>
            ))}
          </div>
        </header>

        <div className="venues-showcase-grid" id="venues-showcase-panel">
          <div className="venues-showcase-stage">
            <div className="venues-showcase-media">
              <MediaSlot
                label={`Venue ${current.title}`}
                mediaUrl={current.video_url ?? current.image_url}
                mediaType={current.video_url ? "video" : "image"}
              />
            </div>
          </div>

          <article className="venues-showcase-detail">
            <div className="venues-showcase-detail-top">
              <div className="venues-showcase-carousel-top">
                <button type="button" className="venues-showcase-arrow" onClick={goPrev} aria-label="Venue anterior">
                  Anterior
                </button>
                <div className="venues-showcase-count">
                  <span>{activeIndex + 1}</span>
                  <span>/</span>
                  <span>{safeItems.length}</span>
                </div>
              </div>

              <span className="eyebrow venues-showcase-detail-eyebrow">Restaurantes</span>
              <h3 className="venues-showcase-detail-title">{current.title}</h3>
              <p className="venues-showcase-detail-copy">
                {current.body ??
                  current.excerpt ??
                  "Portfolio de venues para hospitalidad, eventos y experiencias premium."}
              </p>
            </div>

            <div className="venues-showcase-metrics">
              <div className="venues-showcase-metric venues-showcase-metric-features">
                <span>Aspectos destacados</span>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="venues-showcase-meta-row">
                <div className="venues-showcase-metric">
                  <span>Ubicación</span>
                  <strong>{current.location ?? "Bajo consulta"}</strong>
                </div>

                <div className="venues-showcase-metric">
                  <span>Disponibilidad</span>
                  <strong>{current.schedule_text ?? "A solicitud"}</strong>
                </div>
              </div>

              <div className="venues-showcase-detail-actions">
                <a
                  href={href}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                >
                  {current.action_label ?? "Explorar"}
                </a>
                <button type="button" className="venues-showcase-arrow" onClick={goNext} aria-label="Venue siguiente">
                  Siguiente
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
