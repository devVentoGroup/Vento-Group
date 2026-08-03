"use client";

import { useMemo, useState } from "react";

import styles from "./career-opportunities.module.css";

export type CareerOpportunityItem = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  location: string | null;
  schedule: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
  actionLabel: string | null;
  actionUrl: string | null;
};

type CareerOpportunitiesProps = {
  items: CareerOpportunityItem[];
};

function cleanValue(value: string | null | undefined) {
  return value?.trim() || null;
}

function parseBody(body: string | null) {
  const lines = (body ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const bullets = lines
    .filter((line) => /^[-*•]\s+/.test(line))
    .map((line) => line.replace(/^[-*•]\s+/, "").trim())
    .filter(Boolean);

  const paragraphs = lines.filter((line) => !/^[-*•]\s+/.test(line));

  return {
    description: paragraphs.join(" "),
    bullets,
  };
}

function applicationHref(item: CareerOpportunityItem) {
  if (item.actionUrl && item.actionUrl !== "#") return item.actionUrl;

  const subject = `Postulación: ${item.title}`;
  const body = [
    `Hola, quiero postularme a la vacante ${item.title}.`,
    item.location ? `Sede: ${item.location}.` : null,
    "Adjunto o comparto mi hoja de vida para revisión.",
  ]
    .filter(Boolean)
    .join("\n\n");

  return `mailto:hola@ventogroup.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function CareerOpportunities({ items }: CareerOpportunitiesProps) {
  const [locationFilter, setLocationFilter] = useState("all");
  const [scheduleFilter, setScheduleFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(items[0]?.id ?? "");

  const locations = useMemo(
    () =>
      [...new Set(items.map((item) => cleanValue(item.location)).filter((value): value is string => Boolean(value)))].sort(
        (a, b) => a.localeCompare(b, "es"),
      ),
    [items],
  );

  const schedules = useMemo(
    () =>
      [...new Set(items.map((item) => cleanValue(item.schedule)).filter((value): value is string => Boolean(value)))].sort(
        (a, b) => a.localeCompare(b, "es"),
      ),
    [items],
  );

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        const locationMatches = locationFilter === "all" || item.location === locationFilter;
        const scheduleMatches = scheduleFilter === "all" || item.schedule === scheduleFilter;
        return locationMatches && scheduleMatches;
      }),
    [items, locationFilter, scheduleFilter],
  );

  const selectedItem =
    filteredItems.find((item) => item.id === selectedId) ?? filteredItems[0] ?? null;
  const selectedBody = selectedItem ? parseBody(selectedItem.body) : null;

  const selectItem = (id: string) => {
    setSelectedId(id);
  };

  if (items.length === 0) {
    return (
      <section className={styles.empty} aria-labelledby="careers-empty-title">
        <span className={styles.emptyEyebrow}>Oportunidades actuales</span>
        <h3 id="careers-empty-title">Todavía no hay vacantes publicadas.</h3>
        <p>
          Puedes compartir tu perfil para futuras oportunidades. El equipo revisará tu experiencia cuando se abra un
          cargo relacionado.
        </p>
        <a
          className={styles.primaryLink}
          href={`mailto:hola@ventogroup.co?subject=${encodeURIComponent("Perfil para futuras oportunidades en Vento Group")}`}
        >
          Enviar perfil
        </a>
      </section>
    );
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.toolbar}>
        <div>
          <span className={styles.resultCount}>{String(filteredItems.length).padStart(2, "0")}</span>
          <span className={styles.resultLabel}>
            {filteredItems.length === 1 ? "oportunidad disponible" : "oportunidades disponibles"}
          </span>
        </div>

        <div className={styles.filters} aria-label="Filtrar vacantes">
          {locations.length > 1 ? (
            <label>
              <span>Sede</span>
              <select value={locationFilter} onChange={(event) => setLocationFilter(event.target.value)}>
                <option value="all">Todas</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </label>
          ) : null}

          {schedules.length > 1 ? (
            <label>
              <span>Modalidad</span>
              <select value={scheduleFilter} onChange={(event) => setScheduleFilter(event.target.value)}>
                <option value="all">Todas</option>
                {schedules.map((schedule) => (
                  <option key={schedule} value={schedule}>
                    {schedule}
                  </option>
                ))}
              </select>
            </label>
          ) : null}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <div className={styles.noResults}>
          <h3>No hay vacantes con estos filtros.</h3>
          <button
            type="button"
            onClick={() => {
              setLocationFilter("all");
              setScheduleFilter("all");
            }}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div className={styles.workspace}>
          <div className={styles.list} aria-label="Vacantes disponibles">
            {filteredItems.map((item, index) => {
              const isActive = item.id === selectedItem?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.row} ${isActive ? styles.rowActive : ""}`.trim()}
                  aria-pressed={isActive}
                  onClick={() => selectItem(item.id)}
                  onFocus={() => selectItem(item.id)}
                >
                  <span className={styles.rowNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.rowMain}>
                    <strong>{item.title}</strong>
                    <span>{item.excerpt ?? "Conoce los detalles de esta oportunidad."}</span>
                  </span>
                  <span className={styles.rowMeta}>{item.location ?? "Vento Group"}</span>
                  <span className={styles.rowArrow} aria-hidden="true">
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {selectedItem ? (
            <article className={styles.detail} aria-live="polite">
              <div className={styles.detailMedia}>
                {selectedItem.videoUrl ? (
                  <video src={selectedItem.videoUrl} autoPlay muted loop playsInline preload="metadata" />
                ) : selectedItem.imageUrl ? (
                  <img src={selectedItem.imageUrl} alt={`Equipo y entorno de ${selectedItem.title}`} />
                ) : (
                  <div className={styles.mediaFallback} aria-hidden="true">
                    <span>Vento Group</span>
                    <strong>{selectedItem.title}</strong>
                  </div>
                )}
              </div>

              <div className={styles.detailBody}>
                <span className={styles.detailEyebrow}>Oportunidad activa</span>
                <h3>{selectedItem.title}</h3>

                <dl className={styles.detailMeta}>
                  <div>
                    <dt>Sede</dt>
                    <dd>{selectedItem.location ?? "Vento Group"}</dd>
                  </div>
                  <div>
                    <dt>Modalidad</dt>
                    <dd>{selectedItem.schedule ?? "Por confirmar"}</dd>
                  </div>
                </dl>

                <p className={styles.detailDescription}>
                  {selectedBody?.description || selectedItem.excerpt || "Revisa los detalles y comparte tu perfil."}
                </p>

                {selectedBody && selectedBody.bullets.length > 0 ? (
                  <ul className={styles.requirements}>
                    {selectedBody.bullets.map((requirement) => (
                      <li key={requirement}>{requirement}</li>
                    ))}
                  </ul>
                ) : null}

                <a className={styles.primaryLink} href={applicationHref(selectedItem)}>
                  {selectedItem.actionLabel ?? "Aplicar a esta vacante"}
                </a>
              </div>
            </article>
          ) : null}
        </div>
      )}
    </div>
  );
}
