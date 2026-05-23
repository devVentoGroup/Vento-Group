# Plan: dejar Vento Group Web al nivel de Darling Group (animación + distribución)

> Referencia: https://darlinggroup.com.au/ (Gatsby + **Lenis** smooth scroll)
> Sitio: https://ventogroup.co (Next.js 16 + Supabase, contenido desde VISO)
> Alcance: **solo animación y distribución/layout**. El contenido es de Vento.

---

## 1. Diagnóstico

### Arquitectura (cómo se conecta todo)
- La web **solo lee** dos tablas de Supabase: `website_blocks` (bloques por página) y `website_items` (tarjetas por categoría).
- **VISO** (`vento-viso`, sección `/website-cms`) es quien **escribe** esas tablas.
- Si falta media, la web pinta un placeholder automático.

### Qué está bien
- La **home** ya replica el lenguaje Darling: hero inmersivo con carrusel de video, splash de marca (VENTO/GROUP), parallax con el mouse, barra de progreso, arrastre táctil y reveals sección a sección. La estructura de la home es casi un calco de la de Darling.
- Ya existe el componente `Reveal` (IntersectionObserver) y respeta `prefers-reduced-motion`.

### Qué falta (lo importante)
1. **No hay scroll suave (Lenis).** Darling se siente "mantequilla" por esto; Vento no lo tiene en ninguna página (confirmado: `<html>` sin clase `lenis`).
2. **Las páginas internas son planas.** `/empleos`, `/servicios`, `/eventos`, `/restaurantes`, `/ecosistema` son solo *hero + grilla de tarjetas*. Ejemplo medido: `/empleos` = 1.228px de alto; el Careers de Darling = 9.218px con 7 secciones distintas.
3. **Sin transiciones entre páginas** (Darling/Gatsby hace fundidos al navegar).
4. **Sin "stagger"**: las tarjetas aparecen todas de golpe, no en cascada.
5. **Faltan tipos de sección "Darling"** reutilizables: banda editorial alternada (texto/imagen), image-banner full-bleed con parallax, slider de valores/equipo, pasos numerados (step-value), banner CTA (estilo "Join the crew"), y formulario de reserva.
6. **No hay página de Contacto** (Darling tiene `/contact`; Vento solo usa `mailto:`).
7. **El CMS está vacío**: el sitio en vivo muestra placeholders ("Vacante destacada", etc.). Hay que poblar `website_items`/`website_blocks` desde VISO o revisar las env vars de Supabase en Vercel.

### Mapa de páginas (Darling → Vento)
| Darling | Vento | Estado Vento |
|---|---|---|
| `/` Home | `/` | Fuerte (casi listo) |
| Venue (`/higher-ground`…) | `/restaurantes/[slug]` | Medio |
| `/careers` | `/empleos` | Plano |
| `/about-us` | `/ecosistema` | Plano |
| `/events` | `/eventos` | Plano |
| `/vouchers` | `/servicios` | Plano |
| (venues en footer) | `/restaurantes` (lista) | Plano |
| `/contact` | — (solo mailto) | **No existe** |

---

## 2. Mejoras globales (sirven para TODO el sitio) — Fase 1

Estas son las de mayor impacto visual y menor riesgo. Se hacen una vez y afectan todas las páginas.

### 2.1 Scroll suave con Lenis
`npm i lenis`. Crear un componente cliente y montarlo en `layout.tsx`:

```tsx
// src/components/smooth-scroll.tsx
"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let id: number;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return null;
}
```
Montar `<SmoothScroll />` dentro de `<body>` en `layout.tsx`.

### 2.2 Transición entre páginas (fundido)
Next 16 (App Router): añadir `src/app/template.tsx` con un fade-in por CSS (sin dependencias):

```tsx
// src/app/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
```
```css
/* globals.css */
.page-transition { animation: pageFade 520ms cubic-bezier(0.16,1,0.3,1) both; }
@keyframes pageFade { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .page-transition { animation: none; } }
```

### 2.3 Stagger en grillas (cascada)
Extender `Reveal` para aceptar un índice, o crear `RevealGroup` que aplique `transition-delay` incremental a sus hijos. Aplicarlo a `.cards` (item-card) y a las tarjetas del ecosistema.

### 2.4 Componentes de sección reutilizables (estilo Darling)
Crear estos componentes una vez y reusarlos en todas las internas:
- `ImageBanner` — imagen full-bleed con **parallax** al hacer scroll (Darling: `.image-banner`).
- `EditorialBlock` — texto + media alternados izquierda/derecha (Darling: `.promo-block` / `.promo-block__reverse`). Ya existe `editorial-band.tsx`; reutilizar y darle reveal.
- `CtaBanner` — banner de cierre con título grande + botón (Darling: `.itcb` "Join the crew").
- `ValueSlider` — carrusel horizontal de valores/equipo (Darling: `.team-value-slider`).
- `StepValue` — bloques numerados 01/02/03 (Darling: `.step-value`).
- `BookingForm` — formulario de contacto/reserva (Darling: `.booking-form`).

