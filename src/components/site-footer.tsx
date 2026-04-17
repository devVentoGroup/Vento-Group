import Link from "next/link";

type SiteFooterProps = {
  venues?: string[];
};

export function SiteFooter({ venues = [] }: SiteFooterProps) {
  const topVenues = venues.length > 0 ? venues.slice(0, 10) : ["Restaurantes", "Eventos", "Servicios", "Empleos"];

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-mark footer-mark-top" aria-hidden="true">
          <img src="/branding/vento-wordmark-white.svg" alt="" />
        </div>

        <div className="footer-venues">
          {topVenues.map((venue) => (
            <span key={venue}>{venue}</span>
          ))}
        </div>

        <div className="footer-links-row footer-links-row-main">
          <nav className="footer-links-group" aria-label="Footer navigation">
            <Link href="/ecosistema">Nosotros</Link>
            <Link href="/empleos">Empleos</Link>
            <a href="mailto:hola@ventogroup.co">Contacto</a>
          </nav>

          <div className="footer-subscribe">
            <label htmlFor="footer-email" className="sr-only">
              Correo
            </label>
            <input id="footer-email" type="email" placeholder="Correo electrónico" />
            <button type="button" className="button button-outline-light">
              Suscribirse
            </button>
          </div>

          <nav className="footer-links-group footer-links-group-social" aria-label="Social links">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer noopener">
              YouTube
            </a>
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-links-group">
            <Link href="/servicios">Bonos</Link>
            <Link href="/eventos">Eventos</Link>
            <Link href="/restaurantes">Restaurantes</Link>
          </div>
          <span>© 2026 Vento Group. Todos los derechos reservados.</span>
        </div>

        <div className="footer-mark footer-mark-bottom" aria-hidden="true">
          <img src="/branding/vento-wordmark-white.svg" alt="" />
        </div>
      </div>
    </footer>
  );
}
