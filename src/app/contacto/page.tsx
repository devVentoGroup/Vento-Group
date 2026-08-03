import type { Metadata } from "next";

import { ContactForm, type ContactInquiryType } from "@/components/contact-form";
import { EditorialIntro, EditorialPageHero } from "@/components/editorial-page";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { getBlock, getItems, getPageBlocks } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

import styles from "./contacto.module.css";

export const metadata: Metadata = {
  title: "Contacto | Vento Group",
  description: "Centraliza consultas sobre restaurantes, eventos, servicios, empleo y Vento Group.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | Vento Group",
    description: "Centraliza consultas sobre restaurantes, eventos, servicios, empleo y Vento Group.",
    url: "/contacto",
    type: "website",
  },
};

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const validTypes = new Set<ContactInquiryType>(["general", "restaurant", "event", "service", "employment"]);

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function resolveType(value: string | undefined): ContactInquiryType {
  return value && validTypes.has(value as ContactInquiryType) ? (value as ContactInquiryType) : "general";
}

const routes = [
  {
    title: "Restaurantes",
    copy: "Información general sobre sedes, experiencias y datos publicados de cada restaurante.",
  },
  {
    title: "Eventos",
    copy: "Consultas sobre celebraciones, reuniones y experiencias en los espacios disponibles.",
  },
  {
    title: "Servicios",
    copy: "Revisión inicial de los servicios publicados y su posible relación con una necesidad concreta.",
  },
  {
    title: "Empleo",
    copy: "Preguntas sobre vacantes publicadas o envío de un perfil para futuras oportunidades.",
  },
];

export default async function ContactoPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialInquiryType = resolveType(firstParam(params.tipo));
  const initialContextSlug = firstParam(params.contexto) ?? firstParam(params.restaurante) ?? firstParam(params.servicio) ?? "";

  const [blocks, restaurants, services, jobs, events] = await Promise.all([
    getPageBlocks("contacto"),
    getItems("restaurant"),
    getItems("service"),
    getItems("job"),
    getItems("event"),
  ]);

  const heroBlock = getBlock(blocks, "contacto_hero");
  const introBlock = getBlock(blocks, "contacto_intro");
  const lead = restaurants[0] ?? services[0] ?? null;
  const heroMediaUrl = heroBlock?.media_url ?? lead?.video_url ?? lead?.image_url ?? null;
  const heroMediaType = heroBlock?.media_type ?? (lead?.video_url ? "video" : "image");

  const contexts = [
    ...restaurants.map((item) => ({
      slug: item.slug,
      title: item.title,
      inquiryTypes: ["restaurant", "event"] as ContactInquiryType[],
    })),
    ...services.map((item) => ({
      slug: item.slug,
      title: item.title,
      inquiryTypes: ["service"] as ContactInquiryType[],
    })),
    ...jobs.map((item) => ({
      slug: item.slug,
      title: item.title,
      inquiryTypes: ["employment"] as ContactInquiryType[],
    })),
    ...events.map((item) => ({
      slug: item.slug,
      title: item.title,
      inquiryTypes: ["event"] as ContactInquiryType[],
    })),
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto Vento Group",
    url: absoluteUrl("/contacto"),
    mainEntity: {
      "@type": "Organization",
      name: "Vento Group",
      email: "hola@ventogroup.co",
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <StructuredData data={contactSchema} />

      <main className={styles.page}>
        <EditorialPageHero
          eyebrow={heroBlock?.subtitle ?? "Vento Group"}
          title={heroBlock?.title ?? "Hablemos"}
          copy={
            heroBlock?.body ??
            "Cuéntanos qué necesitas. Organizaremos la información para que puedas dirigirla al equipo adecuado desde tu aplicación de correo."
          }
          mediaUrl={heroMediaUrl}
          mediaType={heroMediaType}
          mediaLabel="Contacto Vento Group"
          primaryAction={{ label: "Iniciar consulta", href: "#formulario" }}
          secondaryAction={{ label: "Ver restaurantes", href: "/restaurantes" }}
        />

        <EditorialIntro
          eyebrow="Un punto de entrada"
          title={introBlock?.title ?? "Una consulta clara llega más rápido al equipo correcto."}
          copy={
            introBlock?.body ??
            "Selecciona el motivo, agrega el contexto disponible y describe tu necesidad. La página preparará un correo estructurado para que puedas revisarlo antes de enviarlo."
          }
          aside={
            <dl className={styles.stats}>
              <div>
                <dt>Canal de contacto</dt>
                <dd>Correo</dd>
              </div>
              <div>
                <dt>Almacenamiento web</dt>
                <dd>No</dd>
              </div>
            </dl>
          }
        />

        <section className={styles.routes} data-header-theme="dark">
          <div className={styles.shell}>
            <div className={styles.routesIntro}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow}>Rutas de consulta</span>
                <h2>Cada conversación comienza con un contexto.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>
                  Estas categorías no prometen tiempos de respuesta ni disponibilidad. Sirven únicamente para organizar
                  el mensaje antes de abrir el correo.
                </p>
              </Reveal>
            </div>

            <div className={styles.routeGrid}>
              {routes.map((route, index) => (
                <Reveal key={route.title} delayMs={index * 60} mode="once" threshold={0.08}>
                  <article className={styles.route}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{route.title}</h3>
                    <p>{route.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.contactSection} id="formulario" data-header-theme="light">
          <div className={styles.shell}>
            <div className={styles.contactHeader}>
              <Reveal mode="once" threshold={0.12}>
                <span className={styles.eyebrow}>Preparar consulta</span>
                <h2>Escribe con el contexto necesario.</h2>
              </Reveal>
              <Reveal delayMs={90} mode="once" threshold={0.12}>
                <p>
                  Al finalizar se abrirá tu aplicación de correo con el destinatario, asunto y contenido preparados. La
                  página no conserva la información ingresada.
                </p>
              </Reveal>
            </div>

            <ContactForm
              contexts={contexts}
              initialInquiryType={initialInquiryType}
              initialContextSlug={initialContextSlug}
            />
          </div>
        </section>

        <section className={styles.note} data-header-theme="light">
          <div className={`${styles.shell} ${styles.noteGrid}`}>
            <Reveal mode="once" threshold={0.12}>
              <h2>Control antes de enviar.</h2>
            </Reveal>
            <Reveal delayMs={90} mode="once" threshold={0.12}>
              <p>
                El correo solo sale cuando lo confirmas desde tu aplicación. Puedes editar, eliminar o completar cualquier
                dato antes del envío. Si el dispositivo no tiene una aplicación de correo configurada, puedes escribir
                directamente a hola@ventogroup.co.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
