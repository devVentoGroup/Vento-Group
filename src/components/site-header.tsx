"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/restaurantes", label: "Restaurantes", description: "Espacios, conceptos y reservas" },
  { href: "/empleos", label: "Empleos", description: "Vacantes y oportunidades" },
  { href: "/servicios", label: "Servicios", description: "Capacidades y soluciones" },
  { href: "/ecosistema", label: "Ecosistema", description: "Pass, Anima y Vento OS" },
];

const HIGHLIGHTS = [
  { href: "/restaurantes", title: "Reserva tu mesa", subtitle: "Encuentra tu restaurante ideal" },
  { href: "/empleos", title: "Empleos", subtitle: "Haz parte de Vento Group" },
  { href: "mailto:hola@ventogroup.co", title: "Contacto", subtitle: "Alianzas y oportunidades" },
];

const HOME_LEFT_NAV = [
  { href: "/restaurantes", label: "Restaurantes" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empleos", label: "Empleos" },
];

const HOME_RIGHT_NAV = [
  { href: "/ecosistema", label: "Nosotros" },
  { href: "mailto:hola@ventogroup.co", label: "Contacto", external: true },
];

type ScrollState = "top" | "up" | "down";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>("top");
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const isHome = pathname === "/";

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Scroll direction tracker
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < 80) {
          setScrollState("top");
        } else if (currentY > lastScrollY.current + 4) {
          setScrollState("down");
        } else if (currentY < lastScrollY.current - 4) {
          setScrollState("up");
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body overflow lock when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Escape key closes menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Build class list
  const isHidden = scrollState === "down" && !open;
  const isScrolled = scrollState !== "top";

  const headerClass = [
    "site-header",
    isHome ? "site-header-home" : "",
    isScrolled && !isHidden ? "site-header-scrolled" : "",
    isHidden ? "site-header-hidden" : "",
    open ? "site-header-menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={headerClass}>
        <div className={`container site-header-inner ${isHome ? "site-header-home-inner" : ""}`.trim()}>
          {isHome ? (
            <>
              <nav className="home-nav-group" aria-label="Principal izquierda">
                {HOME_LEFT_NAV.map((item) => (
                  <Link key={item.href} href={item.href} className="home-nav-link">
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link href="/" aria-label="Vento Group" className="home-brand-link home-brand-link-asset">
                <img
                  className="home-brand-wordmark"
                  src="/branding/vento-wordmark-white.svg"
                  alt="Vento Group"
                  loading="eager"
                  decoding="async"
                />
              </Link>

              <nav className="home-nav-group home-nav-group-right" aria-label="Principal derecha">
                {HOME_RIGHT_NAV.map((item) =>
                  item.external ? (
                    <a key={item.href} href={item.href} className="home-nav-link">
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} className="home-nav-link">
                      {item.label}
                    </Link>
                  ),
                )}
                <button
                  type="button"
                  className={`nav-menu-btn nav-menu-btn-light ${open ? "nav-menu-btn-open" : ""}`}
                  onClick={() => setOpen((c) => !c)}
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
                <div className="brand-subtitle">Gastronomia y Hospitalidad</div>
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
                  onClick={() => setOpen((c) => !c)}
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
              <div className="brand-subtitle">Explora el portafolio completo</div>
            </div>
            <button
              type="button"
              className="nav-menu-btn nav-menu-btn-open"
              onClick={() => setOpen(false)}
            >
              Cerrar
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
              {HIGHLIGHTS.map((item) =>
                item.href.startsWith("mailto") ? (
                  <a key={item.href} href={item.href} className="site-menu-highlight-card">
                    <span className="site-menu-highlight-title">{item.title}</span>
                    <span className="site-menu-highlight-subtitle">{item.subtitle}</span>
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className="site-menu-highlight-card">
                    <span className="site-menu-highlight-title">{item.title}</span>
                    <span className="site-menu-highlight-subtitle">{item.subtitle}</span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
