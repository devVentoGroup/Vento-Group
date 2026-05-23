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
  title: "Restaurantes | Vento Group",
  description: "Portafolio de restaurantes y venues del ecosistema Vento Group.",
  alternates: { canonical: "/restaurantes" },
  openGraph: {
    title: "Restaurantes | Vento Group",
    description: "Portafolio de restaurantes y venues del ecosistema Vento Group.",
    url: "/restaurantes",
    type: "website",
  },
};

export default async function RestaurantesPage() {
  const [blocks, items] = await Promise.all([
    getPageBlocks("restaurantes"),
    getItems("restaurant"),
  ]);

  const lead = items[0] ?? null;
  const leadMediaUrl = lead ? (lead.video_url ?? lead.image_url) : null;
  const leadMediaType = lead?.video_url ? "video" : "image";

  const experienceBlock = getBlock(blocks, "restaurantes_experience");
  const bannerBlock = getBlock(blocks, "restaurantes_banner");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Restaurantes",
    description: "Portafolio de conceptos gastronomicos y experiencias del grupo.",
    itemListElement: items.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(`/restaurantes/${item.slug}`),
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
              label="Restaurantes lead media"
              mediaUrl={leadMediaUrl}
              mediaType={leadMediaType}
              className="category-hero-media-shell"
            />
          </div>
          <div className="category-hero-shade" aria-hidden="true" />
          <div className="container category-hero-content">
            <div className="category-hero-panel">
              <div className="eyebrow">Vento Group</div>
              <h1 className="hero-title">Restaurantes</h1>
              <p className="hero-copy">
                Conceptos gastronómicos únicos, cada uno con identidad propia y el sello de excelencia del grupo.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#portafolio">
                  Ver portafolio
                </Link>
                <Link
                  className="button button-ghost"
                  href="mailto:reservas@ventogroup.co"
                >
                  Reservar un espacio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── La experiencia Vento ───────────────────────────────── */}
        <section className="restaurantes-experience-section" aria-label="La experiencia Vento">
          <div className="restaurantes-experience-feature">
            <div className="restaurantes-experience-media" aria-hidden="true">
              <MediaSlot
                label="La experiencia Vento"
                mediaUrl={experienceBlock?.media_url ?? null}
                mediaType={experienceBlock?.media_type ?? undefined}
              />
            </div>
            <div className="restaurantes-experience-shade" aria-hidden="true" />
            <div className="container restaurantes-experience-content-wrap">
              <Reveal>
                <div className="restaurantes-experience-content">
                  <span className="eyebrow restaurantes-experience-eyebrow">Nuestra gastronomia</span>
                  <h2 className="restaurantes-experience-title">
                    {experienceBlock?.title ?? "Cada restaurante, una historia diferente"}
                  </h2>
                  <p className="restaurantes-experience-copy">
                    {experienceBlock?.body ??
                      "Del concepto al plato, cada uno de nuestros restaurantes nace de una obsesión por los detalles. Espacios diseñados para que cada visita sea una experiencia que vale la pena repetir."}
                  </p>
                  <Link
                    className="button button-outline-light"
                    href={experienceBlock?.cta_url ?? "#portafolio"}
                  >
                    {experienceBlock?.cta_label ?? "Explorar el portafolio"}
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
          title={bannerBlock?.title ?? "Sabor, ambiente y momentos inolvidables"}
        />

        {/* ── Grid de restaurantes ────────────────────────────────── */}
        <section className="section category-list-section" id="portafolio">
          <div className="container">
            <Reveal>
              <div className="section-header">
                <div>
                  <h2 className="section-title">Nuestros restaurantes</h2>
                  <p className="section-copy">
                    Un portafolio de conceptos gastronomicos, cada uno con identidad propia.
                  </p>
                </div>
              </div>
            </Reveal>
            <RevealGrid className="cards">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  mediaLabel={`Restaurante ${item.title}`}
                />
              ))}
            </RevealGrid>
          </div>
        </section>

        {/* ── CTA Banner ─────────────────────────────────────────── */}
        <CtaBanner
          title="¿Tienes un evento especial?"
          copy="Nuestros espacios están diseñados para celebraciones privadas, cenas corporativas y activaciones de marca. Cuéntanos tu visión."
          ctaLabel="Planear mi evento"
          ctaHref="mailto:eventos@ventogroup.co"
        />

      </main>
      <SiteFooter />
    </>
  );
}
