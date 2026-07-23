# PLAN CANÓNICO DE IMPLEMENTACIÓN  
# VISO WEB STUDIO + VENTO GROUP WEB

> Constructor visual administrable desde VISO para `ventogroup.co`, inspirado en la estructura, ritmo y experiencia de Darling Group, pero con identidad, contenido, activos y lógica propios de Vento Group.

---

## 0. CONTROL DEL DOCUMENTO

| Campo                               | Valor                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------ |
| Documento                           | Plan canónico de implementación de VISO Web Studio                       |
| Proyecto público                    | `devVentoGroup/Vento-Group`                                              |
| Nombre interno                      | `vento-group-web`                                                        |
| Aplicación administradora           | `devVentoGroup/vento-viso`                                               |
| Repositorio canónico de migraciones | `devVentoGroup/vento-shell`                                              |
| Dominio público                     | `ventogroup.co`                                                          |
| Versión inicial                     | `2026-07-23`                                                             |
| Estado                              | **PROPUESTA PARA APROBACIÓN**                                            |
| Fase actual                         | Preparación y auditoría                                                  |
| Responsable funcional               | Vento Group                                                              |
| Referencia visual                   | Darling Group                                                            |
| Alcance de referencia               | Distribución, navegación, ritmo, animaciones y experiencia               |
| Exclusión obligatoria               | No copiar contenido, código, fotografías, marcas ni activos propietarios |

---

## 1. OBJETIVO GENERAL

Construir dentro de VISO un sistema denominado **VISO Web Studio**, capaz de administrar visualmente el sitio público de Vento Group sin depender de modificaciones manuales de código para cada cambio editorial.

El sistema deberá permitir que una persona autorizada pueda:

- crear páginas;
- duplicar páginas;
- agregar secciones;
- ordenar secciones;
- ocultar secciones;
- editar textos;
- cambiar imágenes y videos;
- seleccionar variantes visuales;
- configurar fondos, alineaciones y espacios;
- conectar listas dinámicas;
- previsualizar escritorio, tablet y móvil;
- guardar borradores;
- publicar cambios;
- consultar versiones anteriores;
- restaurar una versión;
- administrar navegación, pie de página, SEO y formularios;
- realizar todo lo anterior desde una interfaz comprensible para usuarios no técnicos.

---

## 2. RESULTADO FUNCIONAL ESPERADO

```text
┌──────────────────┬────────────────────────────────────┬──────────────────────┐
│ PÁGINAS          │ VISTA PREVIA                       │ PROPIEDADES          │
│                  │                                    │                      │
│ ● Inicio         │ [ Escritorio ] [ Tablet ] [ Móvil ]│ Sección seleccionada │
│ ○ Restaurantes   │                                    │                      │
│ ○ Empleos        │ ┌────────────────────────────────┐ │ Título               │
│ ○ Eventos        │ │                                │ │ [ Nuestro grupo... ] │
│ ○ Ecosistema     │ │    PREVISUALIZACIÓN REAL       │ │                      │
│ ○ Servicios      │ │                                │ │ Imagen               │
│ ○ Contacto       │ │    ventogroup.co               │ │ [ Cambiar imagen ]   │
│                  │ │                                │ │                      │
│ + Nueva página   │ └────────────────────────────────┘ │ Variante             │
│                  │                                    │ [ Editorial oscura ▼]│
│ SECCIONES        │                                    │                      │
│ ⋮ Hero           │                                    │ [Guardar borrador]   │
│ ⋮ Editorial      │                                    │ [Publicar]           │
│ ⋮ Restaurantes   │                                    │                      │
│ ⋮ Banner         │                                    │                      │
│ + Agregar        │                                    │                      │
└──────────────────┴────────────────────────────────────┴──────────────────────┘
```

---

## 3. ESTADO INICIAL VERIFICADO

### 3.1 Capacidades existentes

- [x] **BASE-WEB-001 — Repositorio público identificado**
  - Repositorio: `devVentoGroup/Vento-Group`.
  - Proyecto Next.js.
  - Publicación en `ventogroup.co`.

- [x] **BASE-WEB-002 — VISO contiene un CMS web inicial**
  - Ruta actual: `/website-cms`.
  - Permite editar bloques.
  - Permite editar tarjetas.
  - Permite cargar imágenes y videos.
  - Permite publicar u ocultar registros.

- [x] **BASE-WEB-003 — Existen tablas iniciales**
  - `website_blocks`.
  - `website_items`.

- [x] **BASE-WEB-004 — Las migraciones están centralizadas en vento-shell**
  - La migración inicial del CMS se encuentra en `vento-shell`.
  - Toda nueva migración deberá continuar en ese repositorio.

- [x] **BASE-WEB-005 — La home tiene una base visual avanzada**
  - Hero visual.
  - Animaciones.
  - Lenis.
  - Reveals.
  - Secciones editoriales.
  - Lenguaje visual cercano a Darling Group.

### 3.2 Limitaciones existentes

- [ ] Las páginas no son completamente dinámicas.
- [ ] La estructura de las páginas continúa escrita en React.
- [ ] VISO expone claves técnicas.
- [ ] No existe edición visual.
- [ ] No existe árbol de secciones.
- [ ] No existe borrador real.
- [ ] No existe historial de versiones.
- [ ] No existe restauración.
- [ ] No existe previsualización privada.
- [ ] No existe biblioteca multimedia completa.
- [ ] No existe configuración global del tema.
- [ ] No existe administración completa de navegación.
- [ ] Varias páginas internas continúan incompletas.
- [ ] Existen contenidos placeholder.
- [ ] Algunos CTA y textos continúan escritos directamente en código.

---

## 4. ESTADO GENERAL INICIAL

```text
HOME PÚBLICA             ████████░░  Avanzada
PÁGINAS INTERNAS         ████░░░░░░  Parciales
CMS DE CONTENIDO         █████░░░░░  Funcional básico
RENDERIZADO DINÁMICO     ███░░░░░░░  Parcial
EDITOR VISUAL            ░░░░░░░░░░  No iniciado
BORRADORES               ░░░░░░░░░░  No iniciado
VERSIONES                 ░░░░░░░░░░  No iniciado
PUBLICACIÓN CONTROLADA   █░░░░░░░░░  Muy básica
BIBLIOTECA MULTIMEDIA    ██░░░░░░░░  Parcial
SEO ADMINISTRABLE        ██░░░░░░░░  Parcial
```

---

# 5. PRINCIPIOS CANÓNICOS OBLIGATORIOS

## 5.1 Fuente única de verdad

Este documento será la fuente canónica del proyecto.

Ninguna tarea, decisión, hallazgo, brecha o aplazamiento podrá quedar únicamente descrito en una conversación.

Toda brecha deberá:

1. vincularse a una tarea existente; o
2. generar una nueva tarea con identificador; o
3. quedar marcada como descartada mediante una decisión explícita.

---

## 5.2 Migraciones

Toda migración de Supabase deberá:

- crearse en `vento-shell`;
- usar nombre timestamp descriptivo;
- incluir comentarios;
- incluir índices;
- incluir políticas RLS;
- incluir estrategia de reversión cuando corresponda;
- quedar documentada en este plan;
- no ejecutarse directamente desde VISO ni desde la web pública.

---

## 5.3 Separación de responsabilidades

```text
VENTO-GROUP WEB
└── Lee contenido publicado y lo renderiza.

VISO WEB STUDIO
└── Crea, edita, previsualiza y publica contenido.

SUPABASE
└── Conserva páginas, revisiones, publicaciones, medios y formularios.

VENTO-SHELL
└── Conserva todas las migraciones y documentación de base de datos.
```

---

## 5.4 Publicación segura

Guardar y publicar serán acciones diferentes.

```text
EDITAR
  ↓
GUARDAR BORRADOR
  ↓
VALIDAR
  ↓
PREVISUALIZAR
  ↓
PUBLICAR
  ↓
VERSIÓN INMUTABLE
```

Nunca se deberá modificar directamente una versión ya publicada.

---

## 5.5 Personalización controlada

El editor será altamente personalizable, pero no permitirá introducir:

- JavaScript arbitrario;
- CSS arbitrario sin validación;
- HTML arbitrario inseguro;
- scripts externos no autorizados;
- componentes no registrados;
- URLs peligrosas;
- archivos ejecutables.

La personalización se realizará mediante:

- bloques;
- variantes;
- tokens visuales;
- configuraciones responsive;
- propiedades tipadas;
- fuentes de datos;
- plantillas.

---

## 5.6 Código y contenido

Deberá permanecer en código:

- la implementación técnica de componentes;
- la seguridad;
- la validación;
- las variantes permitidas;
- la lógica de formularios;
- la lógica de colecciones;
- las restricciones de diseño.

Deberá poder editarse desde VISO:

- textos;
- títulos;
- imágenes;
- videos;
- enlaces;
- orden;
- visibilidad;
- variantes;
- alineación;
- tema;
- espacios;
- contenidos SEO;
- navegación;
- formularios disponibles;
- fuentes de datos;
- páginas y secciones.

---

## 5.7 Compatibilidad progresiva

La web pública no se reconstruirá de una sola vez.

Durante la transición:

```text
Página migrada
└── Usa VISO Web Studio.

Página no migrada
└── Usa estructura legacy actual.
```

La migración deberá hacerse página por página.

---

## 5.8 Referencia Darling Group

Se podrá reproducir:

- estructura general;
- ritmo;
- proporciones;
- jerarquía;
- navegación;
- animaciones;
- transiciones;
- comportamiento responsive;
- patrones de interacción.

No se podrá copiar:

- textos;
- imágenes;
- videos;
- marcas;
- nombres;
- código propietario;
- identidad visual exclusiva;
- material protegido.

---

# 6. ALCANCE DEL PROGRAMA

## 6.1 Incluido

- Constructor visual en VISO.
- Editor de páginas.
- Biblioteca de secciones.
- Reordenamiento drag-and-drop.
- Previsualización responsive.
- Gestión multimedia.
- Borradores.
- Publicación.
- Versiones.
- Restauración.
- SEO.
- Navegación.
- Footer.
- Formularios.
- Tema visual.
- Plantillas.
- Contenido dinámico.
- Migración de la web existente.
- Reconstrucción estilo Darling.
- Seguridad.
- Accesibilidad.
- Rendimiento.
- Analítica.
- Documentación.

---

## 6.2 No incluido en el MVP

Estas funciones no se implementarán durante el núcleo inicial:

- marketplace de plugins;
- edición de DNS;
- venta de dominios;
- hosting general para terceros;
- código personalizado libre;
- edición colaborativa en tiempo real;
- comercio electrónico completo;
- constructor de aplicaciones;
- reemplazo de Vercel;
- reemplazo de Supabase.

De requerirse posteriormente, deberán generarse nuevas tareas explícitas.

---

# 7. ARQUITECTURA OBJETIVO

```text
┌─────────────────────────────┐
│       VISO WEB STUDIO       │
│                             │
│ Páginas                     │
│ Secciones                   │
│ Medios                      │
│ Tema                        │
│ Navegación                  │
│ SEO                         │
│ Formularios                 │
│ Borradores                  │
│ Publicaciones               │
└──────────────┬──────────────┘
               │ escritura autorizada
               ▼
┌─────────────────────────────┐
│          SUPABASE           │
│                             │
│ Sitios                      │
│ Páginas                     │
│ Revisiones                  │
│ Publicaciones               │
│ Medios                      │
│ Colecciones                 │
│ Formularios                 │
│ Auditoría                   │
└──────────────┬──────────────┘
               │ lectura publicada
               ▼
┌─────────────────────────────┐
│     VENTO-GROUP WEB         │
│                             │
│ Page Loader                 │
│ Section Registry            │
│ Renderer                    │
│ SEO                         │
│ Cache                       │
│ Revalidation                │
└──────────────┬──────────────┘
               ▼
          ventogroup.co
```

---

# 8. MODELO DE DATOS OBJETIVO

## 8.1 Estrategia seleccionada

Se utilizará un modelo híbrido:

### Contenido estructural de páginas

Las páginas se almacenarán como revisiones inmutables con un árbol JSON validado.

### Entidades empresariales

Los restaurantes, empleos, eventos, servicios y aplicaciones continuarán en tablas normalizadas.

Esto evita:

- crear decenas de tablas para cada tipo de bloque;
- perder facilidad de versionado;
- publicar cambios parciales inconsistentes;
- duplicar información empresarial.

---

## 8.2 Tablas objetivo

### Núcleo del sitio

- `website_sites`
- `website_pages`
- `website_page_revisions`
- `website_page_publications`
- `website_releases`
- `website_release_pages`

### Multimedia

- `website_media_assets`
- `website_media_usages`

### Configuración global

- `website_themes`
- `website_site_settings`
- `website_navigation_menus`
- `website_navigation_items`

### Formularios

- `website_forms`
- `website_form_fields`
- `website_form_submissions`

### Seguridad y seguimiento

- `website_audit_events`
- `website_preview_tokens`

### Tablas existentes que se conservarán inicialmente

- `website_blocks`
- `website_items`

---

## 8.3 Estructura de una revisión

Ejemplo conceptual:

```json
{
  "schemaVersion": 1,
  "page": {
    "title": "Inicio",
    "slug": "/",
    "seo": {
      "title": "Vento Group",
      "description": "Ecosistema gastronómico y operativo."
    }
  },
  "sections": [
    {
      "id": "uuid",
      "type": "hero.media",
      "variant": "fullscreen",
      "enabled": true,
      "content": {
        "eyebrow": "Vento Group",
        "title": "Creamos experiencias",
        "body": "..."
      },
      "media": {
        "assetId": "uuid"
      },
      "style": {
        "theme": "dark",
        "alignment": "left",
        "spacingTop": "xl",
        "spacingBottom": "xl"
      },
      "responsive": {
        "hideOnMobile": false,
        "mobileAlignment": "center"
      }
    }
  ]
}
```

---

# 9. CATÁLOGO INICIAL DE SECCIONES

## 9.1 Heroes

- `hero.media`
- `hero.carousel`
- `hero.editorial`
- `hero.split`
- `hero.minimal`

## 9.2 Editorial

- `editorial.split`
- `editorial.reverse`
- `editorial.statement`
- `editorial.quote`
- `editorial.rich_text`

## 9.3 Multimedia

- `media.image_banner`
- `media.video_banner`
- `media.gallery_grid`
- `media.gallery_slider`
- `media.parallax`

## 9.4 Restaurantes y espacios

- `venues.showcase`
- `venues.grid`
- `venues.location`
- `venues.features`
- `venues.related`
- `events.spaces_selector`

## 9.5 Cultura y corporativo

- `values.slider`
- `steps.numbered`
- `team.slider`
- `testimonials.slider`
- `stats.grid`
- `apps.ecosystem`

## 9.6 Colecciones dinámicas

- `collection.grid`
- `collection.list`
- `collection.featured`
- `jobs.list`
- `events.list`
- `services.grid`

## 9.7 Conversión

- `cta.banner`
- `cta.split`
- `form.contact`
- `form.event_inquiry`
- `form.job_application`
- `newsletter.signup`

## 9.8 Estructura

- `layout.spacer`
- `layout.divider`
- `layout.anchor`
- `layout.columns`

---

# 10. ESTADOS DE LAS TAREAS

```text
[ ] No iniciada
[~] En ejecución
[x] Completada y validada
[!] Bloqueada
[-] Descartada mediante decisión
```

Una tarea solo podrá marcarse `[x]` cuando:

1. su resultado exista;
2. haya sido validado;
3. no tenga brechas críticas abiertas;
4. la evidencia haya sido registrada;
5. las nuevas brechas hayan sido asignadas a tareas.

---

# 11. FLUJO GENERAL DE IMPLEMENTACIÓN

```text
AUDITORÍA
   ↓
DEFINICIÓN DE PRODUCTO
   ↓
ARQUITECTURA Y ADR
   ↓
MODELO DE BASE DE DATOS
   ↓
RENDERIZADOR DINÁMICO
   ↓
BORRADORES Y PUBLICACIÓN
   ↓
EDITOR VISUAL EN VISO
   ↓
BIBLIOTECA MULTIMEDIA
   ↓
PÁGINAS ESTILO DARLING
   ↓
MIGRACIÓN DEL CONTENIDO
   ↓
QA Y SEGURIDAD
   ↓
LANZAMIENTO
```

---

# FASE 1 — AUDITORÍA Y LÍNEA BASE

## Objetivo

Conocer exactamente el estado real antes de modificar arquitectura, base de datos o interfaces.

---

# WEB-AUD-001 — Inventario canónico de rutas públicas

> Auditoría de la estructura pública actual de `ventogroup.co` y del repositorio `devVentoGroup/Vento-Group`.

## 0. Control documental

| Campo              | Valor                                                      |
| ------------------ | ---------------------------------------------------------- |
| Identificador      | `WEB-AUD-001`                                              |
| Nombre             | Inventariar todas las rutas públicas                       |
| Fase               | FASE 1 — Auditoría y línea base                            |
| Estado             | **APROBADA**                                               |
| Fecha              | `2026-07-23`                                               |
| Repositorio        | `devVentoGroup/Vento-Group`                                |
| Dominio            | `ventogroup.co`                                            |
| Alcance            | Auditoría documental y técnica                             |
| Cambios realizados | Ninguno                                                    |
| Próxima tarea      | `WEB-AUD-002 — Inventariar todos los componentes públicos` |

## 1. Objetivo de la tarea

Crear una fuente única de verdad sobre las rutas públicas actuales de Vento Group Web.

La auditoría debe dejar explícito:

1. qué rutas existen;
2. cuáles son estáticas, dinámicas, técnicas o redirecciones;
3. qué archivo las implementa;
4. de dónde obtienen sus datos;
5. si están incluidas en navegación y sitemap;
6. qué rutas faltan;
7. qué inconsistencias existen;
8. qué tarea futura será responsable de resolver cada brecha.

## 2. Alcance de la auditoría

### 2.1 Elementos revisados

- estructura de `src/app`;
- páginas `page.tsx`;
- ruta dinámica de restaurantes;
- `sitemap.ts`;
- `robots.ts`;
- `next.config.ts`;
- navegación del header;
- navegación del footer;
- enlaces internos de la home;
- fuentes de contenido;
- comportamiento de fallbacks;
- rutas visibles en producción;
- rutas previstas en el plan canónico.

### 2.2 Acciones no realizadas

- no se modificó el repositorio;
- no se modificó Vercel;
- no se modificó Supabase;
- no se crearon migraciones;
- no se corrigió el sitemap;
- no se crearon páginas;
- no se modificó la navegación;
- no se cambió producción.

## 3. Resultado ejecutivo

### 3.1 Estado general

| Área                    | Estado          | Observación                                            |
| ----------------------- | --------------- | ------------------------------------------------------ |
| Rutas principales       | 🟢 Existentes    | Inicio, restaurantes, empleos, servicios y ecosistema  |
| Detalles de restaurante | 🟢 Funcionales   | Ruta dinámica basada en `website_items`                |
| Eventos                 | 🔴 Inconsistente | Existe como redirección, pero aparece en sitemap y CTA |
| Contacto                | 🔴 Inexistente   | Solo se usa `mailto:`                                  |
| Páginas legales         | 🔴 Inexistentes  | No hay privacidad, datos, términos ni cookies          |
| Detalle de vacantes     | 🔴 Inexistente   | Solo existe el listado                                 |
| Errores personalizados  | 🟡 Incompletos   | No hay `not-found.tsx` ni `error.tsx` propios          |
| Sitemap                 | 🟡 Parcial       | Incluye rutas inconsistentes y usa fallbacks           |
| Navegación              | 🟡 Parcial       | Está hardcodeada y no representa todo el mapa público  |

### 3.2 Conteo

| Tipo                               | Cantidad |
| ---------------------------------- | -------: |
| Páginas públicas estáticas         |        5 |
| Patrones dinámicos                 |        1 |
| Instancias dinámicas verificadas   |        3 |
| Redirecciones públicas             |        1 |
| Rutas técnicas SEO                 |        2 |
| Rutas obligatorias faltantes       |        7 |
| Rutas sujetas a decisión funcional |        4 |

## 4. Matriz maestra de rutas actuales

| ID          | Ruta                   | Tipo          | Implementación                         | Datos                               | Navegación     | Sitemap   | Estado             |
| ----------- | ---------------------- | ------------- | -------------------------------------- | ----------------------------------- | -------------- | --------- | ------------------ |
| `WEB-R-001` | `/`                    | Estática      | `src/app/page.tsx`                     | Bloques, items y contenido fijo     | Sí             | Sí        | 🟢 Activa           |
| `WEB-R-002` | `/restaurantes`        | Colección     | `src/app/restaurantes/page.tsx`        | Bloques y restaurantes              | Sí             | Sí        | 🟢 Activa           |
| `WEB-R-003` | `/restaurantes/[slug]` | Dinámica      | `src/app/restaurantes/[slug]/page.tsx` | Restaurantes y bloques legacy       | Desde tarjetas | Sí        | 🟡 Parcial          |
| `WEB-R-004` | `/empleos`             | Colección     | `src/app/empleos/page.tsx`             | Vacantes                            | Sí             | Sí        | 🟡 Incompleta       |
| `WEB-R-005` | `/servicios`           | Colección     | `src/app/servicios/page.tsx`           | Bloques, servicios y contenido fijo | Sí             | Sí        | 🟡 Parcial          |
| `WEB-R-006` | `/ecosistema`          | Colección     | `src/app/ecosistema/page.tsx`          | Aplicaciones                        | Sí             | Sí        | 🟡 Incompleta       |
| `WEB-R-007` | `/eventos`             | Redirección   | `src/app/eventos/page.tsx`             | No aplica                           | No             | Sí        | 🔴 Inconsistente    |
| `WEB-R-008` | `/sitemap.xml`         | Técnica       | `src/app/sitemap.ts`                   | Rutas estáticas y restaurantes      | No aplica      | No aplica | 🟡 Parcial          |
| `WEB-R-009` | `/robots.txt`          | Técnica       | `src/app/robots.ts`                    | Configuración fija                  | No aplica      | No aplica | 🟢 Adecuada         |
| `WEB-R-010` | Ruta inexistente       | Error 404     | Comportamiento predeterminado          | No aplica                           | No             | No        | 🟡 Sin personalizar |
| `WEB-R-011` | Error de ejecución     | Error general | Comportamiento predeterminado          | No aplica                           | No             | No        | 🟡 Sin personalizar |

## 5. Detalle de rutas actuales

### 5.1 `WEB-R-001` — Inicio

#### 5.1.1 Definición

| Campo                     | Valor              |
| ------------------------- | ------------------ |
| Ruta                      | `/`                |
| Archivo                   | `src/app/page.tsx` |
| Indexable                 | Sí                 |
| Estado                    | Activa             |
| Administración desde VISO | Parcial            |

#### 5.1.2 Composición actual

1. Hero.
2. Introducción editorial.
3. Showcase de restaurantes.
4. Banner de imagen opcional.
5. Statement editorial.
6. Cierre de ecosistema y tarjetas rápidas.
7. Header y footer globales.

#### 5.1.3 Fuentes de contenido

- `website_blocks` para `home`;
- `website_items.restaurant`;
- `website_items.job`;
- `website_items.service`;
- `website_items.app`;
- textos y enlaces escritos directamente en React.

#### 5.1.4 Limitación principal

VISO puede modificar parte del contenido, pero no puede controlar la estructura completa, el orden ni la existencia de todas las secciones.

#### 5.1.5 Tareas responsables

- `WEB-PAG-001`
- `WEB-PAG-002`
- `WEB-PAG-003`
- `WEB-RND-008`
- `WEB-MIG-004`

### 5.2 `WEB-R-002` — Restaurantes

#### 5.2.1 Definición

| Campo                     | Valor                           |
| ------------------------- | ------------------------------- |
| Ruta                      | `/restaurantes`                 |
| Archivo                   | `src/app/restaurantes/page.tsx` |
| Indexable                 | Sí                              |
| Estado                    | Activa                          |
| Administración desde VISO | Parcial                         |

#### 5.2.2 Composición actual

1. Hero.
2. Bloque editorial.
3. Banner de imagen.
4. Grilla de restaurantes.
5. CTA relacionado con eventos.

#### 5.2.3 Limitación principal

La estructura continúa definida en React. VISO solo modifica algunos bloques y registros.

#### 5.2.4 Tareas responsables

- `WEB-PAG-010`
- `WEB-PAG-011`
- `WEB-MIG-005`
- `WEB-BLD-011`
- `WEB-BLD-012`

### 5.3 `WEB-R-003` — Detalle de restaurante

#### 5.3.1 Definición

| Campo                     | Valor                                  |
| ------------------------- | -------------------------------------- |
| Patrón                    | `/restaurantes/[slug]`                 |
| Archivo                   | `src/app/restaurantes/[slug]/page.tsx` |
| Fuente principal          | `website_items.restaurant`             |
| Fuente complementaria     | `website_blocks`                       |
| Slug inexistente          | Ejecuta `notFound()`                   |
| Indexable                 | Sí                                     |
| Administración desde VISO | Parcial                                |

#### 5.3.2 Slugs verificados

```text
/restaurantes/vento-cafe
/restaurantes/saudo
/restaurantes/molka
```

#### 5.3.3 Convenciones legacy detectadas

```text
restaurant:<slug>
restaurant_<slug>
restaurante:<slug>
```

#### 5.3.4 Problemas específicos

- estructura hardcodeada;
- textos provisionales en inglés;
- instrucciones internas que podrían mostrarse en producción;
- CTA `Planear evento` apunta a `/eventos`;
- `/eventos` redirige a `/restaurantes`;
- un fallback puede generar `/restaurantes/restaurante-destacado`.

#### 5.3.5 Tareas responsables

- `WEB-PAG-012`
- `WEB-PAG-013`
- `WEB-PAG-014`
- `WEB-PAG-015`
- `WEB-RND-006`
- `WEB-RND-008`
- `WEB-MIG-003`
- `WEB-MIG-006`
- `WEB-MIG-015`

### 5.4 `WEB-R-004` — Empleos

#### 5.4.1 Definición

| Campo                     | Valor                      |
| ------------------------- | -------------------------- |
| Ruta                      | `/empleos`                 |
| Archivo                   | `src/app/empleos/page.tsx` |
| Renderer                  | `CategoryPage`             |
| Fuente                    | `website_items.job`        |
| Indexable                 | Sí                         |
| Administración desde VISO | Muy parcial                |

#### 5.4.2 Estado actual

La página funciona como listado genérico y puede mostrar un fallback de `Vacante destacada`.

#### 5.4.3 Brechas

- no existe narrativa de cultura;
- no existe listado profesional;
- no existe detalle de vacante;
- no existe integración con Vento Talento;
- el fallback puede usar CTA `#`;
- la estructura no es administrable.

#### 5.4.4 Tareas responsables

- `WEB-PAG-020`
- `WEB-PAG-021`
- `WEB-PAG-022`
- `WEB-PAG-023`
- `WEB-FRM-010`
- `WEB-MIG-007`
- `WEB-MIG-015`

### 5.5 `WEB-R-005` — Servicios

#### 5.5.1 Definición

| Campo                     | Valor                               |
| ------------------------- | ----------------------------------- |
| Ruta                      | `/servicios`                        |
| Archivo                   | `src/app/servicios/page.tsx`        |
| Fuente                    | Bloques, servicios y contenido fijo |
| Indexable                 | Sí                                  |
| Administración desde VISO | Parcial                             |

#### 5.5.2 Composición actual

1. Hero.
2. Introducción.
3. Cuatro pilares.
4. Banner.
5. Grilla de servicios.
6. CTA.

#### 5.5.3 Elementos hardcodeados

- Operación.
- Tecnología.
- Formación.
- Consultoría.
- CTA final.
- Parte del contenido editorial.

#### 5.5.4 Tareas responsables

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-PAG-052`
- `WEB-MIG-010`
- `WEB-MIG-015`

### 5.6 `WEB-R-006` — Ecosistema

#### 5.6.1 Definición

| Campo                     | Valor                         |
| ------------------------- | ----------------------------- |
| Ruta                      | `/ecosistema`                 |
| Archivo                   | `src/app/ecosistema/page.tsx` |
| Renderer                  | `CategoryPage`                |
| Fuente                    | `website_items.app`           |
| Indexable                 | Sí                            |
| Administración desde VISO | Muy parcial                   |

#### 5.6.2 Contenido actual

- Vento Pass.
- Anima.
- Vento OS.

#### 5.6.3 Brechas

- se usa `Ecosistema` y `Nosotros` para referirse a la misma ruta;
- el botón `Entrar a Vento OS` lleva a `/ecosistema`;
- los CTA fallback pueden usar `#`;
- no existen páginas o secciones profundas para cada aplicación;
- falta narrativa institucional.

