import type { Metadata } from "next";

import {
  EditorialClosing,
  EditorialIntro,
  EditorialMediaBand,
  EditorialPageHero,
} from "@/components/editorial-page";
import { EcosystemProducts } from "@/components/ecosystem-products";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./ecosistema.module.css";

export const metadata: Metadata = {
  title: "Ecosistema | Vento Group",
  description: "Conoce los productos digitales publicados dentro del ecosistema Vento Group.",
  alternates: { canonical: "/ecosistema" },
  openGraph: {
    title: "Ecosistema | Vento Group",
    description: "Conoce los productos digitales publicados dentro del ecosistema Vento Group.",
    url: "/ecosistema",
    type: "website",
  },
};

const layers = [
  { title: "Cliente", copy: "Productos que acompañan la relación, identificación y experiencia del cliente." },
  { title: "Equipo", copy: "Herramientas orientadas a la cultura, la comunicación y la experiencia de las personas." },
  { title: "Operación", copy: "Sistemas que conectan información, procesos y decisiones dentro de la organización." },
];

const principles = [
  { title: "Una sola fuente de verdad", copy: "Cada producto debe consumir información coherente y evitar duplicidades entre aplicaciones." },
  { title: "Experiencias conectadas", copy: "La interacción del cliente, el trabajo del equipo y la operación deben reforzarse mutuamente." },
  { title: "Evolución controlada", copy: "Los estados, enlaces y capacidades públicas se muestran únicamente cuando están configurados y publicados." },
];

export default async function EcosistemaPage() {
  const [blocks, allItems] = await Promise.all([getPageBlocks("ecosistema"), getItems("app")]);
  const items = allItems.filter((item) => item.is_published);

  const heroBlock = getBlock(blocks, "ecosistema_hero");
  const introBlock = getBlock(blocks, "ecosistema_intro");
  const bannerBlock = getBlock(blocks, "ecosistema_banner");
  const lead = items[0] ?? null;
  const second = items[1] ?? lead;

  const heroMediaUrl = heroBlock?.media_url ?? lead?.video_url ?? lead?.image_url ?? null;
  const heroMediaType = heroBlock?.media_type ?? (lead?.video_url ? "video" : "image");
  const bannerMediaUrl = bannerBlock?.media_url ?? second?.video_url ?? second?.image_url ?? heroMediaUrl;
  const bannerMediaType = bannerBlock?.media_type ?? (second?.video_url ? "video" : "image");

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Productos del ecosistema Vento Group",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: item.title,
        description: truncateForMeta(item.body ?? item.excerpt, 220) || undefined,
        applicationCategory: item.location ?? undefined,
        operatingSystem: item.location ?? undefined,
        url: item.action_url && item.action_url !== "#" ? item.action_url : absoluteUrl("/ecosistema"),
      },
    })),
  };

  return (
    <>
      <StructuredData data={productSchema} />
      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={heroBlock?.subtitle ?? "Vento Group"}
          title={heroBlock?.title ?? "Ecosistema"}
          copy={heroBlock?.body ?? "Productos digitales que conectan la experiencia del cliente, el trabajo de los equipos y la operación de Vento Group."}
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Ecosistema digital Vento Group"
          primaryAction={{ label: "Explorar productos", href: "#productos" }}
          secondaryAction={{ label: "Conocer restaurantes", href: "/restaurantes" }}
        />

        <EditorialIntro
          eyebrow="Una arquitectura conectada"
          title={introBlock?.title ?? "Cada producto cumple una función distinta dentro del mismo sistema."}
          copy={introBlock?.body ?? "El ecosistema se organiza por capas. Algunas experiencias están orientadas al cliente, otras al equipo y otras a la operación. La conexión entre ellas permite trabajar con mayor continuidad y contexto."}
          aside={
            <dl className={styles.stats}>
              <div><dt>Productos publicados</dt><dd>{String(items.length).padStart(2, "0")}</dd></div>
              <div><dt>Capas del ecosistema</dt><dd>{String(layers.length).padStart(2, "0")}</dd></div>
            </dl>
          }
        />

        <section className={styles.layers} data-header-theme="light">
          <div className={`${styles.shell} ${styles.layersGrid}`}>
            {layers.map((layer, index) => (
              <Reveal key={layer.title} delayMs={index * 70} mode="once" threshold={0.1}>
                <article className={styles.layer}>
                  <span className={styles.layerNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{layer.title}</h3><p>{layer.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={styles.products} id="productos" data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.productsHeader}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow}>Productos publicados</span><h2>Una vista clara de cada componente.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>La información, plataforma, estado y enlaces dependen exclusivamente de lo configurado en VISO Web Studio. Cuando un producto no tiene un acceso público válido, la página no muestra un CTA.</p>
              </Reveal>
            </div>
            <EcosystemProducts items={items.map((item) => ({
              id: item.id, slug: item.slug, title: item.title, excerpt: item.excerpt, body: item.body,
              platform: item.location, status: item.schedule_text, imageUrl: item.image_url,
              videoUrl: item.video_url, actionLabel: item.action_label, actionUrl: item.action_url,
            }))} />
          </div>
        </section>

        <section className={styles.principles} data-header-theme="dark">
          <div className={styles.shell}>
            <div className={styles.principlesIntro}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow}>Principios de integración</span><h2>Conectar sin perder control.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>El valor del ecosistema no está en acumular aplicaciones, sino en definir responsabilidades claras, datos consistentes y una evolución verificable.</p>
              </Reveal>
            </div>
            <div className={styles.principlesList}>
              {principles.map((principle, index) => (
                <Reveal key={principle.title} mode="once" threshold={0.08}>
                  <article className={styles.principle}>
                    <span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EditorialMediaBand
          eyebrow="Un sistema en evolución"
          title={bannerBlock?.title ?? "Cada producto avanza cuando su función, estado y acceso están definidos."}
          copy={bannerBlock?.body ?? "VISO Web Studio conserva el control editorial de lo que se presenta públicamente. La página refleja únicamente información publicada y enlaces válidos."}
          mediaUrl={bannerMediaUrl}
          mediaType={bannerMediaType}
          mediaLabel="Productos y operación Vento Group"
          action={{ label: "Conocer Vento Group", href: "/" }}
        />

        <EditorialClosing
          eyebrow="Explora Vento Group"
          title="El ecosistema digital acompaña una operación real."
          copy="Conoce los restaurantes, las oportunidades y las experiencias que conectan estos productos con el día a día de Vento Group."
          actions={[{ label: "Ver restaurantes", href: "/restaurantes" }, { label: "Ver oportunidades", href: "/empleos" }]}
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}
