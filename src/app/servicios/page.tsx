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
  title: "Servicios | Vento Group",
  description: "Servicios del ecosistema Vento Group para operación, calidad y crecimiento.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | Vento Group",
    description: "Servicios del ecosistema Vento Group para operación, calidad y crecimiento.",
    url: "/servicios",
    type: "website",
  },
};

const PILARES = [
  {
    icon: "⚙",
    label: "Operación",
    copy: "Protocolos y herramientas para la gestión diaria.",
  },
  {
    icon: "📊",
    label: "Tecnología",
    copy: "Software y dashboards para decisiones en tiempo real.",
  },
  {
    icon: "🎓",
    label: "Formación",
    copy: "Programas de entrenamiento para equipos de sala y cocina.",
  },
  {
    icon: "🤝",
    label: "Consultoría",
    copy: "Acompañamiento estratégico para nuevas aperturas.",
  },
];

export default async function ServiciosPage() {
  const [blocks, items] = await Promise.all([
    getPageBlocks("servicios"),
    getItems("service"),
  ]);

  const lead = items[0] ?? null;
  const leadMediaUrl = lead ? (lead.video_url ?? lead.image_url) : null;
  const leadMediaType = lead?.video_url ? "video" : "image";

  const introBlock = getBlock(blocks, "servicios_intro");
  const bannerBlock = getBlock(blocks, "servicios_banner");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios",
    description: "Servicios internos y externos para acelerar operacion, calidad y crecimiento.",
    itemListElement: items.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(item.action_url ?? "/servicios"),
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
              label="Servicios lead media"
              mediaUrl={leadMediaUrl}
              mediaType={leadMediaType}
              className="category-hero-media-shell"
            />
          </div>
          <div className="category-hero-shade" aria-hidden="true" />
          <div className="container category-hero-content">
            <div className="category-hero-panel">
              <div className="eyebrow">Vento Group</div>
              <h1 className="hero-title">Servicios</h1>
              <p className="hero-copy">
                {introBlock?.subtitle ??
                  "Soluciones de operación, tecnología y soporte para restaurantes y equipos de alto rendimiento."}
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="#servicios">
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Intro con pilares ──────────────────────────────────── */}
        <Reveal>
          <section className="section servicios-intro">
            <div className="container servicios-intro-inner">
              <div className="servicios-intro-text">
                <span className="eyebrow">Lo que ofrecemos</span>
                <h2 className="servicios-intro-title">
                  {introBlock?.title ?? "Un ecosistema de soporte para cada operación"}
                </h2>
                <p className="servicios-intro-copy">
                  {introBlock?.body ??
                    "Desde tecnología operativa hasta asesoría de calidad, Vento Group pone a disposición de sus marcas y aliados un conjunto de herramientas y servicios diseñados para escalar con excelencia."}
                </p>
              </div>
              <ul className="servicios-pilares" aria-label="Pilares de servicio">
                {PILARES.map((p) => (
                  <li key={p.label} className="servicios-pilar">
                    <span className="servicios-pilar-icon" aria-hidden="true">
                      {p.icon}
                    </span>
                    <strong className="servicios-pilar-label">{p.label}</strong>
                    <span className="servicios-pilar-copy">{p.copy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        {/* ── Image banner ───────────────────────────────────────── */}
        <ImageBanner
          mediaUrl={bannerBlock?.media_url ?? null}
          mediaType={bannerBlock?.media_type ?? null}
          eyebrow={bannerBlock?.subtitle ?? "Vento Group"}
          title={bannerBlock?.title ?? "Calidad y excelencia en cada proceso"}
        />

        {/* ── Grid de servicios ──────────────────────────────────── */}
        <section className="section category-list-section" id="servicios">
          <div className="container">
            <Reveal>
              <div className="section-header servicios-grid-header">
                <div>
                  <h2 className="section-title">Nuestros servicios</h2>
                  <p className="section-copy">
                    Elige el servicio que mejor se adapte a tu operación.
                  </p>
                </div>
              </div>
            </Reveal>
            <RevealGrid className="cards">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  mediaLabel={`Servicio ${item.title}`}
                />
              ))}
            </RevealGrid>
          </div>
        </section>

        {/* ── CTA Banner ─────────────────────────────────────────── */}
        <CtaBanner
          title="¿Tienes un proyecto en mente?"
          copy="Conecta con nuestro equipo y exploremos cómo Vento Group puede impulsar tu operación."
          ctaLabel="Escribirnos"
          ctaHref="mailto:hola@ventogroup.co"
        />

      </main>
      <SiteFooter />
    </>
  );
}