#### 5.6.4 Tareas responsables

- `WEB-PAG-030`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`
- `WEB-GLB-004`
- `WEB-MIG-008`
- `WEB-MIG-015`

### 5.7 `WEB-R-007` — Eventos

#### 5.7.1 Definición

| Campo               | Valor                      |
| ------------------- | -------------------------- |
| Ruta                | `/eventos`                 |
| Archivo             | `src/app/eventos/page.tsx` |
| Tipo                | Redirección                |
| Destino             | `/restaurantes`            |
| Página propia       | No                         |
| Incluida en sitemap | Sí                         |
| Utilizada por CTA   | Sí                         |

#### 5.7.2 Flujo actual

```text
/restaurantes/[slug]
        ↓
Planear evento
        ↓
/eventos
        ↓
/restaurantes
```

#### 5.7.3 Conclusión

La ruta está técnicamente disponible, pero funcionalmente no existe.

No debe tratarse como página pública real mientras continúe redirigiendo.

#### 5.7.4 Tareas responsables

- `WEB-PAG-040`
- `WEB-PAG-041`
- `WEB-PAG-042`
- `WEB-GLB-009`
- `WEB-MIG-009`
- `WEB-QA-018`
- `WEB-QA-019`

### 5.8 `WEB-R-008` — Sitemap

#### 5.8.1 Rutas declaradas

```text
/
/restaurantes
/eventos
/empleos
/servicios
/ecosistema
/restaurantes/[slug]
```

#### 5.8.2 Brechas

1. `/eventos` está incluido aunque redirige.
2. Los restaurantes fallback pueden convertirse en URLs indexables.
3. `lastModified` utiliza la fecha de ejecución y no la modificación real.
4. No incluye rutas legales ni contacto porque no existen.
5. No depende de un catálogo versionado de páginas.
6. No diferencia claramente contenido real y fallback.

#### 5.8.3 Tareas responsables

- `WEB-GLB-009`
- `WEB-RND-015`
- `WEB-MIG-013`
- `WEB-QA-019`

### 5.9 `WEB-R-009` — Robots

#### 5.9.1 Configuración actual

```text
User-agent: *
Allow: /
Sitemap: /sitemap.xml
```

#### 5.9.2 Evaluación

La configuración es correcta para el sitio público actual.

Las futuras rutas de preview y borradores deberán protegerse con autorización real y `noindex`.

#### 5.9.3 Tareas responsables

- `ADR-WEB-005`
- `WEB-PUB-006`
- `WEB-PUB-007`
- `WEB-SEC-005`

### 5.10 `WEB-R-010` — Página 404

#### 5.10.1 Estado

No existe `src/app/not-found.tsx`.

Se utiliza la respuesta predeterminada de Next.js.

#### 5.10.2 Tarea responsable

- `WEB-PAG-070`

### 5.11 `WEB-R-011` — Error general

#### 5.11.1 Estado

No existe `src/app/error.tsx`.

No hay una experiencia Vento para errores de ejecución ni recuperación.

#### 5.11.2 Tarea responsable

- `WEB-PAG-071`

## 6. Rutas faltantes obligatorias

| ID           | Ruta propuesta          | Necesidad                          | Estado        | Tareas responsables                         |
| ------------ | ----------------------- | ---------------------------------- | ------------- | ------------------------------------------- |
| `WEB-MR-001` | `/contacto`             | Canal público centralizado         | 🔴 No existe   | `WEB-PAG-060`, `WEB-PAG-061`, `WEB-FRM-001` |
| `WEB-MR-002` | `/privacidad`           | Política de privacidad             | 🔴 No existe   | `WEB-PAG-072`, `WEB-GLB-013`                |
| `WEB-MR-003` | `/tratamiento-de-datos` | Protección de datos                | 🔴 No existe   | `WEB-PAG-073`, `WEB-GLB-013`                |
| `WEB-MR-004` | `/terminos`             | Términos del sitio                 | 🔴 No existe   | `WEB-PAG-074`, `WEB-GLB-013`                |
| `WEB-MR-005` | `/cookies`              | Política y consentimiento          | 🔴 No existe   | `WEB-PAG-075`, `WEB-GLB-012`, `WEB-GLB-013` |
| `WEB-MR-006` | `/empleos/[slug]`       | Detalle de vacantes                | 🔴 No existe   | `WEB-PAG-021`, `WEB-PAG-022`, `WEB-PAG-023` |
| `WEB-MR-007` | `/servicios/[slug]`     | Detalle de servicio cuando aplique | 🟡 Por decidir | `WEB-PAG-051`, `WEB-PAG-052`                |

## 7. Decisiones diferidas con responsable

> Estas decisiones no se resuelven en `WEB-AUD-001`. Quedan asignadas explícitamente a tareas posteriores.

### 7.1 `WEB-DR-001` — Nosotros y Ecosistema

#### Opciones

```text
A. /nosotros
B. /ecosistema
C. /nosotros + /ecosistema
```

#### Tareas responsables

- `WEB-PRD-009`
- `WEB-PRD-015`
- `WEB-PAG-030`
- `WEB-GLB-004`

### 7.2 `WEB-DR-002` — Detalle de eventos

#### Opciones

```text
A. Solo /eventos
B. /eventos + /eventos/[slug]
```

#### Tareas responsables

- `WEB-PRD-010`
- `WEB-PRD-015`
- `WEB-PAG-040`
- `WEB-PAG-041`

### 7.3 `WEB-DR-003` — Páginas de aplicaciones

#### Opciones

```text
A. Secciones dentro de /ecosistema
B. Enlaces externos
C. /ecosistema/vento-pass
   /ecosistema/anima
   /ecosistema/vento-os
```

#### Tareas responsables

- `WEB-PRD-010`
- `WEB-PRD-015`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`

### 7.4 `WEB-DR-004` — Búsqueda pública

La home declara un `SearchAction`, pero no existe buscador funcional.

#### Decisión requerida

```text
A. Implementar búsqueda real
B. Retirar SearchAction
```

#### Tareas responsables

- `WEB-GLB-008`
- `WEB-QA-020`

## 8. Navegación pública actual

### 8.1 Header

```text
/restaurantes
/empleos
/servicios
/ecosistema
mailto:hola@ventogroup.co
```

### 8.2 Footer

```text
/ecosistema
/empleos
/restaurantes
/servicios
mailto:hola@ventogroup.co
```

### 8.3 Elementos ausentes

- Eventos.
- Contacto como página.
- Privacidad.
- Tratamiento de datos.
- Términos.
- Cookies.

### 8.4 Conclusión

La navegación funciona, pero está hardcodeada, es incompleta y no está alineada con un catálogo canónico de páginas.

### 8.5 Tareas responsables

- `WEB-PRD-009`
- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-GLB-005`
- `WEB-MIG-011`
- `WEB-MIG-012`

## 9. Mapa actual

```text
/
├── restaurantes
│   ├── vento-cafe
│   ├── saudo
│   ├── molka
│   └── [slug publicado]
│
├── empleos
├── servicios
├── ecosistema
├── eventos ───────────────► /restaurantes
│
├── sitemap.xml
└── robots.txt
```

## 10. Registro canónico de brechas

| Brecha        | Descripción                                  | Severidad | Tarea responsable                           |
| ------------- | -------------------------------------------- | --------- | ------------------------------------------- |
| `WEB-GAP-001` | `/eventos` aparece en sitemap, pero redirige | Alta      | `WEB-PAG-040`, `WEB-GLB-009`                |
| `WEB-GAP-002` | CTA de eventos regresa a restaurantes        | Alta      | `WEB-PAG-042`, `WEB-QA-018`                 |
| `WEB-GAP-003` | No existe `/contacto`                        | Alta      | `WEB-PAG-060`, `WEB-PAG-061`                |
| `WEB-GAP-004` | No existen páginas legales                   | Alta      | `WEB-PAG-072` a `WEB-PAG-075`               |
| `WEB-GAP-005` | No existe detalle de vacante                 | Media     | `WEB-PAG-021`, `WEB-PAG-022`                |
| `WEB-GAP-006` | Navegación y rutas están hardcodeadas        | Alta      | `WEB-GLB-003` a `WEB-GLB-005`               |
| `WEB-GAP-007` | Fallbacks pueden generar rutas placeholder   | Alta      | `WEB-RND-006`, `WEB-MIG-003`, `WEB-MIG-015` |
| `WEB-GAP-008` | No existe 404 personalizada                  | Media     | `WEB-PAG-070`                               |
| `WEB-GAP-009` | No existe página de error personalizada      | Media     | `WEB-PAG-071`                               |
| `WEB-GAP-010` | Inconsistencia `Ecosistema` / `Nosotros`     | Media     | `WEB-PRD-015`, `WEB-PAG-030`                |
| `WEB-GAP-011` | `SearchAction` sin búsqueda real             | Media     | `WEB-GLB-008`, `WEB-QA-020`                 |
| `WEB-GAP-012` | Tres convenciones de bloques de restaurante  | Media     | `WEB-ARC-001`, `WEB-MIG-003`                |

## 11. Cambios obligatorios al plan maestro

Se deben agregar las siguientes tareas después de `WEB-PRD-014` y antes de los ADR.

### 11.1 `WEB-PRD-015 — Definir taxonomía canónica de rutas públicas`

#### Alcance

- URL canónica de Nosotros;
- URL canónica de Ecosistema;
- rutas de aplicaciones;
- detalle de eventos;
- detalle de servicios;
- aliases;
- slugs reservados;
- convención de idioma;
- reglas para rutas dinámicas.

### 11.2 `WEB-PRD-016 — Definir política canónica de redirecciones`

#### Alcance

- redirecciones permanentes;
- redirecciones temporales;
- cambios de slug;
- rutas eliminadas;
- preservación SEO;
- prevención de ciclos;
- trazabilidad de redirecciones.

## 12. Evidencia técnica

| Archivo                                | Evidencia aportada               |
| -------------------------------------- | -------------------------------- |
| `src/app/page.tsx`                     | Ruta y composición de inicio     |
| `src/app/restaurantes/page.tsx`        | Listado de restaurantes          |
| `src/app/restaurantes/[slug]/page.tsx` | Ruta dinámica y bloques legacy   |
| `src/app/empleos/page.tsx`             | Página de empleos                |
| `src/app/servicios/page.tsx`           | Página de servicios              |
| `src/app/ecosistema/page.tsx`          | Página de ecosistema             |
| `src/app/eventos/page.tsx`             | Redirección actual               |
| `src/app/sitemap.ts`                   | Rutas declaradas para indexación |
| `src/app/robots.ts`                    | Política pública de rastreo      |
| `src/components/site-header.tsx`       | Navegación del header            |
| `src/components/site-footer.tsx`       | Navegación del footer            |
| `src/components/category-page.tsx`     | Renderer genérico actual         |
| `src/lib/content.ts`                   | Consultas y fallbacks            |

## 13. Criterios de aprobación

`WEB-AUD-001` podrá marcarse como completada cuando se apruebe:

- [ ] la matriz maestra de rutas;
- [ ] la clasificación de `/eventos` como redirección inconsistente;
- [ ] la lista de rutas obligatorias faltantes;
- [ ] el registro de brechas;
- [ ] la incorporación de `WEB-PRD-015`;
- [ ] la incorporación de `WEB-PRD-016`;
- [ ] que las decisiones definitivas de URLs se resolverán en Fase 2.

## 14. Estado de cierre propuesto

```text
WEB-AUD-001 — APROBADA
```

### 14.1 Después de aprobación

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[ ] WEB-AUD-002 — Inventariar todos los componentes públicos
```

### 14.2 No ejecutar todavía

- migraciones;
- cambios en Supabase;
- cambios de navegación;
- creación de páginas;
- corrección de `/eventos`;
- modificaciones en producción;
- implementación del renderer;
- implementación del editor visual.

## 15. Registro de cambios

| Versión        | Fecha      | Cambio                                    | Estado            |
| -------------- | ---------- | ----------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Primera versión                           | Reemplazada       |
| `2026-07-23.2` | 2026-07-23 | Reorganización de contenido               | Reemplazada       |
| `2026-07-23.3` | 2026-07-23 | Corrección completa de jerarquía Markdown | Propuesta vigente |


# WEB-AUD-002 — Inventario canónico de componentes públicos

> Auditoría de los componentes React, envoltorios globales y composiciones de página que forman actualmente la interfaz pública de `ventogroup.co`.

## 0. Control documental

| Campo                 | Valor                                             |
| --------------------- | ------------------------------------------------- |
| Identificador         | `WEB-AUD-002`                                     |
| Nombre                | Inventariar todos los componentes públicos        |
| Fase                  | FASE 1 — Auditoría y línea base                   |
| Estado                | APROBADA                                          |
| Fecha                 | `2026-07-23`                                      |
| Repositorio           | `devVentoGroup/Vento-Group`                       |
| Rama auditada         | `main`                                            |
| Dependencia previa    | `WEB-AUD-001 — APROBADA`                          |
| Cambios en código     | Ninguno                                           |
| Cambios en Supabase   | Ninguno                                           |
| Cambios en producción | Ninguno                                           |
| Próxima tarea         | `WEB-AUD-003 — Inventariar contenido hardcodeado` |

## 1. Objetivo de la tarea

Crear una fuente única de verdad sobre todos los componentes que participan en la web pública actual.

La auditoría debe determinar:

1. qué componentes existen;
2. cuál es su responsabilidad;
3. dónde se utilizan;
4. cuáles son globales, reutilizables, específicos o legacy;
5. cuáles se ejecutan en cliente y cuáles en servidor;
6. qué dependencias de datos y estilos poseen;
7. cuáles pueden evolucionar hacia el futuro `Section Registry`;
8. cuáles deben conservarse, refactorizarse, reemplazarse o retirarse;
9. qué brechas presenta cada capa;
10. qué tarea futura será responsable de cada brecha.

## 2. Alcance y método

### 2.1 Elementos incluidos

La auditoría incluye:

- todos los archivos identificados en `src/components`;
- `src/app/layout.tsx`;
- `src/app/template.tsx`;
- las composiciones React asociadas a rutas públicas;
- dependencias entre componentes;
- dependencia de `src/lib/content.ts`;
- dependencia de `src/app/globals.css`;
- comportamiento cliente/servidor;
- reutilización real en las páginas actuales;
- candidatos al futuro registro de secciones.

### 2.2 Elementos excluidos

Esta tarea no modifica ni redefine todavía:

- schemas de secciones;
- nombres definitivos del `Section Registry`;
- modelo de base de datos;
- contratos JSON;
- diseño visual final;
- permisos de VISO;
- componentes del editor de VISO;
- código de producción.

### 2.3 Criterios de clasificación

Cada componente se clasifica según:

| Criterio                 | Valores                                                     |
| ------------------------ | ----------------------------------------------------------- |
| Capa                     | Global, primitiva, sección, colección, SEO o composición    |
| Ejecución                | Cliente o servidor                                          |
| Reutilización            | Global, múltiple, específica o sin uso                      |
| Dependencia de contenido | Ninguna, props, `WebsiteItem`, bloques o configuración fija |
| Estado recomendado       | Conservar, refactorizar, convertir, reemplazar o retirar    |

## 3. Resultado ejecutivo

### 3.1 Conteo total

| Grupo                                       | Cantidad |
| ------------------------------------------- | -------: |
| Componentes compartidos en `src/components` |       16 |
| Envoltorios globales en `src/app`           |        2 |
| Composiciones React de rutas públicas       |        7 |
| Total de unidades públicas inventariadas    |   **25** |

### 3.2 Componentes compartidos por ejecución

| Ejecución            | Cantidad | Componentes                                                                                                                                     |
| -------------------- | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Cliente              |        9 | `SiteHeader`, `SmoothScroll`, `Reveal`, `RevealGrid`, `ImageBanner`, `ItemCarousel`, `HeroMediaCarousel`, `HomeHeroIntro`, `HomeVenuesShowcase` |
| Servidor o agnóstico |        7 | `SiteFooter`, `MediaSlot`, `ItemCard`, `CtaBanner`, `CategoryPage`, `HomeEditorialBand`, `StructuredData`                                       |

### 3.3 Decisión preliminar por estado

| Estado recomendado                              | Cantidad | Alcance                                     |
| ----------------------------------------------- | -------: | ------------------------------------------- |
| Conservar como primitiva, con ajustes           |        4 | Scroll, animaciones y JSON-LD               |
| Refactorizar o convertir en componente canónico |       10 | Shell, medios, colecciones y secciones      |
| Reemplazar o retirar después de la migración    |        2 | `CategoryPage` y `HomeEditorialBand` actual |

### 3.4 Hallazgos principales

1. No existe un registro canónico de componentes o secciones.
2. Las páginas importan y ensamblan componentes manualmente.
3. Los componentes reciben estructuras legacy como `WebsiteItem` y `EditorialBand`.
4. Varios componentes contienen contenido de negocio, textos fallback y etiquetas visibles.
5. La capa multimedia utiliza `<img>` y `<video>` directamente.
6. No existe soporte de punto focal, poster, dimensiones, variantes optimizadas ni trazabilidad de assets.
7. Header y footer tienen navegación hardcodeada.
8. El campo de suscripción del footer no ejecuta ninguna acción.
9. Los enlaces sociales del footer apuntan a páginas genéricas de las plataformas.
10. `HomeVenuesShowcase` interpreta texto libre como si fueran características estructuradas.
11. `HomeEditorialBand` existe, pero no está utilizado por la composición vigente de la home.
12. `CategoryPage` fuerza a Empleos y Ecosistema a compartir una composición demasiado genérica.
13. Los estilos de todos los componentes están acoplados a `globals.css`.
14. No se encontraron pruebas unitarias ni archivos `.test.tsx`.
15. La serialización de JSON-LD no incluye endurecimiento explícito frente a contenido no confiable.
16. Los componentes complejos de interacción dependen de JavaScript cliente sin una estrategia común de pruebas.

## 4. Arquitectura pública actual

### 4.1 Flujo general

```text
RootLayout
├── fuentes globales
├── metadata global
├── SmoothScroll
├── script global
└── Template
    └── composición de ruta
        ├── SiteHeader
        ├── componentes específicos de página
        ├── componentes reutilizables
        ├── StructuredData
        └── SiteFooter
```

### 4.2 Dependencia de contenido

```text
Supabase
   ↓
src/lib/content.ts
   ↓
WebsiteBlock / WebsiteItem / HeroSlide / EditorialBand
   ↓
composiciones de página
   ↓
componentes públicos
```

### 4.3 Dependencia visual

```text
src/app/globals.css
   ↓
clases CSS globales
   ↓
todos los componentes públicos
```

No existen actualmente:

- CSS Modules;
- estilos encapsulados por componente;
- tokens administrables desde VISO;
- un sistema tipado de variantes;
- un registro de estilos por sección.

## 5. Matriz maestra de componentes compartidos

| ID            | Componente           | Archivo                                   | Capa actual              | Ejecución | Reutilización        | Estado recomendado               |
| ------------- | -------------------- | ----------------------------------------- | ------------------------ | --------- | -------------------- | -------------------------------- |
| `WEB-CMP-001` | `SiteHeader`         | `src/components/site-header.tsx`          | Shell global             | Cliente   | Global               | Refactorizar                     |
| `WEB-CMP-002` | `SiteFooter`         | `src/components/site-footer.tsx`          | Shell global             | Servidor  | Global               | Refactorizar                     |
| `WEB-CMP-003` | `SmoothScroll`       | `src/components/smooth-scroll.tsx`        | Runtime global           | Cliente   | Global               | Conservar con ajustes            |
| `WEB-CMP-004` | `Reveal`             | `src/components/reveal.tsx`               | Animación primitiva      | Cliente   | Múltiple             | Conservar con ajustes            |
| `WEB-CMP-005` | `RevealGrid`         | `src/components/reveal-grid.tsx`          | Animación primitiva      | Cliente   | Múltiple             | Conservar con ajustes            |
| `WEB-CMP-006` | `MediaSlot`          | `src/components/media-slot.tsx`           | Multimedia primitiva     | Servidor  | Múltiple             | Reemplazar por renderer canónico |
| `WEB-CMP-007` | `ImageBanner`        | `src/components/image-banner.tsx`         | Sección multimedia       | Cliente   | Múltiple             | Convertir en sección             |
| `WEB-CMP-008` | `HeroMediaCarousel`  | `src/components/hero-media-carousel.tsx`  | Hero interactivo         | Cliente   | Específica           | Refactorizar y convertir         |
| `WEB-CMP-009` | `HomeHeroIntro`      | `src/components/home-hero-intro.tsx`      | Hero específico          | Cliente   | Solo home            | Convertir en variante            |
| `WEB-CMP-010` | `HomeVenuesShowcase` | `src/components/home-venues-showcase.tsx` | Sección de restaurantes  | Cliente   | Solo home            | Convertir en sección             |
| `WEB-CMP-011` | `ItemCard`           | `src/components/item-card.tsx`            | Colección primitiva      | Servidor  | Múltiple             | Refactorizar                     |
| `WEB-CMP-012` | `ItemCarousel`       | `src/components/item-carousel.tsx`        | Colección interactiva    | Cliente   | Detalle restaurante  | Convertir en variante            |
| `WEB-CMP-013` | `CtaBanner`          | `src/components/cta-banner.tsx`           | Sección CTA              | Servidor  | Múltiple             | Convertir en sección             |
| `WEB-CMP-014` | `CategoryPage`       | `src/components/category-page.tsx`        | Composición genérica     | Servidor  | Empleos y Ecosistema | Reemplazar                       |
| `WEB-CMP-015` | `HomeEditorialBand`  | `src/components/editorial-band.tsx`       | Sección editorial legacy | Servidor  | Sin uso confirmado   | Retirar o reconstruir            |
| `WEB-CMP-016` | `StructuredData`     | `src/components/structured-data.tsx`      | SEO técnico              | Servidor  | Múltiple             | Conservar y endurecer            |

## 6. Inventario detallado por capa

### 6.1 Shell y runtime global

#### 6.1.1 `WEB-CMP-001 — SiteHeader`

**Archivo:** `src/components/site-header.tsx`  
**Ejecución:** cliente  
**Uso:** todas las páginas visuales actuales.

##### Responsabilidades actuales

- navegación desktop;
- navegación especial para la home;
- menú overlay;
- ocultamiento al hacer scroll;
- bloqueo del scroll del body;
- cierre con tecla `Escape`;
- enlaces destacados;
- CTA hacia Vento OS.

##### Aspectos correctos

- utiliza `aria-expanded`;
- relaciona el botón con `aria-controls`;
- cierra al cambiar de ruta;
- permite cerrar con `Escape`;
- separa el comportamiento visual de la home.

##### Brechas

- navegación escrita en constantes locales;
- duplicación entre `NAV`, `HOME_LEFT_NAV` y `HOME_RIGHT_NAV`;
- `Nosotros` y `Ecosistema` apuntan a la misma ruta con nombres distintos;
- `Contacto` continúa siendo `mailto:`;
- el CTA `Entrar a Vento OS` apunta a `/ecosistema`;
- no existe focus trap;
- el overlay no aplica `inert` al contenido de fondo;
- no restaura explícitamente el foco al botón de apertura;
- no se administra desde VISO;
- mezcla shell, navegación, scroll y overlay en un único componente.

##### Destino canónico

Componente global controlado por:

- navegación publicada;
- configuración del sitio;
- variantes de header;
- CTA configurable;
- estado de página;
- reglas de accesibilidad.

##### Tareas responsables

- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-MIG-011`
- `WEB-QA-011`
- `WEB-QA-012`

#### 6.1.2 `WEB-CMP-002 — SiteFooter`

**Archivo:** `src/components/site-footer.tsx`  
**Ejecución:** servidor  
**Uso:** todas las páginas visuales actuales.

##### Responsabilidades actuales

- marca;
- lista decorativa de restaurantes o categorías;
- navegación;
- correo de contacto;
- campo de suscripción;
- redes sociales;
- copyright.

##### Brechas

- navegación hardcodeada;
- `Contacto` utiliza `mailto:`;
- no contiene enlaces legales;
- el campo de suscripción no está dentro de un formulario funcional;
- el botón `Suscribirse` no tiene manejador ni endpoint;
- Instagram, LinkedIn y YouTube apuntan a las páginas genéricas de cada plataforma;
- el año está escrito directamente como `2026`;
- los contenidos globales no provienen de VISO;
- `venues` recibe únicamente nombres, no enlaces ni entidades estructuradas.

##### Destino canónico

Componente global alimentado por:

- menú de footer;
- configuración corporativa;
- redes oficiales;
- páginas legales;
- formulario real de newsletter;
- marcas o restaurantes seleccionados.

##### Tareas responsables

- `WEB-GLB-005`
- `WEB-GLB-006`
- `WEB-GLB-013`
- `WEB-MIG-012`
- `WEB-FRM-011`

#### 6.1.3 `WEB-CMP-003 — SmoothScroll`

**Archivo:** `src/components/smooth-scroll.tsx`  
**Ejecución:** cliente  
**Uso:** global desde `RootLayout`.

##### Responsabilidades actuales

- cargar Lenis dinámicamente;
- ejecutar scroll suave;
- respetar `prefers-reduced-motion`;
- volver al scroll nativo si falla la dependencia.

##### Aspectos correctos

- importación dinámica;
- degradación segura;
- limpieza del frame y de Lenis;
- respeto por movimiento reducido.

##### Brechas

- duración y easing hardcodeados;
- el comentario indica un comportamiento táctil que no está implementado explícitamente;
- no existe configuración por tema o dispositivo;
- no existen pruebas de interacción.

##### Destino canónico

Conservar como utilidad global, con configuración controlada por código y tokens del sitio. No debe exponerse como bloque editable libre.

##### Tareas responsables

- `WEB-GLB-001`
- `WEB-QA-008`
- `WEB-QA-009`
- `WEB-QA-014`
- `WEB-PERF-005`

### 6.2 Primitivas de animación

#### 6.2.1 `WEB-CMP-004 — Reveal`

**Archivo:** `src/components/reveal.tsx`  
**Ejecución:** cliente  
**Uso:** home, restaurantes, servicios y detalle de restaurante.

##### Responsabilidades actuales

- detectar entrada en viewport;
- revelar una vez o alternar visibilidad;
- aplicar delay;
- respetar movimiento reducido.

##### Aspectos correctos

- configuración de threshold y root margin;
- desconexión del observer;
- soporte de `prefers-reduced-motion`;
- modo `once` y `toggle`.

##### Brechas

- siempre introduce un `<div>` adicional;
- no permite elegir el elemento semántico;
- el delay se aplica como estilo inline;
- no existe catálogo canónico de animaciones;
- no tiene pruebas.

##### Destino canónico

Conservar como primitiva interna del renderer. Debe aceptar un elemento semántico o patrón `asChild` y usar variantes de animación registradas.

##### Tareas responsables

- `WEB-ARC-005`
- `WEB-RND-011`
- `WEB-QA-001`
- `WEB-QA-014`

#### 6.2.2 `WEB-CMP-005 — RevealGrid`

**Archivo:** `src/components/reveal-grid.tsx`  
**Ejecución:** cliente  
**Uso:** `CategoryPage`, Restaurantes y Servicios.

##### Responsabilidades actuales

- revelar hijos en cascada;
- apoyarse en selectores `nth-child` de `globals.css`;
- respetar movimiento reducido.

##### Brechas

- comportamiento estrechamente acoplado a CSS global;
- delays definidos fuera del contrato del componente;
- no permite configurar patrón o límite del stagger;
- no existen pruebas;
- siempre renderiza un `<div>`.

##### Destino canónico

Conservar como primitiva interna o integrarla dentro de una API canónica de animación para colecciones.

##### Tareas responsables

- `WEB-ARC-005`
- `WEB-RND-011`
- `WEB-QA-001`
- `WEB-QA-014`

### 6.3 Primitivas y secciones multimedia

#### 6.3.1 `WEB-CMP-006 — MediaSlot`

**Archivo:** `src/components/media-slot.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** componente multimedia central de la web actual.

##### Responsabilidades actuales

