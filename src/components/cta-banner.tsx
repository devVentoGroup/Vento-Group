import Link from "next/link";

type CtaBannerProps = {
  title: string;
  copy?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Banner de cierre con titulo grande + CTA (estilo Darling .itcb "Join the crew").
 * Reutilizable al final de cualquier pagina interna.
 */
export function CtaBanner({ title, copy, ctaLabel, ctaHref = "/" }: CtaBannerProps) {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(ctaHref);

  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <h2 className="cta-banner-title">{title}</h2>
        {copy ? <p className="cta-banner-copy">{copy}</p> : null}
        {ctaLabel ? (
          isExternal ? (
            <a className="button button-primary" href={ctaHref}>
              {ctaLabel}
            </a>
          ) : (
            <Link className="button button-primary" href={ctaHref}>
              {ctaLabel}
            </Link>
          )
        ) : null}
      </div>
    </section>
  );
}
