import type { Metadata } from "next";

import { CareerOpportunities } from "@/components/career-opportunities";
import {
  EditorialClosing,
  EditorialIntro,
  EditorialMediaBand,
  EditorialPageHero,
  EditorialSectionHeading,
} from "@/components/editorial-page";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl, truncateForMeta } from "@/lib/seo";

import styles from "./empleos.module.css";

export const metadata: Metadata = {
  title: "Empleos | Vento Group",
  description: "Vacantes y oportunidades laborales dentro del ecosistema Vento Group.",
  alternates: { canonical: "/empleos" },
  openGraph: {
    title: "Empleos | Vento Group",
    description: "Vacantes y oportunidades laborales dentro del ecosistema Vento Group.",
    url: "/empleos",
    type: "website",
  },
};

const values = [
  {
    title: "Hospitalidad",
    copy: "Ponemos a las personas en el centro de cada experiencia, dentro y fuera de nuestros espacios.",
  },
  {
    title: "Oficio",
    copy: "Valoramos el detalle, la práctica constante y el trabajo bien ejecutado en cada rol.",
  },
  {
    title: "Equipo",
    copy: "Crecemos cuando compartimos conocimiento, asumimos responsabilidad y cuidamos el resultado colectivo.",
  },
  {
    title: "Evolución",
    copy: "Construimos mejores formas de operar, servir y aprender para que cada persona pueda avanzar.",
  },
];

const pathways = ["Restaurantes", "Producción", "Logística", "Administración", "Tecnología", "Servicio"];

function isPlaceholderJob(item: { id: string; slug: string; title: string }) {
  return (
    item.id === "job-placeholder" ||
    item.slug === "vacante-destacada" ||
    item.title.trim().toLowerCase() === "vacante destacada"
  );
}

