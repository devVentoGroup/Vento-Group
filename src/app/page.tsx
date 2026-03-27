import type { Metadata } from "next";
import Link from "next/link";

import { HomeEditorialBand } from "@/components/editorial-band";
import { HeroMediaCarousel } from "@/components/hero-media-carousel";
import { ItemCard } from "@/components/item-card";
import { ItemCarousel } from "@/components/item-carousel";
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
    getItems("restaurant", 3),
    getItems("job", 3),
    getItems("service", 3),
    getItems("event", 3),
    getItems("app", 6),
  ]);

  const hero = getBlock(blocks, "hero_main");
  const heroSlides = getHeroSlides(blocks);
  const editorialBands = getHomeEditorialBands(blocks).slice(0, 2);
  const eventSpacesFeature = getHomeEventSpacesFeature(blocks);
  const eventSpaceCards = restaurants.slice(0, 2);
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
        <section className="hero">
          <div className="container hero-grid">
            <Reveal>
              <article className="hero-panel">
                <div className="eyebrow">{hero?.subtitle ?? "Grupo gastronomico y tecnologico"}</div>
                <h1 className="hero-title">{hero?.title ?? "Vento Group"}</h1>
                <p className="hero-copy">
                  {hero?.body ??
                    "Conectamos experiencias de restaurantes con tecnologia, talento y servicios para escalar la operacion."}
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href={hero?.cta_url ?? "/ecosistema"}>
                    {hero?.cta_label ?? "Explorar ecosistema"}
                  </Link>
                  <Link className="button button-ghost" href="/restaurantes">
                    Ver restaurantes
                  </Link>
                </div>
              </article>
            </Reveal>

            <Reveal delayMs={140}>
              <HeroMediaCarousel slides={heroSlides} />
            </Reveal>
          </div>
        </section>

        {editorialBands.length > 0 ? (
          <section className="section">
            <div className="container editorial-stack">
              {editorialBands.map((band, index) => (
                <Reveal key={band.id} delayMs={60 + index * 110}>
                  <HomeEditorialBand band={band} reverse={index % 2 === 1} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">{eventSpacesFeature?.title ?? "Event Spaces"}</h2>
                <p className="section-copy">
                  {eventSpacesFeature?.body ??
                    "Discover venues crafted for private celebrations, brand activations and corporate gatherings."}
                </p>
              </div>
              <Link href={eventSpacesFeature?.ctaUrl ?? "/eventos"} className="section-link">
                {eventSpacesFeature?.ctaLabel ?? "Planear evento"}
              </Link>
            </Reveal>

            <Reveal delayMs={120} className="event-spaces-grid">
              <div className="event-spaces-feature">
                <MediaSlot
                  label={eventSpacesFeature?.title ?? "Event spaces feature"}
                  mediaUrl={eventSpacesFeature?.mediaUrl ?? null}
                  mediaType={eventSpacesFeature?.mediaType}
                />
              </div>
              <div className="event-spaces-side">
                {eventSpaceCards.map((item) => (
                  <article key={item.id} className="event-space-mini-card">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt ?? "Venue listo para eventos y experiencias privadas."}</p>
                    <Link href={item.action_url ?? "/restaurantes"}>{item.action_label ?? "Ver venue"}</Link>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Ecosistema</h2>
                <p className="section-copy">Links centrales para descargar apps y entrar a Vento OS.</p>
              </div>
              <Link href="/ecosistema" className="section-link">
                Ver todo
              </Link>
            </Reveal>
            <Reveal delayMs={100} className="cards">
              {apps.slice(0, 3).map((item) => (
                <ItemCard key={item.id} item={item} mediaLabel={`Media ${item.title}`} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Restaurantes</h2>
                <p className="section-copy">Marcas, experiencias y ubicaciones activas del grupo.</p>
              </div>
              <Link href="/restaurantes" className="section-link">
                Ver todos
              </Link>
            </Reveal>
            <Reveal delayMs={120}>
              <ItemCarousel items={restaurants} mediaPrefix="Restaurante" />
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Gift, Careers & Contact</h2>
                <p className="section-copy">
                  Tres accesos directos para convertir visitas en experiencias, talento y nuevas oportunidades.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={100} className="quick-links-grid">
              <Link href="/servicios" className="quick-link-card">
                <span className="quick-link-title">Gift Cards</span>
                <span className="quick-link-body">Diseña regalos corporativos o experiencias para clientes y equipos.</span>
                <span className="quick-link-cta">Explorar</span>
              </Link>
              <Link href="/empleos" className="quick-link-card">
                <span className="quick-link-title">Careers</span>
                <span className="quick-link-body">Conecta talento con vacantes activas en toda la operación Vento.</span>
                <span className="quick-link-cta">Postularse</span>
              </Link>
              <a href="mailto:hola@ventogroup.co" className="quick-link-card">
                <span className="quick-link-title">Contact</span>
                <span className="quick-link-body">Hablemos de alianzas, eventos y oportunidades estratégicas.</span>
                <span className="quick-link-cta">Escribir</span>
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Empleos</h2>
                <p className="section-copy">Vacantes y oportunidades para crecer dentro del ecosistema.</p>
              </div>
              <Link href="/empleos" className="section-link">
                Ver vacantes
              </Link>
            </Reveal>
            <Reveal delayMs={100} className="cards">
              {jobs.map((item) => (
                <ItemCard key={item.id} item={item} mediaLabel={`Vacante ${item.title}`} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Servicios</h2>
                <p className="section-copy">Capacidades transversales para operacion, tecnologia y expansion.</p>
              </div>
              <Link href="/servicios" className="section-link">
                Ver servicios
              </Link>
            </Reveal>
            <Reveal delayMs={100} className="cards">
              {services.map((item) => (
                <ItemCard key={item.id} item={item} mediaLabel={`Servicio ${item.title}`} />
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Reveal className="section-header">
              <div>
                <h2 className="section-title">Eventos</h2>
                <p className="section-copy">Agenda activa para experiencias de marca y comunidad.</p>
              </div>
              <Link href="/eventos" className="section-link">
                Ver agenda
              </Link>
            </Reveal>
            <Reveal delayMs={120}>
              <ItemCarousel items={events} mediaPrefix="Evento" />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
