import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ItemCarousel } from "@/components/item-carousel";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getItemByCategoryAndSlug, getItems, getPageBlocksFromCandidates } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

export const dynamic = "force-dynamic";

function toAbsolute(url: string | null | undefined): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return absoluteUrl(url);
}

function splitBodyAndFeatures(body: string | null) {
  if (!body) {
    return { description: "", features: [] as string[] };
  }

  const lines = body.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const features = lines
    .filter((line) => line.startsWith("- ") || line.startsWith("• ") || line.startsWith("* "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);

  const description = lines
    .filter((line) => !line.startsWith("- ") && !line.startsWith("• ") && !line.startsWith("* "))
    .join(" ");

  return { description, features };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const [venue, detailBlocks] = await Promise.all([
    getItemByCategoryAndSlug("restaurant", slug),
    getPageBlocksFromCandidates([`restaurant:${slug}`, `restaurant_${slug}`, `restaurante:${slug}`]),
  ]);
  if (!venue) {
    return {
      title: "Restaurante | Vento Group",
    };
  }

  const detailHero = detailBlocks.find((block) => block.block_type === "detail_hero" || block.block_key === "detail_hero");
  const imageUrl = toAbsolute(detailHero?.media_url ?? venue.image_url ?? venue.video_url ?? null);
  const description = truncateForMeta(venue.excerpt ?? venue.body ?? "Detalle de restaurante en Vento Group.", 155);
  const canonicalPath = `/restaurantes/${venue.slug}`;

  return {
    title: `${venue.title} | Vento Group`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${venue.title} | Vento Group`,
      description,
      url: canonicalPath,
      type: "article",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: `${venue.title} | Vento Group`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [venue, allRestaurants, detailBlocks] = await Promise.all([
    getItemByCategoryAndSlug("restaurant", slug),
    getItems("restaurant"),
    getPageBlocksFromCandidates([`restaurant:${slug}`, `restaurant_${slug}`, `restaurante:${slug}`]),
  ]);

  if (!venue) {
    notFound();
  }

  const relatedRestaurants = allRestaurants.filter((item) => item.slug !== venue.slug).slice(0, 6);
  const detailHero = detailBlocks.find((block) => block.block_type === "detail_hero" || block.block_key === "detail_hero");
  const galleryBlocks = detailBlocks
    .filter((block) => block.block_type === "gallery_media" || block.block_key.startsWith("gallery_"))
    .sort((a, b) => a.sort_order - b.sort_order);

  const { description, features } = splitBodyAndFeatures(venue.body);
  const narrative = description || venue.excerpt || "Completa la historia de este venue desde VISO.";
  const reservationHref = venue.action_url && venue.action_url !== "#" ? venue.action_url : "/eventos";
  const heroMediaUrl = detailHero?.media_url ?? venue.video_url ?? venue.image_url;
  const heroMediaType = detailHero?.media_type ?? (venue.video_url ? "video" : "image");
  const primaryFacts = [venue.location, venue.schedule_text].filter(Boolean);
  const canonicalUrl = absoluteUrl(`/restaurantes/${venue.slug}`);
  const heroMediaAbsolute = toAbsolute(heroMediaUrl);
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: venue.title,
    description: truncateForMeta(narrative, 240) || undefined,
    url: canonicalUrl,
    image: heroMediaAbsolute ? [heroMediaAbsolute] : undefined,
    address: venue.location ?? undefined,
    openingHours: venue.schedule_text ?? undefined,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Restaurantes",
        item: absoluteUrl("/restaurantes"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: venue.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <StructuredData data={[restaurantSchema, breadcrumbSchema]} />
      <SiteHeader />
      <main>
        <section className="venue-hero">
          <div className="container venue-hero-grid">
            <Reveal>
              <article className="venue-hero-panel">
                <div className="eyebrow">{detailHero?.subtitle ?? "Vento Group Venue"}</div>
                <h1 className="venue-title">{venue.title}</h1>
                {primaryFacts.length > 0 ? (
                  <p className="venue-facts-line">{primaryFacts.join(" · ")}</p>
                ) : null}
                <p className="venue-description">{narrative}</p>
                <div className="hero-actions">
                  <a className="button button-primary" href={reservationHref}>
                    {venue.action_label ?? "Reservar / Contactar"}
                  </a>
                  <Link className="button button-ghost" href="/eventos">
                    Planear evento
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="venue-hero-media">
                <MediaSlot label={venue.title} mediaUrl={heroMediaUrl} mediaType={heroMediaType} />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Gallery</h2>
                <p className="section-copy">Colección visual del espacio, ambiente y experiencias del venue.</p>
              </div>
            </Reveal>

            <Reveal delayMs={120} className="venue-gallery-grid">
              {(galleryBlocks.length > 0 ? galleryBlocks : [detailHero].filter(Boolean)).slice(0, 4).map((block, index) => (
                <div key={block!.id} className={`venue-gallery-item ${index === 0 ? "venue-gallery-item-featured" : ""}`}>
                  <MediaSlot
                    label={block?.title ?? `${venue.title} gallery`}
                    mediaUrl={block?.media_url ?? null}
                    mediaType={block?.media_type}
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container venue-detail-grid">
            <Reveal>
              <article className="venue-detail-panel">
                <h2>About This Venue</h2>
                <p>{narrative}</p>
                <p>
                  Diseña esta sección desde VISO para incluir storytelling de marca, enfoque de cocina, público objetivo
                  y razón de visita.
                </p>
              </article>
            </Reveal>

            <Reveal delayMs={110}>
              <article className="venue-detail-panel venue-detail-panel-compact">
                <h2>Venue Facts</h2>
                <ul className="venue-facts-list">
                  <li>
                    <span>Ubicación</span>
                    <strong>{venue.location ?? "Por definir"}</strong>
                  </li>
                  <li>
                    <span>Horario</span>
                    <strong>{venue.schedule_text ?? "Por definir"}</strong>
                  </li>
                  <li>
                    <span>Reservas</span>
                    <strong>{venue.action_label ?? "Disponible"}</strong>
                  </li>
                </ul>

                <h3>Notable Features</h3>
                <ul className="venue-feature-list">
                  {(features.length > 0
                    ? features
                    : [
                        "Bloque editable para features de experiencia.",
                        "Ideal para seating, standing y private dining.",
                        "Integra esta lista desde campo body en VISO con bullets.",
                      ]
                  ).map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </section>

        {relatedRestaurants.length > 0 ? (
          <section className="section">
            <div className="container">
              <Reveal className="section-header">
                <div>
                  <h2 className="section-title">More Venues</h2>
                  <p className="section-copy">Otros espacios del portafolio para explorar y reservar.</p>
                </div>
                <Link href="/restaurantes" className="section-link">
                  Ver portafolio completo
                </Link>
              </Reveal>
              <Reveal delayMs={120}>
                <ItemCarousel items={relatedRestaurants} mediaPrefix="Venue" />
              </Reveal>
            </div>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