### 2.5 Micro-interacciones de hover
- Zoom suave de imagen dentro de tarjetas al hover (`transform: scale(1.04)`).
- "Arrow slide" en enlaces/CTAs (la flecha se desplaza al hover).
- El `globals.css` ya tiene varias de estas; estandarizarlas en todas las tarjetas.

---

## 3. Página por página — Fase 2

### 3.1 Home `/`
Estado: fuerte. Acciones menores:
- Insertar un `ImageBanner` con parallax entre la sección de venues y el statement (como hace Darling con `.image-banner`).
- Confirmar stagger en la grilla de `darling-card-grid`.

### 3.2 Restaurantes (lista) `/restaurantes`
Hoy: hero + grilla. Subir a:
- Reutilizar el **showcase interactivo de venues** de la home (tabs + media) como sección destacada.
- Grilla con **reveal + stagger**.
- Cerrar con `ImageBanner` + `CtaBanner` ("Reserva tu próximo evento").

### 3.3 Restaurante detalle `/restaurantes/[slug]`
Darling (9 secciones): hero, intro, **LOCATION**, CTA, **KEY FEATURES**, event-selector, image-banner, **gallery slider**, **booking form**.
Hoy Vento tiene: hero, galería (grilla 4), about + facts, "more venues". Añadir:
- Bloque **Location** (mapa o dirección destacada).
- **Gallery slider** horizontal (en vez de solo grilla).
- **Booking/Contact form** o `CtaBanner` de reserva al final.
- `ImageBanner` parallax intermedio.

### 3.4 Empleos `/empleos` (← Darling Careers)
Hoy: hero + grilla (placeholder). Reconstruir con:
- Hero `about-banner`.
- `EditorialBlock` + `EditorialBlock__reverse` (propuesta de valor / testimonios).
- `ValueSlider` "Nuestros valores".
- Lista **"Vacantes actuales"** estilizada (no solo tarjetas sueltas).
- `ImageBanner` + `CtaBanner` de cierre.

### 3.5 Servicios / Bonos `/servicios` (← Darling Vouchers)
- Hero + `EditorialBlock` explicando el bono/servicio.
- Grilla de bonos con reveal/stagger.
- `CtaBanner` de compra.

### 3.6 Eventos `/eventos` (← Darling Events)
Darling: `title-content-banner` + `available-space` (grid interactivo grande).
- Hero título + copy.
- **Selector interactivo de espacios** (reutilizar patrón del venue showcase).
- `BookingForm` / `CtaBanner`.

### 3.7 Ecosistema / Nosotros `/ecosistema` (← Darling About)
Darling: hero, editorial reverse, image-banner, **step-value**, slider "PEOPLE FIRST", itcb.
- Hero.
- `EditorialBlock` historia/visión.
- `ImageBanner` parallax.
- `StepValue` (pilares del ecosistema: Pass, Anima, Vento OS).
- `ValueSlider` cultura/equipo.
- `CtaBanner` "Únete".

### 3.8 Contacto `/contacto` (NUEVO)
- Crear página con `BookingForm` (nombre, email, mensaje, tipo de consulta).
- Reemplazar los `mailto:` del header/footer por enlace a `/contacto`.

---

## 4. VISO — hacerlo usable y poblar contenido — Fase 4

El problema: el formulario de bloques pide `page_slug`, `block_key`, `block_type` como **texto libre**, sin guía ni preview. Por eso "no sabes qué cambian".

Mapa actual de claves (referencia rápida):
| En VISO | Sale en la web |
|---|---|
| `home` / `hero_main` | Hero principal de la home |
| `hero_slide` (`hero_slide_1/2/3`) | Slides del carrusel del hero |
| `editorial_band` (`home_editorial_1/2`) | Bandas editoriales de la home |
| `event_spaces` (`home_event_spaces_feature`) | Sección Eventos de la home |
| `restaurant:<slug>` / `detail_hero` | Hero de la ficha del restaurante |
| `restaurant:<slug>` / `gallery_media` | Galería de la ficha |
| Items (restaurant/job/service/event/app) | Tarjetas de cada sección |

Mejoras propuestas en VISO:
- Cambiar los inputs de `page_slug` / `block_type` por **menús desplegables** con las opciones válidas.
- Mostrar junto a cada bloque una **nota "esto aparece en: …"** y un **enlace de previsualización** a la página real.
- **Poblar** los `website_items` reales (restaurantes, vacantes, servicios, eventos) y verificar las env vars de Supabase en Vercel (hoy se ven placeholders).

---

## 5. Orden de ejecución sugerido

1. **Fase 1 — Global** (Lenis + transición de página + stagger + componentes de sección reutilizables + hover). Máximo impacto, bajo riesgo. *No depende de contenido.*
2. **Fase 2 — Páginas internas** (empleos, ecosistema, eventos, servicios, restaurantes lista) usando los componentes de Fase 1.
3. **Fase 3 — Detalle de restaurante + página de Contacto.**
4. **Fase 4 — VISO usable + poblar CMS.**

Todo respeta `prefers-reduced-motion` (accesibilidad) y no cambia el contenido, solo la presentación.