- mostrar placeholder si no existe medio;
- inferir imagen o video por URL;
- renderizar `<img>` o `<video>`;
- reproducir videos automáticamente, silenciados y en loop.

##### Brechas críticas

- utiliza `<img>` directo;
- no declara ancho ni alto;
- no utiliza optimización responsive;
- no soporta punto focal;
- no soporta `srcset`;
- no soporta poster de video;
- no soporta preload configurable;
- no soporta controles de autoplay;
- no distingue media decorativa de media informativa;
- el texto `label` se utiliza como `alt` sin un contrato de accesibilidad;
- los placeholders pueden quedar visibles en producción;
- la inferencia por extensión está duplicada en `HeroMediaCarousel`.

##### Destino canónico

Reemplazar por un `MediaRenderer` único que resuelva:

- asset por ID;
- URL optimizada;
- dimensiones;
- alt text;
- medio decorativo;
- focal point;
- crop;
- poster;
- prioridad;
- lazy loading;
- variantes responsive;
- errores y fallbacks seguros.

##### Tareas responsables

- `WEB-RND-010`
- `WEB-RND-017`
- `WEB-MED-005`
- `WEB-MED-006`
- `WEB-MED-007`
- `WEB-MED-008`
- `WEB-MED-009`
- `WEB-PERF-003`
- `WEB-PERF-004`

#### 6.3.2 `WEB-CMP-007 — ImageBanner`

**Archivo:** `src/components/image-banner.tsx`  
**Ejecución:** cliente  
**Uso:** Inicio, Restaurantes y Servicios.

##### Responsabilidades actuales

- banda multimedia full-bleed;
- parallax por scroll;
- eyebrow y título opcionales;
- desactivar movimiento con preferencia reducida.

##### Aspectos correctos

- observación de visibilidad;
- uso de `requestAnimationFrame`;
- limpieza de listeners;
- soporte de imagen o video;
- parallax configurable por prop.

##### Brechas

- depende del `MediaSlot` actual;
- el comportamiento visual no está modelado mediante variantes;
- el parallax no tiene límite canónico por dispositivo;
- no existe focal point;
- no existe control editorial desde VISO;
- cada instancia agrega listeners de scroll y resize.

##### Destino canónico

Convertir en sección registrada:

```text
media.image_banner
```

con variantes, focal point, responsive, overlay y animación controlada.

##### Tareas responsables

- `ADR-WEB-002`
- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-RND-017`
- `WEB-BLD-008`
- `WEB-BLD-010`

#### 6.3.3 `WEB-CMP-008 — HeroMediaCarousel`

**Archivo:** `src/components/hero-media-carousel.tsx`  
**Ejecución:** cliente  
**Uso:** indirecto desde `HomeHeroIntro`.

##### Responsabilidades actuales

- ordenar slides;
- autoplay;
- pausa por hover, foco y visibilidad de pestaña;
- preload parcial;
- drag horizontal;
- parallax por cursor;
- navegación anterior/siguiente;
- indicadores;
- imagen o video;
- variante `default` o `immersive`.

##### Aspectos correctos

- pausa cuando la pestaña no está visible;
- respeta movimiento reducido;
- carga slide activo y vecinos;
- soporta pointer events;
- limpia listeners y timers;
- dispone de controles con etiquetas ARIA.

##### Brechas

- 270 líneas y múltiples responsabilidades;
- utiliza medios crudos;
- duplica la inferencia de tipo multimedia;
- controles visibles `Prev` y `Next` están en inglés;
- CTA usa siempre `Link`, incluso si la URL fuera externa;
- no existe esquema de slide validado por el futuro builder;
- no existe configuración editorial del intervalo;
- no existe política canónica de autoplay;
- no hay pruebas de drag, autoplay, pausa ni teclado;
- no expone estado accesible del slide activo.

##### Destino canónico

Separar en:

1. primitiva de carrusel;
2. renderer multimedia;
3. sección registrada `hero.media_carousel`;
4. configuración validada de autoplay, overlay, CTA y responsive.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-002`
- `WEB-RND-003`
- `WEB-RND-017`
- `WEB-QA-001`
- `WEB-QA-003`
- `WEB-QA-011`
- `WEB-QA-014`
- `WEB-PERF-005`

### 6.4 Componentes de contenido y colecciones

#### 6.4.1 `WEB-CMP-009 — HomeHeroIntro`

**Archivo:** `src/components/home-hero-intro.tsx`  
**Ejecución:** cliente  
**Uso:** solo Inicio.

##### Responsabilidades actuales

- encapsular el hero de la home;
- ejecutar una secuencia splash;
- mostrar wordmark;
- mostrar enlaces de restaurantes;
- montar `HeroMediaCarousel`;
- controlar fases mediante timers.

##### Brechas

- timings de `1800 ms` y `3200 ms` hardcodeados;
- branding y ruta del logo hardcodeados;
- comportamiento exclusivo de la home;
- depende de clases globales específicas;
- no permite omitir o configurar el splash;
- no existe control editorial desde VISO;
- no tiene mecanismo explícito para evitar repetir el splash por sesión;
- no existen pruebas de temporización.

##### Destino canónico

Convertir en una variante controlada de hero o en una composición de hero + splash con configuración restringida.

##### Tareas responsables

- `WEB-PAG-001`
- `WEB-PAG-002`
- `WEB-PAG-003`
- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-BLD-008`

#### 6.4.2 `WEB-CMP-010 — HomeVenuesShowcase`

**Archivo:** `src/components/home-venues-showcase.tsx`  
**Ejecución:** cliente  
**Uso:** solo Inicio.

##### Responsabilidades actuales

- selector de restaurantes;
- carrusel circular;
- media activa;
- descripción;
- características;
- ubicación;
- disponibilidad;
- CTA.

##### Aspectos correctos

- tabs con `aria-selected`;
- navegación anterior y siguiente;
- estado vacío controlado;
- uso de datos de restaurantes.

##### Brechas críticas

- deriva características dividiendo `body` o `excerpt` por saltos de línea y puntos;
- si no obtiene suficientes elementos, inventa cuatro características fallback;
- etiquetas como `Restaurantes`, `Aspectos destacados`, `Ubicación` y `Disponibilidad` están hardcodeadas;
- mezcla contenido, transformación de datos y presentación;
- no existe un campo estructurado para características;
- depende del `MediaSlot` actual;
- no hay navegación completa por teclado para el tablist;
- no hay esquema de configuración de sección.

##### Destino canónico

Convertir en:

```text
venues.showcase
```

con propiedades estructuradas y fuente dinámica configurable.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-ARC-003`
- `WEB-RND-003`
- `WEB-BLD-011`
- `WEB-BLD-012`
- `WEB-PAG-010`
- `WEB-QA-011`

#### 6.4.3 `WEB-CMP-011 — ItemCard`

**Archivo:** `src/components/item-card.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** colecciones y carruseles.

##### Responsabilidades actuales

- mostrar medio;
- título;
- ubicación y horario;
- descripción;
- acción.

##### Brechas

- depende directamente del tipo legacy `WebsiteItem`;
- aplica la misma presentación a restaurantes, empleos, servicios y aplicaciones;
- utiliza `<a>` para rutas internas;
- externalidad solo se detecta mediante `http` o `https`;
- puede mostrar el fallback `Completa este bloque desde VISO.`;
- no tiene variantes de tarjeta;
- no modela estados vacío, deshabilitado o borrador;
- no existe esquema de campos por categoría.

##### Destino canónico

Refactorizar como primitiva de colección con variantes tipadas:

- venue;
- job;
- service;
- app;
- editorial.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-ARC-003`
- `WEB-RND-002`
- `WEB-RND-009`
- `WEB-BLD-011`
- `WEB-MIG-015`

#### 6.4.4 `WEB-CMP-012 — ItemCarousel`

**Archivo:** `src/components/item-carousel.tsx`  
**Ejecución:** cliente  
**Uso:** restaurantes relacionados en detalle.

##### Responsabilidades actuales

- rail horizontal;
- botones anterior y siguiente;
- desplazamiento suave;
- render de `ItemCard`.

##### Brechas

- controles visibles `Prev` y `Next` en inglés;
- no calcula estado inicial o final;
- no deshabilita botones;
- no anuncia posición;
- no existe navegación estructurada por teclado;
- no soporta variantes;
- depende directamente de `WebsiteItem`;
- no tiene pruebas.

##### Destino canónico

Convertir en variante de colección:

```text
collection.carousel
```

basada en una primitiva de carrusel compartida.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-RND-009`
- `WEB-QA-001`
- `WEB-QA-011`

#### 6.4.5 `WEB-CMP-013 — CtaBanner`

**Archivo:** `src/components/cta-banner.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** Restaurantes y Servicios.

##### Responsabilidades actuales

- título;
- texto opcional;
- CTA interno o externo.

##### Aspectos correctos

- interfaz pequeña;
- reutilizable;
- distingue enlaces externos básicos;
- puede renderizarse sin CTA.

##### Brechas

- no dispone de variantes;
- no soporta medio, fondo o alineación;
- no valida URLs;
- enlaces HTTP externos no abren necesariamente en una nueva pestaña;
- no existe esquema para builder;
- el estilo depende enteramente de CSS global.

##### Destino canónico

Convertir en:

```text
cta.banner
```

con variantes controladas y contrato de enlaces.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-002`
- `WEB-RND-003`
- `WEB-BLD-007`
- `WEB-BLD-008`

#### 6.4.6 `WEB-CMP-014 — CategoryPage`

**Archivo:** `src/components/category-page.tsx`  
**Ejecución:** servidor  
**Uso:** Empleos y Ecosistema.

##### Responsabilidades actuales

- crear hero desde el primer item;
- generar JSON-LD de colección;
- mostrar grilla de tarjetas;
- montar header y footer;
- incluir un botón de regreso al inicio.

##### Brechas críticas

- fuerza el mismo diseño para dominios funcionales distintos;
- el primer item se utiliza como medio principal;
- si cambia el orden, cambia el hero;
- no soporta bloques editoriales;
- no soporta variantes de página;
- no soporta CTA contextual;
- el botón principal siempre vuelve a `/`;
- importa shell global dentro de una composición genérica;
- no puede evolucionar directamente hacia un page builder.

##### Destino canónico

Reemplazar por `PageRenderer` y secciones registradas. No debe sobrevivir como plantilla universal.

##### Tareas responsables

- `WEB-RND-004`
- `WEB-RND-005`
- `WEB-PAG-020`
- `WEB-PAG-030`
- `WEB-MIG-020`

#### 6.4.7 `WEB-CMP-015 — HomeEditorialBand`

**Archivo:** `src/components/editorial-band.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso confirmado:** ninguno en la composición vigente.

##### Responsabilidades previstas

- imagen;
- eyebrow;
- título;
- cuerpo;
- CTA;
- orientación normal o inversa.

##### Brechas

- componente legacy sin uso confirmado;
- depende del tipo `EditorialBand`;
- contiene fallback en inglés `Editorial section`;
- CTA siempre utiliza `Link`;
- no forma parte de un registro de secciones;
- se solapa con la estructura editorial escrita directamente en la home.

##### Destino canónico

No conservar el componente actual como fuente de verdad.

Su patrón puede servir de referencia para:

```text
editorial.split
editorial.reverse
```

Después de la migración deberá retirarse.

##### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-MIG-020`

### 6.5 SEO técnico

#### 6.5.1 `WEB-CMP-016 — StructuredData`

**Archivo:** `src/components/structured-data.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** Inicio, páginas de colección y detalle de restaurante.

##### Responsabilidades actuales

- serializar un objeto o arreglo;
- insertarlo como `application/ld+json`.

##### Aspectos correctos

- interfaz pequeña;
- reutilizable;
- compatible con varios schemas.

##### Brechas

- acepta cualquier `Record<string, unknown>`;
- no valida schemas;
- no limita propiedades;
- usa `dangerouslySetInnerHTML`;
- serializa con `JSON.stringify` sin escape explícito de `<`;
- no existe prueba frente a contenido proveniente del CMS;
- la home declara un `SearchAction` sin búsqueda funcional.

##### Destino canónico

Conservar como utilidad técnica, pero reemplazar la entrada libre por builders y schemas validados para:

- Organization;
- WebSite;
- Restaurant;
- JobPosting;
- Event;
- BreadcrumbList;
- ItemList.

##### Tareas responsables

- `WEB-RND-014`
- `WEB-SEC-016`
- `WEB-QA-020`

## 7. Envoltorios globales de aplicación

### 7.1 `WEB-APP-001 — RootLayout`

**Archivo:** `src/app/layout.tsx`  
**Ejecución:** servidor.

#### Responsabilidades actuales

- idioma `es`;
- carga de Cormorant Garamond;
- carga de Manrope;
- metadata global;
- estilos globales;
- montaje de `SmoothScroll`;
- script para impedir cambios por rueda en inputs numéricos.

#### Brechas

- tipografías y pesos hardcodeados;
- metadata global hardcodeada;
- canonical global `/`;
- no consume tema o configuración del sitio;
- contiene un script global para inputs numéricos que no pertenece claramente al shell público;
- no monta header ni footer;
- no define providers para preview, theme o publicaciones futuras.

#### Destino canónico

Mantener como shell técnico y mover la configuración editable a resolutores seguros del sitio.

#### Tareas responsables

- `WEB-GLB-001`
- `WEB-GLB-007`
- `WEB-RND-013`
- `WEB-ARC-005`

### 7.2 `WEB-APP-002 — Template`

**Archivo:** `src/app/template.tsx`  
**Ejecución:** servidor.

#### Responsabilidades actuales

- remontar el contenido en cada navegación;
- aplicar transición de entrada mediante `page-transition`.

#### Brechas

- comportamiento completamente dependiente de CSS global;
- no tiene variantes;
- no diferencia navegación normal, preview o movimiento reducido desde el componente;
- no tiene pruebas de regresión visual.

#### Destino canónico

Conservar como infraestructura de transición, sin exponer CSS libre al editor.

#### Tareas responsables

- `WEB-RND-011`
- `WEB-QA-006`
- `WEB-QA-014`

## 8. Composiciones de rutas públicas

| ID                 | Composición            | Archivo                                | Componentes principales                              | Estado futuro                            |
| ------------------ | ---------------------- | -------------------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `WEB-PAGE-CMP-001` | `HomePage`             | `src/app/page.tsx`                     | Header, hero, venues, banner, reveal, media, footer  | Reemplazar composición fija por renderer |
| `WEB-PAGE-CMP-002` | `RestaurantesPage`     | `src/app/restaurantes/page.tsx`        | Header, media, editorial, banner, cards, CTA, footer | Reemplazar por blueprint dinámico        |
| `WEB-PAGE-CMP-003` | `RestaurantDetailPage` | `src/app/restaurantes/[slug]/page.tsx` | Header, media, reveal, carousel, JSON-LD, footer     | Convertir en plantilla dinámica          |
| `WEB-PAGE-CMP-004` | `EmpleosPage`          | `src/app/empleos/page.tsx`             | `CategoryPage`                                       | Reemplazar completamente                 |
| `WEB-PAGE-CMP-005` | `ServiciosPage`        | `src/app/servicios/page.tsx`           | Header, media, pillars, cards, CTA, footer           | Reemplazar por renderer                  |
| `WEB-PAGE-CMP-006` | `EcosistemaPage`       | `src/app/ecosistema/page.tsx`          | `CategoryPage`                                       | Reemplazar completamente                 |
| `WEB-PAGE-CMP-007` | `EventosPage`          | `src/app/eventos/page.tsx`             | Redirección, sin UI                                  | Sustituir cuando se implemente Eventos   |

### 8.1 Conclusión sobre las composiciones

Las páginas actuales no se construyen mediante un sistema de secciones.

Cada archivo de ruta:

- elige componentes manualmente;
- define el orden manualmente;
- contiene textos manualmente;
- resuelve fallbacks manualmente;
- monta header y footer manualmente;
- controla parte de su SEO manualmente.

Por lo tanto, ninguna composición actual debe convertirse en la arquitectura definitiva del builder.

## 9. Matriz de uso por página

### 9.1 Inicio

```text
HomePage
├── StructuredData
├── SiteHeader
├── HomeHeroIntro
│   └── HeroMediaCarousel
├── Reveal
├── MediaSlot
├── HomeVenuesShowcase
│   └── MediaSlot
├── ImageBanner
│   └── MediaSlot
└── SiteFooter
```

### 9.2 Restaurantes

```text
RestaurantesPage
├── StructuredData
├── SiteHeader
├── MediaSlot
├── Reveal
├── RevealGrid
├── ItemCard
├── ImageBanner
├── CtaBanner
└── SiteFooter
```

### 9.3 Detalle de restaurante

```text
RestaurantDetailPage
├── StructuredData
├── SiteHeader
├── MediaSlot
├── Reveal
├── ItemCarousel
│   └── ItemCard
└── SiteFooter
```

### 9.4 Empleos y Ecosistema

```text
EmpleosPage / EcosistemaPage
└── CategoryPage
    ├── StructuredData
    ├── SiteHeader
    ├── MediaSlot
    ├── RevealGrid
    ├── ItemCard
    └── SiteFooter
```

### 9.5 Servicios

```text
ServiciosPage
├── StructuredData
├── SiteHeader
├── MediaSlot
├── Reveal
├── RevealGrid
├── ItemCard
├── ImageBanner
├── CtaBanner
└── SiteFooter
```

## 10. Arquitectura canónica objetivo

### 10.1 Capas propuestas

```text
PUBLIC SITE SHELL
├── GlobalHeader
├── GlobalFooter
├── ThemeProvider
└── TransitionRuntime

PAGE RENDERER
├── PageLoader
├── PageValidator
├── SectionRegistry
└── ErrorBoundary

SECTION REGISTRY
├── hero.*
├── editorial.*
├── media.*
├── venues.*
├── collection.*
├── values.*
├── steps.*
├── cta.*
└── form.*

PRIMITIVES
├── MediaRenderer
├── LinkRenderer
├── Carousel
├── Reveal
├── RevealGrid
├── Container
└── StructuredData

DATA RESOLVERS
├── restaurantes
├── vacantes
├── eventos
├── servicios
└── aplicaciones
```

### 10.2 Mapeo actual hacia destino

| Componente actual    | Destino canónico                                                 |
| -------------------- | ---------------------------------------------------------------- |
| `SiteHeader`         | `GlobalHeader` alimentado por navegación publicada               |
| `SiteFooter`         | `GlobalFooter` alimentado por configuración publicada            |
| `MediaSlot`          | `MediaRenderer`                                                  |
| `ImageBanner`        | `media.image_banner`                                             |
| `HeroMediaCarousel`  | Primitiva `Carousel` + `hero.media_carousel`                     |
| `HomeHeroIntro`      | Variante de hero o composición controlada                        |
| `HomeVenuesShowcase` | `venues.showcase`                                                |
| `ItemCard`           | Primitiva de tarjeta con variantes                               |
| `ItemCarousel`       | `collection.carousel`                                            |
| `CtaBanner`          | `cta.banner`                                                     |
| `HomeEditorialBand`  | Referencia para `editorial.split`; retirar implementación actual |
| `CategoryPage`       | Reemplazar por `PageRenderer`                                    |
| `Reveal`             | Primitiva de animación                                           |
| `RevealGrid`         | Primitiva de animación de colecciones                            |
| `StructuredData`     | Builders JSON-LD validados                                       |
| `SmoothScroll`       | Runtime global controlado                                        |

## 11. Registro canónico de brechas

| Brecha        | Descripción                                                                         | Severidad | Tareas responsables                          |
| ------------- | ----------------------------------------------------------------------------------- | --------- | -------------------------------------------- |
| `WEB-GAP-013` | No existe arquitectura canónica de componentes y capas                              | Alta      | `WEB-ARC-005`, `ADR-WEB-002`                 |
| `WEB-GAP-014` | No existe `Section Registry`; las páginas ensamblan componentes manualmente         | Crítica   | `WEB-RND-003`, `WEB-RND-005`                 |
| `WEB-GAP-015` | La capa multimedia carece de optimización, focal point y contratos de accesibilidad | Crítica   | `WEB-RND-017`, `WEB-MED-005` a `WEB-MED-009` |
| `WEB-GAP-016` | Header y footer tienen navegación y contenido hardcodeados                          | Alta      | `WEB-GLB-003` a `WEB-GLB-006`                |
| `WEB-GAP-017` | La suscripción del footer no funciona                                               | Alta      | `WEB-FRM-011`, `WEB-GLB-005`                 |
| `WEB-GAP-018` | Enlaces sociales del footer son placeholders genéricos                              | Alta      | `WEB-GLB-006`, `WEB-MIG-015`                 |
| `WEB-GAP-019` | JSON-LD acepta datos sin schema ni escape endurecido                                | Alta      | `WEB-SEC-016`, `WEB-RND-014`                 |
| `WEB-GAP-020` | `CategoryPage` impone una estructura inadecuada a Empleos y Ecosistema              | Alta      | `WEB-PAG-020`, `WEB-PAG-030`, `WEB-MIG-020`  |
| `WEB-GAP-021` | `HomeVenuesShowcase` convierte texto libre en características                       | Alta      | `WEB-ARC-002`, `WEB-ARC-003`, `WEB-PAG-010`  |
| `WEB-GAP-022` | `HomeEditorialBand` es legacy y no tiene uso confirmado                             | Media     | `WEB-MIG-020`                                |
| `WEB-GAP-023` | Todos los componentes están acoplados a un `globals.css` monolítico                 | Alta      | `WEB-ARC-005`, `WEB-RND-011`, `WEB-GLB-001`  |
| `WEB-GAP-024` | No existen pruebas unitarias o de componentes                                       | Alta      | `WEB-QA-001`, `WEB-QA-002`, `WEB-QA-006`     |
| `WEB-GAP-025` | Componentes interactivos complejos carecen de pruebas E2E                           | Alta      | `WEB-QA-003`, `WEB-QA-011`, `WEB-QA-014`     |
| `WEB-GAP-026` | Manejo de enlaces internos y externos no está unificado                             | Media     | `WEB-ARC-002`, `WEB-RND-002`, `WEB-QA-018`   |
| `WEB-GAP-027` | Persisten textos fallback, instrucciones y controles en inglés                      | Alta      | `WEB-MIG-015`, `WEB-QA-018`                  |
| `WEB-GAP-028` | El menú overlay carece de gestión completa del foco                                 | Alta      | `WEB-GLB-003`, `WEB-QA-011`, `WEB-QA-012`    |
| `WEB-GAP-029` | Header y footer se montan manualmente en cada composición                           | Media     | `WEB-ARC-005`, `WEB-RND-005`                 |
| `WEB-GAP-030` | No existe manejo canónico de vacío, error y contenido inválido por componente       | Alta      | `WEB-RND-006`, `WEB-QA-002`                  |

## 12. Cambios obligatorios al plan maestro

### 12.1 Marcar tarea previa

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
```

### 12.2 Agregar `WEB-ARC-005`

Ubicación recomendada: después de `WEB-ARC-004`.

```text
[ ] WEB-ARC-005 — Definir arquitectura canónica de componentes públicos
```

#### Alcance

- capas globales;
- primitivas;
- secciones registradas;
- composiciones;
- fronteras cliente/servidor;
- convención de nombres;
- propiedad de estilos;
- reglas de reutilización;
- reglas de deprecación;
- dependencias permitidas.

### 12.3 Agregar `WEB-RND-017`

Ubicación recomendada: dentro de la Fase 5, relacionado con `WEB-RND-010`.

```text
[ ] WEB-RND-017 — Crear MediaRenderer canónico
```

#### Alcance

- resolución por asset;
- imagen y video;
- dimensiones;
- focal point;
- alt text;
- media decorativa;
- poster;
- crop;
- prioridad;
- lazy loading;
- responsive;
- fallback seguro.

### 12.4 Agregar `WEB-FRM-011`

Ubicación recomendada: después de `WEB-FRM-010`.

```text
[ ] WEB-FRM-011 — Implementar suscripción de newsletter o retirar la interfaz
```

#### Alcance

- decidir si Vento Group usará newsletter;
- formulario funcional;
- consentimiento;
- validación;
- almacenamiento o proveedor;
- confirmación;
- errores;
- eliminación del campo actual si no se implementa.

### 12.5 Agregar `WEB-SEC-016`

Ubicación recomendada: después de `WEB-SEC-015`.

```text
[ ] WEB-SEC-016 — Endurecer serialización y validación de JSON-LD
```

#### Alcance

- schemas tipados;
- escape de caracteres peligrosos;
- validación de URLs;
- exclusión de campos no permitidos;
- pruebas con contenido del CMS;
- prevención de cierre prematuro de scripts.

### 12.6 Agregar `WEB-MIG-020`

Ubicación recomendada: después de `WEB-MIG-019`.

```text
[ ] WEB-MIG-020 — Retirar componentes y composiciones públicas legacy
```

#### Alcance

- retirar `CategoryPage`;
- retirar `HomeEditorialBand` actual;
- retirar adaptadores sin uso;
- eliminar fallbacks visibles;
- eliminar imports muertos;
- confirmar que ninguna página depende del código retirado.

## 13. Criterios de aprobación

`WEB-AUD-002` podrá marcarse como completada cuando se apruebe:

- [ ] el inventario de 16 componentes compartidos;
- [ ] el inventario de 2 envoltorios globales;
- [ ] el inventario de 7 composiciones de ruta;
- [ ] la clasificación conservar/refactorizar/reemplazar;
- [ ] el mapa de dependencias actual;
- [ ] el mapeo hacia la arquitectura objetivo;
- [ ] el registro `WEB-GAP-013` a `WEB-GAP-030`;
- [ ] la incorporación de `WEB-ARC-005`;
- [ ] la incorporación de `WEB-RND-017`;
- [ ] la incorporación de `WEB-FRM-011`;
- [ ] la incorporación de `WEB-SEC-016`;
- [ ] la incorporación de `WEB-MIG-020`.

## 14. Estado de cierre propuesto

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[ ] WEB-AUD-002 — Inventariar todos los componentes públicos
```

Estado de esta tarea:

```text
WEB-AUD-002 — APROBADA
```

### 14.1 No ejecutar todavía

- refactor de componentes;
- eliminación de componentes legacy;
- creación del `Section Registry`;
- migraciones;
- cambios en Supabase;
- cambios en navegación;
- cambios en producción;
- implementación de newsletter;
- reemplazo de la capa multimedia.

### 14.2 Continuidad después de aprobación

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[ ] WEB-AUD-003 — Inventariar contenido hardcodeado
```

## 15. Evidencia técnica consultada

### 15.1 Componentes compartidos

- `src/components/category-page.tsx`
- `src/components/cta-banner.tsx`
- `src/components/editorial-band.tsx`
- `src/components/hero-media-carousel.tsx`
- `src/components/home-hero-intro.tsx`
- `src/components/home-venues-showcase.tsx`
- `src/components/image-banner.tsx`
- `src/components/item-card.tsx`
- `src/components/item-carousel.tsx`
- `src/components/media-slot.tsx`
- `src/components/reveal-grid.tsx`
- `src/components/reveal.tsx`
- `src/components/site-footer.tsx`
- `src/components/site-header.tsx`
- `src/components/smooth-scroll.tsx`
- `src/components/structured-data.tsx`

### 15.2 Infraestructura y composiciones

- `src/app/layout.tsx`
- `src/app/template.tsx`
- `src/app/page.tsx`
- `src/app/restaurantes/page.tsx`
- `src/app/restaurantes/[slug]/page.tsx`
- `src/app/empleos/page.tsx`
- `src/app/servicios/page.tsx`
- `src/app/ecosistema/page.tsx`
- `src/app/eventos/page.tsx`
- `src/app/globals.css`
- `src/lib/content.ts`
- `package.json`

### 15.3 Verificaciones complementarias

- búsqueda de usos por nombre de componente;
- búsqueda de archivos `.test.tsx`;
- búsqueda de llamadas `describe(...)`;
- revisión de dependencias declaradas;
- revisión de fronteras `"use client"`.

## 16. Registro de cambios

