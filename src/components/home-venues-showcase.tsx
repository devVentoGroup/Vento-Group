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
    "Private Dining",
    "Corporate Events",
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

  useEffect(() => {
    if (safeItems.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeItems.length);
    }, 5400);
    return () => window.clearInterval(timer);
  }, [safeItems.length]);

  if (safeItems.length === 0) {
    return null;
  }

  const current = safeItems[activeIndex] ?? safeItems[0];
  const features = getFeatures(current);
  const href = getItemHref(current);
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <section className="section venues-showcase-section">
      <div className="container venues-showcase-grid">
        <aside className="venues-showcase-nav">
          <div className="eyebrow">Our Venues</div>
          <div className="venues-showcase-list" role="tablist" aria-label="Seleccion de venues">
            {safeItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`venues-showcase-item ${index === activeIndex ? "venues-showcase-item-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                role="tab"
                aria-selected={index === activeIndex}
              >
                {item.title}
              </button>
            ))}
          </div>
        </aside>

        <div className="venues-showcase-stage">
          <div className="venues-showcase-media">
            <MediaSlot
              label={`Venue ${current.title}`}
              mediaUrl={current.video_url ?? current.image_url}
              mediaType={current.video_url ? "video" : "image"}
            />
          </div>

          <article className="venues-showcase-detail">
            <p>{current.excerpt ?? "Portfolio de venues para hospitalidad, eventos y experiencias premium."}</p>

            <div className="venues-showcase-metrics">
              <div>
                <span>Ubicacion</span>
                <strong>{current.location ?? "Por definir"}</strong>
              </div>
              <div>
                <span>Disponibilidad</span>
                <strong>{current.schedule_text ?? "A confirmar"}</strong>
              </div>
              <div>
                <span>Notable Features</span>
                <ul>
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <a href={href} target={isExternal ? "_blank" : "_self"} rel={isExternal ? "noreferrer noopener" : undefined}>
                  {current.action_label ?? "Explore"}
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
