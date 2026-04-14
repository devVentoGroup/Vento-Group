import Link from "next/link";

type SiteFooterProps = {
  venues?: string[];
};

export function SiteFooter({ venues = [] }: SiteFooterProps) {
  const topVenues = venues.length > 0 ? venues.slice(0, 10) : ["Restaurantes", "Eventos", "Servicios", "Empleos"];

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-watermark footer-watermark-top" aria-hidden="true">
          VENTO
        </div>

        <div className="footer-venues">
          {topVenues.map((venue) => (
            <span key={venue}>{venue}</span>
          ))}
        </div>

        <div className="footer-links-row">
          <div className="footer-links-group">
            <Link href="/restaurantes">Restaurantes</Link>
            <Link href="/empleos">Careers</Link>
            <Link href="/servicios">Servicios</Link>
            <a href="mailto:hola@ventogroup.co">Contacto</a>
          </div>
          <div className="footer-links-group">
            <Link href="/eventos">Eventos</Link>
            <Link href="/ecosistema">Vento OS</Link>
          </div>
        </div>

        <div className="footer-bottom-row">
          <span>© 2026 Vento Group. All rights reserved.</span>
          <span>Hospitality ecosystem</span>
        </div>

        <div className="footer-watermark footer-watermark-bottom" aria-hidden="true">
          GROUP
        </div>
      </div>
    </footer>
  );
}