| Versión        | Fecha      | Cambio                                                            | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-002` con jerarquía Markdown validada | Propuesta vigente |


# WEB-AUD-003 — Inventario canónico de contenido hardcodeado

> Auditoría del contenido fijo incorporado directamente en el código de `ventogroup.co`, incluyendo textos, CTA, correos, enlaces, activos, SEO, metadatos, placeholders y fallbacks.

## 0. Control documental

| Campo                  | Valor                                               |
| ---------------------- | --------------------------------------------------- |
| Identificador          | `WEB-AUD-003`                                       |
| Nombre                 | Inventariar contenido hardcodeado                   |
| Fase                   | FASE 1 — Auditoría y línea base                     |
| Estado                 | APROBADA                                            |
| Fecha                  | `2026-07-23`                                        |
| Repositorio            | `devVentoGroup/Vento-Group`                         |
| Rama auditada          | `main`                                              |
| Dependencias aprobadas | `WEB-AUD-001`, `WEB-AUD-002`                        |
| Cambios en código      | Ninguno                                             |
| Cambios en Supabase    | Ninguno                                             |
| Cambios en producción  | Ninguno                                             |
| Próxima tarea          | `WEB-AUD-004 — Inventariar contenido administrable` |

## 1. Objetivo de la tarea

Identificar y clasificar todo contenido público o funcional incorporado directamente en el código fuente.

La auditoría debe determinar:

1. qué contenido está hardcodeado;
2. en qué archivo se encuentra;
3. si es visible, funcional, SEO, fallback o técnico;
4. si puede llegar a producción;
5. si debe administrarse desde VISO;
6. si debe conservarse en código;
7. si debe migrarse a una entidad estructurada;
8. qué tarea será responsable de resolver cada brecha.

## 2. Definición de contenido hardcodeado

Para esta auditoría se considera contenido hardcodeado cualquier valor incorporado directamente en archivos TypeScript o TSX que represente:

- copy editorial;
- títulos;
- subtítulos;
- CTA;
- etiquetas visibles;
- correos;
- teléfonos;
- URLs;
- rutas;
- enlaces sociales;
- logos;
- imágenes;
- videos;
- metadata SEO;
- datos estructurados;
- textos alternativos;
- placeholders;
- fallbacks;
- contenido instructivo;
- nombres de marca;
- datos corporativos;
- información de servicios;
- información de restaurantes;
- información de aplicaciones.

## 3. Contenido no considerado editorial

No todo literal de código debe trasladarse a VISO.

Los siguientes elementos deben permanecer controlados por desarrollo:

- nombres de clases CSS;
- identificadores HTML;
- atributos ARIA técnicos;
- nombres de tipos de Schema.org;
- estados internos;
- mensajes técnicos no públicos;
- límites y constantes de comportamiento;
- código de interacción;
- nombres de componentes;
- claves de registro;
- validaciones;
- reglas de seguridad.

La microcopia de interfaz podrá permanecer en código o trasladarse a un catálogo de traducciones, pero no debe convertirse automáticamente en contenido libre del editor visual.

## 4. Clasificación canónica de contenido

| Clase                         | Ejemplos                                | Fuente canónica objetivo              |
| ----------------------------- | --------------------------------------- | ------------------------------------- |
| Contenido editorial de página | Títulos, párrafos, CTA, banners         | Revisión versionada de página         |
| Contenido global del sitio    | Nombre, contacto, redes, logos          | `website_site_settings` y medios      |
| Navegación                    | Menús, etiquetas, orden, destinos       | Menús de navegación publicados        |
| Entidades empresariales       | Restaurantes, empleos, servicios, apps  | Tablas normalizadas                   |
| SEO global                    | Título base, descripción, imagen social | Configuración global SEO              |
| SEO de página                 | Title, description, canonical, OG       | Revisión o configuración de página    |
| Datos estructurados           | Organization, Restaurant, JobPosting    | Builders derivados de datos validados |
| Microcopia de interfaz        | Menú, cerrar, anterior, siguiente       | Código o catálogo de traducciones     |
| Fallback técnico              | Estado vacío o error                    | Componente técnico no indexable       |
| Placeholder editorial         | “Completa desde VISO”                   | Prohibido en publicación pública      |

## 5. Resultado ejecutivo

### 5.1 Hallazgos cuantificables

| Hallazgo                                      |         Cantidad |
| --------------------------------------------- | ---------------: |
| Arreglos de navegación hardcodeados en header |                4 |
| Correos operativos hardcodeados               |                3 |
| URLs sociales genéricas hardcodeadas          |                3 |
| Referencias al wordmark fijo                  |                5 |
| Tarjetas rápidas hardcodeadas en Inicio       |                3 |
| Pilares de servicios hardcodeados             |                4 |
| Bloques fallback en `content.ts`              |                6 |
| Items fallback en `content.ts`                |                7 |
| Registros fallback marcados como publicados   |           **13** |
| Definiciones SEO estáticas principales        |                6 |
| Plantilla SEO dinámica de restaurante         |                1 |
| Idiomas mezclados detectados                  | Español e inglés |
| Política canónica de fallback público         |        No existe |

### 5.2 Riesgos principales

1. Contenido instructivo puede aparecer en producción.
2. Los 13 registros fallback tienen `is_published: true`.
3. Una falla o ausencia de datos puede producir páginas aparentemente válidas con contenido ficticio.
4. Existen CTA con `#`.
5. Existen enlaces hacia rutas que no cumplen la acción prometida.
6. Los correos operativos están distribuidos en múltiples archivos.
7. Las redes sociales apuntan a páginas genéricas de las plataformas.
8. El año del copyright está fijo.
9. Hay metadata duplicada y no administrable.
10. Se declara una búsqueda estructurada que no existe.
11. Existen textos públicos en inglés y textos sin tildes.
12. La marca y el wordmark están acoplados a rutas de archivos.
13. El contenido de servicios y restaurantes mezcla datos estructurados con copy libre.
14. No existe validación previa a publicación que bloquee placeholders.

### 5.3 Conclusión

El sistema actual tiene tres fuentes simultáneas de contenido:

```text
SUPABASE
   +
FALLBACKS EN content.ts
   +
COPY FIJO EN PÁGINAS Y COMPONENTES
```

Esto impide conocer con certeza cuál contenido es canónico y puede producir diferencias entre:

- VISO;
- producción;
- ambientes sin configuración;
- fallas de consulta;
- resultados indexados.

## 6. Inventario maestro por fuente

### 6.1 Configuración global y metadata raíz

#### 6.1.1 `WEB-HC-GLOBAL-001 — Metadata global`

**Archivo:** `src/app/layout.tsx`

Contenido fijo:

- `Vento Group`;
- `Ecosistema de restaurantes, talento, servicios y eventos de Vento Group.`;
- canonical `/`;
- `Pagina central del ecosistema Vento Group.`;
- `summary_large_image`;
- idioma `es`.

Clasificación:

- nombre de sitio;
- SEO global;
- metadata social;
- idioma.

Destino:

- `website_site_settings`;
- configuración SEO global;
- configuración de idioma.

Tareas responsables:

- `WEB-GLB-006`
- `WEB-GLB-007`
- `WEB-RND-013`
- `WEB-MIG-021`

#### 6.1.2 `WEB-HC-GLOBAL-002 — Tipografías globales`

**Archivo:** `src/app/layout.tsx`

Contenido fijo:

- `Cormorant Garamond`;
- `Manrope`;
- pesos tipográficos.

Clasificación:

- identidad visual;
- configuración técnica del tema.

Destino:

- tokens aprobados del tema;
- no permitir fuentes arbitrarias desde VISO;
- VISO podrá seleccionar únicamente opciones registradas.

Tareas responsables:

- `WEB-GLB-001`
- `WEB-ARC-005`

#### 6.1.3 `WEB-HC-GLOBAL-003 — Dominio fallback`

**Archivo:** `src/lib/seo.ts`

Contenido fijo:

```text
https://ventogroup.co
```

Clasificación:

- configuración técnica;
- fallback de entorno.

Decisión:

- puede permanecer como fallback seguro en código;
- el dominio canónico por ambiente debe continuar resolviéndose mediante variables;
- no debe editarse libremente desde el constructor visual.

Tareas responsables:

- `WEB-OPS-002`
- `WEB-GLB-007`

### 6.2 Header

#### 6.2.1 `WEB-HC-HEADER-001 — Navegación principal`

**Archivo:** `src/components/site-header.tsx`

Contenido fijo:

| Etiqueta     | Descripción                    | Destino         |
| ------------ | ------------------------------ | --------------- |
| Restaurantes | Espacios, conceptos y reservas | `/restaurantes` |
| Empleos      | Vacantes y oportunidades       | `/empleos`      |
| Servicios    | Capacidades y soluciones       | `/servicios`    |
| Ecosistema   | Pass, Anima y Vento OS         | `/ecosistema`   |

Destino:

- menú principal publicado;
- configuración de navegación desde VISO.

Tareas responsables:

- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-MIG-011`
- `WEB-MIG-021`

#### 6.2.2 `WEB-HC-HEADER-002 — Destacados del menú`

Contenido fijo:

| Título          | Subtítulo                      | Destino                     |
| --------------- | ------------------------------ | --------------------------- |
| Reserva tu mesa | Encuentra tu restaurante ideal | `/restaurantes`             |
| Empleos         | Haz parte de Vento Group       | `/empleos`                  |
| Contacto        | Alianzas y oportunidades       | `mailto:hola@ventogroup.co` |

Destino:

- configuración del header;
- CTA globales;
- futura página `/contacto`.

Tareas responsables:

- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-PAG-060`
- `WEB-MIG-021`

#### 6.2.3 `WEB-HC-HEADER-003 — Navegación exclusiva de Inicio`

Contenido fijo:

```text
Restaurantes
Servicios
Empleos
Nosotros
Contacto
```

Destinos fijos:

```text
/restaurantes
/servicios
/empleos
/ecosistema
mailto:hola@ventogroup.co
```

Brecha:

- `Nosotros` y `Ecosistema` representan la misma ruta con nombres distintos.

Tareas responsables:

- `WEB-PRD-015`
- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-MIG-021`

#### 6.2.4 `WEB-HC-HEADER-004 — Marca y microcopia`

Contenido fijo:

- `Vento Group`;
- `Gastronomia y Hospitalidad`;
- `Explora el portafolio completo`;
- `Menu`;
- `Cerrar`;
- `Entrar a Vento OS`;
- `Principal izquierda`;
- `Principal derecha`;
- `Principal`.

Clasificación:

- marca y claim: configuración global;
- menú/cerrar y etiquetas ARIA: microcopia técnica;
- CTA Vento OS: configuración de navegación.

Destino:

- marca y claim en configuración global;
- microcopia en código o catálogo de traducciones;
- CTA en configuración del header.

Tareas responsables:

- `WEB-GLB-003`
- `WEB-GLB-006`
- `WEB-MIG-021`

#### 6.2.5 `WEB-HC-HEADER-005 — Wordmark`

Ruta fija:

```text
/branding/vento-wordmark-white.svg
```

Destino:

- asset de logo global administrado;
- variante clara del logo.

Tareas responsables:

- `WEB-GLB-002`
- `WEB-MED-001`
- `WEB-MIG-014`
- `WEB-MIG-021`

### 6.3 Footer

#### 6.3.1 `WEB-HC-FOOTER-001 — Navegación`

Contenido fijo:

```text
Nosotros → /ecosistema
Empleos → /empleos
Contacto → mailto:hola@ventogroup.co
Restaurantes → /restaurantes
Servicios → /servicios
Empleos → /empleos
```

Fallback decorativo:

```text
Restaurantes
Servicios
Empleos
Ecosistema
```

Destino:

- navegación de footer;
- selección de restaurantes o marcas;
- página de contacto.

Tareas responsables:

- `WEB-GLB-005`
- `WEB-PAG-060`
- `WEB-MIG-012`
- `WEB-MIG-021`

#### 6.3.2 `WEB-HC-FOOTER-002 — Suscripción`

Contenido fijo:

- `Correo`;
- `Correo electronico`;
- `Suscribirse`.

Brecha crítica:

- la interfaz existe, pero no existe formulario, endpoint ni flujo de suscripción.

Destino:

- implementar mediante `WEB-FRM-011`; o
- retirar por completo la interfaz.

Tareas responsables:

- `WEB-FRM-011`
- `WEB-GLB-005`

#### 6.3.3 `WEB-HC-FOOTER-003 — Redes sociales`

URLs fijas:

```text
https://www.instagram.com/
https://www.linkedin.com/
https://www.youtube.com/
```

Brecha:

- apuntan a las páginas genéricas de cada plataforma;
- no representan perfiles oficiales de Vento Group.

Destino:

- configuración corporativa global.

Tareas responsables:

- `WEB-GLB-006`
- `WEB-MIG-015`
- `WEB-MIG-021`

#### 6.3.4 `WEB-HC-FOOTER-004 — Copyright`

Contenido fijo:

```text
© 2026 Vento Group. Todos los derechos reservados.
```

Brecha:

- el año quedará desactualizado.

Destino:

- año calculado;
- nombre legal desde configuración global.

Tareas responsables:

- `WEB-GLB-005`
- `WEB-GLB-006`
- `WEB-MIG-021`

#### 6.3.5 `WEB-HC-FOOTER-005 — Wordmark`

Ruta fija repetida dos veces:

```text
/branding/vento-wordmark-white.svg
```

Destino:

- configuración de logos globales.

Tareas responsables:

- `WEB-GLB-002`
- `WEB-MIG-014`
- `WEB-MIG-021`

### 6.4 Página de Inicio

#### 6.4.1 `WEB-HC-HOME-001 — SEO`

**Archivo:** `src/app/page.tsx`

Contenido fijo:

- `Vento Group | Gastronomia y Hospitalidad`;
- `Restaurantes, servicios, empleos y plataformas digitales conectadas en un solo ecosistema.`;
- canonical `/`;
- Open Graph duplicado.

Destino:

- SEO de página administrable;
- valores iniciales migrados como contenido real.

Tareas responsables:

- `WEB-GLB-008`
- `WEB-RND-013`
- `WEB-MIG-013`
- `WEB-MIG-021`

#### 6.4.2 `WEB-HC-HOME-002 — Tarjetas rápidas`

Contenido fijo:

| Tarjeta   | Copy                                                                     | CTA          | Destino                     |
| --------- | ------------------------------------------------------------------------ | ------------ | --------------------------- |
| Empleos   | Vacantes activas y rutas de crecimiento para equipos Vento.              | Ver vacantes | `/empleos`                  |
| Servicios | Consultoria, tecnologia y soporte operativo para el sector hospitalidad. | Conocer mas  | `/servicios`                |
| Contacto  | Alianzas, reservas y oportunidades estrategicas con el grupo.            | Escribir     | `mailto:hola@ventogroup.co` |

Destino:

- secciones o items configurables de la revisión de Inicio.

Tareas responsables:

- `WEB-PAG-001`
- `WEB-PAG-003`
- `WEB-MIG-004`
- `WEB-MIG-021`

#### 6.4.3 `WEB-HC-HOME-003 — Datos estructurados`

Contenido fijo:

- nombre `Vento Group`;
- descripción de Organization;
- nombre `Vento Group Destacados`;
- `SearchAction`;
- destino `/?q={search_term_string}`.

Brecha:

- la búsqueda declarada no está implementada.

Destino:

- builders de datos estructurados;
- configuración global;
- retirar `SearchAction` o implementar búsqueda.

Tareas responsables:

- `WEB-RND-014`
- `WEB-GLB-008`
- `WEB-QA-020`
- `WEB-SEC-016`

#### 6.4.4 `WEB-HC-HOME-004 — Introducción editorial`

Contenido fijo o fallback:

- `La experiencia Vento`;
- `Hospitalidad inolvidable construida desde restaurantes, talento y operacion.`;
- descripción editorial de Vento Group;
- `Nuestros restaurantes`;
- destino `/restaurantes`;
- `Imagen editorial`.

Destino:

- revisión versionada de Inicio;
- schema de sección editorial.

Tareas responsables:

- `WEB-PAG-001`
- `WEB-PAG-003`
- `WEB-MIG-004`
- `WEB-MIG-021`

#### 6.4.5 `WEB-HC-HOME-005 — Statement editorial`

Contenido fijo o fallback:

- `Con escala`;
- `Con oficio, dedicacion y gran talento, la hospitalidad se vuelve una experiencia completa.`;
- párrafo sobre diseño, consistencia y experiencias;
- `Ver restaurantes`;
- `/restaurantes`.

Destino:

- revisión versionada de Inicio.

Tareas responsables:

- `WEB-PAG-001`
- `WEB-PAG-003`
- `WEB-MIG-004`
- `WEB-MIG-021`

#### 6.4.6 `WEB-HC-HOME-006 — Cierre de Ecosistema`

Contenido fijo:

- `Ecosistema`;
- `Explora el ecosistema completo de Vento: restaurantes, talento y herramientas operativas.`;
- párrafo estratégico;
- `Acceder a Vento OS`;
- destino `/ecosistema`.

Brecha:

- el CTA promete acceso a Vento OS, pero conduce a una página genérica.

Destino:

- revisión de Inicio;
- configuración real de aplicaciones y destinos.

Tareas responsables:

- `WEB-PAG-001`
- `WEB-PAG-030`
- `WEB-PAG-033`
- `WEB-MIG-021`

### 6.5 Página de Restaurantes

#### 6.5.1 `WEB-HC-REST-001 — SEO`

**Archivo:** `src/app/restaurantes/page.tsx`

Contenido fijo:

- `Restaurantes | Vento Group`;
- `Portafolio de restaurantes del ecosistema Vento Group.`;
- canonical `/restaurantes`;
- descripción del `ItemList`.

Destino:

- SEO de página;
- builder de datos estructurados.

Tareas responsables:

- `WEB-GLB-008`
- `WEB-RND-013`
- `WEB-RND-014`
- `WEB-MIG-021`

#### 6.5.2 `WEB-HC-REST-002 — Hero`

Contenido fijo:

- `Vento Group`;
- `Restaurantes`;
- descripción de conceptos gastronómicos;
- `Ver portafolio`;
- ancla `#portafolio`;
- `Reservar un espacio`;
- `mailto:reservas@ventogroup.co`;
- label `Restaurantes lead media`.

Destino:

- blueprint y revisión de Restaurantes;
- contacto estructurado;
- CTA configurable.

Tareas responsables:

- `WEB-PAG-010`
- `WEB-PAG-011`
- `WEB-GLB-006`
- `WEB-MIG-005`
- `WEB-MIG-021`

#### 6.5.3 `WEB-HC-REST-003 — Experiencia editorial`

Contenido fijo o fallback:

- `La experiencia Vento`;
- `Nuestra gastronomia`;
- `Cada restaurante, una historia diferente`;
- descripción editorial;
- `Explorar el portafolio`;
- ancla `#portafolio`.

Destino:

- sección editorial versionada.

Tareas responsables:

- `WEB-PAG-010`
- `WEB-PAG-011`
- `WEB-MIG-005`
- `WEB-MIG-021`

#### 6.5.4 `WEB-HC-REST-004 — Banner y portafolio`

Contenido fijo o fallback:

- `Vento Group`;
- `Sabor, ambiente y momentos inolvidables`;
- `Nuestros restaurantes`;
- descripción del portafolio;
- prefijo multimedia `Restaurante`.

Destino:

- sección banner;
- sección de colección;
- microcopia definida por variante o revisión.

Tareas responsables:

- `WEB-PAG-010`
- `WEB-RND-003`
- `WEB-MIG-021`

#### 6.5.5 `WEB-HC-REST-005 — CTA de eventos`

Contenido fijo:

- `¿Tienes un evento especial?`;
- copy de celebraciones y activaciones;
- `Planear mi evento`;
- `mailto:eventos@ventogroup.co`.

Destino:

- CTA versionado;
- formulario de eventos;
- datos de contacto globales.

Tareas responsables:

- `WEB-PAG-040`
- `WEB-PAG-042`
- `WEB-GLB-006`
- `WEB-MIG-021`

### 6.6 Detalle de restaurante

#### 6.6.1 `WEB-HC-RDET-001 — SEO y fallback`

**Archivo:** `src/app/restaurantes/[slug]/page.tsx`

Contenido fijo:

- `Restaurante | Vento Group`;
- formato `${venue.title} | Vento Group`;
- `Detalle de restaurante en Vento Group.`;
- tipo Open Graph `article`;
- patrón canonical `/restaurantes/[slug]`.

Destino:

- plantilla SEO de restaurante;
- datos derivados del restaurante y su revisión.

Tareas responsables:

- `WEB-PAG-012`
- `WEB-RND-013`
- `WEB-RND-014`
- `WEB-MIG-021`

#### 6.6.2 `WEB-HC-RDET-002 — Hero y acciones`

Contenido fijo o fallback:

- `Vento Group Venue`;
- `Completa la historia de este restaurante desde VISO.`;
- `Reservar / Contactar`;
- fallback `/eventos`;
- `Planear evento`;
- destino `/eventos`.

Brechas:

- copy instructivo visible;
- mezcla inglés y español;
- ruta de eventos redirige;
- una reserva sin URL válida se convierte en un enlace a eventos.

Tareas responsables:

- `WEB-PAG-012`
- `WEB-PAG-040`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.6.3 `WEB-HC-RDET-003 — Galería`

Contenido fijo:

- `Gallery`;
- `Colección visual del espacio, ambiente y experiencias del restaurante.`;
- sufijo `galeria`.

Destino:

- sección de galería versionada;
- microcopia en español.

Tareas responsables:

- `WEB-PAG-012`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.6.4 `WEB-HC-RDET-004 — Storytelling instructivo`

Contenido fijo:

- `About This Venue`;
- párrafo instructivo: diseñar desde VISO incluyendo storytelling, cocina, público y razón de visita.

Brecha crítica:

- una instrucción editorial interna puede mostrarse al público.

Destino:

- eliminar de producción;
- convertir el contenido real en campos o sección editorial.

Tareas responsables:

- `WEB-PAG-012`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.6.5 `WEB-HC-RDET-005 — Datos y características`

Contenido fijo:

- `Venue Facts`;
- `Ubicación`;
- `Por definir`;
- `Horario`;
- `Reservas`;
- `Disponible`;
- `Notable Features`;
- `Bloque editable para features de experiencia.`;
- `Ideal para seating, standing y private dining.`;
- `Integra esta lista desde campo body en VISO con bullets.`

Brecha crítica:

- contenido técnico e instructivo expuesto;
- mezcla de idiomas;
- datos estructurados simulados mediante texto libre.

Destino:

- campos estructurados de restaurante;
- sección `venues.features`;
- no publicar si faltan datos.

Tareas responsables:

- `WEB-ARC-003`
- `WEB-PAG-012`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.6.6 `WEB-HC-RDET-006 — Restaurantes relacionados`

Contenido fijo:

- `More Venues`;
- `Otros espacios del portafolio para explorar y reservar.`;
- `Ver portafolio completo`;
- prefijo `Restaurante`.

Destino:

- sección dinámica de relacionados;
- microcopia en español y configurable por variante.

Tareas responsables:

- `WEB-PAG-012`
- `WEB-RND-009`
- `WEB-MIG-021`

### 6.7 Página de Empleos

#### 6.7.1 `WEB-HC-JOBS-001 — SEO y hero`

**Archivo:** `src/app/empleos/page.tsx`

Contenido fijo:

- `Empleos | Vento Group`;
- descripción de vacantes;
- canonical `/empleos`;
- `Empleos`;
- `Vacantes activas para talento operativo, administrativo y estrategico.`

Destino:

- SEO y revisión de página;
- blueprint de Empleos.

Tareas responsables:

- `WEB-PAG-020`
- `WEB-GLB-008`
- `WEB-MIG-007`
- `WEB-MIG-021`

### 6.8 Página de Servicios

#### 6.8.1 `WEB-HC-SERV-001 — SEO`

**Archivo:** `src/app/servicios/page.tsx`

Contenido fijo:

- `Servicios | Vento Group`;
- descripción de servicios;
- canonical `/servicios`;
- descripción del `ItemList`.

Destino:

- SEO de página;
- datos estructurados derivados.

Tareas responsables:

- `WEB-PAG-050`
- `WEB-GLB-008`
- `WEB-RND-014`
- `WEB-MIG-021`

#### 6.8.2 `WEB-HC-SERV-002 — Catálogo de pilares`

Arreglo fijo:

| Icono | Pilar       | Copy                                                      |
| ----- | ----------- | --------------------------------------------------------- |
| ⚙     | Operación   | Protocolos y herramientas para la gestión diaria.         |
| 📊     | Tecnología  | Software y dashboards para decisiones en tiempo real.     |
| 🎓     | Formación   | Programas de entrenamiento para equipos de sala y cocina. |
| 🤝     | Consultoría | Acompañamiento estratégico para nuevas aperturas.         |

Destino:

- sección estructurada de servicios;
- items editables y ordenables desde VISO.

Tareas responsables:

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-MIG-010`
- `WEB-MIG-021`

#### 6.8.3 `WEB-HC-SERV-003 — Hero e introducción`

Contenido fijo o fallback:

- `Vento Group`;
- `Servicios`;
- descripción de soluciones;
- `Ver servicios`;
- ancla `#servicios`;
- `Lo que ofrecemos`;
- `Un ecosistema de soporte para cada operación`;
- párrafo de tecnología, asesoría y escalamiento;
- `Pilares de servicio`.

Destino:

- revisión y blueprint de Servicios.

Tareas responsables:

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-MIG-010`
- `WEB-MIG-021`

#### 6.8.4 `WEB-HC-SERV-004 — Banner, colección y CTA`

Contenido fijo o fallback:

- `Calidad y excelencia en cada proceso`;
- `Nuestros servicios`;
- `Elige el servicio que mejor se adapte a tu operación.`;
- `¿Tienes un proyecto en mente?`;
- copy de contacto;
- `Escribirnos`;
- `mailto:hola@ventogroup.co`.

Destino:

- secciones versionadas;
- contacto global.

Tareas responsables:

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-PAG-052`
- `WEB-GLB-006`
- `WEB-MIG-021`

### 6.9 Página de Ecosistema

#### 6.9.1 `WEB-HC-ECO-001 — SEO y hero`

**Archivo:** `src/app/ecosistema/page.tsx`

Contenido fijo:

- `Ecosistema | Vento Group`;
- `Descarga Vento Pass, Anima y conecta con Vento OS desde la página central.`;
- canonical `/ecosistema`;
- `Ecosistema`.

Destino:

- definición funcional de Nosotros/Ecosistema;
- SEO y revisión de página.

Tareas responsables:

- `WEB-PRD-015`
- `WEB-PAG-030`
- `WEB-GLB-008`
- `WEB-MIG-008`
- `WEB-MIG-021`

### 6.10 Componentes reutilizables

#### 6.10.1 `WEB-HC-CMP-001 — CategoryPage`

**Archivo:** `src/components/category-page.tsx`

Contenido fijo:

- `Volver al inicio`;
- `Vento Group`;
- destino `/`;
- sufijo `lead media`.

Clasificación:

- microcopia de plantilla legacy.

Destino:

- retirar junto con `CategoryPage`;
- las nuevas páginas definirán CTA y hero propios.

Tareas responsables:

- `WEB-MIG-020`
- `WEB-MIG-021`

#### 6.10.2 `WEB-HC-CMP-002 — ItemCard`

**Archivo:** `src/components/item-card.tsx`

Contenido fijo:

- `Completa este bloque desde VISO.`;
- `Ver mas`;
- separador ` · `.

Brecha:

- el primer texto es una instrucción interna visible;
- `Ver mas` carece de tilde;
- el CTA genérico puede no representar la entidad.

Destino:

- estado vacío no público;
- CTA por variante o entidad.

Tareas responsables:

- `WEB-RND-006`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.10.3 `WEB-HC-CMP-003 — MediaSlot`

Contenido fijo o derivado:

- placeholder con el valor de `label`;
- reproducción automática de videos;
- `label` utilizado como alt.

Brecha:

- etiquetas internas como `lead media` pueden aparecer como placeholder;
- no existe diferenciación entre alt real y nombre técnico.

Destino:

- `MediaRenderer`;
- estado vacío interno;
- alt text estructurado.

Tareas responsables:

- `WEB-RND-017`
- `WEB-MED-005`
- `WEB-MIG-021`

#### 6.10.4 `WEB-HC-CMP-004 — HomeHeroIntro`

Contenido fijo:

- `Vento Group hero`;
- ruta del wordmark repetida dos veces;
- secuencia splash no administrable.

Destino:

- asset global;
- variante controlada del hero;
- microcopia ARIA en código o traducciones.

Tareas responsables:

- `WEB-GLB-002`
- `WEB-PAG-001`
- `WEB-MIG-021`

#### 6.10.5 `WEB-HC-CMP-005 — HomeVenuesShowcase`

Contenido fijo:

