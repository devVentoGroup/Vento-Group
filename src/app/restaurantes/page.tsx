import type { Metadata } from "next";
import Link from "next/link";

import {
  EditorialClosing,
  EditorialIntro,
  EditorialMediaBand,
  EditorialPageHero,
  EditorialSectionHeading,
} from "@/components/editorial-page";
import { HomeVenueExperience } from "@/components/home-venue-experience";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItemHref, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./restaurantes.module.css";

export const metadata: Metadata = {
  title: "Restaurantes | Vento Group",
  description: "Descubre los restaurantes, conceptos y experiencias gastronómicas de Vento Group.",
  alternates: { canonical: "/restaurantes" },
  openGraph: {
    title: "Restaurantes | Vento Group",
    description: "Descubre los restaurantes, conceptos y experiencias gastronómicas de Vento Group.",
    url: "/restaurantes",
    type: "website",
  },
};

const occasions = [
  {
    title: "Encuentros cotidianos",
    copy: "Café, conversación y una pausa bien hecha dentro del ritmo de todos los días.",
  },
  {
    title: "Almuerzos y cenas",
    copy: "Propuestas con identidad para compartir, celebrar o simplemente volver a comer bien.",
  },
  {
    title: "Grupos y celebraciones",
    copy: "Espacios y formatos que se adaptan a reuniones familiares, equipos y ocasiones especiales.",
  },
  {
    title: "Experiencias de marca",
    copy: "Hospitalidad, producto y operación conectados para crear activaciones con carácter propio.",
  },
];

