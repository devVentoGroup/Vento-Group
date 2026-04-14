"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/restaurantes", label: "Restaurantes", description: "Venues, conceptos y reservas" },
  { href: "/empleos", label: "Empleos", description: "Vacantes y oportunidades" },
  { href: "/servicios", label: "Servicios", description: "Capacidades y soluciones" },
  { href: "/eventos", label: "Eventos", description: "Agenda y experiencias" },
  { href: "/ecosistema", label: "Ecosistema", description: "Pass, Anima y Vento OS" },
];

const HIGHLIGHTS = [
  { href: "/servicios", title: "Gift Cards", subtitle: "Experiencias para regalar" },
  { href: "/empleos", title: "Careers", subtitle: "Join Vento Group" },
  { href: "/eventos", title: "Private Events", subtitle: "Book your next moment" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      setHidden(false);
      return;
    }

    const THRESHOLD = 8;
    const SHOW_AT_TOP = 72;

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      setScrolled(currentY > 28);

      if (open || currentY <= SHOW_AT_TOP) {
        setHidden(false);
      } else if (delta > THRESHOLD) {
        setHidden(true);
      } else if (delta < -THRESHOLD) {
        setHidden(false);
      }

      lastScrollYRef.current = currentY;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(update);
    };

    lastScrollYRef.current = window.scrollY;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${isHome ? "site-header-home" : ""} ${isHome && scrolled ? "site-header-home-scrolled" : ""} ${isHome && hidden && !open ? "site-header-home-hidden" : ""}`.trim()}
      >
        <div className={`container site-header-inner ${isHome ? "site-header-home-inner" : ""}`.trim()}>
          {isHome ? (
            <>
              <nav className="home-nav-group" aria-label="Principal izquierda">
                <Link href="/restaurantes" className="home-nav-link">
                  Restaurantes
                </Link>
                <Link href="/eventos" className="home-nav-link">
                  Eventos
                </Link>
                <Link href="/ecosistema" className="home-nav-link">
                  Ecosistema
                </Link>
              </nav>

              <Link href="/" aria-label="Vento Group" className="home-brand-link">
                <div className="brand">Vento Group</div>
                <div className="brand-subtitle">Hospitality Ecosystem</div>
              </Link>

              <nav className="home-nav-group home-nav-group-right" aria-label="Principal derecha">
                <Link href="/empleos" className="home-nav-link">
                  Empleos
                </Link>
                <Link href="/servicios" className="home-nav-link">
                  Servicios
                </Link>
                <a href="mailto:hola@ventogroup.co" className="home-nav-link">
                  Contacto
                </a>
                <button
                  type="button"
                  className={`nav-menu-btn nav-menu-btn-light ${open ? "nav-menu-btn-open" : ""}`}
                  onClick={() => setOpen((current) => !current)}
                  aria-expanded={open}
                  aria-controls="site-overlay-menu"
                >
                  Menu
                </button>
              </nav>
            </>
          ) : (
            <>
              <Link href="/" aria-label="Vento Group">
                <div className="brand">Vento Group</div>
                <div className="brand-subtitle">Hospitality Ecosystem</div>
              </Link>

              <nav className="nav-links" aria-label="Principal">
                {NAV.slice(0, 3).map((item) => (
                  <Link key={item.href} href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className={`nav-menu-btn ${open ? "nav-menu-btn-open" : ""}`}
                  onClick={() => setOpen((current) => !current)}
                  aria-expanded={open}
                  aria-controls="site-overlay-menu"
                >
                  Menu
                </button>
                <Link href="/ecosistema" className="nav-cta">
                  Entrar a Vento OS
                </Link>
              </nav>
            </>
          )}
        </div>
      </header>

      <div
        id="site-overlay-menu"
        className={`site-menu-overlay ${open ? "site-menu-overlay-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="site-menu-shell">
          <div className="site-menu-top">
            <div>
              <div className="brand">Vento Group</div>
              <div className="brand-subtitle">Explore the full portfolio</div>
            </div>
            <button type="button" className="nav-menu-btn nav-menu-btn-open" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>

          <div className="site-menu-grid">
            <div className="site-menu-list">
              {NAV.map((item) => (
                <Link key={item.href} href={item.href} className="site-menu-link">
                  <span className="site-menu-link-title">{item.label}</span>
                  <span className="site-menu-link-description">{item.description}</span>
                </Link>
              ))}
            </div>

            <div className="site-menu-highlights">
              {HIGHLIGHTS.map((item) => (
                <Link key={item.href} href={item.href} className="site-menu-highlight-card">
                  <span className="site-menu-highlight-title">{item.title}</span>
                  <span className="site-menu-highlight-subtitle">{item.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