- `Restaurantes`;
- `Nuestros restaurantes`;
- `Seleccion de restaurantes`;
- `Venue`;
- `Portafolio de restaurantes y experiencias gastronómicas unicas.`;
- `Aspectos destacados`;
- `Ubicación`;
- `Bajo consulta`;
- `Disponibilidad`;
- `A solicitud`;
- `Explorar`;
- cuatro características fallback:
  - `Comedor privado`;
  - `Eventos corporativos`;
  - `Celebraciones`;
  - `Experiencias de Marca`.

Brecha crítica:

- características de negocio inventadas cuando el contenido no existe.

Destino:

- campos estructurados;
- fuentes dinámicas;
- política de no invención.

Tareas responsables:

- `WEB-ARC-003`
- `WEB-PAG-010`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.10.6 `WEB-HC-CMP-006 — HeroMediaCarousel`

Contenido fijo:

- `Slide`;
- `Hero slide · media pendiente`;
- `Prev`;
- `Next`;
- `Slide anterior`;
- `Slide siguiente`;
- `Indicadores de slides`;
- `Ir a slide N`.

Clasificación:

- microcopia de interacción;
- placeholder técnico.

Destino:

- microcopia en español;
- catálogo de traducciones;
- placeholder no visible en producción.

Tareas responsables:

- `WEB-RND-006`
- `WEB-QA-011`
- `WEB-QA-021`

#### 6.10.7 `WEB-HC-CMP-007 — ItemCarousel`

Contenido fijo:

- `Prev`;
- `Next`;
- `Anterior`;
- `Siguiente`;
- sufijo `carousel`.

Destino:

- microcopia en español;
- catálogo de traducciones.

Tareas responsables:

- `WEB-QA-011`
- `WEB-MIG-021`

#### 6.10.8 `WEB-HC-CMP-008 — HomeEditorialBand`

Contenido fijo:

- `Editorial media`;
- `Editorial section`.

Brecha:

- fallback en inglés;
- componente legacy sin uso confirmado.

Destino:

- retirar implementación actual.

Tareas responsables:

- `WEB-MIG-020`
- `WEB-MIG-021`

### 6.11 Fallbacks de `src/lib/content.ts`

#### 6.11.1 `WEB-HC-FB-001 — Bloques fallback`

Se identificaron seis bloques fallback:

1. Hero principal.
2. Hero slide 1.
3. Hero slide 2.
4. Editorial 1.
5. Editorial 2.
6. Espacios para eventos.

Incluyen textos como:

- `Ecosistema completo para restaurantes y trabajadores`;
- `Experiencias premium`;
- `Slot dinamico para imagen o video principal`;
- `Carga aqui media de impacto desde VISO.`;
- `Segundo slot dinamico`;
- `Un portfolio de venues para cada momento`;
- `Diseña esta sección como bloque editorial`;
- `Host your next event with Vento Group`;
- `Media destacada + resumen de venues`.

Todos están marcados:

```text
is_published: true
```

Brecha crítica:

- contenido de ejemplo e instrucciones puede convertirse en contenido público;
- se mezcla español e inglés;
- se utilizan términos `portfolio`, `venues`, `slot` y `media`.

Tareas responsables:

- `ADR-WEB-011`
- `WEB-RND-006`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-QA-021`

#### 6.11.2 `WEB-HC-FB-002 — Aplicaciones fallback`

Se identifican:

- Vento Pass;
- Anima;
- Vento OS.

Todos los CTA utilizan:

```text
action_url: "#"
```

Brecha:

- entidades aparentemente válidas con acciones muertas.

Tareas responsables:

- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`
- `WEB-MIG-015`
- `WEB-QA-021`

#### 6.11.3 `WEB-HC-FB-003 — Restaurante fallback`

Contenido fijo:

- slug `restaurante-destacado`;
- `Restaurante destacado`;
- instrucción para subir foto e información;
- `Ubicacion por definir`;
- `Horario por definir`;
- `Ver restaurante`;
- `action_url: "#"`.

Riesgo:

- puede crear una ruta indexable ficticia.

Tareas responsables:

- `ADR-WEB-011`
- `WEB-RND-006`
- `WEB-MIG-015`
- `WEB-QA-019`
- `WEB-QA-021`

#### 6.11.4 `WEB-HC-FB-004 — Vacante fallback`

Contenido fijo:

- slug `vacante-destacada`;
- `Vacante destacada`;
- `Publica aqui una vacante activa desde VISO.`;
- `Sede principal`;
- `Tiempo completo`;
- `Aplicar`;
- `action_url: "#"`.

Riesgo:

- presenta una vacante ficticia como publicada.

Tareas responsables:

- `ADR-WEB-011`
- `WEB-PAG-021`
- `WEB-MIG-015`
- `WEB-QA-021`

#### 6.11.5 `WEB-HC-FB-005 — Servicio fallback`

Contenido fijo:

- slug `servicio-destacado`;
- `Servicio destacado`;
- copy genérico;
- `Conocer servicio`;
- `action_url: "#"`.

Riesgo:

- presenta un servicio ficticio como publicado.

Tareas responsables:

- `ADR-WEB-011`
- `WEB-PAG-051`
- `WEB-MIG-015`
- `WEB-QA-021`

#### 6.11.6 `WEB-HC-FB-006 — Evento fallback`

Contenido fijo:

- slug `evento-destacado`;
- `Evento destacado`;
- copy genérico;
- `Por confirmar`;
- `Fecha por confirmar`;
- `Ver evento`;
- `action_url: "#"`.

Riesgo:

- presenta un evento ficticio;
- la ruta `/eventos` no tiene página real.

Tareas responsables:

- `ADR-WEB-011`
- `WEB-PAG-040`
- `WEB-MIG-015`
- `WEB-QA-021`

### 6.12 Resolución de enlaces por categoría

#### 6.12.1 `WEB-HC-LINK-001 — getItemHref`

**Archivo:** `src/lib/content.ts`

Mapa fijo:

```text
restaurant → /restaurantes/[slug]
job        → /empleos
service    → /servicios
event      → /eventos
app        → /ecosistema
default    → /
```

Brechas:

- empleos no tiene detalle;
- servicios no tiene detalle;
- eventos redirige;
- apps no tienen destino individual;
- el mapa depende de decisiones aún no aprobadas.

Destino:

- resolver desde taxonomía canónica;
- permitir rutas por tipo y entidad;
- no usar `#` como señal de ausencia.

Tareas responsables:

- `WEB-PRD-015`
- `WEB-ARC-003`
- `WEB-RND-009`
- `WEB-MIG-021`

## 7. Inventario de contactos, enlaces y activos

### 7.1 Correos hardcodeados

| Correo                   | Uso actual                                           | Fuente objetivo                       |
| ------------------------ | ---------------------------------------------------- | ------------------------------------- |
| `hola@ventogroup.co`     | Contacto general, header, footer, Inicio y Servicios | Configuración corporativa             |
| `reservas@ventogroup.co` | CTA de Restaurantes                                  | Configuración de reservas o sede      |
| `eventos@ventogroup.co`  | CTA de eventos                                       | Formulario y configuración de eventos |

### 7.2 Redes hardcodeadas

| Plataforma | URL actual                   | Estado   |
| ---------- | ---------------------------- | -------- |
| Instagram  | `https://www.instagram.com/` | Genérica |
| LinkedIn   | `https://www.linkedin.com/`  | Genérica |
| YouTube    | `https://www.youtube.com/`   | Genérica |

### 7.3 Activos hardcodeados

| Activo          | Ruta                                 | Referencias |
| --------------- | ------------------------------------ | ----------: |
| Wordmark blanco | `/branding/vento-wordmark-white.svg` |           5 |

### 7.4 Enlaces muertos o engañosos

| Valor                                          | Problema                       |
| ---------------------------------------------- | ------------------------------ |
| `#`                                            | Se utiliza en 7 items fallback |
| `/eventos`                                     | Redirige a `/restaurantes`     |
| `/ecosistema` para “Entrar/Acceder a Vento OS” | No abre Vento OS               |
| Redes genéricas                                | No llevan a Vento Group        |
| Suscribirse                                    | No ejecuta ninguna acción      |
| `SearchAction`                                 | Declara búsqueda inexistente   |

## 8. Contenido que debe permanecer controlado por código

No se recomienda convertir en campos libres de VISO:

- `Menu`;
- `Cerrar`;
- `Anterior`;
- `Siguiente`;
- etiquetas ARIA;
- nombres de roles semánticos;
- `@context`;
- `@type`;
- separadores;
- mensajes de error técnicos;
- nombres internos de variantes;
- textos de controles esenciales.

Estos textos deben:

1. estar en español correcto;
2. centralizarse en código o catálogo de traducciones;
3. tener pruebas de accesibilidad;
4. no mezclarse con copy editorial;
5. no depender de filas de contenido público.

## 9. Contenido que debe salir del código

Debe migrarse obligatoriamente:

- metadata global editable;
- metadata por página;
- navegación;
- destacados del menú;
- claim corporativo;
- correos;
- redes;
- logos;
- copyright corporativo;
- quick cards de Inicio;
- introducciones editoriales;
- statement de Inicio;
- cierre de Ecosistema;
- hero de Restaurantes;
- experiencia de Restaurantes;
- CTA de eventos;
- pilares de Servicios;
- copy de Servicios;
- SEO de Empleos y Ecosistema;
- CTA y textos de detalles de restaurantes;
- contenido de relacionados;
- destinos de aplicaciones;
- cualquier dato de negocio mostrado como fallback.

## 10. Política objetivo de fallback

### 10.1 Principio

El sitio público no debe inventar contenido empresarial cuando no existe una fuente publicada válida.

### 10.2 Comportamiento objetivo

```text
Contenido publicado válido
└── Renderizar contenido.

Contenido opcional ausente
└── Omitir la sección.

Contenido obligatorio ausente
└── Bloquear publicación o mostrar error controlado.

Falla temporal de datos
└── Usar caché de última publicación válida.

Sin publicación válida
└── Responder 404, estado no disponible o página segura.

Nunca
└── Publicar placeholders, instrucciones, entidades ficticias o CTA "#".
```

### 10.3 Fallbacks permitidos

Solo se permiten fallbacks técnicos y no editoriales:

- imagen neutra aprobada cuando el diseño lo requiera;
- mensaje de error;
- estado vacío;
- navegación de recuperación;
- contenido mínimo legalmente requerido;
- última versión publicada válida.

## 11. Registro canónico de brechas

| Brecha        | Descripción                                                    | Severidad | Tareas responsables                         |
| ------------- | -------------------------------------------------------------- | --------- | ------------------------------------------- |
| `WEB-GAP-031` | No existe política canónica de fallback público                | Crítica   | `ADR-WEB-011`                               |
| `WEB-GAP-032` | 13 registros fallback están marcados como publicados           | Crítica   | `ADR-WEB-011`, `WEB-MIG-015`, `WEB-QA-021`  |
| `WEB-GAP-033` | Existen instrucciones internas visibles como copy público      | Crítica   | `WEB-MIG-015`, `WEB-MIG-021`, `WEB-QA-021`  |
| `WEB-GAP-034` | Existen CTA `#` en entidades publicadas                        | Crítica   | `WEB-RND-006`, `WEB-QA-018`, `WEB-QA-021`   |
| `WEB-GAP-035` | Correos operativos están distribuidos en código                | Alta      | `WEB-GLB-006`, `WEB-MIG-021`                |
| `WEB-GAP-036` | Redes sociales apuntan a URLs genéricas                        | Alta      | `WEB-GLB-006`, `WEB-MIG-015`                |
| `WEB-GAP-037` | SEO global y por página está duplicado y hardcodeado           | Alta      | `WEB-GLB-007`, `WEB-GLB-008`, `WEB-RND-013` |
| `WEB-GAP-038` | SearchAction declara una función inexistente                   | Alta      | `WEB-GLB-008`, `WEB-QA-020`                 |
| `WEB-GAP-039` | Contenido visible mezcla español e inglés                      | Alta      | `WEB-MIG-021`, `WEB-QA-021`                 |
| `WEB-GAP-040` | Existen textos públicos sin ortografía normalizada             | Media     | `WEB-MIG-021`, `WEB-QA-021`                 |
| `WEB-GAP-041` | Wordmark y marca están acoplados a rutas de archivos           | Alta      | `WEB-GLB-002`, `WEB-MIG-014`                |
| `WEB-GAP-042` | Copyright contiene año fijo                                    | Media     | `WEB-GLB-005`                               |
| `WEB-GAP-043` | Los pilares de Servicios están fuera del CMS                   | Alta      | `WEB-PAG-050`, `WEB-MIG-021`                |
| `WEB-GAP-044` | Características de restaurantes se inventan desde fallbacks    | Crítica   | `WEB-ARC-003`, `WEB-MIG-015`, `WEB-QA-021`  |
| `WEB-GAP-045` | Enlaces de entidades dependen de un mapa de rutas provisional  | Alta      | `WEB-PRD-015`, `WEB-ARC-003`                |
| `WEB-GAP-046` | No existe ownership canónico por clase de contenido            | Alta      | `WEB-ARC-006`                               |
| `WEB-GAP-047` | No existe control automático de placeholders previo a publicar | Crítica   | `WEB-QA-021`, `WEB-PUB-005`                 |
| `WEB-GAP-048` | Contenido global, editorial y microcopia están mezclados       | Alta      | `WEB-ARC-006`, `WEB-MIG-021`                |

## 12. Cambios obligatorios al plan maestro

### 12.1 Marcar tareas previas

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
```

### 12.2 Agregar `ADR-WEB-011`

Ubicación recomendada: después de `ADR-WEB-010`.

```text
[ ] ADR-WEB-011 — Aprobar política canónica de fallback y degradación pública
```

Alcance:

- prohibición de placeholders públicos;
- comportamiento sin datos;
- uso de última publicación válida;
- tratamiento de fallas temporales;
- 404 y estados no disponibles;
- fallbacks multimedia;
- prohibición de entidades ficticias;
- prohibición de enlaces `#`;
- separación entre fallback técnico y contenido editorial.

### 12.3 Agregar `WEB-ARC-006`

Ubicación recomendada: después de `WEB-ARC-005`.

```text
[ ] WEB-ARC-006 — Definir ownership y fuente canónica de cada clase de contenido
```

Alcance:

- contenido global;
- editorial;
- estructurado;
- entidades;
- navegación;
- SEO;
- microcopia;
- traducciones;
- fallbacks;
- activos;
- responsables de edición.

### 12.4 Agregar `WEB-MIG-021`

Ubicación recomendada: después de `WEB-MIG-020`.

```text
[ ] WEB-MIG-021 — Migrar contenido hardcodeado a fuentes canónicas
```

Alcance:

- textos editoriales;
- CTA;
- navegación;
- contactos;
- redes;
- logos;
- metadata;
- pilares;
- destinos;
- copyright;
- eliminación de duplicados;
- preservación de microcopia técnica en código.

### 12.5 Agregar `WEB-QA-021`

Ubicación recomendada: después de `WEB-QA-020`.

```text
[ ] WEB-QA-021 — Bloquear placeholders y contenido provisional en publicación
```

Validaciones:

- CTA `#`;
- `Por definir`;
- `Por confirmar`;
- `Completa desde VISO`;
- `Publica aqui`;
- `Slot dinamico`;
- `media pendiente`;
- copy instructivo;
- idiomas no aprobados;
- URLs sociales genéricas;
- emails no configurados;
- páginas con campos obligatorios vacíos;
- entidades fallback;
- enlaces hacia rutas redirigidas incorrectamente.

## 13. Criterios de aprobación

`WEB-AUD-003` podrá marcarse como completada cuando se apruebe:

- [ ] la clasificación de contenido hardcodeado;
- [ ] el inventario global, por página y por componente;
- [ ] el inventario de 6 bloques fallback;
- [ ] el inventario de 7 items fallback;
- [ ] la clasificación de los 13 fallbacks publicados como brecha crítica;
- [ ] el inventario de correos, redes y activos;
- [ ] la separación entre contenido editable y microcopia técnica;
- [ ] la política objetivo de fallback;
- [ ] el registro `WEB-GAP-031` a `WEB-GAP-048`;
- [ ] la incorporación de `ADR-WEB-011`;
- [ ] la incorporación de `WEB-ARC-006`;
- [ ] la incorporación de `WEB-MIG-021`;
- [ ] la incorporación de `WEB-QA-021`.

## 14. Estado de cierre propuesto

Estado del bloque:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[ ] WEB-AUD-003 — Inventariar contenido hardcodeado
```

Estado de esta tarea:

```text
WEB-AUD-003 — APROBADA
```

### 14.1 No ejecutar todavía

- mover contenido;
- eliminar fallbacks;
- cambiar metadata;
- modificar correos;
- reemplazar redes;
- editar navegación;
- cambiar logos;
- aplicar migraciones;
- modificar Supabase;
- cambiar producción.

### 14.2 Continuidad después de aprobación

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[ ] WEB-AUD-004 — Inventariar contenido administrable
```

## 15. Evidencia técnica consultada

### 15.1 Configuración y contenido

- `src/app/layout.tsx`
- `src/lib/seo.ts`
- `src/lib/content.ts`

### 15.2 Páginas públicas

- `src/app/page.tsx`
- `src/app/restaurantes/page.tsx`
- `src/app/restaurantes/[slug]/page.tsx`
- `src/app/empleos/page.tsx`
- `src/app/servicios/page.tsx`
- `src/app/ecosistema/page.tsx`
- `src/app/eventos/page.tsx`

### 15.3 Componentes

- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/components/category-page.tsx`
- `src/components/item-card.tsx`
- `src/components/media-slot.tsx`
- `src/components/home-hero-intro.tsx`
- `src/components/home-venues-showcase.tsx`
- `src/components/hero-media-carousel.tsx`
- `src/components/item-carousel.tsx`
- `src/components/editorial-band.tsx`
- `src/components/cta-banner.tsx`
- `src/components/image-banner.tsx`

### 15.4 Búsquedas complementarias

- `mailto:`;
- `placeholder`;
- `action_url: "#"`;
- `/branding/`;
- URLs `https://`;
- metadata;
- textos fallback;
- rutas y CTA.

## 16. Registro de cambios

| Versión        | Fecha      | Cambio                                                            | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-003` con jerarquía Markdown validada | Propuesta vigente |


# WEB-AUD-004 — Inventario canónico de contenido administrable

> Auditoría de las capacidades reales de administración de contenido de `ventogroup.co` mediante `website_blocks`, `website_items`, galerías, medios y los editores actuales de VISO.

## 0. Control documental

| Campo                  | Valor                                       |
| ---------------------- | ------------------------------------------- |
| Identificador          | `WEB-AUD-004`                               |
| Nombre                 | Inventariar contenido administrable         |
| Fase                   | FASE 1 — Auditoría y línea base             |
| Estado                 | APROBADA                                    |
| Fecha                  | `2026-07-23`                                |
| Base auditada          | Proyecto activo `vento-os-dev`              |
| Repositorios auditados | `vento-shell`, `vento-viso`, `Vento-Group`  |
| Dependencias aprobadas | `WEB-AUD-001`, `WEB-AUD-002`, `WEB-AUD-003` |
| Cambios en código      | Ninguno                                     |
| Cambios en Supabase    | Ninguno                                     |
| Cambios en producción  | Ninguno                                     |
| Próxima tarea          | `WEB-AUD-005 — Auditar VISO Website CMS`    |

## 1. Objetivo de la tarea

Identificar exactamente qué contenido puede administrarse hoy desde VISO, cómo se almacena, cómo lo consume la web pública y qué limitaciones impiden considerarlo un CMS completo.

El alcance obligatorio incluye:

- `website_blocks`;
- `website_items`;
- galerías;
- medios;
- restaurantes;
- vacantes;
- eventos;
- servicios;
- aplicaciones del ecosistema;
- publicación y ocultamiento;
- relación con fuentes operativas;
- estado real de los datos existentes.

## 2. Fuentes auditadas

### 2.1 Base de datos activa

Se consultaron directamente:

- `public.website_blocks`;
- `public.website_items`;
- `storage.buckets`;
- `storage.objects`;
- políticas RLS de las tablas CMS;
- políticas de `storage.objects`.

### 2.2 Repositorio canónico de migraciones

Se revisaron:

- `supabase/migrations/20260327110000_website_cms.sql`;
- `supabase/migrations/20260327120000_website_media_storage.sql`;
- `supabase/migrations/20260519193000_harden_website_media_storage.sql`.

### 2.3 Aplicación administradora

Se revisaron:

- `/website-cms`;
- creación y edición de bloques;
- creación y edición de items;
- administración de restaurantes;
- edición del detalle de restaurante;
- subida de medios;
- importación desde Negocios.

### 2.4 Web pública

Se revisaron:

- `src/lib/content.ts`;
- `src/lib/supabase.ts`;
- consumo de bloques;
- consumo de items;
- consumo de galerías;
- resolución de contenido publicado;
- comportamiento de fallback.

## 3. Definiciones canónicas de esta auditoría

### 3.1 Administrable

Un contenido se considera administrable cuando:

1. existe una interfaz en VISO para crearlo o modificarlo;
2. la modificación se persiste en Supabase;
3. la web pública consulta ese dato;
4. el cambio puede afectar el contenido visible sin modificar código.

### 3.2 Parcialmente administrable

Un contenido es parcialmente administrable cuando:

- puede modificarse el dato, pero no la estructura;
- existe un número fijo de slots;
- la web ignora algunos campos;
- la interfaz expone claves técnicas;
- la edición afecta directamente contenido publicado;
- no existe validación suficiente;
- el contenido depende de una composición escrita en React.

### 3.3 No administrable

Un contenido no es administrable cuando:

- permanece hardcodeado;
- no tiene editor;
- no se persiste;
- se guarda, pero la web pública no lo consume;
- solo puede cambiarse mediante código o migración.

## 4. Resultado ejecutivo

### 4.1 Estado actual de datos

| Fuente           |  Total | Publicados | Ocultos |
| ---------------- | -----: | ---------: | ------: |
| `website_blocks` |      7 |          7 |       0 |
| `website_items`  |      9 |          9 |       0 |
| **Total CMS**    | **16** |     **16** |   **0** |

### 4.2 Estado por dominio

| Dominio           | Capacidad actual                         | Datos reales                     | Estado                      |
| ----------------- | ---------------------------------------- | -------------------------------- | --------------------------- |
| Bloques de página | Crear, editar, ordenar, ocultar y borrar | 7 registros                      | 🟡 Parcial                   |
| Items genéricos   | Crear, editar, ordenar, ocultar y borrar | 9 registros                      | 🟡 Parcial                   |
| Galerías          | 3 slots fijos por restaurante            | 3 slots vacíos de un placeholder | 🔴 Insuficiente              |
| Medios            | URL manual o subida individual           | 0 objetos en `website-media`     | 🔴 No operativo públicamente |
| Restaurantes      | Importar, crear y editar                 | 3 restaurantes reales            | 🟡 Parcial                   |
| Vacantes          | Crear y editar item genérico             | 1 placeholder                    | 🔴 Sin contenido real        |
| Eventos           | Crear y editar item genérico             | 1 placeholder                    | 🔴 Ruta pública inexistente  |
| Servicios         | Crear y editar item genérico             | 1 placeholder                    | 🔴 Sin contenido real        |
| Apps              | Crear y editar item genérico             | 3 seeds                          | 🟡 Sin destinos válidos      |
| Borradores        | `is_published = false`                   | 0 ocultos                        | 🟡 Simulación básica         |
| Versiones         | No existe                                | No aplica                        | 🔴 Inexistente               |
| Preview privado   | No existe                                | No aplica                        | 🔴 Inexistente               |

### 4.3 Conclusión principal

El sistema actual es un **editor CRUD de dos tablas**, no un constructor de páginas.

```text
VISO
├── edita filas de website_blocks
└── edita filas de website_items

WEB PÚBLICA
├── consulta filas publicadas
└── las inserta dentro de estructuras React fijas
```

La capacidad actual permite actualizar información puntual, pero no administrar:

- páginas completas;
- estructura;
- secciones arbitrarias;
- variantes visuales;
- responsive;
- SEO;
- navegación;
- tema;
- versiones;
- publicación controlada;
- biblioteca multimedia.

## 5. Arquitectura administrativa actual

### 5.1 Flujo de bloques

```text
VISO /website-cms/blocks
        ↓
public.website_blocks
        ↓
src/lib/content.ts
        ↓
página React específica
        ↓
sección fija del sitio
```

### 5.2 Flujo de items

```text
VISO /website-cms/items
        ↓
public.website_items
        ↓
src/lib/content.ts
        ↓
ItemCard / CategoryPage / páginas específicas
```

### 5.3 Flujo de restaurantes

```text
pass.pass_satellites + public.sites
        ↓ importación manual y unidireccional
public.website_items(category = restaurant)
        ↓
VISO detalle de restaurante
        ↓
public.website_blocks para hero y galería
        ↓
/restaurantes y /restaurantes/[slug]
```

### 5.4 Flujo de medios

```text
Selector de archivo en VISO
        ↓
/api/viso/upload-website-media
        ↓
storage bucket website-media
        ↓
URL guardada en website_blocks o website_items
        ↓
