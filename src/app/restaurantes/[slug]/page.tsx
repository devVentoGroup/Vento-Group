import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EditorialPageHero } from "@/components/editorial-page";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import {
  formatCommercialVenueHours,
  getCommercialVenueBySlug,
  getOpeningHoursSpecification,
} from "@/lib/commercial-venues";
import { getItemByCategoryAndSlug, getItems, getPageBlocksFromCandidates } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./restaurant-detail.module.css";

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

  const lines = body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const features = lines
    .filter((line) => line.startsWith("- ") || line.startsWith("• ") || line.startsWith("* "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);

  const description = lines
    .filter((line) => !line.startsWith("- ") && !line.startsWith("• ") && !line.startsWith("* "))
    .join(" ");

  return { description, features };
}

function getDefaultFeatures() {
  return [
    {
      title: "Cocina con identidad",
      copy: "Una propuesta definida por producto, técnica y una visión propia de cada ocasión.",
    },
    {
      title: "Hospitalidad cercana",
      copy: "Servicio atento, natural y consistente desde la llegada hasta el último detalle.",
    },
    {
      title: "Ambiente memorable",
      copy: "Espacios pensados para encuentros cotidianos, celebraciones y momentos que merecen repetirse.",
    },
  ];
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

  const commercialVenue = await getCommercialVenueBySlug(slug, venue.title);
  const displayName = commercialVenue?.name ?? venue.title;
  const detailHero = detailBlocks.find(
    (block) => block.block_type === "detail_hero" || block.block_key === "detail_hero",
  );
  const imageUrl = toAbsolute(detailHero?.media_url ?? venue.image_url ?? venue.video_url ?? null);
  const description = truncateForMeta(
    venue.excerpt ?? commercialVenue?.subtitle ?? venue.body ?? `Restaurante ${displayName} de Vento Group.`,
    155,
  );
  const canonicalPath = `/restaurantes/${venue.slug}`;

  return {
    title: `${displayName} | Vento Group`,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${displayName} | Vento Group`,
      description,
      url: canonicalPath,
      type: "article",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: `${displayName} | Vento Group`,
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

  const commercialVenue = await getCommercialVenueBySlug(slug, venue.title);
  const displayName = commercialVenue?.name ?? venue.title;
  const displaySubtitle = commercialVenue?.subtitle ?? venue.excerpt;
  const displayAddress = commercialVenue?.address ?? venue.location;
  const displayHours =
    (commercialVenue ? formatCommercialVenueHours(commercialVenue.hours) : null) ?? venue.schedule_text;

  const currentIndex = allRestaurants.findIndex((item) => item.slug === venue.slug);
  const nextVenue =
    allRestaurants.length > 1
      ? allRestaurants[(currentIndex + 1 + allRestaurants.length) % allRestaurants.length]
      : null;

  const detailHero = detailBlocks.find(
    (block) => block.block_type === "detail_hero" || block.block_key === "detail_hero",
  );
  const galleryBlocks = detailBlocks
    .filter((block) => block.block_type === "galeria_media" || block.block_key.startsWith("galeria_"))
    .sort((a, b) => a.sort_order - b.sort_order);
  const conceptBlock = detailBlocks.find(
    (block) => block.block_type === "restaurant_concept" || block.block_key === "restaurant_concept",
  );
  const privateEventsBlock = detailBlocks.find(
    (block) => block.block_type === "private_events" || block.block_key === "private_events",
  );

  const { description, features } = splitBodyAndFeatures(venue.body);
  const narrative =
    description ||
    venue.excerpt ||
    commercialVenue?.subtitle ||
    `${displayName} reúne cocina, ambiente y hospitalidad en una experiencia con identidad propia.`;

  const heroMediaUrl = detailHero?.media_url ?? venue.video_url ?? venue.image_url;
  const heroMediaType = detailHero?.media_type ?? (venue.video_url ? "video" : "image");
  const reservationHref =
    venue.action_url && venue.action_url !== "#" ? venue.action_url : "mailto:reservas@ventogroup.co";
  const eventHref = `/eventos?restaurante=${encodeURIComponent(venue.slug)}`;

  const galleryMedia = [
    ...galleryBlocks.map((block) => ({
      id: block.id,
      label: block.title ?? displayName,
      mediaUrl: block.media_url,
      mediaType: block.media_type,
    })),
    {
      id: `${venue.id}-primary`,
      label: displayName,
      mediaUrl: venue.image_url,
      mediaType: "image" as const,
    },
    {
      id: `${venue.id}-video`,
      label: displayName,
      mediaUrl: venue.video_url,
      mediaType: "video" as const,
    },
  ].filter((item, index, collection) => {
    if (!item.mediaUrl) return false;
    return collection.findIndex((candidate) => candidate.mediaUrl === item.mediaUrl) === index;
  });

  const conceptMedia = conceptBlock?.media_url ?? galleryMedia[1]?.mediaUrl ?? venue.image_url ?? heroMediaUrl;
  const conceptMediaType =
    conceptBlock?.media_type ?? galleryMedia[1]?.mediaType ?? (venue.image_url ? "image" : heroMediaType);
  const eventMedia = privateEventsBlock?.media_url ?? galleryMedia[2]?.mediaUrl ?? heroMediaUrl;
  const eventMediaType = privateEventsBlock?.media_type ?? galleryMedia[2]?.mediaType ?? heroMediaType;

  const sourceFeatures = features.length > 0 ? features : (commercialVenue?.tags ?? []);
  const featureItems =
    sourceFeatures.length > 0
      ? sourceFeatures.slice(0, 4).map((feature) => ({
          title: feature,
          copy: "Una característica que forma parte de la identidad y la experiencia de esta sede.",
        }))
      : getDefaultFeatures();

  const canonicalUrl = absoluteUrl(`/restaurantes/${venue.slug}`);
  const heroMediaAbsolute = toAbsolute(heroMediaUrl);
  const openingHoursSpecification = commercialVenue
    ? getOpeningHoursSpecification(commercialVenue.hours)
    : undefined;
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: displayName,
    description: truncateForMeta(narrative, 240) || undefined,
    url: canonicalUrl,
    image: heroMediaAbsolute ? [heroMediaAbsolute] : undefined,
    address: displayAddress
      ? {
          "@type": "PostalAddress",
          streetAddress: displayAddress,
          addressLocality: "Cúcuta",
          addressCountry: "CO",
        }
      : undefined,
    geo:
      commercialVenue?.latitude !== null && commercialVenue?.latitude !== undefined &&
      commercialVenue?.longitude !== null && commercialVenue?.longitude !== undefined
        ? {
            "@type": "GeoCoordinates",
            latitude: commercialVenue.latitude,
            longitude: commercialVenue.longitude,
          }
        : undefined,
    openingHoursSpecification:
      openingHoursSpecification && openingHoursSpecification.length > 0
        ? openingHoursSpecification
        : undefined,
    sameAs: [commercialVenue?.mapsUrl, commercialVenue?.reviewUrl].filter(Boolean),
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
        name: displayName,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <StructuredData data={[restaurantSchema, breadcrumbSchema]} />
      <SiteHeader />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={detailHero?.subtitle ?? displaySubtitle ?? "Vento Group"}
          title={displayName}
          copy={venue.excerpt ?? displaySubtitle ?? narrative}
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          primaryAction={{ label: venue.action_label ?? "Reservar", href: reservationHref }}
          secondaryAction={{ label: "Planear un evento", href: eventHref }}
          mediaLabel={displayName}
        />

        <section className={styles.intro} data-header-theme="light">
          <div className={`${styles.shell} ${styles.introGrid}`}>
            <Reveal mode="once" threshold={0.15}>
              <span className={styles.eyebrow}>La experiencia</span>
            </Reveal>

            <Reveal className={styles.introContent} delayMs={90} mode="once" threshold={0.15}>
              <h2>{conceptBlock?.title ?? "Un lugar con una forma propia de recibir."}</h2>

              <div className={styles.introLower}>
                <p className={styles.introCopy}>{narrative}</p>

                <div>
                  <dl className={styles.facts}>
                    <div>
                      <dt>Ubicación</dt>
                      <dd>{displayAddress ?? "Cúcuta, Colombia"}</dd>
                    </div>
                    <div>
                      <dt>Horario</dt>
                      <dd>{displayHours ?? "Consultar disponibilidad"}</dd>
                    </div>
                    <div>
                      <dt>Reservas</dt>
                      <dd>{venue.action_label ?? "Disponibles"}</dd>
                    </div>
                  </dl>

                  {(commercialVenue?.mapsUrl || commercialVenue?.reviewUrl) && (
                    <div className={styles.factLinks}>
                      {commercialVenue.mapsUrl ? (
                        <a href={commercialVenue.mapsUrl} target="_blank" rel="noreferrer noopener">
                          Cómo llegar
                        </a>
                      ) : null}
                      {commercialVenue.reviewUrl ? (
                        <a href={commercialVenue.reviewUrl} target="_blank" rel="noreferrer noopener">
                          Ver reseñas
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {galleryMedia.length > 0 ? (
          <section className={styles.gallery} data-header-theme="light">
            <div className={styles.shell}>
              <div className={styles.galleryHeader}>
                <Reveal mode="once" threshold={0.12}>
                  <span className={styles.eyebrow}>Galería</span>
                  <h2>El espacio, el ambiente y los detalles.</h2>
                </Reveal>
                <Reveal delayMs={90} mode="once" threshold={0.12}>
                  <p>Una mirada a los momentos, la cocina y la atmósfera que dan forma a {displayName}.</p>
                </Reveal>
              </div>

              <div className={styles.galleryGrid}>
                <Reveal className={styles.galleryPrimary} mode="once" threshold={0.08}>
                  <MediaSlot
                    label={galleryMedia[0]?.label ?? displayName}
                    mediaUrl={galleryMedia[0]?.mediaUrl ?? null}
                    mediaType={galleryMedia[0]?.mediaType}
                  />
                </Reveal>

                <div className={styles.galleryStack}>
                  {galleryMedia.slice(1, 3).map((item, index) => (
                    <Reveal
                      key={item.id}
                      className={styles.gallerySecondary}
                      delayMs={90 + index * 70}
                      mode="once"
                      threshold={0.08}
                    >
                      <MediaSlot label={item.label} mediaUrl={item.mediaUrl} mediaType={item.mediaType} />
                    </Reveal>
                  ))}
                </div>

                {galleryMedia[3] ? (
                  <Reveal className={styles.galleryWide} delayMs={120} mode="once" threshold={0.08}>
                    <MediaSlot
                      label={galleryMedia[3].label}
                      mediaUrl={galleryMedia[3].mediaUrl}
                      mediaType={galleryMedia[3].mediaType}
                    />
                  </Reveal>
                ) : null}
              </div>
            </div>
          </section>
        ) : null}

        <section className={styles.concept} data-header-theme="light">
          <div className={`${styles.shell} ${styles.conceptGrid}`}>
            <Reveal className={styles.conceptMedia} mode="once" threshold={0.1}>
              <MediaSlot
                label={conceptBlock?.title ?? `Concepto de ${displayName}`}
                mediaUrl={conceptMedia ?? null}
                mediaType={conceptMediaType}
              />
            </Reveal>

            <Reveal className={styles.conceptCopy} delayMs={100} mode="once" threshold={0.12}>
              <span className={styles.eyebrow}>{conceptBlock?.subtitle ?? "La propuesta"}</span>
              <h2>{conceptBlock?.title ?? "Cocina, servicio y ambiente en una sola experiencia."}</h2>
              <p>
                {conceptBlock?.body ??
                  `En ${displayName}, cada decisión —desde el producto hasta la música, la iluminación y el ritmo del servicio— busca construir una experiencia coherente y fácil de recordar.`}
              </p>
              <a className={styles.textLink} href={reservationHref}>
                {venue.action_label ?? "Reservar"}
              </a>
            </Reveal>
          </div>
        </section>

        <section className={styles.experience} data-header-theme="dark">
          <div className={styles.shell}>
            <div className={styles.experienceHeader}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow}>Lo que define la experiencia</span>
                <h2>Detalles que se sienten en cada visita.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>
                  La identidad de un restaurante no depende de una sola cosa. Se construye en la suma de producto,
                  servicio, ambiente y consistencia.
                </p>
              </Reveal>
            </div>

            <div className={styles.featureList}>
              {featureItems.map((feature, index) => (
                <Reveal key={`${feature.title}-${index}`} mode="once" threshold={0.08}>
                  <article className={styles.feature}>
                    <span className={styles.featureNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.privateEvents} data-header-theme="dark">
          <div className={styles.privateEventsMedia} aria-hidden="true">
            <MediaSlot
              label={privateEventsBlock?.title ?? `Eventos en ${displayName}`}
              mediaUrl={eventMedia ?? null}
              mediaType={eventMediaType}
            />
          </div>
          <div className={styles.privateEventsShade} aria-hidden="true" />

          <div className={`${styles.shell} ${styles.privateEventsContent}`}>
            <Reveal mode="once" threshold={0.1}>
              <span className={styles.eyebrow}>{privateEventsBlock?.subtitle ?? "Eventos privados"}</span>
              <h2>{privateEventsBlock?.title ?? "Una ocasión especial merece un lugar con identidad."}</h2>
            </Reveal>

            <Reveal className={styles.privateEventsAside} delayMs={100} mode="once" threshold={0.1}>
              <p>
                {privateEventsBlock?.body ??
                  `Celebraciones, reuniones de grupo y experiencias de marca pueden encontrar en ${displayName} un escenario diseñado alrededor de la ocasión.`}
              </p>
              <Link className={styles.lightLink} href={eventHref}>
                {privateEventsBlock?.cta_label ?? "Planear un evento"}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className={styles.nextVenue} data-header-theme="light">
          <div className={styles.shell}>
            {nextVenue ? (
              <Link className={styles.nextVenueLink} href={`/restaurantes/${nextVenue.slug}`}>
                <span className={styles.nextVenueLabel}>Siguiente restaurante</span>
                <span className={styles.nextVenueName}>{nextVenue.title}</span>
                <span className={styles.nextVenueArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ) : null}

            <Link className={styles.backLink} href="/restaurantes">
              Ver todos los restaurantes
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter venues={allRestaurants.map((item) => item.title)} />
    </>
  );
}
