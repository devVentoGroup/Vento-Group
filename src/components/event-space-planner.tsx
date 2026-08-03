"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import styles from "./event-space-planner.module.css";

export type EventSpaceItem = {
  id: string;
  slug: string;
  name: string;
  subtitle: string | null;
  address: string | null;
  schedule: string | null;
  tags: string[];
  imageUrl: string | null;
  videoUrl: string | null;
  mapsUrl: string | null;
  accentColor: string | null;
};

type EventSpacePlannerProps = {
  spaces: EventSpaceItem[];
  initialSlug?: string | null;
};

const EVENT_TYPES = [
  "Celebración",
  "Evento corporativo",
  "Reserva de grupo",
  "Experiencia de marca",
];

const FORMATS = ["Sentados", "De pie", "Mixto", "Por definir"];

function buildMailto({
  space,
  eventType,
  guests,
  format,
  date,
}: {
  space: EventSpaceItem;
  eventType: string;
  guests: string;
  format: string;
  date: string;
}) {
  const subject = `Consulta de evento — ${space.name}`;
  const body = [
    "Hola, equipo Vento Group.",
    "",
    "Quisiera consultar disponibilidad para un evento.",
    "",
    `Restaurante: ${space.name}`,
    `Tipo de ocasión: ${eventType}`,
    `Número estimado de invitados: ${guests || "Por definir"}`,
    `Formato: ${format}`,
    `Fecha estimada: ${date || "Por definir"}`,
    "",
    "Nombre:",
    "Teléfono:",
    "Comentarios adicionales:",
  ].join("\n");

  return `mailto:eventos@ventogroup.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function EventSpacePlanner({ spaces, initialSlug }: EventSpacePlannerProps) {
  const initialIndex = Math.max(
    0,
    spaces.findIndex((space) => space.slug === initialSlug),
  );
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [guests, setGuests] = useState("");
  const [format, setFormat] = useState(FORMATS[0]);
  const [date, setDate] = useState("");

  const activeSpace = spaces[Math.min(activeIndex, Math.max(spaces.length - 1, 0))];
  const mailto = useMemo(() => {
    if (!activeSpace) return "mailto:eventos@ventogroup.co";
    return buildMailto({ space: activeSpace, eventType, guests, format, date });
  }, [activeSpace, eventType, guests, format, date]);

  if (!activeSpace) return null;

  return (
    <section className={styles.section} id="planificador" data-header-theme="dark">
      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Encuentra el espacio</span>
            <h2>Diseñemos la ocasión alrededor de lo que necesitas.</h2>
          </div>
          <p>
            Selecciona una sede y comparte una primera idea. El equipo confirmará disponibilidad, distribución,
            propuesta gastronómica y condiciones finales.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.spaceSelector} role="tablist" aria-label="Sedes para eventos">
            {spaces.map((space, index) => (
              <button
                key={space.id}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                className={`${styles.spaceButton} ${index === activeIndex ? styles.spaceButtonActive : ""}`.trim()}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{space.name}</strong>
              </button>
            ))}
          </div>

          <div className={styles.mediaPanel}>
            <div className={styles.media} key={activeSpace.id}>
              {activeSpace.videoUrl ? (
                <video src={activeSpace.videoUrl} autoPlay muted loop playsInline preload="metadata" />
              ) : activeSpace.imageUrl ? (
                <img src={activeSpace.imageUrl} alt={`Espacio de ${activeSpace.name}`} />
              ) : (
                <div className={styles.mediaFallback}>
                  <span>Vento Group</span>
                  <strong>{activeSpace.name}</strong>
                </div>
              )}
            </div>

            <article className={styles.spaceDetail}>
              <span className={styles.counter}>
                {String(activeIndex + 1).padStart(2, "0")} / {String(spaces.length).padStart(2, "0")}
              </span>
              <h3>{activeSpace.name}</h3>
              <p>{activeSpace.subtitle ?? "Un espacio con identidad propia para encuentros y celebraciones."}</p>

              <dl>
                <div>
                  <dt>Ubicación</dt>
                  <dd>{activeSpace.address ?? "Cúcuta, Colombia"}</dd>
                </div>
                <div>
                  <dt>Horario habitual</dt>
                  <dd>{activeSpace.schedule ?? "Sujeto a confirmación"}</dd>
                </div>
              </dl>

              {activeSpace.tags.length > 0 ? (
                <ul className={styles.tags}>
                  {activeSpace.tags.slice(0, 5).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}

              <div className={styles.spaceLinks}>
                <Link href={`/restaurantes/${activeSpace.slug}`}>Conocer restaurante</Link>
                {activeSpace.mapsUrl ? (
                  <a href={activeSpace.mapsUrl} target="_blank" rel="noreferrer">
                    Ver ubicación
                  </a>
                ) : null}
              </div>
            </article>
          </div>

          <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
            <span className={styles.formEyebrow}>Tu evento</span>

            <label>
              <span>Tipo de ocasión</span>
              <select value={eventType} onChange={(event) => setEventType(event.target.value)}>
                {EVENT_TYPES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Número estimado de invitados</span>
              <input
                type="number"
                min="1"
                inputMode="numeric"
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
                placeholder="Ej. 30"
              />
            </label>

            <label>
              <span>Formato</span>
              <select value={format} onChange={(event) => setFormat(event.target.value)}>
                {FORMATS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label>
              <span>Fecha estimada</span>
              <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>

            <a className={styles.submit} href={mailto}>
              Enviar consulta
            </a>

            <p className={styles.disclaimer}>
              Esta solicitud no confirma la reserva. El equipo de eventos validará disponibilidad y condiciones.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
