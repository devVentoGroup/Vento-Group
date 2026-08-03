import type { Metadata } from "next";

import {
  EditorialClosing,
  EditorialIntro,
  EditorialMediaBand,
  EditorialPageHero,
  EditorialSectionHeading,
} from "@/components/editorial-page";
import { EventSpacePlanner, type EventSpaceItem } from "@/components/event-space-planner";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import {
  formatCommercialVenueHours,
  getCommercialVenues,
  normalizeCommercialSlug,
} from "@/lib/commercial-venues";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

import styles from "./eventos.module.css";

export const metadata: Metadata = {
  title: "Eventos | Vento Group",
  description: "Celebra, reúne a tu equipo o crea una experiencia de marca en los espacios de Vento Group.",
  alternates: { canonical: "/eventos" },
  openGraph: {
    title: "Eventos | Vento Group",
    description: "Espacios y experiencias para celebraciones, grupos y eventos corporativos.",
    url: "/eventos",
    type: "website",
  },
};

const occasions = [
  {
    title: "Celebraciones",
    copy: "Cumpleaños, aniversarios y encuentros personales diseñados alrededor de la ocasión.",
  },
  {
    title: "Corporativos",
    copy: "Reuniones de equipo, cenas empresariales y momentos de relacionamiento con una operación confiable.",
  },
  {
    title: "Grupos",
    copy: "Reservas para familias, amigos y equipos con una experiencia coordinada de principio a fin.",
  },
  {
    title: "Experiencias de marca",
    copy: "Activaciones, lanzamientos y colaboraciones que conectan producto, espacio y hospitalidad.",
  },
];

const process = [
  {
    title: "Cuéntanos la idea",
    copy: "Comparte el tipo de ocasión, fecha estimada, número de invitados y formato que tienes en mente.",
  },
  {
    title: "Elegimos el espacio",
    copy: "Revisamos la sede, distribución y propuesta gastronómica que mejor se adapten a la experiencia.",
  },
  {
    title: "Confirmamos detalles",
    copy: "El equipo valida disponibilidad, alcance, condiciones y próximos pasos antes de confirmar la reserva.",
  },
];

