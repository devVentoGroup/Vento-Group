import type { Metadata } from "next";
import Link from "next/link";

import { CtaBanner } from "@/components/cta-banner";
import { ImageBanner } from "@/components/image-banner";
import { ItemCard } from "@/components/item-card";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { RevealGrid } from "@/components/reveal-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Eventos | Vento Group",
  description: "Agenda de eventos, activaciones y experiencias en Vento Group.",
  alternates: { canonical: "/eventos" },
  openGraph: {
    title: "Eventos | Vento Group",
    description: "Agenda de eventos, activaciones y experiencias en Vento Group.",
    url: "/eventos",
    type: "website",
  },
};

export default async function EventosPage() {
  const [blocks, items] = await Promise.all([
    getPageBlocks("eventos"),
    getItems("event"),
  ]);

  const lead = items[0] ?? null;
  const leadMediaUrl = lead ? (lead.video_url ?? lead.image_url) : null;
  const leadMediaType = lead?.video_url ? "video" : "image";

  const spacesBlock = getBlock(blocks, "eventos_spaces");
  const bannerBlock = getBlock(blocks, "eventos_banner");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eventos",
    description: "Agenda de eventos, activaciones y experiencias en las marcas del grupo.",
    itemListElement: items.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.action_url ?? "/eventos"),
    })),
  };

  return (
    <>
      <StructuredData data={itemListSchema} />
      <SiteHeader />
      <main className="category-main">

        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="category-hero">
          <div className="category-hero-media-wrap" aria-hidden="true">
            <MediaSlot
              label="Eventos lead media"
              mediaUrl={leadMediaUrl}
              mediaType={leadMediaType}
              className="category-hero-media-shell"
            />
          </div>
          <div className="category-hero-shade" aria-hidden="true" />
          <div className="container category-hero-content">
            <div className="category-hero-panel">
              <div className="eyebrow">Vento Group</div>
              <h1 className="hero-title">Eventos</h1>
              <p className="hero-copy">
                Lanzamientos, activaciones y agenda de experiencias en las marcas del grupo.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#agenda">
                  Ver agenda
                </Link>
                <Link
                  className="button button-ghost"
                  href="mailto:eventos@ventogroup.co"
                >
                  Organizar un evento
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Espacios para eventos ──────────────────────────────── */}
        <section className="eventos-spaces-section" aria-label="Espacios para eventos">
          <div className="eventos-spaces-feature">
            <div className="eventos-spaces-media" aria-hidden="true">
              <MediaSlot
                label="Espacios para eventos"
                mediaUrl={spacesBlock?.media_url ?? null}
                mediaType={spacesBlock?.media_type ?? undefined}
              />
            </div>
            <div className="eventos-spaces-shade" aria-hidden="true" />
            <div className="container eventos-spaces-content-wrap">
              <Reveal>
                <div className="eventos-spaces-content">
                  <span className="eyebrow eventos-spaces-eyebrow">Espacios</span>
                  <h2 className="eventos-spaces-title">
                    {spacesBlock?.title ?? "Espacios pensados para momentos inolvidables"}
                  </h2>
                  <p className="eventos-spaces-copy">
                    {spacesBlock?.body ??
                      "Desde cenas privadas hasta grandes corporativos, Vento Group cuenta con venues únicos para cada tipo de celebración. Salones, terrazas y rincones diseñados para que cada evento sea exactamente como lo imaginaste."}
                  </p>
                  <Link
                    className="button button-outline-light"
                    href={spacesBlock?.cta_url ?? "mailto:eventos@ventogroup.co"}
                  >
                    {spacesBlock?.cta_label ?? "Planear mi evento"}
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Image banner ───────────────────────────────────────── */}
        <ImageBanner
          mediaUrl={bannerBlock?.media_url ?? null}
          mediaType={bannerBlock?.media_type ?? null}
          eyebrow={bannerBlock?.subtitle ?? "Vento Group"}
          title={bannerBlock?.title ?? "Momentos que se convierten en memorias"}
        />

        {/* ── Grid de eventos ────────────────────────────────────── */}
        <section className="section category-list-section" id="agenda">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div>
                  <h2 className="section-title">Agenda de eventos</h2>
                  <p className="section-copy">
                    Lanzamientos, activaciones y experiencias próximas en el grupo.
                  </p>
                </div>
              </div>
            </Reveal>
            <RevealGrid className="cards">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  mediaLabel={`Evento ${item.title}`}
                />
              ))}
            </RevealGrid>
          </div>
        </section>

        {/* ── CTA Banner ─────────────────────────────────────────── */}
        <CtaBanner
          title="¿Organizas un evento?"
          copy="Cuéntanos tu visión y nuestro equipo te acompañará desde el concepto hasta el último detalle."
          ctaLabel="Contactar al equipo"
          ctaHref="mailto:eventos@ventogroup.co"
        />

      </main>
      <SiteFooter />
    </>
  );
}