export default async function EmpleosPage() {
  const [blocks, allItems] = await Promise.all([getPageBlocks("empleos"), getItems("job")]);
  const items = allItems.filter((item) => !isPlaceholderJob(item));

  const heroBlock = getBlock(blocks, "empleos_hero");
  const cultureBlock = getBlock(blocks, "empleos_culture");
  const growthBlock = getBlock(blocks, "empleos_growth");
  const bannerBlock = getBlock(blocks, "empleos_banner");

  const lead = items[0] ?? null;
  const second = items[1] ?? lead;
  const heroMediaUrl = heroBlock?.media_url ?? lead?.video_url ?? lead?.image_url ?? null;
  const heroMediaType = heroBlock?.media_type ?? (lead?.video_url ? "video" : "image");
  const pathwayMediaUrl = growthBlock?.media_url ?? second?.video_url ?? second?.image_url ?? heroMediaUrl;
  const pathwayMediaType = growthBlock?.media_type ?? (second?.video_url ? "video" : "image");
  const bannerMediaUrl = bannerBlock?.media_url ?? lead?.image_url ?? pathwayMediaUrl;
  const bannerMediaType = bannerBlock?.media_type ?? (lead?.image_url ? "image" : pathwayMediaType);

  const jobsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vacantes Vento Group",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "JobPosting",
        title: item.title,
        description: truncateForMeta(item.body ?? item.excerpt, 240) || undefined,
        hiringOrganization: {
          "@type": "Organization",
          name: "Vento Group",
          sameAs: absoluteUrl("/"),
        },
        jobLocation: item.location
          ? {
              "@type": "Place",
              address: item.location,
            }
          : undefined,
        employmentType: item.schedule_text ?? undefined,
        url: item.action_url && item.action_url !== "#" ? item.action_url : absoluteUrl("/empleos"),
      },
    })),
  };

  return (
    <>
      <StructuredData data={jobsSchema} />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={heroBlock?.subtitle ?? "Trabaja con nosotros"}
          title={heroBlock?.title ?? "Haz parte de Vento"}
          copy={
            heroBlock?.body ??
            "Buscamos personas que disfruten servir, aprender y construir experiencias memorables junto a un equipo que continúa creciendo."
          }
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Equipo Vento Group"
          primaryAction={{ label: "Ver vacantes", href: "#vacantes" }}
          secondaryAction={{ label: "Conocer el grupo", href: "/ecosistema" }}
        />

        <EditorialIntro
          eyebrow="Nuestra cultura"
          title={cultureBlock?.title ?? "Las grandes experiencias comienzan con grandes equipos."}
          copy={
            cultureBlock?.body ??
            "En Vento Group conectamos hospitalidad, operación y tecnología. Cada persona aporta una mirada distinta, pero compartimos la misma disciplina: cuidar los detalles, trabajar con intención y mejorar continuamente."
          }
          aside={
            <dl className={styles.stats}>
              <div>
                <dt>Vacantes publicadas</dt>
                <dd>{String(items.length).padStart(2, "0")}</dd>
              </div>
              <div>
                <dt>Áreas de desarrollo</dt>
                <dd>{String(pathways.length).padStart(2, "0")}</dd>
              </div>
            </dl>
          }
        />

        <section className={styles.values} data-header-theme="light">
          <div className={styles.shell}>
            <EditorialSectionHeading
              eyebrow="Lo que nos mueve"
              title="Personas primero. Excelencia siempre."
              copy="Nuestra cultura se construye en decisiones cotidianas: cómo servimos, cómo aprendemos y cómo respondemos por el trabajo colectivo."
            />

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <Reveal key={value.title} delayMs={index * 70} mode="once" threshold={0.1}>
                  <article className={styles.value}>
                    <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{value.title}</h3>
                    <p>{value.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pathways} data-header-theme="dark">
          <Reveal className={styles.pathwaysMedia} mode="once" threshold={0.08}>
            <MediaSlot
              label="Crecimiento y oportunidades en Vento Group"
              mediaUrl={pathwayMediaUrl}
              mediaType={pathwayMediaType}
            />
          </Reveal>

          <Reveal className={styles.pathwaysContent} delayMs={100} mode="once" threshold={0.1}>
            <span className={styles.eyebrow}>{growthBlock?.subtitle ?? "Distintos caminos"}</span>
            <h2>{growthBlock?.title ?? "Una organización con múltiples formas de aportar."}</h2>
            <p>
              {growthBlock?.body ??
                "Restaurantes, producción, logística, administración, tecnología y servicio comparten un mismo ecosistema. Eso permite descubrir nuevas capacidades y construir una trayectoria que no se limita a un solo cargo."}
            </p>
            <div className={styles.pathwayList} aria-label="Áreas de trabajo">
              {pathways.map((pathway) => (
                <span key={pathway}>{pathway}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className={styles.opportunities} id="vacantes" data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.opportunitiesHeader}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow} style={{ color: "#786f65" }}>
                  Oportunidades actuales
                </span>
                <h2>Encuentra tu próximo rol.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>
                  Explora las vacantes publicadas, revisa sus condiciones y utiliza el enlace de aplicación definido
                  por el equipo de talento.
                </p>
              </Reveal>
            </div>

            <CareerOpportunities
              items={items.map((item) => ({
                id: item.id,
                slug: item.slug,
                title: item.title,
                excerpt: item.excerpt,
                body: item.body,
                location: item.location,
                schedule: item.schedule_text,
                imageUrl: item.image_url,
                videoUrl: item.video_url,
                actionLabel: item.action_label,
                actionUrl: item.action_url,
              }))}
            />
          </div>
        </section>

        <EditorialMediaBand
          eyebrow="Aprender haciendo"
          title={bannerBlock?.title ?? "El crecimiento ocurre cuando el trabajo real se convierte en aprendizaje."}
          copy={
            bannerBlock?.body ??
            "Buscamos que cada persona tenga contexto, herramientas, acompañamiento y oportunidades concretas para asumir nuevos retos."
          }
          mediaUrl={bannerMediaUrl}
          mediaType={bannerMediaType}
          mediaLabel="Cultura y desarrollo Vento Group"
          action={{ label: "Conocer nuestro ecosistema", href: "/ecosistema" }}
        />

        <EditorialClosing
          eyebrow="Perfil espontáneo"
          title="Tu experiencia puede encontrar un lugar en Vento."
          copy="Cuando no encuentres una vacante relacionada, comparte tu perfil para que el equipo pueda considerarlo en futuras oportunidades."
          actions={[
            {
              label: "Enviar perfil",
              href: `mailto:hola@ventogroup.co?subject=${encodeURIComponent("Perfil para futuras oportunidades en Vento Group")}`,
            },
            { label: "Ver restaurantes", href: "/restaurantes" },
          ]}
          dark
        />
      </main>

      <SiteFooter />
    </>
  );
}