export default async function RestaurantesPage() {
  const [blocks, restaurants] = await Promise.all([
    getPageBlocks("restaurantes"),
    getItems("restaurant", 20),
  ]);

  const lead = restaurants[0] ?? null;
  const second = restaurants[1] ?? lead;
  const third = restaurants[2] ?? second;
  const experienceBlock = getBlock(blocks, "restaurantes_experience");
  const bannerBlock = getBlock(blocks, "restaurantes_banner");

  const heroMediaUrl = lead?.video_url ?? lead?.image_url ?? bannerBlock?.media_url ?? null;
  const heroMediaType = lead?.video_url ? "video" : lead?.image_url ? "image" : bannerBlock?.media_type;
  const bandMediaUrl =
    experienceBlock?.media_url ?? second?.video_url ?? second?.image_url ?? bannerBlock?.media_url ?? heroMediaUrl;
  const bandMediaType =
    experienceBlock?.media_type ?? (second?.video_url ? "video" : second?.image_url ? "image" : bannerBlock?.media_type);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Restaurantes Vento Group",
    description: "Portafolio de restaurantes y experiencias gastronómicas de Vento Group.",
    itemListElement: restaurants.map((restaurant, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: restaurant.title,
      description: truncateForMeta(restaurant.excerpt ?? restaurant.body, 140) || undefined,
      url: absoluteUrl(getItemHref(restaurant)),
    })),
  };

  return (
    <>
      <StructuredData data={itemListSchema} />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow="Vento Group"
          title="Restaurantes"
          copy="Conceptos distintos conectados por una misma forma de entender la comida, el servicio y los momentos que vale la pena repetir."
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Restaurantes Vento Group"
          primaryAction={{ label: "Explorar portafolio", href: "#portafolio" }}
          secondaryAction={{ label: "Planear un evento", href: "/eventos" }}
        />

        <EditorialIntro
          eyebrow="Nuestra forma de recibir"
          title="Cada lugar tiene una historia, una atmósfera y una razón para volver."
          copy={
            experienceBlock?.body ??
            "Vento Group reúne conceptos gastronómicos con identidades propias. Desde la cocina hasta el último gesto de servicio, cada restaurante se diseña como una experiencia completa y coherente."
          }
          action={{ label: "Conocer el grupo", href: "/ecosistema" }}
          aside={
            <dl className={styles.stats}>
              <div>
                <dt>Conceptos activos</dt>
                <dd>{String(restaurants.length).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Ciudad base</dt>
                <dd>Cúcuta</dd>
              </div>
            </dl>
          }
        />

        <section className={styles.mosaic} data-header-theme="light" aria-label="Ambientes Vento Group">
          <div className={`${styles.shell} ${styles.mosaicGrid}`}>
            <Reveal className={styles.mosaicMain} mode="once" threshold={0.08}>
              <MediaSlot
                label={lead?.title ?? "Restaurante Vento Group"}
                mediaUrl={lead?.video_url ?? lead?.image_url ?? null}
                mediaType={lead?.video_url ? "video" : "image"}
              />
            </Reveal>

            <Reveal className={styles.mosaicSecondary} delayMs={90} mode="once" threshold={0.08}>
              <MediaSlot
                label={second?.title ?? "Experiencia gastronómica Vento"}
                mediaUrl={second?.video_url ?? second?.image_url ?? null}
                mediaType={second?.video_url ? "video" : "image"}
              />
            </Reveal>

            <Reveal className={styles.mosaicTertiary} delayMs={150} mode="once" threshold={0.08}>
              <MediaSlot
                label={third?.title ?? "Hospitalidad Vento Group"}
                mediaUrl={third?.video_url ?? third?.image_url ?? null}
                mediaType={third?.video_url ? "video" : "image"}
              />
            </Reveal>
          </div>
        </section>

        <div className={styles.portfolioWrap} id="portafolio">
          <HomeVenueExperience
            items={restaurants.map((restaurant) => ({
              id: restaurant.id,
              title: restaurant.title,
              href: getItemHref(restaurant),
              excerpt: restaurant.excerpt,
              body: restaurant.body,
              location: restaurant.location,
              schedule: restaurant.schedule_text,
              imageUrl: restaurant.image_url,
              videoUrl: restaurant.video_url,
              actionLabel: restaurant.action_label,
            }))}
          />
        </div>

        <section className={styles.occasions} data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Para cada ocasión"
              title="Distintas formas de encontrarnos."
              copy="Nuestros conceptos acompañan desde una visita espontánea hasta una celebración diseñada alrededor de cada invitado."
              action={{ label: "Consultar eventos", href: "/eventos" }}
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

        <EditorialMediaBand
          eyebrow="Hospitalidad en movimiento"
          title={bannerBlock?.title ?? "La experiencia empieza mucho antes de llegar a la mesa."}
          copy={
            bannerBlock?.body ??
            "Producto, ambiente, personas y operación trabajan juntos para que cada visita se sienta sencilla, cercana y memorable."
          }
          mediaUrl={bandMediaUrl}
          mediaType={bandMediaType}
          mediaLabel="Hospitalidad y gastronomía Vento Group"
          action={{ label: "Trabaja con nosotros", href: "/empleos" }}
        />

        <section className={styles.indexSection} data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Directorio"
              title="Todos nuestros restaurantes."
              copy="Explora cada concepto, conoce sus horarios y encuentra el espacio adecuado para tu próxima visita."
            />

            <div className={styles.indexList}>
              {restaurants.map((restaurant, index) => (
                <Reveal key={restaurant.id} delayMs={Math.min(index * 45, 260)} mode="once" threshold={0.06}>
                  <Link className={styles.indexRow} href={getItemHref(restaurant)}>
                    <span className={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.indexName}>{restaurant.title}</span>
                    <span className={styles.indexMeta}>
                      {restaurant.location ?? restaurant.schedule_text ?? "Cúcuta, Colombia"}
                    </span>
                    <span className={styles.indexArrow} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EditorialClosing
          eyebrow="Reservas y celebraciones"
          title="Hagamos espacio para algo memorable."
          copy="Cuéntanos qué estás planeando y encontraremos el restaurante, formato y experiencia adecuados para la ocasión."
          actions={[
            { label: "Planear un evento", href: "/eventos" },
            { label: "Contacto general", href: "mailto:hola@ventogroup.co" },
          ]}
          dark
        />
      </main>

      <SiteFooter venues={restaurants.map((restaurant) => restaurant.title)} />
    </>
  );
}
