import type { Metadata } from "next";
import Link from "next/link";

import { HomeHeroIntro } from "@/components/home-hero-intro";
import { HomeVenuesShowcase } from "@/components/home-venues-showcase";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import {
  getBlock,
  getHeroSlides,
  getHomeEditorialBands,
  getHomeEventSpacesFeature,
  getItemHref,
  getItems,
  getPageBlocks,
  type HeroSlide,
} from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vento Group | Hospitality Ecosystem",
  description: "Restaurantes, eventos, empleos y plataformas digitales conectadas en un solo ecosistema.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vento Group | Hospitality Ecosystem",
    description: "Restaurantes, eventos, empleos y plataformas digitales conectadas en un solo ecosistema.",
    url: "/",
    type: "website",
  },
};

export default async function HomePage() {
  const [blocks, restaurants, jobs, services, events, apps] = await Promise.all([
    getPageBlocks("home"),
    getItems("restaurant", 12),
    getItems("job", 2),
    getItems("service", 2),
    getItems("event", 2),
    getItems("app", 6),
  ]);

  const hero = getBlock(blocks, "hero_main");
  const heroSlides = getHeroSlides(blocks);
  const editorialBands = getHomeEditorialBands(blocks);
  const introBand = editorialBands[0] ?? null;
  const statementBand = editorialBands[1] ?? introBand;
  const eventSpacesFeature = getHomeEventSpacesFeature(blocks);
  const heroSlidesWithMedia = heroSlides.filter((slide) => Boolean(slide.mediaUrl));

  const fallbackHeroSlidesRaw: HeroSlide[] = [
    {
      id: "fallback-restaurant-1",
      title: restaurants[0]?.title ?? "Vento Group",
      subtitle: restaurants[0]?.excerpt ?? "Hospitality ecosystem",
      ctaLabel: "Explorar restaurantes",
      ctaUrl: restaurants[0] ? getItemHref(restaurants[0]) : "/restaurantes",
      mediaUrl: restaurants[0]?.video_url ?? restaurants[0]?.image_url ?? null,
      mediaType: restaurants[0]?.video_url ? "video" : "image",
      sortOrder: 10,
    },
    {
      id: "fallback-editorial-1",
      title: introBand?.title ?? restaurants[1]?.title ?? "Experiences",
      subtitle:
        introBand?.subtitle ??
        introBand?.body ??
        restaurants[1]?.excerpt ??
        "Crafted hospitality across venues, events and brand experiences.",
      ctaLabel: introBand?.ctaLabel ?? "Our venues",
      ctaUrl: introBand?.ctaUrl ?? "/restaurantes",
      mediaUrl:
        introBand?.mediaUrl ??
        restaurants[1]?.video_url ??
        restaurants[1]?.image_url ??
        null,
      mediaType:
        introBand?.mediaType ??
        (restaurants[1]?.video_url ? "video" : "image"),
      sortOrder: 20,
    },
    {
      id: "fallback-event-spaces",
      title: eventSpacesFeature?.title ?? restaurants[2]?.title ?? "Eventos privados",
      subtitle:
        eventSpacesFeature?.subtitle ??
        eventSpacesFeature?.body ??
        restaurants[2]?.excerpt ??
        "Spaces designed for private dining, celebrations and corporate moments.",
      ctaLabel: eventSpacesFeature?.ctaLabel ?? "Consultar ahora",
      ctaUrl: eventSpacesFeature?.ctaUrl ?? "/eventos",
      mediaUrl:
        eventSpacesFeature?.mediaUrl ??
        restaurants[2]?.video_url ??
        restaurants[2]?.image_url ??
        null,
      mediaType:
        eventSpacesFeature?.mediaType ??
        (restaurants[2]?.video_url ? "video" : "image"),
      sortOrder: 30,
    },
  ];

  const fallbackHeroSlides = fallbackHeroSlidesRaw.filter((slide) => Boolean(slide.mediaUrl));
  const resolvedHeroSlides = heroSlidesWithMedia.length > 0 ? heroSlidesWithMedia : fallbackHeroSlides;
  const quickCards: Array<{
    title: string;
    body: string;
    href: string;
    cta: string;
    mediaUrl: string | null;
    mediaType: "image" | "video";
  }> = [
    {
      title: "Bonos",
      body: "Experiencias para regalar en restaurantes y espacios del grupo.",
      href: "/servicios",
      cta: "Comprar",
      mediaUrl: services[0]?.video_url ?? services[0]?.image_url ?? null,
      mediaType: services[0]?.video_url ? "video" : "image",
    },
    {
      title: "Empleos",
      body: "Vacantes activas y rutas de crecimiento para equipos Vento.",
      href: "/empleos",
      cta: "Ver vacantes",
      mediaUrl: jobs[0]?.video_url ?? jobs[0]?.image_url ?? null,
      mediaType: jobs[0]?.video_url ? "video" : "image",
    },
    {
      title: "Contacto",
      body: "Alianzas, reservas de eventos y oportunidades estratégicas.",
      href: "mailto:hola@ventogroup.co",
      cta: "Escribir",
      mediaUrl: events[0]?.video_url ?? events[0]?.image_url ?? null,
      mediaType: events[0]?.video_url ? "video" : "image",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vento Group",
    url: absoluteUrl("/"),
    description: "Ecosistema de restaurantes, talento, servicios y eventos de Vento Group.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vento Group",
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const featuredItemsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vento Group Featured",
    itemListElement: [...restaurants.slice(0, 3), ...events.slice(0, 3)].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      description: truncateForMeta(item.excerpt, 140) || undefined,
      url: absoluteUrl(getItemHref(item)),
    })),
  };

  return (
    <>
      <StructuredData data={[organizationSchema, websiteSchema, featuredItemsSchema]} />
      <SiteHeader />
      <main className="darling-home">
        <HomeHeroIntro
          slides={resolvedHeroSlides}
          venues={restaurants.slice(0, 11).map((item) => ({ title: item.title, href: getItemHref(item) }))}
        />

        <section className="darling-section darling-intro-section">
          <div className="container darling-intro-grid">
            <Reveal className="darling-intro-copy" mode="toggle" threshold={0.22}>
              <span className="darling-kicker">The Vento touch</span>
              <h2>
                {introBand?.title ?? "Hospitalidad inolvidable construida desde restaurantes, talento y operación."}
              </h2>
            </Reveal>

            <Reveal className="darling-intro-side" delayMs={100} mode="toggle" threshold={0.22}>
              <p>
                {introBand?.body ??
                  "Vento Group integra restaurantes, talento, servicios y eventos bajo una misma visión de hospitalidad premium, con ejecución consistente en cada punto de contacto."}
              </p>
              <Link className="button button-outline" href={introBand?.ctaUrl ?? "/restaurantes"}>
                {introBand?.ctaLabel ?? "Nuestros restaurantes"}
              </Link>
            </Reveal>

            <Reveal className="darling-intro-media" mode="toggle" threshold={0.22}>
              <MediaSlot
                label={introBand?.title ?? "Hospitality intro"}
                mediaUrl={introBand?.mediaUrl ?? restaurants[0]?.image_url ?? null}
                mediaType={introBand?.mediaType ?? (restaurants[0]?.video_url ? "video" : "image")}
              />
            </Reveal>
          </div>
        </section>

        <section className="darling-section darling-venues-section">
          <Reveal className="container" mode="toggle" threshold={0.18}>
            <HomeVenuesShowcase items={restaurants} />
          </Reveal>
        </section>

        <section className="darling-section darling-statement-section">
          <div className="container darling-statement-grid">
            <Reveal className="darling-statement-media" mode="toggle" threshold={0.22}>
              <MediaSlot
                label={statementBand?.title ?? "Statement media"}
                mediaUrl={statementBand?.mediaUrl ?? restaurants[1]?.image_url ?? null}
                mediaType={statementBand?.mediaType ?? (restaurants[1]?.video_url ? "video" : "image")}
              />
            </Reveal>

            <Reveal className="darling-statement-copy" delayMs={100} mode="toggle" threshold={0.22}>
              <span className="darling-kicker">Crafted scale</span>
              <h2>
                {statementBand?.title ??
                  "Con oficio, dedicación y gran talento, la hospitalidad se vuelve una experiencia completa."}
              </h2>
              <p>
                Establecidos para escalar hospitalidad con diseño, consistencia operativa y experiencias memorables en
                cada venue, evento y plataforma del grupo.
              </p>
              <Link className="button button-outline" href="/restaurantes">
                Ver restaurantes
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="darling-section darling-event-section">
          <div className="container darling-event-grid">
            <Reveal className="darling-event-copy" mode="toggle" threshold={0.22}>
              <span className="darling-kicker">Eventos</span>
              <h2>{eventSpacesFeature?.title ?? "Espacios únicos para cualquier ocasión."}</h2>
              <p>
                {eventSpacesFeature?.body ??
                  "Espacios diseñados para reuniones privadas, activaciones de marca y celebraciones de alto impacto."}
              </p>
              <p>
                Desde formatos íntimos hasta eventos corporativos, Vento conecta venue, operación y servicio bajo una
                sola dirección.
              </p>
              <Link className="button button-outline" href={eventSpacesFeature?.ctaUrl ?? "/eventos"}>
                {eventSpacesFeature?.ctaLabel ?? "Consultar ahora"}
              </Link>
            </Reveal>

            <Reveal className="darling-event-media" delayMs={120} mode="toggle" threshold={0.22}>
              <MediaSlot
                label={eventSpacesFeature?.title ?? "Event spaces feature"}
                mediaUrl={eventSpacesFeature?.mediaUrl ?? restaurants[2]?.image_url ?? null}
                mediaType={eventSpacesFeature?.mediaType ?? (restaurants[2]?.video_url ? "video" : "image")}
              />
            </Reveal>
          </div>
        </section>

        <section className="darling-section darling-closing-section">
          <div className="container darling-closing-grid">
            <Reveal className="darling-closing-copy" mode="toggle" threshold={0.22}>
              <span className="darling-kicker">Ecosystem</span>
              <h2>Explora el ecosistema completo de Vento entre restaurantes, talento y herramientas operativas.</h2>
              <p>
                Vento Group conecta restaurantes, eventos, empleos, servicios y flujos operativos desde una misma capa
                estratégica.
              </p>

              <div className="darling-ecosystem-links">
                {apps.map((app) => (
                  <a key={app.id} href={app.action_url ?? "/ecosistema"}>
                    {app.title}
                  </a>
                ))}
              </div>

              <Link href="/ecosistema" className="section-link">
                Entrar a Vento OS
              </Link>
            </Reveal>

            <Reveal className="darling-card-grid" delayMs={120} mode="toggle" threshold={0.22}>
              {quickCards.map((card) => (
                <article key={card.title} className="darling-cta-card">
                  <div className="darling-cta-card-media">
                    <MediaSlot label={card.title} mediaUrl={card.mediaUrl} mediaType={card.mediaType} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <a className="button button-outline" href={card.href}>
                    {card.cta}
                  </a>
                </article>
              ))}
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter venues={restaurants.map((item) => item.title)} />
    </>
  );
}
