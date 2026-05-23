# Vento Group Web — Avance y pendientes (handoff)

> Objetivo: dejar el sitio público de Vento Group al nivel de **Darling Group**
> (https://darlinggroup.com.au/) en **animaciones y distribución/layout**.
> El **contenido es de Vento** (no se copia el de Darling).
> Sitio: https://ventogroup.co · Repo: `C:\Vento-Projects\Vento-Group` (Next.js 16 + Supabase).
> Plan completo y detallado: `docs/plan-darling-style.md`.

---

## Contexto clave (para retomar rápido)

- **Arquitectura:** la web **solo lee** dos tablas de Supabase: `website_blocks` (bloques por página) y `website_items` (tarjetas por categoría). **VISO** (`C:\Vento-Projects\vento-viso`, sección `/website-cms`) es quien **escribe** esas tablas. Si falta media, se pinta un placeholder.
- **Diagnóstico:** la **home ya replica a Darling** (hero inmersivo, splash, parallax, reveals). Lo flojo son las **páginas internas** (eran solo hero + grilla) y faltaban 3 cosas globales: scroll suave, transición de página y cascada.
- **Darling** está hecho en **Gatsby + Lenis** (scroll suave). Sus internas usan secciones variadas: bandas editoriales alternadas, image-banner con parallax, slider de valores/equipo, pasos numerados (step-value), banner CTA ("Join the crew"), formulario de reserva.
- **Hallazgos a recordar:**
  - No existe página de **Contacto** en Vento (solo `mailto:`); Darling sí tiene `/contact`.
  - El **CMS está vacío**: el sitio en vivo muestra placeholders ("Vacante destacada"). Hay que **poblar `website_items`/`website_blocks` desde VISO** o **revisar las env vars de Supabase en Vercel**.
  - En VISO el formulario de bloques pide `page_slug`/`block_key`/`block_type` como **texto libre** (por eso es poco intuitivo). Mapa de claves → dónde salen está en `docs/plan-darling-style.md`.

---

## ✅ Hecho — Fase 1 (mejoras globales, afectan todo el sitio)

Archivos **nuevos**:
- `src/components/smooth-scroll.tsx` — scroll suave con **Lenis** (montado global en `layout.tsx`).
- `src/app/template.tsx` — **transición de fundido** entre páginas (+ CSS `.page-transition`).
- `src/components/reveal-grid.tsx` — **cascada/stagger** al entrar en viewport.
- `src/components/image-banner.tsx` — banda full-bleed con **parallax** al scroll.
- `src/components/cta-banner.tsx` — **banner de cierre** reutilizable (aún no colocado en páginas; listo para Fase 2).

Archivos **editados**:
- `package.json` — añadida dependencia `lenis": "^1.1.0"`.
- `src/app/layout.tsx` — monta `<SmoothScroll />`.
- `src/app/globals.css` — todo el CSS nuevo (Lenis, transición, stagger, image-banner, cta-banner, hover de tarjetas), con `prefers-reduced-motion`. Está al final, bajo el comentario `FASE 1 — Mejoras globales estilo Darling Group`.
- `src/components/category-page.tsx` — la grilla usa `RevealGrid` → **mejora de un golpe restaurantes, empleos, servicios, eventos y ecosistema**.
- `src/app/page.tsx` — `ImageBanner` con parallax en la home (entre venues y statement).

---

## ⚠️ Pendiente del lado del usuario (antes de ver/desplegar)

1. **Instalar la dependencia nueva** (mi entorno tenía npm bloqueado):
   ```bash
   cd C:\Vento-Projects\Vento-Group
   npm install
   npm run dev      # ver en http://localhost:3000
   ```
2. **Validar build**: `npm run build` (no se pudo correr en el entorno de Claude; los componentes están revisados estáticamente).
3. **Desplegar**: push a GitHub → Vercel.
4. **Line endings (git)**: la copia local parece estar en CRLF y el repo en LF; al hacer `git diff` puede verse "ruido". Revisar con `git diff --ignore-cr-at-eol` o commitear solo los archivos de la Fase 1. *(No se pudo confirmar al 100% por una vista desactualizada del sandbox.)*

---

## ⏳ Pendiente — próximas fases (detalle en `docs/plan-darling-style.md`)

**Fase 2 — Páginas internas** (usar los componentes de Fase 1):
- `/empleos` (← Darling Careers): hero, bandas editoriales/testimonio, **slider de valores**, lista "Vacantes actuales" estilizada, image-banner, `CtaBanner`.
- `/ecosistema` (← About): editorial, image-banner, **step-value** (Pass/Anima/Vento OS), slider, `CtaBanner`.
- `/eventos` (← Events): selector interactivo de espacios + `CtaBanner`/formulario.
- `/servicios` (← Vouchers/Bonos): editorial + grilla + `CtaBanner`.
- `/restaurantes` (lista): reutilizar el showcase interactivo de venues + grilla con stagger + image-banner + `CtaBanner`.

**Fase 3 — Detalle + contacto:**
- `/restaurantes/[slug]`: bloque Location, **gallery slider**, booking/CTA, image-banner.
- **Nueva página `/contacto`** con formulario; reemplazar `mailto:` del header/footer.

**Fase 4 — VISO usable + contenido:**
- Convertir inputs de `page_slug`/`block_type` en **menús desplegables** + nota "esto aparece en…" + enlace de preview.
- **Poblar el CMS** y verificar env vars de Supabase en Vercel (hoy se ven placeholders).

---

## Cómo retomar en otra conversación

1. Pídele a Claude que lea `docs/avance-y-pendientes.md` y `docs/plan-darling-style.md`.
2. Confirma que ya corriste `npm install` (Fase 1 lista para verse).
3. Indica por dónde seguir (sugerido: **Fase 2, empezando por `/empleos`**).