export default async function EventosPage({
  searchParams,
}: {
  searchParams?: Promise<{ restaurante?: string }>;
}) {
  const params = (await searchParams) ?? {};

  const [blocks, restaurants, commercialVenues, events] = await Promise.all([
    getPageBlocks("eventos"),
    getItems("restaurant", 20),
    getCommercialVenues(),
    getItems("event", 8),
  ]);

  const heroBlock = getBlock(blocks, "eventos_hero");
  const introBlock = getBlock(blocks, "eventos_intro");
  const bandBlock = getBlock(blocks, "eventos_banner");
  const leadRestaurant = restaurants[0] ?? null;
  const leadEvent = events[0] ?? null;

  const spaces: EventSpaceItem[] = commercialVenues.map((commercial) => {
    const websiteRestaurant = restaurants.find((restaurant) => {
      const candidates = [
        normalizeCommercialSlug(restaurant.slug),
        normalizeCommercialSlug(restaurant.title),
      ];
      return candidates.includes(commercial.slug) || candidates.includes(normalizeCommercialSlug(commercial.name));
    });

    return {
      id: commercial.businessId,
      slug: websiteRestaurant?.slug ?? commercial.slug,
      name: commercial.name,
      subtitle: commercial.subtitle ?? websiteRestaurant?.excerpt ?? null,
      address: commercial.address ?? websiteRestaurant?.location ?? null,
      schedule: formatCommercialVenueHours(commercial.hours) ?? websiteRestaurant?.schedule_text ?? null,
      tags: commercial.tags,
      imageUrl: websiteRestaurant?.image_url ?? commercial.cardLogoUrl,
      videoUrl: websiteRestaurant?.video_url ?? null,
      mapsUrl: commercial.mapsUrl,
      accentColor: commercial.accentColor,
    };
  });

  const fallbackSpaces: EventSpaceItem[] = restaurants.map((restaurant) => ({
    id: restaurant.id,
    slug: restaurant.slug,
    name: restaurant.title,
    subtitle: restaurant.excerpt,
    address: restaurant.location,
    schedule: restaurant.schedule_text,
    tags: [],
    imageUrl: restaurant.image_url,
    videoUrl: restaurant.video_url,
    mapsUrl: null,
    accentColor: null,
  }));

  const plannerSpaces = spaces.length > 0 ? spaces : fallbackSpaces;
  const initialSlug = params.restaurante ? normalizeCommercialSlug(params.restaurante) : null;

  const heroMediaUrl =
    heroBlock?.media_url ??
    leadEvent?.video_url ??
    leadEvent?.image_url ??
    leadRestaurant?.video_url ??
    leadRestaurant?.image_url ??
    null;
  const heroMediaType =
    heroBlock?.media_type ??
    (leadEvent?.video_url ? "video" : leadEvent?.image_url ? "image" : leadRestaurant?.video_url ? "video" : "image");

  const bandMediaUrl =
    bandBlock?.media_url ??
    events[1]?.video_url ??
    events[1]?.image_url ??
    restaurants[1]?.video_url ??
    restaurants[1]?.image_url ??
    heroMediaUrl;
  const bandMediaType =
    bandBlock?.media_type ??
    (events[1]?.video_url ? "video" : events[1]?.image_url ? "image" : restaurants[1]?.video_url ? "video" : "image");

  const eventServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Eventos Vento Group",
    serviceType: "Eventos privados y corporativos",
    provider: {
      "@type": "Organization",
      name: "Vento Group",
      url: absoluteUrl("/"),
    },
    areaServed: "Cúcuta, Colombia",
    url: absoluteUrl("/eventos"),
  };

  return (
    <>
      <StructuredData data={eventServiceSchema} />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={heroBlock?.subtitle ?? "Eventos Vento Group"}
          title={heroBlock?.title ?? "Momentos que merecen un lugar a su altura."}
          copy={
            heroBlock?.body ??
            "Celebraciones, reuniones de grupo y experiencias de marca conectadas con la cocina, el servicio y la identidad de nuestros restaurantes."
          }
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Eventos en Vento Group"
          primaryAction={{ label: "Encontrar un espacio", href: "#planificador" }}
          secondaryAction={{ label: "Ver restaurantes", href: "/restaurantes" }}
        />

        <EditorialIntro
          eyebrow="Una experiencia completa"
          title={introBlock?.title ?? "No se trata solo del espacio. Se trata de cómo se siente todo el encuentro."}
          copy={
            introBlock?.body ??
            "Cada evento combina propuesta gastronómica, atención, ambiente y coordinación. Partimos de la ocasión para recomendar la sede y el formato más adecuados."
          }
          action={{ label: "Empezar consulta", href: "#planificador" }}
        />

        <section className={styles.occasions} data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Tipos de ocasión"
              title="Distintas razones para reunirnos."
              copy="Cada evento empieza con una intención diferente. La propuesta se adapta al momento, al grupo y al nivel de acompañamiento necesario."
            />

            <div className={styles.occasionGrid}>
              {occasions.map((occasion, index) => (
                <Reveal key={occasion.title} delayMs={index * 70} mode="once" threshold={0.1}>
                  <article className={styles.occasion}>
                    <span className={styles.occasionNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{occasion.title}</h3>
                    <p>{occasion.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EventSpacePlanner spaces={plannerSpaces} initialSlug={initialSlug} />

        <section className={styles.process} data-header-theme="light">
          <div className={`${styles.shell} ${styles.processGrid}`}>
            <Reveal className={styles.processIntro} mode="once" threshold={0.12}>
              <span>Cómo funciona</span>
              <h2>De una idea inicial a una experiencia coordinada.</h2>
            </Reveal>

            <div className={styles.processList}>
              {process.map((item, index) => (
                <Reveal key={item.title} delayMs={index * 70} mode="once" threshold={0.08}>
                  <article className={styles.processItem}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EditorialMediaBand
          eyebrow={bandBlock?.subtitle ?? "Hospitalidad para grupos"}
          title={bandBlock?.title ?? "El espacio cambia. La atención al detalle permanece."}
          copy={
            bandBlock?.body ??
            "Cada sede conserva su identidad y adapta el servicio a la ocasión. Nuestro equipo acompaña la definición de formato, propuesta y experiencia."
          }
          mediaUrl={bandMediaUrl}
          mediaType={bandMediaType}
          mediaLabel="Experiencias y eventos Vento Group"
          action={{ label: "Consultar disponibilidad", href: "#planificador" }}
        />

        <section className={styles.notes} data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.noteGrid}>
              <article className={styles.note}>
                <span>Disponibilidad</span>
                <h3>Cada fecha se confirma directamente.</h3>
                <p>El envío de la consulta no bloquea ni confirma el espacio. El equipo responderá con disponibilidad real.</p>
              </article>
              <article className={styles.note}>
                <span>Formato</span>
                <h3>La distribución se define según la ocasión.</h3>
                <p>Sentados, de pie o mixto: el formato final depende de la sede, el número de invitados y la propuesta.</p>
              </article>
              <article className={styles.note}>
                <span>Propuesta</span>
                <h3>La experiencia se construye caso por caso.</h3>
                <p>Menú, servicio y condiciones se presentan después de entender el alcance completo del evento.</p>
              </article>
            </div>
          </div>
        </section>

        <EditorialClosing
          eyebrow="Tu próxima ocasión"
          title="Cuéntanos qué estás planeando."
          copy="Comparte una primera idea y el equipo de eventos te ayudará a convertirla en una propuesta concreta."
          actions={[
            { label: "Abrir planificador", href: "#planificador" },
            { label: "Escribir directamente", href: "mailto:eventos@ventogroup.co" },
          ]}
          dark
        />
      </main>

      <SiteFooter venues={restaurants.map((restaurant) => restaurant.title)} />
    </>
  );
}
