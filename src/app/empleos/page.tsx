import type { Metadata } from "next";

import { CtaBanner } from "@/components/cta-banner";
import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getItems } from "@/lib/content";

import "./empleos.css";

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

export default async function EmpleosPage() {
  const items = await getItems("job");
  const lead = items[0] ?? null;
  const second = items[1] ?? lead;
  const leadMedia = lead?.video_url ?? lead?.image_url ?? null;
  const secondMedia = second?.video_url ?? second?.image_url ?? null;

  return (
    <>
      <SiteHeader />
      <main className="careers-page">
        <section className="careers-hero">
          <div className="careers-hero-media" aria-hidden="true">
            <MediaSlot
              label="Equipo Vento Group"
              mediaUrl={leadMedia}
              mediaType={lead?.video_url ? "video" : "image"}
            />
          </div>
          <div className="careers-hero-shade" aria-hidden="true" />
          <div className="container careers-hero-inner">
            <Reveal mode="toggle" threshold={0.12}>
              <span className="careers-hero-kicker">Trabaja con nosotros</span>
              <h1 className="careers-hero-title">Haz parte de Vento</h1>
              <div className="careers-hero-footer">
                <p className="careers-hero-copy">
                  Buscamos personas que disfruten servir, aprender y construir experiencias memorables junto a un
                  equipo que continúa creciendo.
                </p>
                <span className="careers-scroll-cue">Descubre más</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="careers-intro">
          <div className="container careers-intro-grid">
            <Reveal mode="toggle" threshold={0.18}>
              <span className="careers-kicker">Nuestra cultura</span>
            </Reveal>
            <Reveal delayMs={100} mode="toggle" threshold={0.18}>
              <h2 className="careers-intro-title">Las grandes experiencias comienzan con grandes equipos.</h2>
              <p className="careers-intro-copy">
                En Vento Group conectamos hospitalidad, operación y tecnología. Cada persona aporta una mirada
                distinta, pero compartimos la misma disciplina: cuidar los detalles, trabajar con intención y elevar
                constantemente la experiencia de nuestros clientes y compañeros.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="careers-editorial">
          <div className="careers-editorial-media" aria-hidden="true">
            <MediaSlot
              label="Cultura Vento Group"
              mediaUrl={secondMedia}
              mediaType={second?.video_url ? "video" : "image"}
            />
          </div>
          <Reveal className="careers-editorial-copy" mode="toggle" threshold={0.18}>
            <span className="careers-kicker">Crecer con propósito</span>
            <h2 className="careers-editorial-title">Un lugar para aprender haciendo.</h2>
            <p className="careers-editorial-body">
              Aquí el desarrollo ocurre en la práctica: resolviendo situaciones reales, acompañando equipos y
              participando en proyectos que transforman la forma en que operamos. Queremos que cada rol tenga claridad,
              herramientas y oportunidades concretas de crecimiento.
            </p>
          </Reveal>
        </section>

        <section className="careers-values">
          <div className="container">
            <div className="careers-values-head">
              <Reveal mode="toggle" threshold={0.18}>
                <span className="careers-kicker">Lo que nos mueve</span>
              </Reveal>
              <Reveal delayMs={100} mode="toggle" threshold={0.18}>
                <h2 className="careers-values-title">Personas primero. Excelencia siempre.</h2>
              </Reveal>
            </div>

            <div className="careers-values-rail">
              {values.map((value, index) => (
                <Reveal key={value.title} className="careers-value" delayMs={index * 70} mode="toggle" threshold={0.12}>
                  <span className="careers-value-number">0{index + 1}</span>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="careers-editorial careers-editorial-reverse">
          <div className="careers-editorial-media" aria-hidden="true">
            <MediaSlot
              label="Oportunidades Vento Group"
              mediaUrl={leadMedia}
              mediaType={lead?.video_url ? "video" : "image"}
            />
          </div>
          <Reveal className="careers-editorial-copy" mode="toggle" threshold={0.18}>
            <span className="careers-kicker">Distintos caminos</span>
            <h2 className="careers-editorial-title">Una organización con múltiples formas de aportar.</h2>
            <p className="careers-editorial-body">
              Restaurantes, producción, logística, administración, tecnología y servicio comparten un mismo
              ecosistema. Eso permite descubrir nuevas capacidades y construir una trayectoria que no se limita a un
              solo cargo o una sola unidad.
            </p>
          </Reveal>
        </section>

        <section className="careers-jobs" id="vacantes">
          <div className="container">
            <div className="careers-jobs-head">
              <Reveal mode="toggle" threshold={0.18}>
                <span className="careers-kicker">Oportunidades actuales</span>
              </Reveal>
              <Reveal delayMs={100} mode="toggle" threshold={0.18}>
                <h2 className="careers-jobs-title">Encuentra tu próximo rol.</h2>
              </Reveal>
            </div>

            <div className="careers-job-list">
              {items.length > 0 ? (
                items.map((item, index) => {
                  const href = item.action_url && item.action_url !== "#" ? item.action_url : "mailto:hola@ventogroup.co";
                  return (
                    <Reveal key={item.id} delayMs={index * 55} mode="toggle" threshold={0.08}>
                      <article className="careers-job-row">
                        <h3 className="careers-job-title">{item.title}</h3>
                        <span className="careers-job-meta">{item.location ?? "Vento Group"}</span>
                        <span className="careers-job-meta">{item.schedule_text ?? "Oportunidad activa"}</span>
                        <a className="careers-job-action" href={href}>
                          {item.action_label ?? "Aplicar"}
                        </a>
                      </article>
                    </Reveal>
                  );
                })
              ) : (
                <p className="careers-empty">
                  En este momento no hay vacantes publicadas. Puedes compartir tu perfil para futuras oportunidades.
                </p>
              )}
            </div>
          </div>
        </section>

        <CtaBanner
          title="Construyamos algo memorable."
          copy="Comparte tu perfil y cuéntanos dónde te gustaría aportar dentro del ecosistema Vento."
          ctaLabel="Enviar perfil"
          ctaHref="mailto:hola@ventogroup.co"
        />
      </main>
      <SiteFooter />
    </>
  );
}
