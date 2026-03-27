"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      <header className="site-header">
        <div className="container site-header-inner">
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