web pública intenta cargar la URL
```

## 6. `website_blocks`

### 6.1 Esquema actual

| Campo          | Función                          |
| -------------- | -------------------------------- |
| `id`           | Identificador UUID               |
| `page_slug`    | Agrupación de bloques por página |
| `block_key`    | Clave única dentro de la página  |
| `block_type`   | Tipo técnico del bloque          |
| `title`        | Título                           |
| `subtitle`     | Subtítulo                        |
| `body`         | Texto largo                      |
| `cta_label`    | Texto de CTA                     |
| `cta_url`      | Destino de CTA                   |
| `media_url`    | URL de imagen o video            |
| `media_type`   | `image` o `video`                |
| `sort_order`   | Orden numérico                   |
| `is_published` | Publicado u oculto               |
| `created_at`   | Fecha de creación                |
| `updated_at`   | Fecha de actualización           |

### 6.2 Restricciones actuales

- `page_slug` es obligatorio;
- `block_key` es obligatorio;
- existe unicidad por `(page_slug, block_key)`;
- `block_type` es texto libre;
- `media_type` solo permite `image`, `video` o `null`;
- `is_published` inicia en `true`;
- no existe relación con una tabla de páginas;
- no existe relación con una tabla de medios;
- no existe relación con una revisión;
- no existe autor;
- no existe publicador;
- no existe schema por tipo de bloque.

### 6.3 Capacidades actuales en VISO

VISO permite:

- listar bloques;
- filtrar por `page_slug`;
- crear bloques;
- editar bloques;
- borrar bloques;
- modificar título, subtítulo y body;
- modificar CTA;
- asignar URL de medio;
- subir un medio;
- elegir tipo multimedia;
- modificar orden;
- publicar u ocultar.

### 6.4 Limitaciones de la interfaz

La creación de bloques exige escribir manualmente:

- `page_slug`;
- `block_key`;
- `block_type`.

Solo ofrece tres tipos en el selector general:

```text
content
hero_slide
editorial_band
```

Sin embargo, la base y otras pantallas utilizan también:

```text
hero
media
detail_hero
gallery_media
event_spaces
```

Por tanto:

- el catálogo de tipos no es único;
- el usuario puede introducir combinaciones inválidas;
- no existe validación del bloque contra un componente real;
- crear una fila no garantiza que la web la renderice;
- el orden solo funciona donde la página React lo utiliza.

### 6.5 Consumo público

La web pública:

- consulta por `page_slug`;
- filtra `is_published = true`;
- ordena por `sort_order`;
- busca claves concretas desde el código;
- ignora bloques desconocidos;
- utiliza fallbacks para Home si no hay filas o la consulta falla.

### 6.6 Estado real de `website_blocks`

#### 6.6.1 Conteo

| `page_slug`                        | Tipo            | Total | Publicados | Con medio |
| ---------------------------------- | --------------- | ----: | ---------: | --------: |
| `home`                             | `hero`          |     1 |          1 |         0 |
| `home`                             | `media`         |     2 |          2 |         0 |
| `restaurant:restaurante-destacado` | `detail_hero`   |     1 |          1 |         0 |
| `restaurant:restaurante-destacado` | `gallery_media` |     3 |          3 |         0 |

#### 6.6.2 Bloques de Home

| `block_key`    | Título        | Estado    | Medio |
| -------------- | ------------- | --------- | ----- |
| `hero_main`    | Vento Group   | Publicado | No    |
| `home_media_1` | Hero visual 1 | Publicado | No    |
| `home_media_2` | Hero visual 2 | Publicado | No    |

Observación:

- las claves `home_media_1` y `home_media_2` son legacy;
- la interfaz actual recomienda `hero_slide_1`, `hero_slide_2`, etc.;
- no existen bloques reales para las secciones editoriales actuales de Home;
- la mayor parte de la Home continúa dependiendo de hardcodeo y fallbacks.

#### 6.6.3 Bloques de detalle placeholder

| `block_key`   | Tipo            | Estado    | Medio |
| ------------- | --------------- | --------- | ----- |
| `detail_hero` | `detail_hero`   | Publicado | No    |
| `gallery_1`   | `gallery_media` | Publicado | No    |
| `gallery_2`   | `gallery_media` | Publicado | No    |
| `gallery_3`   | `gallery_media` | Publicado | No    |

Todos pertenecen a:

```text
restaurant:restaurante-destacado
```

No corresponden a Vento Café, Saudo o Molka.

### 6.7 Diagnóstico

`website_blocks` es útil como almacenamiento legacy, pero no puede representar el futuro constructor porque:

- impide repetir una misma clave;
- no representa un árbol de secciones;
- no maneja variantes;
- no maneja configuración responsive;
- no maneja contenido anidado;
- no maneja versiones;
- no valida propiedades por tipo;
- no conecta medios por ID;
- no conoce páginas reales;
- no garantiza renderizado.

### 6.8 Tareas responsables

- `ADR-WEB-001`
- `ADR-WEB-002`
- `WEB-ARC-001`
- `WEB-ARC-002`
- `WEB-DB-002`
- `WEB-DB-003`
- `WEB-RND-003`
- `WEB-RND-008`
- `WEB-MIG-002`
- `WEB-MIG-022`

## 7. `website_items`

### 7.1 Esquema actual

| Campo           | Función                                         |
| --------------- | ----------------------------------------------- |
| `id`            | Identificador UUID                              |
| `category`      | `restaurant`, `job`, `service`, `event` o `app` |
| `slug`          | Clave única por categoría                       |
| `title`         | Nombre                                          |
| `excerpt`       | Descripción corta                               |
| `body`          | Descripción extendida                           |
| `location`      | Ubicación, sede o modalidad                     |
| `schedule_text` | Horario, contrato o fecha textual               |
| `start_at`      | Fecha de inicio                                 |
| `end_at`        | Fecha de fin                                    |
| `image_url`     | Imagen principal                                |
| `video_url`     | Video principal                                 |
| `action_label`  | Texto del botón                                 |
| `action_url`    | Destino                                         |
| `sort_order`    | Orden                                           |
| `is_published`  | Publicado u oculto                              |
| `created_at`    | Fecha de creación                               |
| `updated_at`    | Fecha de actualización                          |

### 7.2 Capacidades actuales en VISO

VISO permite:

- crear cualquiera de las cinco categorías;
- generar slug automáticamente al crear;
- evitar colisiones de slug mediante sufijos;
- calcular orden inicial;
- editar categoría;
- editar slug;
- editar título;
- editar descripción corta y larga;
- editar ubicación;
- editar horario o contrato;
- editar fechas para eventos;
- editar imagen y video;
- editar CTA;
- editar orden;
- publicar u ocultar;
- borrar el registro.

### 7.3 Publicación actual

Al crear un item:

- `Publicar de inmediato` aparece marcado por defecto;
- guardar un item publicado modifica directamente la fila que consume producción;
- no se crea una revisión;
- no existe aprobación;
- no existe preview privado;
- no existe rollback.

`is_published = false` funciona únicamente como ocultamiento de la fila. No constituye un sistema real de borradores.

### 7.4 Modelo genérico

Las cinco categorías comparten exactamente los mismos campos.

Esto produce reutilizaciones ambiguas:

| Campo           | Restaurante                | Vacante               | Evento                 | Servicio    | App             |
| --------------- | -------------------------- | --------------------- | ---------------------- | ----------- | --------------- |
| `location`      | Dirección                  | Sede/modalidad        | Lugar                  | No definido | No definido     |
| `schedule_text` | Horario                    | Tipo de contrato      | Fecha textual          | No definido | No definido     |
| `body`          | Historia y características | Descripción del cargo | Descripción del evento | Alcance     | Descripción     |
| `action_url`    | Reserva o detalle          | Aplicación            | Reserva                | Contacto    | Acceso/descarga |

El modelo permite avanzar rápido, pero no garantiza:

- campos obligatorios por categoría;
- datos estructurados;
- relaciones con entidades operativas;
- consistencia semántica;
- validación de negocio;
- detalles especializados.

### 7.5 Estado real de `website_items`

| Categoría   | Total | Publicados | Con imagen | Con body | Con ubicación | Con horario | Acción válida | Acción `#` |
| ----------- | ----: | ---------: | ---------: | -------: | ------------: | ----------: | ------------: | ---------: |
| App         |     3 |          3 |          0 |        0 |             0 |           0 |             0 |          3 |
| Evento      |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |
| Vacante     |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |
| Restaurante |     3 |          3 |          2 |        0 |             3 |           0 |             0 |          0 |
| Servicio    |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |

### 7.6 Diagnóstico

De los 9 items actuales:

- 3 son restaurantes reales;
- 3 representan aplicaciones reales, pero sin imagen ni destino válido;
- 1 es una vacante placeholder;
- 1 es un evento placeholder;
- 1 es un servicio placeholder;
- ningún item está oculto;
- ningún item tiene `body`;
- ningún item tiene video;
- ningún item tiene una acción externa válida;
- 6 items utilizan `action_url = '#'`.

### 7.7 Tareas responsables

- `ADR-WEB-001`
- `WEB-ARC-003`
- `WEB-DB-011`
- `WEB-RND-009`
- `WEB-MIG-001`
- `WEB-MIG-015`
- `WEB-MIG-022`

## 8. Galerías

### 8.1 Modelo actual

No existe una tabla de galerías.

Cada galería de restaurante se representa mediante bloques:

```text
gallery_1
gallery_2
gallery_3
```

con:

```text
block_type = gallery_media
```

### 8.2 Capacidad actual

VISO permite por restaurante:

- hasta 3 medios adicionales;
- imagen o video;
- título opcional;
- mostrar u ocultar cada slot;
- marcar el primer slot como destacado por posición.

### 8.3 Límites estructurales

- máximo fijo de 3 slots;
- no existe agregar o eliminar dinámicamente;
- no existe drag-and-drop;
- no existe reordenamiento independiente;
- no existe alt text;
- no existe focal point;
- no existe crop;
- no existe poster de video;
- no existe leyenda rica;
- no existe relación con una biblioteca de medios;
- guardar el formulario hace upsert de los 3 slots;
- un slot vacío puede quedar publicado;
- cada restaurante puede usar tres convenciones legacy de `page_slug`.

### 8.4 Estado real

Solo existen tres bloques de galería y pertenecen a:

```text
restaurant:restaurante-destacado
```

Estado:

| Slot        | Publicado | Medio |
| ----------- | --------- | ----- |
| `gallery_1` | Sí        | Vacío |
| `gallery_2` | Sí        | Vacío |
| `gallery_3` | Sí        | Vacío |

No existen galerías administradas para:

- Vento Café;
- Saudo;
- Molka.

### 8.5 Diagnóstico

La galería actual es una implementación rígida de formulario, no una colección administrable.

### 8.6 Tareas responsables

- `ADR-WEB-008`
- `WEB-ARC-002`
- `WEB-DB-006`
- `WEB-DB-007`
- `WEB-MED-002`
- `WEB-MED-006`
- `WEB-MED-007`
- `WEB-BLD-003`
- `WEB-BLD-011`
- `WEB-MIG-014`
- `WEB-MIG-022`

## 9. Medios

### 9.1 Capacidad de carga actual

El componente `WebsiteMediaUploadField` permite:

- escribir una URL manual;
- seleccionar un archivo;
- enviar un archivo a `/api/viso/upload-website-media`;
- guardar la URL resultante en un input;
- aceptar imágenes o videos según la pantalla.

### 9.2 Endpoint actual

El endpoint:

- exige usuario autenticado;
- restringe carga a `propietario` y `gerente_general`;
- acepta imágenes y videos;
- permite hasta 40 MB;
- sanitiza el scope;
- crea una ruta con timestamp;
- sube al bucket `website-media`;
- usa `upsert: true`;
- devuelve `getPublicUrl()`.

### 9.3 Tipos permitidos

Imágenes:

- JPEG;
- PNG;
- WebP;
- GIF;
- SVG.

Videos:

- MP4;
- WebM;
- QuickTime/MOV.

### 9.4 Estado real del storage

#### Bucket `website-media`

| Campo         | Valor                      |
| ------------- | -------------------------- |
| Existe        | Sí                         |
| Público       | **No**                     |
| Límite        | 40 MB                      |
| Objetos       | **0**                      |
| Lectura       | Solo usuarios autenticados |
| Inserción     | Owner o global manager     |
| Actualización | Owner o global manager     |
| Eliminación   | Owner o global manager     |

#### Bucket `pass-satellite-logos`

| Campo          | Valor                            |
| -------------- | -------------------------------- |
| Existe         | Sí                               |
| Público        | Sí                               |
| Límite         | 5 MB                             |
| Objetos        | 11                               |
| Uso web actual | Logos importados de restaurantes |

### 9.5 Contradicción crítica de entrega

El cargador devuelve:

```text
getPublicUrl(path)
```

pero el bucket `website-media` está configurado como privado.

La web pública:

- almacena una URL directa;
- no genera signed URLs;
- no autentica al visitante;
- espera que el recurso sea públicamente accesible.

Por tanto, un archivo nuevo subido al bucket puede:

1. guardarse correctamente;
2. producir una URL;
3. quedar asociado al bloque o item;
4. no ser visible para visitantes anónimos.

Actualmente la contradicción no se manifiesta con archivos reales porque:

```text
website-media contiene 0 objetos
```

### 9.6 Origen de la contradicción

La migración inicial creó el bucket como público.

Una migración posterior lo hizo privado con la justificación de que no existía una superficie web pública conectada a la base.

Esa justificación ya no representa la arquitectura actual, porque `ventogroup.co` consume datos de esta base.

### 9.7 Otras limitaciones

No existe:

- biblioteca visual;
- tabla de assets;
- metadatos;
- alt text;
- copyright;
- dimensiones;
- duración;
- focal point;
- crop;
- thumbnails;
- búsqueda;
- tags;
- reemplazo global;
- detección de usos;
- borrado seguro;
- limpieza de huérfanos;
- optimización automática;
- URLs firmadas;
- CDN strategy explícita.

### 9.8 Tareas responsables

- `ADR-WEB-008`
- `WEB-RND-010`
- `WEB-RND-017`
- `WEB-MED-001` a `WEB-MED-013`
- `WEB-MED-014`
- `WEB-SEC-017`
- `WEB-PERF-003`
- `WEB-PERF-004`

## 10. Restaurantes

### 10.1 Capacidades actuales

VISO permite:

- crear un restaurante manualmente;
- importar negocios desde `pass.pass_satellites`;
- editar tarjeta;
- editar nombre;
- editar descripción;
- editar ubicación;
- editar horario;
- editar imagen;
- editar video;
- editar CTA;
- editar orden;
- publicar u ocultar;
- editar hero del detalle;
- editar historia;
- editar tres slots de galería.

### 10.2 Importación desde Negocios

La importación:

1. consulta satélites activos;
2. genera slug desde el nombre;
3. evita insertar slugs ya existentes;
4. obtiene dirección desde override o `public.sites`;
5. copia nombre, subtítulo, logo, dirección y orden;
6. crea el restaurante como publicado;
7. asigna `Ver restaurante`;
8. no crea sincronización posterior.

### 10.3 Limitación de sincronización

La importación es unidireccional y puntual.

Después de importar:

- cambiar el nombre en Negocios no actualiza la web;
- cambiar la dirección no actualiza la web;
- cambiar el logo no actualiza la web;
- desactivar el negocio no lo oculta automáticamente;
- no existe `source_id`;
- no existe trazabilidad hacia `pass_satellites`;
- el matching se hace por slug.

### 10.4 Estado real

| Restaurante | Imagen | Descripción | Ubicación | Horario | Body | Acción externa | Bloques de detalle |
| ----------- | ------ | ----------- | --------- | ------- | ---- | -------------- | ------------------ |
| Vento Café  | Sí     | Sí          | Sí        | No      | No   | No             | 0                  |
| Saudo       | No     | Sí          | Sí        | No      | No   | No             | 0                  |
| Molka       | Sí     | Sí          | Sí        | No      | No   | No             | 0                  |

Observaciones:

- las dos imágenes existentes son logos del bucket `pass-satellite-logos`;
- no son fotografías editoriales;
- ninguno tiene horario;
- ninguno tiene historia extendida;
- ninguno tiene galería;
- ninguno tiene hero administrado;
- los tres están publicados.

### 10.5 Diagnóstico

Restaurantes es el dominio más avanzado del CMS, pero todavía administra una proyección parcial y duplicada de Negocios.

### 10.6 Tareas responsables

- `WEB-ARC-003`
- `WEB-ARC-007`
- `WEB-PAG-010` a `WEB-PAG-015`
- `WEB-MIG-005`
- `WEB-MIG-006`
- `WEB-MIG-014`
- `WEB-MIG-022`

## 11. Vacantes

### 11.1 Capacidades actuales

VISO permite:

- crear una vacante;
- editar cargo;
- editar descripción corta y larga;
- editar sede o modalidad;
- editar tipo de contrato;
- editar imagen o video;
- editar CTA;
- ordenar;
- publicar u ocultar.

### 11.2 Limitaciones

No existe:

- tabla especializada de vacantes;
- relación con Vento Talento;
- departamento;
- área;
- sede estructurada;
- modalidad enumerada;
- tipo de contrato enumerado;
- fecha de cierre;
- requisitos estructurados;
- responsabilidades;
- beneficios;
- estado de selección;
- formulario de aplicación;
- detalle público;
- expiración automática.

### 11.3 Estado real

Solo existe:

```text
vacante-destacada
```

Estado:

- publicada;
- sin imagen;
- sin body;
- sin sede;
- sin contrato;
- sin acción válida;
- `action_url = '#'`;
- contenido instructivo de placeholder.

### 11.4 Diagnóstico

La capacidad CRUD existe, pero no hay una vacante real ni una integración funcional.

### 11.5 Tareas responsables

- `WEB-PAG-020`
- `WEB-PAG-021`
- `WEB-PAG-022`
- `WEB-PAG-023`
- `WEB-FRM-010`
- `WEB-ARC-007`
- `WEB-MIG-007`
- `WEB-MIG-015`
- `WEB-MIG-022`

## 12. Eventos

### 12.1 Capacidades actuales

VISO permite:

- crear evento;
- editar nombre;
- editar descripción;
- editar lugar;
- editar fecha textual;
- editar `start_at`;
- editar `end_at`;
- editar imagen o video;
- editar CTA;
- ordenar;
- publicar u ocultar.

### 12.2 Limitaciones

No existe:

- página pública de Eventos;
- detalle de evento;
- capacidad;
- sede relacionada;
- restaurante relacionado;
- tipo de evento;
- estado;
- cupos;
- precio;
- formulario;
- agenda estructurada;
- expiración automática;
- archivo histórico.

### 12.3 Estado real

Solo existe:

```text
evento-destacado
```

Estado:

- publicado;
- sin imagen;
- sin body;
- sin ubicación;
- sin fechas;
- sin acción válida;
- `action_url = '#'`.

La interfaz de VISO afirma que aparece en:

```text
ventogroup.co/eventos
```

pero la ruta pública redirige a `/restaurantes`.

### 12.4 Diagnóstico

VISO administra filas de evento que no tienen una superficie pública funcional.

### 12.5 Tareas responsables

- `WEB-PRD-015`
- `WEB-PAG-040`
- `WEB-PAG-041`
- `WEB-PAG-042`
- `WEB-ARC-007`
- `WEB-MIG-009`
- `WEB-MIG-015`
- `WEB-MIG-022`

## 13. Servicios

### 13.1 Capacidades actuales

VISO permite:

- crear servicio;
- editar nombre;
- editar descripción;
- editar contexto genérico;
- editar imagen o video;
- editar CTA;
- ordenar;
- publicar u ocultar.

### 13.2 Limitaciones

No existe:

- taxonomía de servicio;
- alcance estructurado;
- público objetivo;
- responsable;
- precio o modalidad;
- proceso de contacto;
- detalle público;
- relación con los cuatro pilares hardcodeados;
- campos específicos por tipo.

### 13.3 Estado real

Solo existe:

```text
servicio-destacado
```

Estado:

- publicado;
- sin imagen;
- sin body;
- sin acción válida;
- `action_url = '#'`;
- contenido genérico de placeholder.

### 13.4 Diagnóstico

La página pública combina:

- pilares hardcodeados;
- copy hardcodeado;
- un item placeholder administrable.

No existe una fuente canónica única.

### 13.5 Tareas responsables

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-PAG-052`
- `WEB-ARC-007`
- `WEB-MIG-010`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-MIG-022`

## 14. Aplicaciones del ecosistema

### 14.1 Capacidades actuales

VISO permite administrar apps mediante `website_items`.

Campos disponibles:

- nombre;
- descripción;
- body;
- imagen;
- video;
- CTA;
- orden;
- publicación.

### 14.2 Estado real

| App        | Imagen | Body | Acción    | URL |
| ---------- | ------ | ---- | --------- | --- |
| Vento Pass | No     | No   | Descargar | `#` |
| Anima      | No     | No   | Descargar | `#` |
| Vento OS   | No     | No   | Entrar    | `#` |

### 14.3 Limitaciones

No existe:

- tipo de plataforma;
- estado de disponibilidad;
- tiendas;
- URL web;
- audiencia;
- features;
- screenshots;
- detalle público;
- configuración de CTA por plataforma.

### 14.4 Tareas responsables

- `WEB-PAG-030`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`
- `WEB-ARC-007`
- `WEB-MIG-008`
- `WEB-MIG-015`
- `WEB-MIG-022`

## 15. Modelo de permisos y publicación

### 15.1 Edición en VISO

Las pantallas de CMS:

- exigen acceso a la aplicación VISO;
- utilizan un cliente administrativo;
- escriben omitiendo las políticas RLS de usuario final.

No existe permiso específico para:

- ver web;
- editar web;
- publicar web;
- eliminar web;
- administrar medios;
- administrar restaurantes.

### 15.2 Carga de medios

El endpoint de carga aplica una regla distinta:

```text
propietario
gerente_general
```

Esto produce una posible inconsistencia:

- un usuario puede tener acceso al editor;
- pero no necesariamente puede subir archivos.

### 15.3 Lectura pública de tablas

El estado actual de la base permite lectura de `website_blocks` y `website_items` a usuarios autenticados cuando `is_published = true`.

No se encontró política anónima vigente.

### 15.4 Dependencia del `service_role`

La web pública crea un cliente de servidor usando:

1. `SUPABASE_SERVICE_ROLE_KEY`, si existe;
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`, como fallback.

El `service_role` omite RLS.

Con las políticas actuales:

- si producción tiene `service_role`, la web puede leer contenido publicado y no publicado si la consulta no filtra correctamente;
- el código filtra `is_published`, pero la protección depende de la aplicación;
- si falta `service_role` y se usa anon, la lectura puede fallar;
- cuando falla, la web utiliza fallbacks.

### 15.5 Diagnóstico

La web pública no debe depender de una credencial privilegiada para leer contenido público.

La seguridad correcta debe ser:

```text
anon
   ↓
RLS
   ↓
solo publicación vigente
```

Los borradores y previews deben resolverse mediante un canal privado específico, no mediante acceso global con `service_role`.

### 15.6 Tareas responsables

- `WEB-PRD-001`
- `WEB-PRD-002`
- `WEB-DB-016`
- `WEB-SEC-001`
- `WEB-SEC-002`
- `WEB-SEC-003`
- `WEB-SEC-017`
- `WEB-PUB-006`
- `WEB-PUB-007`

## 16. Matriz de capacidad administrativa

| Contenido           |             Crear |      Editar |  Ordenar | Ocultar |        Borrar |         Preview | Versionar | Estado                 |
| ------------------- | ----------------: | ----------: | -------: | ------: | ------------: | --------------: | --------: | ---------------------- |
| Bloque genérico     |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Parcial                |
| Item genérico       |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Parcial                |
| Restaurante         |                Sí |          Sí | Numérico |      Sí |            Sí | Tarjeta parcial |        No | Parcial                |
| Hero de restaurante |            Upsert |          Sí |     Fijo |      Sí | No individual |              No |        No | Parcial                |
| Galería             |           3 slots |          Sí |     Fijo |      Sí |   Vaciar slot |              No |        No | Insuficiente           |
| Vacante             |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Genérico               |
| Evento              |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Sin superficie pública |
| Servicio            |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Genérico               |
| App                 |                Sí |          Sí | Numérico |      Sí |            Sí |              No |        No | Genérico               |
| Medio               | Subir URL/archivo | Cambiar URL |       No |      No |            No |              No |        No | Insuficiente           |
| Página              |                No |          No |       No |      No |            No |              No |        No | Inexistente            |
| Navegación          |                No |          No |       No |      No |            No |              No |        No | Inexistente            |
| SEO                 |                No |          No |       No |      No |            No |              No |        No | Inexistente            |
| Tema                |                No |          No |       No |      No |            No |              No |        No | Inexistente            |

## 17. Registro canónico de brechas

| Brecha        | Descripción                                                                 | Severidad | Tareas responsables                                       |
| ------------- | --------------------------------------------------------------------------- | --------- | --------------------------------------------------------- |
| `WEB-GAP-049` | El CMS actual solo administra filas, no páginas ni estructuras              | Crítica   | `WEB-RND-003`, `WEB-EDT-001`, `WEB-BLD-001`               |
| `WEB-GAP-050` | `website_blocks` no está ligado a páginas, revisiones ni schemas            | Crítica   | `WEB-ARC-001`, `WEB-ARC-002`, `WEB-DB-002`, `WEB-DB-003`  |
| `WEB-GAP-051` | Tipos y claves de bloques están dispersos y no validados                    | Alta      | `ADR-WEB-002`, `WEB-RND-002`, `WEB-RND-003`               |
| `WEB-GAP-052` | Los 16 registros CMS actuales están publicados                              | Alta      | `ADR-WEB-011`, `WEB-MIG-022`, `WEB-QA-021`                |
| `WEB-GAP-053` | No existe una revisión separada del contenido publicado                     | Crítica   | `ADR-WEB-003`, `ADR-WEB-004`, `WEB-DB-003`, `WEB-PUB-008` |
| `WEB-GAP-054` | Crear contenido publica por defecto                                         | Alta      | `WEB-PRD-003`, `WEB-PUB-001`, `WEB-MIG-022`               |
| `WEB-GAP-055` | La galería está limitada a tres slots rígidos                               | Alta      | `WEB-ARC-002`, `WEB-MED-002`, `WEB-BLD-003`               |
| `WEB-GAP-056` | Existen tres galerías publicadas sin medios para un restaurante placeholder | Alta      | `WEB-MIG-022`, `WEB-QA-021`                               |
| `WEB-GAP-057` | El bucket `website-media` es privado, pero el uploader devuelve URL pública | Crítica   | `WEB-MED-014`, `WEB-SEC-017`                              |
| `WEB-GAP-058` | `website-media` no contiene objetos y no existe biblioteca multimedia       | Alta      | `WEB-MED-002`, `WEB-MED-003`, `WEB-MIG-014`               |
| `WEB-GAP-059` | Los medios se guardan como URL sin asset, metadata ni uso                   | Crítica   | `ADR-WEB-008`, `WEB-DB-006`, `WEB-DB-007`                 |
| `WEB-GAP-060` | Restaurantes se importan sin relación ni sincronización posterior           | Alta      | `WEB-ARC-007`, `WEB-MIG-005`                              |
| `WEB-GAP-061` | Los tres restaurantes reales carecen de detalle administrado                | Alta      | `WEB-PAG-012` a `WEB-PAG-015`, `WEB-MIG-006`              |
| `WEB-GAP-062` | Vacantes, eventos y servicios solo contienen placeholders publicados        | Crítica   | `WEB-MIG-015`, `WEB-MIG-022`, `WEB-QA-021`                |
| `WEB-GAP-063` | Eventos se administran para una ruta que no existe funcionalmente           | Crítica   | `WEB-PAG-040`, `WEB-MIG-009`                              |
| `WEB-GAP-064` | Apps no tienen medios ni destinos válidos                                   | Alta      | `WEB-PAG-031` a `WEB-PAG-033`, `WEB-MIG-015`              |
| `WEB-GAP-065` | El modelo genérico no valida campos por categoría                           | Alta      | `WEB-ARC-003`, `WEB-RND-002`                              |
| `WEB-GAP-066` | No existe permiso web granular; edición usa cliente administrativo          | Crítica   | `WEB-PRD-002`, `WEB-SEC-001`                              |
| `WEB-GAP-067` | La carga de medios tiene permisos distintos al editor                       | Alta      | `WEB-PRD-002`, `WEB-MED-013`                              |
| `WEB-GAP-068` | La lectura pública depende potencialmente de `service_role`                 | Crítica   | `WEB-DB-016`, `WEB-SEC-017`                               |
| `WEB-GAP-069` | Sin `service_role`, las políticas actuales pueden activar fallbacks         | Crítica   | `WEB-SEC-002`, `WEB-SEC-017`, `ADR-WEB-011`               |
| `WEB-GAP-070` | No existe trazabilidad de autor, editor o publicador                        | Alta      | `WEB-DB-003`, `WEB-DB-004`, `WEB-DB-012`                  |
| `WEB-GAP-071` | VISO afirma que los cambios se reflejan inmediatamente                      | Alta      | `ADR-WEB-004`, `WEB-PUB-002`, `WEB-PUB-008`               |

## 18. Cambios obligatorios al plan maestro

### 18.1 Marcar tareas previas

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
```

### 18.2 Agregar `WEB-ARC-007`

Ubicación recomendada: después de `WEB-ARC-006`.

```text
[ ] WEB-ARC-007 — Definir sincronización entre entidades operativas y contenido web
```

Alcance:

- Negocios y restaurantes;
- Vento Talento y vacantes;
- eventos y sedes;
- servicios corporativos;
- aplicaciones;
- fuente canónica;
- relación por ID;
- sincronización automática o manual;
- campos heredados;
- campos editoriales;
- manejo de desactivación;
- conflictos;
- trazabilidad.

### 18.3 Agregar `WEB-MED-014`

Ubicación recomendada: después de `WEB-MED-013`.

```text
[ ] WEB-MED-014 — Resolver entrega pública segura de medios
```

Alcance:

- decidir bucket público optimizado o entrega firmada;
- evitar `getPublicUrl` sobre bucket privado;
- compatibilidad con SSR y caché;
- política de lectura pública;
- previews privados;
- expiración;
- CDN;
- migración de URLs existentes;
- validación anónima.

### 18.4 Agregar `WEB-SEC-017`

Ubicación recomendada: después de `WEB-SEC-016`.

```text
[ ] WEB-SEC-017 — Eliminar dependencia de service role para lectura pública
```

Alcance:

- cliente público con anon o publishable key;
- RLS de contenido publicado;
- separación de borradores;
- preview autenticado;
- pruebas sin `SUPABASE_SERVICE_ROLE_KEY`;
- verificación de fallbacks;
- rotación si la credencial se hubiera expuesto;
- impedir consultas privilegiadas desde la web pública.

### 18.5 Agregar `WEB-MIG-022`

Ubicación recomendada: después de `WEB-MIG-021`.

```text
[ ] WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes
```

Alcance:

- inventariar cada fila existente;
- conservar contenido real;
- ocultar o eliminar placeholders;
- retirar `action_url = '#'`;
- eliminar bloques vacíos;
- reasignar medios;
- migrar restaurantes reales;
- documentar origen;
- validar sitemap;
- evitar pérdida de datos.

## 19. Criterios de aprobación

`WEB-AUD-004` podrá marcarse como completada cuando se apruebe:

- [ ] el inventario de `website_blocks`;
- [ ] el inventario de `website_items`;
- [ ] el estado real de 7 bloques y 9 items;
- [ ] que los 16 registros actuales están publicados;
- [ ] el diagnóstico de galerías;
- [ ] el diagnóstico del bucket `website-media`;
- [ ] la contradicción entre bucket privado y `getPublicUrl`;
- [ ] el estado real de restaurantes;
- [ ] el estado real de vacantes;
- [ ] el estado real de eventos;
- [ ] el estado real de servicios;
- [ ] el estado real de aplicaciones;
- [ ] el diagnóstico de permisos y `service_role`;
- [ ] el registro `WEB-GAP-049` a `WEB-GAP-071`;
- [ ] la incorporación de `WEB-ARC-007`;
- [ ] la incorporación de `WEB-MED-014`;
- [ ] la incorporación de `WEB-SEC-017`;
- [ ] la incorporación de `WEB-MIG-022`.

## 20. Estado de cierre propuesto

Estado del bloque:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[ ] WEB-AUD-004 — Inventariar contenido administrable
```

