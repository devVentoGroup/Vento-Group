import type { Metadata } from "next";
import Link from "next/link";

import { HomeHeroIntro } from "@/components/home-hero-intro";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import {
  getHeroSlides,
  getHomeEditorialBands,
  getItemHref,
  getItems,
  getPageBlocks,
} from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./home-redesign.module.css";

export const metadata: Metadata = {
  title: "Vento Group | Gastronomía, hospitalidad y tecnología",
  description:
    "Restaurantes, experiencias, talento y tecnología conectados bajo una misma visión de hospitalidad.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vento Group | Gastronomía, hospitalidad y tecnología",
    description:
      "Restaurantes, experiencias, talento y tecnología conectados bajo una misma visión de hospitalidad.",
    url: "/",
    type: "website",
  },
};

export default async function HomePage() {
  const [blocks, restaurants, jobs, services, apps, events] = await Promise.all([
    getPageBlocks("home"),
    getItems("restaurant", 12),
    getItems("job", 2),
    getItems("service", 3),
    getItems("app", 8),
    getItems("event", 3),
  ]);

  const heroSlides = getHeroSlides(blocks).filter((slide) => Boolean(slide.mediaUrl));
  const editorialBands = getHomeEditorialBands(blocks);
  const introBand = editorialBands[0] ?? null;
  const statementBand = editorialBands[1] ?? introBand;
  const eventBlock = blocks.find((block) => block.block_key === "home_event_spaces_feature") ?? null;
  const imageBanner = blocks.find((block) => block.block_key === "home_image_banner") ?? null;

  const editorialMedia =
    statementBand?.mediaUrl ?? introBand?.mediaUrl ?? restaurants[0]?.video_url ?? restaurants[0]?.image_url ?? null;
  const eventMedia =
    eventBlock?.media_url ?? events[0]?.video_url ?? events[0]?.image_url ?? imageBanner?.media_url ?? null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vento Group",
    url: absoluteUrl("/"),
    description: "Ecosistema de restaurantes, hospitalidad, talento y tecnología de Vento Group.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vento Group",
    url: absoluteUrl("/"),
  };

  const featuredItemsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Restaurantes Vento Group",
    itemListElement: restaurants.slice(0, 8).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: truncateForMeta(item.excerpt, 140) || undefined,
      url: absoluteUrl(getItemHref(item)),
    })),
  };

  const cards = [
    {
      number: "01",
      title: "Trabaja con nosotros",
      copy:
        jobs[0]?.excerpt ??
        "Construimos equipos donde el oficio, la curiosidad y el crecimiento tienen un lugar real.",
      href: "/empleos",
      label: "Ver oportunidades",
    },
    {
      number: "02",
      title: "Servicios para hospitalidad",
      copy:
        services[0]?.excerpt ??
        "Operación, tecnología y acompañamiento para convertir buenas ideas en experiencias consistentes.",
      href: "/servicios",
      label: "Explorar servicios",
    },
    {
      number: "03",
      title: "Hablemos",
      copy:
        "Alianzas, eventos, reservas y proyectos que pueden crecer dentro del ecosistema Vento.",
      href: "mailto:hola@ventogroup.co",
      label: "Contactar al grupo",
    },
  ];

  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema, featuredItemsSchema]} />

      <main className={styles.home}>
        <HomeHeroIntro
          slides={heroSlides}
          venues={restaurants.slice(0, 11).map((item) => ({
            title: item.title,
            href: getItemHref(item),
          }))}
        />

        <section className={`${styles.section} ${styles.manifesto}`} data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.manifestoGrid}>
              <Reveal mode="once" threshold={0.15}>
                <span className={styles.eyebrow}>Vento Group</span>
                <h2 className={`${styles.display} ${styles.manifestoTitle}`}>
                  Creamos lugares a los que vale la pena volver.
                </h2>
              </Reveal>

              <Reveal className={styles.manifestoAside} delayMs={100} mode="once" threshold={0.15}>
                <p className={styles.copy}>
                  {introBand?.body ??
                    "Somos un grupo de restaurantes y proyectos conectados por una misma idea: la hospitalidad se construye en cada detalle, desde la cocina hasta la tecnología que sostiene la operación."}
                </p>
                <Link className={styles.textLink} href="/ecosistema">
                  Conocer Vento Group
                </Link>
              </Reveal>
            </div>

            <div className={styles.signature} aria-hidden="true">
              <div className={styles.signatureTrack}>
                <span>Restaurantes</span>
                <span>Hospitalidad</span>
                <span>Talento</span>
                <span>Tecnología</span>
                <span>Restaurantes</span>
                <span>Hospitalidad</span>
                <span>Talento</span>
                <span>Tecnología</span>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.portfolio}`} data-header-theme="dark">
          <div className={styles.shell}>
            <div className={styles.portfolioHeader}>
              <Reveal mode="once" threshold={0.15}>
                <span className={styles.eyebrow}>Nuestros restaurantes</span>
                <h2 className={`${styles.display} ${styles.portfolioTitle}`}>Una identidad para cada momento.</h2>
              </Reveal>

              <Reveal delayMs={100} mode="once" threshold={0.15}>
                <p className={styles.copy}>
                  Desde encuentros cotidianos hasta celebraciones memorables, cada marca del grupo tiene una voz propia y
                  una forma distinta de recibir.
                </p>
              </Reveal>
            </div>

            <div className={styles.venueRail}>
              {restaurants.slice(0, 8).map((restaurant, index) => (
                <Reveal key={restaurant.id} delayMs={Math.min(index * 55, 280)} mode="once" threshold={0.08}>
                  <Link className={styles.venueRow} href={getItemHref(restaurant)}>
                    <span className={styles.venueNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span className={styles.venueName}>{restaurant.title}</span>
                    <span className={styles.venueMeta}>
                      {restaurant.location ?? restaurant.excerpt ?? "Cúcuta, Colombia"}
                    </span>
                    <span className={styles.venueArrow} aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.editorial}`} data-header-theme="light">
          <div className={`${styles.shell} ${styles.editorialGrid}`}>
            <Reveal className={styles.editorialMedia} mode="once" threshold={0.12}>
              <MediaSlot
                label={statementBand?.title ?? "Hospitalidad Vento Group"}
                mediaUrl={editorialMedia}
                mediaType={statementBand?.mediaType ?? (restaurants[0]?.video_url ? "video" : "image")}
              />
            </Reveal>

            <Reveal className={styles.editorialCopy} delayMs={110} mode="once" threshold={0.15}>
              <span className={styles.eyebrow}>El oficio detrás de la experiencia</span>
              <h2 className={`${styles.display} ${styles.editorialTitle}`}>
                {statementBand?.title ?? "Lo memorable no ocurre por accidente."}
              </h2>
              <p className={styles.copy}>
                {statementBand?.body ??
                  "Diseñamos cada experiencia como un sistema completo: producto, servicio, ambiente, personas y operación. Esa disciplina permite que la hospitalidad se sienta natural."}
              </p>
              <Link className={styles.textLink} href={statementBand?.ctaUrl ?? "/restaurantes"}>
                {statementBand?.ctaLabel ?? "Explorar restaurantes"}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.eventBand}`} data-header-theme="dark">
          <div className={styles.eventMedia}>
            <MediaSlot
              label={eventBlock?.title ?? events[0]?.title ?? "Eventos Vento Group"}
              mediaUrl={eventMedia}
              mediaType={eventBlock?.media_type ?? (events[0]?.video_url ? "video" : "image")}
            />
          </div>

          <div className={`${styles.shell} ${styles.eventContent}`}>
            <Reveal mode="once" threshold={0.1}>
              <span className={styles.eyebrow}>Eventos y celebraciones</span>
              <h2 className={`${styles.display} ${styles.eventTitle}`}>
                {eventBlock?.title ?? "Momentos importantes merecen un lugar con carácter."}
              </h2>
            </Reveal>

            <Reveal className={styles.eventAside} delayMs={100} mode="once" threshold={0.1}>
              <p className={styles.copy}>
                {eventBlock?.body ??
                  events[0]?.excerpt ??
                  "Reuniones privadas, celebraciones y experiencias de marca diseñadas alrededor de cada ocasión."}
              </p>
              <Link className={styles.textLink} href={eventBlock?.cta_url ?? "/eventos"}>
                {eventBlock?.cta_label ?? "Planear un evento"}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.cards}`} data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.cardsHeader}>
              <Reveal mode="once" threshold={0.15}>
                <span className={styles.eyebrow}>Más que restaurantes</span>
                <h2 className={`${styles.display} ${styles.cardsTitle}`}>Un grupo construido para crecer.</h2>
              </Reveal>

              <Reveal delayMs={100} mode="once" threshold={0.15}>
                <p className={styles.copy}>
                  Talento, operación y nuevas alianzas forman parte de la misma visión de largo plazo.
                </p>
              </Reveal>
            </div>

            <div className={styles.cardGrid}>
              {cards.map((card, index) => (
                <Reveal key={card.title} delayMs={index * 90} mode="once" threshold={0.12}>
                  <article className={styles.card}>
                    <span className={styles.cardNumber}>{card.number}</span>
                    <h3>{card.title}</h3>
                    <p>{card.copy}</p>
                    <a className={styles.textLink} href={card.href}>
                      {card.label}
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ecosystem} data-header-theme="dark">
          <div className={styles.shell}>
            <Reveal mode="once" threshold={0.15}>
              <span className={styles.eyebrow}>Vento OS</span>
              <h2 className={`${styles.display} ${styles.ecosystemTitle}`}>La tecnología también forma parte de la hospitalidad.</h2>
              <p className={`${styles.copy} ${styles.ecosystemCopy}`}>
                Conectamos operación, talento, clientes y decisiones dentro de una misma arquitectura digital creada para
                el grupo.
              </p>
            </Reveal>

            <Reveal className={styles.appList} delayMs={100} mode="once" threshold={0.15}>
              {apps.map((app) => (
                <Link key={app.id} href={app.action_url && app.action_url !== "#" ? app.action_url : "/ecosistema"}>
                  {app.title}
                </Link>
              ))}
            </Reveal>

            <Reveal className={styles.ecosystemCta} delayMs={160} mode="once" threshold={0.15}>
              <Link className={styles.textLink} href="/ecosistema">
                Explorar el ecosistema
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter venues={restaurants.map((item) => item.title)} />
    </>
  );
}
