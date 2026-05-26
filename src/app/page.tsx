import type { Metadata } from "next";
import Link from "next/link";

import { HomeHeroIntro } from "@/components/home-hero-intro";
import { HomeVenuesShowcase } from "@/components/home-venues-showcase";
import { ImageBanner } from "@/components/image-banner";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import {
  getBlock,
  getHeroSlides,
  getHomeEditorialBands,
  getItemHref,
  getItems,
  getPageBlocks,
} from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vento Group | Gastronomia y Hospitalidad",
  description: "Restaurantes, servicios, empleos y plataformas digitales conectadas en un solo ecosistema.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vento Group | Gastronomia y Hospitalidad",
    description: "Restaurantes, servicios, empleos y plataformas digitales conectadas en un solo ecosistema.",
    url: "/",
    type: "website",
  },
};

export default async function HomePage() {
  const [blocks, restaurants, jobs, services, apps] = await Promise.all([
    getPageBlocks("home"),
    getItems("restaurant", 12),
    getItems("job", 2),
    getItems("service", 2),
    getItems("app", 6),
  ]);

  const heroSlides = getHeroSlides(blocks);
  const editorialBands = getHomeEditorialBands(blocks);
  const introBand = editorialBands[0] ?? null;
  const statementBand = editorialBands[1] ?? introBand;
  const resolvedHeroSlides = heroSlides.filter((s) => Boolean(s.mediaUrl));

  // Solo mostrar imagenes si fueron cargadas explicitamente en VISO.
  // Nunca usar logos de restaurantes como fallback visual.
  const introBandMedia = introBand?.mediaUrl ?? null;
  const statementBandMedia = statementBand?.mediaUrl ?? null;
  const imageBannerMedia = blocks.find((b) => b.block_key === "home_image_banner")?.media_url ?? null;

  const quickCards: Array<{
    title: string;
    body: string;
    href: string;
    cta: string;
    mediaUrl: string | null;
    mediaType: "image" | "video";
  }> = [
    {
      title: "Empleos",
      body: "Vacantes activas y rutas de crecimiento para equipos Vento.",
      href: "/empleos",
      cta: "Ver vacantes",
      mediaUrl: jobs[0]?.video_url ?? jobs[0]?.image_url ?? null,
      mediaType: jobs[0]?.video_url ? "video" : "image",
    },
    {
      title: "Servicios",
      body: "Consultoria, tecnologia y soporte operativo para el sector hospitalidad.",
      href: "/servicios",
      cta: "Conocer mas",
      mediaUrl: services[0]?.video_url ?? services[0]?.image_url ?? null,
      mediaType: services[0]?.video_url ? "video" : "image",
    },
    {
      title: "Contacto",
      body: "Alianzas, reservas y oportunidades estrategicas con el grupo.",
      href: "mailto:hola@ventogroup.co",
      cta: "Escribir",
      mediaUrl: null,
      mediaType: "image",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vento Group",
    url: absoluteUrl("/"),
    description: "Ecosistema de restaurantes, talento y servicios de Vento Group.",
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
    name: "Vento Group Destacados",
    itemListElement: restaurants.slice(0, 6).map((item, index) => ({
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

        {/* ── Seccion 1: Splash + Hero ── */}
        <HomeHeroIntro
          slides={resolvedHeroSlides}
          venues={restaurants.slice(0, 11).map((item) => ({ title: item.title, href: getItemHref(item) }))}
        />

        {/* ── Seccion 2: Intro editorial ── */}
        <section className="darling-section darling-intro-section">
          <div className={`container darling-intro-grid ${introBandMedia ? "" : "darling-intro-grid-no-media"}`}>
            <Reveal className="darling-intro-copy" mode="toggle" threshold={0.22}>
              <span className="darling-kicker">La experiencia Vento</span>
              <h2>
                {introBand?.title ?? "Hospitalidad inolvidable construida desde restaurantes, talento y operacion."}
              </h2>
            </Reveal>

            <Reveal className="darling-intro-side" delayMs={100} mode="toggle" threshold={0.22}>
              <p>
                {introBand?.body ??
                  "Vento Group integra restaurantes, talento y servicios bajo una misma vision de hospitalidad premium, con ejecucion consistente en cada punto de contacto."}
              </p>
              <Link className="button button-outline" href={introBand?.ctaUrl ?? "/restaurantes"}>
                {introBand?.ctaLabel ?? "Nuestros restaurantes"}
              </Link>
            </Reveal>

            {introBandMedia && (
              <Reveal className="darling-intro-media" mode="toggle" threshold={0.22}>
                <MediaSlot
                  label={introBand?.title ?? "Imagen editorial"}
                  mediaUrl={introBandMedia}
                  mediaType={introBand?.mediaType ?? "image"}
                />
              </Reveal>
            )}
          </div>
        </section>

        {/* ── Seccion 3: Grid de restaurantes ── */}
        <section className="darling-section darling-venues-section">
          <Reveal className="container" mode="toggle" threshold={0.18}>
            <HomeVenuesShowcase items={restaurants} />
          </Reveal>
        </section>

        {/* ── Image banner: solo si hay media en VISO ── */}
        {imageBannerMedia && (
          <ImageBanner
            label="Vento Group"
            mediaUrl={imageBannerMedia}
            mediaType="image"
          />
        )}

        {/* ── Seccion 4: Statement editorial ── */}
        <section className="darling-section darling-statement-section">
          <div className={`container darling-statement-grid ${statementBandMedia ? "" : "darling-statement-grid-no-media"}`}>
            {statementBandMedia && (
              <Reveal className="darling-statement-media" mode="toggle" threshold={0.22}>
                <MediaSlot
                  label={statementBand?.title ?? "Imagen editorial"}
                  mediaUrl={statementBandMedia}
                  mediaType={statementBand?.mediaType ?? "image"}
                />
              </Reveal>
            )}

            <Reveal className="darling-statement-copy" delayMs={100} mode="toggle" threshold={0.22}>
              <span className="darling-kicker">Con escala</span>
              <h2>
                {statementBand?.title ??
                  "Con oficio, dedicacion y gran talento, la hospitalidad se vuelve una experiencia completa."}
              </h2>
              <p>
                Establecidos para escalar hospitalidad con diseno, consistencia operativa y experiencias memorables en
                cada restaurante y plataforma del grupo.
              </p>
              <Link className="button button-outline" href="/restaurantes">
                Ver restaurantes
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── Seccion 5: Cierre ecosistema + quick cards ── */}
        <section className="darling-section darling-closing-section">
          <div className="container darling-closing-grid">
            <Reveal className="darling-closing-copy" mode="toggle" threshold={0.22}>
              <span className="darling-kicker">Ecosistema</span>
              <h2>Explora el ecosistema completo de Vento: restaurantes, talento y herramientas operativas.</h2>
              <p>
                Vento Group conecta restaurantes, empleos, servicios y flujos operativos desde una misma capa
                estrategica.
              </p>
              <div className="darling-ecosystem-links">
                {apps.map((app) => (
                  <a key={app.id} href={app.action_url ?? "/ecosistema"}>
                    {app.title}
                  </a>
                ))}
              </div>
              <Link href="/ecosistema" className="section-link">
                Acceder a Vento OS
              </Link>
            </Reveal>

            <Reveal className="darling-card-grid" delayMs={120} mode="toggle" threshold={0.22}>
              {quickCards.map((card) => (
                <article key={card.title} className="darling-cta-card">
                  {card.mediaUrl && (
                    <div className="darling-cta-card-media">
                      <MediaSlot label={card.title} mediaUrl={card.mediaUrl} mediaType={card.mediaType} />
                    </div>
                  )}
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
