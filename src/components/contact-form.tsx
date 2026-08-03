"use client";

import { useMemo, useState, type FormEvent } from "react";

import styles from "./contact-form.module.css";

export type ContactInquiryType = "general" | "restaurant" | "event" | "service" | "employment";

export type ContactContextOption = {
  slug: string;
  title: string;
  inquiryTypes: ContactInquiryType[];
};

type ContactFormProps = {
  contexts: ContactContextOption[];
  initialInquiryType?: ContactInquiryType;
  initialContextSlug?: string;
};

const inquiryLabels: Record<ContactInquiryType, string> = {
  general: "Consulta general",
  restaurant: "Restaurantes",
  event: "Eventos y celebraciones",
  service: "Servicios",
  employment: "Empleo y talento",
};

function formValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm({
  contexts,
  initialInquiryType = "general",
  initialContextSlug = "",
}: ContactFormProps) {
  const [inquiryType, setInquiryType] = useState<ContactInquiryType>(initialInquiryType);
  const [contextSlug, setContextSlug] = useState(initialContextSlug);
  const [prepared, setPrepared] = useState(false);

  const availableContexts = useMemo(
    () => contexts.filter((context) => context.inquiryTypes.includes(inquiryType)),
    [contexts, inquiryType],
  );

  const selectedContext = contexts.find((context) => context.slug === contextSlug) ?? null;

  const changeInquiryType = (nextType: ContactInquiryType) => {
    setInquiryType(nextType);
    setPrepared(false);
    const currentContext = contexts.find((context) => context.slug === contextSlug);
    if (!currentContext?.inquiryTypes.includes(nextType)) setContextSlug("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formValue(formData, "name");
    const email = formValue(formData, "email");
    const phone = formValue(formData, "phone");
    const message = formValue(formData, "message");
    const contextTitle = selectedContext?.title ?? "Sin contexto específico";

    const subject = `${inquiryLabels[inquiryType]} — ${name}`;
    const body = [
      `Tipo de consulta: ${inquiryLabels[inquiryType]}`,
      `Contexto: ${contextTitle}`,
      `Nombre: ${name}`,
      `Correo de respuesta: ${email}`,
      phone ? `Teléfono: ${phone}` : null,
      "",
      "Mensaje:",
      message,
      "",
      "Enviado desde la página de contacto de Vento Group.",
    ]
      .filter((line) => line !== null)
      .join("\n");

    setPrepared(true);
    window.location.href = `mailto:hola@ventogroup.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.reasonFieldset}>
        <legend>¿Sobre qué quieres hablar?</legend>
        <div className={styles.reasonGrid}>
          {(Object.entries(inquiryLabels) as [ContactInquiryType, string][]).map(([value, label], index) => (
            <label key={value} className={`${styles.reason} ${inquiryType === value ? styles.reasonActive : ""}`.trim()}>
              <input
                type="radio"
                name="inquiry_type"
                value={value}
                checked={inquiryType === value}
                onChange={() => changeInquiryType(value)}
              />
              <span className={styles.reasonNumber}>{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span>Nombre completo</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={120} required />
        </label>

        <label className={styles.field}>
          <span>Correo electrónico</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>

        <label className={styles.field}>
          <span>Teléfono <small>opcional</small></span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>

        {availableContexts.length > 0 ? (
          <label className={styles.field}>
            <span>{inquiryType === "employment" ? "Vacante" : "Contexto"} <small>opcional</small></span>
            <select value={contextSlug} onChange={(event) => setContextSlug(event.target.value)}>
              <option value="">Seleccionar</option>
              {availableContexts.map((context) => (
                <option key={`${inquiryType}-${context.slug}`} value={context.slug}>
                  {context.title}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        <label className={`${styles.field} ${styles.messageField}`.trim()}>
          <span>Mensaje</span>
          <textarea
            name="message"
            minLength={20}
            maxLength={5000}
            rows={8}
            placeholder="Cuéntanos lo necesario para dirigir tu consulta al equipo correcto."
            required
          />
        </label>
      </div>

      <label className={styles.consent}>
        <input type="checkbox" required />
        <span>
          Entiendo que esta página no almacena mis datos ni envía el mensaje automáticamente. Al continuar se abrirá
          mi aplicación de correo para que pueda revisar y enviar la consulta.
        </span>
      </label>

      <div className={styles.submitRow}>
        <button type="submit">Preparar correo</button>
        <p aria-live="polite">
          {prepared
            ? "El correo fue preparado. Revisa tu aplicación de correo para completar el envío."
            : "El mensaje solo se enviará cuando lo confirmes desde tu aplicación de correo."}
        </p>
      </div>
    </form>
  );
}