Estado de esta tarea:

```text
WEB-AUD-004 — PROPUESTA PARA APROBACIÓN
```

### 20.1 No ejecutar todavía

- ocultar o eliminar placeholders;
- modificar políticas RLS;
- cambiar el bucket;
- subir medios;
- crear migraciones;
- cambiar permisos;
- refactorizar VISO;
- sincronizar Negocios;
- modificar producción.

### 20.2 Continuidad después de aprobación

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[ ] WEB-AUD-005 — Auditar VISO Website CMS
```

## 21. Evidencia técnica consultada

### 21.1 Migraciones

- `20260327110000_website_cms.sql`
- `20260327120000_website_media_storage.sql`
- `20260519193000_harden_website_media_storage.sql`

### 21.2 VISO

- `src/app/website-cms/page.tsx`
- `src/app/website-cms/blocks/new/page.tsx`
- `src/app/website-cms/blocks/[id]/page.tsx`
- `src/app/website-cms/items/new/page.tsx`
- `src/app/website-cms/items/[id]/page.tsx`
- `src/app/website-cms/venues/page.tsx`
- `src/app/website-cms/venues/[slug]/page.tsx`
- `src/components/viso/website-media-upload-field.tsx`
- `src/app/api/viso/upload-website-media/route.ts`
- `src/lib/website-cms.ts`

### 21.3 Web pública

- `src/lib/content.ts`
- `src/lib/supabase.ts`
- páginas públicas auditadas en `WEB-AUD-001`.

### 21.4 Consultas realizadas

- conteo de bloques e items;
- agrupación por página, tipo y categoría;
- lectura de todos los registros actuales;
- completitud por categoría;
- completitud de bloques;
- configuración de buckets;
- conteo de objetos;
- políticas RLS;
- políticas de Storage.

## 22. Registro de cambios

| Versión        | Fecha      | Cambio                                                                                          | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-004` con verificación de base activa y jerarquía Markdown validada | Propuesta vigente |


# [ ] **WEB-AUD-005 — Auditar VISO Website CMS**
  - Flujos existentes.
  - Campos.
  - Permisos.
  - Validaciones.
  - Errores.
  - Experiencia de usuario.
  - Acciones peligrosas.

# [ ] **WEB-AUD-006 — Auditar Supabase**
  - Tablas.
  - Índices.
  - Restricciones.
  - Triggers.
  - RLS.
  - Storage.
  - Políticas de escritura.
  - Relaciones.

# [ ] **WEB-AUD-007 — Auditar contenido en producción**
  - Confirmar si el sitio usa datos reales.
  - Identificar placeholders.
  - Confirmar variables de entorno.
  - Identificar páginas vacías.

# [ ] **WEB-AUD-008 — Crear matriz editable vs hardcodeado**
  - Página.
  - Sección.
  - Campo.
  - Fuente actual.
  - Fuente objetivo.
  - Estado de migración.

# [ ] **WEB-AUD-009 — Crear línea base visual**
  - Captura desktop.
  - Captura tablet.
  - Captura móvil.
  - Todas las páginas.
  - Menús.
  - Footer.
  - Estados vacíos.

# [ ] **WEB-AUD-010 — Crear línea base de rendimiento**
  - Lighthouse.
  - Core Web Vitals.
  - Peso de imágenes.
  - Peso de videos.
  - JavaScript enviado.
  - Caché.

# [ ] **WEB-AUD-011 — Crear línea base de accesibilidad**
  - Contraste.
  - Navegación por teclado.
  - Lectores de pantalla.
  - `prefers-reduced-motion`.
  - Textos alternativos.
  - Estructura de encabezados.

# [ ] **WEB-AUD-012 — Consolidar brechas**
  - Cada brecha deberá quedar vinculada a una tarea del presente plan.
  - No se permitirán pendientes narrativos.

### Puerta de aprobación Fase 1

La fase se aprueba cuando exista una visión completa del estado real y no se dependa de suposiciones.

---

# FASE 2 — DEFINICIÓN FUNCIONAL DE VISO WEB STUDIO

## Objetivo

Definir exactamente qué podrá hacer un usuario y qué continuará controlado por desarrollo.

---

# [ ] **WEB-PRD-001 — Definir perfiles de usuario**
  - Administrador del sitio.
  - Editor.
  - Publicador.
  - Revisor.
  - Usuario de solo lectura.

# [ ] **WEB-PRD-002 — Definir matriz de permisos**
  - Ver.
  - Editar.
  - Crear páginas.
  - Eliminar.
  - Previsualizar.
  - Publicar.
  - Restaurar.
  - Administrar medios.
  - Administrar formularios.
  - Administrar tema.

# [ ] **WEB-PRD-003 — Definir ciclo de vida de página**

```text
BORRADOR
   ↓
LISTA PARA REVISIÓN
   ↓
APROBADA
   ↓
PUBLICADA
   ↓
ARCHIVADA
```

# [ ] **WEB-PRD-004 — Definir ciclo de vida de revisión**
  - Borrador mutable.
  - Revisión validada.
  - Revisión publicada inmutable.
  - Revisión restaurada.

# [ ] **WEB-PRD-005 — Definir acciones sobre páginas**
  - Crear.
  - Duplicar.
  - Renombrar.
  - Cambiar URL.
  - Ocultar.
  - Archivar.
  - Eliminar.
  - Restaurar.

# [ ] **WEB-PRD-006 — Definir acciones sobre secciones**
  - Agregar.
  - Seleccionar.
  - Editar.
  - Duplicar.
  - Reordenar.
  - Ocultar.
  - Eliminar.
  - Copiar.
  - Pegar.

# [ ] **WEB-PRD-007 — Definir personalización permitida**
  - Variante.
  - Tema.
  - Alineación.
  - Fondo.
  - Contraste.
  - Anchura.
  - Espaciado.
  - Comportamiento responsive.
  - Animación permitida.

# [ ] **WEB-PRD-008 — Definir comportamiento responsive**
  - Desktop.
  - Tablet.
  - Móvil.
  - Orden alternativo.
  - Ocultamiento por dispositivo.
  - Alineación móvil.
  - Recorte y foco de imágenes.

# [ ] **WEB-PRD-009 — Definir modelo de navegación**
  - Header.
  - Menú principal.
  - Menú móvil.
  - Footer.
  - Enlaces externos.
  - Dropdowns.
  - Orden.

# [ ] **WEB-PRD-010 — Definir modelo de plantillas**
  - Inicio.
  - Página editorial.
  - Listado.
  - Detalle de restaurante.
  - Empleos.
  - Eventos.
  - Contacto.
  - Página legal.

# [ ] **WEB-PRD-011 — Diseñar wireframe del editor**
  - Panel izquierdo.
  - Preview central.
  - Panel derecho.
  - Barra superior.
  - Estados de guardado.
  - Selector responsive.

# [ ] **WEB-PRD-012 — Diseñar flujo de publicación**
  - Guardar.
  - Validar.
  - Previsualizar.
  - Revisar cambios.
  - Publicar.
  - Confirmar.
  - Revertir.

# [ ] **WEB-PRD-013 — Definir criterios de completitud**
  - Campos obligatorios.
  - Medios obligatorios.
  - Alt text.
  - SEO.
  - Enlaces válidos.
  - Contraste.
  - Publicación.

# [ ] **WEB-PRD-014 — Aprobar alcance MVP**
  - Delimitar lo obligatorio para la primera versión operativa.
  - Asignar explícitamente todo lo aplazado.

### Puerta de aprobación Fase 2

No se inicia diseño de base de datos hasta aprobar comportamiento, roles y alcance.

---

# FASE 3 — ARQUITECTURA Y DECISIONES CANÓNICAS

## Objetivo

Aprobar formalmente las decisiones estructurales antes de escribir migraciones.

---

# [ ] **ADR-WEB-001 — Aprobar modelo híbrido**
  - Revisiones JSON para páginas.
  - Entidades normalizadas para datos empresariales.

# [ ] **ADR-WEB-002 — Aprobar registro de secciones**
  - Solo componentes registrados.
  - Esquema validado por tipo.
  - Variantes controladas.

# [ ] **ADR-WEB-003 — Aprobar revisiones inmutables**
  - Las versiones publicadas no se modifican.
  - Restaurar crea una nueva publicación.

# [ ] **ADR-WEB-004 — Aprobar separación guardar/publicar**
  - Guardar no afecta producción.
  - Publicar es una acción explícita.

# [ ] **ADR-WEB-005 — Aprobar estrategia de preview**
  - Token temporal.
  - Ruta privada.
  - `noindex`.
  - Sin exposición pública.

# [ ] **ADR-WEB-006 — Aprobar migración progresiva**
  - Adaptador legacy.
  - Corte página por página.
  - Sin interrupción del sitio.

# [ ] **ADR-WEB-007 — Aprobar modelo multisitio mínimo**
  - Incluir `site_id`.
  - Primer sitio: Vento Group.
  - Preparar crecimiento sin construir aún múltiples sitios.

# [ ] **ADR-WEB-008 — Aprobar estrategia de medios**
  - Archivo original.
  - Metadatos.
  - Foco visual.
  - Versiones optimizadas.
  - Referencias de uso.

# [ ] **ADR-WEB-009 — Aprobar estrategia de formularios**
  - Definiciones administrables.
  - Validación en servidor.
  - Consentimiento.
  - Anti-spam.
  - Auditoría.

# [ ] **ADR-WEB-010 — Aprobar estrategia de caché**
  - Contenido publicado cacheable.
  - Borradores sin caché pública.
  - Revalidación al publicar.

# [ ] **WEB-ARC-001 — Crear contrato JSON de páginas**
  - Schema versionado.
  - Campos requeridos.
  - Validaciones.
  - Compatibilidad futura.

# [ ] **WEB-ARC-002 — Crear contrato de secciones**
  - Contenido.
  - Medios.
  - Estilos.
  - Responsive.
  - Fuente de datos.
  - Acciones.

# [ ] **WEB-ARC-003 — Crear contrato de fuentes dinámicas**
  - Restaurantes.
  - Empleos.
  - Eventos.
  - Servicios.
  - Aplicaciones.
  - Selección manual.
  - Filtros.
  - Límite.

# [ ] **WEB-ARC-004 — Crear estrategia de compatibilidad de schema**
  - `schemaVersion`.
  - Migradores internos.
  - Validación previa al render.

# [ ] **WEB-ARC-005 — Definir arquitectura canónica de componentes públicos**

# [ ] **WEB-ARC-006 — Definir ownership y fuente canónica de cada clase de contenido**

# [ ] **WEB-ARC-007 — Definir sincronización entre entidades operativas y contenido web**


### Puerta de aprobación Fase 3

Todos los ADR deberán quedar en estado `ACCEPTED`.

---

# FASE 4 — MODELO DE BASE DE DATOS Y MIGRACIONES

## Objetivo

Crear la base estable para páginas, revisiones, publicaciones, medios y auditoría.

> Todas las migraciones se crearán exclusivamente en `vento-shell`.

---

# [ ] **WEB-DB-001 — Crear migración de sitios**
  - Tabla `website_sites`.
  - Dominio.
  - Nombre.
  - estado.
  - configuración base.

# [ ] **WEB-DB-002 — Crear migración de páginas**
  - Tabla `website_pages`.
  - `site_id`.
  - slug.
  - título interno.
  - plantilla.
  - estado.
  - orden.
  - fechas.

# [ ] **WEB-DB-003 — Crear migración de revisiones**
  - Tabla `website_page_revisions`.
  - JSON validable.
  - número de revisión.
  - autor.
  - comentario.
  - estado.
  - timestamps.

# [ ] **WEB-DB-004 — Crear migración de publicaciones**
  - Tabla `website_page_publications`.
  - página.
  - revisión publicada.
  - publicador.
  - fecha.
  - causa.
  - versión anterior.

# [ ] **WEB-DB-005 — Crear migración de releases**
  - `website_releases`.
  - `website_release_pages`.
  - Preparar publicación coordinada de múltiples páginas.

# [ ] **WEB-DB-006 — Crear migración de medios**
  - `website_media_assets`.
  - nombre.
  - tipo.
  - URL.
  - tamaño.
  - dimensiones.
  - alt text.
  - foco.
  - autor.
  - estado.

# [ ] **WEB-DB-007 — Crear referencias de medios**
  - `website_media_usages`.
  - Identificar dónde se utiliza cada archivo.
  - Impedir borrado accidental.

# [ ] **WEB-DB-008 — Crear migración de tema**
  - `website_themes`.
  - Colores.
  - Tipografías.
  - radios.
  - sombras.
  - botones.
  - espacios.

# [ ] **WEB-DB-009 — Crear configuración global**
  - `website_site_settings`.
  - datos de contacto.
  - redes.
  - logos.
  - favicon.
  - SEO base.
  - analítica.

# [ ] **WEB-DB-010 — Crear navegación**
  - `website_navigation_menus`.
  - `website_navigation_items`.
  - jerarquía.
  - orden.
  - visibilidad.
  - destino.

# [ ] **WEB-DB-011 — Crear formularios**
  - `website_forms`.
  - `website_form_fields`.
  - `website_form_submissions`.

# [ ] **WEB-DB-012 — Crear auditoría**
  - `website_audit_events`.
  - acción.
  - actor.
  - recurso.
  - antes.
  - después.
  - fecha.
  - IP cuando corresponda.

# [ ] **WEB-DB-013 — Crear tokens de preview**
  - `website_preview_tokens`.
  - expiración.
  - revisión.
  - revocación.
  - creador.

# [ ] **WEB-DB-014 — Crear índices**
  - Slug.
  - sitio.
  - estado.
  - publicación.
  - revisión.
  - categorías.
  - fechas.

# [ ] **WEB-DB-015 — Crear triggers**
  - `updated_at`.
  - número de revisión.
  - auditoría cuando corresponda.
  - integridad.

# [ ] **WEB-DB-016 — Crear RLS**
  - Lectura anónima solo de contenido publicado.
  - Edición solo desde roles autorizados.
  - Publicación restringida.
  - Formularios con política específica.
  - Auditoría protegida.

# [ ] **WEB-DB-017 — Crear seed inicial**
  - Sitio `ventogroup.co`.
  - Páginas actuales.
  - Tema base.
  - navegación base.

# [ ] **WEB-DB-018 — Crear pruebas de migración**
  - Base vacía.
  - Base con datos actuales.
  - Reaplicación segura.
  - Rollback lógico.

# [ ] **WEB-DB-019 — Documentar migraciones**
  - Propósito.
  - tablas.
  - relaciones.
  - políticas.
  - reversión.
  - dependencias.

### Puerta de aprobación Fase 4

Las migraciones deberán estar revisadas antes de aplicarse en producción.

---

# FASE 5 — REGISTRO Y MOTOR DE RENDERIZADO

## Objetivo

Convertir `vento-group-web` en un renderizador dinámico de páginas.

---

# [ ] **WEB-RND-001 — Crear tipos TypeScript canónicos**
  - Página.
  - Revisión.
  - Sección.
  - Medio.
  - Tema.
  - Fuente dinámica.
  - SEO.

# [ ] **WEB-RND-002 — Crear schemas de validación**
  - Validación de página.
  - Validación por tipo de sección.
  - Validación de enlaces.
  - Validación de medios.
  - Validación responsive.

# [ ] **WEB-RND-003 — Crear Section Registry**

```text
tipo de sección
    ↓
schema
    ↓
componente React
    ↓
variantes permitidas
    ↓
panel de propiedades
```

# [ ] **WEB-RND-004 — Crear Page Loader**
  - Resolver sitio.
  - Resolver página.
  - Resolver revisión publicada.
  - Validar contenido.
  - Entregar datos al renderer.

# [ ] **WEB-RND-005 — Crear Page Renderer**
  - Iterar secciones.
  - Renderizar componente registrado.
  - Manejar secciones ocultas.
  - Aplicar tema.
  - Aplicar responsive.

# [ ] **WEB-RND-006 — Crear manejo de errores**
  - Sección desconocida.
  - Schema inválido.
  - Medio faltante.
  - Fuente dinámica inválida.
  - Datos incompletos.

# [ ] **WEB-RND-007 — Crear modo desarrollo**
  - Mostrar errores visibles solo a administradores.
  - No romper completamente la página.

# [ ] **WEB-RND-008 — Crear adaptador legacy**
  - Traducir `website_blocks` al formato nuevo.
  - Traducir páginas actuales.
  - Mantener operación mientras se migra.

# [ ] **WEB-RND-009 — Crear resolución de colecciones**
  - Restaurantes.
  - Vacantes.
  - Eventos.
  - Servicios.
  - Aplicaciones.
  - Filtros.
  - Orden.
  - selección manual.

# [ ] **WEB-RND-010 — Crear resolución de medios**
  - Asset por ID.
  - URL optimizada.
  - alt text.
  - foco.
  - poster de video.
  - fallback seguro.

# [ ] **WEB-RND-011 — Crear estilos por tokens**
  - Tema.
  - contraste.
  - anchura.
  - espacios.
  - alineación.
  - fondos.

# [ ] **WEB-RND-012 — Crear comportamiento responsive**
  - Overrides móviles.
  - Layout.
  - orden.
  - visibilidad.
  - tamaño de tipografía.
  - foco multimedia.

# [ ] **WEB-RND-013 — Crear metadata dinámica**
  - título.
  - descripción.
  - canonical.
  - Open Graph.
  - Twitter.
  - noindex.
  - imagen social.

# [ ] **WEB-RND-014 — Crear datos estructurados**
  - Organización.
  - Restaurante.
  - Empleo.
  - Evento.
  - Breadcrumb.
  - ItemList.

# [ ] **WEB-RND-015 — Crear revalidación**
  - Revalidar página publicada.
  - Revalidar navegación.
  - Revalidar sitemap.
  - Revalidar colecciones.

# [ ] **WEB-RND-016 — Crear pruebas unitarias**
  - Schemas.
  - registro.
  - loaders.
  - fuentes dinámicas.
  - errores.

### Puerta de aprobación Fase 5

Una página de prueba deberá renderizarse completamente desde una revisión almacenada.

---

# FASE 6 — BORRADORES, PREVIEW, PUBLICACIÓN Y VERSIONES

## Objetivo

Implementar un flujo editorial seguro.

---

# [ ] **WEB-PUB-001 — Crear borrador inicial**
  - Crear borrador desde página vacía.
  - Crear borrador desde versión publicada.

# [ ] **WEB-PUB-002 — Implementar guardado manual**
  - Validar.
  - Guardar.
  - Mostrar fecha.
  - Mostrar usuario.

# [ ] **WEB-PUB-003 — Implementar autoguardado**
  - Debounce.
  - Estado guardando.
  - Estado guardado.
  - Manejo de error.
  - Recuperación.

# [ ] **WEB-PUB-004 — Implementar control de concurrencia**
  - Detectar edición simultánea.
  - Evitar sobrescritura silenciosa.
  - Advertir versión desactualizada.

# [ ] **WEB-PUB-005 — Implementar validación previa**
  - Campos.
  - schema.
  - enlaces.
  - medios.
  - SEO.
  - accesibilidad mínima.

# [ ] **WEB-PUB-006 — Crear tokens de preview**
  - Firmados.
  - Temporales.
  - Revocables.
  - Limitados a una revisión.

# [ ] **WEB-PUB-007 — Crear ruta de preview**
  - Cargar revisión no publicada.
  - No almacenar caché pública.
  - `noindex`.
  - Indicar modo preview.

# [ ] **WEB-PUB-008 — Implementar publicación**
  - Confirmación explícita.
  - Crear versión inmutable.
  - Actualizar puntero publicado.
  - Registrar auditoría.
  - Revalidar sitio.

# [ ] **WEB-PUB-009 — Implementar comparación de cambios**
  - Campos modificados.
  - Secciones nuevas.
  - Secciones eliminadas.
  - Orden.
  - SEO.
  - navegación.

# [ ] **WEB-PUB-010 — Implementar historial**
  - Revisión.
  - fecha.
  - autor.
  - comentario.
  - estado.
  - acción.

# [ ] **WEB-PUB-011 — Implementar restauración**
  - Seleccionar versión.
  - Previsualizar.
  - Confirmar.
  - Crear nueva versión.
  - Publicar.

# [ ] **WEB-PUB-012 — Implementar despublicación**
  - Validar impacto.
  - Mantener historial.
  - Definir respuesta pública.

# [ ] **WEB-PUB-013 — Implementar releases**
  - Agrupar cambios de varias páginas.
  - Previsualizar conjunto.
  - Publicar conjunto.
  - Restaurar conjunto.

# [ ] **WEB-PUB-014 — Crear auditoría editorial**
  - Crear.
  - editar.
  - publicar.
  - restaurar.
  - eliminar.
  - cambiar permisos.

### Puerta de aprobación Fase 6

Se debe poder editar una página, previsualizarla, publicarla y restaurar la versión anterior.

---

# FASE 7 — FUNDAMENTO DE VISO WEB STUDIO

## Objetivo

Construir el contenedor principal del editor.

---

# [ ] **WEB-EDT-001 — Crear ruta `/website-studio`**
  - Mantener temporalmente `/website-cms`.

# [ ] **WEB-EDT-002 — Crear selector de sitio**
  - Inicialmente solo Vento Group.
  - Preparado para múltiples sitios.

# [ ] **WEB-EDT-003 — Crear selector de página**
  - Buscar.
  - filtrar.
  - estado.
  - fecha.
  - autor.

# [ ] **WEB-EDT-004 — Crear árbol de páginas**
  - Inicio.
  - internas.
  - legales.
  - ocultas.
  - archivadas.

# [ ] **WEB-EDT-005 — Crear lista de secciones**
  - Orden.
  - tipo.
  - título interno.
  - estado visible/oculto.
  - error.

# [ ] **WEB-EDT-006 — Crear panel central**
  - Preview mediante iframe.
  - Recarga controlada.
  - Sin abandonar VISO.

# [ ] **WEB-EDT-007 — Crear panel de propiedades**
  - Campos según tipo de sección.
  - Validaciones.
  - ayuda.
  - estados.

# [ ] **WEB-EDT-008 — Crear barra superior**
  - Guardar.
  - preview.
  - publicar.
  - versiones.
  - dispositivo.
  - salir.

# [ ] **WEB-EDT-009 — Crear selector responsive**
  - Desktop.
  - tablet.
  - móvil.
  - ancho personalizado de prueba.

# [ ] **WEB-EDT-010 — Crear comunicación editor-preview**
  - `postMessage`.
  - selección de sección.
  - scroll hacia sección.
  - actualización temporal.

# [ ] **WEB-EDT-011 — Crear indicador de guardado**
  - Sin cambios.
  - cambios pendientes.
  - guardando.
  - guardado.
  - error.

# [ ] **WEB-EDT-012 — Crear navegación segura**
  - Advertir cambios sin guardar.
  - evitar pérdida accidental.

# [ ] **WEB-EDT-013 — Crear manejo de errores**
  - Error de carga.
  - error de schema.
  - error de permisos.
  - error de guardado.
  - error de preview.

# [ ] **WEB-EDT-014 — Crear accesibilidad del editor**
  - teclado.
  - foco.
  - etiquetas.
  - contraste.
  - mensajes.

### Puerta de aprobación Fase 7

El editor deberá cargar una página, mostrar sus secciones y presentar preview real.

---

# FASE 8 — EDICIÓN VISUAL Y OPERACIONES SOBRE SECCIONES

## Objetivo

Convertir el editor en un constructor funcional.

---

# [ ] **WEB-BLD-001 — Crear biblioteca de secciones**
  - categorías.
  - búsqueda.
  - miniatura.
  - descripción.
  - variantes.

# [ ] **WEB-BLD-002 — Agregar sección**
  - Seleccionar tipo.
  - crear configuración por defecto.
  - insertar en posición elegida.

# [ ] **WEB-BLD-003 — Reordenar secciones**
  - Drag-and-drop.
  - alternativa por teclado.
  - actualización inmediata del preview.

# [ ] **WEB-BLD-004 — Duplicar sección**
  - Nuevo ID.
  - conservar configuración.
  - conservar medios.
  - registrar cambios.

# [ ] **WEB-BLD-005 — Ocultar sección**
  - Ocultar sin eliminar.
  - mostrar estado en editor.
  - excluir en producción.

# [ ] **WEB-BLD-006 — Eliminar sección**
  - Confirmación.
  - advertencia.
  - posibilidad de deshacer antes de guardar.

# [ ] **WEB-BLD-007 — Editar contenido**
  - título.
  - subtítulo.
  - cuerpo.
  - CTA.
  - enlaces.
  - etiquetas.

# [ ] **WEB-BLD-008 — Seleccionar variante**
  - Variante visual compatible.
  - Preview inmediato.
  - valores por defecto.

# [ ] **WEB-BLD-009 — Configurar apariencia**
  - tema claro/oscuro.
  - fondo.
  - alineación.
  - anchura.
  - espaciado.
  - contraste.

# [ ] **WEB-BLD-010 — Configurar responsive**
  - propiedades por dispositivo.
  - orden.
  - ocultamiento.
  - alineación.
  - foco multimedia.

# [ ] **WEB-BLD-011 — Conectar colecciones**
  - categoría.
  - filtro.
  - orden.
  - límite.
  - selección manual.
  - elementos destacados.

# [ ] **WEB-BLD-012 — Seleccionar elementos manuales**
  - Restaurantes.
  - eventos.
  - empleos.
  - servicios.
  - apps.

# [ ] **WEB-BLD-013 — Crear edición desde el preview**
  - Clic sobre sección.
  - selección.
  - resaltado.
  - apertura de propiedades.

# [ ] **WEB-BLD-014 — Crear undo/redo**
  - Historial local.
  - deshacer.
  - rehacer.
  - reiniciar borrador.

# [ ] **WEB-BLD-015 — Crear copiar y pegar**
  - Dentro de la misma página.
  - Entre páginas compatibles.

# [ ] **WEB-BLD-016 — Crear anclas**
  - ID de sección.
  - navegación interna.
  - validación de duplicados.

# [ ] **WEB-BLD-017 — Crear páginas**
  - Desde cero.
  - desde plantilla.
  - duplicar existente.

# [ ] **WEB-BLD-018 — Administrar URL**
  - slug.
  - redirecciones.
  - colisiones.
  - URL reservadas.

# [ ] **WEB-BLD-019 — Archivar páginas**
  - No eliminar directamente una página publicada.
  - conservar historial.

# [ ] **WEB-BLD-020 — Crear plantillas**
  - Guardar estructura.
  - aplicar plantilla.
  - actualizar catálogo.

### Puerta de aprobación Fase 8

Una persona no técnica deberá poder crear una página completa sin modificar código.

---

# FASE 9 — BIBLIOTECA MULTIMEDIA

## Objetivo

Administrar imágenes y videos de forma visual, segura y eficiente.

---

# [ ] **WEB-MED-001 — Definir bucket y estructura**
  - Sitio.
  - tipo.
  - fecha.
  - recurso.
  - versión.

# [ ] **WEB-MED-002 — Crear biblioteca visual**
  - Grid.
  - lista.
  - miniaturas.
  - búsqueda.
  - filtros.

# [ ] **WEB-MED-003 — Crear subida de archivos**
  - Arrastrar.
  - seleccionar.
  - múltiples archivos.
  - progreso.
  - cancelación.

# [ ] **WEB-MED-004 — Validar archivos**
  - formato.
  - tamaño.
  - dimensiones.
  - duración.
  - MIME.
  - extensión.

# [ ] **WEB-MED-005 — Crear metadatos**
  - título.
  - descripción.
  - alt text.
  - etiquetas.
  - autor.
  - copyright interno.

