"use client";

import { useRef } from "react";

import { ItemCard } from "@/components/item-card";
import type { WebsiteItem } from "@/lib/content";

type ItemCarouselProps = {
  items: WebsiteItem[];
  mediaPrefix: string;
};

export function ItemCarousel({ items, mediaPrefix }: ItemCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByPage = (direction: "next" | "prev") => {
    const node = trackRef.current;
    if (!node) return;
    const distance = Math.max(node.clientWidth * 0.86, 260);
    node.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  return (
    <div className="rail-wrap">
      <div className="rail-controls">
        <button type="button" className="rail-btn" onClick={() => scrollByPage("prev")} aria-label="Anterior">
          Prev
        </button>
        <button type="button" className="rail-btn" onClick={() => scrollByPage("next")} aria-label="Siguiente">
          Next
        </button>
      </div>

      <div ref={trackRef} className="rail-track" aria-label={`${mediaPrefix} carousel`}>
        {items.map((item) => (
          <div key={item.id} className="rail-slide">
            <ItemCard item={item} mediaLabel={`${mediaPrefix} ${item.title}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
