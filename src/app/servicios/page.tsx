import type { Metadata } from "next";

import {
  EditorialClosing,
  EditorialIntro,
  EditorialMediaBand,
  EditorialPageHero,
  EditorialSectionHeading,
} from "@/components/editorial-page";
import { Reveal } from "@/components/reveal";
import { ServicePortfolio } from "@/components/service-portfolio";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./servicios.module.css";

export const metadata: Metadata = {
  title: "Servicios | Vento Group",
  description: "Conoce los servicios publicados por Vento Group y consulta su alcance, disponibilidad y modalidad.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | Vento Group",
    description: "Conoce los servicios publicados por Vento Group y consulta su alcance, disponibilidad y modalidad.",
    url: "/servicios",
    type: "website",
  },
};

function isPlaceholderService(item: { id: string; slug: string; title: string }) {
  const title = item.title.trim().toLowerCase();
  return item.id === "service-placeholder" || item.slug === "servicio-destacado" || title === "servicio destacado";
}

const process = [
  {
    title: "Cuéntanos la necesidad",
    copy: "Comparte el contexto, el resultado esperado y las condiciones relevantes para evaluar correctamente la consulta.",
  },
  {
    title: "Revisamos el alcance",
    copy: "El equipo confirma si el servicio publicado aplica, qué información adicional necesita y bajo qué modalidad puede atenderse.",
  },
  {
    title: "Definimos el siguiente paso",
    copy: "Cuando existe ajuste entre la necesidad y el servicio, se acuerdan alcance, responsables, tiempos y condiciones.",
  },
];

export default async function ServiciosPage() {
  const [blocks, allItems] = await Promise.all([getPageBlocks("servicios"), getItems("service")]);
  const items = allItems.filter((item) => !isPlaceholderService(item));

  const heroBlock = getBlock(blocks, "servicios_hero");
  const introBlock = getBlock(blocks, "servicios_intro");
  const processBlock = getBlock(blocks, "servicios_process");
  const bannerBlock = getBlock(blocks, "servicios_banner");

  const lead = items[0] ?? null;
  const second = items[1] ?? lead;
  const heroMediaUrl = heroBlock?.media_url ?? lead?.video_url ?? lead?.image_url ?? null;
  const heroMediaType = heroBlock?.media_type ?? (lead?.video_url ? "video" : "image");
  const bannerMediaUrl = bannerBlock?.media_url ?? second?.video_url ?? second?.image_url ?? heroMediaUrl;
  const bannerMediaType = bannerBlock?.media_type ?? (second?.video_url ? "video" : second?.image_url ? "image" : heroMediaType);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicios publicados de Vento Group",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: truncateForMeta(item.body ?? item.excerpt, 220) || undefined,
        areaServed: item.location ?? undefined,
        serviceType: item.schedule_text ?? undefined,
        provider: {
          "@type": "Organization",
          name: "Vento Group",
          url: absoluteUrl("/"),
        },
        url:
          item.action_url && item.action_url !== "#"
            ? item.action_url
            : absoluteUrl("/servicios"),
      },
    })),
  };

  return (
    <>
      <StructuredData data={itemListSchema} />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={heroBlock?.subtitle ?? "Vento Group"}
          title={heroBlock?.title ?? "Servicios"}
          copy={
            heroBlock?.body ??
            "Un portafolio público y verificable de servicios, con alcance, disponibilidad y modalidad definidos desde VISO."
          }
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Servicios Vento Group"
          primaryAction={{ label: "Explorar servicios", href: "#portafolio" }}
          secondaryAction={{ label: "Contacto general", href: "mailto:hola@ventogroup.co" }}
        />

        <EditorialIntro
          eyebrow="Portafolio público"
          title={introBlock?.title ?? "Solo mostramos capacidades que el equipo ha decidido publicar."}
          copy={
            introBlock?.body ??
            "Cada servicio de esta página proviene de VISO. Su descripción, disponibilidad, modalidad, medios y enlace de contacto se administran desde una única fuente editorial."
          }
          aside={
            <dl className={styles.stats}>
              <div>
                <dt>Servicios publicados</dt>
                <dd>{String(items.length).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Fuente editorial</dt>
                <dd>VISO</dd>
              </div>
            </dl>
          }
        />

        <section className={styles.portfolio} id="portafolio" data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Servicios disponibles"
              title="Explora el alcance publicado."
              copy="Selecciona un servicio para revisar su descripción, disponibilidad, modalidad y canal de consulta."
            />

            <ServicePortfolio
              items={items.map((item) => ({
                id: item.id,
                slug: item.slug,
                title: item.title,
                excerpt: item.excerpt,
                body: item.body,
                availability: item.location,
                modality: item.schedule_text,
                imageUrl: item.image_url,
                videoUrl: item.video_url,
                actionLabel: item.action_label,
                actionUrl: item.action_url,
              }))}
            />
          </div>
        </section>

        <section className={styles.process} data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Cómo iniciar una consulta"
              title={processBlock?.title ?? "Un proceso claro antes de asumir compromisos."}
              copy={
                processBlock?.body ??
                "La publicación de un servicio no implica disponibilidad automática. Cada solicitud debe revisarse según alcance, capacidad y condiciones actuales."
              }
            />

            <div className={styles.processGrid}>
              {process.map((step, index) => (
                <Reveal key={step.title} delayMs={index * 70} mode="once" threshold={0.1}>
                  <article className={styles.step}>
                    <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <EditorialMediaBand
          eyebrow="Alcance antes que promesas"
          title={bannerBlock?.title ?? "Cada consulta debe empezar por entender bien el problema."}
          copy={
            bannerBlock?.body ??
            "Antes de definir una propuesta, revisamos el contexto, la necesidad y las condiciones reales para determinar si existe un ajuste adecuado."
          }
          mediaUrl={bannerMediaUrl}
          mediaType={bannerMediaType}
          mediaLabel="Equipo y operación Vento Group"
          action={{ label: "Conocer el ecosistema", href: "/ecosistema" }}
        />

        <section className={styles.note} data-header-theme="light">
          <div className={`${styles.shell} ${styles.noteGrid}`}>
            <Reveal mode="once" threshold={0.12}>
              <span className={styles.eyebrow}>Información importante</span>
            </Reveal>
            <Reveal delayMs={90} mode="once" threshold={0.12}>
              <h2>La información vigente es la que está publicada en cada servicio.</h2>
              <p>
                Alcances, modalidades y disponibilidad pueden variar. Cuando un servicio no aparezca en esta página,
                no debe considerarse una oferta pública activa de Vento Group.
              </p>
            </Reveal>
          </div>
        </section>

        <EditorialClosing
          eyebrow="Consulta comercial"
          title="Revisemos primero si existe un ajuste real."
          copy="Comparte la necesidad, el contexto y el resultado esperado. El equipo confirmará si alguno de los servicios publicados puede atenderla."
          actions={[
            { label: "Escribir al equipo", href: "mailto:hola@ventogroup.co?subject=Consulta%20de%20servicios" },
            { label: "Conocer Vento Group", href: "/ecosistema" },
          ]}
          dark
        />
      </main>

      <SiteFooter />
    </>
  );
}
