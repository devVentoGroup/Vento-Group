import type { Metadata } from "next";
import Link from "next/link";

import { HomeHeroIntro } from "@/components/home-hero-intro";
import { HomeVenueExperience } from "@/components/home-venue-experience";
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
  description: "Restaurantes, experiencias, talento y tecnología conectados bajo una misma visión de hospitalidad.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const [blocks, restaurants, jobs, services, apps, events] = await Promise.all([
    getPageBlocks("home"),
    getItems("restaurant", 12),
    getItems("job", 2),
    getItems("service", 3),
    getItems("app", 8),
    getItems("event", 4),
  ]);

  const heroSlides = getHeroSlides(blocks).filter((slide) => Boolean(slide.mediaUrl));
  const editorialBands = getHomeEditorialBands(blocks);
  const introBand = editorialBands[0] ?? null;
  const statementBand = editorialBands[1] ?? introBand;
  const eventBlock = blocks.find((block) => block.block_key === "home_event_spaces_feature") ?? null;
  const imageBanner = blocks.find((block) => block.block_key === "home_image_banner") ?? null;

  const manifestoPrimary = introBand?.mediaUrl ?? restaurants[0]?.image_url ?? restaurants[0]?.video_url ?? null;
  const manifestoSecondary = restaurants[1]?.image_url ?? restaurants[1]?.video_url ?? statementBand?.mediaUrl ?? null;
  const interludeMedia = imageBanner?.media_url ?? restaurants[2]?.video_url ?? restaurants[2]?.image_url ?? null;
  const craftMedia = statementBand?.mediaUrl ?? restaurants[0]?.video_url ?? restaurants[0]?.image_url ?? null;
  const eventMedia = eventBlock?.media_url ?? events[0]?.video_url ?? events[0]?.image_url ?? null;
  const talentMedia = jobs[0]?.video_url ?? jobs[0]?.image_url ?? restaurants[1]?.image_url ?? null;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vento Group",
    url: absoluteUrl("/"),
    description: "Ecosistema de restaurantes, hospitalidad, talento y tecnología de Vento Group.",
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

  const principles = [
    ["01", "Producto", "Ingredientes, técnica y consistencia para que cada plato exprese con claridad su concepto."],
    ["02", "Servicio", "Atención genuina, cercana y precisa, capaz de leer cada mesa y cada momento."],
    ["03", "Operación", "Sistemas y equipos que permiten repetir bien la experiencia, incluso cuando el grupo crece."],
  ];

  const eventTypes = ["Celebraciones", "Eventos corporativos", "Reservas de grupo", "Experiencias de marca"];

  return (
    <>
      <StructuredData data={[organizationSchema, featuredItemsSchema]} />

      <main className={styles.home}>
        <HomeHeroIntro
          slides={heroSlides}
          venues={restaurants.slice(0, 11).map((item) => ({ title: item.title, href: getItemHref(item) }))}
        />

        <section className={`${styles.section} ${styles.manifesto}`} data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.manifestoGrid}>
              <Reveal mode="once" threshold={0.14}>
                <span className={styles.eyebrow}>Vento Group</span>
                <h2 className={`${styles.display} ${styles.manifestoTitle}`}>
                  Creamos lugares que se recuerdan por cómo hacen sentir.
                </h2>
              </Reveal>

              <Reveal className={styles.manifestoAside} delayMs={100} mode="once" threshold={0.14}>
                <p className={styles.copy}>
                  {introBand?.body ??
                    "Vento Group reúne restaurantes, personas y proyectos nacidos en Cúcuta. Cada concepto tiene una identidad propia, pero todos comparten la misma obsesión por la comida, el servicio y los pequeños detalles."}
                </p>
                <Link className={styles.textLink} href="/ecosistema">Conocer Vento Group</Link>
              </Reveal>
            </div>

            <div className={styles.manifestoMediaGrid}>
              <Reveal className={styles.manifestoMediaPrimary} mode="once" threshold={0.1}>
                <MediaSlot label="Hospitalidad Vento Group" mediaUrl={manifestoPrimary} />
              </Reveal>
              <Reveal className={styles.manifestoMediaSecondary} delayMs={130} mode="once" threshold={0.1}>
                <MediaSlot label="Detalle de experiencia Vento" mediaUrl={manifestoSecondary} />
              </Reveal>
            </div>
          </div>
        </section>

        <HomeVenueExperience
          items={restaurants.slice(0, 8).map((item) => ({
            id: item.id,
            title: item.title,
            href: getItemHref(item),
            excerpt: item.excerpt,
            body: item.body,
            location: item.location,
            schedule: item.schedule_text,
            imageUrl: item.image_url,
            videoUrl: item.video_url,
            actionLabel: item.action_label,
          }))}
        />

        <section className={styles.interlude} data-header-theme="dark">
          <div className={styles.interludeMedia}>
            <MediaSlot label="El oficio Vento" mediaUrl={interludeMedia} />
          </div>
          <Reveal className={styles.interludeCopy} mode="once" threshold={0.12}>
            <p>La experiencia empieza mucho antes de que llegue el primer plato.</p>
          </Reveal>
        </section>

        <section className={`${styles.section} ${styles.craft}`} data-header-theme="light">
          <div className={`${styles.shell} ${styles.craftGrid}`}>
            <Reveal className={styles.craftMedia} mode="once" threshold={0.12}>
              <MediaSlot label="Equipo y operación Vento" mediaUrl={craftMedia} />
            </Reveal>

            <div className={styles.craftContent}>
              <Reveal mode="once" threshold={0.14}>
                <span className={styles.eyebrow}>El oficio detrás de la experiencia</span>
                <h2 className={`${styles.display} ${styles.craftTitle}`}>
                  {statementBand?.title ?? "Lo memorable no ocurre por accidente."}
                </h2>
                <p className={styles.copy}>
                  {statementBand?.body ??
                    "Cada experiencia se diseña como un sistema completo: producto, servicio, ambiente, personas y operación."}
                </p>
              </Reveal>

              <div className={styles.principles}>
                {principles.map(([number, title, body], index) => (
                  <Reveal key={number} delayMs={index * 90} mode="once" threshold={0.12}>
                    <article className={styles.principle}>
                      <span>{number}</span>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.events} data-header-theme="dark">
          <div className={styles.eventsMedia}>
            <MediaSlot label="Eventos Vento Group" mediaUrl={eventMedia} />
          </div>
          <div className={`${styles.shell} ${styles.eventsOverlay}`}>
            <Reveal mode="once" threshold={0.1}>
              <span className={styles.eyebrow}>Eventos y celebraciones</span>
              <h2 className={`${styles.display} ${styles.eventsTitle}`}>
                {eventBlock?.title ?? "Momentos importantes merecen un lugar con carácter."}
              </h2>
            </Reveal>

            <Reveal className={styles.eventTypes} delayMs={100} mode="once" threshold={0.1}>
              {eventTypes.map((type) => <span key={type}>{type}</span>)}
              <Link className={styles.textLink} href={eventBlock?.cta_url ?? "/eventos"}>
                {eventBlock?.cta_label ?? "Planear un evento"}
              </Link>
            </Reveal>
          </div>
        </section>

        <section className={`${styles.section} ${styles.talent}`} data-header-theme="light">
          <div className={`${styles.shell} ${styles.talentGrid}`}>
            <Reveal className={styles.talentCopy} mode="once" threshold={0.14}>
              <span className={styles.eyebrow}>Personas</span>
              <h2 className={`${styles.display} ${styles.talentTitle}`}>La hospitalidad también se aprende, se comparte y se transforma.</h2>
              <p className={styles.copy}>
                {jobs[0]?.excerpt ?? "Buscamos personas curiosas, responsables y orgullosas de su oficio, con espacio real para crecer dentro del grupo."}
              </p>
              <Link className={styles.textLink} href="/empleos">Ver oportunidades</Link>
            </Reveal>

            <Reveal className={styles.talentMedia} delayMs={110} mode="once" threshold={0.12}>
              <MediaSlot label="Talento Vento Group" mediaUrl={talentMedia} />
            </Reveal>
          </div>
        </section>

        <section className={styles.contact} data-header-theme="light">
          <div className={styles.shell}>
            <Reveal mode="once" threshold={0.14}>
              <span className={styles.eyebrow}>Contacto</span>
              <h2 className={`${styles.display} ${styles.contactTitle}`}>¿Qué podemos crear juntos?</h2>
            </Reveal>

            <div className={styles.contactLinks}>
              <Link href="/eventos">Eventos <span>↗</span></Link>
              <Link href="/servicios">Alianzas y servicios <span>↗</span></Link>
              <a href="mailto:hola@ventogroup.co">Contacto general <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className={styles.technology} data-header-theme="dark">
          <div className={styles.shell}>
            <span className={styles.eyebrow}>Operación conectada</span>
            <div className={styles.technologyGrid}>
              <h2>Detrás de cada experiencia existe una operación conectada.</h2>
              <div>
                <p>Vento OS integra equipos, decisiones y procesos para sostener la hospitalidad del grupo.</p>
                <Link className={styles.textLink} href="/ecosistema">Conocer Vento OS</Link>
                <div className={styles.appList}>
                  {apps.slice(0, 6).map((app) => <span key={app.id}>{app.title}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter venues={restaurants.map((item) => item.title)} />
    </>
  );
}
