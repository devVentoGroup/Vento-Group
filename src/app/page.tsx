import type { Metadata } from "next";
import Link from "next/link";

import { HeroMediaCarousel } from "@/components/hero-media-carousel";
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
  const heroVenueNames = restaurants
    .slice(0, 6)
    .map((item) => item.title.toUpperCase());
  const quickCards: Array<{
    title: string;
    body: string;
    href: string;
    cta: string;
    mediaUrl: string | null;
    mediaType: "image" | "video";
  }> = [
      {
        title: "Gift Vouchers",
        body: "Experiencias para regalar en restaurantes y espacios del grupo.",
        href: "/servicios",
        cta: "Shop",
        mediaUrl: services[0]?.video_url ?? services[0]?.image_url ?? null,
        mediaType: services[0]?.video_url ? "video" : ("image" as const),
      },
      {
        title: "Careers",
        body: "Vacantes activas y rutas de crecimiento para equipos Vento.",
        href: "/empleos",
        cta: "Explore",
        mediaUrl: jobs[0]?.video_url ?? jobs[0]?.image_url ?? null,
        mediaType: jobs[0]?.video_url ? "video" : ("image" as const),
      },
      {
        title: "Contact",
        body: "Alianzas, reservas de eventos y oportunidades estratégicas.",
        href: "mailto:hola@ventogroup.co",
        cta: "Get in touch",
        mediaUrl: events[0]?.video_url ?? events[0]?.image_url ?? null,
        mediaType: events[0]?.video_url ? "video" : ("image" as const),
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
      <main>
        <section className="home-hero home-hero-editorial">
          <HeroMediaCarousel slides={heroSlides} variant="immersive" />
          <div className="home-hero-shade" aria-hidden="true" />

          <div className="container home-hero-editorial-shell">
            <Reveal className="home-hero-editorial-top">
              <div className="eyebrow home-hero-editorial-eyebrow">
                {hero?.subtitle ?? "Hospitality ecosystem"}
              </div>
            </Reveal>

            <Reveal delayMs={40} className="home-hero-wordmark-wrap">
              <h1 className="home-hero-wordmark" aria-label={hero?.title ?? "Vento Group"}>
                <span className="home-hero-word home-hero-word-top">VENTO</span>
                <span className="home-hero-word home-hero-word-bottom">GROUP</span>
              </h1>
            </Reveal>

            <Reveal delayMs={100} className="home-hero-center-stack">
              {heroVenueNames.map((name) => (
                <span key={name} className="home-hero-center-stack-item">
                  {name}
                </span>
              ))}
            </Reveal>

            <Reveal delayMs={160} className="home-hero-editorial-footer">
              <p className="home-hero-editorial-copy">
                {hero?.body ??
                  "Conectamos restaurantes, talento, tecnologia y experiencias bajo una sola direccion de hospitalidad."}
              </p>

              <div className="home-hero-editorial-actions">
                <Link className="button button-outline button-outline-light" href="/restaurantes">
                  Our venues
                </Link>
                <Link className="button button-outline button-outline-light" href={hero?.cta_url ?? "/ecosistema"}>
                  {hero?.cta_label ?? "Explore ecosystem"}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section home-intro-section">
          <div className="container home-intro-grid">
            <Reveal className="home-intro-main">
              <h2 className="home-display-title">
                {introBand?.title ?? "Experience unforgettable hospitality within the Vento ecosystem."}
              </h2>
              <div className="home-intro-main-media">
                <MediaSlot
                  label={introBand?.title ?? "Hospitality intro"}
                  mediaUrl={introBand?.mediaUrl ?? restaurants[0]?.image_url ?? null}
                  mediaType={introBand?.mediaType ?? (restaurants[0]?.video_url ? "video" : "image")}
                />
              </div>
            </Reveal>

            <Reveal delayMs={120} className="home-intro-side">
              <p>
                {introBand?.body ??
                  "Vento Group integra restaurantes, talento, servicios y eventos bajo una misma visión de hospitalidad."}
              </p>
              <p>
                Cada unidad se conecta a nivel operativo y de marca para mantener estándar premium en experiencia de
                cliente, cultura de equipo y ejecución.
              </p>
              <Link className="button button-outline" href={introBand?.ctaUrl ?? "/restaurantes"}>
                {introBand?.ctaLabel ?? "Our venues"}
              </Link>
            </Reveal>
          </div>
        </section>

        <HomeVenuesShowcase items={restaurants} />

        <section className="section home-statement-section">
          <div className="container home-statement-grid">
            <Reveal className="home-statement-side">
              <p>
                Establecidos para escalar hospitalidad con diseño, consistencia operativa y experiencias memorables en
                cada punto de contacto.
              </p>
              <Link className="button button-outline" href="/restaurantes">
                Our venues
              </Link>
            </Reveal>

            <Reveal delayMs={100} className="home-statement-main">
              <h2 className="home-display-title home-display-title-tight">
                {statementBand?.title ??
                  "With craft, dedication and top talent, hospitality becomes a complete experience."}
              </h2>
              <div className="home-statement-media">
                <MediaSlot
                  label={statementBand?.title ?? "Statement media"}
                  mediaUrl={statementBand?.mediaUrl ?? restaurants[1]?.image_url ?? null}
                  mediaType={statementBand?.mediaType ?? (restaurants[1]?.video_url ? "video" : "image")}
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container home-event-grid">
            <Reveal className="home-event-media">
              <MediaSlot
                label={eventSpacesFeature?.title ?? "Event spaces feature"}
                mediaUrl={eventSpacesFeature?.mediaUrl ?? restaurants[2]?.image_url ?? null}
                mediaType={eventSpacesFeature?.mediaType ?? (restaurants[2]?.video_url ? "video" : "image")}
              />
            </Reveal>

            <Reveal delayMs={120} className="home-event-panel">
              <h2>{eventSpacesFeature?.title ?? "Unique event spaces for any occasion."}</h2>
              <p>
                {eventSpacesFeature?.body ??
                  "Espacios diseñados para reuniones privadas, activaciones de marca y celebraciones de alto impacto."}
              </p>
              <p>
                Desde formato íntimo hasta eventos corporativos, el ecosistema Vento conecta venue, operación y
                servicio en una ejecución coordinada.
              </p>
              <Link className="button button-outline" href={eventSpacesFeature?.ctaUrl ?? "/eventos"}>
                {eventSpacesFeature?.ctaLabel ?? "Enquire now"}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="home-cards-grid">
              {quickCards.map((card) => (
                <article key={card.title} className="home-cta-card">
                  <div className="home-cta-card-media">
                    <MediaSlot
                      label={card.title}
                      mediaUrl={card.mediaUrl}
                      mediaType={card.mediaType}
                    />
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

        <section className="section home-ecosystem-strip-section">
          <div className="container">
            <Reveal className="home-ecosystem-strip">
              <div className="eyebrow">Ecosystem</div>
              <div className="home-ecosystem-links">
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
          </div>
        </section>
      </main>
      <SiteFooter venues={restaurants.map((item) => item.title)} />
    </>
  );
}