# [ ] **WEB-MED-006 — Crear punto focal**
  - Foco horizontal.
  - foco vertical.
  - preview por dispositivo.

# [ ] **WEB-MED-007 — Crear recorte**
  - Relaciones permitidas.
  - portada.
  - tarjeta.
  - hero.
  - Open Graph.

# [ ] **WEB-MED-008 — Crear optimización de imágenes**
  - WebP/AVIF.
  - tamaños.
  - compresión.
  - lazy loading.
  - placeholder.

# [ ] **WEB-MED-009 — Crear manejo de videos**
  - poster.
  - duración.
  - autoplay permitido.
  - sonido.
  - móvil.
  - fallback.

# [ ] **WEB-MED-010 — Crear reemplazo global**
  - Identificar usos.
  - reemplazar.
  - advertir impacto.

# [ ] **WEB-MED-011 — Impedir borrado peligroso**
  - Mostrar usos.
  - bloquear si está publicado.
  - permitir reemplazo.

# [ ] **WEB-MED-012 — Crear limpieza de huérfanos**
  - Detectar.
  - revisar.
  - archivar.
  - eliminar posteriormente.

# [ ] **WEB-MED-013 — Crear permisos multimedia**
  - Subir.
  - editar.
  - reemplazar.
  - eliminar.
  - administrar.

### Puerta de aprobación Fase 9

Todo medio publicado deberá tener trazabilidad, optimización y uso identificable.

---

# FASE 10 — CONFIGURACIÓN GLOBAL DEL SITIO

## Objetivo

Permitir administrar desde VISO los elementos que afectan todas las páginas.

---

# [ ] **WEB-GLB-001 — Crear editor de tema**
  - Paleta.
  - fondos.
  - tipografías.
  - botones.
  - radios.
  - espacios.
  - sombras.

# [ ] **WEB-GLB-002 — Crear configuración de logos**
  - principal.
  - claro.
  - oscuro.
  - isotipo.
  - favicon.
  - Open Graph.

# [ ] **WEB-GLB-003 — Crear editor de header**
  - estilo.
  - transparencia.
  - comportamiento al scroll.
  - CTA.
  - menú móvil.

# [ ] **WEB-GLB-004 — Crear editor de navegación**
  - añadir.
  - ordenar.
  - anidar.
  - ocultar.
  - enlaces externos.
  - páginas internas.

# [ ] **WEB-GLB-005 — Crear editor de footer**
  - columnas.
  - enlaces.
  - redes.
  - contacto.
  - legales.
  - marcas.

# [ ] **WEB-GLB-006 — Crear información corporativa**
  - nombre.
  - correo.
  - teléfono.
  - direcciones.
  - horarios.
  - redes.

# [ ] **WEB-GLB-007 — Crear configuración SEO global**
  - título base.
  - descripción base.
  - imagen base.
  - robots.
  - idioma.
  - organización.

# [ ] **WEB-GLB-008 — Crear SEO por página**
  - title.
  - description.
  - canonical.
  - Open Graph.
  - indexación.
  - schema.

# [ ] **WEB-GLB-009 — Crear sitemap**
  - páginas publicadas.
  - restaurantes.
  - eventos.
  - fechas de modificación.

# [ ] **WEB-GLB-010 — Crear redirecciones**
  - URL anterior.
  - URL nueva.
  - tipo 301/302.
  - prevención de ciclos.

# [ ] **WEB-GLB-011 — Crear configuración analítica**
  - proveedor.
  - identificador.
  - eventos.
  - consentimiento.

# [ ] **WEB-GLB-012 — Crear banner de cookies**
  - categorías.
  - consentimiento.
  - persistencia.
  - política.

# [ ] **WEB-GLB-013 — Crear páginas legales**
  - privacidad.
  - tratamiento de datos.
  - términos.
  - cookies.

### Puerta de aprobación Fase 10

Header, footer, tema, SEO y navegación deberán poder cambiarse sin despliegue de código.

---

# FASE 11 — FORMULARIOS Y CONVERSIONES

## Objetivo

Gestionar contacto, reservas, eventos y aplicaciones desde la web.

---

# [ ] **WEB-FRM-001 — Crear catálogo de formularios**
  - Contacto.
  - eventos.
  - reserva.
  - empleo.
  - proveedores.
  - prensa.

# [ ] **WEB-FRM-002 — Crear constructor controlado de formularios**
  - Campo texto.
  - email.
  - teléfono.
  - select.
  - textarea.
  - checkbox.
  - fecha.
  - archivo permitido.

# [ ] **WEB-FRM-003 — Crear validaciones**
  - requerido.
  - formato.
  - longitud.
  - archivo.
  - consentimiento.

# [ ] **WEB-FRM-004 — Crear envío seguro**
  - Validación servidor.
  - rate limit.
  - anti-spam.
  - CAPTCHA cuando corresponda.

# [ ] **WEB-FRM-005 — Crear almacenamiento de envíos**
  - estado.
  - fecha.
  - origen.
  - página.
  - consentimiento.

# [ ] **WEB-FRM-006 — Crear notificaciones**
  - correo.
  - destinatarios.
  - asunto.
  - plantilla.

# [ ] **WEB-FRM-007 — Crear bandeja en VISO**
  - Nuevos.
  - en gestión.
  - atendidos.
  - descartados.

# [ ] **WEB-FRM-008 — Crear exportación**
  - CSV.
  - filtros.
  - rango de fechas.

# [ ] **WEB-FRM-009 — Crear política de retención**
  - datos personales.
  - archivos.
  - tiempos.
  - eliminación.

# [ ] **WEB-FRM-010 — Integrar empleos con Vento Talento**
  - Definir si redirige.
  - Definir si comparte vacantes.
  - Definir si recibe aplicaciones.

### Puerta de aprobación Fase 11

Los formularios deberán funcionar sin exponer credenciales ni permitir spam básico.

---

# FASE 12 — RECONSTRUCCIÓN DE PÁGINAS ESTILO DARLING

## Objetivo

Migrar cada página al nuevo sistema y llevarla al nivel visual definido.

---

## 12.1 Inicio

# [ ] **WEB-PAG-001 — Definir blueprint de Inicio**
  - Splash.
  - hero.
  - venues.
  - editorial.
  - image banner.
  - eventos.
  - statement.
  - ecosistema.
  - CTA.

# [ ] **WEB-PAG-002 — Migrar Inicio al renderer**
  - Eliminar dependencia estructural de código específico.
  - Mantener animaciones existentes.

# [ ] **WEB-PAG-003 — Hacer Inicio editable desde VISO**
  - Orden.
  - textos.
  - slides.
  - medios.
  - CTA.
  - visibilidad.

---

## 12.2 Restaurantes

# [ ] **WEB-PAG-010 — Definir blueprint de Restaurantes**
  - Hero.
  - showcase.
  - editorial.
  - banner.
  - portafolio.
  - CTA.

# [ ] **WEB-PAG-011 — Migrar listado de restaurantes**
  - Contenido dinámico.
  - filtros.
  - destacados.
  - orden.

# [ ] **WEB-PAG-012 — Crear plantilla de restaurante**
  - Hero.
  - introducción.
  - ubicación.
  - horarios.
  - características.
  - galería.
  - eventos.
  - reserva.
  - restaurantes relacionados.

# [ ] **WEB-PAG-013 — Migrar Vento Café**
  - Contenido real.
  - medios reales.
  - SEO.
  - CTA.

# [ ] **WEB-PAG-014 — Migrar Saudo**
  - Contenido real.
  - medios reales.
  - SEO.
  - CTA.

# [ ] **WEB-PAG-015 — Migrar Molka**
  - Confirmar estado de marca.
  - contenido.
  - medios.
  - SEO.
  - CTA.

---

## 12.3 Empleos

# [ ] **WEB-PAG-020 — Definir blueprint de Empleos**
  - Hero.
  - cultura.
  - editorial.
  - valores.
  - testimonios.
  - vacantes.
  - CTA.

# [ ] **WEB-PAG-021 — Crear lista de vacantes**
  - Cargo.
  - sede.
  - modalidad.
  - tipo de contrato.
  - fecha.
  - aplicar.

# [ ] **WEB-PAG-022 — Crear detalle de vacante**
  - Descripción.
  - responsabilidades.
  - requisitos.
  - beneficios.
  - formulario o integración.

# [ ] **WEB-PAG-023 — Integrar con Vento Talento**
  - Fuente canónica de vacantes.
  - evitar duplicados.
  - estado de publicación.

---

## 12.4 Ecosistema

# [ ] **WEB-PAG-030 — Definir blueprint de Ecosistema**
  - Hero.
  - historia.
  - visión.
  - image banner.
  - pasos.
  - aplicaciones.
  - cultura.
  - CTA.

# [ ] **WEB-PAG-031 — Crear secciones de Vento Pass**
  - propósito.
  - beneficios.
  - CTA.

# [ ] **WEB-PAG-032 — Crear secciones de Anima**
  - propósito.
  - beneficios.
  - CTA.

# [ ] **WEB-PAG-033 — Crear secciones de Vento OS**
  - propósito.
  - módulos.
  - CTA.

---

## 12.5 Eventos

# [ ] **WEB-PAG-040 — Definir blueprint de Eventos**
  - Hero.
  - espacios.
  - capacidades.
  - servicios.
  - galería.
  - formulario.

# [ ] **WEB-PAG-041 — Crear selector de espacios**
  - restaurante.
  - zona.
  - capacidad.
  - tipo de evento.
  - media.

# [ ] **WEB-PAG-042 — Crear formulario de eventos**
  - tipo.
  - fecha.
  - personas.
  - sede.
  - contacto.
  - observaciones.

---

## 12.6 Servicios

# [ ] **WEB-PAG-050 — Definir blueprint de Servicios**
  - Hero.
  - editorial.
  - servicios.
  - beneficios.
  - CTA.

# [ ] **WEB-PAG-051 — Definir servicios reales**
  - No publicar categorías vacías.
  - No utilizar placeholders.

# [ ] **WEB-PAG-052 — Crear detalle opcional de servicio**
  - Descripción.
  - alcance.
  - contacto.
  - CTA.

---

## 12.7 Contacto

# [ ] **WEB-PAG-060 — Crear página Contacto**
  - Hero.
  - formulario.
  - áreas de contacto.
  - sedes.
  - redes.

# [ ] **WEB-PAG-061 — Reemplazar enlaces mailto dispersos**
  - Centralizar contacto.
  - mantener correos solo cuando aporten valor.

---

## 12.8 Páginas auxiliares

# [ ] **WEB-PAG-070 — Crear página 404**
# [ ] **WEB-PAG-071 — Crear página de error**
# [ ] **WEB-PAG-072 — Crear privacidad**
# [ ] **WEB-PAG-073 — Crear tratamiento de datos**
# [ ] **WEB-PAG-074 — Crear términos**
# [ ] **WEB-PAG-075 — Crear cookies**

### Puerta de aprobación Fase 12

Todas las páginas públicas prioritarias deberán estar administradas desde VISO y sin placeholders.

---

# FASE 13 — MIGRACIÓN DE CONTENIDO Y CORTE PROGRESIVO

## Objetivo

Mover el contenido actual al sistema nuevo sin interrupciones.

---

# [ ] **WEB-MIG-001 — Crear inventario de contenido migrable**
  - Bloques.
  - items.
  - imágenes.
  - videos.
  - SEO.
  - enlaces.

# [ ] **WEB-MIG-002 — Crear transformador legacy**
  - `website_blocks` → revisión de página.
  - `website_items` → colecciones dinámicas.

# [ ] **WEB-MIG-003 — Crear reporte de incompatibilidades**
  - campos perdidos.
  - claves desconocidas.
  - medios faltantes.
  - enlaces inválidos.

# [ ] **WEB-MIG-004 — Migrar Inicio**
# [ ] **WEB-MIG-005 — Migrar Restaurantes**
# [ ] **WEB-MIG-006 — Migrar detalles de restaurante**
# [ ] **WEB-MIG-007 — Migrar Empleos**
# [ ] **WEB-MIG-008 — Migrar Ecosistema**
# [ ] **WEB-MIG-009 — Migrar Eventos**
# [ ] **WEB-MIG-010 — Migrar Servicios**
# [ ] **WEB-MIG-011 — Migrar navegación**
# [ ] **WEB-MIG-012 — Migrar footer**
# [ ] **WEB-MIG-013 — Migrar SEO**
# [ ] **WEB-MIG-014 — Migrar medios**

# [ ] **WEB-MIG-015 — Poblar contenido real**
  - Eliminar placeholders.
  - Confirmar datos.
  - confirmar imágenes.
  - confirmar CTA.

# [ ] **WEB-MIG-016 — Bloquear edición legacy por página migrada**
  - Evitar doble fuente de verdad.

# [ ] **WEB-MIG-017 — Mantener rollback legacy temporal**
  - Periodo de seguridad.
  - documentación.
  - responsables.

# [ ] **WEB-MIG-018 — Archivar CMS legacy**
  - Solo después de validar todas las páginas.

# [ ] **WEB-MIG-019 — Definir destino de tablas legacy**
  - mantener lectura histórica;
  - renombrar;
  - archivar;
  - eliminar en una migración posterior.

### Puerta de aprobación Fase 13

Cada página migrada deberá tener equivalencia funcional y visual antes de desactivar su versión anterior.

---

# FASE 14 — SEGURIDAD

## Objetivo

Evitar acceso indebido, publicación accidental y contenido inseguro.

---

# [ ] **WEB-SEC-001 — Validar permisos por acción**
# [ ] **WEB-SEC-002 — Probar RLS anónima**
# [ ] **WEB-SEC-003 — Probar RLS autenticada**
# [ ] **WEB-SEC-004 — Probar publicación restringida**
# [ ] **WEB-SEC-005 — Proteger preview**
# [ ] **WEB-SEC-006 — Sanitizar texto enriquecido**
# [ ] **WEB-SEC-007 — Validar URLs**
# [ ] **WEB-SEC-008 — Validar archivos**
# [ ] **WEB-SEC-009 — Aplicar rate limiting**
# [ ] **WEB-SEC-010 — Proteger formularios**
# [ ] **WEB-SEC-011 — Auditar secretos**
# [ ] **WEB-SEC-012 — Auditar variables de entorno**
# [ ] **WEB-SEC-013 — Registrar eventos sensibles**
# [ ] **WEB-SEC-014 — Probar restauración ante error**
# [ ] **WEB-SEC-015 — Crear revisión de seguridad previa a producción**

### Criterio obligatorio

La web pública nunca deberá poder consultar borradores ni versiones privadas.

---

# FASE 15 — CALIDAD, ACCESIBILIDAD Y RENDIMIENTO

## Objetivo

Garantizar que el nuevo editor no degrade el sitio.

---

# [ ] **WEB-QA-001 — Crear pruebas unitarias**
# [ ] **WEB-QA-002 — Crear pruebas de integración**
# [ ] **WEB-QA-003 — Crear pruebas E2E**
# [ ] **WEB-QA-004 — Crear pruebas de publicación**
# [ ] **WEB-QA-005 — Crear pruebas de rollback**
# [ ] **WEB-QA-006 — Crear regresión visual**
# [ ] **WEB-QA-007 — Probar Chrome desktop**
# [ ] **WEB-QA-008 — Probar Android**
# [ ] **WEB-QA-009 — Probar iPhone/Safari**
# [ ] **WEB-QA-010 — Probar tablet**
# [ ] **WEB-QA-011 — Probar teclado**
# [ ] **WEB-QA-012 — Probar lector de pantalla**
# [ ] **WEB-QA-013 — Validar contraste**
# [ ] **WEB-QA-014 — Validar animaciones reducidas**
# [ ] **WEB-QA-015 — Validar alt text**
# [ ] **WEB-QA-016 — Validar estructura de encabezados**
# [ ] **WEB-QA-017 — Validar formularios**
# [ ] **WEB-QA-018 — Validar enlaces**
# [ ] **WEB-QA-019 — Validar SEO**
# [ ] **WEB-QA-020 — Validar datos estructurados**

---

## 15.1 Objetivos de rendimiento

# [ ] **WEB-PERF-001 — LCP objetivo**
  - Menor de 2,5 segundos en condiciones representativas.

# [ ] **WEB-PERF-002 — CLS objetivo**
  - Menor de 0,1.

# [ ] **WEB-PERF-003 — Imágenes**
  - Responsive.
  - optimizadas.
  - lazy loading cuando corresponda.

# [ ] **WEB-PERF-004 — Videos**
  - poster.
  - carga diferida.
  - compresión.
  - alternativa móvil.

# [ ] **WEB-PERF-005 — JavaScript**
  - Evitar cargar editor en la web pública.
  - Dividir componentes pesados.

# [ ] **WEB-PERF-006 — Caché**
  - Contenido publicado.
  - medios.
  - colecciones.
  - revalidación.

# [ ] **WEB-PERF-007 — Lighthouse**
  - Performance móvil objetivo ≥ 85.
  - Accesibilidad objetivo ≥ 95.
  - SEO objetivo ≥ 95.
  - Best Practices objetivo ≥ 90.

### Puerta de aprobación Fase 15

No se aprobará el lanzamiento si el nuevo sistema empeora de forma crítica la experiencia móvil.

---

# FASE 16 — DESPLIEGUE Y OPERACIÓN

## Objetivo

Lanzar el sistema con procesos reproducibles y seguros.

---

# [ ] **WEB-OPS-001 — Definir ambientes**
  - local.
  - desarrollo.
  - staging.
  - producción.

# [ ] **WEB-OPS-002 — Definir variables por ambiente**
  - Supabase.
  - dominio.
  - preview.
  - storage.
  - correo.
  - analítica.

# [ ] **WEB-OPS-003 — Crear ambiente staging**
  - Sitio.
  - VISO.
  - datos de prueba.
  - preview.

# [ ] **WEB-OPS-004 — Crear pipeline de validación**
  - lint.
  - tipos.
  - tests.
  - build.
  - migraciones.

# [ ] **WEB-OPS-005 — Crear proceso de migración**
  - respaldo.
  - aplicación.
  - validación.
  - rollback.

# [ ] **WEB-OPS-006 — Crear monitoreo**
  - errores.
  - formularios.
  - publicaciones.
  - rendimiento.
  - storage.

# [ ] **WEB-OPS-007 — Crear alertas**
  - error de publicación.
  - página no disponible.
  - error Supabase.
  - formularios fallidos.

# [ ] **WEB-OPS-008 — Crear runbook de incidentes**
  - sitio caído.
  - publicación incorrecta.
  - medio eliminado.
  - formulario detenido.
  - rollback.

# [ ] **WEB-OPS-009 — Crear respaldo**
  - base de datos.
  - medios.
  - configuración.
  - revisiones.

# [ ] **WEB-OPS-010 — Probar recuperación**
  - restaurar página.
  - restaurar release.
  - restaurar datos.

# [ ] **WEB-OPS-011 — Crear guía editorial**
  - textos.
  - imágenes.
  - SEO.
  - publicación.
  - revisión.

# [ ] **WEB-OPS-012 — Capacitar usuarios**
  - editor.
  - publicador.
  - administrador.

# [ ] **WEB-OPS-013 — Ejecutar lanzamiento progresivo**
  - Página por página.
  - monitoreo.
  - confirmación.

# [ ] **WEB-OPS-014 — Cerrar periodo de estabilización**
  - errores resueltos.
  - métricas estables.
  - legacy archivado.

---

# FASE 17 — FUNCIONES AVANZADAS POSTERIORES

Estas tareas no pertenecen al MVP, pero quedan registradas para evitar pendientes informales.

---

# [ ] **WEB-ADV-001 — Publicación programada**
# [ ] **WEB-ADV-002 — Despublicación programada**
# [ ] **WEB-ADV-003 — Comentarios editoriales**
# [ ] **WEB-ADV-004 — Flujo formal de aprobación**
# [ ] **WEB-ADV-005 — Multiidioma**
# [ ] **WEB-ADV-006 — Traducciones por revisión**
# [ ] **WEB-ADV-007 — Sitios adicionales para marcas**
# [ ] **WEB-ADV-008 — Plantillas compartidas entre marcas**
# [ ] **WEB-ADV-009 — Secciones globales reutilizables**
# [ ] **WEB-ADV-010 — Pruebas A/B**
# [ ] **WEB-ADV-011 — Personalización por audiencia**
# [ ] **WEB-ADV-012 — Generación asistida de copy**
# [ ] **WEB-ADV-013 — Sugerencias SEO asistidas**
# [ ] **WEB-ADV-014 — Integraciones con CRM**
# [ ] **WEB-ADV-015 — Integraciones con campañas**
# [ ] **WEB-ADV-016 — Analítica editorial**
# [ ] **WEB-ADV-017 — Historial visual de cambios**
# [ ] **WEB-ADV-018 — Edición colaborativa en tiempo real**

---

# 18. RUTA CRÍTICA

Las siguientes tareas no podrán alterarse de orden sin una decisión arquitectónica explícita:

```text
WEB-AUD
   ↓
WEB-PRD
   ↓
ADR-WEB
   ↓
WEB-DB
   ↓
WEB-RND
   ↓
WEB-PUB
   ↓
WEB-EDT
   ↓
WEB-BLD
   ↓
WEB-PAG
   ↓
WEB-MIG
   ↓
WEB-QA
   ↓
WEB-OPS
```

---

# 19. TRABAJO PARALELIZABLE

Después de aprobar la arquitectura, podrán avanzar en paralelo:

```text
RENDERER ───────────────┐
                       ├── Integración final
EDITOR VISO ────────────┤
                       │
BIBLIOTECA DE MEDIOS ───┤
                       │
CONTENIDO Y FOTOGRAFÍA ─┘
```

No podrán publicarse páginas nuevas hasta que el renderer y el flujo de publicación estén validados.

---

# 20. RIESGOS PRINCIPALES

## RIESGO 1 — Personalización excesiva

**Problema:** permitir demasiadas opciones puede romper la identidad visual.

**Mitigación:**

- variantes aprobadas;
- tokens;
- límites;
- preview;
- validación;
- sin CSS libre.

**Tareas vinculadas:**

- `WEB-PRD-007`
- `ADR-WEB-002`
- `WEB-BLD-008`
- `WEB-BLD-009`

---

## RIESGO 2 — Doble fuente de verdad

**Problema:** contenido editado simultáneamente en CMS legacy y Studio.

**Mitigación:**

- migración por página;
- estado de migración;
- bloqueo del editor legacy;
- adaptador temporal.

**Tareas vinculadas:**

- `ADR-WEB-006`
- `WEB-RND-008`
- `WEB-MIG-016`
- `WEB-MIG-018`

---

## RIESGO 3 — Publicación accidental

**Problema:** guardar un cambio podría afectar producción.

**Mitigación:**

- borrador;
- preview;
- confirmación;
- permisos;
- historial;
- rollback.

**Tareas vinculadas:**

- `ADR-WEB-004`
- `WEB-PUB-005`
- `WEB-PUB-008`
- `WEB-PUB-011`

---

## RIESGO 4 — Medios demasiado pesados

**Problema:** videos e imágenes pueden degradar rendimiento móvil.

**Mitigación:**

- validación;
- compresión;
- tamaños;
- poster;
- lazy loading.

**Tareas vinculadas:**

- `WEB-MED-004`
- `WEB-MED-008`
- `WEB-MED-009`
- `WEB-PERF-003`
- `WEB-PERF-004`

---

## RIESGO 5 — Copia excesiva de Darling

**Problema:** replicar activos o identidad propietaria.

**Mitigación:**

- usar únicamente patrones de UX;
- contenido propio;
- medios propios;
- identidad Vento.

**Tareas vinculadas:**

- `WEB-PAG-*`
- revisión de contenido previa al lanzamiento.

---

## RIESGO 6 — Base de datos sobredimensionada

**Problema:** crear demasiadas tablas o relaciones difíciles de mantener.

**Mitigación:**

- modelo híbrido;
- revisiones JSON;
- entidades empresariales normalizadas;
- ADR previo.

**Tareas vinculadas:**

- `ADR-WEB-001`
- `WEB-ARC-001`
- `WEB-DB-*`

---

# 21. DEFINICIÓN DE MVP

El MVP se considerará completo únicamente cuando:

# [ ] VISO permita editar páginas visualmente.
# [ ] Se puedan agregar y ordenar secciones.
# [ ] Exista preview responsive.
# [ ] Existan borradores.
# [ ] Publicar sea una acción independiente.
# [ ] Exista historial.
# [ ] Exista restauración.
# [ ] Inicio esté migrado.
# [ ] Restaurantes esté migrado.
# [ ] Empleos esté migrado.
# [ ] Ecosistema esté migrado.
# [ ] Eventos esté migrado.
# [ ] Servicios esté migrado.
# [ ] Contacto exista.
# [ ] Header y footer sean administrables.
# [ ] SEO sea administrable.
# [ ] Los medios sean administrables.
# [ ] No existan placeholders visibles.
# [ ] Las páginas críticas funcionen en móvil.
# [ ] Las políticas RLS estén verificadas.
# [ ] Las migraciones estén en `vento-shell`.
# [ ] Exista documentación de operación.

---

# 22. DEFINICIÓN DE PROGRAMA COMPLETO

El programa completo se considerará terminado cuando:

```text
Una persona no técnica:
1. ingresa a VISO;
2. selecciona una página;
3. agrega o modifica secciones;
4. carga medios;
5. revisa escritorio, tablet y móvil;
6. guarda un borrador;
7. genera una vista previa;
8. publica;
9. consulta el historial;
10. restaura una versión anterior;

sin modificar código,
sin acceder directamente a Supabase,
sin hacer un despliegue de Vercel
y sin comprometer la identidad visual del sitio.
```

---

# 23. REGLAS DE ACTUALIZACIÓN DEL PLAN

## 23.1 Identificadores

- Los identificadores nunca se reutilizan.
- Una tarea eliminada se marca `[-]`.
- Una tarea reemplazada debe indicar qué tarea la sustituye.
- No se renumeran tareas aprobadas.

## 23.2 Marcación

Solo se marcará `[x]` cuando esté implementado y validado.

No se considerará completado por:

- existir una tabla vacía;
- existir una pantalla sin funcionalidad;
- compilar;
- tener un componente parcial;
- tener solo infraestructura;
- funcionar únicamente en local.

## 23.3 Evidencia

Cada tarea completada deberá poder relacionarse con:

- archivo;
- migración;
- pantalla;
- prueba;
- captura;
- resultado funcional;
- decisión aprobada.

## 23.4 Actualización por lotes

Para evitar microactualizaciones ineficientes:

- se podrán completar varias tareas sustantivas;
- posteriormente se consolidará el estado;
- cada puerta de fase deberá actualizarse obligatoriamente;
- ninguna brecha podrá quedar sin tarea asignada.

---

# 24. REGISTRO DE CAMBIOS

| Versión      | Fecha      | Cambio                             | Estado    |
| ------------ | ---------- | ---------------------------------- | --------- |
| 2026-07-23.1 | 2026-07-23 | Creación inicial del plan canónico | Propuesta |

---

# 25. PUNTO DE CONTINUIDAD

## FASE ACTUAL

**FASE 1 — Auditoría y línea base**

## PRIMERA TAREA

```text
WEB-AUD-001 — Inventariar todas las rutas públicas
```

## NO SE DEBE HACER TODAVÍA

- No crear migraciones.
- No modificar tablas.
- No reemplazar el CMS.
- No eliminar contenido legacy.
- No reconstruir páginas adicionales.
- No iniciar drag-and-drop.
- No cambiar producción.

## RESULTADO ESPERADO DE LA PRIMERA SESIÓN

Una matriz completa con:

- ruta;
- tipo;
- componente principal;
- fuente de datos;
- contenido editable;
- contenido hardcodeado;
- estado visual;
- estado responsive;
- brechas;
- tarea futura asociada.

---

# 26. DECISIÓN RECOMENDADA

El proyecto deberá ejecutarse como una evolución progresiva:

```text
CMS ACTUAL
    ↓
MODELO VERSIONADO
    ↓
RENDERIZADOR DINÁMICO
    ↓
PREVIEW Y PUBLICACIÓN
    ↓
EDITOR VISUAL
    ↓
MIGRACIÓN PÁGINA POR PÁGINA
    ↓
VISO WEB STUDIO COMPLETO
```

No se recomienda continuar construyendo muchas páginas rígidas antes de implementar el motor dinámico, porque posteriormente habría que desmontarlas para hacerlas administrables.
