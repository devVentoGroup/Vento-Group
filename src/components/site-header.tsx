"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./site-header.module.css";

const NAV = [
  { href: "/restaurantes", label: "Restaurantes" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empleos", label: "Empleos" },
  { href: "/ecosistema", label: "Nosotros" },
];

const MENU = [
  ...NAV,
  { href: "/eventos", label: "Eventos" },
];

const QUICK_LINKS = [
  { href: "/restaurantes", label: "Reservar una mesa" },
  { href: "/empleos", label: "Trabajar con nosotros" },
  { href: "mailto:hola@ventogroup.co", label: "Contacto" },
];

type HeaderState = "top" | "compact" | "hidden";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<HeaderState>("top");
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    setOpen(false);
    setState(window.scrollY < 72 ? "top" : "compact");
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current || open) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentY = Math.max(window.scrollY, 0);
        const delta = currentY - lastY.current;

        if (currentY < 72) {
          setState("top");
        } else if (delta > 6) {
          setState("hidden");
        } else if (delta < -6) {
          setState("compact");
        }

        lastY.current = currentY;
        ticking.current = false;
      });
    };

    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  const headerClass = [
    styles.header,
    state === "hidden" ? styles.hidden : "",
    state === "compact" ? styles.compact : "",
    open ? styles.menuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <div className={styles.inner}>
          <nav className={styles.nav} aria-label="Navegación principal">
            {NAV.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${pathname.startsWith(item.href) ? styles.active : ""}`.trim()}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/" aria-label="Vento Group — Inicio" className={styles.brand}>
            <img
              className={styles.logo}
              src="/branding/vento-wordmark-white.svg"
              alt="Vento Group"
              loading="eager"
              decoding="async"
            />
          </Link>

          <div className={styles.actions}>
            <Link
              href="/ecosistema"
              className={`${styles.link} ${pathname.startsWith("/ecosistema") ? styles.active : ""}`.trim()}
            >
              Nosotros
            </Link>
            <a href="mailto:hola@ventogroup.co" className={styles.link}>
              Contacto
            </a>
            <button
              ref={triggerRef}
              type="button"
              className={styles.menuButton}
              onClick={() => setOpen((current) => !current)}
              aria-expanded={open}
              aria-controls="site-global-menu"
            >
              <span className={styles.menuLabel}>{open ? "Cerrar" : "Menú"}</span>
              <span className={styles.menuIcon} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-global-menu"
        ref={menuRef}
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`.trim()}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
      >
        <div className={styles.panel}>
          <nav className={styles.menuNav} aria-label="Navegación completa">
            {MENU.map((item, index) => (
              <Link key={item.href} href={item.href} className={styles.menuLink} tabIndex={open ? 0 : -1}>
                <span className={styles.menuTitle}>{item.label}</span>
                <span className={styles.menuIndex}>{String(index + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>

          <aside className={styles.menuAside}>
            <p className={styles.menuCopy}>
              Restaurantes, experiencias, talento y herramientas conectadas bajo una sola identidad Vento.
            </p>
            <div className={styles.quickLinks}>
              {QUICK_LINKS.map((item) =>
                item.href.startsWith("mailto:") ? (
                  <a key={item.href} href={item.href} className={styles.quickLink} tabIndex={open ? 0 : -1}>
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={styles.quickLink} tabIndex={open ? 0 : -1}>
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
