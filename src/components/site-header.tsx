"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type CSSProperties, useEffect, useRef, useState } from "react";

import styles from "./site-header.module.css";

export type HeaderVenue = {
  id: string;
  title: string;
  href: string;
  excerpt: string | null;
  imageUrl: string | null;
  videoUrl: string | null;
};

type PersistentSiteHeaderProps = {
  venues: HeaderVenue[];
};

type HeaderTone = "light" | "dark";
type ScrollDirection = "up" | "down" | null;

const VENUE_TONES = ["#222320", "#202723", "#2a211f", "#242127", "#29251f", "#1f2528"];

const MOBILE_NAV = [
  { href: "/eventos", label: "Eventos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/empleos", label: "Empleos" },
  { href: "/ecosistema", label: "Nosotros" },
];

const DARK_SECTION_SELECTOR = [
  '[data-header-theme="dark"]',
  ".darling-hero",
  ".category-hero",
  ".careers-hero",
  ".image-banner",
  ".cta-banner",
  ".restaurantes-experience-feature",
  ".eventos-spaces-feature",
].join(",");

/**
 * Compatibility shim while page-level headers are removed incrementally.
 * The persistent header is mounted once from the root layout.
 */
export function SiteHeader() {
  return null;
}

export function PersistentSiteHeader({ venues }: PersistentSiteHeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const venuesTriggerRef = useRef<HTMLButtonElement | null>(null);
  const lastYRef = useRef(0);
  const directionRef = useRef<ScrollDirection>(null);
  const travelRef = useRef(0);
  const tickingRef = useRef(false);
  const menuOpenRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(true);
  const [tone, setTone] = useState<HeaderTone>("light");
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVenueIndex, setActiveVenueIndex] = useState(0);

  const resolvedVenues = venues.length > 0
    ? venues
    : [
        {
          id: "venues-fallback",
          title: "Restaurantes Vento",
          href: "/restaurantes",
          excerpt: "Explora el portafolio gastronómico de Vento Group.",
          imageUrl: null,
          videoUrl: null,
        },
      ];
  const activeVenue = resolvedVenues[Math.min(activeVenueIndex, resolvedVenues.length - 1)];
  const modalStyle = {
    "--venue-tone": VENUE_TONES[activeVenueIndex % VENUE_TONES.length],
  } as CSSProperties;

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openVenues = () => {
    clearCloseTimer();
    setMenuMounted(true);
    setVisible(true);
    window.requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeVenues = (returnFocus = true) => {
    clearCloseTimer();
    setMenuOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setMenuMounted(false);
      closeTimerRef.current = null;
      if (returnFocus) venuesTriggerRef.current?.focus();
    }, 460);
  };

  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (menuOpen) {
      setVisible(true);
      setTone("dark");
    }
  }, [menuOpen]);

  useEffect(() => {
    clearCloseTimer();
    setMenuOpen(false);
    setMenuMounted(false);
    setVisible(true);
    setActiveVenueIndex(0);
    lastYRef.current = window.scrollY;
    directionRef.current = null;
    travelRef.current = 0;
  }, [pathname]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    const readTone = () => {
      if (menuOpenRef.current) return;

      const currentY = Math.max(window.scrollY, 0);
      if (pathname === "/" && currentY < 96 && !document.body.classList.contains("home-intro-complete")) {
        setTone("light");
        return;
      }

      const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 76;
      const sampleY = Math.max(12, Math.min(headerHeight / 2, 46));
      const sampleX = Math.max(12, Math.min(window.innerWidth / 2, window.innerWidth - 12));
      const elements = document.elementsFromPoint(sampleX, sampleY);
      let nextTone: HeaderTone = "light";

      for (const element of elements) {
        if (headerRef.current?.contains(element) || modalRef.current?.contains(element)) continue;

        const explicitTheme = element.closest<HTMLElement>("[data-header-theme]")?.dataset.headerTheme;
        if (explicitTheme === "dark" || explicitTheme === "light") {
          nextTone = explicitTheme;
          break;
        }

        if (element.closest(DARK_SECTION_SELECTOR) && !element.closest(".venue-hero")) {
          nextTone = "dark";
          break;
        }
      }

      setTone(nextTone);
    };

    const update = () => {
      tickingRef.current = false;
      const currentY = Math.max(window.scrollY, 0);
      const delta = currentY - lastYRef.current;
      readTone();

      if (!menuOpenRef.current) {
        if (currentY < 18) {
          setVisible(true);
          directionRef.current = null;
          travelRef.current = 0;
        } else if (Math.abs(delta) >= 1) {
          const nextDirection: ScrollDirection = delta > 0 ? "down" : "up";
          if (directionRef.current !== nextDirection) {
            directionRef.current = nextDirection;
            travelRef.current = 0;
          }

          travelRef.current += Math.abs(delta);

          if (nextDirection === "down" && currentY > 100 && travelRef.current >= 42) {
            setVisible(false);
            travelRef.current = 0;
          }

          if (nextDirection === "up" && travelRef.current >= 18) {
            setVisible(true);
            travelRef.current = 0;
          }
        }
      }

      lastYRef.current = currentY;
    };

    const scheduleUpdate = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(update);
    };

    const bodyObserver = new MutationObserver(scheduleUpdate);
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      bodyObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuMounted) return;

    const modal = modalRef.current;
    if (modal) modal.inert = !menuOpen;
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = modal?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeVenues();
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
    };
  }, [menuMounted, menuOpen]);

  const headerClass = [
    styles.header,
    visible ? styles.visible : styles.hidden,
    tone === "dark" ? styles.toneDark : styles.toneLight,
    menuOpen ? styles.menuOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header ref={headerRef} className={headerClass} data-persistent-header style={menuOpen ? modalStyle : undefined}>
        <div className={styles.inner}>
          <nav className={styles.navLeft} aria-label="Navegación principal izquierda">
            <button
              ref={venuesTriggerRef}
              type="button"
              className={`${styles.navLink} ${styles.venuesTrigger} ${isActive("/restaurantes") ? styles.active : ""}`.trim()}
              onClick={() => (menuOpen ? closeVenues() : openVenues())}
              aria-expanded={menuOpen}
              aria-controls="vento-venues-dialog"
            >
              {menuOpen ? "Cerrar" : "Restaurantes"}
            </button>
            <Link className={`${styles.navLink} ${isActive("/eventos") ? styles.active : ""}`.trim()} href="/eventos">
              Eventos
            </Link>
            <Link className={`${styles.navLink} ${isActive("/servicios") ? styles.active : ""}`.trim()} href="/servicios">
              Servicios
            </Link>
          </nav>

          <Link href="/" aria-label="Vento Group — Inicio" className={styles.brand}>
            <img
              className={`${styles.logo} ${menuOpen ? styles.logoHidden : ""}`.trim()}
              src="/branding/vento-wordmark-white.svg"
              alt="Vento Group"
              loading="eager"
              decoding="async"
            />
            <span className={`${styles.monogram} ${menuOpen ? styles.monogramVisible : ""}`.trim()} aria-hidden="true">
              <span>V</span>
              <span>G</span>
            </span>
          </Link>

          <nav className={styles.navRight} aria-label="Navegación principal derecha">
            <Link className={`${styles.navLink} ${isActive("/empleos") ? styles.active : ""}`.trim()} href="/empleos">
              Empleos
            </Link>
            <Link className={`${styles.navLink} ${isActive("/ecosistema") ? styles.active : ""}`.trim()} href="/ecosistema">
              Nosotros
            </Link>
            <a className={styles.navLink} href="mailto:hola@ventogroup.co">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {menuMounted ? (
        <div
          id="vento-venues-dialog"
          ref={modalRef}
          className={`${styles.venuesOverlay} ${menuOpen ? styles.venuesOverlayOpen : styles.venuesOverlayClosing}`.trim()}
          role="dialog"
          aria-modal="true"
          aria-label="Restaurantes Vento Group"
          aria-hidden={!menuOpen}
          style={modalStyle}
        >
          <div className={styles.venuesShell}>
            <section className={styles.venuesListPanel}>
              <p className={styles.venuesEyebrow}>Nuestros restaurantes</p>
              <nav className={styles.venuesList} aria-label="Restaurantes">
                {resolvedVenues.map((venue, index) => (
                  <Link
                    key={venue.id}
                    href={venue.href}
                    className={`${styles.venueLink} ${index === activeVenueIndex ? styles.venueLinkActive : ""}`.trim()}
                    onMouseEnter={() => setActiveVenueIndex(index)}
                    onFocus={() => setActiveVenueIndex(index)}
                  >
                    {venue.title}
                  </Link>
                ))}
              </nav>

              <nav className={styles.mobileNav} aria-label="Otras páginas">
                {MOBILE_NAV.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <a href="mailto:hola@ventogroup.co">Contacto</a>
              </nav>
            </section>

            <section className={styles.venuePreview} aria-live="polite">
              <div className={styles.venueMedia} key={`${activeVenue.id}-${activeVenueIndex}`}>
                {activeVenue.videoUrl ? (
                  <video src={activeVenue.videoUrl} autoPlay muted loop playsInline />
                ) : activeVenue.imageUrl ? (
                  <img src={activeVenue.imageUrl} alt="" />
                ) : (
                  <div className={styles.venueFallback}>
                    <span>Vento Group</span>
                    <strong>{activeVenue.title}</strong>
                  </div>
                )}
              </div>
              <div className={styles.venueCaption}>
                <span>{String(activeVenueIndex + 1).padStart(2, "0")}</span>
                <p>{activeVenue.excerpt ?? "Hospitalidad, gastronomía y experiencias con identidad propia."}</p>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}
