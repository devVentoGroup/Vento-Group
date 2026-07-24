# PLAN CANÓNICO DE IMPLEMENTACIÓN — VISO WEB STUDIO + VENTO GROUP WEB

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
| Estado                              | **EN EJECUCIÓN — FASE 2**                                                |
| Fase actual                         | **FASE 2 — Definición funcional de VISO Web Studio**                     |
| Última tarea aprobada               | `WEB-AUD-012 — Consolidar brechas`                                       |
| Siguiente tarea                     | `WEB-PRD-001 — Definir perfiles de usuario`                              |
| Estado de la Fase 1                 | **CERRADA DOCUMENTALMENTE**                                              |
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

## 3. ESTADO PREVIO A LA AUDITORÍA

> Este diagnóstico corresponde a la percepción inicial del proyecto. El estado verificado vigente está definido por `WEB-AUD-001` a `WEB-AUD-012`.

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

## 4. PERCEPCIÓN INICIAL PREVIA A LA AUDITORÍA

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

## 5. PRINCIPIOS CANÓNICOS OBLIGATORIOS

### 5.1 Fuente única de verdad

Este documento será la fuente canónica del proyecto.

Ninguna tarea, decisión, hallazgo, brecha o aplazamiento podrá quedar únicamente descrito en una conversación.

Toda brecha deberá:

1. vincularse a una tarea existente; o
2. generar una nueva tarea con identificador; o
3. quedar marcada como descartada mediante una decisión explícita.

---

### 5.2 Migraciones

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

### 5.3 Separación de responsabilidades

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

### 5.4 Publicación segura

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

### 5.5 Personalización controlada

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

### 5.6 Código y contenido

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

### 5.7 Compatibilidad progresiva

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

### 5.8 Referencia Darling Group

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

## 6. ALCANCE DEL PROGRAMA

### 6.1 Incluido

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

### 6.2 No incluido en el MVP

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

## 7. ARQUITECTURA OBJETIVO

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

## 8. MODELO DE DATOS OBJETIVO

### 8.1 Estrategia seleccionada

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

### 8.2 Tablas objetivo

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

### 8.3 Estructura de una revisión

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

## 9. CATÁLOGO INICIAL DE SECCIONES

### 9.1 Heroes

- `hero.media`
- `hero.carousel`
- `hero.editorial`
- `hero.split`
- `hero.minimal`

### 9.2 Editorial

- `editorial.split`
- `editorial.reverse`
- `editorial.statement`
- `editorial.quote`
- `editorial.rich_text`

### 9.3 Multimedia

- `media.image_banner`
- `media.video_banner`
- `media.gallery_grid`
- `media.gallery_slider`
- `media.parallax`

### 9.4 Restaurantes y espacios

- `venues.showcase`
- `venues.grid`
- `venues.location`
- `venues.features`
- `venues.related`
- `events.spaces_selector`

### 9.5 Cultura y corporativo

- `values.slider`
- `steps.numbered`
- `team.slider`
- `testimonials.slider`
- `stats.grid`
- `apps.ecosystem`

### 9.6 Colecciones dinámicas

- `collection.grid`
- `collection.list`
- `collection.featured`
- `jobs.list`
- `events.list`
- `services.grid`

### 9.7 Conversión

- `cta.banner`
- `cta.split`
- `form.contact`
- `form.event_inquiry`
- `form.job_application`
- `newsletter.signup`

### 9.8 Estructura

- `layout.spacer`
- `layout.divider`
- `layout.anchor`
- `layout.columns`

---

## 10. ESTADOS DE LAS TAREAS

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
3. no tenga brechas críticas abiertas cuya solución corresponda al alcance directo de esa misma tarea;
4. la evidencia haya sido registrada;
5. las nuevas brechas hayan sido asignadas a tareas.

En tareas de auditoría, análisis o definición documental, una brecha descubierta no impide cerrar la tarea cuando:

1. quedó identificada;
2. tiene identificador;
3. tiene tarea propietaria;
4. tiene momento de cierre;
5. tiene evidencia de origen.

La aprobación documental no implica el cierre de la brecha.

---

## 11. FLUJO GENERAL DE IMPLEMENTACIÓN

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

## FASE 1 — AUDITORÍA Y LÍNEA BASE

### Objetivo

Conocer exactamente el estado real antes de modificar arquitectura, base de datos o interfaces.

---

### WEB-AUD-001 — Inventario canónico de rutas públicas

> Auditoría de la estructura pública actual de `ventogroup.co` y del repositorio `devVentoGroup/Vento-Group`.

#### 0. Control documental

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

#### 1. Objetivo de la tarea

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

#### 2. Alcance de la auditoría

##### 2.1 Elementos revisados

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

##### 2.2 Acciones no realizadas

- no se modificó el repositorio;
- no se modificó Vercel;
- no se modificó Supabase;
- no se crearon migraciones;
- no se corrigió el sitemap;
- no se crearon páginas;
- no se modificó la navegación;
- no se cambió producción.

#### 3. Resultado ejecutivo

##### 3.1 Estado general

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

##### 3.2 Conteo

| Tipo                               | Cantidad |
| ---------------------------------- | -------: |
| Páginas públicas estáticas         |        5 |
| Patrones dinámicos                 |        1 |
| Instancias dinámicas verificadas   |        3 |
| Redirecciones públicas             |        1 |
| Rutas técnicas SEO                 |        2 |
| Rutas obligatorias faltantes       |        7 |
| Rutas sujetas a decisión funcional |        4 |

#### 4. Matriz maestra de rutas actuales

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

#### 5. Detalle de rutas actuales

##### 5.1 `WEB-R-001` — Inicio

###### 5.1.1 Definición

| Campo                     | Valor              |
| ------------------------- | ------------------ |
| Ruta                      | `/`                |
| Archivo                   | `src/app/page.tsx` |
| Indexable                 | Sí                 |
| Estado                    | Activa             |
| Administración desde VISO | Parcial            |

###### 5.1.2 Composición actual

1. Hero.
2. Introducción editorial.
3. Showcase de restaurantes.
4. Banner de imagen opcional.
5. Statement editorial.
6. Cierre de ecosistema y tarjetas rápidas.
7. Header y footer globales.

###### 5.1.3 Fuentes de contenido

- `website_blocks` para `home`;
- `website_items.restaurant`;
- `website_items.job`;
- `website_items.service`;
- `website_items.app`;
- textos y enlaces escritos directamente en React.

###### 5.1.4 Limitación principal

VISO puede modificar parte del contenido, pero no puede controlar la estructura completa, el orden ni la existencia de todas las secciones.

###### 5.1.5 Tareas responsables

- `WEB-PAG-001`
- `WEB-PAG-002`
- `WEB-PAG-003`
- `WEB-RND-008`
- `WEB-MIG-004`

##### 5.2 `WEB-R-002` — Restaurantes

###### 5.2.1 Definición

| Campo                     | Valor                           |
| ------------------------- | ------------------------------- |
| Ruta                      | `/restaurantes`                 |
| Archivo                   | `src/app/restaurantes/page.tsx` |
| Indexable                 | Sí                              |
| Estado                    | Activa                          |
| Administración desde VISO | Parcial                         |

###### 5.2.2 Composición actual

1. Hero.
2. Bloque editorial.
3. Banner de imagen.
4. Grilla de restaurantes.
5. CTA relacionado con eventos.

###### 5.2.3 Limitación principal

La estructura continúa definida en React. VISO solo modifica algunos bloques y registros.

###### 5.2.4 Tareas responsables

- `WEB-PAG-010`
- `WEB-PAG-011`
- `WEB-MIG-005`
- `WEB-BLD-011`
- `WEB-BLD-012`

##### 5.3 `WEB-R-003` — Detalle de restaurante

###### 5.3.1 Definición

| Campo                     | Valor                                  |
| ------------------------- | -------------------------------------- |
| Patrón                    | `/restaurantes/[slug]`                 |
| Archivo                   | `src/app/restaurantes/[slug]/page.tsx` |
| Fuente principal          | `website_items.restaurant`             |
| Fuente complementaria     | `website_blocks`                       |
| Slug inexistente          | Ejecuta `notFound()`                   |
| Indexable                 | Sí                                     |
| Administración desde VISO | Parcial                                |

###### 5.3.2 Slugs verificados

```text
/restaurantes/vento-cafe
/restaurantes/saudo
/restaurantes/molka
```

###### 5.3.3 Convenciones legacy detectadas

```text
restaurant:<slug>
restaurant_<slug>
restaurante:<slug>
```

###### 5.3.4 Problemas específicos

- estructura hardcodeada;
- textos provisionales en inglés;
- instrucciones internas que podrían mostrarse en producción;
- CTA `Planear evento` apunta a `/eventos`;
- `/eventos` redirige a `/restaurantes`;
- un fallback puede generar `/restaurantes/restaurante-destacado`.

###### 5.3.5 Tareas responsables

- `WEB-PAG-012`
- `WEB-PAG-013`
- `WEB-PAG-014`
- `WEB-PAG-015`
- `WEB-RND-006`
- `WEB-RND-008`
- `WEB-MIG-003`
- `WEB-MIG-006`
- `WEB-MIG-015`

##### 5.4 `WEB-R-004` — Empleos

###### 5.4.1 Definición

| Campo                     | Valor                      |
| ------------------------- | -------------------------- |
| Ruta                      | `/empleos`                 |
| Archivo                   | `src/app/empleos/page.tsx` |
| Renderer                  | `CategoryPage`             |
| Fuente                    | `website_items.job`        |
| Indexable                 | Sí                         |
| Administración desde VISO | Muy parcial                |

###### 5.4.2 Estado actual

La página funciona como listado genérico y puede mostrar un fallback de `Vacante destacada`.

###### 5.4.3 Brechas

- no existe narrativa de cultura;
- no existe listado profesional;
- no existe detalle de vacante;
- no existe integración con Vento Talento;
- el fallback puede usar CTA `#`;
- la estructura no es administrable.

###### 5.4.4 Tareas responsables

- `WEB-PAG-020`
- `WEB-PAG-021`
- `WEB-PAG-022`
- `WEB-PAG-023`
- `WEB-FRM-010`
- `WEB-MIG-007`
- `WEB-MIG-015`

##### 5.5 `WEB-R-005` — Servicios

###### 5.5.1 Definición

| Campo                     | Valor                               |
| ------------------------- | ----------------------------------- |
| Ruta                      | `/servicios`                        |
| Archivo                   | `src/app/servicios/page.tsx`        |
| Fuente                    | Bloques, servicios y contenido fijo |
| Indexable                 | Sí                                  |
| Administración desde VISO | Parcial                             |

###### 5.5.2 Composición actual

1. Hero.
2. Introducción.
3. Cuatro pilares.
4. Banner.
5. Grilla de servicios.
6. CTA.

###### 5.5.3 Elementos hardcodeados

- Operación.
- Tecnología.
- Formación.
- Consultoría.
- CTA final.
- Parte del contenido editorial.

###### 5.5.4 Tareas responsables

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-PAG-052`
- `WEB-MIG-010`
- `WEB-MIG-015`

##### 5.6 `WEB-R-006` — Ecosistema

###### 5.6.1 Definición

| Campo                     | Valor                         |
| ------------------------- | ----------------------------- |
| Ruta                      | `/ecosistema`                 |
| Archivo                   | `src/app/ecosistema/page.tsx` |
| Renderer                  | `CategoryPage`                |
| Fuente                    | `website_items.app`           |
| Indexable                 | Sí                            |
| Administración desde VISO | Muy parcial                   |

###### 5.6.2 Contenido actual

- Vento Pass.
- Anima.
- Vento OS.

###### 5.6.3 Brechas

- se usa `Ecosistema` y `Nosotros` para referirse a la misma ruta;
- el botón `Entrar a Vento OS` lleva a `/ecosistema`;
- los CTA fallback pueden usar `#`;
- no existen páginas o secciones profundas para cada aplicación;
- falta narrativa institucional.

###### 5.6.4 Tareas responsables

- `WEB-PAG-030`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`
- `WEB-GLB-004`
- `WEB-MIG-008`
- `WEB-MIG-015`

##### 5.7 `WEB-R-007` — Eventos

###### 5.7.1 Definición

| Campo               | Valor                      |
| ------------------- | -------------------------- |
| Ruta                | `/eventos`                 |
| Archivo             | `src/app/eventos/page.tsx` |
| Tipo                | Redirección                |
| Destino             | `/restaurantes`            |
| Página propia       | No                         |
| Incluida en sitemap | Sí                         |
| Utilizada por CTA   | Sí                         |

###### 5.7.2 Flujo actual

```text
/restaurantes/[slug]
        ↓
Planear evento
        ↓
/eventos
        ↓
/restaurantes
```

###### 5.7.3 Conclusión

La ruta está técnicamente disponible, pero funcionalmente no existe.

No debe tratarse como página pública real mientras continúe redirigiendo.

###### 5.7.4 Tareas responsables

- `WEB-PAG-040`
- `WEB-PAG-041`
- `WEB-PAG-042`
- `WEB-GLB-009`
- `WEB-MIG-009`
- `WEB-QA-018`
- `WEB-QA-019`

##### 5.8 `WEB-R-008` — Sitemap

###### 5.8.1 Rutas declaradas

```text
/
/restaurantes
/eventos
/empleos
/servicios
/ecosistema
/restaurantes/[slug]
```

###### 5.8.2 Brechas

1. `/eventos` está incluido aunque redirige.
2. Los restaurantes fallback pueden convertirse en URLs indexables.
3. `lastModified` utiliza la fecha de ejecución y no la modificación real.
4. No incluye rutas legales ni contacto porque no existen.
5. No depende de un catálogo versionado de páginas.
6. No diferencia claramente contenido real y fallback.

###### 5.8.3 Tareas responsables

- `WEB-GLB-009`
- `WEB-RND-015`
- `WEB-MIG-013`
- `WEB-QA-019`

##### 5.9 `WEB-R-009` — Robots

###### 5.9.1 Configuración actual

```text
User-agent: *
Allow: /
Sitemap: /sitemap.xml
```

###### 5.9.2 Evaluación

La configuración es correcta para el sitio público actual.

Las futuras rutas de preview y borradores deberán protegerse con autorización real y `noindex`.

###### 5.9.3 Tareas responsables

- `ADR-WEB-005`
- `WEB-PUB-006`
- `WEB-PUB-007`
- `WEB-SEC-005`

##### 5.10 `WEB-R-010` — Página 404

###### 5.10.1 Estado

No existe `src/app/not-found.tsx`.

Se utiliza la respuesta predeterminada de Next.js.

###### 5.10.2 Tarea responsable

- `WEB-PAG-070`

##### 5.11 `WEB-R-011` — Error general

###### 5.11.1 Estado

No existe `src/app/error.tsx`.

No hay una experiencia Vento para errores de ejecución ni recuperación.

###### 5.11.2 Tarea responsable

- `WEB-PAG-071`

#### 6. Rutas faltantes obligatorias

| ID           | Ruta propuesta          | Necesidad                          | Estado        | Tareas responsables                         |
| ------------ | ----------------------- | ---------------------------------- | ------------- | ------------------------------------------- |
| `WEB-MR-001` | `/contacto`             | Canal público centralizado         | 🔴 No existe   | `WEB-PAG-060`, `WEB-PAG-061`, `WEB-FRM-001` |
| `WEB-MR-002` | `/privacidad`           | Política de privacidad             | 🔴 No existe   | `WEB-PAG-072`, `WEB-GLB-013`                |
| `WEB-MR-003` | `/tratamiento-de-datos` | Protección de datos                | 🔴 No existe   | `WEB-PAG-073`, `WEB-GLB-013`                |
| `WEB-MR-004` | `/terminos`             | Términos del sitio                 | 🔴 No existe   | `WEB-PAG-074`, `WEB-GLB-013`                |
| `WEB-MR-005` | `/cookies`              | Política y consentimiento          | 🔴 No existe   | `WEB-PAG-075`, `WEB-GLB-012`, `WEB-GLB-013` |
| `WEB-MR-006` | `/empleos/[slug]`       | Detalle de vacantes                | 🔴 No existe   | `WEB-PAG-021`, `WEB-PAG-022`, `WEB-PAG-023` |
| `WEB-MR-007` | `/servicios/[slug]`     | Detalle de servicio cuando aplique | 🟡 Por decidir | `WEB-PAG-051`, `WEB-PAG-052`                |

#### 7. Decisiones diferidas con responsable

> Estas decisiones no se resuelven en `WEB-AUD-001`. Quedan asignadas explícitamente a tareas posteriores.

##### 7.1 `WEB-DR-001` — Nosotros y Ecosistema

###### Opciones

```text
A. /nosotros
B. /ecosistema
C. /nosotros + /ecosistema
```

###### Tareas responsables

- `WEB-PRD-009`
- `WEB-PRD-015`
- `WEB-PAG-030`
- `WEB-GLB-004`

##### 7.2 `WEB-DR-002` — Detalle de eventos

###### Opciones

```text
A. Solo /eventos
B. /eventos + /eventos/[slug]
```

###### Tareas responsables

- `WEB-PRD-010`
- `WEB-PRD-015`
- `WEB-PAG-040`
- `WEB-PAG-041`

##### 7.3 `WEB-DR-003` — Páginas de aplicaciones

###### Opciones

```text
A. Secciones dentro de /ecosistema
B. Enlaces externos
C. /ecosistema/vento-pass
   /ecosistema/anima
   /ecosistema/vento-os
```

###### Tareas responsables

- `WEB-PRD-010`
- `WEB-PRD-015`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`

##### 7.4 `WEB-DR-004` — Búsqueda pública

La home declara un `SearchAction`, pero no existe buscador funcional.

###### Decisión requerida

```text
A. Implementar búsqueda real
B. Retirar SearchAction
```

###### Tareas responsables

- `WEB-GLB-008`
- `WEB-QA-020`

#### 8. Navegación pública actual

##### 8.1 Header

```text
/restaurantes
/empleos
/servicios
/ecosistema
mailto:hola@ventogroup.co
```

##### 8.2 Footer

```text
/ecosistema
/empleos
/restaurantes
/servicios
mailto:hola@ventogroup.co
```

##### 8.3 Elementos ausentes

- Eventos.
- Contacto como página.
- Privacidad.
- Tratamiento de datos.
- Términos.
- Cookies.

##### 8.4 Conclusión

La navegación funciona, pero está hardcodeada, es incompleta y no está alineada con un catálogo canónico de páginas.

##### 8.5 Tareas responsables

- `WEB-PRD-009`
- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-GLB-005`
- `WEB-MIG-011`
- `WEB-MIG-012`

#### 9. Mapa actual

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

#### 10. Registro de hallazgos de origen — histórico

> Esta tabla conserva la evidencia original de la auditoría. La única fuente canónica vigente para propiedad, tareas vinculadas, momento de cierre y estado es la matriz consolidada de `WEB-AUD-012`.

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

#### 11. Cambios obligatorios al plan maestro

Se deben agregar las siguientes tareas después de `WEB-PRD-014` y antes de los ADR.

##### 11.1 `WEB-PRD-015 — Definir taxonomía canónica de rutas públicas`

###### Alcance

- URL canónica de Nosotros;
- URL canónica de Ecosistema;
- rutas de aplicaciones;
- detalle de eventos;
- detalle de servicios;
- aliases;
- slugs reservados;
- convención de idioma;
- reglas para rutas dinámicas.

##### 11.2 `WEB-PRD-016 — Definir política canónica de redirecciones`

###### Alcance

- redirecciones permanentes;
- redirecciones temporales;
- cambios de slug;
- rutas eliminadas;
- preservación SEO;
- prevención de ciclos;
- trazabilidad de redirecciones.

#### 12. Evidencia técnica

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

#### 13. Criterios de aprobación cumplidos

`WEB-AUD-001` fue aprobada con los siguientes criterios cumplidos:

- [x] la matriz maestra de rutas;
- [x] la clasificación de `/eventos` como redirección inconsistente;
- [x] la lista de rutas obligatorias faltantes;
- [x] el registro de brechas;
- [x] la incorporación de `WEB-PRD-015`;
- [x] la incorporación de `WEB-PRD-016`;
- [x] que las decisiones definitivas de URLs se resolverán en Fase 2.

#### 14. Estado de cierre vigente

```text
WEB-AUD-001 — APROBADA
```

##### 14.1 Estado vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
```

##### 14.2 No ejecutar todavía

- migraciones;
- cambios en Supabase;
- cambios de navegación;
- creación de páginas;
- corrección de `/eventos`;
- modificaciones en producción;
- implementación del renderer;
- implementación del editor visual.

#### 15. Registro de cambios

| Versión        | Fecha      | Cambio                                    | Estado            |
| -------------- | ---------- | ----------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Primera versión                           | Reemplazada       |
| `2026-07-23.2` | 2026-07-23 | Reorganización de contenido               | Reemplazada       |
| `2026-07-23.3` | 2026-07-23 | Corrección completa de jerarquía Markdown | Aprobada |


### WEB-AUD-002 — Inventario canónico de componentes públicos

> Auditoría de los componentes React, envoltorios globales y composiciones de página que forman actualmente la interfaz pública de `ventogroup.co`.

#### 0. Control documental

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

#### 1. Objetivo de la tarea

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

#### 2. Alcance y método

##### 2.1 Elementos incluidos

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

##### 2.2 Elementos excluidos

Esta tarea no modifica ni redefine todavía:

- schemas de secciones;
- nombres definitivos del `Section Registry`;
- modelo de base de datos;
- contratos JSON;
- diseño visual final;
- permisos de VISO;
- componentes del editor de VISO;
- código de producción.

##### 2.3 Criterios de clasificación

Cada componente se clasifica según:

| Criterio                 | Valores                                                     |
| ------------------------ | ----------------------------------------------------------- |
| Capa                     | Global, primitiva, sección, colección, SEO o composición    |
| Ejecución                | Cliente o servidor                                          |
| Reutilización            | Global, múltiple, específica o sin uso                      |
| Dependencia de contenido | Ninguna, props, `WebsiteItem`, bloques o configuración fija |
| Estado recomendado       | Conservar, refactorizar, convertir, reemplazar o retirar    |

#### 3. Resultado ejecutivo

##### 3.1 Conteo total

| Grupo                                       | Cantidad |
| ------------------------------------------- | -------: |
| Componentes compartidos en `src/components` |       16 |
| Envoltorios globales en `src/app`           |        2 |
| Composiciones React de rutas públicas       |        7 |
| Total de unidades públicas inventariadas    |   **25** |

##### 3.2 Componentes compartidos por ejecución

| Ejecución            | Cantidad | Componentes                                                                                                                                     |
| -------------------- | -------: | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Cliente              |        9 | `SiteHeader`, `SmoothScroll`, `Reveal`, `RevealGrid`, `ImageBanner`, `ItemCarousel`, `HeroMediaCarousel`, `HomeHeroIntro`, `HomeVenuesShowcase` |
| Servidor o agnóstico |        7 | `SiteFooter`, `MediaSlot`, `ItemCard`, `CtaBanner`, `CategoryPage`, `HomeEditorialBand`, `StructuredData`                                       |

##### 3.3 Decisión preliminar por estado

| Estado recomendado                              | Cantidad | Alcance                                     |
| ----------------------------------------------- | -------: | ------------------------------------------- |
| Conservar como primitiva, con ajustes           |        4 | Scroll, animaciones y JSON-LD               |
| Refactorizar o convertir en componente canónico |       10 | Shell, medios, colecciones y secciones      |
| Reemplazar o retirar después de la migración    |        2 | `CategoryPage` y `HomeEditorialBand` actual |

##### 3.4 Hallazgos principales

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

#### 4. Arquitectura pública actual

##### 4.1 Flujo general

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

##### 4.2 Dependencia de contenido

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

##### 4.3 Dependencia visual

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

#### 5. Matriz maestra de componentes compartidos

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

#### 6. Inventario detallado por capa

##### 6.1 Shell y runtime global

###### 6.1.1 `WEB-CMP-001 — SiteHeader`

**Archivo:** `src/components/site-header.tsx`  
**Ejecución:** cliente  
**Uso:** todas las páginas visuales actuales.

###### Responsabilidades actuales

- navegación desktop;
- navegación especial para la home;
- menú overlay;
- ocultamiento al hacer scroll;
- bloqueo del scroll del body;
- cierre con tecla `Escape`;
- enlaces destacados;
- CTA hacia Vento OS.

###### Aspectos correctos

- utiliza `aria-expanded`;
- relaciona el botón con `aria-controls`;
- cierra al cambiar de ruta;
- permite cerrar con `Escape`;
- separa el comportamiento visual de la home.

###### Brechas

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

###### Destino canónico

Componente global controlado por:

- navegación publicada;
- configuración del sitio;
- variantes de header;
- CTA configurable;
- estado de página;
- reglas de accesibilidad.

###### Tareas responsables

- `WEB-GLB-003`
- `WEB-GLB-004`
- `WEB-MIG-011`
- `WEB-QA-011`
- `WEB-QA-012`

###### 6.1.2 `WEB-CMP-002 — SiteFooter`

**Archivo:** `src/components/site-footer.tsx`  
**Ejecución:** servidor  
**Uso:** todas las páginas visuales actuales.

###### Responsabilidades actuales

- marca;
- lista decorativa de restaurantes o categorías;
- navegación;
- correo de contacto;
- campo de suscripción;
- redes sociales;
- copyright.

###### Brechas

- navegación hardcodeada;
- `Contacto` utiliza `mailto:`;
- no contiene enlaces legales;
- el campo de suscripción no está dentro de un formulario funcional;
- el botón `Suscribirse` no tiene manejador ni endpoint;
- Instagram, LinkedIn y YouTube apuntan a las páginas genéricas de cada plataforma;
- el año está escrito directamente como `2026`;
- los contenidos globales no provienen de VISO;
- `venues` recibe únicamente nombres, no enlaces ni entidades estructuradas.

###### Destino canónico

Componente global alimentado por:

- menú de footer;
- configuración corporativa;
- redes oficiales;
- páginas legales;
- formulario real de newsletter;
- marcas o restaurantes seleccionados.

###### Tareas responsables

- `WEB-GLB-005`
- `WEB-GLB-006`
- `WEB-GLB-013`
- `WEB-MIG-012`
- `WEB-FRM-011`

###### 6.1.3 `WEB-CMP-003 — SmoothScroll`

**Archivo:** `src/components/smooth-scroll.tsx`  
**Ejecución:** cliente  
**Uso:** global desde `RootLayout`.

###### Responsabilidades actuales

- cargar Lenis dinámicamente;
- ejecutar scroll suave;
- respetar `prefers-reduced-motion`;
- volver al scroll nativo si falla la dependencia.

###### Aspectos correctos

- importación dinámica;
- degradación segura;
- limpieza del frame y de Lenis;
- respeto por movimiento reducido.

###### Brechas

- duración y easing hardcodeados;
- el comentario indica un comportamiento táctil que no está implementado explícitamente;
- no existe configuración por tema o dispositivo;
- no existen pruebas de interacción.

###### Destino canónico

Conservar como utilidad global, con configuración controlada por código y tokens del sitio. No debe exponerse como bloque editable libre.

###### Tareas responsables

- `WEB-GLB-001`
- `WEB-QA-008`
- `WEB-QA-009`
- `WEB-QA-014`
- `WEB-PERF-005`

##### 6.2 Primitivas de animación

###### 6.2.1 `WEB-CMP-004 — Reveal`

**Archivo:** `src/components/reveal.tsx`  
**Ejecución:** cliente  
**Uso:** home, restaurantes, servicios y detalle de restaurante.

###### Responsabilidades actuales

- detectar entrada en viewport;
- revelar una vez o alternar visibilidad;
- aplicar delay;
- respetar movimiento reducido.

###### Aspectos correctos

- configuración de threshold y root margin;
- desconexión del observer;
- soporte de `prefers-reduced-motion`;
- modo `once` y `toggle`.

###### Brechas

- siempre introduce un `<div>` adicional;
- no permite elegir el elemento semántico;
- el delay se aplica como estilo inline;
- no existe catálogo canónico de animaciones;
- no tiene pruebas.

###### Destino canónico

Conservar como primitiva interna del renderer. Debe aceptar un elemento semántico o patrón `asChild` y usar variantes de animación registradas.

###### Tareas responsables

- `WEB-ARC-005`
- `WEB-RND-011`
- `WEB-QA-001`
- `WEB-QA-014`

###### 6.2.2 `WEB-CMP-005 — RevealGrid`

**Archivo:** `src/components/reveal-grid.tsx`  
**Ejecución:** cliente  
**Uso:** `CategoryPage`, Restaurantes y Servicios.

###### Responsabilidades actuales

- revelar hijos en cascada;
- apoyarse en selectores `nth-child` de `globals.css`;
- respetar movimiento reducido.

###### Brechas

- comportamiento estrechamente acoplado a CSS global;
- delays definidos fuera del contrato del componente;
- no permite configurar patrón o límite del stagger;
- no existen pruebas;
- siempre renderiza un `<div>`.

###### Destino canónico

Conservar como primitiva interna o integrarla dentro de una API canónica de animación para colecciones.

###### Tareas responsables

- `WEB-ARC-005`
- `WEB-RND-011`
- `WEB-QA-001`
- `WEB-QA-014`

##### 6.3 Primitivas y secciones multimedia

###### 6.3.1 `WEB-CMP-006 — MediaSlot`

**Archivo:** `src/components/media-slot.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** componente multimedia central de la web actual.

###### Responsabilidades actuales

- mostrar placeholder si no existe medio;
- inferir imagen o video por URL;
- renderizar `<img>` o `<video>`;
- reproducir videos automáticamente, silenciados y en loop.

###### Brechas críticas

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

###### Destino canónico

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

###### Tareas responsables

- `WEB-RND-010`
- `WEB-RND-017`
- `WEB-MED-005`
- `WEB-MED-006`
- `WEB-MED-007`
- `WEB-MED-008`
- `WEB-MED-009`
- `WEB-PERF-003`
- `WEB-PERF-004`

###### 6.3.2 `WEB-CMP-007 — ImageBanner`

**Archivo:** `src/components/image-banner.tsx`  
**Ejecución:** cliente  
**Uso:** Inicio, Restaurantes y Servicios.

###### Responsabilidades actuales

- banda multimedia full-bleed;
- parallax por scroll;
- eyebrow y título opcionales;
- desactivar movimiento con preferencia reducida.

###### Aspectos correctos

- observación de visibilidad;
- uso de `requestAnimationFrame`;
- limpieza de listeners;
- soporte de imagen o video;
- parallax configurable por prop.

###### Brechas

- depende del `MediaSlot` actual;
- el comportamiento visual no está modelado mediante variantes;
- el parallax no tiene límite canónico por dispositivo;
- no existe focal point;
- no existe control editorial desde VISO;
- cada instancia agrega listeners de scroll y resize.

###### Destino canónico

Convertir en sección registrada:

```text
media.image_banner
```

con variantes, focal point, responsive, overlay y animación controlada.

###### Tareas responsables

- `ADR-WEB-002`
- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-RND-017`
- `WEB-BLD-008`
- `WEB-BLD-010`

###### 6.3.3 `WEB-CMP-008 — HeroMediaCarousel`

**Archivo:** `src/components/hero-media-carousel.tsx`  
**Ejecución:** cliente  
**Uso:** indirecto desde `HomeHeroIntro`.

###### Responsabilidades actuales

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

###### Aspectos correctos

- pausa cuando la pestaña no está visible;
- respeta movimiento reducido;
- carga slide activo y vecinos;
- soporta pointer events;
- limpia listeners y timers;
- dispone de controles con etiquetas ARIA.

###### Brechas

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

###### Destino canónico

Separar en:

1. primitiva de carrusel;
2. renderer multimedia;
3. sección registrada `hero.media_carousel`;
4. configuración validada de autoplay, overlay, CTA y responsive.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-002`
- `WEB-RND-003`
- `WEB-RND-017`
- `WEB-QA-001`
- `WEB-QA-003`
- `WEB-QA-011`
- `WEB-QA-014`
- `WEB-PERF-005`

##### 6.4 Componentes de contenido y colecciones

###### 6.4.1 `WEB-CMP-009 — HomeHeroIntro`

**Archivo:** `src/components/home-hero-intro.tsx`  
**Ejecución:** cliente  
**Uso:** solo Inicio.

###### Responsabilidades actuales

- encapsular el hero de la home;
- ejecutar una secuencia splash;
- mostrar wordmark;
- mostrar enlaces de restaurantes;
- montar `HeroMediaCarousel`;
- controlar fases mediante timers.

###### Brechas

- timings de `1800 ms` y `3200 ms` hardcodeados;
- branding y ruta del logo hardcodeados;
- comportamiento exclusivo de la home;
- depende de clases globales específicas;
- no permite omitir o configurar el splash;
- no existe control editorial desde VISO;
- no tiene mecanismo explícito para evitar repetir el splash por sesión;
- no existen pruebas de temporización.

###### Destino canónico

Convertir en una variante controlada de hero o en una composición de hero + splash con configuración restringida.

###### Tareas responsables

- `WEB-PAG-001`
- `WEB-PAG-002`
- `WEB-PAG-003`
- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-BLD-008`

###### 6.4.2 `WEB-CMP-010 — HomeVenuesShowcase`

**Archivo:** `src/components/home-venues-showcase.tsx`  
**Ejecución:** cliente  
**Uso:** solo Inicio.

###### Responsabilidades actuales

- selector de restaurantes;
- carrusel circular;
- media activa;
- descripción;
- características;
- ubicación;
- disponibilidad;
- CTA.

###### Aspectos correctos

- tabs con `aria-selected`;
- navegación anterior y siguiente;
- estado vacío controlado;
- uso de datos de restaurantes.

###### Brechas críticas

- deriva características dividiendo `body` o `excerpt` por saltos de línea y puntos;
- si no obtiene suficientes elementos, inventa cuatro características fallback;
- etiquetas como `Restaurantes`, `Aspectos destacados`, `Ubicación` y `Disponibilidad` están hardcodeadas;
- mezcla contenido, transformación de datos y presentación;
- no existe un campo estructurado para características;
- depende del `MediaSlot` actual;
- no hay navegación completa por teclado para el tablist;
- no hay esquema de configuración de sección.

###### Destino canónico

Convertir en:

```text
venues.showcase
```

con propiedades estructuradas y fuente dinámica configurable.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-ARC-003`
- `WEB-RND-003`
- `WEB-BLD-011`
- `WEB-BLD-012`
- `WEB-PAG-010`
- `WEB-QA-011`

###### 6.4.3 `WEB-CMP-011 — ItemCard`

**Archivo:** `src/components/item-card.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** colecciones y carruseles.

###### Responsabilidades actuales

- mostrar medio;
- título;
- ubicación y horario;
- descripción;
- acción.

###### Brechas

- depende directamente del tipo legacy `WebsiteItem`;
- aplica la misma presentación a restaurantes, empleos, servicios y aplicaciones;
- utiliza `<a>` para rutas internas;
- externalidad solo se detecta mediante `http` o `https`;
- puede mostrar el fallback `Completa este bloque desde VISO.`;
- no tiene variantes de tarjeta;
- no modela estados vacío, deshabilitado o borrador;
- no existe esquema de campos por categoría.

###### Destino canónico

Refactorizar como primitiva de colección con variantes tipadas:

- venue;
- job;
- service;
- app;
- editorial.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-ARC-003`
- `WEB-RND-002`
- `WEB-RND-009`
- `WEB-BLD-011`
- `WEB-MIG-015`

###### 6.4.4 `WEB-CMP-012 — ItemCarousel`

**Archivo:** `src/components/item-carousel.tsx`  
**Ejecución:** cliente  
**Uso:** restaurantes relacionados en detalle.

###### Responsabilidades actuales

- rail horizontal;
- botones anterior y siguiente;
- desplazamiento suave;
- render de `ItemCard`.

###### Brechas

- controles visibles `Prev` y `Next` en inglés;
- no calcula estado inicial o final;
- no deshabilita botones;
- no anuncia posición;
- no existe navegación estructurada por teclado;
- no soporta variantes;
- depende directamente de `WebsiteItem`;
- no tiene pruebas.

###### Destino canónico

Convertir en variante de colección:

```text
collection.carousel
```

basada en una primitiva de carrusel compartida.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-RND-009`
- `WEB-QA-001`
- `WEB-QA-011`

###### 6.4.5 `WEB-CMP-013 — CtaBanner`

**Archivo:** `src/components/cta-banner.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** Restaurantes y Servicios.

###### Responsabilidades actuales

- título;
- texto opcional;
- CTA interno o externo.

###### Aspectos correctos

- interfaz pequeña;
- reutilizable;
- distingue enlaces externos básicos;
- puede renderizarse sin CTA.

###### Brechas

- no dispone de variantes;
- no soporta medio, fondo o alineación;
- no valida URLs;
- enlaces HTTP externos no abren necesariamente en una nueva pestaña;
- no existe esquema para builder;
- el estilo depende enteramente de CSS global.

###### Destino canónico

Convertir en:

```text
cta.banner
```

con variantes controladas y contrato de enlaces.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-002`
- `WEB-RND-003`
- `WEB-BLD-007`
- `WEB-BLD-008`

###### 6.4.6 `WEB-CMP-014 — CategoryPage`

**Archivo:** `src/components/category-page.tsx`  
**Ejecución:** servidor  
**Uso:** Empleos y Ecosistema.

###### Responsabilidades actuales

- crear hero desde el primer item;
- generar JSON-LD de colección;
- mostrar grilla de tarjetas;
- montar header y footer;
- incluir un botón de regreso al inicio.

###### Brechas críticas

- fuerza el mismo diseño para dominios funcionales distintos;
- el primer item se utiliza como medio principal;
- si cambia el orden, cambia el hero;
- no soporta bloques editoriales;
- no soporta variantes de página;
- no soporta CTA contextual;
- el botón principal siempre vuelve a `/`;
- importa shell global dentro de una composición genérica;
- no puede evolucionar directamente hacia un page builder.

###### Destino canónico

Reemplazar por `PageRenderer` y secciones registradas. No debe sobrevivir como plantilla universal.

###### Tareas responsables

- `WEB-RND-004`
- `WEB-RND-005`
- `WEB-PAG-020`
- `WEB-PAG-030`
- `WEB-MIG-020`

###### 6.4.7 `WEB-CMP-015 — HomeEditorialBand`

**Archivo:** `src/components/editorial-band.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso confirmado:** ninguno en la composición vigente.

###### Responsabilidades previstas

- imagen;
- eyebrow;
- título;
- cuerpo;
- CTA;
- orientación normal o inversa.

###### Brechas

- componente legacy sin uso confirmado;
- depende del tipo `EditorialBand`;
- contiene fallback en inglés `Editorial section`;
- CTA siempre utiliza `Link`;
- no forma parte de un registro de secciones;
- se solapa con la estructura editorial escrita directamente en la home.

###### Destino canónico

No conservar el componente actual como fuente de verdad.

Su patrón puede servir de referencia para:

```text
editorial.split
editorial.reverse
```

Después de la migración deberá retirarse.

###### Tareas responsables

- `WEB-ARC-002`
- `WEB-RND-003`
- `WEB-MIG-020`

##### 6.5 SEO técnico

###### 6.5.1 `WEB-CMP-016 — StructuredData`

**Archivo:** `src/components/structured-data.tsx`  
**Ejecución:** servidor o agnóstico  
**Uso:** Inicio, páginas de colección y detalle de restaurante.

###### Responsabilidades actuales

- serializar un objeto o arreglo;
- insertarlo como `application/ld+json`.

###### Aspectos correctos

- interfaz pequeña;
- reutilizable;
- compatible con varios schemas.

###### Brechas

- acepta cualquier `Record<string, unknown>`;
- no valida schemas;
- no limita propiedades;
- usa `dangerouslySetInnerHTML`;
- serializa con `JSON.stringify` sin escape explícito de `<`;
- no existe prueba frente a contenido proveniente del CMS;
- la home declara un `SearchAction` sin búsqueda funcional.

###### Destino canónico

Conservar como utilidad técnica, pero reemplazar la entrada libre por builders y schemas validados para:

- Organization;
- WebSite;
- Restaurant;
- JobPosting;
- Event;
- BreadcrumbList;
- ItemList.

###### Tareas responsables

- `WEB-RND-014`
- `WEB-SEC-016`
- `WEB-QA-020`

#### 7. Envoltorios globales de aplicación

##### 7.1 `WEB-APP-001 — RootLayout`

**Archivo:** `src/app/layout.tsx`  
**Ejecución:** servidor.

###### Responsabilidades actuales

- idioma `es`;
- carga de Cormorant Garamond;
- carga de Manrope;
- metadata global;
- estilos globales;
- montaje de `SmoothScroll`;
- script para impedir cambios por rueda en inputs numéricos.

###### Brechas

- tipografías y pesos hardcodeados;
- metadata global hardcodeada;
- canonical global `/`;
- no consume tema o configuración del sitio;
- contiene un script global para inputs numéricos que no pertenece claramente al shell público;
- no monta header ni footer;
- no define providers para preview, theme o publicaciones futuras.

###### Destino canónico

Mantener como shell técnico y mover la configuración editable a resolutores seguros del sitio.

###### Tareas responsables

- `WEB-GLB-001`
- `WEB-GLB-007`
- `WEB-RND-013`
- `WEB-ARC-005`

##### 7.2 `WEB-APP-002 — Template`

**Archivo:** `src/app/template.tsx`  
**Ejecución:** servidor.

###### Responsabilidades actuales

- remontar el contenido en cada navegación;
- aplicar transición de entrada mediante `page-transition`.

###### Brechas

- comportamiento completamente dependiente de CSS global;
- no tiene variantes;
- no diferencia navegación normal, preview o movimiento reducido desde el componente;
- no tiene pruebas de regresión visual.

###### Destino canónico

Conservar como infraestructura de transición, sin exponer CSS libre al editor.

###### Tareas responsables

- `WEB-RND-011`
- `WEB-QA-006`
- `WEB-QA-014`

#### 8. Composiciones de rutas públicas

| ID                 | Composición            | Archivo                                | Componentes principales                              | Estado futuro                            |
| ------------------ | ---------------------- | -------------------------------------- | ---------------------------------------------------- | ---------------------------------------- |
| `WEB-PAGE-CMP-001` | `HomePage`             | `src/app/page.tsx`                     | Header, hero, venues, banner, reveal, media, footer  | Reemplazar composición fija por renderer |
| `WEB-PAGE-CMP-002` | `RestaurantesPage`     | `src/app/restaurantes/page.tsx`        | Header, media, editorial, banner, cards, CTA, footer | Reemplazar por blueprint dinámico        |
| `WEB-PAGE-CMP-003` | `RestaurantDetailPage` | `src/app/restaurantes/[slug]/page.tsx` | Header, media, reveal, carousel, JSON-LD, footer     | Convertir en plantilla dinámica          |
| `WEB-PAGE-CMP-004` | `EmpleosPage`          | `src/app/empleos/page.tsx`             | `CategoryPage`                                       | Reemplazar completamente                 |
| `WEB-PAGE-CMP-005` | `ServiciosPage`        | `src/app/servicios/page.tsx`           | Header, media, pillars, cards, CTA, footer           | Reemplazar por renderer                  |
| `WEB-PAGE-CMP-006` | `EcosistemaPage`       | `src/app/ecosistema/page.tsx`          | `CategoryPage`                                       | Reemplazar completamente                 |
| `WEB-PAGE-CMP-007` | `EventosPage`          | `src/app/eventos/page.tsx`             | Redirección, sin UI                                  | Sustituir cuando se implemente Eventos   |

##### 8.1 Conclusión sobre las composiciones

Las páginas actuales no se construyen mediante un sistema de secciones.

Cada archivo de ruta:

- elige componentes manualmente;
- define el orden manualmente;
- contiene textos manualmente;
- resuelve fallbacks manualmente;
- monta header y footer manualmente;
- controla parte de su SEO manualmente.

Por lo tanto, ninguna composición actual debe convertirse en la arquitectura definitiva del builder.

#### 9. Matriz de uso por página

##### 9.1 Inicio

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

##### 9.2 Restaurantes

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

##### 9.3 Detalle de restaurante

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

##### 9.4 Empleos y Ecosistema

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

##### 9.5 Servicios

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

#### 10. Arquitectura canónica objetivo

##### 10.1 Capas propuestas

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

##### 10.2 Mapeo actual hacia destino

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

#### 11. Registro de hallazgos de origen — histórico

> Esta tabla conserva la evidencia original de la auditoría. La única fuente canónica vigente para propiedad, tareas vinculadas, momento de cierre y estado es la matriz consolidada de `WEB-AUD-012`.

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

#### 12. Cambios obligatorios al plan maestro

##### 12.1 Marcar tarea previa

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
```

##### 12.2 Agregar `WEB-ARC-005`

Ubicación recomendada: después de `WEB-ARC-004`.

```text
[ ] WEB-ARC-005 — Definir arquitectura canónica de componentes públicos
```

###### Alcance

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

##### 12.3 Agregar `WEB-RND-017`

Ubicación recomendada: dentro de la Fase 5, relacionado con `WEB-RND-010`.

```text
[ ] WEB-RND-017 — Crear MediaRenderer canónico
```

###### Alcance

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

##### 12.4 Agregar `WEB-FRM-011`

Ubicación recomendada: después de `WEB-FRM-010`.

```text
[ ] WEB-FRM-011 — Implementar suscripción de newsletter o retirar la interfaz
```

###### Alcance

- decidir si Vento Group usará newsletter;
- formulario funcional;
- consentimiento;
- validación;
- almacenamiento o proveedor;
- confirmación;
- errores;
- eliminación del campo actual si no se implementa.

##### 12.5 Agregar `WEB-SEC-016`

Ubicación recomendada: después de `WEB-SEC-015`.

```text
[ ] WEB-SEC-016 — Endurecer serialización y validación de JSON-LD
```

###### Alcance

- schemas tipados;
- escape de caracteres peligrosos;
- validación de URLs;
- exclusión de campos no permitidos;
- pruebas con contenido del CMS;
- prevención de cierre prematuro de scripts.

##### 12.6 Agregar `WEB-MIG-020`

Ubicación recomendada: después de `WEB-MIG-019`.

```text
[ ] WEB-MIG-020 — Retirar componentes y composiciones públicas legacy
```

###### Alcance

- retirar `CategoryPage`;
- retirar `HomeEditorialBand` actual;
- retirar adaptadores sin uso;
- eliminar fallbacks visibles;
- eliminar imports muertos;
- confirmar que ninguna página depende del código retirado.

#### 13. Criterios de aprobación cumplidos

`WEB-AUD-002` fue aprobada con los siguientes criterios cumplidos:

- [x] el inventario de 16 componentes compartidos;
- [x] el inventario de 2 envoltorios globales;
- [x] el inventario de 7 composiciones de ruta;
- [x] la clasificación conservar/refactorizar/reemplazar;
- [x] el mapa de dependencias actual;
- [x] el mapeo hacia la arquitectura objetivo;
- [x] el registro `WEB-GAP-013` a `WEB-GAP-030`;
- [x] la incorporación de `WEB-ARC-005`;
- [x] la incorporación de `WEB-RND-017`;
- [x] la incorporación de `WEB-FRM-011`;
- [x] la incorporación de `WEB-SEC-016`;
- [x] la incorporación de `WEB-MIG-020`.

#### 14. Estado de cierre vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
```

Estado de esta tarea:

```text
WEB-AUD-002 — APROBADA
```

##### 14.1 No ejecutar todavía

- refactor de componentes;
- eliminación de componentes legacy;
- creación del `Section Registry`;
- migraciones;
- cambios en Supabase;
- cambios en navegación;
- cambios en producción;
- implementación de newsletter;
- reemplazo de la capa multimedia.

##### 14.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
```

#### 15. Evidencia técnica consultada

##### 15.1 Componentes compartidos

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

##### 15.2 Infraestructura y composiciones

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

##### 15.3 Verificaciones complementarias

- búsqueda de usos por nombre de componente;
- búsqueda de archivos `.test.tsx`;
- búsqueda de llamadas `describe(...)`;
- revisión de dependencias declaradas;
- revisión de fronteras `"use client"`.

#### 16. Registro de cambios

| Versión        | Fecha      | Cambio                                                            | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-002` con jerarquía Markdown validada | Aprobada |


### WEB-AUD-003 — Inventario canónico de contenido hardcodeado

> Auditoría del contenido fijo incorporado directamente en el código de `ventogroup.co`, incluyendo textos, CTA, correos, enlaces, activos, SEO, metadatos, placeholders y fallbacks.

#### 0. Control documental

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

#### 1. Objetivo de la tarea

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

#### 2. Definición de contenido hardcodeado

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

#### 3. Contenido no considerado editorial

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

#### 4. Clasificación canónica de contenido

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

#### 5. Resultado ejecutivo

##### 5.1 Hallazgos cuantificables

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

##### 5.2 Riesgos principales

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

##### 5.3 Conclusión

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

#### 6. Inventario maestro por fuente

##### 6.1 Configuración global y metadata raíz

###### 6.1.1 `WEB-HC-GLOBAL-001 — Metadata global`

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

###### 6.1.2 `WEB-HC-GLOBAL-002 — Tipografías globales`

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

###### 6.1.3 `WEB-HC-GLOBAL-003 — Dominio fallback`

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

##### 6.2 Header

###### 6.2.1 `WEB-HC-HEADER-001 — Navegación principal`

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

###### 6.2.2 `WEB-HC-HEADER-002 — Destacados del menú`

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

###### 6.2.3 `WEB-HC-HEADER-003 — Navegación exclusiva de Inicio`

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

###### 6.2.4 `WEB-HC-HEADER-004 — Marca y microcopia`

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

###### 6.2.5 `WEB-HC-HEADER-005 — Wordmark`

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

##### 6.3 Footer

###### 6.3.1 `WEB-HC-FOOTER-001 — Navegación`

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

###### 6.3.2 `WEB-HC-FOOTER-002 — Suscripción`

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

###### 6.3.3 `WEB-HC-FOOTER-003 — Redes sociales`

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

###### 6.3.4 `WEB-HC-FOOTER-004 — Copyright`

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

###### 6.3.5 `WEB-HC-FOOTER-005 — Wordmark`

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

##### 6.4 Página de Inicio

###### 6.4.1 `WEB-HC-HOME-001 — SEO`

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

###### 6.4.2 `WEB-HC-HOME-002 — Tarjetas rápidas`

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

###### 6.4.3 `WEB-HC-HOME-003 — Datos estructurados`

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

###### 6.4.4 `WEB-HC-HOME-004 — Introducción editorial`

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

###### 6.4.5 `WEB-HC-HOME-005 — Statement editorial`

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

###### 6.4.6 `WEB-HC-HOME-006 — Cierre de Ecosistema`

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

##### 6.5 Página de Restaurantes

###### 6.5.1 `WEB-HC-REST-001 — SEO`

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

###### 6.5.2 `WEB-HC-REST-002 — Hero`

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

###### 6.5.3 `WEB-HC-REST-003 — Experiencia editorial`

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

###### 6.5.4 `WEB-HC-REST-004 — Banner y portafolio`

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

###### 6.5.5 `WEB-HC-REST-005 — CTA de eventos`

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

##### 6.6 Detalle de restaurante

###### 6.6.1 `WEB-HC-RDET-001 — SEO y fallback`

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

###### 6.6.2 `WEB-HC-RDET-002 — Hero y acciones`

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

###### 6.6.3 `WEB-HC-RDET-003 — Galería`

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

###### 6.6.4 `WEB-HC-RDET-004 — Storytelling instructivo`

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

###### 6.6.5 `WEB-HC-RDET-005 — Datos y características`

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

###### 6.6.6 `WEB-HC-RDET-006 — Restaurantes relacionados`

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

##### 6.7 Página de Empleos

###### 6.7.1 `WEB-HC-JOBS-001 — SEO y hero`

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

##### 6.8 Página de Servicios

###### 6.8.1 `WEB-HC-SERV-001 — SEO`

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

###### 6.8.2 `WEB-HC-SERV-002 — Catálogo de pilares`

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

###### 6.8.3 `WEB-HC-SERV-003 — Hero e introducción`

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

###### 6.8.4 `WEB-HC-SERV-004 — Banner, colección y CTA`

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

##### 6.9 Página de Ecosistema

###### 6.9.1 `WEB-HC-ECO-001 — SEO y hero`

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

##### 6.10 Componentes reutilizables

###### 6.10.1 `WEB-HC-CMP-001 — CategoryPage`

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

###### 6.10.2 `WEB-HC-CMP-002 — ItemCard`

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

###### 6.10.3 `WEB-HC-CMP-003 — MediaSlot`

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

###### 6.10.4 `WEB-HC-CMP-004 — HomeHeroIntro`

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

###### 6.10.5 `WEB-HC-CMP-005 — HomeVenuesShowcase`

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

###### 6.10.6 `WEB-HC-CMP-006 — HeroMediaCarousel`

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

###### 6.10.7 `WEB-HC-CMP-007 — ItemCarousel`

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

###### 6.10.8 `WEB-HC-CMP-008 — HomeEditorialBand`

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

##### 6.11 Fallbacks de `src/lib/content.ts`

###### 6.11.1 `WEB-HC-FB-001 — Bloques fallback`

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

###### 6.11.2 `WEB-HC-FB-002 — Aplicaciones fallback`

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

###### 6.11.3 `WEB-HC-FB-003 — Restaurante fallback`

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

###### 6.11.4 `WEB-HC-FB-004 — Vacante fallback`

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

###### 6.11.5 `WEB-HC-FB-005 — Servicio fallback`

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

###### 6.11.6 `WEB-HC-FB-006 — Evento fallback`

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

##### 6.12 Resolución de enlaces por categoría

###### 6.12.1 `WEB-HC-LINK-001 — getItemHref`

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

#### 7. Inventario de contactos, enlaces y activos

##### 7.1 Correos hardcodeados

| Correo                   | Uso actual                                           | Fuente objetivo                       |
| ------------------------ | ---------------------------------------------------- | ------------------------------------- |
| `hola@ventogroup.co`     | Contacto general, header, footer, Inicio y Servicios | Configuración corporativa             |
| `reservas@ventogroup.co` | CTA de Restaurantes                                  | Configuración de reservas o sede      |
| `eventos@ventogroup.co`  | CTA de eventos                                       | Formulario y configuración de eventos |

##### 7.2 Redes hardcodeadas

| Plataforma | URL actual                   | Estado   |
| ---------- | ---------------------------- | -------- |
| Instagram  | `https://www.instagram.com/` | Genérica |
| LinkedIn   | `https://www.linkedin.com/`  | Genérica |
| YouTube    | `https://www.youtube.com/`   | Genérica |

##### 7.3 Activos hardcodeados

| Activo          | Ruta                                 | Referencias |
| --------------- | ------------------------------------ | ----------: |
| Wordmark blanco | `/branding/vento-wordmark-white.svg` |           5 |

##### 7.4 Enlaces muertos o engañosos

| Valor                                          | Problema                       |
| ---------------------------------------------- | ------------------------------ |
| `#`                                            | Se utiliza en 7 items fallback |
| `/eventos`                                     | Redirige a `/restaurantes`     |
| `/ecosistema` para “Entrar/Acceder a Vento OS” | No abre Vento OS               |
| Redes genéricas                                | No llevan a Vento Group        |
| Suscribirse                                    | No ejecuta ninguna acción      |
| `SearchAction`                                 | Declara búsqueda inexistente   |

#### 8. Contenido que debe permanecer controlado por código

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

#### 9. Contenido que debe salir del código

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

#### 10. Política objetivo de fallback

##### 10.1 Principio

El sitio público no debe inventar contenido empresarial cuando no existe una fuente publicada válida.

##### 10.2 Comportamiento objetivo

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

##### 10.3 Fallbacks permitidos

Solo se permiten fallbacks técnicos y no editoriales:

- imagen neutra aprobada cuando el diseño lo requiera;
- mensaje de error;
- estado vacío;
- navegación de recuperación;
- contenido mínimo legalmente requerido;
- última versión publicada válida.

#### 11. Registro de hallazgos de origen — histórico

> Esta tabla conserva la evidencia original de la auditoría. La única fuente canónica vigente para propiedad, tareas vinculadas, momento de cierre y estado es la matriz consolidada de `WEB-AUD-012`.

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

#### 12. Cambios obligatorios al plan maestro

##### 12.1 Marcar tareas previas

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
```

##### 12.2 Agregar `ADR-WEB-011`

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

##### 12.3 Agregar `WEB-ARC-006`

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

##### 12.4 Agregar `WEB-MIG-021`

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

##### 12.5 Agregar `WEB-QA-021`

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

#### 13. Criterios de aprobación cumplidos

`WEB-AUD-003` fue aprobada con los siguientes criterios cumplidos:

- [x] la clasificación de contenido hardcodeado;
- [x] el inventario global, por página y por componente;
- [x] el inventario de 6 bloques fallback;
- [x] el inventario de 7 items fallback;
- [x] la clasificación de los 13 fallbacks publicados como brecha crítica;
- [x] el inventario de correos, redes y activos;
- [x] la separación entre contenido editable y microcopia técnica;
- [x] la política objetivo de fallback;
- [x] el registro `WEB-GAP-031` a `WEB-GAP-048`;
- [x] la incorporación de `ADR-WEB-011`;
- [x] la incorporación de `WEB-ARC-006`;
- [x] la incorporación de `WEB-MIG-021`;
- [x] la incorporación de `WEB-QA-021`.

#### 14. Estado de cierre vigente

Estado del bloque:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
```

Estado de esta tarea:

```text
WEB-AUD-003 — APROBADA
```

##### 14.1 No ejecutar todavía

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

##### 14.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
```

#### 15. Evidencia técnica consultada

##### 15.1 Configuración y contenido

- `src/app/layout.tsx`
- `src/lib/seo.ts`
- `src/lib/content.ts`

##### 15.2 Páginas públicas

- `src/app/page.tsx`
- `src/app/restaurantes/page.tsx`
- `src/app/restaurantes/[slug]/page.tsx`
- `src/app/empleos/page.tsx`
- `src/app/servicios/page.tsx`
- `src/app/ecosistema/page.tsx`
- `src/app/eventos/page.tsx`

##### 15.3 Componentes

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

##### 15.4 Búsquedas complementarias

- `mailto:`;
- `placeholder`;
- `action_url: "#"`;
- `/branding/`;
- URLs `https://`;
- metadata;
- textos fallback;
- rutas y CTA.

#### 16. Registro de cambios

| Versión        | Fecha      | Cambio                                                            | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-003` con jerarquía Markdown validada | Aprobada |


### WEB-AUD-004 — Inventario canónico de contenido administrable

> Auditoría de las capacidades reales de administración de contenido de `ventogroup.co` mediante `website_blocks`, `website_items`, galerías, medios y los editores actuales de VISO.

#### 0. Control documental

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

#### 1. Objetivo de la tarea

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

#### 2. Fuentes auditadas

##### 2.1 Base de datos activa

Se consultaron directamente:

- `public.website_blocks`;
- `public.website_items`;
- `storage.buckets`;
- `storage.objects`;
- políticas RLS de las tablas CMS;
- políticas de `storage.objects`.

##### 2.2 Repositorio canónico de migraciones

Se revisaron:

- `supabase/migrations/20260327110000_website_cms.sql`;
- `supabase/migrations/20260327120000_website_media_storage.sql`;
- `supabase/migrations/20260519193000_harden_website_media_storage.sql`.

##### 2.3 Aplicación administradora

Se revisaron:

- `/website-cms`;
- creación y edición de bloques;
- creación y edición de items;
- administración de restaurantes;
- edición del detalle de restaurante;
- subida de medios;
- importación desde Negocios.

##### 2.4 Web pública

Se revisaron:

- `src/lib/content.ts`;
- `src/lib/supabase.ts`;
- consumo de bloques;
- consumo de items;
- consumo de galerías;
- resolución de contenido publicado;
- comportamiento de fallback.

#### 3. Definiciones canónicas de esta auditoría

##### 3.1 Administrable

Un contenido se considera administrable cuando:

1. existe una interfaz en VISO para crearlo o modificarlo;
2. la modificación se persiste en Supabase;
3. la web pública consulta ese dato;
4. el cambio puede afectar el contenido visible sin modificar código.

##### 3.2 Parcialmente administrable

Un contenido es parcialmente administrable cuando:

- puede modificarse el dato, pero no la estructura;
- existe un número fijo de slots;
- la web ignora algunos campos;
- la interfaz expone claves técnicas;
- la edición afecta directamente contenido publicado;
- no existe validación suficiente;
- el contenido depende de una composición escrita en React.

##### 3.3 No administrable

Un contenido no es administrable cuando:

- permanece hardcodeado;
- no tiene editor;
- no se persiste;
- se guarda, pero la web pública no lo consume;
- solo puede cambiarse mediante código o migración.

#### 4. Resultado ejecutivo

##### 4.1 Estado actual de datos

| Fuente           |  Total | Publicados | Ocultos |
| ---------------- | -----: | ---------: | ------: |
| `website_blocks` |      7 |          7 |       0 |
| `website_items`  |      9 |          9 |       0 |
| **Total CMS**    | **16** |     **16** |   **0** |

##### 4.2 Estado por dominio

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

##### 4.3 Conclusión principal

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

#### 5. Arquitectura administrativa actual

##### 5.1 Flujo de bloques

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

##### 5.2 Flujo de items

```text
VISO /website-cms/items
        ↓
public.website_items
        ↓
src/lib/content.ts
        ↓
ItemCard / CategoryPage / páginas específicas
```

##### 5.3 Flujo de restaurantes

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

##### 5.4 Flujo de medios

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

#### 6. `website_blocks`

##### 6.1 Esquema actual

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

##### 6.2 Restricciones actuales

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

##### 6.3 Capacidades actuales en VISO

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

##### 6.4 Limitaciones de la interfaz

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

##### 6.5 Consumo público

La web pública:

- consulta por `page_slug`;
- filtra `is_published = true`;
- ordena por `sort_order`;
- busca claves concretas desde el código;
- ignora bloques desconocidos;
- utiliza fallbacks para Home si no hay filas o la consulta falla.

##### 6.6 Estado real de `website_blocks`

###### 6.6.1 Conteo

| `page_slug`                        | Tipo            | Total | Publicados | Con medio |
| ---------------------------------- | --------------- | ----: | ---------: | --------: |
| `home`                             | `hero`          |     1 |          1 |         0 |
| `home`                             | `media`         |     2 |          2 |         0 |
| `restaurant:restaurante-destacado` | `detail_hero`   |     1 |          1 |         0 |
| `restaurant:restaurante-destacado` | `gallery_media` |     3 |          3 |         0 |

###### 6.6.2 Bloques de Home

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

###### 6.6.3 Bloques de detalle placeholder

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

##### 6.7 Diagnóstico

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

##### 6.8 Tareas responsables

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

#### 7. `website_items`

##### 7.1 Esquema actual

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

##### 7.2 Capacidades actuales en VISO

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

##### 7.3 Publicación actual

Al crear un item:

- `Publicar de inmediato` aparece marcado por defecto;
- guardar un item publicado modifica directamente la fila que consume producción;
- no se crea una revisión;
- no existe aprobación;
- no existe preview privado;
- no existe rollback.

`is_published = false` funciona únicamente como ocultamiento de la fila. No constituye un sistema real de borradores.

##### 7.4 Modelo genérico

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

##### 7.5 Estado real de `website_items`

| Categoría   | Total | Publicados | Con imagen | Con body | Con ubicación | Con horario | Acción válida | Acción `#` |
| ----------- | ----: | ---------: | ---------: | -------: | ------------: | ----------: | ------------: | ---------: |
| App         |     3 |          3 |          0 |        0 |             0 |           0 |             0 |          3 |
| Evento      |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |
| Vacante     |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |
| Restaurante |     3 |          3 |          2 |        0 |             3 |           0 |             0 |          0 |
| Servicio    |     1 |          1 |          0 |        0 |             0 |           0 |             0 |          1 |

##### 7.6 Diagnóstico

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

##### 7.7 Tareas responsables

- `ADR-WEB-001`
- `WEB-ARC-003`
- `WEB-DB-011`
- `WEB-RND-009`
- `WEB-MIG-001`
- `WEB-MIG-015`
- `WEB-MIG-022`

#### 8. Galerías

##### 8.1 Modelo actual

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

##### 8.2 Capacidad actual

VISO permite por restaurante:

- hasta 3 medios adicionales;
- imagen o video;
- título opcional;
- mostrar u ocultar cada slot;
- marcar el primer slot como destacado por posición.

##### 8.3 Límites estructurales

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

##### 8.4 Estado real

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

##### 8.5 Diagnóstico

La galería actual es una implementación rígida de formulario, no una colección administrable.

##### 8.6 Tareas responsables

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

#### 9. Medios

##### 9.1 Capacidad de carga actual

El componente `WebsiteMediaUploadField` permite:

- escribir una URL manual;
- seleccionar un archivo;
- enviar un archivo a `/api/viso/upload-website-media`;
- guardar la URL resultante en un input;
- aceptar imágenes o videos según la pantalla.

##### 9.2 Endpoint actual

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

##### 9.3 Tipos permitidos

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

##### 9.4 Estado real del storage

###### Bucket `website-media`

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

###### Bucket `pass-satellite-logos`

| Campo          | Valor                            |
| -------------- | -------------------------------- |
| Existe         | Sí                               |
| Público        | Sí                               |
| Límite         | 5 MB                             |
| Objetos        | 11                               |
| Uso web actual | Logos importados de restaurantes |

##### 9.5 Contradicción crítica de entrega

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

##### 9.6 Origen de la contradicción

La migración inicial creó el bucket como público.

Una migración posterior lo hizo privado con la justificación de que no existía una superficie web pública conectada a la base.

Esa justificación ya no representa la arquitectura actual, porque `ventogroup.co` consume datos de esta base.

##### 9.7 Otras limitaciones

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

##### 9.8 Tareas responsables

- `ADR-WEB-008`
- `WEB-RND-010`
- `WEB-RND-017`
- `WEB-MED-001` a `WEB-MED-013`
- `WEB-MED-014`
- `WEB-SEC-017`
- `WEB-PERF-003`
- `WEB-PERF-004`

#### 10. Restaurantes

##### 10.1 Capacidades actuales

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

##### 10.2 Importación desde Negocios

La importación:

1. consulta satélites activos;
2. genera slug desde el nombre;
3. evita insertar slugs ya existentes;
4. obtiene dirección desde override o `public.sites`;
5. copia nombre, subtítulo, logo, dirección y orden;
6. crea el restaurante como publicado;
7. asigna `Ver restaurante`;
8. no crea sincronización posterior.

##### 10.3 Limitación de sincronización

La importación es unidireccional y puntual.

Después de importar:

- cambiar el nombre en Negocios no actualiza la web;
- cambiar la dirección no actualiza la web;
- cambiar el logo no actualiza la web;
- desactivar el negocio no lo oculta automáticamente;
- no existe `source_id`;
- no existe trazabilidad hacia `pass_satellites`;
- el matching se hace por slug.

##### 10.4 Estado real

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

##### 10.5 Diagnóstico

Restaurantes es el dominio más avanzado del CMS, pero todavía administra una proyección parcial y duplicada de Negocios.

##### 10.6 Tareas responsables

- `WEB-ARC-003`
- `WEB-ARC-007`
- `WEB-PAG-010` a `WEB-PAG-015`
- `WEB-MIG-005`
- `WEB-MIG-006`
- `WEB-MIG-014`
- `WEB-MIG-022`

#### 11. Vacantes

##### 11.1 Capacidades actuales

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

##### 11.2 Limitaciones

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

##### 11.3 Estado real

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

##### 11.4 Diagnóstico

La capacidad CRUD existe, pero no hay una vacante real ni una integración funcional.

##### 11.5 Tareas responsables

- `WEB-PAG-020`
- `WEB-PAG-021`
- `WEB-PAG-022`
- `WEB-PAG-023`
- `WEB-FRM-010`
- `WEB-ARC-007`
- `WEB-MIG-007`
- `WEB-MIG-015`
- `WEB-MIG-022`

#### 12. Eventos

##### 12.1 Capacidades actuales

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

##### 12.2 Limitaciones

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

##### 12.3 Estado real

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

##### 12.4 Diagnóstico

VISO administra filas de evento que no tienen una superficie pública funcional.

##### 12.5 Tareas responsables

- `WEB-PRD-015`
- `WEB-PAG-040`
- `WEB-PAG-041`
- `WEB-PAG-042`
- `WEB-ARC-007`
- `WEB-MIG-009`
- `WEB-MIG-015`
- `WEB-MIG-022`

#### 13. Servicios

##### 13.1 Capacidades actuales

VISO permite:

- crear servicio;
- editar nombre;
- editar descripción;
- editar contexto genérico;
- editar imagen o video;
- editar CTA;
- ordenar;
- publicar u ocultar.

##### 13.2 Limitaciones

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

##### 13.3 Estado real

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

##### 13.4 Diagnóstico

La página pública combina:

- pilares hardcodeados;
- copy hardcodeado;
- un item placeholder administrable.

No existe una fuente canónica única.

##### 13.5 Tareas responsables

- `WEB-PAG-050`
- `WEB-PAG-051`
- `WEB-PAG-052`
- `WEB-ARC-007`
- `WEB-MIG-010`
- `WEB-MIG-015`
- `WEB-MIG-021`
- `WEB-MIG-022`

#### 14. Aplicaciones del ecosistema

##### 14.1 Capacidades actuales

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

##### 14.2 Estado real

| App        | Imagen | Body | Acción    | URL |
| ---------- | ------ | ---- | --------- | --- |
| Vento Pass | No     | No   | Descargar | `#` |
| Anima      | No     | No   | Descargar | `#` |
| Vento OS   | No     | No   | Entrar    | `#` |

##### 14.3 Limitaciones

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

##### 14.4 Tareas responsables

- `WEB-PAG-030`
- `WEB-PAG-031`
- `WEB-PAG-032`
- `WEB-PAG-033`
- `WEB-ARC-007`
- `WEB-MIG-008`
- `WEB-MIG-015`
- `WEB-MIG-022`

#### 15. Modelo de permisos y publicación

##### 15.1 Edición en VISO

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

##### 15.2 Carga de medios

El endpoint de carga aplica una regla distinta:

```text
propietario
gerente_general
```

Esto produce una posible inconsistencia:

- un usuario puede tener acceso al editor;
- pero no necesariamente puede subir archivos.

##### 15.3 Lectura pública de tablas

El estado actual de la base permite lectura de `website_blocks` y `website_items` a usuarios autenticados cuando `is_published = true`.

No se encontró política anónima vigente.

##### 15.4 Dependencia del `service_role`

La web pública crea un cliente de servidor usando:

1. `SUPABASE_SERVICE_ROLE_KEY`, si existe;
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY`, como fallback.

El `service_role` omite RLS.

Con las políticas actuales:

- si producción tiene `service_role`, la web puede leer contenido publicado y no publicado si la consulta no filtra correctamente;
- el código filtra `is_published`, pero la protección depende de la aplicación;
- si falta `service_role` y se usa anon, la lectura puede fallar;
- cuando falla, la web utiliza fallbacks.

##### 15.5 Diagnóstico

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

##### 15.6 Tareas responsables

- `WEB-PRD-001`
- `WEB-PRD-002`
- `WEB-DB-016`
- `WEB-SEC-001`
- `WEB-SEC-002`
- `WEB-SEC-003`
- `WEB-SEC-017`
- `WEB-PUB-006`
- `WEB-PUB-007`

#### 16. Matriz de capacidad administrativa

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

#### 17. Registro canónico de brechas

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

#### 18. Cambios obligatorios al plan maestro

##### 18.1 Marcar tareas previas

Actualizar:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
```

##### 18.2 Agregar `WEB-ARC-007`

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

##### 18.3 Agregar `WEB-MED-014`

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

##### 18.4 Agregar `WEB-SEC-017`

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

##### 18.5 Agregar `WEB-MIG-022`

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

#### 19. Criterios de aprobación cumplidos

`WEB-AUD-004` fue aprobada con los siguientes criterios cumplidos:

- [x] el inventario de `website_blocks`;
- [x] el inventario de `website_items`;
- [x] el estado real de 7 bloques y 9 items;
- [x] que los 16 registros actuales están publicados;
- [x] el diagnóstico de galerías;
- [x] el diagnóstico del bucket `website-media`;
- [x] la contradicción entre bucket privado y `getPublicUrl`;
- [x] el estado real de restaurantes;
- [x] el estado real de vacantes;
- [x] el estado real de eventos;
- [x] el estado real de servicios;
- [x] el estado real de aplicaciones;
- [x] el diagnóstico de permisos y `service_role`;
- [x] el registro `WEB-GAP-049` a `WEB-GAP-071`;
- [x] la incorporación de `WEB-ARC-007`;
- [x] la incorporación de `WEB-MED-014`;
- [x] la incorporación de `WEB-SEC-017`;
- [x] la incorporación de `WEB-MIG-022`.

#### 20. Estado de cierre vigente

Estado del bloque:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
```

Estado de esta tarea:

```text
WEB-AUD-004 — APROBADA
```

##### 20.1 No ejecutar todavía

- ocultar o eliminar placeholders;
- modificar políticas RLS;
- cambiar el bucket;
- subir medios;
- crear migraciones;
- cambiar permisos;
- refactorizar VISO;
- sincronizar Negocios;
- modificar producción.

##### 20.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
```

#### 21. Evidencia técnica consultada

##### 21.1 Migraciones

- `20260327110000_website_cms.sql`
- `20260327120000_website_media_storage.sql`
- `20260519193000_harden_website_media_storage.sql`

##### 21.2 VISO

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

##### 21.3 Web pública

- `src/lib/content.ts`
- `src/lib/supabase.ts`
- páginas públicas auditadas en `WEB-AUD-001`.

##### 21.4 Consultas realizadas

- conteo de bloques e items;
- agrupación por página, tipo y categoría;
- lectura de todos los registros actuales;
- completitud por categoría;
- completitud de bloques;
- configuración de buckets;
- conteo de objetos;
- políticas RLS;
- políticas de Storage.

#### 22. Registro de cambios

| Versión        | Fecha      | Cambio                                                                                          | Estado            |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación inicial de `WEB-AUD-004` con verificación de base activa y jerarquía Markdown validada | Aprobada |


### WEB-AUD-005 — Auditoría canónica de VISO Website CMS

> Auditoría funcional, técnica, de seguridad y experiencia de usuario del CMS actual utilizado para administrar `ventogroup.co` desde VISO.

#### 0. Control documental

| Campo                  | Valor                                                                     |
| ---------------------- | ------------------------------------------------------------------------- |
| Identificador          | `WEB-AUD-005`                                                             |
| Nombre                 | Auditar VISO Website CMS                                                  |
| Fase                   | FASE 1 — Auditoría y línea base                                           |
| Estado                 | APROBADA                                                                  |
| Fecha                  | `2026-07-23`                                                              |
| Repositorio auditado   | `devVentoGroup/vento-viso`                                                |
| Aplicación             | VISO                                                                      |
| Ruta principal         | `/website-cms`                                                            |
| Alcance                | Flujos, campos, permisos, validaciones, errores, UX y acciones peligrosas |
| Cambios en código      | Ninguno                                                                   |
| Cambios en Supabase    | Ninguno                                                                   |
| Cambios en producción  | Ninguno                                                                   |
| Próxima tarea canónica | `WEB-AUD-006 — Auditar Supabase`                                          |

#### 1. Corrección de continuidad

La entrega previa de `WEB-ARC-005` fue realizada fuera de secuencia.

Para efectos del plan canónico:

- `WEB-ARC-005` **no queda aprobada**;
- `WEB-ARC-005` **no debe marcarse como completada**;
- su archivo puede conservarse únicamente como borrador de referencia;
- deberá revisarse nuevamente cuando se complete la Fase 1 y corresponda entrar al bloque de arquitectura.

La secuencia vigente es:

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
```

`WEB-AUD-004` está aprobada documentalmente y forma parte de la continuidad vigente de la Fase 1.

#### 2. Objetivo

Evaluar el CMS actual de VISO como producto operativo y como superficie administrativa crítica.

La auditoría debe determinar:

1. qué flujos existen;
2. qué acciones puede ejecutar un usuario;
3. qué campos se administran;
4. cómo se autorizan las acciones;
5. qué validaciones existen;
6. cómo se manejan los errores;
7. qué tan comprensible es la experiencia;
8. qué acciones pueden causar pérdida, corrupción o publicación accidental;
9. qué brechas deben resolverse antes de reemplazar el CMS por VISO Web Studio;
10. qué controles temporales necesita el CMS mientras siga operativo.

#### 3. Alcance técnico

##### 3.1 Rutas auditadas

| Ruta                             | Función                                 |
| -------------------------------- | --------------------------------------- |
| `/website-cms`                   | Dashboard general                       |
| `/website-cms/blocks/new`        | Crear bloque                            |
| `/website-cms/blocks/[id]`       | Editar bloque                           |
| `/website-cms/items/new`         | Crear item                              |
| `/website-cms/items/[id]`        | Editar o eliminar item                  |
| `/website-cms/venues`            | Administrar restaurantes                |
| `/website-cms/venues/[slug]`     | Editar detalle y galería de restaurante |
| `/api/viso/upload-website-media` | Subir archivos                          |

##### 3.2 Utilidades auditadas

- `src/lib/website-cms.ts`;
- `src/lib/auth/guard.ts`;
- `src/lib/supabase/admin.ts`;
- `src/components/viso/website-media-upload-field.tsx`;
- `src/app/website-cms/items/category-meta.ts`.

##### 3.3 Elementos excluidos

Esta tarea no implementa:

- nuevo editor;
- nuevos permisos;
- migraciones;
- borradores;
- publicación versionada;
- correcciones del CMS;
- cambios de producción.

#### 4. Resultado ejecutivo

##### 4.1 Evaluación general

| Área                   | Estado                   | Diagnóstico                                                            |
| ---------------------- | ------------------------ | ---------------------------------------------------------------------- |
| Flujos CRUD            | 🟡 Parciales              | Existen, pero dependen de formularios técnicos y filas legacy          |
| Campos                 | 🟡 Amplios pero genéricos | Muchos campos no corresponden semánticamente a cada categoría          |
| Permisos               | 🔴 Críticos               | Acceso general a VISO habilita acciones CMS con cliente administrativo |
| Validaciones           | 🔴 Insuficientes          | Solo validaciones básicas y no bloqueantes                             |
| Errores                | 🔴 Frágiles               | Mensajes crudos, pérdida de formulario y operaciones parciales         |
| Experiencia de usuario | 🟡 Inconsistente          | Items guiados; bloques siguen siendo técnicos                          |
| Publicación            | 🔴 Peligrosa              | Creación publicada por defecto y cambios directos                      |
| Eliminación            | 🔴 Peligrosa              | Borrado permanente sin confirmación ni restauración                    |
| Medios                 | 🔴 Inconsistente          | Permisos distintos, sin preview y entrega pública contradictoria       |
| Integridad             | 🔴 Crítica                | Cambios de slug/categoría pueden romper referencias                    |
| Auditoría              | 🔴 Inexistente            | No hay autor, historial, diff ni rollback                              |
| Escalabilidad          | 🟡 Limitada               | Sin paginación, búsqueda, schemas ni separación por dominio            |

##### 4.2 Nivel de madurez

```text
CRUD BÁSICO                  ███████░░░  Funcional
GUÍA PARA USUARIO           ██████░░░░  Parcial
VALIDACIÓN DE DATOS         ███░░░░░░░  Insuficiente
AUTORIZACIÓN GRANULAR       █░░░░░░░░░  Inexistente
BORRADORES                  ██░░░░░░░░  Checkbox de visibilidad
PUBLICACIÓN CONTROLADA      ░░░░░░░░░░  Inexistente
PREVIEW REAL                ██░░░░░░░░  Solo tarjeta de restaurante
VERSIONES Y ROLLBACK        ░░░░░░░░░░  Inexistente
SEGURIDAD OPERATIVA         ██░░░░░░░░  Crítica
```

##### 4.3 Conclusión principal

El CMS actual es útil como herramienta administrativa provisional, pero no es seguro ni suficiente para convertirse en el editor definitivo.

La principal debilidad no es visual. Es la combinación de:

```text
acceso amplio a VISO
        +
cliente service_role
        +
edición directa de filas publicadas
        +
validación mínima
        +
sin historial ni rollback
```

#### 5. Mapa de flujos existentes

##### 5.1 Flujo del dashboard

```text
/website-cms
├── accesos rápidos
├── conteos de items
├── filtros por categoría
├── tabla de items
├── filtros por página
└── tabla de bloques
```

##### 5.2 Flujo de creación de bloque

```text
Agregar sección
   ↓
escribir page_slug
   ↓
escribir block_key
   ↓
seleccionar block_type limitado
   ↓
completar contenido
   ↓
Publicado marcado por defecto
   ↓
insert directo en website_blocks
```

##### 5.3 Flujo de edición de bloque

```text
Editar bloque
   ↓
modificar page_slug / block_key / block_type
   ↓
modificar contenido y medio
   ↓
guardar
   ↓
update directo de la fila
```

##### 5.4 Flujo de creación de item

```text
Agregar contenido
   ↓
seleccionar categoría
   ↓
completar nombre y campos básicos
   ↓
slug automático
   ↓
orden automático
   ↓
Publicado marcado por defecto
   ↓
insert directo en website_items
   ↓
redirigir al editor completo
```

##### 5.5 Flujo de edición de item

```text
Editar item
├── guía por categoría
├── indicador de completitud
├── contenido
├── contexto
├── CTA
├── medios
├── publicación
├── opciones avanzadas
└── eliminación permanente
```

##### 5.6 Flujo de restaurantes

```text
Restaurantes
├── crear manualmente
├── importar negocios activos
├── editar tarjeta
└── editar detalle
    ├── hero
    ├── historia
    └── tres slots de galería
```

##### 5.7 Flujo de medios

```text
input de URL
   o
selector de archivo
   ↓
POST /api/viso/upload-website-media
   ↓
Storage
   ↓
URL devuelta al input
   ↓
guardar formulario por separado
```

#### 6. Auditoría del dashboard

##### 6.1 Aspectos positivos

El dashboard:

- utiliza nombres amigables para varias páginas y categorías;
- separa tarjetas de contenido y bloques editoriales;
- ofrece filtros;
- muestra estado publicado u oculto;
- muestra accesos rápidos;
- muestra conteos por categoría;
- proporciona estados vacíos;
- vincula restaurantes con su editor especializado.

##### 6.2 Error de conteos al filtrar

La consulta de items se filtra antes de calcular los conteos.

Consecuencia:

- al filtrar por una categoría, las tarjetas rápidas de las demás categorías pueden mostrar cero;
- el usuario puede interpretar que no existen contenidos cuando en realidad quedaron fuera de la consulta.

##### 6.3 Acciones rápidas mal dirigidas

Los botones:

- `+ Publicar vacante`;
- `+ Agregar evento`;
- `+ Agregar servicio`;

dirigen a:

```text
/website-cms/items/new
```

La página de creación selecciona por defecto:

```text
restaurant
```

Consecuencia:

- el usuario hace clic en “Publicar vacante”;
- llega a un formulario de restaurante;
- debe cambiar manualmente el tipo.

Destino correcto esperado:

```text
/website-cms/items/new?tipo=job
/website-cms/items/new?tipo=event
/website-cms/items/new?tipo=service
```

##### 6.4 Información pública incorrecta

La tarjeta de Eventos afirma:

```text
Agenda de eventos y activaciones en ventogroup.co/eventos.
```

Pero `/eventos` redirige a `/restaurantes`.

El CMS presenta como funcional una superficie pública inexistente.

##### 6.5 Mapeo incompleto de bloques

`PAGE_NAMES` y `PAGE_FILTERS` contemplan páginas generales, pero no las claves de detalle como:

```text
restaurant:<slug>
restaurant_<slug>
restaurante:<slug>
```

Consecuencias:

- los detalles pueden mostrarse con nombres técnicos;
- no pueden filtrarse fácilmente por restaurante;
- los bloques de galería no tienen nombres amigables completos;
- el usuario ve claves como `gallery_1`.

##### 6.6 Codificación visual dañada

En el código visible existen secuencias mojibake para emojis, por ejemplo:

```text
ðŸ½
ðŸ’¼
ðŸŽ‰
ðŸ› 
```

Esto puede producir iconos corruptos en la interfaz.

##### 6.7 Mensaje peligroso de producto

El subtítulo principal afirma:

```text
Los cambios se reflejan de inmediato.
```

El mensaje normaliza una operación peligrosa:

- no hay borrador real;
- no hay revisión;
- no hay diff;
- no hay rollback;
- no hay confirmación de publicación.

La interfaz debería distinguir claramente:

```text
Guardado como borrador
Vista previa
Publicado
```

#### 7. Auditoría de campos

##### 7.1 Campos de bloque

| Campo          |             Crear |      Editar | Riesgo                                    |
| -------------- | ----------------: | ----------: | ----------------------------------------- |
| `page_slug`    |                Sí |          Sí | Puede mover contenido a otra página       |
| `block_key`    |                Sí |          Sí | Puede romper la clave consumida por React |
| `block_type`   | Selector limitado | Texto libre | Puede crear tipo desconocido              |
| `title`        |                Sí |          Sí | Sin límites                               |
| `subtitle`     |                Sí |          Sí | Sin límites                               |
| `body`         |                Sí |          Sí | Sin schema ni sanitización específica     |
| `cta_label`    |                Sí |          Sí | No se valida correspondencia con URL      |
| `cta_url`      |                Sí |          Sí | No se valida                              |
| `media_url`    |                Sí |          Sí | URL libre                                 |
| `media_type`   |                Sí |          Sí | Puede no coincidir con el archivo         |
| `sort_order`   |                Sí |          Sí | Cualquier número                          |
| `is_published` |                Sí |          Sí | Marcado por defecto                       |

##### 7.2 Inconsistencia de tipos de bloque

La creación ofrece:

```text
content
hero_slide
editorial_band
```

El resto del sistema utiliza además:

```text
hero
media
detail_hero
gallery_media
event_spaces
```

En edición, `block_type` es un input libre.

No existe un catálogo único.

##### 7.3 Campos de item

| Campo           | Uso actual                              |
| --------------- | --------------------------------------- |
| `category`      | Tipo de entidad                         |
| `slug`          | URL interna                             |
| `title`         | Nombre                                  |
| `excerpt`       | Descripción corta                       |
| `body`          | Descripción extendida                   |
| `location`      | Dirección, sede, lugar o disponibilidad |
| `schedule_text` | Horario, contrato, fecha o modalidad    |
| `start_at`      | Inicio del evento                       |
| `end_at`        | Fin del evento                          |
| `image_url`     | Imagen                                  |
| `video_url`     | Video                                   |
| `action_label`  | Texto de CTA                            |
| `action_url`    | Destino                                 |
| `sort_order`    | Orden                                   |
| `is_published`  | Visibilidad                             |

##### 7.4 Ambigüedad semántica

Los mismos campos se reutilizan para cinco dominios.

Ejemplos:

- `location` significa dirección, sede laboral, lugar del evento o disponibilidad;
- `schedule_text` significa horario, contrato, fecha textual o modalidad;
- `action_url` significa reserva, aplicación, inscripción, contacto o acceso a app.

La guía cambia el label, pero la base y las validaciones continúan siendo genéricas.

##### 7.5 Campos peligrosos en opciones avanzadas

El editor permite cambiar:

- categoría;
- slug;
- orden.

Cambiar categoría o slug puede:

- cambiar la URL pública;
- romper enlaces externos;
- perder posicionamiento SEO;
- dejar bloques de restaurante asociados al slug anterior;
- volver inaccesible una galería;
- convertir una entidad en otra sin migrar campos;
- generar colisión de unicidad.

No existe una operación de migración ni redirección asociada.

##### 7.6 Galería rígida

El editor de restaurante dispone de exactamente:

```text
gallery_1
gallery_2
gallery_3
```

No permite:

- agregar más;
- eliminar dinámicamente;
- reordenar;
- arrastrar;
- indicar alt text;
- seleccionar desde biblioteca;
- definir focal point.

#### 8. Auditoría de permisos

##### 8.1 Guardia aplicada

Todas las rutas CMS ejecutan:

```text
requireAppAccess({ appId: "viso" })
```

No pasan:

- `permissionCode`;
- permiso de lectura web;
- permiso de edición;
- permiso de publicación;
- permiso de eliminación;
- permiso de medios;
- permiso de importación.

##### 8.2 Consecuencia

Cualquier usuario que supere el acceso general a VISO puede, según las rutas actuales:

- consultar todo el CMS;
- crear bloques;
- modificar bloques;
- crear items;
- modificar items;
- cambiar estado publicado;
- eliminar items;
- importar restaurantes;
- modificar detalles;
- modificar galerías.

##### 8.3 Uso de cliente administrativo

Después de la guardia general, las acciones usan:

```text
createAdminClient()
```

Ese cliente utiliza:

```text
SUPABASE_SERVICE_ROLE_KEY
```

y omite RLS.

La seguridad de cada acción depende completamente de que la guardia previa sea correcta y suficientemente específica.

Actualmente no lo es, porque solo valida acceso general a la aplicación.

##### 8.4 Dispositivos compartidos

`requireAppAccess` contempla sesiones de dispositivo compartido.

Si un dispositivo compartido tiene permitido acceder a VISO, las rutas CMS no exigen un permiso adicional específico.

Debe prohibirse explícitamente la edición web desde dispositivos compartidos salvo una decisión canónica excepcional.

##### 8.5 Simulación de rol

La guardia soporta role override, pero las rutas no solicitan permisos específicos.

La simulación afecta principalmente el acceso general, no una matriz editorial granular.

##### 8.6 Permisos de subida inconsistentes

El endpoint de medios no usa `requireAppAccess` ni el catálogo canónico de permisos.

Consulta directamente:

```text
employees.role
```

y solo acepta:

```text
propietario
gerente_general
```

Consecuencias:

- un editor con acceso al CMS puede no poder subir archivos;
- la autorización de medios no respeta permisos efectivos;
- no respeta necesariamente role override;
- no utiliza contexto operativo;
- no usa una capacidad `website.media.upload`.

##### 8.7 Matriz actual efectiva

| Acción             | Requisito actual                           |
| ------------------ | ------------------------------------------ |
| Ver CMS            | Acceso general a VISO                      |
| Crear bloque       | Acceso general a VISO                      |
| Editar bloque      | Acceso general a VISO                      |
| Crear item         | Acceso general a VISO                      |
| Editar item        | Acceso general a VISO                      |
| Publicar u ocultar | Acceso general a VISO                      |
| Eliminar item      | Acceso general a VISO                      |
| Importar negocios  | Acceso general a VISO                      |
| Subir medio        | Rol base `propietario` o `gerente_general` |

##### 8.8 Diagnóstico

La autorización actual es:

- demasiado amplia para datos;
- demasiado estrecha e inconsistente para medios;
- incompatible con el modelo canónico de permisos;
- de alto riesgo debido al uso de `service_role`.

#### 9. Auditoría de validaciones

##### 9.1 Validaciones existentes

###### Bloques

- `page_slug` obligatorio;
- `block_key` obligatorio;
- fallback de `block_type`;
- parseo básico de número;
- checkbox a booleano.

###### Items

- categoría obligatoria;
- título obligatorio;
- categoría dentro de cinco valores;
- slug automático al crear;
- prevención básica de colisión de slug;
- orden automático;
- parseo de fechas.

###### Restaurantes

- nombre obligatorio;
- normalización básica del tipo de medio.

###### Medios

- usuario autenticado;
- dos roles permitidos;
- archivo presente;
- tamaño máximo;
- MIME de imagen o video;
- sanitización del scope.

##### 9.2 Validaciones inexistentes

No se valida:

- longitud mínima o máxima;
- ortografía;
- URL válida;
- esquema permitido;
- destino `#`;
- relación CTA label/URL;
- slug reservado;
- cambio de slug con redirección;
- contenido requerido antes de publicar;
- fecha fin posterior a inicio;
- fecha pasada;
- evento vencido;
- imagen requerida;
- dimensiones;
- relación de aspecto;
- peso recomendado;
- alt text;
- focal point;
- media type contra MIME;
- existencia pública del medio;
- schema según bloque;
- block key contra catálogo;
- page slug contra página real;
- duplicidad semántica;
- HTML o estructura enriquecida;
- compatibilidad de categoría y campos.

##### 9.3 Completitud no bloqueante

El editor de items calcula completitud para restaurantes y vacantes.

Sin embargo:

- solo es informativa;
- no impide publicar;
- no cubre servicios, eventos o apps;
- no valida contenido extendido;
- no valida fechas;
- no valida SEO;
- no valida medios públicos.

##### 9.4 Completitud inconsistente

La lista de restaurantes considera “Completo” si existen:

```text
imagen + descripción corta
```

El editor detallado considera además:

- ubicación;
- horario;
- CTA válido.

Un restaurante puede aparecer como “Completo” en la lista y “Incompleto” al abrirlo.

##### 9.5 Guía que recomienda un valor inválido

La guía de restaurantes indica:

```text
Si no tienes [link], deja #.
```

El mismo sistema de completitud considera `#` como enlace incompleto.

La interfaz enseña una práctica que luego marca como incorrecta y que puede llegar al sitio público.

##### 9.6 Fechas silenciosamente descartadas

`asNullableDate` convierte una fecha inválida en `null`.

No informa al usuario que el valor fue inválido.

##### 9.7 Allowlist MIME inconsistente

El uploader define una lista exacta, pero también permite cualquier MIME que comience por:

```text
image/
video/
```

La lista exacta no funciona como allowlist estricta.

El bucket puede rechazar el archivo después, generando una experiencia inconsistente.

##### 9.8 SVG

Se permite SVG sin un proceso explícito de:

- sanitización;
- inspección;
- normalización;
- política de uso.

Debe definirse si SVG se limita a logos internos o se procesa antes de publicarse.

#### 10. Auditoría de errores

##### 10.1 Patrón actual

La mayoría de errores se manejan mediante:

```text
redirect("?error=" + encodeURIComponent(error.message))
```

##### 10.2 Problemas del patrón

- expone mensajes crudos de Supabase;
- puede revelar nombres de tablas, constraints o políticas;
- escribe el error en la URL y el historial;
- pierde todos los datos no guardados del formulario;
- no vincula el error con un campo;
- no ofrece recuperación;
- no asigna un identificador de incidente;
- no registra contexto operativo.

##### 10.3 Mensajes manipulables por URL

El dashboard muestra `ok` y `error` provenientes de query params.

React escapa el contenido, pero un usuario puede construir una URL que muestre un mensaje falso de éxito o error.

Los mensajes de operación deberían provenir de estado controlado o códigos conocidos.

##### 10.4 Ausencia de transacción

Guardar el detalle de restaurante ejecuta:

1. update de `website_items`;
2. upsert de bloques.

Si el primer paso funciona y el segundo falla:

- la tarjeta queda actualizada;
- el detalle queda sin actualizar;
- el usuario recibe error;
- no hay rollback.

##### 10.5 Importación parcial

La importación de restaurantes:

- consulta satélites;
- consulta sitios;
- consulta items existentes;
- inserta nuevos items.

Problemas:

- el error de consulta de sitios no se procesa;
- el error de consulta usado para el conteo de no sincronizados no se procesa;
- una dirección puede quedar vacía sin explicación;
- no existe transacción;
- no existe reporte por restaurante;
- no existe rollback.

##### 10.6 Actualización sin verificar filas afectadas

Updates y deletes filtran por ID, pero no comprueban que se haya modificado o eliminado exactamente una fila.

Una operación puede reportar éxito aun cuando no afectó el registro esperado.

##### 10.7 Revalidación incompleta

Las acciones revalidan rutas internas de VISO.

No existe en estas acciones un mecanismo explícito para:

- invalidar caché de `ventogroup.co`;
- revalidar la página pública afectada;
- revalidar sitemap;
- revalidar navegación;
- revalidar colecciones relacionadas.

##### 10.8 Error de subida

El componente asume que toda respuesta puede convertirse a JSON.

Si el endpoint devuelve HTML o una respuesta inesperada, el usuario recibe un error genérico.

No existe:

- retry;
- cancelación;
- porcentaje;
- reanudación;
- log de archivo.

#### 11. Auditoría de experiencia de usuario

##### 11.1 Aspectos positivos

- lenguaje más amigable en items;
- labels por categoría;
- guías rápidas;
- placeholders contextualizados;
- generación automática de slug;
- cálculo automático de orden;
- indicador de completitud;
- editor especializado de restaurantes;
- vista aproximada de la tarjeta;
- enlace al sitio público;
- estados visibles de publicación.

##### 11.2 Fragmentación de experiencia

Existen tres niveles distintos de UX:

1. dashboard relativamente amigable;
2. editor de items guiado;
3. editor de bloques técnico.

El usuario debe aprender conceptos como:

- `page_slug`;
- `block_key`;
- `block_type`;
- `sort_order`;
- `media_type`.

Esto contradice el objetivo de un editor no técnico.

##### 11.3 Preview insuficiente

Solo el restaurante tiene una maqueta parcial de tarjeta.

No existe:

- preview de página completa;
- preview de hero;
- preview de galería;
- preview de bloques;
- preview responsive;
- preview de servicios;
- preview de vacantes;
- preview de eventos;
- preview de apps;
- preview de estado oculto;
- preview de cambios antes de guardar.

##### 11.4 Vista de tarjeta no idéntica a producción

La tarjeta de restaurante se reimplementa dentro de VISO.

No utiliza el mismo componente público.

Puede divergir en:

- tipografía;
- dimensiones;
- estilos;
- truncamiento;
- CTA;
- media.

##### 11.5 Sin advertencia de cambios no guardados

El usuario puede:

- editar;
- usar Volver;
- cambiar de ruta;
- cerrar la pestaña;

sin advertencia de pérdida.

##### 11.6 Sin estado de envío

Los formularios no muestran:

- guardando;
- guardado;
- error de red;
- botón deshabilitado;
- prevención de doble clic.

##### 11.7 Orden manual poco comprensible

El orden se administra mediante números.

No existe:

- drag-and-drop;
- botones subir/bajar;
- detección de duplicados;
- normalización;
- vista previa del orden.

##### 11.8 Medios sin preview

El campo de medios muestra:

- URL;
- file input;
- mensaje de estado.

No muestra:

- miniatura;
- video;
- dimensiones;
- tamaño;
- tipo;
- nombre;
- uso actual;
- error visual.

##### 11.9 Formulario largo

El detalle de restaurante guarda en una sola acción:

- tarjeta;
- publicación;
- hero;
- contenido;
- CTA;
- tres medios;
- orden.

Un error en cualquier parte obliga a revisar todo el formulario.

##### 11.10 Ortografía y consistencia

Existen labels y textos sin tildes:

- `Pagina`;
- `Subtitulo`;
- `Boton`;
- `Galeria`;
- `Numero`;
- `Mas opciones`;
- `Ver mas`.

También existen ejemplos centrados en Bogotá y Zona G, aunque la operación real es Cúcuta.

##### 11.11 Accesibilidad

Aspectos positivos:

- la mayoría de inputs está dentro de `label`;
- hay IDs para varios checkboxes;
- se usa estructura semántica básica.

Brechas:

- no existe resumen de errores;
- no se mueve foco al error;
- estados de upload no tienen `aria-live`;
- los mensajes de éxito no usan región anunciable;
- color participa en estados de completitud;
- no hay confirmación accesible para borrado;
- no hay focus management entre redirects.

#### 12. Auditoría de acciones peligrosas

##### 12.1 Publicar por defecto

Crear bloque e item marca publicación por defecto.

Riesgo:

- contenido incompleto se vuelve visible;
- errores de usuario afectan producción;
- la guía indica completar después, pero el registro ya puede estar publicado.

##### 12.2 Edición directa de producción

Guardar un registro publicado modifica el mismo registro que consulta el sitio.

No existe:

- copia de trabajo;
- revisión;
- aprobación;
- diff;
- ventana de publicación.

##### 12.3 Eliminación permanente sin confirmación

El editor de item incluye un botón de eliminación permanente.

La advertencia es texto estático, pero no existe:

- confirmación;
- nombre a escribir;
- modal;
- segunda acción;
- soft delete;
- papelera;
- restauración.

##### 12.4 Eliminación huérfana

Eliminar un restaurante de `website_items` no elimina ni archiva:

- bloques de detalle;
- galerías;
- archivos;
- enlaces;
- referencias futuras.

Puede dejar contenido huérfano.

##### 12.5 Cambio de slug

Cambiar el slug de un restaurante no migra:

- `restaurant:<slug>`;
- `restaurant_<slug>`;
- `restaurante:<slug>`;
- URLs indexadas;
- enlaces externos;
- redirecciones.

##### 12.6 Cambio de categoría

Un item puede cambiar de categoría sin migración.

Ejemplo:

```text
restaurant → job
```

Los campos y referencias anteriores permanecen, pero cambian significado y destino.

##### 12.7 Modificación de claves de bloque

Editar `page_slug`, `block_key` o `block_type` puede:

- hacer desaparecer una sección;
- moverla;
- romper la página;
- crear un tipo no renderizable;
- colisionar con otra clave.

##### 12.8 `page_slug` oculto manipulable

El detalle de restaurante envía `page_slug` como input oculto.

La acción acepta ese valor y no verifica que corresponda al slug del restaurante.

Un request modificado podría escribir bloques en otra agrupación.

##### 12.9 Upsert de slots vacíos

Guardar un detalle crea o actualiza siempre:

- hero;
- gallery 1;
- gallery 2;
- gallery 3.

Los checkboxes se inicializan como visibles.

Es posible crear bloques publicados sin medio.

##### 12.10 Importación masiva sin selección

`Importar negocios existentes`:

- importa todos los negocios activos faltantes;
- los publica;
- no muestra preview;
- no permite elegir;
- no pide confirmación;
- no conserva relación de origen.

##### 12.11 Archivos huérfanos

La subida ocurre antes de guardar el formulario.

Si el usuario:

- cancela;
- cambia de archivo;
- abandona;
- falla al guardar;

el archivo queda almacenado sin referencia.

##### 12.12 Sobrescritura de archivos

El endpoint usa:

```text
upsert: true
```

y nombres basados en timestamp.

Aunque la colisión es poco probable, no se utiliza UUID ni hash de contenido.

##### 12.13 Entrega pública incorrecta

El endpoint devuelve `getPublicUrl()` para un bucket actualmente privado.

El formulario puede guardar una URL que el visitante público no puede cargar.

##### 12.14 Falta de auditoría

No se registra:

- quién creó;
- quién editó;
- quién publicó;
- quién eliminó;
- valor anterior;
- motivo;
- IP;
- fecha de publicación;
- rollback.

#### 13. Matriz de riesgos por acción

| Acción                                      | Impacto | Probabilidad | Nivel   |
| ------------------------------------------- | ------- | ------------ | ------- |
| Publicar contenido incompleto               | Alto    | Alta         | Crítico |
| Usuario VISO no editorial modifica el sitio | Alto    | Alta         | Crítico |
| Borrar item sin recuperación                | Alto    | Media        | Crítico |
| Cambiar slug y romper detalle               | Alto    | Media        | Alto    |
| Cambiar block key y ocultar sección         | Alto    | Media        | Alto    |
| Guardado parcial de restaurante             | Alto    | Media        | Alto    |
| Importar negocios no deseados               | Medio   | Media        | Alto    |
| Subir archivo que no carga públicamente     | Alto    | Alta         | Crítico |
| Crear evento para ruta inexistente          | Medio   | Alta         | Alto    |
| Perder formulario tras error                | Medio   | Alta         | Alto    |
| Dejar archivos huérfanos                    | Medio   | Alta         | Alto    |
| Duplicar orden                              | Bajo    | Alta         | Medio   |

#### 14. Controles temporales requeridos

Mientras el CMS legacy continúe activo, debe aplicarse una capa mínima de contención antes de ampliar su uso.

##### 14.1 Autorización

- permisos específicos;
- prohibición en dispositivo compartido;
- eliminar autorización directa por rol para medios;
- separar ver, editar, publicar, eliminar e importar.

##### 14.2 Publicación

- crear oculto por defecto;
- bloquear publicación incompleta;
- separar guardar y publicar;
- confirmar publicación;
- registrar actor y fecha.

##### 14.3 Eliminación

- soft delete;
- confirmación;
- ver dependencias;
- restauración;
- impedir borrar entidades publicadas sin despublicar.

##### 14.4 Integridad

- bloquear edición libre de claves técnicas;
- migración controlada de slug;
- transacciones;
- validar una fila afectada;
- limpiar o reasignar dependencias.

##### 14.5 Medios

- resolver bucket privado;
- miniatura;
- validación real;
- UUID;
- limpieza de huérfanos;
- alt text;
- prohibir SVG hasta definir política.

##### 14.6 Errores

- códigos de error controlados;
- no mostrar error crudo de base;
- preservar formulario;
- registrar incidente;
- estados de envío.

#### 15. Modelo de permisos requerido

La definición definitiva corresponde a `WEB-PRD-002`, pero la auditoría establece las capacidades mínimas:

```text
website.view
website.content.create
website.content.edit
website.content.hide
website.content.publish
website.content.delete
website.media.view
website.media.upload
website.media.replace
website.media.delete
website.venues.import
website.settings.manage
```

##### 15.1 Reglas mínimas

- `view` no implica editar;
- `edit` no implica publicar;
- `publish` no implica eliminar;
- `media.upload` no depende de nombre de rol;
- `venues.import` es sensible;
- `delete` requiere confirmación y auditoría;
- dispositivos compartidos no editan por defecto.

#### 16. Registro canónico de brechas

| Brecha        | Descripción                                                       | Severidad | Tareas responsables                         |
| ------------- | ----------------------------------------------------------------- | --------- | ------------------------------------------- |
| `WEB-GAP-085` | Acceso general a VISO permite administrar el CMS                  | Crítica   | `WEB-PRD-002`, `WEB-SEC-018`                |
| `WEB-GAP-086` | Acciones CMS usan `service_role` sin permiso editorial específico | Crítica   | `WEB-SEC-018`                               |
| `WEB-GAP-087` | Dispositivos compartidos no están excluidos del CMS               | Crítica   | `WEB-PRD-002`, `WEB-SEC-018`                |
| `WEB-GAP-088` | Permisos de medios dependen de roles hardcodeados                 | Alta      | `WEB-PRD-002`, `WEB-MED-013`, `WEB-SEC-018` |
| `WEB-GAP-089` | Contenido nuevo se publica por defecto                            | Crítica   | `WEB-PUB-001`, `WEB-SEC-018`                |
| `WEB-GAP-090` | Guardado modifica directamente producción                         | Crítica   | `ADR-WEB-004`, `WEB-PUB-002`, `WEB-PUB-008` |
| `WEB-GAP-091` | Eliminación permanente no tiene confirmación ni rollback          | Crítica   | `WEB-SEC-018`, `WEB-PUB-011`                |
| `WEB-GAP-092` | Eliminar items deja bloques y medios huérfanos                    | Alta      | `WEB-MIG-022`, `WEB-SEC-018`                |
| `WEB-GAP-093` | Cambio de slug no migra bloques ni crea redirección               | Crítica   | `WEB-PRD-016`, `WEB-SEC-018`                |
| `WEB-GAP-094` | Cambio libre de categoría puede corromper semántica               | Alta      | `WEB-RND-002`, `WEB-SEC-018`                |
| `WEB-GAP-095` | Claves técnicas de bloques son editables                          | Crítica   | `ADR-WEB-002`, `WEB-SEC-018`                |
| `WEB-GAP-096` | No existe validación central por schema                           | Crítica   | `WEB-RND-002`, `WEB-EDT-007`                |
| `WEB-GAP-097` | Completitud es inconsistente y no bloquea publicación             | Alta      | `WEB-PRD-013`, `WEB-PUB-005`                |
| `WEB-GAP-098` | Guía recomienda CTA `#`                                           | Alta      | `WEB-QA-021`, `WEB-SEC-018`                 |
| `WEB-GAP-099` | Errores de Supabase se exponen en URL                             | Alta      | `WEB-EDT-013`, `WEB-SEC-018`                |
| `WEB-GAP-100` | Errores destruyen el estado del formulario                        | Alta      | `WEB-EDT-011`, `WEB-EDT-013`                |
| `WEB-GAP-101` | Guardado de restaurante no es transaccional                       | Crítica   | `WEB-PUB-015`                               |
| `WEB-GAP-102` | No existe invalidación explícita de la web pública                | Alta      | `WEB-RND-015`, `WEB-PUB-008`                |
| `WEB-GAP-103` | Acciones rápidas de empleo, evento y servicio abren restaurante   | Alta      | `WEB-SEC-018`                               |
| `WEB-GAP-104` | Conteos del dashboard son incorrectos al filtrar                  | Media     | `WEB-SEC-018`                               |
| `WEB-GAP-105` | CMS afirma que Eventos está activo cuando la ruta redirige        | Alta      | `WEB-PAG-040`, `WEB-SEC-018`                |
| `WEB-GAP-106` | No existe preview real compartido con la web                      | Crítica   | `WEB-EDT-006`, `WEB-PUB-007`                |
| `WEB-GAP-107` | Vista de tarjeta puede divergir del componente público            | Alta      | `WEB-EDT-006`, `WEB-EDT-010`                |
| `WEB-GAP-108` | No existe protección de cambios sin guardar                       | Alta      | `WEB-EDT-012`                               |
| `WEB-GAP-109` | Formularios no tienen estado pending ni doble envío               | Alta      | `WEB-EDT-011`                               |
| `WEB-GAP-110` | Medios no tienen preview, metadata ni progreso                    | Alta      | `WEB-MED-002` a `WEB-MED-009`               |
| `WEB-GAP-111` | Subidas previas al guardado producen huérfanos                    | Alta      | `WEB-MED-012`, `WEB-SEC-018`                |
| `WEB-GAP-112` | El uploader devuelve URL pública para bucket privado              | Crítica   | `WEB-MED-014`, `WEB-SEC-017`                |
| `WEB-GAP-113` | Allowlist MIME no es estricta                                     | Alta      | `WEB-SEC-018`                               |
| `WEB-GAP-114` | SVG se acepta sin política de sanitización                        | Alta      | `WEB-SEC-018`                               |
| `WEB-GAP-115` | Importación publica todo sin selección ni confirmación            | Alta      | `WEB-ARC-007`, `WEB-SEC-018`                |
| `WEB-GAP-116` | Importación no conserva relación con Negocios                     | Alta      | `WEB-ARC-007`                               |
| `WEB-GAP-117` | `page_slug` oculto no se verifica contra restaurante              | Alta      | `WEB-SEC-018`                               |
| `WEB-GAP-118` | Galería crea slots vacíos visibles por defecto                    | Alta      | `WEB-BLD-005`, `WEB-SEC-018`                |
| `WEB-GAP-119` | No existe historial de acciones administrativas                   | Crítica   | `WEB-DB-012`, `WEB-PUB-014`                 |
| `WEB-GAP-120` | Interfaz presenta mojibake y microcopia inconsistente             | Media     | `WEB-QA-023`                                |

#### 17. Cambios obligatorios al plan maestro

##### 17.1 No integrar todavía `WEB-ARC-005`

No marcar:

```text
[ ] WEB-ARC-005 — Definir arquitectura canónica de componentes públicos
```

Debe retomarse en su secuencia correcta después de completar y aprobar la Fase 1.

##### 17.2 Agregar `WEB-SEC-018`

Ubicación recomendada: después de `WEB-SEC-017`.

```text
[ ] WEB-SEC-018 — Endurecer el CMS legacy mientras continúe operativo
```

Alcance:

- permisos editoriales específicos;
- prohibición por defecto en dispositivos compartidos;
- eliminar roles hardcodeados de medios;
- crear contenido oculto por defecto;
- bloquear publicación incompleta;
- confirmar publicación;
- confirmar eliminación;
- soft delete;
- validar URL y slug;
- impedir edición libre de claves técnicas;
- verificar filas afectadas;
- ocultar errores internos;
- corregir acciones rápidas;
- corregir conteos;
- validar MIME;
- definir política SVG;
- evitar `#`;
- controlar huérfanos;
- restringir importación.

##### 17.3 Agregar `WEB-PUB-015`

Ubicación recomendada: después de `WEB-PUB-014`.

```text
[ ] WEB-PUB-015 — Implementar guardado atómico de contenido relacionado
```

Alcance:

- transacción para entidad y secciones;
- rollback completo;
- control de concurrencia;
- validación previa;
- registro de auditoría;
- error estructurado;
- revalidación pública posterior al commit.

##### 17.4 Agregar `WEB-QA-023`

Ubicación recomendada: después de `WEB-QA-022`.

```text
[ ] WEB-QA-023 — Validar calidad integral de VISO Web Studio
```

Alcance:

- textos;
- ortografía;
- codificación UTF-8;
- accesibilidad;
- flujos por rol;
- errores;
- confirmaciones;
- filtros;
- conteos;
- acciones rápidas;
- estado pending;
- pérdida de cambios;
- preview;
- publicación;
- eliminación;
- responsive.

#### 18. Prioridad de resolución

##### 18.1 Contención inmediata

Antes de habilitar más usuarios en el CMS:

1. permisos específicos;
2. exclusión de dispositivo compartido;
3. creación oculta por defecto;
4. confirmación de borrado;
5. bloqueo de `#`;
6. corrección de bucket privado;
7. restricción de claves técnicas;
8. errores no crudos;
9. corrección de acciones rápidas.

##### 18.2 Antes de publicar VISO Web Studio

1. contratos por schema;
2. borradores reales;
3. preview real;
4. publicación separada;
5. historial;
6. rollback;
7. auditoría;
8. transacciones;
9. revalidación pública;
10. permisos editoriales completos.

#### 19. Criterios de aprobación cumplidos

`WEB-AUD-005` fue aprobada con los siguientes criterios cumplidos:

- [x] el mapa de flujos existentes;
- [x] el inventario de campos;
- [x] el diagnóstico de autorización;
- [x] el riesgo del `service_role`;
- [x] la inconsistencia de permisos de medios;
- [x] el inventario de validaciones;
- [x] el inventario de errores;
- [x] el diagnóstico de experiencia de usuario;
- [x] el inventario de acciones peligrosas;
- [x] el registro `WEB-GAP-085` a `WEB-GAP-120`;
- [x] la incorporación de `WEB-SEC-018`;
- [x] la incorporación de `WEB-PUB-015`;
- [x] la incorporación de `WEB-QA-023`;
- [x] que `WEB-ARC-005` se mantiene pendiente y fuera de esta fase.

#### 20. Estado de cierre vigente

```text
WEB-AUD-005 — APROBADA
```

##### 20.1 No ejecutar todavía

- modificar permisos;
- cambiar guardias;
- cambiar `service_role`;
- desactivar usuarios;
- cambiar publicación por defecto;
- eliminar datos;
- cambiar bucket;
- corregir formularios;
- implementar borradores;
- aplicar migraciones.

##### 20.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
```


#### 21. Evidencia técnica consultada

##### 21.1 Dashboard

- `src/app/website-cms/page.tsx`

##### 21.2 Bloques

- `src/app/website-cms/blocks/new/page.tsx`
- `src/app/website-cms/blocks/[id]/page.tsx`

##### 21.3 Items

- `src/app/website-cms/items/new/page.tsx`
- `src/app/website-cms/items/[id]/page.tsx`
- `src/app/website-cms/items/category-meta.ts`

##### 21.4 Restaurantes

- `src/app/website-cms/venues/page.tsx`
- `src/app/website-cms/venues/[slug]/page.tsx`

##### 21.5 Medios

- `src/components/viso/website-media-upload-field.tsx`
- `src/app/api/viso/upload-website-media/route.ts`

##### 21.6 Seguridad y utilidades

- `src/lib/auth/guard.ts`
- `src/lib/supabase/admin.ts`
- `src/lib/website-cms.ts`

#### 22. Registro de cambios

| Versión        | Fecha      | Cambio                                             | Estado            |
| -------------- | ---------- | -------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación de auditoría integral de VISO Website CMS | Aprobada |


### WEB-AUD-006 — Auditoría canónica de Supabase para la web pública

> Auditoría técnica de las tablas, índices, restricciones, triggers, RLS, Storage, políticas de escritura y relaciones utilizadas actualmente por `ventogroup.co` y VISO Website CMS.

#### 0. Control documental

| Campo                               | Valor                                           |
| ----------------------------------- | ----------------------------------------------- |
| Identificador                       | `WEB-AUD-006`                                   |
| Nombre                              | Auditar Supabase                                |
| Fase                                | FASE 1 — Auditoría y línea base                 |
| Estado                              | APROBADA                                        |
| Fecha                               | `2026-07-23`                                    |
| Proyecto Supabase auditado          | `vento-os-dev`                                  |
| Project ID                          | `clzdpinthhtknkmefsxx`                          |
| Región                              | `us-east-1`                                     |
| PostgreSQL                          | `17.6.1.076`                                    |
| Repositorio canónico de migraciones | `devVentoGroup/vento-shell`                     |
| Repositorio público consumidor      | `devVentoGroup/Vento-Group`                     |
| Aplicación administradora           | `devVentoGroup/vento-viso`                      |
| Modo de auditoría                   | Consultas de solo lectura                       |
| Cambios en base de datos            | Ninguno                                         |
| Cambios en Storage                  | Ninguno                                         |
| Cambios en producción               | Ninguno                                         |
| Próxima tarea canónica              | `WEB-AUD-007 — Auditar contenido en producción` |

##### 0.1 Estado previo de continuidad

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Desarrollada; pendiente de aprobación explícita
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
```

##### 0.2 Aclaración sobre arquitectura

`WEB-ARC-005` permanece:

```text
[ ] WEB-ARC-005 — Pendiente; borrador elaborado fuera de secuencia
```

No se considera aprobada ni ejecutada.

#### 1. Objetivo

Auditar la superficie Supabase que soporta actualmente la web pública y el CMS legacy de VISO.

La auditoría debe establecer:

1. qué tablas existen;
2. qué columnas y defaults tienen;
3. qué índices existen y si muestran uso;
4. qué restricciones protegen la integridad;
5. qué triggers modifican datos;
6. qué políticas RLS controlan lectura y escritura;
7. qué privilegios SQL tienen `anon`, `authenticated` y `service_role`;
8. cómo funciona el bucket `website-media`;
9. qué relaciones existen con páginas, medios, restaurantes y usuarios;
10. qué diferencias hay entre las migraciones históricas y el estado vigente;
11. qué riesgos afectan a la web pública;
12. qué tareas deberán resolver cada brecha.

#### 2. Alcance

##### 2.1 Objetos incluidos

###### Tablas

- `public.website_blocks`;
- `public.website_items`.

###### Storage

- `storage.buckets`;
- `storage.objects`;
- bucket `website-media`;
- bucket `pass-satellite-logos` como fuente actual de logos de restaurantes.

###### Funciones utilizadas por políticas

- `public.touch_updated_at()`;
- `public.current_employee_role()`;
- `public.is_owner()`;
- `public.is_global_manager()`.

###### Migraciones revisadas

- `20260327110000_website_cms.sql`;
- `20260327120000_website_media_storage.sql`;
- `20260519173000_security_hardening_anon_and_rpc_lint.sql`;
- `20260519181000_harden_authenticated_write_policies.sql`;
- `20260519193000_harden_website_media_storage.sql`.

##### 2.2 Objetos excluidos

No se realizó una auditoría integral de todas las tablas de Vento OS.

Solo se revisaron objetos transversales cuando:

- son utilizados por políticas web;
- afectan la autorización del CMS;
- condicionan la entrega de medios;
- exponen una dependencia directa de la página pública.

La auditoría completa de Supabase para Vento OS continúa perteneciendo al plan general de `vento-shell`.

#### 3. Metodología

Se realizaron consultas de solo lectura sobre:

- `information_schema.columns`;
- `pg_class`;
- `pg_namespace`;
- `pg_indexes`;
- `pg_constraint`;
- `pg_trigger`;
- `pg_policy`;
- `pg_policies`;
- `pg_proc`;
- `pg_roles`;
- `pg_stat_user_tables`;
- `pg_stat_user_indexes`;
- `information_schema.role_table_grants`;
- `information_schema.role_routine_grants`;
- `pg_default_acl`;
- `storage.buckets`;
- `storage.objects`;
- `supabase_migrations.schema_migrations`.

También se ejecutaron:

- Security Advisor;
- Performance Advisor;
- contraste contra migraciones de `vento-shell`;
- contraste contra el consumo actual de `Vento-Group` y `vento-viso`;
- revisión de documentación oficial vigente de Supabase.

#### 4. Resultado ejecutivo

##### 4.1 Conteo de objetos auditados

| Elemento                                         | Cantidad |
| ------------------------------------------------ | -------: |
| Tablas CMS legacy                                |        2 |
| Columnas totales                                 |       33 |
| Índices totales                                  |        9 |
| Restricciones explícitas                         |        6 |
| Triggers                                         |        2 |
| Políticas RLS sobre tablas CMS                   |        2 |
| Políticas RLS sobre `website-media`              |        4 |
| Foreign keys de las tablas CMS                   |        0 |
| Vistas que referencian las tablas CMS            |        0 |
| Funciones de base que referencian las tablas CMS |        0 |
| Funciones auxiliares auditadas                   |        4 |
| Objetos en `website-media`                       |        0 |
| Objetos en `pass-satellite-logos`                |       11 |
| Filas CMS actuales                               |       16 |
| Filas CMS marcadas como publicadas               |       16 |

##### 4.2 Estado por área

| Área           | Estado                                | Diagnóstico                                                                 |
| -------------- | ------------------------------------- | --------------------------------------------------------------------------- |
| Tablas         | 🟡 Legacy funcional                    | Dos tablas genéricas sin revisiones ni trazabilidad                         |
| Índices        | 🟢 Suficientes para escala actual      | Sin uso relevante todavía por volumen mínimo                                |
| Restricciones  | 🔴 Insuficientes                       | No protegen URLs, slugs, fechas ni reglas por categoría                     |
| Triggers       | 🟡 Mínimos                             | Solo actualizan `updated_at`                                                |
| RLS de tablas  | 🟡 Cerrada para escritura normal       | Lectura solo autenticada; web pública no tiene canal mínimo propio          |
| Grants         | 🔴 Excesivos                           | `authenticated` conserva privilegios SQL que RLS termina bloqueando         |
| Escritura      | 🔴 Privilegiada                        | VISO usa `service_role`, que omite RLS                                      |
| Storage        | 🔴 Contradictorio                      | Bucket privado, uploader entrega `getPublicUrl()`                           |
| Relaciones     | 🔴 Inexistentes                        | Cero foreign keys hacia páginas, medios, negocios o autores                 |
| Auditoría      | 🔴 Inexistente                         | No hay actor, diff, publicación ni rollback                                 |
| Datos actuales | 🔴 No publicables como fuente canónica | Todos publicados; placeholders y CTA `#`                                    |
| Migraciones    | 🟡 Históricamente coherentes           | El endurecimiento posterior dejó supuestos ya obsoletos para la web pública |

##### 4.3 Conclusión principal

El modelo vigente no debe exponerse directamente como la API pública definitiva.

```text
website_blocks + website_items
        ↓
modelo legacy sin versiones
        ↓
contenido publicado por checkbox
        ↓
lectura pública resuelta actualmente desde servidor privilegiado
```

La solución correcta no es reabrir inmediatamente estas tablas a `anon`.

La solución objetivo debe ser:

```text
MODELO EDITORIAL PRIVADO
        ↓
VALIDACIÓN Y PUBLICACIÓN
        ↓
PROYECCIÓN PÚBLICA DE LA VERSIÓN VIGENTE
        ↓
LECTURA CON PRIVILEGIO MÍNIMO
        ↓
VENTO-GROUP WEB
```

#### 5. Arquitectura de confianza actual

##### 5.1 Escritura desde VISO

```text
Usuario autenticado
        ↓
Guardia general de acceso a VISO
        ↓
Server Action / API Route
        ↓
createAdminClient()
        ↓
SUPABASE_SERVICE_ROLE_KEY
        ↓
INSERT / UPDATE / DELETE sin RLS
```

##### 5.2 Lectura desde la web pública

```text
Vento-Group Server
        ↓
SUPABASE_SERVICE_ROLE_KEY si está configurada
        ↓
consulta website_blocks / website_items
        ↓
filtro is_published en código
```

Fallback actual:

```text
Si service_role no está disponible
        ↓
intento con anon key
        ↓
RLS no permite lectura anónima
        ↓
consulta falla o retorna vacío
        ↓
se activan fallbacks de código
```

##### 5.3 Riesgo estructural

La publicación efectiva depende de dos condiciones de aplicación:

1. que el código agregue correctamente `is_published = true`;
2. que la clave privilegiada nunca se utilice de forma incorrecta.

La base no impide que una consulta privilegiada lea borradores o contenido oculto.

#### 6. Tablas

#### 6.1 `public.website_blocks`

##### 6.1.1 Propósito actual

Almacenar bloques editoriales genéricos agrupados mediante:

```text
page_slug + block_key
```

##### 6.1.2 Columnas

| Columna        | Tipo          | Nula | Default             | Función                   |
| -------------- | ------------- | ---: | ------------------- | ------------------------- |
| `id`           | `uuid`        |   No | `gen_random_uuid()` | Identificador             |
| `page_slug`    | `text`        |   No | —                   | Página o agrupación       |
| `block_key`    | `text`        |   No | —                   | Clave dentro de la página |
| `block_type`   | `text`        |   No | `'content'`         | Tipo técnico              |
| `title`        | `text`        |   Sí | —                   | Título                    |
| `subtitle`     | `text`        |   Sí | —                   | Subtítulo                 |
| `body`         | `text`        |   Sí | —                   | Contenido largo           |
| `cta_label`    | `text`        |   Sí | —                   | Etiqueta del CTA          |
| `cta_url`      | `text`        |   Sí | —                   | Destino del CTA           |
| `media_url`    | `text`        |   Sí | —                   | URL multimedia            |
| `media_type`   | `text`        |   Sí | —                   | Imagen o video            |
| `sort_order`   | `integer`     |   No | `0`                 | Orden                     |
| `is_published` | `boolean`     |   No | `true`              | Visibilidad               |
| `created_at`   | `timestamptz` |   No | `now()`             | Creación                  |
| `updated_at`   | `timestamptz` |   No | `now()`             | Modificación              |

##### 6.1.3 Estado físico

| Campo                       | Valor        |
| --------------------------- | ------------ |
| Propietario                 | `postgres`   |
| RLS                         | Habilitada   |
| FORCE RLS                   | No           |
| Filas estimadas             | 7            |
| Filas muertas estimadas     | 0            |
| Tamaño total                | 98.304 bytes |
| Sequential scans observados | 65           |
| Index scans observados      | 4            |

##### 6.1.4 Evaluación

La tabla funciona para el CMS provisional, pero no modela:

- sitio;
- página real;
- revisión;
- publicación;
- autor;
- editor;
- publicador;
- variante;
- schema version;
- configuración responsive;
- fuente dinámica;
- relación con medios.

#### 6.2 `public.website_items`

##### 6.2.1 Propósito actual

Almacenar entidades heterogéneas bajo una sola tabla:

```text
restaurant
job
service
event
app
```

##### 6.2.2 Columnas

| Columna         | Tipo          | Nula | Default             | Función                   |
| --------------- | ------------- | ---: | ------------------- | ------------------------- |
| `id`            | `uuid`        |   No | `gen_random_uuid()` | Identificador             |
| `category`      | `text`        |   No | —                   | Tipo de entidad           |
| `slug`          | `text`        |   No | —                   | Clave URL                 |
| `title`         | `text`        |   No | —                   | Nombre                    |
| `excerpt`       | `text`        |   Sí | —                   | Descripción corta         |
| `body`          | `text`        |   Sí | —                   | Descripción extendida     |
| `location`      | `text`        |   Sí | —                   | Ubicación o contexto      |
| `schedule_text` | `text`        |   Sí | —                   | Horario, contrato o fecha |
| `start_at`      | `timestamptz` |   Sí | —                   | Inicio                    |
| `end_at`        | `timestamptz` |   Sí | —                   | Fin                       |
| `image_url`     | `text`        |   Sí | —                   | Imagen                    |
| `video_url`     | `text`        |   Sí | —                   | Video                     |
| `action_label`  | `text`        |   Sí | —                   | Etiqueta del CTA          |
| `action_url`    | `text`        |   Sí | —                   | Destino                   |
| `sort_order`    | `integer`     |   No | `0`                 | Orden                     |
| `is_published`  | `boolean`     |   No | `true`              | Visibilidad               |
| `created_at`    | `timestamptz` |   No | `now()`             | Creación                  |
| `updated_at`    | `timestamptz` |   No | `now()`             | Modificación              |

##### 6.2.3 Estado físico

| Campo                       | Valor         |
| --------------------------- | ------------- |
| Propietario                 | `postgres`    |
| RLS                         | Habilitada    |
| FORCE RLS                   | No            |
| Filas estimadas             | 9             |
| Filas muertas estimadas     | 0             |
| Tamaño total                | 114.688 bytes |
| Sequential scans observados | 82            |
| Index scans observados      | 8             |

##### 6.2.4 Evaluación

La tabla no puede garantizar integridad semántica por categoría.

Por ejemplo:

- `location` cambia de significado;
- `schedule_text` cambia de significado;
- `action_url` cambia de función;
- los eventos pueden no tener fechas;
- una app puede no tener destino;
- una vacante puede publicarse sin sede ni contrato.

#### 7. Índices

#### 7.1 Índices de `website_blocks`

| Índice                                   | Columnas                    | Tipo       | Uso observado |
| ---------------------------------------- | --------------------------- | ---------- | ------------: |
| `website_blocks_pkey`                    | `id`                        | Único / PK |       4 scans |
| `website_blocks_page_slug_block_key_key` | `page_slug`, `block_key`    | Único      |             0 |
| `website_blocks_page_slug_idx`           | `page_slug`, `sort_order`   | B-tree     |             0 |
| `website_blocks_published_idx`           | `is_published`, `page_slug` | B-tree     |             0 |

#### 7.2 Índices de `website_items`

| Índice                            | Columnas                   | Tipo       | Uso observado |
| --------------------------------- | -------------------------- | ---------- | ------------: |
| `website_items_pkey`              | `id`                       | Único / PK |       8 scans |
| `website_items_category_slug_key` | `category`, `slug`         | Único      |             0 |
| `website_items_category_sort_idx` | `category`, `sort_order`   | B-tree     |             0 |
| `website_items_published_idx`     | `is_published`, `category` | B-tree     |             0 |
| `website_items_start_at_idx`      | `category`, `start_at`     | B-tree     |             0 |

#### 7.3 Diagnóstico

El Performance Advisor clasifica los cinco índices secundarios como no utilizados.

Esto no justifica eliminarlos todavía porque:

- las tablas son diminutas;
- el tráfico real es reducido;
- varios índices corresponden a consultas previstas;
- la métrica depende del tiempo desde reinicio o recolección;
- la futura arquitectura será distinta.

Decisión:

```text
No eliminar índices durante la auditoría.
Revisarlos después de definir la proyección pública y medir carga real.
```

#### 7.4 Observación de diseño

El orden de columnas del índice publicado:

```text
(is_published, page_slug)
```

puede ser útil para consulta pública por estado y página, pero el futuro modelo debería consultar una publicación vigente o proyección, no filtrar un booleano en una tabla editorial mutable.

#### 8. Restricciones

#### 8.1 Restricciones existentes en `website_blocks`

| Restricción                              | Tipo        | Regla                     |
| ---------------------------------------- | ----------- | ------------------------- |
| `website_blocks_pkey`                    | Primary key | `id`                      |
| `website_blocks_page_slug_block_key_key` | Unique      | `page_slug`, `block_key`  |
| `website_blocks_media_type_check`        | Check       | `image`, `video` o `null` |

#### 8.2 Restricciones existentes en `website_items`

| Restricción                       | Tipo        | Regla                                          |
| --------------------------------- | ----------- | ---------------------------------------------- |
| `website_items_pkey`              | Primary key | `id`                                           |
| `website_items_category_slug_key` | Unique      | `category`, `slug`                             |
| `website_items_category_check`    | Check       | `restaurant`, `job`, `service`, `event`, `app` |

#### 8.3 Restricciones faltantes en `website_blocks`

No existe protección para:

- `page_slug` vacío;
- `block_key` vacío;
- `block_type` vacío;
- tipo de bloque registrado;
- URL válida;
- CTA sin destino;
- destino sin etiqueta;
- `media_url` sin `media_type`;
- `media_type` sin `media_url`;
- orden negativo;
- contenido obligatorio antes de publicar;
- clave reservada;
- página inexistente;
- publicación asociada a revisión.

#### 8.4 Restricciones faltantes en `website_items`

No existe protección para:

- slug vacío;
- formato de slug;
- slug reservado;
- título vacío;
- URL válida;
- CTA `#`;
- etiqueta sin URL;
- URL sin etiqueta;
- `end_at < start_at`;
- evento sin fechas;
- vacante sin sede o modalidad;
- app sin destino;
- restaurante sin relación operativa;
- orden negativo;
- requisitos por categoría;
- medio inexistente;
- publicación incompleta.

#### 8.5 Consecuencia

La base acepta múltiples estados que la interfaz considera incompletos, pero que pueden seguir marcados como publicados.

#### 9. Triggers

#### 9.1 Triggers existentes

| Tabla            | Trigger                         | Evento          |
| ---------------- | ------------------------------- | --------------- |
| `website_blocks` | `trg_website_blocks_updated_at` | `BEFORE UPDATE` |
| `website_items`  | `trg_website_items_updated_at`  | `BEFORE UPDATE` |

Ambos ejecutan:

```text
public.touch_updated_at()
```

#### 9.2 Función `touch_updated_at()`

Características:

| Campo         | Valor                    |
| ------------- | ------------------------ |
| Lenguaje      | PL/pgSQL                 |
| Seguridad     | Invoker                  |
| Propietario   | `postgres`               |
| `search_path` | `pg_catalog`, `public`   |
| Acción        | `NEW.updated_at = now()` |

#### 9.3 Funciones ausentes

No existe trigger para:

- registrar autor;
- registrar cambios;
- crear historial;
- impedir modificar una versión publicada;
- validar completitud;
- crear redirecciones por cambio de slug;
- archivar dependencias;
- limpiar referencias;
- generar publicación inmutable;
- impedir borrado peligroso.

#### 10. Row Level Security

#### 10.1 Estado de RLS

| Tabla            |  RLS | FORCE RLS |
| ---------------- | ---: | --------: |
| `website_blocks` |   Sí |        No |
| `website_items`  |   Sí |        No |

#### 10.2 Políticas vigentes confirmadas por catálogo

##### `website_blocks`

```text
website_blocks_authenticated_read
FOR SELECT
TO authenticated
USING (is_published = true)
```

##### `website_items`

```text
website_items_authenticated_read
FOR SELECT
TO authenticated
USING (is_published = true)
```

#### 10.3 Acceso anónimo

No existe política `anon` vigente sobre estas tablas.

Consecuencia:

```text
anon key
   ↓
Data API
   ↓
sin política aplicable
   ↓
sin filas accesibles
```

#### 10.4 Escritura autenticada directa

No existen políticas para:

- INSERT;
- UPDATE;
- DELETE.

Aunque el rol `authenticated` posee privilegios SQL amplios, RLS bloquea la escritura directa mediante Data API.

#### 10.5 Acceso privilegiado

`service_role` omite RLS.

Por ello:

- puede leer borradores;
- puede leer filas ocultas;
- puede insertar;
- puede editar;
- puede eliminar;
- puede truncar si el código o conexión lo permite.

La seguridad pasa a depender del servidor que conserva la clave.

#### 10.6 FORCE RLS

Las tablas no usan `FORCE ROW LEVEL SECURITY`.

El propietario de tabla y roles con bypass pueden ignorar RLS.

No se propone activar FORCE RLS sobre el modelo legacy sin diseñar primero:

- canal de administración;
- funciones de publicación;
- migraciones;
- pruebas de VISO.

#### 10.7 Discrepancia del Advisor

Security Advisor y Performance Advisor reportaron nombres legacy adicionales:

```text
authenticated_can_read_website_blocks
authenticated_can_read_website_items
```

Sin embargo, una lectura directa de `pg_policy` confirmó que actualmente solo existen:

```text
website_blocks_authenticated_read
website_items_authenticated_read
```

Conclusión:

- no se documenta una política duplicada como hecho vigente;
- el Advisor parece conservar un resultado desactualizado o no reconciliado;
- deberá volver a ejecutarse después de la próxima migración;
- el catálogo PostgreSQL vigente se toma como fuente de verdad para esta auditoría.

#### 11. Privilegios SQL y exposición por Data API

#### 11.1 Grants actuales de tablas

El rol `authenticated` posee en ambas tablas:

```text
SELECT
INSERT
UPDATE
DELETE
TRUNCATE
REFERENCES
TRIGGER
```

`service_role` y `postgres` poseen el mismo conjunto.

`anon` no posee privilegios sobre las tablas auditadas.

#### 11.2 Evaluación

Los privilegios de `authenticated` son más amplios que la capacidad funcional necesaria.

Actualmente la protección depende de:

```text
GRANT amplio
        +
RLS sin políticas de escritura
        =
escritura bloqueada
```

Una configuración de mínimo privilegio debería declarar explícitamente:

- qué rol puede leer;
- qué rol puede escribir;
- qué operaciones se permiten;
- qué canal utiliza el editor;
- qué canal utiliza la web pública.

#### 11.3 Cambio de plataforma relevante

Supabase está migrando hacia grants explícitos para la Data API.

Por tanto, las migraciones nuevas no deben asumir que crear una tabla en `public` la vuelve accesible automáticamente.

Toda tabla o función web futura deberá declarar:

- `REVOKE`;
- `GRANT`;
- RLS;
- políticas;
- pruebas por rol.

#### 11.4 Esquemas expuestos

La configuración exacta de `pgrst.db_schemas` no estuvo disponible mediante la consulta de esta sesión.

Debe verificarse desde la configuración del proyecto:

- esquemas expuestos;
- schemas adicionales;
- exposición de funciones;
- acceso GraphQL;
- Data API.

No se asume como confirmado ningún esquema distinto de `public`.

#### 12. Políticas de escritura

#### 12.1 Tablas CMS

##### Escritura desde cliente autenticado

Estado:

```text
Bloqueada por ausencia de políticas RLS de escritura.
```

##### Escritura desde VISO

Estado:

```text
Permitida mediante service_role.
```

##### Problema

Las acciones del CMS:

- no usan una política por permiso;
- no usan el usuario como rol SQL limitado;
- no dependen de RLS;
- pueden ejecutar operaciones administrativas después de una guardia de aplicación.

#### 12.2 Decisión recomendada

No crear políticas de escritura directa para `authenticated` sobre las tablas legacy.

El futuro flujo deberá utilizar:

- permisos canónicos;
- comando de dominio;
- transacción;
- auditoría;
- revisión editable;
- publicación separada;
- privilegios mínimos.

#### 12.3 Matriz objetivo preliminar

| Operación                | Canal objetivo                           |
| ------------------------ | ---------------------------------------- |
| Leer publicación pública | `anon` sobre proyección publicada        |
| Leer preview             | Usuario autenticado + token o permiso    |
| Crear borrador           | Backend VISO autorizado                  |
| Editar borrador          | Backend VISO autorizado                  |
| Publicar                 | Función transaccional autorizada         |
| Restaurar                | Función transaccional autorizada         |
| Eliminar                 | Archivo o soft delete con auditoría      |
| Leer tablas legacy       | Solo migración y compatibilidad temporal |

#### 13. Storage

#### 13.1 Bucket `website-media`

| Campo               | Valor            |
| ------------------- | ---------------- |
| Existe              | Sí               |
| Público             | **No**           |
| Límite por archivo  | 41.943.040 bytes |
| Límite aproximado   | 40 MiB           |
| Objetos             | 0                |
| Bytes almacenados   | 0                |
| Lectura anónima     | No               |
| Lectura autenticada | Sí               |

#### 13.2 MIME permitidos

##### Imágenes

- `image/jpeg`;
- `image/png`;
- `image/webp`;
- `image/gif`;
- `image/svg+xml`.

##### Videos

- `video/mp4`;
- `video/webm`;
- `video/quicktime`.

#### 13.3 Políticas vigentes de `website-media`

| Política                                       | Operación | Rol             |
| ---------------------------------------------- | --------- | --------------- |
| `website_media_authenticated_read`             | SELECT    | `authenticated` |
| `website_media_owner_or_global_manager_insert` | INSERT    | `authenticated` |
| `website_media_owner_or_global_manager_update` | UPDATE    | `authenticated` |
| `website_media_owner_or_global_manager_delete` | DELETE    | `authenticated` |

Las políticas de mutación exigen:

```text
public.is_owner()
OR
public.is_global_manager()
```

#### 13.4 Contradicción de entrega pública

El endpoint actual de VISO:

1. sube a `website-media`;
2. ejecuta `getPublicUrl(path)`;
3. guarda esa URL en el contenido.

Pero el bucket es privado.

Resultado posible:

```text
archivo almacenado
        ↓
URL generada
        ↓
URL persistida
        ↓
visitante anónimo
        ↓
acceso denegado
```

Esta contradicción no se ha manifestado con objetos reales porque el bucket está vacío.

#### 13.5 Bucket `pass-satellite-logos`

| Campo                  | Valor                                   |
| ---------------------- | --------------------------------------- |
| Público                | Sí                                      |
| Objetos                | 11                                      |
| Uso web actual         | Logos de negocios/restaurantes          |
| Relación con asset web | URL directa, sin `website_media_assets` |

Los restaurantes actuales reutilizan logos operativos como imagen pública, pero no existe:

- ownership editorial;
- alt text web;
- focal point;
- variante;
- relación de uso;
- reemplazo controlado.

#### 13.6 Riesgos de Storage

- URLs públicas sobre bucket privado;
- SVG permitido sin política de sanitización;
- videos de hasta 40 MiB;
- ausencia de biblioteca;
- ausencia de metadata;
- ausencia de referencias;
- archivos huérfanos;
- ausencia de limpieza;
- permisos basados en roles legacy;
- helpers de política ejecutables públicamente;
- falta de estrategia CDN y caché explícita.

#### 13.7 Costos y capacidad actual

El bucket `website-media` contiene:

```text
0 objetos
0 bytes
```

Por tanto, no existe consumo de almacenamiento ni transferencia atribuible a objetos de ese bucket en el estado auditado.

Esto no elimina:

- el costo normal del proyecto Supabase;
- el costo futuro de almacenamiento;
- transferencia de videos;
- transformaciones;
- CDN;
- backups externos de archivos.

Antes de habilitar carga masiva debe definirse:

- límites editoriales inferiores al máximo técnico;
- compresión;
- cuotas;
- monitoreo;
- retención;
- eliminación de huérfanos.

#### 14. Funciones auxiliares de autorización

#### 14.1 `current_employee_role()`

| Campo                   | Valor              |
| ----------------------- | ------------------ |
| Seguridad               | `SECURITY DEFINER` |
| Volatilidad             | `STABLE`           |
| Propietario             | `postgres`         |
| `search_path`           | Fijado             |
| EXECUTE `anon`          | Sí                 |
| EXECUTE `authenticated` | Sí                 |
| EXECUTE `PUBLIC`        | Sí                 |

#### 14.2 `is_owner()`

| Campo                   | Valor              |
| ----------------------- | ------------------ |
| Seguridad               | `SECURITY DEFINER` |
| Propietario             | `supabase_admin`   |
| `search_path`           | Fijado             |
| EXECUTE `anon`          | Sí                 |
| EXECUTE `authenticated` | Sí                 |
| EXECUTE `PUBLIC`        | Sí                 |

#### 14.3 `is_global_manager()`

| Campo                   | Valor                        |
| ----------------------- | ---------------------------- |
| Seguridad               | `SECURITY DEFINER`           |
| Propietario             | `supabase_admin`             |
| `search_path`           | **No fijado en `proconfig`** |
| EXECUTE `anon`          | Sí                           |
| EXECUTE `authenticated` | Sí                           |
| EXECUTE `PUBLIC`        | Sí                           |

#### 14.4 Diagnóstico

Los helpers:

- están en un esquema expuesto;
- usan `SECURITY DEFINER`;
- pueden ejecutarse desde `PUBLIC`;
- expresan autorización mediante nombres de rol;
- no utilizan permisos atómicos del modelo canónico.

Riesgos:

- superficie de función innecesaria;
- posible introspección de clasificación de rol;
- dependencia de roles legacy;
- `search_path` mutable en `is_global_manager()`;
- divergencia frente al catálogo de autorización definitivo.

#### 14.5 Recomendación

Durante la implementación futura:

1. mover helpers sensibles a un schema privado;
2. fijar `search_path`;
3. revocar EXECUTE a `PUBLIC` y `anon`;
4. conceder solo al rol necesario;
5. sustituir chequeos de rol por capacidades canónicas;
6. usar `(select helper())` dentro de políticas cuando sea aplicable;
7. crear pruebas por rol.

#### 15. Relaciones e integridad referencial

#### 15.1 Foreign keys

No existe ninguna foreign key:

- saliente desde `website_blocks`;
- saliente desde `website_items`;
- entrante hacia estas tablas.

#### 15.2 Vistas y funciones

No existen actualmente:

- vistas que referencien estas tablas;
- funciones PostgreSQL que las referencien;
- RPC de publicación;
- vista pública de contenido vigente;
- función de preview;
- función de migración de slug.

#### 15.3 Relaciones faltantes

##### `website_blocks`

No se relaciona con:

- sitio;
- página;
- revisión;
- publicación;
- asset;
- autor;
- editor;
- bloque padre;
- schema de sección.

##### `website_items`

No se relaciona con:

- restaurante operativo;
- satélite;
- sede;
- vacante de Talento;
- evento operativo;
- servicio corporativo;
- app registrada;
- asset;
- autor;
- publicación.

#### 15.4 Consecuencias

- slugs como relación informal;
- bloques huérfanos;
- galerías huérfanas;
- medios huérfanos;
- eliminación sin cascada controlada;
- importación sin sincronización;
- imposibilidad de probar integridad desde la base;
- duplicación entre datos operativos y editoriales.

#### 16. Linaje de migraciones

#### 16.1 Estado inicial

`20260327110000_website_cms.sql` creó:

- tablas;
- índices;
- triggers;
- RLS;
- lectura pública para `anon` y `authenticated`;
- seeds publicados.

#### 16.2 Storage inicial

`20260327120000_website_media_storage.sql` creó:

- bucket público;
- lectura pública;
- escritura de propietarios y gerentes generales.

#### 16.3 Endurecimiento posterior

`20260519181000_harden_authenticated_write_policies.sql`:

- retiró lectura pública;
- creó lectura solo autenticada;
- dejó mutaciones directas sin políticas.

`20260519193000_harden_website_media_storage.sql`:

- volvió privado `website-media`;
- retiró lectura pública;
- dejó lectura autenticada.

#### 16.4 Evaluación de drift

El estado vigente coincide con las migraciones de endurecimiento:

- tablas con lectura autenticada;
- sin lectura anónima;
- bucket privado;
- políticas autenticadas.

No se identificó un cambio manual no representado para esos objetos.

#### 16.5 Supuesto obsoleto

La migración de Storage justificó el bucket privado porque no existía una superficie web pública conectada.

Ese supuesto ya no es válido:

```text
ventogroup.co
        ↓
consume contenido de este proyecto
```

La corrección debe realizarse mediante una decisión de arquitectura de medios, no revirtiendo ciegamente la migración.

#### 17. Calidad de datos actual

#### 17.1 `website_blocks`

| Métrica               | Resultado |
| --------------------- | --------: |
| Total                 |         7 |
| Publicados            |         7 |
| Ocultos               |         0 |
| Sin título            |         0 |
| Sin medio             |         7 |
| CTA `#`               |         0 |
| `page_slug` distintos |         2 |
| Tipos distintos       |         3 |

Tipos:

| Tipo            | Cantidad |
| --------------- | -------: |
| `detail_hero`   |        1 |
| `gallery_media` |        3 |
| `hero`          |        1 |
| `media`         |        2 |

Agrupaciones:

| `page_slug`                        | Cantidad |
| ---------------------------------- | -------: |
| `home`                             |        3 |
| `restaurant:restaurante-destacado` |        4 |

#### 17.2 `website_items`

| Métrica                     | Resultado |
| --------------------------- | --------: |
| Total                       |         9 |
| Publicados                  |         9 |
| Ocultos                     |         0 |
| Sin body                    |         9 |
| Sin imagen                  |         7 |
| Sin video                   |         9 |
| Acción `#`                  |         6 |
| Fechas de evento invertidas |         0 |

##### Por categoría

| Categoría   | Total | Publicados | Acción `#` | Sin imagen | Sin body |
| ----------- | ----: | ---------: | ---------: | ---------: | -------: |
| App         |     3 |          3 |          3 |          3 |        3 |
| Evento      |     1 |          1 |          1 |          1 |        1 |
| Vacante     |     1 |          1 |          1 |          1 |        1 |
| Restaurante |     3 |          3 |          0 |          1 |        3 |
| Servicio    |     1 |          1 |          1 |          1 |        1 |

#### 17.3 Conclusión

La columna `is_published` no representa un proceso editorial confiable.

Todos los registros están publicados, incluso:

- placeholders;
- contenidos sin medios;
- acciones `#`;
- un restaurante placeholder;
- galerías vacías;
- entidades sin body.

#### 18. Security Advisor y Performance Advisor

#### 18.1 Hallazgos de seguridad relevantes

Los Advisors reportaron, entre otros:

- políticas permisivas amplias en múltiples objetos del proyecto;
- funciones con configuración de seguridad a revisar;
- protección contra contraseñas filtradas desactivada a nivel de Auth;
- posibles políticas duplicadas históricas para las tablas web.

La auditoría directa confirmó:

- una sola política vigente por tabla CMS;
- helpers `SECURITY DEFINER` ejecutables públicamente;
- `is_global_manager()` sin `search_path` fijado;
- grants amplios;
- dependencia de `service_role`.

Los hallazgos globales no vinculados a la web se remiten al plan integral de Vento OS.

#### 18.2 Hallazgos de rendimiento relevantes

El Advisor reportó:

- índices web sin uso;
- políticas de Storage que llaman helpers por fila;
- oportunidad de envolver helpers estables mediante subconsulta.

Ejemplo objetivo conceptual:

```sql
using (
  (select private.has_permission('website.media.upload'))
)
```

No se debe aplicar este patrón hasta definir la función canónica y sus permisos.

#### 18.3 Regla de interpretación

Los Advisors son señales de revisión, no órdenes automáticas.

Toda corrección deberá contrastarse con:

- catálogo vigente;
- uso real;
- arquitectura aprobada;
- pruebas;
- migraciones versionadas.

#### 19. Arquitectura objetivo recomendada

#### 19.1 Separación de modelos

```text
MODELO EDITORIAL PRIVADO
├── páginas
├── revisiones
├── borradores
├── medios
└── auditoría

PUBLICACIÓN
├── validación
├── versión inmutable
├── puntero vigente
└── revalidación

PROYECCIÓN PÚBLICA
├── solo campos públicos
├── solo versión vigente
├── sin borradores
├── sin secretos
└── acceso mínimo
```

#### 19.2 Lectura pública

Opciones válidas a decidir en arquitectura:

##### Opción A — Tablas o vistas públicas con RLS

- `anon` recibe solo `SELECT`;
- RLS limita a publicación vigente;
- vista `security_invoker = true` cuando aplique;
- grants explícitos;
- sin acceso a revisiones privadas.

##### Opción B — RPC pública restringida

- función estable;
- retorno tipado;
- solo contenido publicado;
- EXECUTE explícito;
- schema privado para lógica;
- sin SQL dinámico.

##### Opción C — Backend público no privilegiado

- conexión o rol dedicado;
- sin `service_role`;
- privilegios limitados;
- endpoint cacheable.

#### 19.3 Decisión provisional

Mientras no exista el modelo de publicación:

- mantener cerradas las tablas legacy para `anon`;
- no exponer placeholders;
- no abrir `website-media` sin estrategia;
- limitar nuevos cambios al CMS legacy;
- no usar estas tablas como contrato definitivo.

#### 20. Registro canónico de brechas

| Brecha        | Descripción                                                           | Severidad | Tareas responsables                         |
| ------------- | --------------------------------------------------------------------- | --------- | ------------------------------------------- |
| `WEB-GAP-121` | Las tablas legacy no representan páginas, revisiones ni publicaciones | Crítica   | `WEB-DB-002`, `WEB-DB-003`, `WEB-DB-004`    |
| `WEB-GAP-122` | Las 16 filas actuales están publicadas sin proceso editorial          | Crítica   | `WEB-MIG-022`, `WEB-PUB-001`, `WEB-PUB-005` |
| `WEB-GAP-123` | La web pública depende potencialmente de `service_role`               | Crítica   | `WEB-SEC-017`                               |
| `WEB-GAP-124` | No existe canal público de privilegio mínimo                          | Crítica   | `WEB-DB-020`, `WEB-SEC-019`                 |
| `WEB-GAP-125` | `authenticated` conserva grants SQL innecesarios                      | Alta      | `WEB-SEC-019`                               |
| `WEB-GAP-126` | No existe validación de URL, CTA ni slug en base                      | Alta      | `WEB-RND-002`, `WEB-PUB-005`                |
| `WEB-GAP-127` | No existe validación temporal de eventos                              | Alta      | `WEB-RND-002`, `WEB-PUB-005`                |
| `WEB-GAP-128` | No existen reglas por categoría en `website_items`                    | Alta      | `WEB-ARC-003`, `WEB-RND-002`                |
| `WEB-GAP-129` | No existen foreign keys del dominio web                               | Crítica   | `WEB-DB-002` a `WEB-DB-007`, `WEB-ARC-007`  |
| `WEB-GAP-130` | Los medios se relacionan mediante URL libre                           | Crítica   | `WEB-DB-006`, `WEB-DB-007`                  |
| `WEB-GAP-131` | El bucket privado se consume como si fuera público                    | Crítica   | `WEB-MED-014`, `WEB-SEC-017`                |
| `WEB-GAP-132` | `website-media` no contiene objetos ni biblioteca operativa           | Alta      | `WEB-MED-002`, `WEB-MIG-014`                |
| `WEB-GAP-133` | SVG está habilitado sin política de sanitización                      | Alta      | `WEB-MED-004`, `WEB-SEC-019`                |
| `WEB-GAP-134` | Los helpers de autorización son ejecutables por `PUBLIC` y `anon`     | Alta      | `WEB-SEC-019`                               |
| `WEB-GAP-135` | `is_global_manager()` es SECURITY DEFINER sin `search_path` fijado    | Crítica   | `WEB-SEC-019`                               |
| `WEB-GAP-136` | Las políticas de Storage dependen de roles legacy                     | Alta      | `WEB-PRD-002`, `WEB-MED-013`, `WEB-SEC-019` |
| `WEB-GAP-137` | No existe auditoría de cambios en tablas legacy                       | Crítica   | `WEB-DB-012`, `WEB-PUB-014`                 |
| `WEB-GAP-138` | No existe guardado transaccional de entidad y bloques                 | Crítica   | `WEB-PUB-015`                               |
| `WEB-GAP-139` | El cambio de slug no tiene integridad ni redirección                  | Crítica   | `WEB-PRD-016`, `WEB-GLB-010`                |
| `WEB-GAP-140` | No existe una función o vista de publicación vigente                  | Crítica   | `WEB-DB-020`                                |
| `WEB-GAP-141` | Las migraciones antiguas dependen de grants implícitos                | Alta      | `WEB-SEC-019`                               |
| `WEB-GAP-142` | Los Advisors muestran referencias a políticas históricas no presentes | Media     | `WEB-QA-024`                                |
| `WEB-GAP-143` | Los índices no tienen carga suficiente para validarse                 | Media     | `WEB-QA-024`, `WEB-PERF-006`                |
| `WEB-GAP-144` | No existen pruebas automáticas por rol y operación                    | Crítica   | `WEB-QA-024`                                |
| `WEB-GAP-145` | La configuración de esquemas expuestos no quedó verificable desde SQL | Alta      | `WEB-SEC-019`, `WEB-QA-024`                 |

#### 21. Cambios obligatorios al plan maestro

#### 21.1 Actualizar estados

Marcar:

```text
[x] WEB-AUD-005 — Auditar VISO Website CMS
```

Mantener:

```text
[x] WEB-AUD-004 — Inventariar contenido administrable
[ ] WEB-ARC-005 — Pendiente; borrador fuera de secuencia
```

#### 21.2 Materializar tareas ya propuestas

Las siguientes tareas fueron creadas por auditorías previas y deben existir en sus fases propietarias:

```text
[ ] WEB-MED-014 — Resolver entrega pública segura de medios
[ ] WEB-SEC-017 — Eliminar dependencia de service role para lectura pública
[ ] WEB-SEC-018 — Endurecer el CMS legacy mientras continúe operativo
[ ] WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes
[ ] WEB-PUB-015 — Implementar guardado atómico de contenido relacionado
```

#### 21.3 Agregar `WEB-DB-020`

Ubicación recomendada: después de `WEB-DB-019`.

```text
[ ] WEB-DB-020 — Crear proyección pública de publicación vigente
```

Alcance:

- contrato público mínimo;
- publicación vigente;
- exclusión de borradores;
- exclusión de campos administrativos;
- sitio y ruta;
- revisión publicada;
- metadata;
- secciones;
- colecciones;
- caché;
- compatibilidad con RLS;
- estrategia de vista, tabla materializada, RPC o función;
- pruebas con `anon`.

#### 21.4 Agregar `WEB-SEC-019`

Ubicación recomendada: después de `WEB-SEC-018`.

```text
[ ] WEB-SEC-019 — Reducir privilegios SQL y endurecer funciones del dominio web
```

Alcance:

- grants explícitos;
- revocar privilegios innecesarios;
- revisar default privileges;
- retirar EXECUTE de `PUBLIC`;
- retirar EXECUTE de `anon` cuando no sea necesario;
- mover funciones sensibles a schema privado;
- fijar `search_path`;
- reemplazar roles por capacidades;
- revisar schemas expuestos;
- revisar Data API;
- documentar service role;
- reconciliar Advisors con catálogo real.

#### 21.5 Agregar `WEB-QA-024`

Ubicación recomendada: después de `WEB-QA-023`.

```text
[ ] WEB-QA-024 — Probar RLS, GRANTs y Storage del dominio web
```

Matriz obligatoria:

| Rol                         |        SELECT publicado |         SELECT borrador |           INSERT |           UPDATE |     DELETE |     Storage read | Storage write |
| --------------------------- | ----------------------: | ----------------------: | ---------------: | ---------------: | ---------: | ---------------: | ------------: |
| `anon`                      |          Según contrato |                      No |               No |               No |         No | Según estrategia |            No |
| `authenticated` sin permiso |         Según necesidad |                      No |               No |               No |         No |  Según necesidad |            No |
| Editor                      |                      Sí |                      Sí |               Sí |               Sí | No directo |               Sí | Según permiso |
| Publicador                  |                      Sí |                      Sí | Mediante comando | Mediante comando | No directo |               Sí | Según permiso |
| Administrador               |                      Sí |                      Sí | Mediante comando | Mediante comando | Controlado |               Sí |    Controlado |
| `service_role`              | Solo backend autorizado | Solo backend autorizado |       Controlado |       Controlado | Controlado |       Controlado |    Controlado |

Pruebas:

- Data API;
- funciones;
- vistas;
- Storage;
- signed URL;
- URL pública;
- preview;
- publicación;
- retirada de grants;
- ausencia de bypass accidental;
- Advisors sin falsos positivos persistentes.

#### 22. Prioridad de resolución

#### 22.1 Antes de usar el CMS legacy con más usuarios

1. materializar `WEB-SEC-018`;
2. restringir acciones por permiso;
3. crear contenido oculto por defecto;
4. resolver el bucket privado;
5. impedir CTA `#`;
6. fijar `search_path`;
7. retirar EXECUTE público innecesario;
8. auditar acciones.

#### 22.2 Antes de implementar el renderer definitivo

1. aprobar modelo de publicación;
2. crear `WEB-DB-020`;
3. eliminar `service_role` de lectura pública;
4. definir contratos;
5. crear pruebas RLS;
6. definir revalidación;
7. separar preview.

#### 22.3 Antes de abrir lectura anónima

No se deberá conceder `SELECT` a `anon` hasta que:

- exista una proyección pública;
- los placeholders estén fuera;
- la publicación sea inmutable;
- los campos públicos estén definidos;
- RLS esté probada;
- grants estén probados;
- sitemap use solo contenido válido;
- no se expongan borradores.

#### 23. Criterios de aprobación cumplidos

`WEB-AUD-006` fue aprobada con los siguientes criterios cumplidos:

- [x] el inventario de tablas;
- [x] el inventario de 9 índices;
- [x] el inventario de restricciones;
- [x] el inventario de triggers;
- [x] el diagnóstico de RLS;
- [x] el diagnóstico de grants;
- [x] el diagnóstico de `service_role`;
- [x] el diagnóstico de Storage;
- [x] la contradicción de `getPublicUrl()` sobre bucket privado;
- [x] el diagnóstico de funciones auxiliares;
- [x] la ausencia total de foreign keys;
- [x] el linaje de migraciones;
- [x] el estado de los 16 registros publicados;
- [x] el registro `WEB-GAP-121` a `WEB-GAP-145`;
- [x] la incorporación de `WEB-DB-020`;
- [x] la incorporación de `WEB-SEC-019`;
- [x] la incorporación de `WEB-QA-024`;
- [x] que las tablas legacy permanezcan cerradas a `anon` hasta existir proyección pública segura.

#### 24. Estado de cierre vigente

```text
WEB-AUD-006 — APROBADA
```

##### 24.1 No ejecutar todavía

- no crear migraciones;
- no cambiar grants;
- no cambiar RLS;
- no abrir tablas a `anon`;
- no activar FORCE RLS;
- no cambiar Storage;
- no hacer público `website-media`;
- no revocar funciones;
- no eliminar índices;
- no depurar datos;
- no cambiar variables;
- no retirar `service_role`;
- no modificar producción.

##### 24.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
[x] WEB-AUD-007 — Auditar contenido en producción
```


#### 25. Evidencia técnica

##### 25.1 Migraciones

- `supabase/migrations/20260327110000_website_cms.sql`;
- `supabase/migrations/20260327120000_website_media_storage.sql`;
- `supabase/migrations/20260519173000_security_hardening_anon_and_rpc_lint.sql`;
- `supabase/migrations/20260519181000_harden_authenticated_write_policies.sql`;
- `supabase/migrations/20260519193000_harden_website_media_storage.sql`.

##### 25.2 Catálogos PostgreSQL

- columnas;
- índices;
- constraints;
- triggers;
- políticas;
- grants;
- default ACL;
- funciones;
- owners;
- RLS;
- estadísticas;
- relaciones;
- vistas;
- dependencias.

##### 25.3 Storage

- configuración de buckets;
- conteo de objetos;
- tamaño almacenado;
- políticas sobre `storage.objects`;
- MIME;
- límite de archivo.

##### 25.4 Aplicaciones consumidoras

- cliente Supabase de `Vento-Group`;
- loaders de contenido;
- CMS de VISO;
- uploader de medios;
- cliente administrativo;
- guardias de acceso.

##### 25.5 Fuentes oficiales revisadas

- Supabase Row Level Security;
- Supabase Securing Your Data;
- Supabase Storage Access Control;
- Supabase changelog sobre grants explícitos y exposición de Data API.

#### 26. Registro de cambios

| Versión        | Fecha      | Cambio                                                                    | Estado            |
| -------------- | ---------- | ------------------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Auditoría integral de la superficie Supabase utilizada por la web pública | Aprobada |


### WEB-AUD-007 — Auditoria canonica de contenido en produccion

> Verificacion del contenido realmente visible en `ventogroup.co`, su procedencia, los placeholders activos, las variables de entorno requeridas y las paginas funcionalmente vacias o incompletas.

#### 0. Control documental

| Campo                     | Valor                                                |
| ------------------------- | ---------------------------------------------------- |
| Identificador             | `WEB-AUD-007`                                        |
| Nombre                    | Auditar contenido en produccion                      |
| Fase                      | FASE 1 — Auditoria y linea base                      |
| Estado                    | APROBADA                                             |
| Fecha                     | `2026-07-23`                                         |
| Dominio auditado          | `https://www.ventogroup.co`                          |
| Repositorio publico       | `devVentoGroup/Vento-Group`                          |
| Base de datos             | Supabase `vento-os-dev`                              |
| Proyecto Supabase         | `clzdpinthhtknkmefsxx`                               |
| Aplicacion administradora | `devVentoGroup/vento-viso`                           |
| Rama de referencia        | `main`                                               |
| Cambios en codigo         | Ninguno                                              |
| Cambios en Supabase       | Ninguno                                              |
| Cambios en produccion     | Ninguno                                              |
| Proxima tarea             | `WEB-AUD-008 — Crear matriz editable vs hardcodeado` |

##### 0.1 Continuidad canonica

```text
[x] WEB-AUD-001 — Inventariar todas las rutas publicas
[x] WEB-AUD-002 — Inventariar todos los componentes publicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
[x] WEB-AUD-007 — Auditar contenido en produccion
```

`WEB-ARC-005` permanece pendiente y no forma parte de la continuidad actual.

#### 1. Objetivo

Confirmar el estado real del sitio publicado, diferenciando claramente:

1. contenido real proveniente de Supabase;
2. contenido seed o placeholder almacenado en Supabase;
3. contenido fijo escrito en React;
4. fallbacks activados por codigo;
5. paginas activas, incompletas, funcionalmente vacias o inexistentes;
6. variables de entorno requeridas y su estado de confirmacion;
7. riesgos que hoy afectan a visitantes, indexacion y operacion editorial.

#### 2. Alcance

##### 2.1 Superficies publicas verificadas

- `/`;
- `/restaurantes`;
- `/restaurantes/vento-cafe`;
- `/restaurantes/saudo`;
- `/restaurantes/molka`;
- `/empleos`;
- `/servicios`;
- `/ecosistema`;
- `/eventos`;
- `sitemap.xml` y `robots.txt` mediante implementacion y evidencia previa;
- rutas faltantes ya registradas en `WEB-AUD-001`.

##### 2.2 Fuentes contrastadas

- salida publica indexada y recuperable de `ventogroup.co`;
- contenido vigente de `website_blocks`;
- contenido vigente de `website_items`;
- codigo de lectura en `src/lib/content.ts`;
- cliente Supabase en `src/lib/supabase.ts`;
- resolucion de dominio en `src/lib/seo.ts`;
- composiciones de paginas en `src/app`;
- `.env.example`;
- `README.md`;
- plan canonico vigente.

##### 2.3 Limitaciones de la verificacion

No se tuvo acceso directo al panel de Vercel o proveedor de despliegue.

Por tanto:

- no se leyeron valores secretos;
- no se copiaron claves;
- no se verifico visualmente el panel de variables;
- algunas variables se clasifican como confirmadas por comportamiento observable, no por lectura directa del dashboard;
- las paginas dinamicas de restaurante no pudieron recuperarse mediante el lector web externo, por lo que su estado se determino contrastando la ruta desplegada, el codigo vigente y los datos reales de Supabase.

#### 3. Resultado ejecutivo

##### 3.1 Resumen principal

| Pregunta                                                    | Respuesta                                                      |
| ----------------------------------------------------------- | -------------------------------------------------------------- |
| El sitio usa datos reales                                   | **Si**                                                         |
| El sitio consulta el proyecto Supabase auditado             | **Si, confirmado por coincidencia exacta de datos**            |
| Produccion depende de `service_role`                        | **Si, inferencia de alta confianza**                           |
| Hay placeholders visibles                                   | **Si**                                                         |
| Hay contenido seed publicado                                | **Si**                                                         |
| Hay paginas completamente en blanco                         | No se confirmaron paginas HTML totalmente vacias               |
| Hay paginas funcionalmente vacias                           | **Si: Empleos y Eventos**                                      |
| Hay secciones visualmente vacias                            | **Si: hero y medios sin assets**                               |
| Hay paginas incompletas                                     | **Si: Inicio, Restaurantes, detalles, Servicios y Ecosistema** |
| Hay CTA sin destino real                                    | **Si**                                                         |
| Hay contenido tecnico o instructivo susceptible de aparecer | **Si**                                                         |
| Las variables efectivas pueden leerse desde GitHub          | No                                                             |
| El `.env.example` representa todas las variables usadas     | **No**                                                         |

##### 3.2 Diagnostico general

La web publicada no esta funcionando exclusivamente con fallbacks locales.

El sitio mezcla simultaneamente:

```text
DATOS REALES DE SUPABASE
        +
SEEDS Y PLACEHOLDERS DE SUPABASE
        +
COPY FIJO EN REACT
        +
FALLBACKS DE COMPONENTES
```

La presencia de datos reales no significa que el contenido publicado sea valido. En produccion se muestran filas reales de la base, pero varias de esas filas son seeds provisionales marcados como publicados.

##### 3.3 Clasificacion de la produccion actual

| Clase                   | Ejemplos                                  | Estado                     |
| ----------------------- | ----------------------------------------- | -------------------------- |
| Entidad real            | Vento Cafe, Saudo, Molka                  | Activa pero incompleta     |
| Seed publicado          | Vacante destacada                         | Visible en produccion      |
| Seed publicado          | Servicio destacado                        | Visible en produccion      |
| Entidad real incompleta | Vento Pass, Anima, Vento OS               | Visible sin destino valido |
| Copy fijo               | Introducciones y pilares                  | Visible                    |
| Fallback de componente  | Caracteristicas inventadas de restaurante | Visible                    |
| Medio faltante          | Hero, banners y galerias                  | Vacio o no renderizado     |
| Ruta sin pagina         | Eventos                                   | Redireccion                |

#### 4. Confirmacion de uso de datos reales

##### 4.1 Evidencia de restaurantes

Produccion muestra:

- Vento Cafe;
- Saudo;
- Molka;
- direcciones reales;
- descripciones cortas coincidentes con Supabase.

El fallback local solo define un restaurante ficticio llamado `Restaurante destacado`.

La aparicion de los tres restaurantes reales confirma que el sitio consulta `website_items` en produccion.

##### 4.2 Evidencia de Empleos

Produccion muestra:

```text
Vacante destacada
Publica vacantes dinamicas desde VISO.
```

Ese texto coincide con la fila vigente de `website_items`, no con el fallback local, cuyo copy es diferente.

Conclusion:

```text
/empleos usa datos de Supabase.
El dato leido es real como fila, pero es placeholder como contenido.
```

##### 4.3 Evidencia de Servicios

Produccion muestra:

```text
Servicio destacado
Muestra servicios del ecosistema.
```

El texto coincide con la fila vigente de Supabase.

Conclusion:

```text
/servicios usa datos de Supabase.
La entidad publicada es un seed provisional.
```

##### 4.4 Evidencia de Ecosistema

Produccion muestra:

- Vento Pass;
- Anima;
- Vento OS;
- `Membresias, beneficios y experiencia cliente.`;
- `Centro operativo del ecosistema Vento.`.

Esos textos coinciden con las filas vigentes de Supabase y difieren de los fallbacks locales.

Conclusion:

```text
/ecosistema usa datos de Supabase.
Las aplicaciones representan productos reales, pero sus registros publicos estan incompletos.
```

##### 4.5 Evidencia de bloques de Inicio

Supabase contiene tres bloques `home` publicados:

- `hero_main`;
- `home_media_1`;
- `home_media_2`.

Los tres carecen de `media_url`.

La composicion de Inicio filtra slides sin medio y utiliza copy React para la mayor parte de las secciones. Por ello, la pagina puede consultar bloques reales sin que estos controlen la experiencia visible completa.

##### 4.6 Conclusion de procedencia

| Dominio      | Fuente real usada | Fuente dominante visible                               |
| ------------ | ----------------- | ------------------------------------------------------ |
| Inicio       | Supabase + React  | React y componentes                                    |
| Restaurantes | Supabase + React  | Supabase para entidades; React para estructura         |
| Detalles     | Supabase + React  | Supabase para entidad; React para contenido incompleto |
| Empleos      | Supabase          | Seed de Supabase                                       |
| Servicios    | Supabase + React  | React + seed de Supabase                               |
| Ecosistema   | Supabase          | Seeds incompletos de Supabase                          |
| Eventos      | React redirect    | Sin contenido propio                                   |

#### 5. Confirmacion de dependencia de `service_role`

##### 5.1 Logica del cliente

El servidor elige la clave en este orden:

```text
SUPABASE_SERVICE_ROLE_KEY
        o
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Si no existe URL o clave, retorna `null` y se activan fallbacks.

##### 5.2 RLS vigente

Las tablas CMS no tienen politica de lectura para `anon`.

Solo permiten lectura de filas publicadas al rol:

```text
authenticated
```

El cliente de servidor no inicia una sesion autenticada.

##### 5.3 Inferencia

Produccion recupera filas reales de Supabase que un cliente `anon` no podria leer bajo las politicas vigentes.

Por tanto, la explicacion compatible con el codigo y la base es:

```text
SUPABASE_SERVICE_ROLE_KEY esta configurada en produccion.
```

Nivel de confianza:

```text
ALTO
```

No se afirma que el valor haya sido leido directamente. Se confirma por comportamiento observable y por eliminacion de alternativas compatibles con el codigo actual.

#### 6. Variables de entorno

##### 6.1 Inventario de variables referenciadas

| Variable                        | Uso                                  | Sensibilidad          |
| ------------------------------- | ------------------------------------ | --------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | URL del proyecto Supabase            | Publica               |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave anon legacy                    | Publica por diseño    |
| `SUPABASE_SERVICE_ROLE_KEY`     | Cliente privilegiado de servidor     | Secreta critica       |
| `NEXT_PUBLIC_SITE_URL`          | Dominio canonico por ambiente        | Publica               |
| `SITE_URL`                      | Alternativa server-side para dominio | Interna no secreta    |
| `VERCEL_URL`                    | Dominio automatico del despliegue    | Publica de plataforma |

##### 6.2 Estado de confirmacion

| Variable                        | Estado                       | Evidencia                                                        |
| ------------------------------- | ---------------------------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Confirmada de forma efectiva | Produccion obtiene datos del proyecto Supabase esperado          |
| `SUPABASE_SERVICE_ROLE_KEY`     | Inferida con alta confianza  | Datos reales + ausencia de RLS `anon`                            |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No confirmada en produccion  | Declarada en `.env.example`; no necesaria si existe service role |
| `NEXT_PUBLIC_SITE_URL`          | No confirmada directamente   | Declarada en `.env.example`; existe fallback de codigo           |
| `SITE_URL`                      | No confirmada                | Solo alternativa en codigo                                       |
| `VERCEL_URL`                    | No confirmada directamente   | Alternativa automatica del runtime                               |

##### 6.3 Inconsistencia de documentacion

`.env.example` declara:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

No declara:

```text
SUPABASE_SERVICE_ROLE_KEY
SITE_URL
```

El README tambien documenta solo las variables publicas y afirma que VISO escribe con `service role`, pero no documenta que la web publica tambien puede utilizar esa misma clave para lectura.

##### 6.4 Riesgo

La ausencia de la clave en `.env.example` evita copiar un secreto por accidente, pero tambien oculta una dependencia operativa real.

La correccion no debe consistir en colocar un valor real en el repositorio.

Debe documentarse asi:

```text
SUPABASE_SERVICE_ROLE_KEY=
### Server only. Never expose. Legacy dependency pending removal by WEB-SEC-017.
```

##### 6.5 Estado del dominio

El codigo resuelve el dominio en este orden:

```text
NEXT_PUBLIC_SITE_URL
SITE_URL
VERCEL_URL
fallback https://ventogroup.co
```

La salida publica recuperada usa `https://www.ventogroup.co`.

No se pudo determinar desde el repositorio si:

- `NEXT_PUBLIC_SITE_URL` contiene `www`;
- existe una redireccion de host;
- el resultado depende de `VERCEL_URL`;
- el canonical final usa `www` o el dominio raiz.

Esto debe verificarse en `WEB-SEC-012`, `WEB-OPS-002` y la futura auditoria SEO.

#### 7. Placeholders y contenido provisional visible

##### 7.1 Placeholders confirmados en produccion

| Pagina        | Contenido                                  | Fuente              | Severidad |
| ------------- | ------------------------------------------ | ------------------- | --------- |
| `/empleos`    | `Vacante destacada`                        | Supabase seed       | Critica   |
| `/empleos`    | `Publica vacantes dinamicas desde VISO.`   | Supabase seed       | Critica   |
| `/servicios`  | `Servicio destacado`                       | Supabase seed       | Alta      |
| `/servicios`  | `Muestra servicios del ecosistema.`        | Supabase seed       | Alta      |
| `/`           | Caracteristicas inventadas de restaurantes | Componente React    | Critica   |
| `/`           | `Prev` y `Next` sin slides reales          | Componente React    | Alta      |
| `/`           | Hero sin contenido multimedia              | Datos incompletos   | Alta      |
| `/ecosistema` | CTA de apps sin destinos reales            | Supabase + resolver | Alta      |
| Footer        | Instagram, LinkedIn y YouTube genericos    | React               | Alta      |
| Footer        | Newsletter no funcional                    | React               | Alta      |

##### 7.2 Placeholders deterministas en detalles de restaurante

Los tres restaurantes reales tienen:

- `body = null`;
- `schedule_text = null`;
- cero bloques de detalle;
- cero galerias propias;
- cero URL de reserva valida.

El codigo sustituye esos faltantes con:

- `Vento Group Venue`;
- `Completa la historia de este restaurante desde VISO.`;
- `Gallery`;
- `About This Venue`;
- instrucciones editoriales;
- `Venue Facts`;
- `Por definir`;
- `Notable Features`;
- caracteristicas tecnicas ficticias;
- `More Venues`.

Por tanto, cualquier detalle real de restaurante queda funcionalmente incompleto aunque la entidad exista.

##### 7.3 Placeholders no activados por consulta

Los fallbacks completos de `src/lib/content.ts` no parecen ser la fuente principal de las colecciones visibles, porque la produccion devuelve textos exactos de Supabase.

Sin embargo, siguen siendo un riesgo activo:

- si falta una variable;
- si falla Supabase;
- si una categoria queda sin filas;
- si la consulta retorna error.

En esos escenarios, los fallbacks se publican automaticamente.

##### 7.4 Distincion obligatoria

```text
Fila real de base != contenido real aprobado
```

Ejemplos:

- `vacante-destacada` es una fila real, pero una vacante ficticia;
- `servicio-destacado` es una fila real, pero un servicio provisional;
- Vento Pass es una entidad real, pero el CTA publicado no tiene destino real;
- Vento Cafe es una entidad real, pero su detalle carece de contenido editorial real.

#### 8. Paginas vacias, incompletas y ausentes

##### 8.1 Criterios

###### Activa y suficiente

Tiene contenido real, accion valida y estructura util.

###### Activa pero incompleta

Tiene contenido parcial, medios faltantes o acciones invalidas.

###### Funcionalmente vacia

La ruta carga, pero no cumple la finalidad prometida.

###### Sin pagina propia

Redirige a otra ruta.

###### Inexistente

No hay implementacion de ruta.

##### 8.2 Matriz de estado

| Ruta                       | Estado                  | Diagnostico                                                                 |
| -------------------------- | ----------------------- | --------------------------------------------------------------------------- |
| `/`                        | Activa pero incompleta  | Usa restaurantes reales; hero sin medios; copy fijo; features inventadas    |
| `/restaurantes`            | Activa pero incompleta  | Tres entidades reales; Saudo sin imagen; banners sin medios; CTA por correo |
| `/restaurantes/vento-cafe` | Activa pero incompleta  | Entidad real; sin horario, body, galeria ni reserva                         |
| `/restaurantes/saudo`      | Activa pero incompleta  | Entidad real; sin imagen, horario, body, galeria ni reserva                 |
| `/restaurantes/molka`      | Activa pero incompleta  | Entidad real; usa logo; sin horario, body, galeria ni reserva               |
| `/empleos`                 | Funcionalmente vacia    | No hay vacantes reales; solo placeholder publicado                          |
| `/servicios`               | Activa pero provisional | Pilares hardcodeados y un servicio placeholder                              |
| `/ecosistema`              | Activa pero incompleta  | Tres apps reales sin medios ni destinos reales                              |
| `/eventos`                 | Sin pagina propia       | Redirige a `/restaurantes`                                                  |
| `/contacto`                | Inexistente             | Contacto se resuelve mediante `mailto:`                                     |
| `/privacidad`              | Inexistente             | Pendiente                                                                   |
| `/tratamiento-de-datos`    | Inexistente             | Pendiente                                                                   |
| `/terminos`                | Inexistente             | Pendiente                                                                   |
| `/cookies`                 | Inexistente             | Pendiente                                                                   |
| `/empleos/[slug]`          | Inexistente             | No existe detalle de vacante                                                |

##### 8.3 Paginas completamente en blanco

No se confirmo una respuesta HTML totalmente vacia en las rutas principales recuperables.

El problema predominante es distinto:

```text
la ruta existe, pero su contenido es provisional, incompleto o no funcional.
```

##### 8.4 Secciones visualmente vacias

Se confirmaron o derivaron:

- hero de Inicio sin slides multimedia validos;
- bloques `home_media_1` y `home_media_2` sin `media_url`;
- banners que solo se renderizan si hay media;
- galeria inexistente para restaurantes reales;
- Saudo sin imagen;
- cards de empleo, servicio y apps sin medios;
- `website-media` sin objetos.

#### 9. Auditoria pagina por pagina

##### 9.1 Inicio

###### Datos reales

- Vento Cafe;
- Saudo;
- Molka;
- nombres de apps desde Supabase.

###### Contenido fijo

- introduccion editorial;
- statement;
- cierre de Ecosistema;
- tarjetas Empleos, Servicios y Contacto;
- SEO;
- navegacion;
- footer.

###### Placeholders o degradaciones

- hero sin media;
- controles `Prev` y `Next` aunque no hay slides validos;
- caracteristicas inventadas para restaurantes;
- enlaces de apps con `#` en la fila original;
- CTA `Acceder a Vento OS` abre `/ecosistema`.

###### Estado

```text
INCOMPLETA Y NO APTA COMO FUENTE EDITORIAL CANONICA
```

##### 9.2 Restaurantes

###### Datos reales

- tres restaurantes;
- direcciones reales;
- extractos reales;
- logos de Vento Cafe y Molka.

###### Contenido fijo

- hero;
- narrativa;
- banner;
- CTA de eventos;
- estructura.

###### Placeholders o degradaciones

- medio principal faltante;
- banner sin media real;
- Saudo sin imagen;
- logos usados como imagen editorial;
- contacto de eventos solo por correo.

###### Estado

```text
FUNCIONAL COMO LISTADO, INCOMPLETA COMO PAGINA PUBLICA FINAL
```

##### 9.3 Detalles de restaurante

###### Datos reales

- nombre;
- direccion;
- extracto;
- logo cuando existe.

###### Contenido provisional

- narrative fallback;
- encabezados en ingles;
- instrucciones de VISO;
- facts incompletos;
- features inventadas;
- galeria vacia;
- reserva redirigida a Eventos.

###### Estado

```text
ENTIDADES REALES CON PLANTILLA PUBLICA PROVISIONAL
```

##### 9.4 Empleos

###### Datos reales

No hay vacantes reales confirmadas.

###### Contenido visible

- un seed publicado;
- CTA `Aplicar`;
- sin detalle;
- sin formulario;
- sin integracion con Talento.

###### Estado

```text
FUNCIONALMENTE VACIA
```

##### 9.5 Servicios

###### Datos reales

No hay servicios estructurados confirmados.

###### Contenido visible

- cuatro pilares hardcodeados;
- un item seed;
- CTA de contacto por correo.

###### Estado

```text
PAGINA PROVISIONAL CON APARIENCIA DE CONTENIDO REAL
```

##### 9.6 Ecosistema

###### Datos reales

- nombres de tres productos reales;
- descripciones seed.

###### Contenido faltante

- URLs reales;
- medios;
- beneficios;
- plataformas;
- disponibilidad;
- paginas de producto;
- estado de cada producto.

###### Comportamiento de CTA

Cuando `action_url = '#'`, `getItemHref()` devuelve `/ecosistema` para apps.

Resultado:

- `Descargar` vuelve a la misma pagina;
- `Entrar` vuelve a la misma pagina;
- la accion prometida no ocurre.

###### Estado

```text
ACTIVA PERO FUNCIONALMENTE INCOMPLETA
```

##### 9.7 Eventos

El codigo ejecuta:

```text
redirect('/restaurantes')
```

No existe pagina propia.

Aun asi:

- aparece en sitemap;
- algunos CTA conducen a `/eventos`;
- el CMS permite administrar eventos;
- existe un seed de evento publicado.

###### Estado

```text
SIN PAGINA PUBLICA FUNCIONAL
```

#### 10. Contenido que no debe seguir publicado

##### 10.1 Retiro prioritario

Debe ocultarse o sustituirse antes de promover la web como terminada:

- `vacante-destacada`;
- `servicio-destacado`;
- `evento-destacado`;
- `restaurant:restaurante-destacado`;
- galerias vacias del restaurante placeholder;
- CTA de apps con `#`;
- features inventadas;
- instrucciones editoriales;
- labels en ingles;
- redes sociales genericas;
- newsletter no funcional.

##### 10.2 No ejecutar desde esta tarea

Esta auditoria no autoriza a borrar o despublicar contenido.

La ejecucion corresponde a:

- `WEB-MIG-015`;
- `WEB-MIG-022`;
- `WEB-QA-021`;
- `WEB-SEC-018`;
- tareas de pagina correspondientes.

#### 11. Decision sobre variables de entorno

##### 11.1 Lo confirmado

- existe conectividad efectiva con Supabase;
- produccion obtiene filas reales;
- la URL de Supabase esta configurada;
- la lectura privilegiada esta operativa;
- el dominio publico responde bajo `www.ventogroup.co`.

##### 11.2 Lo no confirmado directamente

- valor exacto de cada variable;
- scopes de Vercel;
- diferencias Preview/Production;
- variables heredadas;
- fecha de ultima rotacion;
- si la anon key tambien esta presente;
- canonical host efectivo;
- si hay variables duplicadas.

##### 11.3 Tareas responsables

- `WEB-SEC-011 — Auditar secretos`;
- `WEB-SEC-012 — Auditar variables de entorno`;
- `WEB-SEC-017 — Eliminar dependencia de service role para lectura publica`;
- `WEB-OPS-001 — Definir ambientes`;
- `WEB-OPS-002 — Definir variables por ambiente`.

#### 12. Smoke test canonico de produccion

La auditoria revela que falta una tarea automatizada que valide el despliegue real despues de cada publicacion.

Esta necesidad ocupa el identificador vacante `WEB-QA-022`.

##### 12.1 Nueva tarea propuesta

```text
[ ] WEB-QA-022 — Crear smoke test canonico de produccion
```

##### 12.2 Alcance

El smoke test debera comprobar:

- `/` responde;
- rutas publicas prioritarias responden;
- `/eventos` cumple la decision aprobada;
- no aparecen placeholders prohibidos;
- no aparecen CTA `#`;
- no aparecen instrucciones internas;
- no aparecen redes genericas;
- no aparecen paginas funcionalmente vacias;
- restaurantes reales estan disponibles;
- no se indexan entidades ficticias;
- sitemap no contiene redirecciones o placeholders;
- medios criticos cargan;
- lectura funciona sin exponer secretos;
- el despliegue usa el ambiente correcto;
- canonical y host son coherentes;
- el resultado se registra como evidencia de release.

##### 12.3 Ubicacion

Agregar despues de:

```text
WEB-QA-021 — Bloquear placeholders y contenido provisional en publicacion
```

Y antes de:

```text
WEB-QA-023 — Validar calidad integral de VISO Web Studio
WEB-QA-024 — Probar RLS, GRANTs y Storage del dominio web
```

Esto corrige la brecha de numeracion ya detectada en el plan.

#### 13. Registro canonico de brechas

| Brecha        | Descripcion                                                         | Severidad | Tareas responsables                                                       |
| ------------- | ------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------- |
| `WEB-GAP-146` | Produccion usa datos reales mediante lectura privilegiada           | Critica   | `WEB-SEC-017`                                                             |
| `WEB-GAP-147` | `.env.example` no documenta la dependencia legacy de `service_role` | Alta      | `WEB-SEC-012`, `WEB-OPS-002`                                              |
| `WEB-GAP-148` | No existe evidencia versionada de variables efectivas por ambiente  | Alta      | `WEB-SEC-012`, `WEB-OPS-001`, `WEB-OPS-002`                               |
| `WEB-GAP-149` | Inicio tiene hero sin medios validos                                | Alta      | `WEB-PAG-003`, `WEB-MIG-014`, `WEB-MIG-015`                               |
| `WEB-GAP-150` | Inicio publica caracteristicas de restaurante inventadas            | Critica   | `WEB-ARC-003`, `WEB-MIG-015`, `WEB-QA-021`                                |
| `WEB-GAP-151` | Empleos publica una vacante ficticia                                | Critica   | `WEB-PAG-020` a `WEB-PAG-023`, `WEB-MIG-015`, `WEB-MIG-022`, `WEB-QA-021` |
| `WEB-GAP-152` | Servicios publica un servicio placeholder                           | Critica   | `WEB-PAG-050`, `WEB-PAG-051`, `WEB-MIG-015`, `WEB-MIG-022`, `WEB-QA-021`  |
| `WEB-GAP-153` | Apps reales tienen CTA sin destino y acciones autorreferentes       | Alta      | `WEB-PAG-031` a `WEB-PAG-033`, `WEB-QA-018`, `WEB-MIG-015`                |
| `WEB-GAP-154` | Eventos no tiene pagina, pero conserva datos, CTA y sitemap         | Critica   | `WEB-PAG-040` a `WEB-PAG-042`, `WEB-GLB-009`, `WEB-MIG-009`, `WEB-QA-019` |
| `WEB-GAP-155` | Los detalles de restaurantes reales muestran plantilla provisional  | Critica   | `WEB-PAG-012` a `WEB-PAG-015`, `WEB-MIG-006`, `WEB-MIG-015`, `WEB-QA-021` |
| `WEB-GAP-156` | Reservas sin URL valida se envian a `/eventos`                      | Alta      | `WEB-PAG-012`, `WEB-PAG-042`, `WEB-QA-018`                                |
| `WEB-GAP-157` | Saudo no tiene medio publico                                        | Alta      | `WEB-PAG-014`, `WEB-MIG-014`, `WEB-MIG-015`                               |
| `WEB-GAP-158` | Restaurantes reales no tienen horarios, body, galeria o CTA real    | Alta      | `WEB-PAG-012` a `WEB-PAG-015`, `WEB-MIG-006`, `WEB-MIG-015`               |
| `WEB-GAP-159` | Footer publica redes sociales genericas                             | Alta      | `WEB-GLB-006`, `WEB-MIG-015`, `WEB-QA-021`                                |
| `WEB-GAP-160` | Newsletter visible no ejecuta ninguna accion                        | Alta      | `WEB-FRM-011`, `WEB-GLB-005`                                              |
| `WEB-GAP-161` | Copyright sigue fijo en 2026                                        | Media     | `WEB-GLB-005`                                                             |
| `WEB-GAP-162` | Produccion mezcla ingles, espanol sin tildes e instrucciones        | Alta      | `WEB-MIG-021`, `WEB-QA-021`, `WEB-QA-023`                                 |
| `WEB-GAP-163` | No existe politica operativa para secciones sin medios              | Alta      | `ADR-WEB-011`, `WEB-RND-006`, `WEB-MED-005`                               |
| `WEB-GAP-164` | Produccion mezcla cuatro fuentes sin ownership unico                | Critica   | `WEB-ARC-006`, `WEB-AUD-008`, `WEB-MIG-021`                               |
| `WEB-GAP-165` | No existe smoke test automatizado sobre produccion                  | Critica   | `WEB-QA-022`, `WEB-OPS-004`                                               |
| `WEB-GAP-166` | No se ha confirmado host canonico `www` frente a dominio raiz       | Alta      | `WEB-GLB-007`, `WEB-SEC-012`, `WEB-OPS-002`, `WEB-QA-019`                 |
| `WEB-GAP-167` | Filas publicadas sustituyen un proceso editorial inexistente        | Critica   | `WEB-PUB-001`, `WEB-PUB-005`, `WEB-PUB-008`, `WEB-MIG-022`                |

#### 14. Cambios obligatorios al plan maestro

##### 14.1 Actualizar estados

Marcar:

```text
[x] WEB-AUD-006 — Auditar Supabase
```

Mantener:

```text
[ ] WEB-ARC-005 — Pendiente; borrador fuera de secuencia
```

##### 14.2 Agregar `WEB-QA-022`

Agregar en Fase 15:

```text
[ ] WEB-QA-022 — Crear smoke test canonico de produccion
```

Alcance definido en la seccion 12.

##### 14.3 Ampliar `WEB-SEC-012`

Agregar al alcance de `WEB-SEC-012`:

- comparar variables requeridas contra variables configuradas;
- revisar Preview, Development y Production;
- confirmar que ningun secreto use prefijo `NEXT_PUBLIC_`;
- confirmar dominio canonico;
- confirmar proyecto Supabase por ambiente;
- confirmar rotacion y responsables;
- registrar solo nombres y estado, nunca valores secretos;
- detectar variables declaradas pero no usadas;
- detectar variables usadas pero no documentadas.

##### 14.4 Ampliar `WEB-OPS-002`

Agregar al alcance de `WEB-OPS-002`:

- matriz por repositorio y ambiente;
- obligatoriedad;
- sensibilidad;
- propietario;
- fuente del valor;
- procedimiento de rotacion;
- fallback permitido;
- validacion post-deploy;
- prohibicion de copiar secretos en Markdown.

##### 14.5 Materializar tareas pendientes

Confirmar que existan en sus fases:

```text
[ ] WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes
[ ] WEB-SEC-017 — Eliminar dependencia de service role para lectura publica
[ ] WEB-SEC-018 — Endurecer el CMS legacy mientras continue operativo
[ ] WEB-QA-021 — Bloquear placeholders y contenido provisional en publicacion
[ ] WEB-QA-022 — Crear smoke test canonico de produccion
[ ] WEB-QA-023 — Validar calidad integral de VISO Web Studio
[ ] WEB-QA-024 — Probar RLS, GRANTs y Storage del dominio web
```

#### 15. Prioridad de resolucion

##### 15.1 Contencion editorial prioritaria

Antes de presentar la web como terminada:

1. ocultar vacante ficticia;
2. ocultar servicio ficticio;
3. decidir Eventos;
4. corregir CTA de apps;
5. retirar features inventadas;
6. retirar instrucciones de detalles;
7. completar o despublicar detalles incompletos;
8. retirar newsletter si no se implementa;
9. configurar redes reales o retirarlas.

##### 15.2 Contencion tecnica prioritaria

1. documentar variables efectivas;
2. impedir lectura publica con service role;
3. confirmar dominio canonico;
4. crear smoke test;
5. validar sitemap;
6. bloquear fallbacks editoriales en produccion.

##### 15.3 Sin modificar produccion desde esta tarea

La prioridad anterior no constituye autorizacion de cambio.

Toda correccion debe ejecutarse en su tarea propietaria.

#### 16. Criterios de aprobación cumplidos

`WEB-AUD-007` fue aprobada con los siguientes criterios cumplidos:

- [x] que produccion usa datos reales de Supabase;
- [x] la distincion entre filas reales y contenido real aprobado;
- [x] la inferencia de uso de `SUPABASE_SERVICE_ROLE_KEY`;
- [x] el inventario de variables referenciadas;
- [x] las limitaciones de confirmacion del panel de despliegue;
- [x] el inventario de placeholders visibles;
- [x] la matriz de paginas activas, incompletas, vacias y ausentes;
- [x] el diagnostico de Inicio;
- [x] el diagnostico de Restaurantes;
- [x] el diagnostico de detalles de restaurante;
- [x] el diagnostico de Empleos;
- [x] el diagnostico de Servicios;
- [x] el diagnostico de Ecosistema;
- [x] el diagnostico de Eventos;
- [x] el registro `WEB-GAP-146` a `WEB-GAP-167`;
- [x] la incorporacion de `WEB-QA-022`;
- [x] la ampliacion de `WEB-SEC-012`;
- [x] la ampliacion de `WEB-OPS-002`.

#### 17. Estado de cierre vigente

```text
WEB-AUD-007 — APROBADA
```

##### 17.1 No ejecutar todavia

- no cambiar variables;
- no rotar claves;
- no retirar `service_role`;
- no modificar Vercel;
- no ocultar filas;
- no borrar placeholders;
- no cambiar sitemap;
- no crear paginas;
- no modificar rutas;
- no subir medios;
- no cambiar produccion.

##### 17.2 Continuidad vigente

```text
[x] WEB-AUD-001 — Inventariar todas las rutas publicas
[x] WEB-AUD-002 — Inventariar todos los componentes publicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
[x] WEB-AUD-007 — Auditar contenido en produccion
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
```


#### 18. Evidencia tecnica

##### 18.1 Produccion publica

Se verificaron los contenidos recuperables de:

- `https://www.ventogroup.co/`;
- `https://www.ventogroup.co/restaurantes`;
- `https://www.ventogroup.co/empleos`;
- `https://www.ventogroup.co/servicios`;
- `https://www.ventogroup.co/ecosistema`.

##### 18.2 Supabase

Se contrastaron todas las filas vigentes de:

- `public.website_blocks`;
- `public.website_items`.

##### 18.3 Codigo

- `src/lib/supabase.ts`;
- `src/lib/content.ts`;
- `src/lib/seo.ts`;
- `src/app/page.tsx`;
- `src/app/eventos/page.tsx`;
- `src/app/restaurantes/[slug]/page.tsx`;
- `src/app/sitemap.ts`;
- `src/components/home-hero-intro.tsx`;
- `src/components/hero-media-carousel.tsx`;
- `.env.example`;
- `README.md`.

#### 19. Registro de cambios

| Version        | Fecha      | Cambio                                                                            | Estado            |
| -------------- | ---------- | --------------------------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Auditoria de datos reales, placeholders, variables y paginas vacias en produccion | Aprobada |


### WEB-AUD-008 — Matriz canónica editable vs hardcodeado

> Matriz de trazabilidad por página, sección y campo para separar contenido editorial, datos de dominio, configuración global y comportamiento técnico.

#### 0. Control documental

| Campo                 | Valor                                   |
| --------------------- | --------------------------------------- |
| Identificador         | `WEB-AUD-008`                           |
| Nombre                | Crear matriz editable vs hardcodeado    |
| Fase                  | FASE 1 — Auditoría y línea base         |
| Estado                | APROBADA                                |
| Fecha                 | `2026-07-23`                            |
| Tipo de cierre        | Documental                              |
| Repositorio público   | `devVentoGroup/Vento-Group`             |
| CMS actual            | VISO Website CMS                        |
| Base actual           | `website_blocks`, `website_items`       |
| Filas de matriz       | **130**                                 |
| Cambios en código     | Ninguno                                 |
| Cambios en Supabase   | Ninguno                                 |
| Cambios en producción | Ninguno                                 |
| Próxima tarea         | `WEB-AUD-009 — Crear línea base visual` |

##### 0.1 Continuidad

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
[x] WEB-AUD-007 — Auditar contenido en producción
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
```

`WEB-ARC-005` continúa pendiente y no se considera aprobada.

#### 1. Objetivo

Crear una matriz canónica que indique para cada superficie pública:

1. página;
2. sección;
3. campo;
4. fuente actual;
5. fuente objetivo;
6. estado de migración.

La matriz debe impedir que durante la reconstrucción:

- se migren comportamientos técnicos como si fueran contenido;
- se dejen textos editoriales dispersos en React;
- se dupliquen datos operativos dentro del CMS;
- se conserven placeholders en producción;
- se abran fuentes legacy como contrato definitivo;
- se pierda ownership entre VISO, la web y los dominios operativos.

#### 2. Alcance

La matriz cubre:

- configuración global;
- header;
- footer;
- Home;
- restaurantes;
- detalle de restaurantes;
- empleos;
- servicios;
- ecosistema;
- eventos;
- metadata;
- sitemap;
- robots;
- publicación;
- fallbacks.

No define todavía:

- nombres físicos definitivos de tablas;
- schemas finales de cada sección;
- diseño visual;
- migraciones SQL;
- permisos;
- orden de implementación técnico.

La columna **Fuente objetivo** expresa ownership lógico. Su materialización física corresponde a las fases de arquitectura y base de datos.

#### 3. Taxonomía de fuentes objetivo

| Código                  | Definición                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| `TGT-SITE-SETTINGS`     | Configuración global publicada del sitio: marca, contactos, redes, legales y SEO por defecto. |
| `TGT-NAVIGATION`        | Navegación global versionada y publicada.                                                     |
| `TGT-PAGE-REVISION`     | Versión editorial de página con secciones ordenadas y propiedades tipadas.                    |
| `TGT-PAGE-SEO`          | Configuración SEO versionada por página o entidad.                                            |
| `TGT-ENTITY-PROJECTION` | Proyección pública de entidades operativas con campos editoriales autorizados.                |
| `TGT-MEDIA-ASSET`       | Biblioteca canónica de medios con referencia por ID, metadata y usos.                         |
| `TGT-PUBLICATION`       | Publicación vigente, preview, fechas y versión inmutable.                                     |
| `TGT-FORM`              | Definición de formulario e integración de destino.                                            |
| `TGT-REDIRECT`          | Registro canónico de redirecciones y estados de ruta.                                         |
| `TGT-ENV`               | Variables de despliegue; nunca editables desde VISO.                                          |
| `TGT-CODE`              | Código y contratos técnicos registrados.                                                      |
| `TGT-REMOVE`            | Elemento que debe retirarse y no migrarse como contenido.                                     |

##### 3.1 Regla de ownership

```text
COPY EDITORIAL
→ TGT-PAGE-REVISION o TGT-SITE-SETTINGS

DATOS DE NEGOCIO
→ TGT-ENTITY-PROJECTION

MEDIOS
→ TGT-MEDIA-ASSET

SEO
→ TGT-PAGE-SEO

COMPORTAMIENTO TÉCNICO
→ TGT-CODE

VARIABLES Y SECRETOS
→ TGT-ENV

PLACEHOLDERS E INSTRUCCIONES
→ TGT-REMOVE
```

#### 4. Estados de migración

| Estado | Significado                                                                                         |
| ------ | --------------------------------------------------------------------------------------------------- |
| `M0`   | No iniciada: el campo está hardcodeado o ausente y requiere migración.                              |
| `M1`   | Legacy editable: existe en `website_blocks` o `website_items`, pero aún no está en el modelo final. |
| `M2`   | Mixta o inconsistente: combina base, código, fallback o reglas divergentes.                         |
| `M3`   | Bloqueada: depende de una decisión de producto, arquitectura, dominio o publicación.                |
| `C`    | Mantener en código: comportamiento técnico, seguridad, accesibilidad o estructura no editorial.     |
| `R`    | Retirar: placeholder, instrucción interna, fallback provisional o dependencia insegura.             |

##### 4.1 Resultado consolidado

| Estado | Filas |
| ------ | ----: |
| `M0`   |    46 |
| `M1`   |    17 |
| `M2`   |    37 |
| `M3`   |    17 |
| `C`    |     9 |
| `R`    |     4 |

##### 4.2 Lectura del resultado

La web no está dividida simplemente entre “editable” y “hardcodeada”.

Existen seis situaciones:

1. contenido completamente hardcodeado;
2. contenido editable en el CMS legacy;
3. componentes mixtos que combinan datos y fallbacks;
4. campos bloqueados por decisiones todavía no aprobadas;
5. comportamiento que debe permanecer en código;
6. contenido provisional que debe retirarse.

#### 5. Matriz maestra

##### 5.1 Global y transversal

| Página | Sección   | Campo                                                    | Fuente actual                                                       | Fuente objetivo                                                   | Estado de migración |
| ------ | --------- | -------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------- |
| Global | Identidad | Nombre de marca                                          | `SiteHeader`, `SiteFooter`, metadata y JSON-LD hardcodeados         | `TGT-SITE-SETTINGS.brand_name`                                    | M0                  |
| Global | Identidad | Wordmark y logos                                         | Assets estáticos `/public/branding/*`                               | `TGT-MEDIA-ASSET` con asset de marca protegido                    | M3                  |
| Global | Header    | Navegación principal: labels, URLs y descripciones       | `NAV`, `HOME_LEFT_NAV`, `HOME_RIGHT_NAV` en `site-header.tsx`       | `TGT-NAVIGATION.header`                                           | M0                  |
| Global | Header    | Tarjetas destacadas del menú                             | `HIGHLIGHTS` en `site-header.tsx`                                   | `TGT-NAVIGATION.highlights`                                       | M0                  |
| Global | Header    | CTA `Entrar a Vento OS`                                  | Texto y destino hardcodeados en `site-header.tsx`                   | `TGT-NAVIGATION.header_cta`                                       | M0                  |
| Global | Header    | Texto `Menu`, `Cerrar` y labels accesibles               | Código del componente                                               | `TGT-CODE` con i18n o copy técnico registrado                     | C                   |
| Global | Header    | Comportamiento scroll, overlay, Escape y bloqueo de body | Código del componente cliente                                       | `TGT-CODE` / Section Registry global                              | C                   |
| Global | Footer    | Lista superior de venues                                 | Prop `venues` desde Home; fallback hardcodeado en `site-footer.tsx` | `TGT-ENTITY-PROJECTION.restaurant` + configuración global         | M2                  |
| Global | Footer    | Links principales                                        | Hardcodeados en `site-footer.tsx`                                   | `TGT-NAVIGATION.footer`                                           | M0                  |
| Global | Footer    | Correo de contacto                                       | `mailto:hola@ventogroup.co` hardcodeado                             | `TGT-SITE-SETTINGS.contact_email`                                 | M0                  |
| Global | Footer    | Formulario newsletter: label, placeholder y CTA          | UI hardcodeada sin integración                                      | `TGT-FORM.newsletter` o retirar interfaz                          | M3                  |
| Global | Footer    | Redes sociales y URLs                                    | URLs genéricas hardcodeadas                                         | `TGT-SITE-SETTINGS.social_links`                                  | M0                  |
| Global | Footer    | Texto legal y año                                        | Hardcodeado `© 2026`                                                | `TGT-SITE-SETTINGS.legal` + año calculado                         | M0                  |
| Global | SEO base  | Title, description, Open Graph y Twitter defaults        | `src/app/layout.tsx`                                                | `TGT-SITE-SETTINGS.default_seo`                                   | M0                  |
| Global | SEO base  | URL canónica del sitio                                   | `NEXT_PUBLIC_SITE_URL`, `SITE_URL` o `VERCEL_URL`                   | `TGT-ENV.site_url`                                                | C                   |
| Global | Datos     | URL y clave pública de Supabase                          | Variables de entorno                                                | `TGT-ENV.supabase_public`                                         | C                   |
| Global | Datos     | Uso de `SUPABASE_SERVICE_ROLE_KEY` para lectura pública  | `getServerSupabaseClient()`                                         | `TGT-REMOVE` mediante proyección pública de privilegio mínimo     | R                   |
| Global | Diseño    | Fuentes, tokens, animaciones y restricciones visuales    | Código, `next/font` y `globals.css`                                 | `TGT-CODE` / Design System                                        | C                   |
| Global | Runtime   | Smooth scroll                                            | `SmoothScroll` global                                               | `TGT-CODE` con decisión de rendimiento y accesibilidad            | C                   |
| Global | Runtime   | Guard global para rueda en inputs numéricos              | Script inline en `layout.tsx` sin uso público evidente              | `TGT-REMOVE` salvo justificación funcional                        | R                   |
| Global | Medios    | Placeholder visual cuando falta media                    | `MediaSlot` muestra el label públicamente                           | `TGT-CODE` con estado vacío no editorial y bloqueo de publicación | M2                  |

##### 5.2 Home

| Página | Sección               | Campo                                                          | Fuente actual                                              | Fuente objetivo                                               | Estado de migración |
| ------ | --------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------- | ------------------- |
| /      | SEO                   | Title, description, canonical y Open Graph                     | `src/app/page.tsx` hardcodeado                             | `TGT-PAGE-SEO.home`                                           | M0                  |
| /      | Hero                  | Composición y variante inmersiva                               | `HomeHeroIntro` + `HeroMediaCarousel` en código            | `TGT-CODE` + sección registrada                               | C                   |
| /      | Hero                  | Slides: título, subtítulo, CTA, orden                          | `website_blocks` legacy; fallback `FALLBACK_BLOCKS`        | `TGT-PAGE-REVISION.sections[hero].props`                      | M2                  |
| /      | Hero                  | Slides: imagen o video                                         | `website_blocks.media_url`; actualmente sin medios         | `TGT-MEDIA-ASSET` referenciado por la revisión                | M1                  |
| /      | Hero                  | Splash wordmark                                                | Asset estático                                             | `TGT-MEDIA-ASSET` de marca protegido                          | M3                  |
| /      | Hero                  | Links de restaurantes durante splash                           | `website_items` categoría `restaurant`                     | `TGT-ENTITY-PROJECTION.restaurant`                            | M1                  |
| /      | Intro editorial       | Kicker `La experiencia Vento`                                  | Hardcodeado                                                | `TGT-PAGE-REVISION.sections[intro].props.eyebrow`             | M0                  |
| /      | Intro editorial       | Título                                                         | `editorial_band` legacy o fallback hardcodeado             | `TGT-PAGE-REVISION.sections[intro].props.title`               | M2                  |
| /      | Intro editorial       | Cuerpo                                                         | `editorial_band` legacy o fallback hardcodeado             | `TGT-PAGE-REVISION.sections[intro].props.body`                | M2                  |
| /      | Intro editorial       | CTA label y URL                                                | `editorial_band` legacy o fallback hardcodeado             | `TGT-PAGE-REVISION.sections[intro].props.cta`                 | M2                  |
| /      | Intro editorial       | Medio                                                          | `editorial_band.media_url`; sección se oculta si falta     | `TGT-MEDIA-ASSET`                                             | M1                  |
| /      | Showcase restaurantes | Eyebrow y heading                                              | Hardcodeados en `HomeVenuesShowcase`                       | `TGT-PAGE-REVISION.sections[venues].props`                    | M0                  |
| /      | Showcase restaurantes | Colección y orden                                              | `website_items` category `restaurant`, `sort_order`        | `TGT-ENTITY-PROJECTION.restaurant` + query configurada        | M1                  |
| /      | Showcase restaurantes | Título, descripción, ubicación, horario, CTA y medios          | `website_items` legacy                                     | `TGT-ENTITY-PROJECTION.restaurant` + overrides editoriales    | M1                  |
| /      | Showcase restaurantes | Aspectos destacados                                            | Derivados de `body/excerpt`; fallback ficticio hardcodeado | `TGT-ENTITY-PROJECTION.restaurant.features`                   | M2                  |
| /      | Banner                | Visibilidad                                                    | Depende de existencia de `home_image_banner.media_url`     | `TGT-PAGE-REVISION.sections[].enabled`                        | M2                  |
| /      | Banner                | Medio, título y eyebrow                                        | Medio legacy; label/tipo parcialmente hardcodeados         | `TGT-PAGE-REVISION` + `TGT-MEDIA-ASSET`                       | M2                  |
| /      | Statement             | Kicker `Con escala`                                            | Hardcodeado                                                | `TGT-PAGE-REVISION.sections[statement].props.eyebrow`         | M0                  |
| /      | Statement             | Título                                                         | Segundo `editorial_band` o fallback del primero            | `TGT-PAGE-REVISION.sections[statement].props.title`           | M2                  |
| /      | Statement             | Cuerpo                                                         | Hardcodeado                                                | `TGT-PAGE-REVISION.sections[statement].props.body`            | M0                  |
| /      | Statement             | CTA label y URL                                                | Hardcodeados                                               | `TGT-PAGE-REVISION.sections[statement].props.cta`             | M0                  |
| /      | Statement             | Medio                                                          | `editorial_band.media_url`                                 | `TGT-MEDIA-ASSET`                                             | M1                  |
| /      | Cierre ecosistema     | Kicker, título y cuerpo                                        | Hardcodeados                                               | `TGT-PAGE-REVISION.sections[ecosystem_closing].props`         | M0                  |
| /      | Cierre ecosistema     | Links de aplicaciones                                          | `website_items` categoría `app`; destinos `#`              | `TGT-ENTITY-PROJECTION.app`                                   | M1                  |
| /      | Cierre ecosistema     | CTA `Acceder a Vento OS`                                       | Texto y `/ecosistema` hardcodeados                         | `TGT-PAGE-REVISION.sections[ecosystem_closing].props.cta`     | M0                  |
| /      | Quick cards           | Título, cuerpo, CTA y destino de Empleos, Servicios y Contacto | Array `quickCards` hardcodeado                             | `TGT-PAGE-REVISION.sections[quick_links].items`               | M0                  |
| /      | Quick cards           | Medios de Empleos y Servicios                                  | Primer item de `website_items`; actualmente sin medios     | `TGT-PAGE-REVISION` o `TGT-ENTITY-PROJECTION` según ownership | M2                  |
| /      | Datos estructurados   | Organization name y description                                | Hardcodeados                                               | `TGT-SITE-SETTINGS.organization_schema`                       | M0                  |
| /      | Datos estructurados   | WebSite y SearchAction                                         | Hardcodeados; no existe búsqueda real                      | `TGT-CODE` y retirar SearchAction si no existe búsqueda       | M3                  |
| /      | Datos estructurados   | ItemList de restaurantes                                       | Items dinámicos + estructura hardcodeada                   | `TGT-ENTITY-PROJECTION.restaurant` + builder tipado           | M2                  |

##### 5.3 Restaurantes — listado

| Página        | Sección             | Campo                                      | Fuente actual                                                        | Fuente objetivo                                        | Estado de migración |
| ------------- | ------------------- | ------------------------------------------ | -------------------------------------------------------------------- | ------------------------------------------------------ | ------------------- |
| /restaurantes | SEO                 | Title, description, canonical y Open Graph | Hardcodeados en la ruta                                              | `TGT-PAGE-SEO.restaurants`                             | M0                  |
| /restaurantes | Hero                | Medio principal                            | Primer restaurante de `website_items`                                | `TGT-PAGE-REVISION.sections[hero].media`               | M2                  |
| /restaurantes | Hero                | Eyebrow, título y copy                     | Hardcodeados                                                         | `TGT-PAGE-REVISION.sections[hero].props`               | M0                  |
| /restaurantes | Hero                | CTA portafolio                             | Hardcodeado `#portafolio`                                            | `TGT-PAGE-REVISION.sections[hero].props.primary_cta`   | M0                  |
| /restaurantes | Hero                | CTA reservas                               | `mailto:reservas@ventogroup.co` hardcodeado                          | `TGT-SITE-SETTINGS.reservations_contact` o formulario  | M0                  |
| /restaurantes | Experiencia         | Medio                                      | `website_blocks.restaurantes_experience.media_url` o vacío           | `TGT-MEDIA-ASSET`                                      | M1                  |
| /restaurantes | Experiencia         | Eyebrow                                    | Hardcodeado                                                          | `TGT-PAGE-REVISION.sections[experience].props.eyebrow` | M0                  |
| /restaurantes | Experiencia         | Título, cuerpo y CTA                       | `website_blocks` legacy con fallback hardcodeado                     | `TGT-PAGE-REVISION.sections[experience].props`         | M2                  |
| /restaurantes | Banner              | Eyebrow, título y medio                    | `website_blocks.restaurantes_banner` con fallback hardcodeado        | `TGT-PAGE-REVISION` + `TGT-MEDIA-ASSET`                | M2                  |
| /restaurantes | Portafolio          | Heading y copy                             | Hardcodeados                                                         | `TGT-PAGE-REVISION.sections[portfolio].props`          | M0                  |
| /restaurantes | Portafolio          | Colección, orden y visibilidad             | `website_items` categoría `restaurant`                               | `TGT-ENTITY-PROJECTION.restaurant`                     | M1                  |
| /restaurantes | Portafolio          | Campos de tarjeta                          | `title`, `excerpt`, `location`, `schedule_text`, medios y CTA legacy | `TGT-ENTITY-PROJECTION.restaurant` + asset refs        | M1                  |
| /restaurantes | CTA final           | Título, copy, label y email                | Hardcodeados en `CtaBanner`                                          | `TGT-PAGE-REVISION.sections[closing_cta].props`        | M0                  |
| /restaurantes | Datos estructurados | ItemList                                   | Colección dinámica + schema hardcodeado                              | `TGT-ENTITY-PROJECTION.restaurant` + builder tipado    | M2                  |

##### 5.4 Restaurantes — detalle

| Página               | Sección             | Campo                                       | Fuente actual                                                    | Fuente objetivo                                                 | Estado de migración |
| -------------------- | ------------------- | ------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------- | ------------------- |
| /restaurantes/[slug] | Ruta                | Slug y existencia pública                   | `website_items.slug` e `is_published`                            | `TGT-ENTITY-PROJECTION.restaurant.slug` + publicación vigente   | M1                  |
| /restaurantes/[slug] | SEO                 | Title, description, canonical, OG y Twitter | Derivados parcialmente del item y hero legacy                    | `TGT-PAGE-SEO.entity` + overrides por restaurante               | M2                  |
| /restaurantes/[slug] | Hero                | Eyebrow                                     | `detail_hero.subtitle` o `Vento Group Venue`                     | `TGT-PAGE-REVISION.template.restaurant_detail`                  | M2                  |
| /restaurantes/[slug] | Hero                | Título                                      | `website_items.title`                                            | `TGT-ENTITY-PROJECTION.restaurant.name`                         | M1                  |
| /restaurantes/[slug] | Hero                | Ubicación y horario                         | `website_items.location` y `schedule_text`                       | `TGT-ENTITY-PROJECTION.restaurant`                              | M1                  |
| /restaurantes/[slug] | Hero                | Narrativa                                   | `body`, luego `excerpt`, luego instrucción interna               | `TGT-ENTITY-PROJECTION.restaurant.story`                        | M2                  |
| /restaurantes/[slug] | Hero                | CTA principal                               | `action_label/action_url`; fallback a `/eventos`                 | `TGT-ENTITY-PROJECTION.restaurant.reservation_action`           | M2                  |
| /restaurantes/[slug] | Hero                | CTA secundario `Planear evento`             | Hardcodeado hacia ruta redirigida                                | `TGT-PAGE-REVISION.template.restaurant_detail.secondary_cta`    | M3                  |
| /restaurantes/[slug] | Hero                | Imagen o video                              | `detail_hero`, luego item; datos reales incompletos              | `TGT-MEDIA-ASSET` + override editorial                          | M2                  |
| /restaurantes/[slug] | Galería             | Heading y copy                              | Hardcodeados, parcialmente en inglés                             | `TGT-PAGE-REVISION.template.restaurant_detail.gallery_copy`     | M0                  |
| /restaurantes/[slug] | Galería             | Items, orden y medios                       | Bloques legacy; código busca `galeria_*` pero DB usa `gallery_*` | `TGT-ENTITY-PROJECTION.restaurant.gallery` + assets             | M3                  |
| /restaurantes/[slug] | Historia            | Heading `About This Venue`                  | Hardcodeado                                                      | `TGT-PAGE-REVISION.template.restaurant_detail.story_heading`    | M0                  |
| /restaurantes/[slug] | Historia            | Narrativa principal                         | `body/excerpt` legacy                                            | `TGT-ENTITY-PROJECTION.restaurant.story`                        | M1                  |
| /restaurantes/[slug] | Historia            | Párrafo de instrucción para VISO            | Hardcodeado y visible públicamente                               | `TGT-REMOVE`                                                    | R                   |
| /restaurantes/[slug] | Datos               | Heading `Venue Facts` y labels              | Hardcodeados                                                     | `TGT-PAGE-REVISION.template.restaurant_detail.labels`           | M0                  |
| /restaurantes/[slug] | Datos               | Valores de ubicación, horario y reservas    | Legacy con fallback `Por definir`                                | `TGT-ENTITY-PROJECTION.restaurant`                              | M2                  |
| /restaurantes/[slug] | Características     | Heading                                     | Hardcodeado en inglés                                            | `TGT-PAGE-REVISION.template.restaurant_detail.features_heading` | M0                  |
| /restaurantes/[slug] | Características     | Lista                                       | Bullets de `body`; fallback ficticio hardcodeado                 | `TGT-ENTITY-PROJECTION.restaurant.features`                     | M2                  |
| /restaurantes/[slug] | Relacionados        | Heading, copy y CTA                         | Hardcodeados                                                     | `TGT-PAGE-REVISION.template.restaurant_detail.related_copy`     | M0                  |
| /restaurantes/[slug] | Relacionados        | Colección                                   | Otros `website_items` restaurant, límite fijo 6                  | `TGT-ENTITY-PROJECTION.restaurant` + resolver registrado        | M2                  |
| /restaurantes/[slug] | Datos estructurados | Restaurant                                  | Campos legacy + schema hardcodeado                               | `TGT-ENTITY-PROJECTION.restaurant` + builder tipado             | M2                  |
| /restaurantes/[slug] | Datos estructurados | Breadcrumb labels y URLs                    | Estructura y labels hardcodeados                                 | `TGT-CODE` + navegación publicada                               | C                   |

##### 5.5 Empleos

| Página   | Sección             | Campo                                        | Fuente actual                                                 | Fuente objetivo                                      | Estado de migración |
| -------- | ------------------- | -------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------- | ------------------- |
| /empleos | SEO                 | Title, description, canonical y Open Graph   | Hardcodeados en la ruta                                       | `TGT-PAGE-SEO.jobs`                                  | M0                  |
| /empleos | Hero                | Título y descripción                         | Props hardcodeadas hacia `CategoryPage`                       | `TGT-PAGE-REVISION.sections[hero].props`             | M0                  |
| /empleos | Hero                | Eyebrow y CTA volver                         | Hardcodeados en `CategoryPage`                                | `TGT-PAGE-REVISION` o comportamiento de plantilla    | M2                  |
| /empleos | Hero                | Medio                                        | Primer `website_items` job; actualmente placeholder sin medio | `TGT-MEDIA-ASSET` editorial de página                | M2                  |
| /empleos | Listado             | Vacantes y orden                             | `website_items` job; único seed placeholder                   | `TGT-ENTITY-PROJECTION.job` desde Talento            | M3                  |
| /empleos | Tarjeta             | Título, excerpt, sede, contrato, medio y CTA | Campos genéricos legacy                                       | `TGT-ENTITY-PROJECTION.job` con schema especializado | M3                  |
| /empleos | Listado             | Estado vacío                                 | Sin diseño semántico; grid vacío o placeholder legacy         | `TGT-PAGE-REVISION.sections[jobs].empty_state`       | M0                  |
| /empleos | Aplicación          | Destino y flujo                              | `action_url` legacy `#`                                       | `TGT-FORM.job_application` o integración Talento     | M3                  |
| /empleos | Datos estructurados | ItemList / JobPosting                        | Solo ItemList genérico                                        | `TGT-ENTITY-PROJECTION.job` + `JobPosting` tipado    | M3                  |

##### 5.6 Servicios

| Página     | Sección             | Campo                                      | Fuente actual                                     | Fuente objetivo                                   | Estado de migración |
| ---------- | ------------------- | ------------------------------------------ | ------------------------------------------------- | ------------------------------------------------- | ------------------- |
| /servicios | SEO                 | Title, description, canonical y Open Graph | Hardcodeados                                      | `TGT-PAGE-SEO.services`                           | M0                  |
| /servicios | Hero                | Medio                                      | Primer item service legacy; actualmente sin medio | `TGT-PAGE-REVISION.sections[hero].media`          | M2                  |
| /servicios | Hero                | Eyebrow y título                           | Hardcodeados                                      | `TGT-PAGE-REVISION.sections[hero].props`          | M0                  |
| /servicios | Hero                | Copy                                       | `servicios_intro.subtitle` o fallback hardcodeado | `TGT-PAGE-REVISION.sections[hero].props.body`     | M2                  |
| /servicios | Hero                | CTA                                        | Hardcodeado `#servicios`                          | `TGT-PAGE-REVISION.sections[hero].props.cta`      | M0                  |
| /servicios | Intro               | Eyebrow                                    | Hardcodeado                                       | `TGT-PAGE-REVISION.sections[intro].props.eyebrow` | M0                  |
| /servicios | Intro               | Título y cuerpo                            | `website_blocks` legacy con fallback hardcodeado  | `TGT-PAGE-REVISION.sections[intro].props`         | M2                  |
| /servicios | Pilares             | Iconos, labels y copy                      | Array `PILARES` hardcodeado                       | `TGT-PAGE-REVISION.sections[pillars].items`       | M0                  |
| /servicios | Banner              | Eyebrow, título y medio                    | `website_blocks.servicios_banner` con fallback    | `TGT-PAGE-REVISION` + `TGT-MEDIA-ASSET`           | M2                  |
| /servicios | Listado             | Heading y copy                             | Hardcodeados                                      | `TGT-PAGE-REVISION.sections[services].props`      | M0                  |
| /servicios | Listado             | Servicios y orden                          | `website_items` service; único placeholder        | `TGT-ENTITY-PROJECTION.service`                   | M3                  |
| /servicios | Tarjetas            | Título, descripción, medio y CTA           | Campos genéricos legacy                           | `TGT-ENTITY-PROJECTION.service` especializado     | M3                  |
| /servicios | CTA final           | Título, copy, label y email                | Hardcodeados                                      | `TGT-PAGE-REVISION.sections[closing_cta].props`   | M0                  |
| /servicios | Datos estructurados | ItemList                                   | Items legacy + schema hardcodeado                 | `TGT-ENTITY-PROJECTION.service` + builder tipado  | M2                  |

##### 5.7 Ecosistema

| Página      | Sección             | Campo                                      | Fuente actual                           | Fuente objetivo                                | Estado de migración |
| ----------- | ------------------- | ------------------------------------------ | --------------------------------------- | ---------------------------------------------- | ------------------- |
| /ecosistema | SEO                 | Title, description, canonical y Open Graph | Hardcodeados                            | `TGT-PAGE-SEO.ecosystem`                       | M0                  |
| /ecosistema | Hero                | Título y descripción                       | Props hardcodeadas hacia `CategoryPage` | `TGT-PAGE-REVISION.sections[hero].props`       | M0                  |
| /ecosistema | Hero                | Eyebrow y CTA volver                       | Hardcodeados en `CategoryPage`          | `TGT-PAGE-REVISION` o plantilla                | M2                  |
| /ecosistema | Hero                | Medio                                      | Primer app item; actualmente sin medio  | `TGT-PAGE-REVISION.sections[hero].media`       | M2                  |
| /ecosistema | Listado             | Apps y orden                               | `website_items` app                     | `TGT-ENTITY-PROJECTION.app`                    | M1                  |
| /ecosistema | Tarjetas            | Título, excerpt, medio, CTA y URL          | Campos legacy; tres destinos `#`        | `TGT-ENTITY-PROJECTION.app` especializado      | M2                  |
| /ecosistema | Listado             | Estado vacío                               | No definido                             | `TGT-PAGE-REVISION.sections[apps].empty_state` | M0                  |
| /ecosistema | Datos estructurados | ItemList                                   | Schema genérico de `CategoryPage`       | `TGT-ENTITY-PROJECTION.app` + builder tipado   | M2                  |

##### 5.8 Eventos

| Página   | Sección          | Campo                                           | Fuente actual                                                           | Fuente objetivo                                         | Estado de migración |
| -------- | ---------------- | ----------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------- | ------------------- |
| /eventos | Ruta             | Comportamiento                                  | Redirect hardcodeado a `/restaurantes`                                  | `TGT-REDIRECT` o página real según decisión de producto | M3                  |
| /eventos | Contenido        | Evento publicado                                | `website_items` contiene `evento-destacado`, pero la ruta no lo consume | `TGT-ENTITY-PROJECTION.event` si la página se reactiva  | M3                  |
| /eventos | SEO              | Indexación                                      | Ruta incluida en sitemap aunque redirige                                | `TGT-REDIRECT` + generador de sitemap                   | M3                  |
| /eventos | CTA relacionados | Múltiples enlaces internos apuntan a `/eventos` | Hardcodeados en Home y detalle de restaurantes                          | `TGT-NAVIGATION` / page revisions tras decisión         | M3                  |

##### 5.9 Sistema, SEO y publicación

| Página  | Sección     | Campo                                      | Fuente actual                                       | Fuente objetivo                                         | Estado de migración |
| ------- | ----------- | ------------------------------------------ | --------------------------------------------------- | ------------------------------------------------------- | ------------------- |
| Sistema | Sitemap     | Rutas estáticas                            | Array hardcodeado; incluye `/eventos`               | `TGT-CODE` generado desde registro de rutas publicables | M2                  |
| Sistema | Sitemap     | Rutas de restaurantes                      | `website_items` publicados                          | `TGT-ENTITY-PROJECTION.restaurant` vigente              | M1                  |
| Sistema | Sitemap     | `lastModified`                             | Fecha de cada request, no fecha real de publicación | `TGT-PUBLICATION.published_at`                          | M0                  |
| Sistema | Robots      | Allow, host y sitemap                      | Código + URL de entorno                             | `TGT-CODE` + `TGT-ENV.site_url`                         | C                   |
| Sistema | 404         | Página not-found personalizada             | No existe archivo `src/app/not-found.tsx`           | `TGT-CODE` + copy global aprobado                       | M0                  |
| Sistema | Fallbacks   | Seeds `FALLBACK_BLOCKS` y `FALLBACK_ITEMS` | `src/lib/content.ts`                                | `TGT-REMOVE` después de migración y smoke tests         | R                   |
| Sistema | Publicación | Filtro `is_published`                      | Consulta directa a tablas legacy                    | `TGT-PUBLICATION.current_version`                       | M1                  |
| Sistema | Preview     | Separación preview vs producción           | No existe                                           | `TGT-PUBLICATION.preview_channel`                       | M3                  |


#### 6. Resumen por página

| Página                 | Campos o grupos inventariados |
| ---------------------- | ----------------------------: |
| `Global`               |                            21 |
| `/`                    |                            30 |
| `/restaurantes`        |                            14 |
| `/restaurantes/[slug]` |                            22 |
| `/empleos`             |                             9 |
| `/servicios`           |                            14 |
| `/ecosistema`          |                             8 |
| `/eventos`             |                             4 |
| `Sistema`              |                             8 |

#### 7. Resumen por fuente actual

| Fuente predominante | Filas |
| ------------------- | ----: |
| Código              |    94 |
| Asset estático      |     2 |
| Entorno             |     2 |
| Legacy CMS          |    27 |
| Mixta               |     5 |

##### 7.1 Diagnóstico

La fuente actual predominante sigue siendo el código.

Las tablas legacy aportan datos reales en algunas colecciones, pero:

- no controlan toda la composición;
- no controlan la mayoría de textos;
- no controlan navegación global;
- no controlan footer;
- no controlan metadata de manera completa;
- no tienen publicaciones versionadas;
- usan campos genéricos;
- activan fallbacks cuando falta información.

#### 8. Decisiones canónicas derivadas

##### 8.1 Lo que debe permanecer en código

Permanecerán en código:

- implementación React;
- registro de componentes;
- validación de schemas;
- comportamiento de carruseles;
- accesibilidad;
- focus management;
- seguridad;
- sanitización;
- builders de JSON-LD;
- generador de sitemap;
- robots;
- resolución de rutas;
- políticas de fallback técnico;
- restricciones visuales.

##### 8.2 Lo que debe ser editable desde VISO

Debe ser editable:

- copy editorial;
- titles y subtitles;
- CTA;
- medios;
- orden de secciones;
- visibilidad;
- navegación;
- footer;
- redes;
- contactos;
- SEO;
- contenido de banners;
- estados vacíos;
- configuración de colecciones dentro de límites aprobados.

##### 8.3 Lo que no debe duplicarse en VISO

Debe provenir de su dominio canónico:

- restaurantes;
- sedes y direcciones verificadas;
- horarios operativos;
- vacantes;
- eventos;
- aplicaciones;
- estados de disponibilidad.

VISO podrá mantener campos editoriales complementarios, pero no una copia autónoma sin relación.

##### 8.4 Legacy

`website_blocks` y `website_items` se clasifican como:

```text
FUENTE LEGACY TRANSITORIA
NO CONTRATO FINAL
NO PROYECCIÓN PÚBLICA DEFINITIVA
```

##### 8.5 Fallbacks

Se deben diferenciar:

###### Fallback técnico permitido

Ejemplos:

- omitir una sección opcional;
- mostrar una imagen técnica neutra aprobada;
- servir la última publicación válida;
- devolver 404.

###### Fallback editorial prohibido

Ejemplos:

- inventar features;
- mostrar instrucciones para VISO;
- publicar `Por definir`;
- publicar `Completa este bloque`;
- convertir `#` en destino;
- activar seeds cuando falla Supabase.

#### 9. Orden recomendado de migración

##### 9.1 Lote 0 — Contención

1. retirar instrucciones públicas;
2. bloquear CTA `#`;
3. retirar features ficticias;
4. corregir la galería `gallery` vs `galeria`;
5. retirar `/eventos` del sitemap mientras redirija;
6. evitar placeholders editoriales visibles.

##### 9.2 Lote 1 — Global

1. site settings;
2. navegación;
3. footer;
4. contactos;
5. redes;
6. SEO por defecto.

##### 9.3 Lote 2 — Home

1. hero;
2. intro;
3. showcase;
4. statement;
5. cierre ecosistema;
6. quick cards.

##### 9.4 Lote 3 — Restaurantes

1. proyección de restaurantes;
2. listado;
3. template de detalle;
4. galerías;
5. reservas;
6. datos estructurados.

##### 9.5 Lote 4 — Ecosistema, servicios y empleos

1. apps;
2. servicios;
3. empleos;
4. formularios y destinos reales;
5. estados vacíos.

##### 9.6 Lote 5 — Eventos

Solo después de decidir:

```text
REACTIVAR PÁGINA
o
RETIRAR DOMINIO PÚBLICO Y CONSOLIDAR REDIRECCIONES
```

#### 10. Dependencias documentales

| Resultado de esta matriz               | Tareas responsables           |
| -------------------------------------- | ----------------------------- |
| Ownership de fuentes                   | `WEB-ARC-006`                 |
| Sincronización con dominios operativos | `WEB-ARC-007`                 |
| Migración de hardcodeado               | `WEB-MIG-021`                 |
| Depuración de datos legacy             | `WEB-MIG-022`                 |
| Proyección pública                     | `WEB-DB-020`                  |
| Medios canónicos                       | `WEB-MED-002` a `WEB-MED-014` |
| Eliminar `service_role` público        | `WEB-SEC-017`                 |
| Endurecer CMS legacy                   | `WEB-SEC-018`                 |
| Validación previa a publicación        | `WEB-PUB-005`                 |
| Bloquear placeholders                  | `WEB-QA-021`                  |
| Smoke test de producción               | `WEB-QA-022`                  |
| Redirecciones                          | `WEB-PRD-016` y `WEB-GLB-010` |

#### 11. Registro consolidado de brechas

Esta tarea no crea identificadores nuevos cuando la brecha ya tiene responsable documental.

| Hallazgo de la matriz                      | Brechas previas                              | Responsable                                 |
| ------------------------------------------ | -------------------------------------------- | ------------------------------------------- |
| Copy editorial disperso en React           | `WEB-GAP-049`, `WEB-GAP-077`                 | `WEB-MIG-021`                               |
| Globales sin fuente administrable          | Auditorías de componentes y producción       | `WEB-ARC-006`, `WEB-GLB-003`, `WEB-GLB-005` |
| Colecciones mezclan datos y fallback       | `WEB-GAP-052`, `WEB-GAP-069`, `WEB-GAP-122`  | `WEB-MIG-022`, `WEB-DB-020`                 |
| Datos operativos duplicados                | `WEB-GAP-060`, `WEB-GAP-116`, `WEB-GAP-129`  | `WEB-ARC-007`                               |
| Medios por URL libre                       | `WEB-GAP-059`, `WEB-GAP-130`, `WEB-GAP-131`  | `WEB-MED-014`                               |
| Placeholders e instrucciones en producción | `WEB-GAP-062`, `WEB-GAP-146` a `WEB-GAP-167` | `WEB-QA-021`, `WEB-QA-022`                  |
| Ruta Eventos contradictoria                | `WEB-GAP-063`, `WEB-GAP-105`                 | `WEB-PAG-040`, `WEB-PRD-016`                |
| Lectura pública privilegiada               | `WEB-GAP-068`, `WEB-GAP-123`                 | `WEB-SEC-017`                               |

#### 12. Cambios obligatorios al plan maestro

##### 12.1 Actualizar continuidad

Marcar:

```text
[x] WEB-AUD-007 — Auditar contenido en producción
```

Mantener:

```text
[x] WEB-AUD-008 — APROBADA
```

##### 12.2 Adjuntar la matriz como evidencia de migración

`WEB-MIG-021` y `WEB-MIG-022` deberán declarar esta matriz como input obligatorio.

##### 12.3 No crear tablas desde esta tarea

La taxonomía `TGT-*` es lógica.

No autoriza:

- migraciones;
- creación de tablas;
- cambios RLS;
- cambios de Storage;
- edición del CMS;
- refactors;
- despliegues.

#### 13. Criterios de aprobación cumplidos

`WEB-AUD-008` fue aprobada con los siguientes criterios cumplidos:

- [x] la taxonomía de fuentes objetivo;
- [x] la taxonomía de estados;
- [x] la matriz global;
- [x] la matriz de Home;
- [x] la matriz de restaurantes;
- [x] la matriz de detalle;
- [x] la matriz de empleos;
- [x] la matriz de servicios;
- [x] la matriz de ecosistema;
- [x] la matriz de eventos;
- [x] la matriz de sistema y SEO;
- [x] la separación código vs contenido;
- [x] el orden de migración;
- [x] que `website_blocks` y `website_items` son legacy;
- [x] que esta tarea no implementa cambios físicos.

#### 14. Estado de cierre vigente

```text
WEB-AUD-008 — APROBADA
```

##### 14.1 No ejecutar todavía

- no migrar copy;
- no modificar componentes;
- no crear site settings;
- no cambiar fuentes;
- no retirar rutas;
- no cambiar sitemap;
- no modificar datos;
- no crear schemas;
- no aplicar migraciones.

##### 14.2 Continuidad vigente

```text
[x] WEB-AUD-007 — Auditar contenido en producción
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
[x] WEB-AUD-009 — Crear línea base visual
```


#### 15. Evidencia técnica

##### 15.1 Código público

- `src/app/layout.tsx`;
- `src/app/page.tsx`;
- `src/app/restaurantes/page.tsx`;
- `src/app/restaurantes/[slug]/page.tsx`;
- `src/app/empleos/page.tsx`;
- `src/app/servicios/page.tsx`;
- `src/app/ecosistema/page.tsx`;
- `src/app/eventos/page.tsx`;
- `src/app/sitemap.ts`;
- `src/app/robots.ts`;
- `src/components/site-header.tsx`;
- `src/components/site-footer.tsx`;
- `src/components/category-page.tsx`;
- `src/components/home-venues-showcase.tsx`;
- `src/components/item-card.tsx`;
- `src/components/media-slot.tsx`;
- `src/lib/content.ts`;
- `src/lib/supabase.ts`.

##### 15.2 Datos vigentes

Se verificaron en modo de solo lectura:

- 7 bloques;
- 9 items;
- 16 registros publicados;
- 0 medios en `website-media`;
- CTA `#` en apps, vacante, servicio y evento;
- 3 restaurantes sin body;
- Saudo sin medio;
- galerías legacy sin medios.

#### 16. Registro de cambios

| Versión        | Fecha      | Cambio                                     | Estado            |
| -------------- | ---------- | ------------------------------------------ | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación de matriz editable vs hardcodeado | Aprobada |


### WEB-AUD-009 — Línea base visual canónica de producción

> Captura reproducible del estado visual vigente de `https://www.ventogroup.co` en desktop, tablet y móvil.

#### 0. Control documental

| Campo                       | Valor                                            |
| --------------------------- | ------------------------------------------------ |
| Identificador               | `WEB-AUD-009`                                    |
| Nombre                      | Crear línea base visual                          |
| Fase                        | FASE 1 — Auditoría y línea base                  |
| Estado                      | **APROBADA**                    |
| Fecha de captura            | `2026-07-23T23:34:01Z`                           |
| Dominio capturado           | `https://www.ventogroup.co`                      |
| Método                      | Playwright Chromium en GitHub Actions            |
| Ejecución                   | `WEB-AUD-009 Visual Baseline`, run `30053552258` |
| Artifact ID                 | `8581958621`                                     |
| Capturas de página completa | 30                                               |
| Capturas de menú abierto    | 3                                                |
| Capturas aisladas de footer | 27                                               |
| Reporte estructurado        | `report.json`                                    |
| Cambios en producción       | Ninguno                                          |
| Cambios en Supabase         | Ninguno                                          |
| Próxima tarea               | `WEB-AUD-010 — Crear línea base de rendimiento`  |

##### 0.1 Continuidad

```text
[x] WEB-AUD-007 — Auditar contenido en producción
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
[x] WEB-AUD-009 — Crear línea base visual
```

`WEB-ARC-005` continúa pendiente y no se considera aprobada.

#### 1. Objetivo

Conservar evidencia visual verificable del sitio público antes de iniciar su reconstrucción.

La línea base debe permitir comparar posteriormente:

- estructura;
- composición;
- densidad;
- contenido visible;
- comportamiento responsive;
- menús;
- footer;
- placeholders;
- estados vacíos;
- redirecciones;
- página 404.

#### 2. Viewports canónicos

| Viewport | Dimensiones CSS | Uso                            |
| -------- | --------------: | ------------------------------ |
| Desktop  |   `1440 × 1000` | Escritorio y pantallas amplias |
| Tablet   |    `834 × 1112` | Tablet vertical                |
| Móvil    |     `390 × 844` | Teléfono móvil estándar        |

Las capturas son de página completa. La altura final depende del contenido de cada ruta.

#### 3. Cobertura

##### 3.1 Rutas capturadas

| Ruta solicitada                 | HTTP | Ruta final                      | Placeholders visibles | Fragmentos internos detectados |
| ------------------------------- | ---: | ------------------------------- | --------------------: | -----------------------------: |
| `/`                             |  200 | `/`                             |                     0 |                              1 |
| `/restaurantes`                 |  200 | `/restaurantes`                 |                     3 |                              0 |
| `/restaurantes/vento-cafe`      |  200 | `/restaurantes/vento-cafe`      |                     1 |                              4 |
| `/restaurantes/saudo`           |  200 | `/restaurantes/saudo`           |                     1 |                              4 |
| `/restaurantes/molka`           |  200 | `/restaurantes/molka`           |                     1 |                              4 |
| `/empleos`                      |  200 | `/empleos`                      |                     2 |                              0 |
| `/servicios`                    |  200 | `/servicios`                    |                     3 |                              0 |
| `/ecosistema`                   |  200 | `/ecosistema`                   |                     4 |                              0 |
| `/eventos`                      |  200 | `/restaurantes`                 |                     3 |                              0 |
| `/ruta-inexistente-web-aud-009` |  404 | `/ruta-inexistente-web-aud-009` |                     0 |                              0 |

##### 3.2 Estados adicionales

Se capturaron:

- menú abierto en desktop;
- menú abierto en tablet;
- menú abierto en móvil;
- footer aislado por cada ruta renderizada;
- ruta inexistente para verificar 404;
- `/eventos` para verificar su redirección;
- placeholders renderizados por `MediaSlot`;
- copy interno visible en detalles de restaurantes.

#### 4. Convención de archivos

```text
<viewport>__<ruta>.png
<viewport>__<ruta>__footer.png
<viewport>__menu-open.png
```

Ejemplos:

```text
desktop__home.png
tablet__restaurantes.png
mobile__restaurante-vento-cafe.png
mobile__menu-open.png
```

#### 5. Resultado visual general

##### 5.1 Home

La Home presenta el problema visual más severo de la línea base:

- el hero aparece como una superficie oscura sin medios publicados;
- después del hero queda una extensión crema desproporcionadamente vacía;
- la captura completa no muestra una narrativa visual continua;
- el footer queda aislado al final de una página con gran espacio sin contenido perceptible;
- el mismo patrón aparece en desktop, tablet y móvil;
- la composición depende de secciones cuyo contenido o media no existe.

Diagnóstico:

```text
HOME ESTRUCTURALMENTE RENDERIZADA
PERO VISUALMENTE INCOMPLETA
```

No debe utilizarse como referencia estética objetivo. Solo representa el estado previo.

##### 5.2 Restaurantes

La página de restaurantes sí presenta una estructura reconocible:

- hero;
- bloque de experiencia;
- banner;
- portafolio;
- CTA final;
- footer.

Sin embargo:

- el hero reutiliza el primer medio disponible, no un asset editorial propio;
- `La experiencia Vento` aparece como placeholder;
- el banner aparece vacío;
- Saudo aparece sin imagen;
- existen grandes zonas de baja densidad;
- la composición no tiene continuidad visual entre secciones.

##### 5.3 Detalles de restaurantes

Las tres páginas existen y responden `200`:

- Vento Café;
- Saudo;
- Molka.

Problemas compartidos:

- hero insuficiente o dependiente del logo;
- galería vacía;
- un placeholder visible por página;
- copy de instrucciones internas visible;
- labels en inglés dentro de un sitio en español;
- ubicación u horario `Por definir`;
- características genéricas no sustentadas;
- exceso de espacio vertical sin contenido;
- footer muy separado del cuerpo principal.

Problemas particulares:

- Vento Café y Molka muestran logos como medio dominante, no fotografía editorial;
- Saudo no tiene medio y muestra un placeholder;
- la galería almacenada no se representa como galería real.

##### 5.4 Empleos

La ruta responde `200`, pero visualmente funciona como un estado provisional:

- hero sin medio;
- única tarjeta `Vacante destacada`;
- tarjeta sin medio;
- ausencia de un estado vacío semántico;
- mucho espacio sin contenido entre listado y footer.

Clasificación:

```text
PÁGINA FUNCIONALMENTE VACÍA
DISFRAZADA MEDIANTE PLACEHOLDER PUBLICADO
```

##### 5.5 Servicios

La ruta presenta:

- hero;
- bloque introductorio;
- cuatro pilares;
- banner;
- listado;
- CTA final.

Problemas:

- hero sin medio;
- banner sin medio;
- único servicio provisional;
- tarjeta sin medio;
- gran área vacía en el listado;
- los pilares tienen más peso visual que el contenido real administrable.

##### 5.6 Ecosistema

La página muestra tres aplicaciones reales nominalmente, pero su estado visual es provisional:

- hero sin medio;
- tres tarjetas sin medios;
- cuatro placeholders visibles en total;
- ausencia de iconografía o screenshots de producto;
- destinos todavía no funcionales;
- gran espacio vacío antes del footer.

##### 5.7 Eventos

La captura solicitada para `/eventos` termina en `/restaurantes`.

Resultado:

```text
/eventos
   ↓
/restaurantes
   ↓
HTTP final 200
```

No existe una línea base visual propia de Eventos porque la ruta no tiene página pública autónoma.

##### 5.8 Página 404

La ruta inexistente responde correctamente `404`, pero utiliza la pantalla genérica:

```text
404
This page could not be found.
```

No contiene:

- branding;
- navegación;
- footer;
- explicación en español;
- CTA de recuperación;
- búsqueda;
- enlace al inicio.

#### 6. Menús

##### 6.1 Desktop

El menú overlay se abre y conserva:

- navegación principal;
- highlights;
- botón de cierre;
- fondo oscuro.

Observaciones:

- la composición ocupa toda la ventana;
- existe amplio espacio no utilizado;
- el contraste general es suficiente;
- la jerarquía entre navegación y highlights todavía es débil;
- el menú reproduce contenido hardcodeado.

##### 6.2 Tablet

El menú se adapta sin desbordamiento crítico observable.

Problemas:

- densidad reducida;
- distribución demasiado extendida verticalmente;
- footer y navegación usan tipografía pequeña frente al viewport;
- no existe una composición específica de tablet claramente diferenciada.

##### 6.3 Móvil

El menú móvil abre y permite ver las opciones principales.

Problemas:

- mucha información compactada en la parte superior;
- varios grupos compiten visualmente;
- el contenido secundario ocupa gran parte de la pantalla;
- el botón de cierre queda pequeño frente al encabezado;
- necesita una jerarquía móvil dedicada, no una simple compactación del overlay.

#### 7. Footer

El footer está presente en las nueve rutas que terminan renderizando una página del sitio.

Características actuales:

- fondo oscuro;
- wordmark decorativo de gran escala;
- links principales;
- newsletter;
- redes sociales;
- enlaces de categorías;
- copyright.

Problemas visuales:

- el wordmark decorativo compite con el contenido;
- en móvil queda recortado y domina la composición;
- la newsletter ocupa espacio aunque no tiene flujo funcional;
- las redes usan destinos genéricos;
- el footer repite múltiples bloques de navegación;
- las tipografías son pequeñas en tablet y móvil;
- el cierre visual no compensa las grandes áreas vacías que lo preceden.

#### 8. Estados vacíos y placeholders

##### 8.1 Conteo observado por página

| Página final |                                     Placeholders por viewport |
| ------------ | ------------------------------------------------------------: |
| Home         | 0 visuales etiquetados, pero hero sin media y gran área vacía |
| Restaurantes |                                                             3 |
| Vento Café   |                                     1 + 4 fragmentos internos |
| Saudo        |                                     1 + 4 fragmentos internos |
| Molka        |                                     1 + 4 fragmentos internos |
| Empleos      |                                                             2 |
| Servicios    |                                                             3 |
| Ecosistema   |                                                             4 |
| Eventos      |                  Hereda los 3 de Restaurantes por redirección |
| 404          |                           0; usa estado genérico de framework |

El conteo se repite en desktop, tablet y móvil.

##### 8.2 Textos internos visibles detectados

En los detalles de restaurantes se capturaron:

- `Diseña esta sección desde VISO...`;
- `Por definir`;
- `Bloque editable para features de experiencia.`;
- `Integra esta lista desde campo body en VISO con bullets.`.

Estos textos no son estados vacíos aceptables. Son instrucciones de administración filtradas a producción.

##### 8.3 Regla canónica

Un estado vacío público deberá:

- explicar la ausencia sin revelar implementación;
- ofrecer una acción útil cuando corresponda;
- conservar la composición;
- no inventar datos;
- no mostrar nombres técnicos;
- no mostrar instrucciones para VISO;
- no usar placeholders como contenido publicado.

#### 9. Responsive

##### 9.1 Hallazgos positivos

- no se observaron desbordamientos horizontales críticos en las capturas;
- las rutas principales renderizan en los tres viewports;
- header, menú y footer responden al ancho;
- las tarjetas pasan a una distribución vertical;
- los logos e imágenes existentes se contienen dentro de sus áreas.

##### 9.2 Hallazgos críticos

- las áreas vacías se amplifican en móvil y tablet;
- el footer adquiere un peso desproporcionado en pantallas pequeñas;
- las páginas de detalle se convierten en columnas muy largas con poco contenido;
- los placeholders adquieren más protagonismo que el contenido;
- no existe una narrativa móvil diferenciada;
- la Home queda prácticamente vacía después del hero;
- el menú móvil contiene demasiados niveles simultáneos.

#### 10. Integridad de la ejecución

##### 10.1 Navegación

- 30 navegaciones completadas;
- 27 respuestas `200` de rutas que renderizan página;
- 3 respuestas `404` esperadas para la ruta inexistente;
- 0 errores de navegación;
- `/eventos` redirigió de forma consistente en los tres viewports.

##### 10.2 Consola

Solo se registró el error esperado de recurso `404` en la ruta inexistente, una vez por viewport.

No se detectaron errores de consola adicionales durante la captura automatizada.

##### 10.3 Limitaciones

La captura no demuestra por sí sola:

- correcta navegación por teclado;
- lector de pantalla;
- contraste calculado;
- rendimiento;
- funcionamiento real de formularios;
- interacción completa con carruseles;
- estados hover;
- autenticación;
- contenido tras cambios futuros.

Esos puntos corresponden a QA, accesibilidad y rendimiento posteriores.

#### 11. Línea base visual resumida

| Superficie   | Desktop               | Tablet                | Móvil                 | Estado               |
| ------------ | --------------------- | --------------------- | --------------------- | -------------------- |
| Home         | Renderiza, casi vacía | Renderiza, casi vacía | Renderiza, casi vacía | Crítico              |
| Restaurantes | Parcial               | Parcial               | Parcial               | Incompleto           |
| Vento Café   | Parcial               | Parcial               | Parcial               | Incompleto           |
| Saudo        | Placeholder dominante | Placeholder dominante | Placeholder dominante | Crítico              |
| Molka        | Parcial               | Parcial               | Parcial               | Incompleto           |
| Empleos      | Placeholder           | Placeholder           | Placeholder           | Funcionalmente vacía |
| Servicios    | Parcial               | Parcial               | Parcial               | Incompleto           |
| Ecosistema   | Placeholders          | Placeholders          | Placeholders          | Funcionalmente vacía |
| Eventos      | Redirección           | Redirección           | Redirección           | Sin página propia    |
| Menú         | Operativo             | Operativo             | Operativo             | Requiere rediseño    |
| Footer       | Operativo             | Denso                 | Desproporcionado      | Requiere rediseño    |
| 404          | Genérico              | Genérico              | Genérico              | No diseñado          |

#### 12. Brechas canónicas

No se crean identificadores duplicados cuando el hallazgo ya tiene tarea responsable.

| Brecha        | Descripción                                                   | Severidad | Responsable                                  |
| ------------- | ------------------------------------------------------------- | --------- | -------------------------------------------- |
| `WEB-GAP-168` | Home presenta una gran superficie vacía en los tres viewports | Crítica   | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-169` | No existe una línea visual coherente entre secciones públicas | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-170` | Los estados vacíos se expresan como placeholders técnicos     | Crítica   | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-171` | El footer domina excesivamente la composición móvil           | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-172` | El menú móvil carece de jerarquía específica                  | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-173` | La 404 usa la pantalla genérica no localizada                 | Media     | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-174` | Detalles de restaurantes tienen excesivo vacío vertical       | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-175` | Logos operativos sustituyen fotografía editorial              | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-176` | No existe página visual propia para Eventos                   | Alta      | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |
| `WEB-GAP-177` | Tablet hereda composiciones sin adaptación específica         | Media     | Asignación vigente: ver matriz consolidada de `WEB-AUD-012`. |

#### 13. Decisiones derivadas

##### 13.1 La línea base no es el diseño objetivo

Estas capturas deberán conservarse como evidencia histórica.

No autorizan:

- replicar el layout actual;
- conservar espacios vacíos;
- convertir placeholders en componentes finales;
- mantener copy interno;
- utilizar logos como hero editorial;
- considerar una ruta `200` como página completa.

##### 13.2 Regresión visual futura

Las pruebas futuras deberán comparar contra:

1. esta línea base histórica;
2. los blueprints aprobados;
3. snapshots del nuevo sistema;
4. tolerancias explícitas por viewport.

La aprobación visual no se basará únicamente en “parecerse” a esta captura.

##### 13.3 Viewports mínimos futuros

Se mantienen como mínimo:

```text
1440 × 1000
834 × 1112
390 × 844
```

Se agregarán después:

- desktop ancho;
- laptop 1366;
- móvil pequeño;
- móvil landscape;
- tablet landscape.

#### 14. Cambios obligatorios al plan maestro

##### 14.1 Actualizar continuidad

Marcar:

```text
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
```

Mantener:

```text
[x] WEB-AUD-009 — APROBADA
```

##### 14.2 Usar el paquete como evidencia

La carpeta de evidencia deberá considerarse input obligatorio para:

- rediseño de páginas;
- responsive;
- QA visual;
- migración;
- validación previa al lanzamiento.

##### 14.3 No conservar el workflow temporal

El PR técnico de captura es temporal y no debe fusionarse en `main`.

Después de descargar y validar el artifact deberá:

- cerrarse;
- eliminarse la rama temporal;
- implementarse posteriormente una solución canónica de visual regression dentro de la fase QA.

#### 15. Criterios de aprobación cumplidos

`WEB-AUD-009` fue aprobada con los siguientes criterios cumplidos:

- [x] cobertura de 10 rutas por viewport;
- [x] viewports desktop, tablet y móvil;
- [x] capturas de menú abierto;
- [x] capturas de footer;
- [x] captura de 404;
- [x] diagnóstico de Home;
- [x] diagnóstico de páginas internas;
- [x] diagnóstico responsive;
- [x] inventario de placeholders;
- [x] brechas `WEB-GAP-168` a `WEB-GAP-177`;
- [x] conservación del ZIP como evidencia histórica;
- [x] que esta tarea no define el diseño objetivo.

#### 16. Estado de cierre vigente

```text
WEB-AUD-009 — APROBADA
```

##### 16.1 No ejecutar todavía

- no rediseñar páginas;
- no modificar CSS;
- no reemplazar medios;
- no retirar placeholders;
- no cambiar rutas;
- no cambiar footer;
- no cambiar menú;
- no implementar visual regression definitiva.

##### 16.2 Continuidad vigente

```text
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
[x] WEB-AUD-009 — Crear línea base visual
[x] WEB-AUD-010 — Crear línea base de rendimiento
```


#### 17. Evidencias entregadas

##### 17.1 Documento

- `WEB-AUD-009_LINEA_BASE_VISUAL_PRODUCCION.md`.

##### 17.2 Paquete visual

- `WEB-AUD-009_EVIDENCIA_VISUAL_PRODUCCION.zip`.

Incluye:

- PNG de página completa;
- PNG de menús;
- PNG de footer;
- contact sheets desktop, tablet y móvil;
- `report.json`.

#### 18. Registro de cambios

| Versión        | Fecha      | Cambio                                               | Estado            |
| -------------- | ---------- | ---------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Captura automatizada y análisis visual de producción | Aprobada |


### WEB-AUD-010 — Línea base canónica de rendimiento

> Auditoría de laboratorio y transferencia de la web pública desplegada en `https://www.ventogroup.co`.

#### 0. Control documental

| Campo                         | Valor                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| Identificador                 | `WEB-AUD-010`                                                                                |
| Nombre                        | Crear línea base de rendimiento                                                              |
| Fase                          | FASE 1 — Auditoría y línea base                                                              |
| Estado                        | APROBADA                                                                                     |
| Fecha                         | `2026-07-23`                                                                                 |
| Tipo de cierre                | Documental                                                                                   |
| Herramienta                   | Lighthouse `12.8.2` + Chromium en GitHub Actions                                             |
| Sitio                         | `https://www.ventogroup.co`                                                                  |
| Viewports                     | Móvil Lighthouse y desktop Lighthouse                                                        |
| Reportes solicitados          | 20                                                                                           |
| Reportes con archivo generado | 20                                                                                           |
| Performance scores válidos    | 4; corresponden a Restaurantes directo y a Eventos redirigido a Restaurantes, en ambos modos |
| Cambios en código             | Ninguno en `main`                                                                            |
| Cambios en producción         | Ninguno                                                                                      |
| Cambios en Supabase           | Ninguno                                                                                      |
| Próxima tarea                 | `WEB-AUD-011 — Crear línea base de accesibilidad`                                            |

##### 0.1 Continuidad

`WEB-AUD-009` queda aprobada documentalmente.

`WEB-AUD-010` queda aprobada documentalmente.

#### 1. Objetivo

Establecer una línea base verificable de:

- Lighthouse;
- Core Web Vitals;
- imágenes;
- videos;
- JavaScript enviado;
- transferencia total;
- requests;
- caché de HTML, assets y medios.

La auditoría separa obligatoriamente:

1. métricas de laboratorio;
2. métricas de campo;
3. pesos transferidos;
4. políticas de caché;
5. fallos de medición causados por el propio renderizado.

#### 2. Metodología

##### 2.1 Rutas

- `/`;
- `/restaurantes`;
- `/restaurantes/vento-cafe`;
- `/restaurantes/saudo`;
- `/restaurantes/molka`;
- `/empleos`;
- `/servicios`;
- `/ecosistema`;
- `/eventos`;
- una ruta 404 controlada.

##### 2.2 Modos

- móvil: configuración Lighthouse móvil;
- desktop: preset Lighthouse desktop.

##### 2.3 Evidencia

Se conservaron:

- 20 archivos Lighthouse JSON;
- resumen normalizado;
- headers HTTP por ruta;
- inventario de requests;
- recursos más pesados;
- diagnóstico de caché;
- registro de fallos de medición.

#### 3. Resultado ejecutivo

##### 3.1 Diagnóstico general

| Área                          | Estado                                | Resultado                                                                                |
| ----------------------------- | ------------------------------------- | ---------------------------------------------------------------------------------------- |
| Lighthouse completo           | 🔴 No confiable en la mayoría de rutas | El contenido no produce FCP o LCP medible en varias composiciones                        |
| Restaurantes desktop          | 🟢                                     | Performance 100; LCP 0,60 s; CLS 0                                                       |
| Restaurantes móvil            | 🟡                                     | Performance 96; LCP 2,74 s, superior al objetivo canónico de 2,5 s                       |
| Eventos                       | 🟡                                     | Mide Restaurantes después de una redirección 307; no constituye una página independiente |
| Detalles de restaurante       | 🔴                                     | Producen FCP, pero Lighthouse no identifica LCP; score de Performance nulo               |
| Inicio, Servicios, Ecosistema | 🔴                                     | `NO_FCP` en móvil y desktop                                                              |
| Empleos                       | 🔴                                     | `NO_FCP` móvil y `NO_LCP` desktop                                                        |
| JavaScript                    | 🟡                                     | 161–168 KB transferidos en rutas con inventario completo                                 |
| Imágenes                      | 🟡                                     | Cerca de 71 KB en páginas de restaurantes, dominadas por logos PNG                       |
| Videos                        | ⚪                                     | 0 bytes; no hay video real cargado para validar estrategia                               |
| Caché HTML estático           | 🟢/🟡                                   | Vercel HIT, pero navegador debe revalidar                                                |
| Caché detalles                | 🔴                                     | `private, no-cache, no-store`; Vercel MISS                                               |
| Caché medios Supabase         | 🟡                                     | Logos con TTL de 1 hora; Lighthouse estima ahorro repetido de ~53 KB                     |
| Core Web Vitals de campo      | ⚪ Sin evidencia suficiente            | No se obtuvo una muestra pública verificable; requiere Search Console, CrUX o RUM        |

##### 3.2 Conclusión principal

El sitio parece liviano en bytes porque todavía carece de medios editoriales reales. Esto no equivale a una arquitectura de rendimiento validada.

El problema principal no es el peso total actual, sino que numerosas páginas no producen un FCP o LCP medible de forma consistente. Los scores válidos de Restaurantes no representan a todo el sitio.

#### 4. Lighthouse móvil

| Página       | URL final                                                | Performance |    FCP |    LCP |  CLS |   TBT | Transferencia | Estado                   |
| ------------ | -------------------------------------------------------- | ----------: | -----: | -----: | ---: | ----: | ------------: | ------------------------ |
| Inicio       | `https://www.ventogroup.co/`                             |  NO MEDIBLE |      — |      — |    — |     — |        0.0 KB | NO_FCP                   |
| Restaurantes | `https://www.ventogroup.co/restaurantes`                 |          96 | 914 ms | 2.74 s |    0 | 50 ms |      335.4 KB | OK                       |
| Vento Café   | `https://www.ventogroup.co/restaurantes/vento-cafe`      |  NO MEDIBLE | 906 ms |      — |    0 |     — |      344.9 KB | NO_LCP                   |
| Saudo        | `https://www.ventogroup.co/restaurantes/saudo`           |  NO MEDIBLE | 912 ms |      — |    0 |     — |      344.7 KB | NO_LCP                   |
| Molka        | `https://www.ventogroup.co/restaurantes/molka`           |  NO MEDIBLE | 910 ms |      — |    0 |     — |      344.8 KB | NO_LCP                   |
| Empleos      | `https://www.ventogroup.co/empleos`                      |  NO MEDIBLE |      — |      — |    — |     — |        0.0 KB | NO_FCP                   |
| Servicios    | `https://www.ventogroup.co/servicios`                    |  NO MEDIBLE |      — |      — |    — |     — |        0.0 KB | NO_FCP                   |
| Ecosistema   | `https://www.ventogroup.co/ecosistema`                   |  NO MEDIBLE |      — |      — |    — |     — |        0.0 KB | NO_FCP                   |
| Eventos      | `https://www.ventogroup.co/restaurantes`                 |          95 | 907 ms | 3.01 s |    0 | 41 ms |      335.5 KB | OK                       |
| 404          | `https://www.ventogroup.co/ruta-inexistente-web-aud-010` |  NO MEDIBLE |      — |      — |    — |     — |        0.0 KB | ERRORED_DOCUMENT_REQUEST |

##### 4.1 Medición móvil válida de referencia

`/restaurantes`:

| Métrica     | Resultado |               Criterio del plan |
| ----------- | --------: | ------------------------------: |
| Performance |        96 |                            ≥ 85 |
| FCP         |    914 ms |                     Informativa |
| LCP         |    2.74 s |                         < 2,5 s |
| CLS         |         0 |                           < 0,1 |
| TBT         |     50 ms | Proxy de bloqueo de laboratorio |
| Speed Index |    937 ms |                     Informativa |

Resultado:

- Performance supera el objetivo;
- CLS cumple;
- LCP no cumple el objetivo canónico por aproximadamente 235 ms;
- TBT es bajo;
- la medición no valida INP de campo.

##### 4.2 Impacto de la redirección de Eventos

| Métrica móvil | Restaurantes directo | Eventos → Restaurantes |
| ------------- | -------------------: | ---------------------: |
| Performance   |                   96 |                     95 |
| LCP           |               2.74 s |                 3.01 s |
| Requests      |                   39 |                     40 |
| Transferencia |             335.4 KB |               335.5 KB |

La redirección incrementa el LCP observado y agrega navegación sin aportar contenido propio.

#### 5. Lighthouse desktop

| Página       | URL final                                                | Performance |    FCP |    LCP |  CLS |  TBT | Transferencia | Estado                   |
| ------------ | -------------------------------------------------------- | ----------: | -----: | -----: | ---: | ---: | ------------: | ------------------------ |
| Inicio       | `https://www.ventogroup.co/`                             |  NO MEDIBLE |      — |      — |    — |    — |        0.0 KB | NO_FCP                   |
| Restaurantes | `https://www.ventogroup.co/restaurantes`                 |         100 | 250 ms | 598 ms |    0 | 0 ms |      335.4 KB | OK                       |
| Vento Café   | `https://www.ventogroup.co/restaurantes/vento-cafe`      |  NO MEDIBLE | 249 ms |      — |    0 |    — |      344.9 KB | NO_LCP                   |
| Saudo        | `https://www.ventogroup.co/restaurantes/saudo`           |  NO MEDIBLE | 247 ms |      — |    0 |    — |      344.8 KB | NO_LCP                   |
| Molka        | `https://www.ventogroup.co/restaurantes/molka`           |  NO MEDIBLE | 248 ms |      — |    0 |    — |      344.8 KB | NO_LCP                   |
| Empleos      | `https://www.ventogroup.co/empleos`                      |  NO MEDIBLE | 288 ms |      — |    0 |    — |      268.6 KB | NO_LCP                   |
| Servicios    | `https://www.ventogroup.co/servicios`                    |  NO MEDIBLE |      — |      — |    — |    — |        0.0 KB | NO_FCP                   |
| Ecosistema   | `https://www.ventogroup.co/ecosistema`                   |  NO MEDIBLE |      — |      — |    — |    — |        0.0 KB | NO_FCP                   |
| Eventos      | `https://www.ventogroup.co/restaurantes`                 |         100 | 249 ms | 679 ms |    0 | 0 ms |      335.5 KB | OK                       |
| 404          | `https://www.ventogroup.co/ruta-inexistente-web-aud-010` |  NO MEDIBLE |      — |      — |    — |    — |        0.0 KB | ERRORED_DOCUMENT_REQUEST |

##### 5.1 Medición desktop válida de referencia

| Métrica     | Resultado |
| ----------- | --------: |
| Performance |       100 |
| FCP         |    250 ms |
| LCP         |    598 ms |
| CLS         |         0 |
| TBT         |      0 ms |
| Speed Index |    382 ms |

Desktop no es actualmente el riesgo principal. La puerta de calidad debe priorizar móvil.

#### 6. Fallos de medición

##### 6.1 `NO_FCP`

Se presentó en:

- Inicio desktop y móvil;
- Servicios desktop y móvil;
- Ecosistema desktop y móvil;
- Empleos móvil.

Debe investigarse:

- elementos inicialmente invisibles;
- animaciones de entrada;
- overlays;
- clases globales de introducción;
- contenido dependiente de hidratación;
- observadores que no activan bajo automatización;
- estados vacíos sin candidato visual.

##### 6.2 `NO_LCP`

Se presentó en:

- los tres detalles de restaurante, móvil y desktop;
- Empleos desktop.

Estas páginas transfieren recursos y producen FCP, pero no presentan un candidato LCP medible. Esto invalida el score general de Performance.

##### 6.3 404

Lighthouse marca la ruta 404 como `ERRORED_DOCUMENT_REQUEST` por su status HTTP. El status es correcto; su calidad visual y accesible deberá probarse fuera del score convencional.

##### 6.4 Regla canónica

```text
NO FCP O NO LCP
≠
PERFORMANCE APROBADA
```

Toda ruta prioritaria deberá producir métricas Lighthouse completas antes del lanzamiento.

#### 7. Core Web Vitals

##### 7.1 Laboratorio

Lighthouse aporta LCP, CLS, TBT, FCP y Speed Index. TBT es una señal de laboratorio; no sustituye INP de campo.

##### 7.2 Campo

No se obtuvo una muestra pública verificable de CrUX durante esta auditoría.

| Métrica de campo           | Estado                           |
| -------------------------- | -------------------------------- |
| LCP p75 real               | Sin evidencia pública suficiente |
| INP p75 real               | Sin evidencia pública suficiente |
| CLS p75 real               | Sin evidencia pública suficiente |
| Segmentación móvil/desktop | Sin evidencia pública suficiente |
| Tendencia histórica        | No disponible                    |

Esto no significa que las métricas sean buenas o malas. Significa que no pueden afirmarse todavía.

##### 7.3 Tarea nueva necesaria

```text
[ ] WEB-PERF-008 — Implementar medición de campo de Core Web Vitals
```

Alcance:

- Search Console;
- CrUX cuando exista muestra;
- RUM;
- LCP, INP y CLS;
- ruta y dispositivo;
- release;
- percentil 75;
- privacidad y retención;
- dashboard y alertas;
- vínculo con `WEB-OPS-006`.

#### 8. Transferencia y requests

Solo se agregan reportes con inventario de red no vacío.

| Modo    | Reportes con inventario | Transferencia promedio |             Rango | JavaScript promedio |          Rango JS | Imágenes promedio | Requests promedio |
| ------- | ----------------------: | ---------------------: | ----------------: | ------------------: | ----------------: | ----------------: | ----------------: |
| Móvil   |                       5 |               341.0 KB | 335.4 KB–344.9 KB |            161.4 KB | 157.5 KB–164.1 KB |           69.6 KB |              42.2 |
| Desktop |                       6 |               329.0 KB | 268.6 KB–344.9 KB |            160.8 KB | 157.5 KB–164.1 KB |           58.8 KB |              41.3 |

#### 9. JavaScript enviado

##### 9.1 Página representativa

| Campo            |    Móvil |  Desktop |
| ---------------- | -------: | -------: |
| JavaScript       | 157.6 KB | 157.5 KB |
| Requests JS      |       11 |       11 |
| Main-thread work |   1.07 s |   284 ms |
| Bootup time      |   444 ms |    69 ms |

Recursos principales:

- chunk principal: ~71 KB;
- segundo chunk: ~40 KB;
- resto: chunks de 4–9 KB;
- no se detectó JavaScript del editor VISO en la web pública.

`WEB-PERF-005` deberá definir presupuestos de JavaScript inicial, por ruta, main thread, hidratación y terceros.

#### 10. Imágenes

En las páginas de restaurantes se transfieren cerca de 71 KB:

- logo Molka: ~46,7 KB;
- logo Vento Café: ~20,1 KB;
- wordmark SVG: ~4,6 KB.

Saudo no aporta imagen real.

El peso es artificialmente bajo porque no existen hero images, galerías, banners ni medios editoriales reales. No puede usarse como presupuesto final.

`WEB-PERF-003` deberá exigir formatos modernos, variantes responsive, dimensiones, focal point, preload exclusivo del LCP, lazy loading, compresión y límites por slot.

#### 11. Videos

| Campo                         | Resultado |
| ----------------------------- | --------: |
| Requests                      |         0 |
| Bytes                         |         0 |
| Posters reales verificados    |         0 |
| Variantes móviles verificadas |         0 |

No es posible aprobar `WEB-PERF-004` con esta línea base.

#### 12. Fuentes y CSS

En `/restaurantes`:

| Recurso       | Transferencia aproximada |
| ------------- | -----------------------: |
| Fuentes WOFF2 |                  62,8 KB |
| CSS           |                  12,9 KB |

Las fuentes constituyen un bloque relevante del peso inicial y deberán mantenerse limitadas a subsets y pesos necesarios.

#### 13. Caché

##### 13.1 HTML estático

Inicio, Restaurantes, Servicios, Empleos y Ecosistema:

```text
cache-control: public, max-age=0, must-revalidate
x-vercel-cache: HIT
age: aproximadamente 1.490–1.846 segundos
```

Vercel conserva respuesta en edge, pero el navegador debe revalidar.

##### 13.2 Detalles de restaurante

Vento Café, Saudo y Molka:

```text
cache-control: private, no-cache, no-store, max-age=0, must-revalidate
x-vercel-cache: MISS
age: 0
```

Esto coincide con `force-dynamic` y evita cachear páginas que solo leen contenido publicado. La arquitectura objetivo deberá usar publicación inmutable, revalidación por evento e invalidación selectiva.

##### 13.3 Eventos

`/eventos` responde 307 y luego carga Restaurantes. Ambas respuestas fueron HIT de Vercel, pero la redirección agrega navegación.

##### 13.4 Medios Supabase

Los logos de Molka y Vento Café presentan TTL de 1 hora. Lighthouse estima ~53,4 KB de oportunidad de caché en visitas repetidas.

`WEB-PERF-006` y `WEB-MED-014` deberán definir versionado por URL, TTL, invalidación, transformación y assets web independientes de logos operativos.

#### 14. Presupuestos iniciales propuestos

| Métrica                         |                                      Presupuesto inicial |
| ------------------------------- | -------------------------------------------------------: |
| Lighthouse móvil                |                                                     ≥ 85 |
| Lighthouse desktop              |                                                     ≥ 95 |
| LCP laboratorio móvil           |                                                  ≤ 2,5 s |
| CLS laboratorio                 |                                                    ≤ 0,1 |
| TBT móvil                       |                                                 ≤ 200 ms |
| JavaScript inicial comprimido   |                            ≤ 180 KB por ruta prioritaria |
| CSS inicial comprimido          |                                                  ≤ 50 KB |
| Fuentes iniciales               |                                                 ≤ 100 KB |
| Imagen LCP móvil                |                                        ≤ 200 KB objetivo |
| Transferencia inicial sin video |                                                 ≤ 750 KB |
| Requests iniciales              |                                                     ≤ 60 |
| Video autoplay inicial          | Prohibido sin poster, variantes y presupuesto específico |

Se deberán revisar después de incorporar contenido visual real.

#### 15. Brechas canónicas

| Brecha        | Descripción                                                                          | Severidad | Tarea responsable               |
| ------------- | ------------------------------------------------------------------------------------ | --------- | ------------------------------- |
| `WEB-GAP-178` | La mayoría de rutas no produce Lighthouse completo por `NO_FCP` o `NO_LCP`           | Crítica   | `WEB-PERF-007`, `WEB-QA-014`    |
| `WEB-GAP-179` | Restaurantes móvil supera el LCP objetivo de 2,5 s                                   | Alta      | `WEB-PERF-001`                  |
| `WEB-GAP-180` | No existe evidencia verificable de LCP, INP y CLS de campo                           | Crítica   | `WEB-PERF-008`, `WEB-OPS-006`   |
| `WEB-GAP-181` | No existen presupuestos canónicos de bytes, requests y main thread                   | Alta      | `WEB-PERF-003` a `WEB-PERF-007` |
| `WEB-GAP-182` | Detalles de restaurante se sirven sin caché pública                                  | Alta      | `WEB-PERF-006`                  |
| `WEB-GAP-183` | Logos de Supabase tienen TTL corto para assets versionados                           | Media     | `WEB-PERF-006`, `WEB-MED-014`   |
| `WEB-GAP-184` | No hay videos reales para validar peso, poster y lazy loading                        | Alta      | `WEB-PERF-004`                  |
| `WEB-GAP-185` | El peso bajo de imágenes no representa el diseño objetivo                            | Alta      | `WEB-PERF-003`, `WEB-MED-004`   |
| `WEB-GAP-186` | Eventos agrega una redirección antes de servir Restaurantes                          | Media     | `WEB-PRD-016`, `WEB-GLB-010`    |
| `WEB-GAP-187` | Animaciones o estados iniciales pueden ocultar todo el contenido durante la medición | Crítica   | `WEB-QA-014`, `WEB-PERF-007`    |

#### 16. Cambios obligatorios al plan maestro

##### 16.1 Actualizar continuidad

```text
[x] WEB-AUD-009 — Crear línea base visual
[x] WEB-AUD-010 — APROBADA
```

##### 16.2 Agregar después de `WEB-PERF-007`

```text
[ ] WEB-PERF-008 — Implementar medición de campo de Core Web Vitals
  - Search Console.
  - CrUX.
  - RUM.
  - LCP.
  - INP.
  - CLS.
  - percentil 75.
  - segmentación por dispositivo y ruta.
  - dashboard.
  - alertas.
```

##### 16.3 Ampliar `WEB-PERF-007`

Debe exigir:

- ninguna ruta prioritaria con `NO_FCP`;
- ninguna ruta prioritaria con `NO_LCP`;
- reporte móvil y desktop;
- JSON de evidencia;
- comparación contra baseline;
- ejecución en staging;
- repeticiones para controlar variabilidad.

#### 17. Criterios de aprobación cumplidos

- [x] se reconoce que solo Restaurantes obtuvo un score independiente completo;
- [x] se acepta LCP móvil de 2,74 s como baseline no conforme;
- [x] se aceptan `NO_FCP` y `NO_LCP` como brechas críticas;
- [x] se acepta JavaScript de 161–168 KB;
- [x] se acepta que no existen videos reales;
- [x] se acepta que el peso de imágenes no representa el diseño futuro;
- [x] se acepta el diagnóstico de caché;
- [x] se agrega `WEB-PERF-008`;
- [x] ninguna métrica de campo se declara aprobada sin evidencia;
- [x] no se ejecutan optimizaciones todavía.

#### 18. Estado de cierre vigente

```text
WEB-AUD-010 — APROBADA
```

##### 18.1 No ejecutar todavía

- no modificar animaciones;
- no cambiar caché;
- no retirar `force-dynamic`;
- no comprimir assets;
- no agregar RUM;
- no cambiar componentes;
- no modificar Vercel;
- no modificar Supabase.

##### 18.2 Continuidad vigente

```text
[x] WEB-AUD-010 — Crear línea base de rendimiento
[x] WEB-AUD-011 — Crear línea base de accesibilidad
```

#### 19. Evidencia

- artifact `web-aud-010-performance-baseline`;
- 20 reportes Lighthouse JSON;
- `summary.json`;
- headers HTTP;
- PR técnico temporal no fusionable;
- commit `5590dfc5173fb0445e54848ec66c54578a1291d4`.

#### 20. Registro de cambios

| Versión        | Fecha      | Cambio                                                           | Estado            |
| -------------- | ---------- | ---------------------------------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Línea base Lighthouse, transferencia, medios, JavaScript y caché | Aprobada |


### WEB-AUD-011 — Línea base canónica de accesibilidad

> Auditoría reproducible de contraste, navegación por teclado, representación para lectores de pantalla, reducción de movimiento, textos alternativos y estructura semántica de la web pública en producción.

#### 0. Control documental

| Campo                 | Valor                                             |
| --------------------- | ------------------------------------------------- |
| Identificador         | `WEB-AUD-011`                                     |
| Nombre                | Crear línea base de accesibilidad                 |
| Fase                  | FASE 1 — Auditoría y línea base                   |
| Estado                | APROBADA                                          |
| Fecha                 | `2026-07-23`                                      |
| Tipo de cierre        | Documental                                        |
| URL auditada          | `https://www.ventogroup.co`                       |
| Navegador             | Chromium                                          |
| Viewports             | Desktop `1440×1000`; móvil `390×844`              |
| Rutas                 | 10                                                |
| Ejecuciones axe-core  | 20                                                |
| Herramientas          | Playwright, axe-core, árbol accesible de Chromium |
| Cambios en código     | Ninguno                                           |
| Cambios en Supabase   | Ninguno                                           |
| Cambios en producción | Ninguno                                           |
| Próxima tarea         | `WEB-AUD-012 — Consolidar brechas`                |

##### 0.1 Continuidad

```text
[x] WEB-AUD-001 — Inventariar todas las rutas públicas
[x] WEB-AUD-002 — Inventariar todos los componentes públicos
[x] WEB-AUD-003 — Inventariar contenido hardcodeado
[x] WEB-AUD-004 — Inventariar contenido administrable
[x] WEB-AUD-005 — Auditar VISO Website CMS
[x] WEB-AUD-006 — Auditar Supabase
[x] WEB-AUD-007 — Auditar contenido en producción
[x] WEB-AUD-008 — Crear matriz editable vs hardcodeado
[x] WEB-AUD-009 — Crear línea base visual
[x] WEB-AUD-010 — Crear línea base de rendimiento
[x] WEB-AUD-011 — Crear línea base de accesibilidad
```

`WEB-ARC-005` continúa pendiente y no se considera aprobada.

#### 1. Objetivo

Establecer una línea base verificable de accesibilidad antes de reconstruir la web y VISO Web Studio.

La auditoría debe responder:

1. si existe contraste automático suficiente;
2. si el sitio puede recorrerse por teclado;
3. si el foco es visible;
4. si los menús gestionan correctamente foco y estado;
5. si la estructura expuesta a lectores de pantalla es comprensible;
6. si existe un `h1` y una jerarquía de encabezados válida;
7. si las imágenes tienen alternativa;
8. si `prefers-reduced-motion` se respeta;
9. si los landmarks son correctos;
10. qué brechas deben resolverse antes del lanzamiento.

#### 2. Metodología

##### 2.1 Auditoría automática

Se ejecutó axe-core con reglas:

- WCAG 2.0 A y AA;
- WCAG 2.1 A y AA;
- WCAG 2.2 A y AA;
- buenas prácticas de axe.

##### 2.2 Navegación por teclado

Para cada ruta y viewport se registraron hasta 45 pulsaciones de `Tab`:

- elemento enfocado;
- visibilidad;
- `:focus-visible`;
- outline;
- box-shadow;
- enlace o rol;
- repetición;
- foco sobre elementos invisibles.

##### 2.3 Menú

Se probó:

- enfoque del disparador;
- apertura con `Enter`;
- `aria-expanded`;
- `aria-hidden`;
- secuencia de tabulación;
- cierre con `Escape`;
- devolución del foco al disparador.

##### 2.4 Lectores de pantalla

Se capturó el árbol accesible de Chromium por ruta y viewport para revisar:

- landmarks;
- nombres;
- roles;
- encabezados;
- enlaces;
- botones;
- formularios;
- texto alternativo.

Esto no sustituye pruebas manuales posteriores con:

- NVDA;
- VoiceOver;
- TalkBack;
- lector de pantalla real y síntesis de voz.

##### 2.5 Reducción de movimiento

Se abrió cada ruta con:

```text
prefers-reduced-motion: reduce
```

y se midieron animaciones activas aproximadamente a:

- 600 ms;
- 4,2 segundos.

#### 3. Resultado ejecutivo

| Área                 | Estado                        | Diagnóstico                                                                         |
| -------------------- | ----------------------------- | ----------------------------------------------------------------------------------- |
| Contraste automático | 🟢 Sin violaciones detectadas  | No sustituye revisión manual de estados hover, focus y medios futuros               |
| Teclado básico       | 🟡 Parcial                     | Los elementos son alcanzables, pero el menú cerrado sigue en el orden de tabulación |
| Menú                 | 🔴 Incorrecto                  | Contenido oculto enfocable, sin focus trap y sin retorno de foco                    |
| Foco visible         | 🔴 Incompleto                  | El campo de newsletter carece de indicador visible                                  |
| Lectores de pantalla | 🟡 Parcial                     | Landmarks generales correctos salvo 404; Home carece de `h1`                        |
| Encabezados          | 🔴 Incorrectos                 | Home sin `h1`; Empleos y Ecosistema saltan de `h1` a `h3`                           |
| Textos alternativos  | 🟢 Sin `img` visible sin `alt` | Dos logos decorativos usan `alt=""`; falta validar futuros medios editoriales       |
| Reduced motion       | 🟡 Parcial                     | Home mantiene dos animaciones activas al inicio pese a `reduce`                     |
| 404                  | 🔴 Incorrecta                  | Sin `main`, contenido fuera de landmarks y copy genérico en inglés                  |
| Skip link            | 🔴 Ausente                     | No existe salto directo al contenido principal                                      |

##### 3.1 Violaciones automáticas únicas

| Regla               | Impacto  | Auditorías afectadas | Nodos |
| ------------------- | -------- | -------------------: | ----: |
| `aria-hidden-focus` | serious  |                   16 |    16 |
| `heading-order`     | moderate |                    4 |     4 |
| `landmark-one-main` | moderate |                    2 |     2 |
| `region`            | moderate |                    2 |     4 |

##### 3.2 Interpretación

Se detectaron cuatro tipos de violación automática:

1. `aria-hidden-focus`;
2. `heading-order`;
3. `landmark-one-main`;
4. `region`.

La ausencia de una violación automática no equivale a conformidad WCAG total. axe-core no puede validar por sí solo:

- calidad del texto alternativo;
- orden mental correcto;
- claridad de mensajes;
- operación completa con lector real;
- adecuación de animaciones;
- calidad de los estados de foco;
- experiencia cognitiva.

#### 4. Contraste

##### 4.1 Resultado automático

axe-core no detectó fallas de contraste en las 20 ejecuciones.

##### 4.2 Alcance real de este resultado

La medición cubre el contenido actualmente renderizado, que todavía carece de:

- hero con imágenes reales;
- galerías completas;
- banners con fotografía;
- video;
- estados de error finales;
- overlays editoriales definitivos;
- nuevas variantes del constructor.

Por tanto:

```text
CONTRASTE ACTUAL SIN VIOLACIONES AUTOMÁTICAS
≠
CONTRASTE DEL SISTEMA FINAL APROBADO
```

##### 4.3 Riesgos pendientes

Deberán validarse manualmente:

- texto sobre fotografía;
- gradientes;
- estados hover;
- focus;
- disabled;
- enlaces visitados;
- tarjetas con video;
- temas oscuros;
- temas por restaurante;
- editor visual;
- indicadores de error;
- placeholders de formularios.

Responsable:

```text
WEB-QA-013 — Validar contraste
```

#### 5. Navegación por teclado

##### 5.1 Resultado general

No se detectaron elementos enfocados con geometría invisible durante el recorrido registrado.

Sin embargo, el resultado oculta una falla más grave: los enlaces del menú overlay permanecen en el orden de tabulación aunque el contenedor esté cerrado con:

```html
aria-hidden="true"
```

axe-core clasificó este hallazgo como **serious** en 16 de las 20 auditorías.

##### 5.2 Menú cerrado

El nodo afectado es:

```text
### site-overlay-menu
```

La implementación:

- mantiene el overlay montado;
- aplica `aria-hidden="true"`;
- conserva enlaces y botón de cierre enfocables;
- permite que teclado y tecnología asistiva entren en contenido declarado como oculto.

Debe corregirse mediante una estrategia real, por ejemplo:

- desmontar el contenido cuando está cerrado;
- utilizar `inert`;
- gestionar `tabIndex=-1`;
- usar un diálogo accesible correctamente implementado.

##### 5.3 Menú abierto

La secuencia observada fue:

```text
Cerrar
Restaurantes
Empleos
Servicios
Ecosistema
Reserva tu mesa
Empleos
Contacto
→ contenido de la página que queda detrás del overlay
```

Conclusión:

- no existe focus trap;
- el usuario puede salir del overlay hacia el contenido de fondo;
- el fondo no se vuelve inerte;
- el menú no funciona como modal accesible.

##### 5.4 Cierre con Escape

`Escape` sí cambió:

```text
aria-expanded: true → false
```

pero el foco quedó sobre el último control de fondo alcanzado y **no regresó al botón Menu**.

Esto incumple la expectativa operativa de un menú modal.

##### 5.5 Foco visible

Los enlaces y botones principales utilizaron el outline del navegador.

El campo de newsletter:

```text
input#footer-email
```

se enfocó con:

```text
outline: none
box-shadow: none
```

Por tanto, el usuario de teclado no recibe un indicador visual suficiente.

##### 5.6 Skip link

No se encontró un enlace de tipo:

```text
Saltar al contenido
```

El usuario debe recorrer la navegación completa en cada carga.

Responsable principal:

```text
WEB-QA-011 — Probar teclado
```

#### 6. Lectores de pantalla y semántica

##### 6.1 Landmarks

Las páginas funcionales exponen normalmente:

- `banner`;
- `navigation`;
- `main`;
- `contentinfo`.

La 404 no contiene un landmark `main`.

##### 6.2 Home

El árbol accesible contiene múltiples encabezados de nivel 2 y 3, pero:

```text
h1Count = 0
```

La página principal no tiene un encabezado principal semántico.

El hero se expone solamente como:

```text
region "Vento Group hero"
```

sin un `h1` que nombre el propósito de la página.

##### 6.3 Datos falsos expuestos

El lector de pantalla recibe como contenido real:

- `Comedor privado`;
- `Eventos corporativos`;
- `Celebraciones`;
- `Experiencias de Marca`;
- enlaces con destino `#`;
- placeholders de vacantes y aplicaciones.

Este es simultáneamente un problema de contenido y accesibilidad: la tecnología asistiva comunica información no verificada como si fuera vigente.

##### 6.4 Newsletter

El campo se anuncia correctamente como:

```text
textbox "Correo"
```

pero:

- el formulario no existe como elemento `form`;
- no hay integración;
- no existe mensaje de estado;
- no existe manejo accesible de éxito o error.

##### 6.5 Menú oculto

El contenido bajo `aria-hidden="true"` sigue siendo alcanzable por teclado, creando una contradicción entre:

- árbol accesible;
- foco;
- visibilidad.

##### 6.6 Pruebas manuales obligatorias posteriores

Responsable:

```text
WEB-QA-012 — Probar lector de pantalla
```

Matriz mínima:

| Plataforma       | Lector    |
| ---------------- | --------- |
| Windows + Chrome | NVDA      |
| macOS + Safari   | VoiceOver |
| iPhone + Safari  | VoiceOver |
| Android + Chrome | TalkBack  |

#### 7. `prefers-reduced-motion`

##### 7.1 Resultado

En nueve superficies no se detectaron animaciones activas durante las dos mediciones.

En Home:

| Momento | Animaciones activas |
| ------- | ------------------: |
| ~600 ms |                   2 |
| ~4,2 s  |                   0 |

##### 7.2 Evaluación

El carrusel contiene lógica para detener rotación cuando `prefers-reduced-motion` está activo, pero la experiencia de entrada continúa iniciando animaciones y temporizadores.

La implementación es **parcial**, no completa.

##### 7.3 Regla objetivo

Con `reduce`:

- no debe ejecutarse splash animado obligatorio;
- no debe existir parallax;
- no debe existir autoplay visual;
- no debe existir progreso animado;
- transiciones no esenciales deben eliminarse o reducirse;
- el contenido debe aparecer de forma inmediata;
- la navegación debe permanecer completamente operable.

Responsable:

```text
WEB-QA-014 — Validar animaciones reducidas
```

#### 8. Textos alternativos

##### 8.1 Resultado cuantitativo

En las 20 auditorías:

```text
Imágenes visibles sin atributo alt: 0
```

Se detectaron dos imágenes decorativas con:

```html
alt=""
```

correspondientes a wordmarks decorativos del footer.

##### 8.2 Limitaciones

El resultado actual no demuestra calidad editorial porque:

- la mayoría de los medios todavía no existe;
- los logos de restaurantes se usan como medios editoriales;
- varios placeholders son `div`, no `img`;
- el label técnico puede convertirse en alt poco útil;
- los videos no tienen alternativa textual;
- no existen galerías reales para evaluar.

##### 8.3 Regla objetivo

Cada asset deberá declarar:

- propósito decorativo o informativo;
- alt text;
- caption cuando corresponda;
- transcripción o descripción para video;
- ownership;
- idioma;
- contexto de uso.

Responsable:

```text
WEB-QA-015 — Validar alt text
```

#### 9. Estructura de encabezados

##### 9.1 Home

```text
No existe h1
h2 → h3
```

Aunque no hay salto automático dentro de la secuencia visible, falta el nivel principal.

##### 9.2 Empleos

```text
h1 Empleos
└── h3 Vacante destacada
```

Falta un `h2` de sección.

##### 9.3 Ecosistema

```text
h1 Ecosistema
└── h3 Vento Pass
```

Falta un `h2` de sección.

##### 9.4 Resto de páginas

No se detectaron saltos automáticos, pero deberán revisarse nuevamente después de:

- agregar contenido real;
- habilitar galerías;
- incorporar nuevas secciones;
- crear la 404;
- reactivar o retirar Eventos.

Responsable:

```text
WEB-QA-016 — Validar estructura de encabezados
```

#### 10. Página 404

##### 10.1 Estado actual

La 404:

- devuelve HTTP 404;
- tiene `lang="es"`;
- muestra copy en inglés;
- no utiliza header ni footer de Vento;
- no contiene `main`;
- deja contenido fuera de landmarks;
- no tiene enlace de recuperación;
- solo ofrece el foco del `body`.

##### 10.2 Tarea responsable

```text
WEB-PAG-070 — Crear página 404
```

Debe incluir:

- `main`;
- `h1`;
- explicación en español;
- enlace al inicio;
- acceso a navegación;
- foco inicial razonable;
- metadata `noindex`;
- identidad visual;
- pruebas de teclado y lector.

#### 11. Matriz por ruta y viewport

| Viewport | Ruta solicitada                 | Ruta final                      | HTTP | Violaciones                              |   H1 | Saltos | Alt faltantes | Alt vacíos |
| -------- | ------------------------------- | ------------------------------- | ---: | ---------------------------------------- | ---: | -----: | ------------: | ---------: |
| desktop  | `/`                             | `/`                             |  200 | Ninguna automática                       |    0 |      0 |             0 |          2 |
| desktop  | `/restaurantes`                 | `/restaurantes`                 |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/restaurantes/vento-cafe`      | `/restaurantes/vento-cafe`      |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/restaurantes/saudo`           | `/restaurantes/saudo`           |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/restaurantes/molka`           | `/restaurantes/molka`           |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/empleos`                      | `/empleos`                      |  200 | aria-hidden-focus (1), heading-order (1) |    1 |      1 |             0 |          2 |
| desktop  | `/servicios`                    | `/servicios`                    |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/ecosistema`                   | `/ecosistema`                   |  200 | aria-hidden-focus (1), heading-order (1) |    1 |      1 |             0 |          2 |
| desktop  | `/eventos`                      | `/restaurantes`                 |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| desktop  | `/ruta-inexistente-web-aud-011` | `/ruta-inexistente-web-aud-011` |  404 | landmark-one-main (1), region (2)        |    1 |      0 |             0 |          0 |
| mobile   | `/`                             | `/`                             |  200 | Ninguna automática                       |    0 |      0 |             0 |          2 |
| mobile   | `/restaurantes`                 | `/restaurantes`                 |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/restaurantes/vento-cafe`      | `/restaurantes/vento-cafe`      |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/restaurantes/saudo`           | `/restaurantes/saudo`           |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/restaurantes/molka`           | `/restaurantes/molka`           |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/empleos`                      | `/empleos`                      |  200 | aria-hidden-focus (1), heading-order (1) |    1 |      1 |             0 |          2 |
| mobile   | `/servicios`                    | `/servicios`                    |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/ecosistema`                   | `/ecosistema`                   |  200 | aria-hidden-focus (1), heading-order (1) |    1 |      1 |             0 |          2 |
| mobile   | `/eventos`                      | `/restaurantes`                 |  200 | aria-hidden-focus (1)                    |    1 |      0 |             0 |          2 |
| mobile   | `/ruta-inexistente-web-aud-011` | `/ruta-inexistente-web-aud-011` |  404 | landmark-one-main (1), region (2)        |    1 |      0 |             0 |          0 |

#### 12. Registro de hallazgos de origen — histórico

> Esta tabla conserva la evidencia original de la auditoría. La única fuente canónica vigente para propiedad, tareas vinculadas, momento de cierre y estado es la matriz consolidada de `WEB-AUD-012`.

| Brecha        | Descripción                                                                   | Severidad | Tarea responsable           |
| ------------- | ----------------------------------------------------------------------------- | --------- | --------------------------- |
| `WEB-GAP-188` | El menú cerrado contiene controles enfocables bajo `aria-hidden=true`         | Crítica   | `WEB-QA-011`                |
| `WEB-GAP-189` | El menú abierto no contiene el foco y permite tabular al fondo                | Crítica   | `WEB-QA-011`                |
| `WEB-GAP-190` | Cerrar con Escape no devuelve el foco al disparador                           | Alta      | `WEB-QA-011`                |
| `WEB-GAP-191` | El fondo no se vuelve `inert` mientras el menú está abierto                   | Alta      | `WEB-QA-011`                |
| `WEB-GAP-192` | El campo de newsletter no muestra foco visible                                | Alta      | `WEB-QA-011`, `WEB-FRM-011` |
| `WEB-GAP-193` | No existe skip link al contenido principal                                    | Alta      | `WEB-QA-011`                |
| `WEB-GAP-194` | La Home no contiene `h1`                                                      | Alta      | `WEB-QA-016`                |
| `WEB-GAP-195` | Empleos salta de `h1` a `h3`                                                  | Media     | `WEB-QA-016`                |
| `WEB-GAP-196` | Ecosistema salta de `h1` a `h3`                                               | Media     | `WEB-QA-016`                |
| `WEB-GAP-197` | La 404 carece de `main` y deja contenido fuera de landmarks                   | Alta      | `WEB-PAG-070`, `WEB-QA-012` |
| `WEB-GAP-198` | La 404 está en inglés y no ofrece recuperación                                | Alta      | `WEB-PAG-070`               |
| `WEB-GAP-199` | Home mantiene animaciones iniciales bajo reduced motion                       | Alta      | `WEB-QA-014`                |
| `WEB-GAP-200` | No existen pruebas manuales con lectores de pantalla reales                   | Alta      | `WEB-QA-012`                |
| `WEB-GAP-201` | El alt actual no representa la futura biblioteca multimedia                   | Media     | `WEB-QA-015`, `WEB-MED-005` |
| `WEB-GAP-202` | Placeholders y features ficticias son anunciados como contenido real          | Crítica   | `WEB-QA-021`, `WEB-MIG-022` |
| `WEB-GAP-203` | Newsletter carece de formulario y estados accesibles                          | Alta      | `WEB-FRM-011`, `WEB-QA-017` |
| `WEB-GAP-204` | No existe presupuesto ni puerta automatizada de accesibilidad por publicación | Alta      | `WEB-QA-023`                |

#### 13. Decisiones canónicas derivadas

##### 13.1 Menú

El menú global deberá implementarse como un patrón accesible explícito.

Mientras está cerrado:

```text
NO MONTADO
o
INERT + NO ENFOCABLE
```

Mientras está abierto:

```text
FOCO INICIAL EN CERRAR O PRIMER ELEMENTO
FOCUS TRAP
FONDO INERT
ESCAPE CIERRA
FOCO REGRESA AL DISPARADOR
SCROLL DE FONDO BLOQUEADO
ARIA COHERENTE
```

##### 13.2 Encabezados

Cada página deberá tener exactamente un `h1` visible y significativo.

Las tarjetas no podrán introducir `h3` sin una sección `h2` previa.

##### 13.3 Animación

`prefers-reduced-motion` debe ser un contrato transversal del renderer y no una corrección puntual de un carrusel.

##### 13.4 Alt text

El alt debe almacenarse como metadata del uso editorial del asset, no inferirse siempre del título de la entidad.

##### 13.5 Automatización

Toda publicación deberá pasar:

- axe-core;
- verificación de `h1`;
- heading order;
- landmarks;
- controles nombrados;
- foco del menú;
- reduced motion;
- alt requerido;
- contraste automatizable.

#### 14. Relación con tareas existentes

| Área                 | Tarea         |
| -------------------- | ------------- |
| Teclado              | `WEB-QA-011`  |
| Lectores de pantalla | `WEB-QA-012`  |
| Contraste            | `WEB-QA-013`  |
| Reduced motion       | `WEB-QA-014`  |
| Alt text             | `WEB-QA-015`  |
| Encabezados          | `WEB-QA-016`  |
| Formularios          | `WEB-QA-017`  |
| 404                  | `WEB-PAG-070` |
| Newsletter           | `WEB-FRM-011` |
| Placeholders         | `WEB-QA-021`  |
| Calidad integral     | `WEB-QA-023`  |
| Medios               | `WEB-MED-005` |

No se crea una tarea nueva porque todas las brechas tienen propietario explícito.

#### 15. Criterios de aprobación cumplidos

`WEB-AUD-011` fue aprobada con los siguientes criterios cumplidos:

- [x] la línea base de contraste;
- [x] el hallazgo `aria-hidden-focus`;
- [x] la ausencia de focus trap;
- [x] la falta de retorno de foco;
- [x] la falta de foco visible en newsletter;
- [x] la ausencia de skip link;
- [x] la falta de `h1` en Home;
- [x] los saltos en Empleos y Ecosistema;
- [x] el estado de la 404;
- [x] el soporte parcial de reduced motion;
- [x] la línea base de alt text;
- [x] la necesidad de pruebas con lectores reales;
- [x] las brechas `WEB-GAP-188` a `WEB-GAP-204`;
- [x] que esta tarea no implementa correcciones.

#### 16. Estado de cierre vigente

```text
WEB-AUD-011 — APROBADA
```

##### 16.1 No ejecutar todavía

- no modificar el menú;
- no agregar focus trap;
- no cambiar CSS;
- no cambiar encabezados;
- no crear la 404;
- no retirar animaciones;
- no cambiar alt text;
- no integrar axe en CI;
- no desplegar cambios.

##### 16.2 Continuidad vigente

```text
[x] WEB-AUD-010 — Crear línea base de rendimiento
[x] WEB-AUD-011 — Crear línea base de accesibilidad
[x] WEB-AUD-012 — Consolidar brechas
```


#### 17. Evidencia

El paquete de evidencia incluye:

- `summary.json`;
- 20 reportes axe-core;
- 20 secuencias de teclado;
- 20 snapshots del árbol accesible;
- capturas de foco;
- capturas del menú abierto;
- resultados de reduced motion;
- detalle de nodos afectados.

#### 18. Registro de cambios

| Versión        | Fecha      | Cambio                                  | Estado            |
| -------------- | ---------- | --------------------------------------- | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Creación de línea base de accesibilidad | Aprobada |


### WEB-AUD-012 — Consolidación canónica de brechas

> Registro único de brechas de la Fase 1. Cada hallazgo queda vinculado a tareas exactas, una fase de cierre y un estado verificable. Se eliminan rangos ambiguos, comodines y pendientes narrativos.

#### 0. Control documental

| Campo                             | Valor                                       |
| --------------------------------- | ------------------------------------------- |
| Identificador                     | `WEB-AUD-012`                               |
| Nombre                            | Consolidar brechas                          |
| Fase                              | FASE 1 — Auditoría y línea base             |
| Estado                            | APROBADA                                    |
| Fecha                             | `2026-07-23`                                |
| Tipo de cierre                    | Documental                                  |
| Brechas consolidadas              | **204**                                     |
| Primera brecha                    | `WEB-GAP-001`                               |
| Última brecha                     | `WEB-GAP-204`                               |
| IDs faltantes                     | **0**                                       |
| IDs duplicados                    | **0**                                       |
| Brechas sin propietaria           | **0**                                       |
| Referencias con comodín           | **0**                                       |
| Referencias por rango ambiguo     | **0**                                       |
| Tareas derivadas registradas                | **21**                                      |
| Tareas derivadas pendientes de materializar | **0**                                       |
| Cambios en código                 | Ninguno                                     |
| Cambios en Supabase               | Ninguno                                     |
| Cambios en producción             | Ninguno                                     |
| Siguiente tarea vigente             | `WEB-PRD-001 — Definir perfiles de usuario` |

##### 0.1 Continuidad

```text
[x] WEB-AUD-001
[x] WEB-AUD-002
[x] WEB-AUD-003
[x] WEB-AUD-004
[x] WEB-AUD-005
[x] WEB-AUD-006
[x] WEB-AUD-007
[x] WEB-AUD-008
[x] WEB-AUD-009
[x] WEB-AUD-010
[x] WEB-AUD-011
[x] WEB-AUD-012 — Consolidar brechas
```

`WEB-ARC-005` permanece no iniciada canónicamente. La recuperación de `WEB-GAP-072` a `WEB-GAP-084` no aprueba ese borrador ni sus decisiones arquitectónicas; únicamente regulariza identificadores que ya habían sido utilizados por documentos posteriores.

#### 1. Decisión canónica

Se adopta el siguiente contrato obligatorio:

```text
HALLAZGO
  → WEB-GAP-###
  → TAREA PROPIETARIA EXACTA
  → TAREAS DE IMPLEMENTACIÓN / VALIDACIÓN EXACTAS
  → FASE Y MOMENTO DE CIERRE
  → EVIDENCIA DE CIERRE
```

Queda prohibido registrar una brecha mediante:

- `WEB-PAG-*`;
- `WEB-QA-*`;
- cualquier otra familia genérica;
- “se resolverá después”;
- “pendiente para una fase futura”;
- un rango sin enumerar sus tareas;
- una tarea citada pero no materializada;
- una conversación sin incorporación documental.

#### 2. Estados y regla de cierre

| Estado               | Significado                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| `ASIGNADA — ABIERTA` | Tiene propietaria y momento de resolución, pero la solución no está implementada |
| `DEFINIDA`           | La decisión funcional o arquitectónica fue aprobada                              |
| `IMPLEMENTADA`       | La solución fue aplicada, pero falta validación final                            |
| `VALIDADA`           | Las pruebas de la tarea de cierre fueron satisfactorias                          |
| `CERRADA`            | Existe evidencia versionada y no quedan dependencias abiertas                    |

Una tarea documental aprobada no cierra automáticamente una brecha de implementación. El cierre se produce únicamente en el momento indicado en la matriz.

#### 3. Regularizaciones obligatorias

##### 3.1 Recuperación de `WEB-GAP-072` a `WEB-GAP-084`

Los identificadores fueron reservados por un borrador no aprobado de `WEB-ARC-005`, pero ya habían sido referenciados en auditorías posteriores. Eliminarlos rompería trazabilidad. Esta tarea conserva los hallazgos, corrige sus propietarios y mantiene `WEB-ARC-005` pendiente.

##### 3.2 Resolución del conflicto `WEB-QA-022`

La decisión aprobada más reciente fija:

```text
WEB-QA-022 — Crear smoke test canónico de producción
```

Por tanto, `WEB-QA-022` no se reutiliza para el Section Registry. Se crea:

```text
WEB-QA-025 — Validar integridad del Section Registry y sus contratos
```

##### 3.3 Corrección de la brecha de 404

`WEB-GAP-173` estaba vinculada erróneamente a `WEB-PAG-041`, que corresponde al selector de espacios de Eventos. Su propietaria correcta es `WEB-PAG-070`, con cierre adicional en `WEB-QA-022`.

##### 3.4 Eliminación de familias inexistentes

Las referencias `WEB-DS-*` y `WEB-RSP-*` fueron sustituidas por tareas existentes y exactas de producto, renderer, páginas y QA. No se crean familias paralelas sin necesidad.

#### 4. Tareas derivadas materializadas por esta consolidación

Estas tareas quedaron insertadas físicamente una sola vez en su fase propietaria. Su definición en esta sección elimina el estado de “mención narrativa”.

| Tarea          | Nombre                                                      | Fase                                           |
| -------------- | ----------------------------------------------------------- | ---------------------------------------------- |
| `ADR-WEB-011`  | Aprobar política canónica de fallback y degradación pública | FASE 3 — Arquitectura y ADR                    |
| `WEB-ARC-008`  | Crear paquete compartido @vento/web-contracts               | FASE 3 — Arquitectura y ADR                    |
| `WEB-ARC-009`  | Definir ciclo de vida y migración de schemas de sección     | FASE 3 — Arquitectura y ADR                    |
| `WEB-FRM-011`  | Implementar suscripción de newsletter o retirar la interfaz | FASE 11 — Formularios                          |
| `WEB-MED-014`  | Resolver entrega pública segura de medios                   | FASE 9 — Biblioteca multimedia                 |
| `WEB-MIG-020`  | Retirar componentes y composiciones públicas legacy         | FASE 13 — Migración y corte                    |
| `WEB-MIG-021`  | Migrar contenido hardcodeado a fuentes canónicas            | FASE 13 — Migración y corte                    |
| `WEB-MIG-022`  | Depurar y clasificar datos CMS legacy existentes            | FASE 13 — Migración y corte                    |
| `WEB-MIG-023`  | Migrar estilos públicos a tokens y CSS Modules              | FASE 13 — Migración y corte                    |
| `WEB-MIG-024`  | Implementar adaptador legacy de solo lectura                | FASE 13 — Migración y corte                    |
| `WEB-PERF-008` | Implementar medición de campo de Core Web Vitals            | FASE 15 — Calidad, accesibilidad y rendimiento |
| `WEB-PRD-015`  | Definir taxonomía canónica de rutas públicas                | FASE 2 — Definición funcional                  |
| `WEB-PRD-016`  | Definir política canónica de redirecciones                  | FASE 2 — Definición funcional                  |
| `WEB-PUB-015`  | Implementar guardado atómico de contenido relacionado       | FASE 6 — Publicación y versiones               |
| `WEB-QA-022`   | Crear smoke test canónico de producción                     | FASE 15 — Calidad, accesibilidad y rendimiento |
| `WEB-QA-023`   | Validar calidad integral de VISO Web Studio                 | FASE 15 — Calidad, accesibilidad y rendimiento |
| `WEB-QA-024`   | Probar RLS, GRANTs y Storage del dominio web                | FASE 15 — Calidad, accesibilidad y rendimiento |
| `WEB-QA-025`   | Validar integridad del Section Registry y sus contratos     | FASE 15 — Calidad, accesibilidad y rendimiento |
| `WEB-RND-017`  | Crear MediaRenderer canónico                                | FASE 5 — Renderer                              |
| `WEB-RND-018`  | Crear Data Resolver Registry                                | FASE 5 — Renderer                              |
| `WEB-RND-019`  | Crear LinkRenderer canónico                                 | FASE 5 — Renderer                              |

##### 4.1 Verificación de inserción

###### FASE 2 — Definición funcional

```text
[ ] WEB-PRD-015 — Definir taxonomía canónica de rutas públicas
[ ] WEB-PRD-016 — Definir política canónica de redirecciones
```

###### FASE 3 — Arquitectura y ADR

```text
[ ] ADR-WEB-011 — Aprobar política canónica de fallback y degradación pública
[ ] WEB-ARC-008 — Crear paquete compartido @vento/web-contracts
[ ] WEB-ARC-009 — Definir ciclo de vida y migración de schemas de sección
```

###### FASE 5 — Renderer

```text
[ ] WEB-RND-017 — Crear MediaRenderer canónico
[ ] WEB-RND-018 — Crear Data Resolver Registry
[ ] WEB-RND-019 — Crear LinkRenderer canónico
```

###### FASE 6 — Publicación y versiones

```text
[ ] WEB-PUB-015 — Implementar guardado atómico de contenido relacionado
```

###### FASE 9 — Biblioteca multimedia

```text
[ ] WEB-MED-014 — Resolver entrega pública segura de medios
```

###### FASE 11 — Formularios

```text
[ ] WEB-FRM-011 — Implementar suscripción de newsletter o retirar la interfaz
```

###### FASE 13 — Migración y corte

```text
[ ] WEB-MIG-020 — Retirar componentes y composiciones públicas legacy
[ ] WEB-MIG-021 — Migrar contenido hardcodeado a fuentes canónicas
[ ] WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes
[ ] WEB-MIG-023 — Migrar estilos públicos a tokens y CSS Modules
[ ] WEB-MIG-024 — Implementar adaptador legacy de solo lectura
```

###### FASE 15 — Calidad, accesibilidad y rendimiento

```text
[ ] WEB-PERF-008 — Implementar medición de campo de Core Web Vitals
[ ] WEB-QA-022 — Crear smoke test canónico de producción
[ ] WEB-QA-023 — Validar calidad integral de VISO Web Studio
[ ] WEB-QA-024 — Probar RLS, GRANTs y Storage del dominio web
[ ] WEB-QA-025 — Validar integridad del Section Registry y sus contratos
```

#### 5. Resumen cuantitativo

##### 5.1 Por severidad

| Severidad | Cantidad |
| --------- | -------: |
| Crítica   |       67 |
| Alta      |      113 |
| Media     |       24 |
| Baja      |        0 |

##### 5.2 Por fase de cierre

| Fase de cierre                                 | Brechas |
| ---------------------------------------------- | ------: |
| FASE 3 — Arquitectura y ADR                    |       6 |
| FASE 4 — Base de datos y migraciones           |       7 |
| FASE 5 — Renderer                              |      10 |
| FASE 6 — Publicación y versiones               |       9 |
| FASE 7 — Fundamento del editor                 |       6 |
| FASE 8 — Edición visual                        |       1 |
| FASE 9 — Biblioteca multimedia                 |       4 |
| FASE 10 — Configuración global                 |       6 |
| FASE 11 — Formularios                          |       1 |
| FASE 12 — Reconstrucción de páginas            |       6 |
| FASE 13 — Migración y corte                    |      24 |
| FASE 14 — Seguridad                            |      36 |
| FASE 15 — Calidad, accesibilidad y rendimiento |      82 |
| FASE 16 — Despliegue y operación               |       6 |

##### 5.3 Propietarias principales con mayor carga

| Tarea propietaria                                                             | Brechas |
| ----------------------------------------------------------------------------- | ------: |
| `WEB-PRD-002` — Definir matriz de permisos                                    |       6 |
| `WEB-QA-011` — Probar teclado                                                 |       6 |
| `WEB-PAG-040` — Definir blueprint de Eventos                                  |       5 |
| `WEB-GLB-003` — Crear editor de header                                        |       5 |
| `WEB-PAG-012` — Crear plantilla de restaurante                                |       5 |
| `WEB-RND-002` — Crear schemas de validación                                   |       5 |
| `WEB-SEC-019` — Reducir privilegios SQL y endurecer funciones del dominio web |       5 |
| `WEB-PAG-070` — Crear página 404                                              |       4 |
| `WEB-GLB-006` — Crear información corporativa                                 |       4 |
| `ADR-WEB-011` — Aprobar política canónica de fallback y degradación pública   |       4 |
| `WEB-ARC-003` — Crear contrato de fuentes dinámicas                           |       4 |
| `WEB-QA-021` — Bloquear placeholders y contenido provisional en publicación   |       4 |
| `WEB-MED-002` — Crear biblioteca visual                                       |       4 |
| `WEB-RND-006` — Crear manejo de errores                                       |       3 |
| `WEB-ARC-005` — Definir arquitectura canónica de componentes públicos         |       3 |
| `WEB-RND-003` — Crear Section Registry                                        |       3 |
| `WEB-FRM-011` — Implementar suscripción de newsletter o retirar la interfaz   |       3 |
| `WEB-PAG-020` — Definir blueprint de Empleos                                  |       3 |
| `WEB-ARC-002` — Crear contrato de secciones                                   |       3 |
| `WEB-MIG-015` — Poblar contenido real                                         |       3 |

#### 6. Matriz canónica completa

| Brecha        | Descripción                                                                          | Severidad | Tarea propietaria | Tareas vinculadas exactas                                                                               | Momento de cierre                                                                                                                                       | Estado               | Fuente                                                               |
| ------------- | ------------------------------------------------------------------------------------ | --------- | ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------------------------- |
| `WEB-GAP-001` | `/eventos` aparece en sitemap, pero redirige                                         | Alta      | `WEB-PAG-040`     | `WEB-GLB-009`                                                                                           | FASE 12 — Reconstrucción de páginas — `WEB-PAG-040`                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-002` | CTA de eventos regresa a restaurantes                                                | Alta      | `WEB-PAG-042`     | `WEB-QA-018`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-003` | No existe `/contacto`                                                                | Alta      | `WEB-PAG-060`     | `WEB-PAG-061`                                                                                           | FASE 12 — Reconstrucción de páginas — `WEB-PAG-060`, `WEB-PAG-061`                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-004` | No existen páginas legales                                                           | Alta      | `WEB-PAG-072`     | `WEB-PAG-073`, `WEB-PAG-074`, `WEB-PAG-075`, `WEB-GLB-013`                                              | FASE 12 — Reconstrucción de páginas — `WEB-PAG-072`, `WEB-PAG-073`, `WEB-PAG-074`, `WEB-PAG-075`                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-005` | No existe detalle de vacante                                                         | Media     | `WEB-PAG-021`     | `WEB-PAG-022`                                                                                           | FASE 12 — Reconstrucción de páginas — `WEB-PAG-021`, `WEB-PAG-022`                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-006` | Navegación y rutas están hardcodeadas                                                | Alta      | `WEB-GLB-003`     | `WEB-GLB-004`, `WEB-GLB-005`                                                                            | FASE 10 — Configuración global — `WEB-GLB-003`, `WEB-GLB-004`, `WEB-GLB-005`                                                                            | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-007` | Fallbacks pueden generar rutas placeholder                                           | Alta      | `WEB-RND-006`     | `WEB-MIG-003`, `WEB-MIG-015`                                                                            | FASE 13 — Migración y corte — `WEB-MIG-003`, `WEB-MIG-015`                                                                                              | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-008` | No existe 404 personalizada                                                          | Media     | `WEB-PAG-070`     | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-009` | No existe página de error personalizada                                              | Media     | `WEB-PAG-071`     | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-010` | Inconsistencia `Ecosistema` / `Nosotros`                                             | Media     | `WEB-PRD-015`     | `WEB-PAG-030`                                                                                           | FASE 12 — Reconstrucción de páginas — `WEB-PAG-030`                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-011` | `SearchAction` sin búsqueda real                                                     | Media     | `WEB-GLB-008`     | `WEB-QA-020`, `WEB-QA-022`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-020`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-012` | Tres convenciones de bloques de restaurante                                          | Media     | `WEB-ARC-001`     | `WEB-MIG-003`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-003`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-001 INVENTARIO CANONICO RUTAS PUBLICAS JERARQUIA CORREGIDA` |
| `WEB-GAP-013` | No existe arquitectura canónica de componentes y capas                               | Alta      | `WEB-ARC-005`     | `ADR-WEB-002`                                                                                           | FASE 3 — Arquitectura y ADR — `WEB-ARC-005`, `ADR-WEB-002`                                                                                              | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-014` | No existe `Section Registry`; las páginas ensamblan componentes manualmente          | Crítica   | `WEB-RND-003`     | `WEB-RND-005`                                                                                           | FASE 5 — Renderer — `WEB-RND-003`, `WEB-RND-005`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-015` | La capa multimedia carece de optimización, focal point y contratos de accesibilidad  | Crítica   | `WEB-MED-005`     | `WEB-MED-006`, `WEB-MED-007`, `WEB-MED-008`, `WEB-MED-009`, `WEB-RND-017`                               | FASE 9 — Biblioteca multimedia — `WEB-MED-005`, `WEB-MED-006`, `WEB-MED-007`, `WEB-MED-008`, `WEB-MED-009`                                              | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-016` | Header y footer tienen navegación y contenido hardcodeados                           | Alta      | `WEB-GLB-003`     | `WEB-GLB-004`, `WEB-GLB-005`, `WEB-GLB-006`                                                             | FASE 10 — Configuración global — `WEB-GLB-003`, `WEB-GLB-004`, `WEB-GLB-005`, `WEB-GLB-006`                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-017` | La suscripción del footer no funciona                                                | Alta      | `WEB-FRM-011`     | `WEB-GLB-005`                                                                                           | FASE 11 — Formularios — `WEB-FRM-011`                                                                                                                   | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-018` | Enlaces sociales del footer son placeholders genéricos                               | Alta      | `WEB-GLB-006`     | `WEB-MIG-015`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-015`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-019` | JSON-LD acepta datos sin schema ni escape endurecido                                 | Alta      | `WEB-SEC-016`     | `WEB-RND-014`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-016`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-020` | `CategoryPage` impone una estructura inadecuada a Empleos y Ecosistema               | Alta      | `WEB-PAG-020`     | `WEB-PAG-030`, `WEB-MIG-020`                                                                            | FASE 13 — Migración y corte — `WEB-MIG-020`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-021` | `HomeVenuesShowcase` convierte texto libre en características                        | Alta      | `WEB-ARC-002`     | `WEB-ARC-003`, `WEB-PAG-010`                                                                            | FASE 12 — Reconstrucción de páginas — `WEB-PAG-010`                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-022` | `HomeEditorialBand` es legacy y no tiene uso confirmado                              | Media     | `WEB-MIG-020`     | —                                                                                                       | FASE 13 — Migración y corte — `WEB-MIG-020`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-023` | Todos los componentes están acoplados a un `globals.css` monolítico                  | Alta      | `WEB-ARC-005`     | `WEB-RND-011`, `WEB-GLB-001`                                                                            | FASE 10 — Configuración global — `WEB-GLB-001`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-024` | No existen pruebas unitarias o de componentes                                        | Alta      | `WEB-QA-001`      | `WEB-QA-002`, `WEB-QA-006`, `WEB-RND-016`                                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-001`, `WEB-QA-002`, `WEB-QA-006`                                                               | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-025` | Componentes interactivos complejos carecen de pruebas E2E                            | Alta      | `WEB-QA-003`      | `WEB-QA-011`, `WEB-QA-014`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-003`, `WEB-QA-011`, `WEB-QA-014`                                                               | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-026` | Manejo de enlaces internos y externos no está unificado                              | Media     | `WEB-ARC-002`     | `WEB-RND-002`, `WEB-QA-018`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-027` | Persisten textos fallback, instrucciones y controles en inglés                       | Alta      | `WEB-MIG-015`     | `WEB-QA-018`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-028` | El menú overlay carece de gestión completa del foco                                  | Alta      | `WEB-GLB-003`     | `WEB-QA-011`, `WEB-QA-012`, `WEB-QA-023`                                                                | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-012`, `WEB-QA-023`                                                               | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-029` | Header y footer se montan manualmente en cada composición                            | Media     | `WEB-ARC-005`     | `WEB-RND-005`                                                                                           | FASE 5 — Renderer — `WEB-RND-005`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-030` | No existe manejo canónico de vacío, error y contenido inválido por componente        | Alta      | `WEB-RND-006`     | `WEB-QA-002`, `WEB-QA-022`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-002`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-002 INVENTARIO CANONICO COMPONENTES PUBLICOS`               |
| `WEB-GAP-031` | No existe política canónica de fallback público                                      | Crítica   | `ADR-WEB-011`     | —                                                                                                       | FASE 3 — Arquitectura y ADR — `ADR-WEB-011`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-032` | 13 registros fallback están marcados como publicados                                 | Crítica   | `ADR-WEB-011`     | `WEB-MIG-015`, `WEB-QA-021`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-033` | Existen instrucciones internas visibles como copy público                            | Crítica   | `WEB-MIG-015`     | `WEB-MIG-021`, `WEB-QA-021`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-034` | Existen CTA `#` en entidades publicadas                                              | Crítica   | `WEB-RND-006`     | `WEB-QA-018`, `WEB-QA-021`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`, `WEB-QA-021`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-035` | Correos operativos están distribuidos en código                                      | Alta      | `WEB-GLB-006`     | `WEB-MIG-021`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-021`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-036` | Redes sociales apuntan a URLs genéricas                                              | Alta      | `WEB-GLB-006`     | `WEB-MIG-015`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-015`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-037` | SEO global y por página está duplicado y hardcodeado                                 | Alta      | `WEB-GLB-007`     | `WEB-GLB-008`, `WEB-RND-013`                                                                            | FASE 10 — Configuración global — `WEB-GLB-007`, `WEB-GLB-008`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-038` | SearchAction declara una función inexistente                                         | Alta      | `WEB-GLB-008`     | `WEB-QA-020`, `WEB-QA-022`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-020`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-039` | Contenido visible mezcla español e inglés                                            | Alta      | `WEB-MIG-021`     | `WEB-QA-021`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-040` | Existen textos públicos sin ortografía normalizada                                   | Media     | `WEB-MIG-021`     | `WEB-QA-021`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-041` | Wordmark y marca están acoplados a rutas de archivos                                 | Alta      | `WEB-GLB-002`     | `WEB-MIG-014`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-014`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-042` | Copyright contiene año fijo                                                          | Media     | `WEB-GLB-005`     | —                                                                                                       | FASE 10 — Configuración global — `WEB-GLB-005`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-043` | Los pilares de Servicios están fuera del CMS                                         | Alta      | `WEB-PAG-050`     | `WEB-MIG-021`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-021`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-044` | Características de restaurantes se inventan desde fallbacks                          | Crítica   | `WEB-ARC-003`     | `WEB-MIG-015`, `WEB-QA-021`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-045` | Enlaces de entidades dependen de un mapa de rutas provisional                        | Alta      | `WEB-PRD-015`     | `WEB-ARC-003`                                                                                           | FASE 3 — Arquitectura y ADR — `WEB-ARC-003`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-046` | No existe ownership canónico por clase de contenido                                  | Alta      | `WEB-ARC-006`     | —                                                                                                       | FASE 3 — Arquitectura y ADR — `WEB-ARC-006`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-047` | No existe control automático de placeholders previo a publicar                       | Crítica   | `WEB-QA-021`      | `WEB-PUB-005`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-048` | Contenido global, editorial y microcopia están mezclados                             | Alta      | `WEB-ARC-006`     | `WEB-MIG-021`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-021`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-003 INVENTARIO CANONICO CONTENIDO HARDCODEADO`              |
| `WEB-GAP-049` | El CMS actual solo administra filas, no páginas ni estructuras                       | Crítica   | `WEB-RND-003`     | `WEB-EDT-001`, `WEB-BLD-001`                                                                            | FASE 8 — Edición visual — `WEB-BLD-001`                                                                                                                 | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-050` | `website_blocks` no está ligado a páginas, revisiones ni schemas                     | Crítica   | `WEB-ARC-001`     | `WEB-ARC-002`, `WEB-DB-002`, `WEB-DB-003`                                                               | FASE 4 — Base de datos y migraciones — `WEB-DB-002`, `WEB-DB-003`                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-051` | Tipos y claves de bloques están dispersos y no validados                             | Alta      | `ADR-WEB-002`     | `WEB-RND-002`, `WEB-RND-003`                                                                            | FASE 5 — Renderer — `WEB-RND-002`, `WEB-RND-003`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-052` | Los 16 registros CMS actuales están publicados                                       | Alta      | `ADR-WEB-011`     | `WEB-MIG-022`, `WEB-QA-021`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-053` | No existe una revisión separada del contenido publicado                              | Crítica   | `ADR-WEB-003`     | `ADR-WEB-004`, `WEB-DB-003`, `WEB-PUB-008`                                                              | FASE 6 — Publicación y versiones — `WEB-PUB-008`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-054` | Crear contenido publica por defecto                                                  | Alta      | `WEB-PRD-003`     | `WEB-PUB-001`, `WEB-MIG-022`                                                                            | FASE 13 — Migración y corte — `WEB-MIG-022`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-055` | La galería está limitada a tres slots rígidos                                        | Alta      | `WEB-ARC-002`     | `WEB-MED-002`, `WEB-BLD-003`                                                                            | FASE 9 — Biblioteca multimedia — `WEB-MED-002`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-056` | Existen tres galerías publicadas sin medios para un restaurante placeholder          | Alta      | `WEB-MIG-022`     | `WEB-QA-021`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-057` | El bucket `website-media` es privado, pero el uploader devuelve URL pública          | Crítica   | `WEB-MED-014`     | `WEB-SEC-017`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-058` | `website-media` no contiene objetos y no existe biblioteca multimedia                | Alta      | `WEB-MED-002`     | `WEB-MED-003`, `WEB-MIG-014`                                                                            | FASE 13 — Migración y corte — `WEB-MIG-014`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-059` | Los medios se guardan como URL sin asset, metadata ni uso                            | Crítica   | `ADR-WEB-008`     | `WEB-DB-006`, `WEB-DB-007`                                                                              | FASE 4 — Base de datos y migraciones — `WEB-DB-006`, `WEB-DB-007`                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-060` | Restaurantes se importan sin relación ni sincronización posterior                    | Alta      | `WEB-ARC-007`     | `WEB-MIG-005`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-005`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-061` | Los tres restaurantes reales carecen de detalle administrado                         | Alta      | `WEB-PAG-012`     | `WEB-PAG-013`, `WEB-PAG-014`, `WEB-PAG-015`, `WEB-MIG-006`                                              | FASE 13 — Migración y corte — `WEB-MIG-006`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-062` | Vacantes, eventos y servicios solo contienen placeholders publicados                 | Crítica   | `WEB-MIG-015`     | `WEB-MIG-022`, `WEB-QA-021`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-063` | Eventos se administran para una ruta que no existe funcionalmente                    | Crítica   | `WEB-PAG-040`     | `WEB-MIG-009`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-009`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-064` | Apps no tienen medios ni destinos válidos                                            | Alta      | `WEB-PAG-031`     | `WEB-PAG-032`, `WEB-PAG-033`, `WEB-MIG-015`                                                             | FASE 13 — Migración y corte — `WEB-MIG-015`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-065` | El modelo genérico no valida campos por categoría                                    | Alta      | `WEB-ARC-003`     | `WEB-RND-002`                                                                                           | FASE 5 — Renderer — `WEB-RND-002`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-066` | No existe permiso web granular; edición usa cliente administrativo                   | Crítica   | `WEB-PRD-002`     | `WEB-SEC-001`, `WEB-SEC-018`                                                                            | FASE 14 — Seguridad — `WEB-SEC-001`, `WEB-SEC-018`                                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-067` | La carga de medios tiene permisos distintos al editor                                | Alta      | `WEB-PRD-002`     | `WEB-MED-013`                                                                                           | FASE 9 — Biblioteca multimedia — `WEB-MED-013`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-068` | La lectura pública depende potencialmente de `service_role`                          | Crítica   | `WEB-DB-016`      | `WEB-SEC-017`, `WEB-DB-020`                                                                             | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-069` | Sin `service_role`, las políticas actuales pueden activar fallbacks                  | Crítica   | `WEB-SEC-002`     | `WEB-SEC-017`, `ADR-WEB-011`, `WEB-DB-020`                                                              | FASE 14 — Seguridad — `WEB-SEC-002`, `WEB-SEC-017`                                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-070` | No existe trazabilidad de autor, editor o publicador                                 | Alta      | `WEB-DB-003`      | `WEB-DB-004`, `WEB-DB-012`                                                                              | FASE 4 — Base de datos y migraciones — `WEB-DB-003`, `WEB-DB-004`, `WEB-DB-012`                                                                         | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-071` | VISO afirma que los cambios se reflejan inmediatamente                               | Alta      | `ADR-WEB-004`     | `WEB-PUB-002`, `WEB-PUB-008`                                                                            | FASE 6 — Publicación y versiones — `WEB-PUB-002`, `WEB-PUB-008`                                                                                         | `ASIGNADA — ABIERTA` | `WEB-AUD-004 INVENTARIO CANONICO CONTENIDO ADMINISTRABLE`            |
| `WEB-GAP-072` | No existe `PageRenderer`                                                             | Crítica   | `WEB-RND-005`     | `WEB-RND-004`                                                                                           | FASE 5 — Renderer — `WEB-RND-005`, `WEB-RND-004`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-073` | No existe `Section Registry`                                                         | Crítica   | `WEB-RND-003`     | —                                                                                                       | FASE 5 — Renderer — `WEB-RND-003`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-074` | No existe paquete compartido de contratos                                            | Crítica   | `WEB-ARC-008`     | —                                                                                                       | FASE 3 — Arquitectura y ADR — `WEB-ARC-008`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-075` | No existe versionado ni migración de schemas                                         | Crítica   | `WEB-ARC-009`     | `WEB-RND-002`                                                                                           | FASE 5 — Renderer — `WEB-RND-002`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-076` | Header y footer se repiten por ruta                                                  | Alta      | `WEB-GLB-003`     | `WEB-GLB-005`                                                                                           | FASE 10 — Configuración global — `WEB-GLB-003`, `WEB-GLB-005`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-077` | Componentes visuales dependen de modelos legacy                                      | Alta      | `WEB-MIG-020`     | `WEB-MIG-023`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-020`, `WEB-MIG-023`                                                                                              | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-078` | `globals.css` concentra estilos de componentes                                       | Alta      | `WEB-GLB-001`     | `WEB-MIG-023`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-023`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-079` | No existe registry de resolvers                                                      | Crítica   | `WEB-RND-018`     | —                                                                                                       | FASE 5 — Renderer — `WEB-RND-018`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-080` | No existe contrato único de enlace                                                   | Alta      | `WEB-RND-019`     | —                                                                                                       | FASE 5 — Renderer — `WEB-RND-019`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-081` | No existe validación automatizada del registry                                       | Alta      | `WEB-QA-025`      | —                                                                                                       | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-025`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-082` | No existe adaptador legacy formal                                                    | Alta      | `WEB-MIG-024`     | —                                                                                                       | FASE 13 — Migración y corte — `WEB-MIG-024`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-083` | No existe ciclo de vida de componentes aplicado                                      | Media     | `WEB-ARC-009`     | `WEB-MIG-020`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-020`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-084` | No existen pruebas de componentes                                                    | Crítica   | `WEB-QA-001`      | `WEB-QA-002`, `WEB-QA-025`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-001`, `WEB-QA-002`, `WEB-QA-025`                                                               | `ASIGNADA — ABIERTA` | `WEB-ARC-005 BORRADOR REGULARIZADO POR WEB-AUD-012`                  |
| `WEB-GAP-085` | Acceso general a VISO permite administrar el CMS                                     | Crítica   | `WEB-PRD-002`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-086` | Acciones CMS usan `service_role` sin permiso editorial específico                    | Crítica   | `WEB-SEC-018`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-087` | Dispositivos compartidos no están excluidos del CMS                                  | Crítica   | `WEB-PRD-002`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-088` | Permisos de medios dependen de roles hardcodeados                                    | Alta      | `WEB-PRD-002`     | `WEB-MED-013`, `WEB-SEC-018`                                                                            | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-089` | Contenido nuevo se publica por defecto                                               | Crítica   | `WEB-PUB-001`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-090` | Guardado modifica directamente producción                                            | Crítica   | `ADR-WEB-004`     | `WEB-PUB-002`, `WEB-PUB-008`                                                                            | FASE 6 — Publicación y versiones — `WEB-PUB-002`, `WEB-PUB-008`                                                                                         | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-091` | Eliminación permanente no tiene confirmación ni rollback                             | Crítica   | `WEB-SEC-018`     | `WEB-PUB-011`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-092` | Eliminar items deja bloques y medios huérfanos                                       | Alta      | `WEB-MIG-022`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-093` | Cambio de slug no migra bloques ni crea redirección                                  | Crítica   | `WEB-PRD-016`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-094` | Cambio libre de categoría puede corromper semántica                                  | Alta      | `WEB-RND-002`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-095` | Claves técnicas de bloques son editables                                             | Crítica   | `ADR-WEB-002`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-096` | No existe validación central por schema                                              | Crítica   | `WEB-RND-002`     | `WEB-EDT-007`                                                                                           | FASE 7 — Fundamento del editor — `WEB-EDT-007`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-097` | Completitud es inconsistente y no bloquea publicación                                | Alta      | `WEB-PRD-013`     | `WEB-PUB-005`                                                                                           | FASE 6 — Publicación y versiones — `WEB-PUB-005`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-098` | Guía recomienda CTA `#`                                                              | Alta      | `WEB-QA-021`      | `WEB-SEC-018`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-099` | Errores de Supabase se exponen en URL                                                | Alta      | `WEB-EDT-013`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-100` | Errores destruyen el estado del formulario                                           | Alta      | `WEB-EDT-011`     | `WEB-EDT-013`                                                                                           | FASE 7 — Fundamento del editor — `WEB-EDT-011`, `WEB-EDT-013`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-101` | Guardado de restaurante no es transaccional                                          | Crítica   | `WEB-PUB-015`     | —                                                                                                       | FASE 6 — Publicación y versiones — `WEB-PUB-015`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-102` | No existe invalidación explícita de la web pública                                   | Alta      | `WEB-RND-015`     | `WEB-PUB-008`                                                                                           | FASE 6 — Publicación y versiones — `WEB-PUB-008`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-103` | Acciones rápidas de empleo, evento y servicio abren restaurante                      | Alta      | `WEB-EDT-003`     | `WEB-EDT-007`, `WEB-SEC-018`, `WEB-QA-023`                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-023`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-104` | Conteos del dashboard son incorrectos al filtrar                                     | Media     | `WEB-EDT-003`     | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-023`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-105` | CMS afirma que Eventos está activo cuando la ruta redirige                           | Alta      | `WEB-PAG-040`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-106` | No existe preview real compartido con la web                                         | Crítica   | `WEB-EDT-006`     | `WEB-PUB-007`                                                                                           | FASE 7 — Fundamento del editor — `WEB-EDT-006`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-107` | Vista de tarjeta puede divergir del componente público                               | Alta      | `WEB-EDT-006`     | `WEB-EDT-010`                                                                                           | FASE 7 — Fundamento del editor — `WEB-EDT-006`, `WEB-EDT-010`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-108` | No existe protección de cambios sin guardar                                          | Alta      | `WEB-EDT-012`     | —                                                                                                       | FASE 7 — Fundamento del editor — `WEB-EDT-012`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-109` | Formularios no tienen estado pending ni doble envío                                  | Alta      | `WEB-EDT-011`     | —                                                                                                       | FASE 7 — Fundamento del editor — `WEB-EDT-011`                                                                                                          | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-110` | Medios no tienen preview, metadata ni progreso                                       | Alta      | `WEB-MED-002`     | `WEB-MED-003`, `WEB-MED-004`, `WEB-MED-005`, `WEB-MED-006`, `WEB-MED-007`, `WEB-MED-008`, `WEB-MED-009` | FASE 9 — Biblioteca multimedia — `WEB-MED-002`, `WEB-MED-003`, `WEB-MED-004`, `WEB-MED-005`, `WEB-MED-006`, `WEB-MED-007`, `WEB-MED-008`, `WEB-MED-009` | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-111` | Subidas previas al guardado producen huérfanos                                       | Alta      | `WEB-MED-012`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-112` | El uploader devuelve URL pública para bucket privado                                 | Crítica   | `WEB-MED-014`     | `WEB-SEC-017`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-113` | Allowlist MIME no es estricta                                                        | Alta      | `WEB-MED-004`     | `WEB-SEC-008`, `WEB-SEC-018`                                                                            | FASE 14 — Seguridad — `WEB-SEC-008`, `WEB-SEC-018`                                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-114` | SVG se acepta sin política de sanitización                                           | Alta      | `WEB-MED-004`     | `WEB-SEC-008`, `WEB-SEC-018`                                                                            | FASE 14 — Seguridad — `WEB-SEC-008`, `WEB-SEC-018`                                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-115` | Importación publica todo sin selección ni confirmación                               | Alta      | `WEB-ARC-007`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-116` | Importación no conserva relación con Negocios                                        | Alta      | `WEB-ARC-007`     | —                                                                                                       | FASE 3 — Arquitectura y ADR — `WEB-ARC-007`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-117` | `page_slug` oculto no se verifica contra restaurante                                 | Alta      | `WEB-RND-002`     | `WEB-PUB-005`, `WEB-SEC-018`                                                                            | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-118` | Galería crea slots vacíos visibles por defecto                                       | Alta      | `WEB-BLD-005`     | `WEB-SEC-018`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-018`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-119` | No existe historial de acciones administrativas                                      | Crítica   | `WEB-DB-012`      | `WEB-PUB-014`                                                                                           | FASE 6 — Publicación y versiones — `WEB-PUB-014`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-120` | Interfaz presenta mojibake y microcopia inconsistente                                | Media     | `WEB-QA-023`      | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-023`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-005 AUDITORIA CANONICA VISO WEBSITE CMS`                    |
| `WEB-GAP-121` | Las tablas legacy no representan páginas, revisiones ni publicaciones                | Crítica   | `WEB-DB-002`      | `WEB-DB-003`, `WEB-DB-004`                                                                              | FASE 4 — Base de datos y migraciones — `WEB-DB-002`, `WEB-DB-003`, `WEB-DB-004`                                                                         | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-122` | Las 16 filas actuales están publicadas sin proceso editorial                         | Crítica   | `WEB-MIG-022`     | `WEB-PUB-001`, `WEB-PUB-005`                                                                            | FASE 13 — Migración y corte — `WEB-MIG-022`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-123` | La web pública depende potencialmente de `service_role`                              | Crítica   | `WEB-SEC-017`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-124` | No existe canal público de privilegio mínimo                                         | Crítica   | `WEB-DB-020`      | `WEB-SEC-019`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-125` | `authenticated` conserva grants SQL innecesarios                                     | Alta      | `WEB-SEC-019`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-126` | No existe validación de URL, CTA ni slug en base                                     | Alta      | `WEB-RND-002`     | `WEB-PUB-005`, `WEB-SEC-007`                                                                            | FASE 14 — Seguridad — `WEB-SEC-007`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-127` | No existe validación temporal de eventos                                             | Alta      | `WEB-RND-002`     | `WEB-PUB-005`, `WEB-SEC-007`                                                                            | FASE 14 — Seguridad — `WEB-SEC-007`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-128` | No existen reglas por categoría en `website_items`                                   | Alta      | `WEB-ARC-003`     | `WEB-RND-002`                                                                                           | FASE 5 — Renderer — `WEB-RND-002`                                                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-129` | No existen foreign keys del dominio web                                              | Crítica   | `WEB-DB-002`      | `WEB-DB-003`, `WEB-DB-004`, `WEB-DB-005`, `WEB-DB-006`, `WEB-DB-007`, `WEB-ARC-007`                     | FASE 4 — Base de datos y migraciones — `WEB-DB-002`, `WEB-DB-003`, `WEB-DB-004`, `WEB-DB-005`, `WEB-DB-006`, `WEB-DB-007`                               | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-130` | Los medios se relacionan mediante URL libre                                          | Crítica   | `WEB-DB-006`      | `WEB-DB-007`                                                                                            | FASE 4 — Base de datos y migraciones — `WEB-DB-006`, `WEB-DB-007`                                                                                       | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-131` | El bucket privado se consume como si fuera público                                   | Crítica   | `WEB-MED-014`     | `WEB-SEC-017`                                                                                           | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-132` | `website-media` no contiene objetos ni biblioteca operativa                          | Alta      | `WEB-MED-002`     | `WEB-MIG-014`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-014`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-133` | SVG está habilitado sin política de sanitización                                     | Alta      | `WEB-MED-004`     | `WEB-SEC-019`, `WEB-SEC-008`                                                                            | FASE 14 — Seguridad — `WEB-SEC-019`, `WEB-SEC-008`                                                                                                      | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-134` | Los helpers de autorización son ejecutables por `PUBLIC` y `anon`                    | Alta      | `WEB-SEC-019`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-135` | `is_global_manager()` es SECURITY DEFINER sin `search_path` fijado                   | Crítica   | `WEB-SEC-019`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-136` | Las políticas de Storage dependen de roles legacy                                    | Alta      | `WEB-PRD-002`     | `WEB-MED-013`, `WEB-SEC-019`                                                                            | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-137` | No existe auditoría de cambios en tablas legacy                                      | Crítica   | `WEB-DB-012`      | `WEB-PUB-014`                                                                                           | FASE 6 — Publicación y versiones — `WEB-PUB-014`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-138` | No existe guardado transaccional de entidad y bloques                                | Crítica   | `WEB-PUB-015`     | —                                                                                                       | FASE 6 — Publicación y versiones — `WEB-PUB-015`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-139` | El cambio de slug no tiene integridad ni redirección                                 | Crítica   | `WEB-PRD-016`     | `WEB-GLB-010`, `WEB-QA-018`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-140` | No existe una función o vista de publicación vigente                                 | Crítica   | `WEB-DB-020`      | —                                                                                                       | FASE 4 — Base de datos y migraciones — `WEB-DB-020`                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-141` | Las migraciones antiguas dependen de grants implícitos                               | Alta      | `WEB-SEC-019`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-019`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-142` | Los Advisors muestran referencias a políticas históricas no presentes                | Media     | `WEB-QA-024`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-024`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-143` | Los índices no tienen carga suficiente para validarse                                | Media     | `WEB-QA-024`      | `WEB-PERF-006`                                                                                          | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-024`, `WEB-PERF-006`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-144` | No existen pruebas automáticas por rol y operación                                   | Crítica   | `WEB-QA-024`      | —                                                                                                       | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-024`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-145` | La configuración de esquemas expuestos no quedó verificable desde SQL                | Alta      | `WEB-SEC-019`     | `WEB-QA-024`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-024`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-006 AUDITORIA CANONICA SUPABASE WEB`                        |
| `WEB-GAP-146` | Produccion usa datos reales mediante lectura privilegiada                            | Crítica   | `WEB-SEC-017`     | —                                                                                                       | FASE 14 — Seguridad — `WEB-SEC-017`                                                                                                                     | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-147` | `.env.example` no documenta la dependencia legacy de `service_role`                  | Alta      | `WEB-SEC-012`     | `WEB-OPS-002`                                                                                           | FASE 16 — Despliegue y operación — `WEB-OPS-002`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-148` | No existe evidencia versionada de variables efectivas por ambiente                   | Alta      | `WEB-SEC-012`     | `WEB-OPS-001`, `WEB-OPS-002`                                                                            | FASE 16 — Despliegue y operación — `WEB-OPS-001`, `WEB-OPS-002`                                                                                         | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-149` | Inicio tiene hero sin medios validos                                                 | Alta      | `WEB-PAG-003`     | `WEB-MIG-014`, `WEB-MIG-015`, `WEB-QA-022`                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-150` | Inicio publica caracteristicas de restaurante inventadas                             | Crítica   | `WEB-ARC-003`     | `WEB-MIG-015`, `WEB-QA-021`, `WEB-QA-022`                                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-151` | Empleos publica una vacante ficticia                                                 | Crítica   | `WEB-PAG-020`     | `WEB-PAG-021`, `WEB-PAG-022`, `WEB-PAG-023`, `WEB-MIG-015`, `WEB-MIG-022`, `WEB-QA-021`, `WEB-QA-022`   | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-152` | Servicios publica un servicio placeholder                                            | Crítica   | `WEB-PAG-050`     | `WEB-PAG-051`, `WEB-MIG-015`, `WEB-MIG-022`, `WEB-QA-021`, `WEB-QA-022`                                 | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-153` | Apps reales tienen CTA sin destino y acciones autorreferentes                        | Alta      | `WEB-PAG-031`     | `WEB-PAG-032`, `WEB-PAG-033`, `WEB-QA-018`, `WEB-MIG-015`, `WEB-QA-022`                                 | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-154` | Eventos no tiene pagina, pero conserva datos, CTA y sitemap                          | Crítica   | `WEB-PAG-040`     | `WEB-PAG-041`, `WEB-PAG-042`, `WEB-GLB-009`, `WEB-MIG-009`, `WEB-QA-019`, `WEB-QA-022`                  | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-019`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-155` | Los detalles de restaurantes reales muestran plantilla provisional                   | Crítica   | `WEB-PAG-012`     | `WEB-PAG-013`, `WEB-PAG-014`, `WEB-PAG-015`, `WEB-MIG-006`, `WEB-MIG-015`, `WEB-QA-021`, `WEB-QA-022`   | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-156` | Reservas sin URL valida se envian a `/eventos`                                       | Alta      | `WEB-PAG-012`     | `WEB-PAG-042`, `WEB-QA-018`, `WEB-QA-022`                                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-018`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-157` | Saudo no tiene medio publico                                                         | Alta      | `WEB-PAG-014`     | `WEB-MIG-014`, `WEB-MIG-015`, `WEB-QA-022`                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-158` | Restaurantes reales no tienen horarios, body, galeria o CTA real                     | Alta      | `WEB-PAG-012`     | `WEB-PAG-013`, `WEB-PAG-014`, `WEB-PAG-015`, `WEB-MIG-006`, `WEB-MIG-015`, `WEB-QA-022`                 | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-159` | Footer publica redes sociales genericas                                              | Alta      | `WEB-GLB-006`     | `WEB-MIG-015`, `WEB-QA-021`, `WEB-QA-022`                                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-160` | Newsletter visible no ejecuta ninguna accion                                         | Alta      | `WEB-FRM-011`     | `WEB-GLB-005`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-161` | Copyright sigue fijo en 2026                                                         | Media     | `WEB-GLB-005`     | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-162` | Produccion mezcla ingles, espanol sin tildes e instrucciones                         | Alta      | `WEB-MIG-021`     | `WEB-QA-021`, `WEB-QA-023`, `WEB-QA-022`                                                                | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-023`, `WEB-QA-022`                                                               | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-163` | No existe politica operativa para secciones sin medios                               | Alta      | `ADR-WEB-011`     | `WEB-RND-006`, `WEB-MED-005`, `WEB-QA-022`                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-164` | Produccion mezcla cuatro fuentes sin ownership unico                                 | Crítica   | `WEB-ARC-006`     | `WEB-MIG-021`                                                                                           | FASE 13 — Migración y corte — `WEB-MIG-021`                                                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-165` | No existe smoke test automatizado sobre produccion                                   | Crítica   | `WEB-QA-022`      | `WEB-OPS-004`                                                                                           | FASE 16 — Despliegue y operación — `WEB-OPS-004`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-166` | No se ha confirmado host canonico `www` frente a dominio raiz                        | Alta      | `WEB-GLB-007`     | `WEB-SEC-012`, `WEB-OPS-002`, `WEB-QA-019`, `WEB-QA-022`                                                | FASE 16 — Despliegue y operación — `WEB-OPS-002`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-167` | Filas publicadas sustituyen un proceso editorial inexistente                         | Crítica   | `WEB-PUB-001`     | `WEB-PUB-005`, `WEB-PUB-008`, `WEB-MIG-022`, `WEB-QA-022`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-007 AUDITORIA CANONICA CONTENIDO PRODUCCION`                |
| `WEB-GAP-168` | Home presenta una gran superficie vacía en los tres viewports                        | Crítica   | `WEB-PAG-001`     | `WEB-PAG-002`, `WEB-PAG-003`, `WEB-MIG-021`, `WEB-QA-022`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-169` | No existe una línea visual coherente entre secciones públicas                        | Alta      | `WEB-RND-011`     | `WEB-PAG-001`, `WEB-PAG-010`, `WEB-PAG-020`, `WEB-PAG-030`, `WEB-PAG-040`, `WEB-PAG-050`, `WEB-QA-006`  | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-006`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-170` | Los estados vacíos se expresan como placeholders técnicos                            | Crítica   | `WEB-QA-021`      | `WEB-QA-022`, `WEB-EDT-007`, `WEB-QA-023`                                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`, `WEB-QA-023`                                                               | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-171` | El footer domina excesivamente la composición móvil                                  | Alta      | `WEB-GLB-005`     | `WEB-GLB-006`, `WEB-PRD-008`, `WEB-RND-012`, `WEB-QA-010`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-010`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-172` | El menú móvil carece de jerarquía específica                                         | Alta      | `WEB-GLB-003`     | `WEB-GLB-004`, `WEB-PRD-008`, `WEB-RND-012`, `WEB-QA-010`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-010`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-173` | La 404 usa la pantalla genérica no localizada                                        | Media     | `WEB-PAG-070`     | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-174` | Detalles de restaurantes tienen excesivo vacío vertical                              | Alta      | `WEB-PAG-012`     | `WEB-PAG-013`, `WEB-PAG-014`, `WEB-PAG-015`, `WEB-PRD-008`, `WEB-RND-012`, `WEB-QA-010`                 | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-010`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-175` | Logos operativos sustituyen fotografía editorial                                     | Alta      | `WEB-MED-002`     | `WEB-MED-005`, `WEB-MED-008`, `WEB-ARC-007`, `WEB-MIG-014`, `WEB-MIG-015`                               | FASE 13 — Migración y corte — `WEB-MIG-014`, `WEB-MIG-015`                                                                                              | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-176` | No existe página visual propia para Eventos                                          | Alta      | `WEB-PAG-040`     | `WEB-PRD-016`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-177` | Tablet hereda composiciones sin adaptación específica                                | Media     | `WEB-PRD-008`     | `WEB-RND-012`, `WEB-EDT-009`, `WEB-BLD-010`, `WEB-QA-010`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-010`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-009 LINEA BASE VISUAL PRODUCCION`                           |
| `WEB-GAP-178` | La mayoría de rutas no produce Lighthouse completo por `NO_FCP` o `NO_LCP`           | Crítica   | `WEB-PERF-007`    | `WEB-QA-014`, `WEB-QA-022`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-007`, `WEB-QA-014`, `WEB-QA-022`                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-179` | Restaurantes móvil supera el LCP objetivo de 2,5 s                                   | Alta      | `WEB-PERF-001`    | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-001`, `WEB-QA-022`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-180` | No existe evidencia verificable de LCP, INP y CLS de campo                           | Crítica   | `WEB-PERF-008`    | `WEB-OPS-006`                                                                                           | FASE 16 — Despliegue y operación — `WEB-OPS-006`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-181` | No existen presupuestos canónicos de bytes, requests y main thread                   | Alta      | `WEB-PERF-003`    | `WEB-PERF-004`, `WEB-PERF-005`, `WEB-PERF-006`, `WEB-PERF-007`                                          | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-003`, `WEB-PERF-004`, `WEB-PERF-005`, `WEB-PERF-006`, `WEB-PERF-007`                         | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-182` | Detalles de restaurante se sirven sin caché pública                                  | Alta      | `WEB-PERF-006`    | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-006`, `WEB-QA-022`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-183` | Logos de Supabase tienen TTL corto para assets versionados                           | Media     | `WEB-PERF-006`    | `WEB-MED-014`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-006`, `WEB-QA-022`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-184` | No hay videos reales para validar peso, poster y lazy loading                        | Alta      | `WEB-PERF-004`    | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-004`, `WEB-QA-022`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-185` | El peso bajo de imágenes no representa el diseño objetivo                            | Alta      | `WEB-PERF-003`    | `WEB-MED-004`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-PERF-003`, `WEB-QA-022`                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-186` | Eventos agrega una redirección antes de servir Restaurantes                          | Media     | `WEB-PRD-016`     | `WEB-GLB-010`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-187` | Animaciones o estados iniciales pueden ocultar todo el contenido durante la medición | Crítica   | `WEB-QA-014`      | `WEB-PERF-007`, `WEB-QA-022`                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-014`, `WEB-PERF-007`, `WEB-QA-022`                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-010 LINEA BASE RENDIMIENTO`                                 |
| `WEB-GAP-188` | El menú cerrado contiene controles enfocables bajo `aria-hidden=true`                | Crítica   | `WEB-QA-011`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-189` | El menú abierto no contiene el foco y permite tabular al fondo                       | Crítica   | `WEB-QA-011`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-190` | Cerrar con Escape no devuelve el foco al disparador                                  | Alta      | `WEB-QA-011`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-191` | El fondo no se vuelve `inert` mientras el menú está abierto                          | Alta      | `WEB-QA-011`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-192` | El campo de newsletter no muestra foco visible                                       | Alta      | `WEB-QA-011`      | `WEB-FRM-011`, `WEB-QA-023`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-193` | No existe skip link al contenido principal                                           | Alta      | `WEB-QA-011`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-011`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-194` | La Home no contiene `h1`                                                             | Alta      | `WEB-PAG-002`     | `WEB-PAG-003`, `WEB-QA-016`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-016`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-195` | Empleos salta de `h1` a `h3`                                                         | Media     | `WEB-PAG-020`     | `WEB-PAG-021`, `WEB-QA-016`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-016`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-196` | Ecosistema salta de `h1` a `h3`                                                      | Media     | `WEB-PAG-030`     | `WEB-PAG-031`, `WEB-PAG-032`, `WEB-PAG-033`, `WEB-QA-016`                                               | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-016`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-197` | La 404 carece de `main` y deja contenido fuera de landmarks                          | Alta      | `WEB-PAG-070`     | `WEB-QA-012`, `WEB-QA-022`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-012`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-198` | La 404 está en inglés y no ofrece recuperación                                       | Alta      | `WEB-PAG-070`     | `WEB-QA-022`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-022`                                                                                           | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-199` | Home mantiene animaciones iniciales bajo reduced motion                              | Alta      | `WEB-QA-014`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-014`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-200` | No existen pruebas manuales con lectores de pantalla reales                          | Alta      | `WEB-QA-012`      | `WEB-QA-023`                                                                                            | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-012`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-201` | El alt actual no representa la futura biblioteca multimedia                          | Media     | `WEB-QA-015`      | `WEB-MED-005`, `WEB-QA-023`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-015`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-202` | Placeholders y features ficticias son anunciados como contenido real                 | Crítica   | `WEB-QA-021`      | `WEB-MIG-022`, `WEB-QA-022`                                                                             | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-021`, `WEB-QA-022`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-203` | Newsletter carece de formulario y estados accesibles                                 | Alta      | `WEB-FRM-011`     | `WEB-QA-017`, `WEB-QA-023`                                                                              | FASE 15 — Calidad, accesibilidad y rendimiento — `WEB-QA-017`, `WEB-QA-023`                                                                             | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |
| `WEB-GAP-204` | No existe presupuesto ni puerta automatizada de accesibilidad por publicación        | Alta      | `WEB-QA-023`      | `WEB-OPS-004`                                                                                           | FASE 16 — Despliegue y operación — `WEB-OPS-004`                                                                                                        | `ASIGNADA — ABIERTA` | `WEB-AUD-011 LINEA BASE ACCESIBILIDAD`                               |

#### 7. Reglas de ejecución y cierre

##### 7.1 Al iniciar una tarea

La tarea deberá listar explícitamente los `WEB-GAP-*` que asume.

##### 7.2 Al aprobar una definición

Las brechas asociadas pasan como máximo a `DEFINIDA`; no a `CERRADA`.

##### 7.3 Al implementar

La evidencia deberá incluir, según corresponda:

- commit o PR;
- migración;
- prueba automatizada;
- captura;
- resultado de Lighthouse, axe, RLS o smoke test;
- enlace a publicación;
- rollback o prueba de restauración.

##### 7.4 Al cerrar

Una brecha solo se marca `CERRADA` cuando:

1. la tarea propietaria está aprobada;
2. las tareas vinculadas necesarias están completas;
3. la tarea de cierre de la fase indicada pasó;
4. la evidencia está versionada;
5. no queda fallback, placeholder o deuda narrativa equivalente.

#### 8. Validación mecánica de esta consolidación

```text
Brechas esperadas:                 204
Brechas encontradas:               204
Secuencia WEB-GAP-001..204:        CONTINUA
IDs duplicados:                    0
Brechas sin propietaria:           0
Tareas desconocidas:               0
Referencias con comodín:           0
Rangos no expandidos:              0
Conflicto WEB-QA-022:              RESUELTO
WEB-GAP-173 / 404:                 CORREGIDA
WEB-ARC-005 aprobado por herencia: NO
```

#### 9. Criterios de aprobación cumplidos

- [x] la continuidad completa `WEB-GAP-001` a `WEB-GAP-204`;
- [x] la recuperación controlada de `WEB-GAP-072` a `WEB-GAP-084`;
- [x] la conservación de `WEB-ARC-005` como no aprobada;
- [x] la definición canónica de `WEB-QA-022` como smoke test de producción;
- [x] la creación de `WEB-QA-025` para el Section Registry;
- [x] la corrección de `WEB-GAP-173` hacia `WEB-PAG-070`;
- [x] la eliminación de comodines y rangos ambiguos;
- [x] la materialización de las tareas derivadas de la sección 4;
- [x] la matriz de 204 brechas con propietaria, vínculos y momento de cierre;
- [x] la regla de no cerrar brechas por mera aprobación documental;
- [x] la ausencia de cambios en código, Supabase y producción;

#### 10. Estado de cierre vigente

```text
WEB-AUD-012 — APROBADA
```

Continuidad vigente:

```text
[x] WEB-AUD-012 — Consolidar brechas
FASE 1 — CERRADA DOCUMENTALMENTE
[ ] WEB-PRD-001 — Definir perfiles de usuario
```

La Fase 1 queda cerrada en sentido documental, no significa que las 204 brechas estén implementadas o cerradas. Todas permanecen `ASIGNADA — ABIERTA` hasta su momento de resolución.

#### 11. Registro de cambios

| Versión        | Fecha      | Cambio                                           | Estado            |
| -------------- | ---------- | ------------------------------------------------ | ----------------- |
| `2026-07-23.1` | 2026-07-23 | Consolidación de `WEB-GAP-001` a `WEB-GAP-204`   | Aprobada |
| `2026-07-23.2` | 2026-07-23 | Regularización de IDs 072–084 y conflicto QA-022 | Aprobada |


### Puerta de aprobación Fase 1 — CERRADA DOCUMENTALMENTE

- [x] Estado real del repositorio auditado.
- [x] VISO Website CMS auditado.
- [x] Supabase auditado.
- [x] Producción auditada.
- [x] Matriz editable vs hardcodeado creada.
- [x] Línea base visual creada.
- [x] Línea base de rendimiento creada.
- [x] Línea base de accesibilidad creada.
- [x] `WEB-GAP-001` a `WEB-GAP-204` consolidadas.
- [x] Todas las brechas tienen tarea propietaria y momento de cierre.

**Siguiente fase:** FASE 2 — Definición funcional.

---

## FASE 2 — DEFINICIÓN FUNCIONAL DE VISO WEB STUDIO

### Objetivo

Definir exactamente qué podrá hacer un usuario y qué continuará controlado por desarrollo.

---

### [ ] **WEB-PRD-001 — Definir perfiles de usuario**
  - Administrador del sitio.
  - Editor.
  - Publicador.
  - Revisor.
  - Usuario de solo lectura.

### [ ] **WEB-PRD-002 — Definir matriz de permisos**
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

### [ ] **WEB-PRD-003 — Definir ciclo de vida de página**

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

### [ ] **WEB-PRD-004 — Definir ciclo de vida de revisión**
  - Borrador mutable.
  - Revisión validada.
  - Revisión publicada inmutable.
  - Revisión restaurada.

### [ ] **WEB-PRD-005 — Definir acciones sobre páginas**
  - Crear.
  - Duplicar.
  - Renombrar.
  - Cambiar URL.
  - Ocultar.
  - Archivar.
  - Eliminar.
  - Restaurar.

### [ ] **WEB-PRD-006 — Definir acciones sobre secciones**
  - Agregar.
  - Seleccionar.
  - Editar.
  - Duplicar.
  - Reordenar.
  - Ocultar.
  - Eliminar.
  - Copiar.
  - Pegar.

### [ ] **WEB-PRD-007 — Definir personalización permitida**
  - Variante.
  - Tema.
  - Alineación.
  - Fondo.
  - Contraste.
  - Anchura.
  - Espaciado.
  - Comportamiento responsive.
  - Animación permitida.

### [ ] **WEB-PRD-008 — Definir comportamiento responsive**
  - Desktop.
  - Tablet.
  - Móvil.
  - Orden alternativo.
  - Ocultamiento por dispositivo.
  - Alineación móvil.
  - Recorte y foco de imágenes.

### [ ] **WEB-PRD-009 — Definir modelo de navegación**
  - Header.
  - Menú principal.
  - Menú móvil.
  - Footer.
  - Enlaces externos.
  - Dropdowns.
  - Orden.

### [ ] **WEB-PRD-010 — Definir modelo de plantillas**
  - Inicio.
  - Página editorial.
  - Listado.
  - Detalle de restaurante.
  - Empleos.
  - Eventos.
  - Contacto.
  - Página legal.

### [ ] **WEB-PRD-011 — Diseñar wireframe del editor**
  - Panel izquierdo.
  - Preview central.
  - Panel derecho.
  - Barra superior.
  - Estados de guardado.
  - Selector responsive.

### [ ] **WEB-PRD-012 — Diseñar flujo de publicación**
  - Guardar.
  - Validar.
  - Previsualizar.
  - Revisar cambios.
  - Publicar.
  - Confirmar.
  - Revertir.

### [ ] **WEB-PRD-013 — Definir criterios de completitud**
  - Campos obligatorios.
  - Medios obligatorios.
  - Alt text.
  - SEO.
  - Enlaces válidos.
  - Contraste.
  - Publicación.

### [ ] **WEB-PRD-014 — Aprobar alcance MVP**
  - Delimitar lo obligatorio para la primera versión operativa.
  - Asignar explícitamente todo lo aplazado.

### [ ] **WEB-PRD-015 — Definir taxonomía canónica de rutas públicas**
  - URL canónica de Nosotros y Ecosistema.
  - Rutas de aplicaciones, eventos y servicios.
  - Aliases, slugs reservados e idioma.
  - Reglas para rutas dinámicas.

### [ ] **WEB-PRD-016 — Definir política canónica de redirecciones**
  - Redirecciones permanentes y temporales.
  - Cambios de slug y rutas eliminadas.
  - Preservación SEO y prevención de ciclos.
  - Trazabilidad y ownership.

### Puerta de aprobación Fase 2

No se inicia diseño de base de datos hasta aprobar comportamiento, roles y alcance.

---

## FASE 3 — ARQUITECTURA Y DECISIONES CANÓNICAS

### Objetivo

Aprobar formalmente las decisiones estructurales antes de escribir migraciones.

---

### [ ] **ADR-WEB-001 — Aprobar modelo híbrido**
  - Revisiones JSON para páginas.
  - Entidades normalizadas para datos empresariales.

### [ ] **ADR-WEB-002 — Aprobar registro de secciones**
  - Solo componentes registrados.
  - Esquema validado por tipo.
  - Variantes controladas.

### [ ] **ADR-WEB-003 — Aprobar revisiones inmutables**
  - Las versiones publicadas no se modifican.
  - Restaurar crea una nueva publicación.

### [ ] **ADR-WEB-004 — Aprobar separación guardar/publicar**
  - Guardar no afecta producción.
  - Publicar es una acción explícita.

### [ ] **ADR-WEB-005 — Aprobar estrategia de preview**
  - Token temporal.
  - Ruta privada.
  - `noindex`.
  - Sin exposición pública.

### [ ] **ADR-WEB-006 — Aprobar migración progresiva**
  - Adaptador legacy.
  - Corte página por página.
  - Sin interrupción del sitio.

### [ ] **ADR-WEB-007 — Aprobar modelo multisitio mínimo**
  - Incluir `site_id`.
  - Primer sitio: Vento Group.
  - Preparar crecimiento sin construir aún múltiples sitios.

### [ ] **ADR-WEB-008 — Aprobar estrategia de medios**
  - Archivo original.
  - Metadatos.
  - Foco visual.
  - Versiones optimizadas.
  - Referencias de uso.

### [ ] **ADR-WEB-009 — Aprobar estrategia de formularios**
  - Definiciones administrables.
  - Validación en servidor.
  - Consentimiento.
  - Anti-spam.
  - Auditoría.

### [ ] **ADR-WEB-010 — Aprobar estrategia de caché**
  - Contenido publicado cacheable.
  - Borradores sin caché pública.
  - Revalidación al publicar.

### [ ] **WEB-ARC-001 — Crear contrato JSON de páginas**
  - Schema versionado.
  - Campos requeridos.
  - Validaciones.
  - Compatibilidad futura.

### [ ] **WEB-ARC-002 — Crear contrato de secciones**
  - Contenido.
  - Medios.
  - Estilos.
  - Responsive.
  - Fuente de datos.
  - Acciones.

### [ ] **WEB-ARC-003 — Crear contrato de fuentes dinámicas**
  - Restaurantes.
  - Empleos.
  - Eventos.
  - Servicios.
  - Aplicaciones.
  - Selección manual.
  - Filtros.
  - Límite.

### [ ] **WEB-ARC-004 — Crear estrategia de compatibilidad de schema**
  - `schemaVersion`.
  - Migradores internos.
  - Validación previa al render.

### [ ] **WEB-ARC-005 — Definir arquitectura canónica de componentes públicos**

### [ ] **WEB-ARC-006 — Definir ownership y fuente canónica de cada clase de contenido**

### [ ] **WEB-ARC-007 — Definir sincronización entre entidades operativas y contenido web**


### [ ] **ADR-WEB-011 — Aprobar política canónica de fallback y degradación pública**
  - Prohibir placeholders, entidades ficticias y CTA `#`.
  - Definir comportamiento sin datos y fallas temporales.
  - Usar última publicación válida cuando corresponda.
  - Diferenciar fallback técnico de contenido editorial.

### [ ] **WEB-ARC-008 — Crear paquete compartido `@vento/web-contracts`**
  - Schemas y tipos compartidos entre VISO y web.
  - Versionado semántico y compatibilidad.
  - Build y publicación interna.
  - Pruebas de contratos.

### [ ] **WEB-ARC-009 — Definir ciclo de vida y migración de schemas de sección**
  - Versiones de schema.
  - Migraciones de contenido.
  - Compatibilidad hacia atrás.
  - Deprecación y retiro seguro.

### Puerta de aprobación Fase 3

Todos los ADR deberán quedar en estado `ACCEPTED`.

---

## FASE 4 — MODELO DE BASE DE DATOS Y MIGRACIONES

### Objetivo

Crear la base estable para páginas, revisiones, publicaciones, medios y auditoría.

> Todas las migraciones se crearán exclusivamente en `vento-shell`.

---

### [ ] **WEB-DB-001 — Crear migración de sitios**
  - Tabla `website_sites`.
  - Dominio.
  - Nombre.
  - estado.
  - configuración base.

### [ ] **WEB-DB-002 — Crear migración de páginas**
  - Tabla `website_pages`.
  - `site_id`.
  - slug.
  - título interno.
  - plantilla.
  - estado.
  - orden.
  - fechas.

### [ ] **WEB-DB-003 — Crear migración de revisiones**
  - Tabla `website_page_revisions`.
  - JSON validable.
  - número de revisión.
  - autor.
  - comentario.
  - estado.
  - timestamps.

### [ ] **WEB-DB-004 — Crear migración de publicaciones**
  - Tabla `website_page_publications`.
  - página.
  - revisión publicada.
  - publicador.
  - fecha.
  - causa.
  - versión anterior.

### [ ] **WEB-DB-005 — Crear migración de releases**
  - `website_releases`.
  - `website_release_pages`.
  - Preparar publicación coordinada de múltiples páginas.

### [ ] **WEB-DB-006 — Crear migración de medios**
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

### [ ] **WEB-DB-007 — Crear referencias de medios**
  - `website_media_usages`.
  - Identificar dónde se utiliza cada archivo.
  - Impedir borrado accidental.

### [ ] **WEB-DB-008 — Crear migración de tema**
  - `website_themes`.
  - Colores.
  - Tipografías.
  - radios.
  - sombras.
  - botones.
  - espacios.

### [ ] **WEB-DB-009 — Crear configuración global**
  - `website_site_settings`.
  - datos de contacto.
  - redes.
  - logos.
  - favicon.
  - SEO base.
  - analítica.

### [ ] **WEB-DB-010 — Crear navegación**
  - `website_navigation_menus`.
  - `website_navigation_items`.
  - jerarquía.
  - orden.
  - visibilidad.
  - destino.

### [ ] **WEB-DB-011 — Crear formularios**
  - `website_forms`.
  - `website_form_fields`.
  - `website_form_submissions`.

### [ ] **WEB-DB-012 — Crear auditoría**
  - `website_audit_events`.
  - acción.
  - actor.
  - recurso.
  - antes.
  - después.
  - fecha.
  - IP cuando corresponda.

### [ ] **WEB-DB-013 — Crear tokens de preview**
  - `website_preview_tokens`.
  - expiración.
  - revisión.
  - revocación.
  - creador.

### [ ] **WEB-DB-014 — Crear índices**
  - Slug.
  - sitio.
  - estado.
  - publicación.
  - revisión.
  - categorías.
  - fechas.

### [ ] **WEB-DB-015 — Crear triggers**
  - `updated_at`.
  - número de revisión.
  - auditoría cuando corresponda.
  - integridad.

### [ ] **WEB-DB-016 — Crear RLS**
  - Lectura anónima solo de contenido publicado.
  - Edición solo desde roles autorizados.
  - Publicación restringida.
  - Formularios con política específica.
  - Auditoría protegida.

### [ ] **WEB-DB-017 — Crear seed inicial**
  - Sitio `ventogroup.co`.
  - Páginas actuales.
  - Tema base.
  - navegación base.

### [ ] **WEB-DB-018 — Crear pruebas de migración**
  - Base vacía.
  - Base con datos actuales.
  - Reaplicación segura.
  - Rollback lógico.

### [ ] **WEB-DB-019 — Documentar migraciones**
  - Propósito.
  - tablas.
  - relaciones.
  - políticas.
  - reversión.
  - dependencias.

### [ ] **WEB-DB-020 — Crear proyección pública de publicación vigente**
  - Contrato público mínimo.
  - Publicación vigente.
  - Exclusión de borradores.
  - Exclusión de campos administrativos.
  - Sitio y ruta.
  - Revisión publicada.
  - Metadata.
  - Secciones.
  - Colecciones.
  - Caché.
  - Compatibilidad con RLS.
  - Estrategia de vista, tabla materializada, RPC o función.
  - Pruebas con `anon`.

### Puerta de aprobación Fase 4

Las migraciones deberán estar revisadas antes de aplicarse en producción.

---

## FASE 5 — REGISTRO Y MOTOR DE RENDERIZADO

### Objetivo

Convertir `vento-group-web` en un renderizador dinámico de páginas.

---

### [ ] **WEB-RND-001 — Crear tipos TypeScript canónicos**
  - Página.
  - Revisión.
  - Sección.
  - Medio.
  - Tema.
  - Fuente dinámica.
  - SEO.

### [ ] **WEB-RND-002 — Crear schemas de validación**
  - Validación de página.
  - Validación por tipo de sección.
  - Validación de enlaces.
  - Validación de medios.
  - Validación responsive.

### [ ] **WEB-RND-003 — Crear Section Registry**

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

### [ ] **WEB-RND-004 — Crear Page Loader**
  - Resolver sitio.
  - Resolver página.
  - Resolver revisión publicada.
  - Validar contenido.
  - Entregar datos al renderer.

### [ ] **WEB-RND-005 — Crear Page Renderer**
  - Iterar secciones.
  - Renderizar componente registrado.
  - Manejar secciones ocultas.
  - Aplicar tema.
  - Aplicar responsive.

### [ ] **WEB-RND-006 — Crear manejo de errores**
  - Sección desconocida.
  - Schema inválido.
  - Medio faltante.
  - Fuente dinámica inválida.
  - Datos incompletos.

### [ ] **WEB-RND-007 — Crear modo desarrollo**
  - Mostrar errores visibles solo a administradores.
  - No romper completamente la página.

### [ ] **WEB-RND-008 — Crear adaptador legacy**
  - Traducir `website_blocks` al formato nuevo.
  - Traducir páginas actuales.
  - Mantener operación mientras se migra.

### [ ] **WEB-RND-009 — Crear resolución de colecciones**
  - Restaurantes.
  - Vacantes.
  - Eventos.
  - Servicios.
  - Aplicaciones.
  - Filtros.
  - Orden.
  - selección manual.

### [ ] **WEB-RND-010 — Crear resolución de medios**
  - Asset por ID.
  - URL optimizada.
  - alt text.
  - foco.
  - poster de video.
  - fallback seguro.

### [ ] **WEB-RND-011 — Crear estilos por tokens**
  - Tema.
  - contraste.
  - anchura.
  - espacios.
  - alineación.
  - fondos.

### [ ] **WEB-RND-012 — Crear comportamiento responsive**
  - Overrides móviles.
  - Layout.
  - orden.
  - visibilidad.
  - tamaño de tipografía.
  - foco multimedia.

### [ ] **WEB-RND-013 — Crear metadata dinámica**
  - título.
  - descripción.
  - canonical.
  - Open Graph.
  - Twitter.
  - noindex.
  - imagen social.

### [ ] **WEB-RND-014 — Crear datos estructurados**
  - Organización.
  - Restaurante.
  - Empleo.
  - Evento.
  - Breadcrumb.
  - ItemList.

### [ ] **WEB-RND-015 — Crear revalidación**
  - Revalidar página publicada.
  - Revalidar navegación.
  - Revalidar sitemap.
  - Revalidar colecciones.

### [ ] **WEB-RND-016 — Crear pruebas unitarias**
  - Schemas.
  - registro.
  - loaders.
  - fuentes dinámicas.
  - errores.

### [ ] **WEB-RND-017 — Crear `MediaRenderer` canónico**
  - Resolución por asset.
  - Imagen, video, dimensiones, focal point y crop.
  - Alt text, poster, prioridad y lazy loading.
  - Variantes responsive y fallback seguro.

### [ ] **WEB-RND-018 — Crear `Data Resolver Registry`**
  - Resolvers permitidos por tipo de colección.
  - Schemas de entrada y salida.
  - Paginación, filtros y orden.
  - Errores y caché.

### [ ] **WEB-RND-019 — Crear `LinkRenderer` canónico**
  - Rutas internas y externas.
  - Descargas, correo y teléfono.
  - Validación de URL y seguridad.
  - Estados deshabilitados y enlaces inexistentes.

### Puerta de aprobación Fase 5

Una página de prueba deberá renderizarse completamente desde una revisión almacenada.

---

## FASE 6 — BORRADORES, PREVIEW, PUBLICACIÓN Y VERSIONES

### Objetivo

Implementar un flujo editorial seguro.

---

### [ ] **WEB-PUB-001 — Crear borrador inicial**
  - Crear borrador desde página vacía.
  - Crear borrador desde versión publicada.

### [ ] **WEB-PUB-002 — Implementar guardado manual**
  - Validar.
  - Guardar.
  - Mostrar fecha.
  - Mostrar usuario.

### [ ] **WEB-PUB-003 — Implementar autoguardado**
  - Debounce.
  - Estado guardando.
  - Estado guardado.
  - Manejo de error.
  - Recuperación.

### [ ] **WEB-PUB-004 — Implementar control de concurrencia**
  - Detectar edición simultánea.
  - Evitar sobrescritura silenciosa.
  - Advertir versión desactualizada.

### [ ] **WEB-PUB-005 — Implementar validación previa**
  - Campos.
  - schema.
  - enlaces.
  - medios.
  - SEO.
  - accesibilidad mínima.

### [ ] **WEB-PUB-006 — Crear tokens de preview**
  - Firmados.
  - Temporales.
  - Revocables.
  - Limitados a una revisión.

### [ ] **WEB-PUB-007 — Crear ruta de preview**
  - Cargar revisión no publicada.
  - No almacenar caché pública.
  - `noindex`.
  - Indicar modo preview.

### [ ] **WEB-PUB-008 — Implementar publicación**
  - Confirmación explícita.
  - Crear versión inmutable.
  - Actualizar puntero publicado.
  - Registrar auditoría.
  - Revalidar sitio.

### [ ] **WEB-PUB-009 — Implementar comparación de cambios**
  - Campos modificados.
  - Secciones nuevas.
  - Secciones eliminadas.
  - Orden.
  - SEO.
  - navegación.

### [ ] **WEB-PUB-010 — Implementar historial**
  - Revisión.
  - fecha.
  - autor.
  - comentario.
  - estado.
  - acción.

### [ ] **WEB-PUB-011 — Implementar restauración**
  - Seleccionar versión.
  - Previsualizar.
  - Confirmar.
  - Crear nueva versión.
  - Publicar.

### [ ] **WEB-PUB-012 — Implementar despublicación**
  - Validar impacto.
  - Mantener historial.
  - Definir respuesta pública.

### [ ] **WEB-PUB-013 — Implementar releases**
  - Agrupar cambios de varias páginas.
  - Previsualizar conjunto.
  - Publicar conjunto.
  - Restaurar conjunto.

### [ ] **WEB-PUB-014 — Crear auditoría editorial**
  - Crear.
  - editar.
  - publicar.
  - restaurar.
  - eliminar.
  - cambiar permisos.

### [ ] **WEB-PUB-015 — Implementar guardado atómico de contenido relacionado**
  - Guardar revisión y relaciones en una transacción lógica.
  - Evitar publicaciones parciales.
  - Idempotencia y recuperación.
  - Registro de auditoría.

### Puerta de aprobación Fase 6

Se debe poder editar una página, previsualizarla, publicarla y restaurar la versión anterior.

---

## FASE 7 — FUNDAMENTO DE VISO WEB STUDIO

### Objetivo

Construir el contenedor principal del editor.

---

### [ ] **WEB-EDT-001 — Crear ruta `/website-studio`**
  - Mantener temporalmente `/website-cms`.

### [ ] **WEB-EDT-002 — Crear selector de sitio**
  - Inicialmente solo Vento Group.
  - Preparado para múltiples sitios.

### [ ] **WEB-EDT-003 — Crear selector de página**
  - Buscar.
  - filtrar.
  - estado.
  - fecha.
  - autor.

### [ ] **WEB-EDT-004 — Crear árbol de páginas**
  - Inicio.
  - internas.
  - legales.
  - ocultas.
  - archivadas.

### [ ] **WEB-EDT-005 — Crear lista de secciones**
  - Orden.
  - tipo.
  - título interno.
  - estado visible/oculto.
  - error.

### [ ] **WEB-EDT-006 — Crear panel central**
  - Preview mediante iframe.
  - Recarga controlada.
  - Sin abandonar VISO.

### [ ] **WEB-EDT-007 — Crear panel de propiedades**
  - Campos según tipo de sección.
  - Validaciones.
  - ayuda.
  - estados.

### [ ] **WEB-EDT-008 — Crear barra superior**
  - Guardar.
  - preview.
  - publicar.
  - versiones.
  - dispositivo.
  - salir.

### [ ] **WEB-EDT-009 — Crear selector responsive**
  - Desktop.
  - tablet.
  - móvil.
  - ancho personalizado de prueba.

### [ ] **WEB-EDT-010 — Crear comunicación editor-preview**
  - `postMessage`.
  - selección de sección.
  - scroll hacia sección.
  - actualización temporal.

### [ ] **WEB-EDT-011 — Crear indicador de guardado**
  - Sin cambios.
  - cambios pendientes.
  - guardando.
  - guardado.
  - error.

### [ ] **WEB-EDT-012 — Crear navegación segura**
  - Advertir cambios sin guardar.
  - evitar pérdida accidental.

### [ ] **WEB-EDT-013 — Crear manejo de errores**
  - Error de carga.
  - error de schema.
  - error de permisos.
  - error de guardado.
  - error de preview.

### [ ] **WEB-EDT-014 — Crear accesibilidad del editor**
  - teclado.
  - foco.
  - etiquetas.
  - contraste.
  - mensajes.

### Puerta de aprobación Fase 7

El editor deberá cargar una página, mostrar sus secciones y presentar preview real.

---

## FASE 8 — EDICIÓN VISUAL Y OPERACIONES SOBRE SECCIONES

### Objetivo

Convertir el editor en un constructor funcional.

---

### [ ] **WEB-BLD-001 — Crear biblioteca de secciones**
  - categorías.
  - búsqueda.
  - miniatura.
  - descripción.
  - variantes.

### [ ] **WEB-BLD-002 — Agregar sección**
  - Seleccionar tipo.
  - crear configuración por defecto.
  - insertar en posición elegida.

### [ ] **WEB-BLD-003 — Reordenar secciones**
  - Drag-and-drop.
  - alternativa por teclado.
  - actualización inmediata del preview.

### [ ] **WEB-BLD-004 — Duplicar sección**
  - Nuevo ID.
  - conservar configuración.
  - conservar medios.
  - registrar cambios.

### [ ] **WEB-BLD-005 — Ocultar sección**
  - Ocultar sin eliminar.
  - mostrar estado en editor.
  - excluir en producción.

### [ ] **WEB-BLD-006 — Eliminar sección**
  - Confirmación.
  - advertencia.
  - posibilidad de deshacer antes de guardar.

### [ ] **WEB-BLD-007 — Editar contenido**
  - título.
  - subtítulo.
  - cuerpo.
  - CTA.
  - enlaces.
  - etiquetas.

### [ ] **WEB-BLD-008 — Seleccionar variante**
  - Variante visual compatible.
  - Preview inmediato.
  - valores por defecto.

### [ ] **WEB-BLD-009 — Configurar apariencia**
  - tema claro/oscuro.
  - fondo.
  - alineación.
  - anchura.
  - espaciado.
  - contraste.

### [ ] **WEB-BLD-010 — Configurar responsive**
  - propiedades por dispositivo.
  - orden.
  - ocultamiento.
  - alineación.
  - foco multimedia.

### [ ] **WEB-BLD-011 — Conectar colecciones**
  - categoría.
  - filtro.
  - orden.
  - límite.
  - selección manual.
  - elementos destacados.

### [ ] **WEB-BLD-012 — Seleccionar elementos manuales**
  - Restaurantes.
  - eventos.
  - empleos.
  - servicios.
  - apps.

### [ ] **WEB-BLD-013 — Crear edición desde el preview**
  - Clic sobre sección.
  - selección.
  - resaltado.
  - apertura de propiedades.

### [ ] **WEB-BLD-014 — Crear undo/redo**
  - Historial local.
  - deshacer.
  - rehacer.
  - reiniciar borrador.

### [ ] **WEB-BLD-015 — Crear copiar y pegar**
  - Dentro de la misma página.
  - Entre páginas compatibles.

### [ ] **WEB-BLD-016 — Crear anclas**
  - ID de sección.
  - navegación interna.
  - validación de duplicados.

### [ ] **WEB-BLD-017 — Crear páginas**
  - Desde cero.
  - desde plantilla.
  - duplicar existente.

### [ ] **WEB-BLD-018 — Administrar URL**
  - slug.
  - redirecciones.
  - colisiones.
  - URL reservadas.

### [ ] **WEB-BLD-019 — Archivar páginas**
  - No eliminar directamente una página publicada.
  - conservar historial.

### [ ] **WEB-BLD-020 — Crear plantillas**
  - Guardar estructura.
  - aplicar plantilla.
  - actualizar catálogo.

### Puerta de aprobación Fase 8

Una persona no técnica deberá poder crear una página completa sin modificar código.

---

## FASE 9 — BIBLIOTECA MULTIMEDIA

### Objetivo

Administrar imágenes y videos de forma visual, segura y eficiente.

---

### [ ] **WEB-MED-001 — Definir bucket y estructura**
  - Sitio.
  - tipo.
  - fecha.
  - recurso.
  - versión.

### [ ] **WEB-MED-002 — Crear biblioteca visual**
  - Grid.
  - lista.
  - miniaturas.
  - búsqueda.
  - filtros.

### [ ] **WEB-MED-003 — Crear subida de archivos**
  - Arrastrar.
  - seleccionar.
  - múltiples archivos.
  - progreso.
  - cancelación.

### [ ] **WEB-MED-004 — Validar archivos**
  - formato.
  - tamaño.
  - dimensiones.
  - duración.
  - MIME.
  - extensión.

### [ ] **WEB-MED-005 — Crear metadatos**
  - título.
  - descripción.
  - alt text.
  - etiquetas.
  - autor.
  - copyright interno.

### [ ] **WEB-MED-006 — Crear punto focal**
  - Foco horizontal.
  - foco vertical.
  - preview por dispositivo.

### [ ] **WEB-MED-007 — Crear recorte**
  - Relaciones permitidas.
  - portada.
  - tarjeta.
  - hero.
  - Open Graph.

### [ ] **WEB-MED-008 — Crear optimización de imágenes**
  - WebP/AVIF.
  - tamaños.
  - compresión.
  - lazy loading.
  - placeholder.

### [ ] **WEB-MED-009 — Crear manejo de videos**
  - poster.
  - duración.
  - autoplay permitido.
  - sonido.
  - móvil.
  - fallback.

### [ ] **WEB-MED-010 — Crear reemplazo global**
  - Identificar usos.
  - reemplazar.
  - advertir impacto.

### [ ] **WEB-MED-011 — Impedir borrado peligroso**
  - Mostrar usos.
  - bloquear si está publicado.
  - permitir reemplazo.

### [ ] **WEB-MED-012 — Crear limpieza de huérfanos**
  - Detectar.
  - revisar.
  - archivar.
  - eliminar posteriormente.

### [ ] **WEB-MED-013 — Crear permisos multimedia**
  - Subir.
  - editar.
  - reemplazar.
  - eliminar.
  - administrar.

### [ ] **WEB-MED-014 — Resolver entrega pública segura de medios**
  - URLs públicas firmadas o CDN según política.
  - Cache-control y versionado.
  - Separación entre originales y derivados.
  - Revocación y eliminación segura.

### Puerta de aprobación Fase 9

Todo medio publicado deberá tener trazabilidad, optimización y uso identificable.

---

## FASE 10 — CONFIGURACIÓN GLOBAL DEL SITIO

### Objetivo

Permitir administrar desde VISO los elementos que afectan todas las páginas.

---

### [ ] **WEB-GLB-001 — Crear editor de tema**
  - Paleta.
  - fondos.
  - tipografías.
  - botones.
  - radios.
  - espacios.
  - sombras.

### [ ] **WEB-GLB-002 — Crear configuración de logos**
  - principal.
  - claro.
  - oscuro.
  - isotipo.
  - favicon.
  - Open Graph.

### [ ] **WEB-GLB-003 — Crear editor de header**
  - estilo.
  - transparencia.
  - comportamiento al scroll.
  - CTA.
  - menú móvil.

### [ ] **WEB-GLB-004 — Crear editor de navegación**
  - añadir.
  - ordenar.
  - anidar.
  - ocultar.
  - enlaces externos.
  - páginas internas.

### [ ] **WEB-GLB-005 — Crear editor de footer**
  - columnas.
  - enlaces.
  - redes.
  - contacto.
  - legales.
  - marcas.

### [ ] **WEB-GLB-006 — Crear información corporativa**
  - nombre.
  - correo.
  - teléfono.
  - direcciones.
  - horarios.
  - redes.

### [ ] **WEB-GLB-007 — Crear configuración SEO global**
  - título base.
  - descripción base.
  - imagen base.
  - robots.
  - idioma.
  - organización.

### [ ] **WEB-GLB-008 — Crear SEO por página**
  - title.
  - description.
  - canonical.
  - Open Graph.
  - indexación.
  - schema.

### [ ] **WEB-GLB-009 — Crear sitemap**
  - páginas publicadas.
  - restaurantes.
  - eventos.
  - fechas de modificación.

### [ ] **WEB-GLB-010 — Crear redirecciones**
  - URL anterior.
  - URL nueva.
  - tipo 301/302.
  - prevención de ciclos.

### [ ] **WEB-GLB-011 — Crear configuración analítica**
  - proveedor.
  - identificador.
  - eventos.
  - consentimiento.

### [ ] **WEB-GLB-012 — Crear banner de cookies**
  - categorías.
  - consentimiento.
  - persistencia.
  - política.

### [ ] **WEB-GLB-013 — Crear páginas legales**
  - privacidad.
  - tratamiento de datos.
  - términos.
  - cookies.

### Puerta de aprobación Fase 10

Header, footer, tema, SEO y navegación deberán poder cambiarse sin despliegue de código.

---

## FASE 11 — FORMULARIOS Y CONVERSIONES

### Objetivo

Gestionar contacto, reservas, eventos y aplicaciones desde la web.

---

### [ ] **WEB-FRM-001 — Crear catálogo de formularios**
  - Contacto.
  - eventos.
  - reserva.
  - empleo.
  - proveedores.
  - prensa.

### [ ] **WEB-FRM-002 — Crear constructor controlado de formularios**
  - Campo texto.
  - email.
  - teléfono.
  - select.
  - textarea.
  - checkbox.
  - fecha.
  - archivo permitido.

### [ ] **WEB-FRM-003 — Crear validaciones**
  - requerido.
  - formato.
  - longitud.
  - archivo.
  - consentimiento.

### [ ] **WEB-FRM-004 — Crear envío seguro**
  - Validación servidor.
  - rate limit.
  - anti-spam.
  - CAPTCHA cuando corresponda.

### [ ] **WEB-FRM-005 — Crear almacenamiento de envíos**
  - estado.
  - fecha.
  - origen.
  - página.
  - consentimiento.

### [ ] **WEB-FRM-006 — Crear notificaciones**
  - correo.
  - destinatarios.
  - asunto.
  - plantilla.

### [ ] **WEB-FRM-007 — Crear bandeja en VISO**
  - Nuevos.
  - en gestión.
  - atendidos.
  - descartados.

### [ ] **WEB-FRM-008 — Crear exportación**
  - CSV.
  - filtros.
  - rango de fechas.

### [ ] **WEB-FRM-009 — Crear política de retención**
  - datos personales.
  - archivos.
  - tiempos.
  - eliminación.

### [ ] **WEB-FRM-010 — Integrar empleos con Vento Talento**
  - Definir si redirige.
  - Definir si comparte vacantes.
  - Definir si recibe aplicaciones.

### [ ] **WEB-FRM-011 — Implementar suscripción de newsletter o retirar la interfaz**
  - Decidir alcance funcional.
  - Consentimiento, validación y almacenamiento o proveedor.
  - Estados de éxito y error accesibles.
  - Retirar la interfaz si no se implementa.

### Puerta de aprobación Fase 11

Los formularios deberán funcionar sin exponer credenciales ni permitir spam básico.

---

## FASE 12 — RECONSTRUCCIÓN DE PÁGINAS ESTILO DARLING

### Objetivo

Migrar cada página al nuevo sistema y llevarla al nivel visual definido.

---

### 12.1 Inicio

### [ ] **WEB-PAG-001 — Definir blueprint de Inicio**
  - Splash.
  - hero.
  - venues.
  - editorial.
  - image banner.
  - eventos.
  - statement.
  - ecosistema.
  - CTA.

### [ ] **WEB-PAG-002 — Migrar Inicio al renderer**
  - Eliminar dependencia estructural de código específico.
  - Mantener animaciones existentes.

### [ ] **WEB-PAG-003 — Hacer Inicio editable desde VISO**
  - Orden.
  - textos.
  - slides.
  - medios.
  - CTA.
  - visibilidad.

---

### 12.2 Restaurantes

### [ ] **WEB-PAG-010 — Definir blueprint de Restaurantes**
  - Hero.
  - showcase.
  - editorial.
  - banner.
  - portafolio.
  - CTA.

### [ ] **WEB-PAG-011 — Migrar listado de restaurantes**
  - Contenido dinámico.
  - filtros.
  - destacados.
  - orden.

### [ ] **WEB-PAG-012 — Crear plantilla de restaurante**
  - Hero.
  - introducción.
  - ubicación.
  - horarios.
  - características.
  - galería.
  - eventos.
  - reserva.
  - restaurantes relacionados.

### [ ] **WEB-PAG-013 — Migrar Vento Café**
  - Contenido real.
  - medios reales.
  - SEO.
  - CTA.

### [ ] **WEB-PAG-014 — Migrar Saudo**
  - Contenido real.
  - medios reales.
  - SEO.
  - CTA.

### [ ] **WEB-PAG-015 — Migrar Molka**
  - Confirmar estado de marca.
  - contenido.
  - medios.
  - SEO.
  - CTA.

---

### 12.3 Empleos

### [ ] **WEB-PAG-020 — Definir blueprint de Empleos**
  - Hero.
  - cultura.
  - editorial.
  - valores.
  - testimonios.
  - vacantes.
  - CTA.

### [ ] **WEB-PAG-021 — Crear lista de vacantes**
  - Cargo.
  - sede.
  - modalidad.
  - tipo de contrato.
  - fecha.
  - aplicar.

### [ ] **WEB-PAG-022 — Crear detalle de vacante**
  - Descripción.
  - responsabilidades.
  - requisitos.
  - beneficios.
  - formulario o integración.

### [ ] **WEB-PAG-023 — Integrar con Vento Talento**
  - Fuente canónica de vacantes.
  - evitar duplicados.
  - estado de publicación.

---

### 12.4 Ecosistema

### [ ] **WEB-PAG-030 — Definir blueprint de Ecosistema**
  - Hero.
  - historia.
  - visión.
  - image banner.
  - pasos.
  - aplicaciones.
  - cultura.
  - CTA.

### [ ] **WEB-PAG-031 — Crear secciones de Vento Pass**
  - propósito.
  - beneficios.
  - CTA.

### [ ] **WEB-PAG-032 — Crear secciones de Anima**
  - propósito.
  - beneficios.
  - CTA.

### [ ] **WEB-PAG-033 — Crear secciones de Vento OS**
  - propósito.
  - módulos.
  - CTA.

---

### 12.5 Eventos

### [ ] **WEB-PAG-040 — Definir blueprint de Eventos**
  - Hero.
  - espacios.
  - capacidades.
  - servicios.
  - galería.
  - formulario.

### [ ] **WEB-PAG-041 — Crear selector de espacios**
  - restaurante.
  - zona.
  - capacidad.
  - tipo de evento.
  - media.

### [ ] **WEB-PAG-042 — Crear formulario de eventos**
  - tipo.
  - fecha.
  - personas.
  - sede.
  - contacto.
  - observaciones.

---

### 12.6 Servicios

### [ ] **WEB-PAG-050 — Definir blueprint de Servicios**
  - Hero.
  - editorial.
  - servicios.
  - beneficios.
  - CTA.

### [ ] **WEB-PAG-051 — Definir servicios reales**
  - No publicar categorías vacías.
  - No utilizar placeholders.

### [ ] **WEB-PAG-052 — Crear detalle opcional de servicio**
  - Descripción.
  - alcance.
  - contacto.
  - CTA.

---

### 12.7 Contacto

### [ ] **WEB-PAG-060 — Crear página Contacto**
  - Hero.
  - formulario.
  - áreas de contacto.
  - sedes.
  - redes.

### [ ] **WEB-PAG-061 — Reemplazar enlaces mailto dispersos**
  - Centralizar contacto.
  - mantener correos solo cuando aporten valor.

---

### 12.8 Páginas auxiliares

### [ ] **WEB-PAG-070 — Crear página 404**
### [ ] **WEB-PAG-071 — Crear página de error**
### [ ] **WEB-PAG-072 — Crear privacidad**
### [ ] **WEB-PAG-073 — Crear tratamiento de datos**
### [ ] **WEB-PAG-074 — Crear términos**
### [ ] **WEB-PAG-075 — Crear cookies**

### Puerta de aprobación Fase 12

Todas las páginas públicas prioritarias deberán estar administradas desde VISO y sin placeholders.

---

## FASE 13 — MIGRACIÓN DE CONTENIDO Y CORTE PROGRESIVO

### Objetivo

Mover el contenido actual al sistema nuevo sin interrupciones.

---

### [ ] **WEB-MIG-001 — Crear inventario de contenido migrable**
  - Bloques.
  - items.
  - imágenes.
  - videos.
  - SEO.
  - enlaces.

### [ ] **WEB-MIG-002 — Crear transformador legacy**
  - `website_blocks` → revisión de página.
  - `website_items` → colecciones dinámicas.

### [ ] **WEB-MIG-003 — Crear reporte de incompatibilidades**
  - campos perdidos.
  - claves desconocidas.
  - medios faltantes.
  - enlaces inválidos.

### [ ] **WEB-MIG-004 — Migrar Inicio**
### [ ] **WEB-MIG-005 — Migrar Restaurantes**
### [ ] **WEB-MIG-006 — Migrar detalles de restaurante**
### [ ] **WEB-MIG-007 — Migrar Empleos**
### [ ] **WEB-MIG-008 — Migrar Ecosistema**
### [ ] **WEB-MIG-009 — Migrar Eventos**
### [ ] **WEB-MIG-010 — Migrar Servicios**
### [ ] **WEB-MIG-011 — Migrar navegación**
### [ ] **WEB-MIG-012 — Migrar footer**
### [ ] **WEB-MIG-013 — Migrar SEO**
### [ ] **WEB-MIG-014 — Migrar medios**

### [ ] **WEB-MIG-015 — Poblar contenido real**
  - Eliminar placeholders.
  - Confirmar datos.
  - confirmar imágenes.
  - confirmar CTA.

### [ ] **WEB-MIG-016 — Bloquear edición legacy por página migrada**
  - Evitar doble fuente de verdad.

### [ ] **WEB-MIG-017 — Mantener rollback legacy temporal**
  - Periodo de seguridad.
  - documentación.
  - responsables.

### [ ] **WEB-MIG-018 — Archivar CMS legacy**
  - Solo después de validar todas las páginas.

### [ ] **WEB-MIG-019 — Definir destino de tablas legacy**
  - mantener lectura histórica;
  - renombrar;
  - archivar;
  - eliminar en una migración posterior.

### [ ] **WEB-MIG-020 — Retirar componentes y composiciones públicas legacy**
  - Retirar `CategoryPage` y `HomeEditorialBand` actual.
  - Eliminar adaptadores e imports muertos.
  - Confirmar que ninguna ruta depende del código retirado.

### [ ] **WEB-MIG-021 — Migrar contenido hardcodeado a fuentes canónicas**
  - Textos, CTA, navegación, contactos y redes.
  - Logos, metadata, pilares y destinos.
  - Preservar microcopia técnica en código.

### [ ] **WEB-MIG-022 — Depurar y clasificar datos CMS legacy existentes**
  - Clasificar registros reales, seeds y placeholders.
  - Corregir categorías, slugs y medios.
  - Definir conservar, migrar, archivar o eliminar.

### [ ] **WEB-MIG-023 — Migrar estilos públicos a tokens y CSS Modules**
  - Extraer tokens globales.
  - Reducir acoplamiento a `globals.css`.
  - Definir ownership de estilos por componente.
  - Mantener equivalencia visual.

### [ ] **WEB-MIG-024 — Implementar adaptador legacy de solo lectura**
  - Leer páginas no migradas sin permitir nueva edición legacy.
  - Registrar dependencias pendientes.
  - Retirar adaptador al terminar la migración.

### Puerta de aprobación Fase 13

Cada página migrada deberá tener equivalencia funcional y visual antes de desactivar su versión anterior.

---

## FASE 14 — SEGURIDAD

### Objetivo

Evitar acceso indebido, publicación accidental y contenido inseguro.

---

### [ ] **WEB-SEC-001 — Validar permisos por acción**
### [ ] **WEB-SEC-002 — Probar RLS anónima**
### [ ] **WEB-SEC-003 — Probar RLS autenticada**
### [ ] **WEB-SEC-004 — Probar publicación restringida**
### [ ] **WEB-SEC-005 — Proteger preview**
### [ ] **WEB-SEC-006 — Sanitizar texto enriquecido**
### [ ] **WEB-SEC-007 — Validar URLs**
### [ ] **WEB-SEC-008 — Validar archivos**
### [ ] **WEB-SEC-009 — Aplicar rate limiting**
### [ ] **WEB-SEC-010 — Proteger formularios**
### [ ] **WEB-SEC-011 — Auditar secretos**
### [ ] **WEB-SEC-012 — Auditar variables de entorno**
### [ ] **WEB-SEC-013 — Registrar eventos sensibles**
### [ ] **WEB-SEC-014 — Probar restauración ante error**
### [ ] **WEB-SEC-015 — Crear revisión de seguridad previa a producción**
### [ ] **WEB-SEC-016 — Endurecer serialización y validación de JSON-LD**
### [ ] **WEB-SEC-017 — Eliminar dependencia de service role para lectura pública**
### [ ] **WEB-SEC-018 — Endurecer el CMS legacy mientras continúe operativo**
### [ ] **WEB-SEC-019 — Reducir privilegios SQL y endurecer funciones del dominio web**

### Criterio obligatorio

La web pública nunca deberá poder consultar borradores ni versiones privadas.

---

## FASE 15 — CALIDAD, ACCESIBILIDAD Y RENDIMIENTO

### Objetivo

Garantizar que el nuevo editor no degrade el sitio.

---

### [ ] **WEB-QA-001 — Crear pruebas unitarias**
### [ ] **WEB-QA-002 — Crear pruebas de integración**
### [ ] **WEB-QA-003 — Crear pruebas E2E**
### [ ] **WEB-QA-004 — Crear pruebas de publicación**
### [ ] **WEB-QA-005 — Crear pruebas de rollback**
### [ ] **WEB-QA-006 — Crear regresión visual**
### [ ] **WEB-QA-007 — Probar Chrome desktop**
### [ ] **WEB-QA-008 — Probar Android**
### [ ] **WEB-QA-009 — Probar iPhone/Safari**
### [ ] **WEB-QA-010 — Probar tablet**
### [ ] **WEB-QA-011 — Probar teclado**
### [ ] **WEB-QA-012 — Probar lector de pantalla**
### [ ] **WEB-QA-013 — Validar contraste**
### [ ] **WEB-QA-014 — Validar animaciones reducidas**
### [ ] **WEB-QA-015 — Validar alt text**
### [ ] **WEB-QA-016 — Validar estructura de encabezados**
### [ ] **WEB-QA-017 — Validar formularios**
### [ ] **WEB-QA-018 — Validar enlaces**
### [ ] **WEB-QA-019 — Validar SEO**
### [ ] **WEB-QA-020 — Validar datos estructurados**
### [ ] **WEB-QA-021 — Bloquear placeholders y contenido provisional en publicación**
### [ ] **WEB-QA-022 — Crear smoke test canónico de producción**
### [ ] **WEB-QA-023 — Validar calidad integral de VISO Web Studio**
### [ ] **WEB-QA-024 — Probar RLS, GRANTs y Storage del dominio web**
---

### 15.1 Objetivos de rendimiento

### [ ] **WEB-PERF-001 — LCP objetivo**
  - Menor de 2,5 segundos en condiciones representativas.

### [ ] **WEB-PERF-002 — CLS objetivo**
  - Menor de 0,1.

### [ ] **WEB-PERF-003 — Imágenes**
  - Responsive.
  - optimizadas.
  - lazy loading cuando corresponda.

### [ ] **WEB-PERF-004 — Videos**
  - poster.
  - carga diferida.
  - compresión.
  - alternativa móvil.

### [ ] **WEB-PERF-005 — JavaScript**
  - Evitar cargar editor en la web pública.
  - Dividir componentes pesados.

### [ ] **WEB-PERF-006 — Caché**
  - Contenido publicado.
  - medios.
  - colecciones.
  - revalidación.

### [ ] **WEB-PERF-007 — Lighthouse**
  - Performance móvil objetivo ≥ 85.
  - Accesibilidad objetivo ≥ 95.
  - SEO objetivo ≥ 95.
  - Best Practices objetivo ≥ 90.

### [ ] **WEB-PERF-008 — Implementar medición de campo de Core Web Vitals**
  - Capturar LCP, INP y CLS p75.
  - Segmentar por ruta, dispositivo y release.
  - Dashboard y alertas.
  - Integración con CrUX, Search Console o RUM.

### [ ] **WEB-QA-025 — Validar integridad del Section Registry y sus contratos**
  - Verificar claves únicas y schemas.
  - Confirmar renderer y editor asociados.
  - Validar migraciones de versión.
  - Bloquear secciones desconocidas o incompatibles.

### Puerta de aprobación Fase 15

No se aprobará el lanzamiento si el nuevo sistema empeora de forma crítica la experiencia móvil.

---

## FASE 16 — DESPLIEGUE Y OPERACIÓN

### Objetivo

Lanzar el sistema con procesos reproducibles y seguros.

---

### [ ] **WEB-OPS-001 — Definir ambientes**
  - local.
  - desarrollo.
  - staging.
  - producción.

### [ ] **WEB-OPS-002 — Definir variables por ambiente**
  - Supabase.
  - dominio.
  - preview.
  - storage.
  - correo.
  - analítica.

### [ ] **WEB-OPS-003 — Crear ambiente staging**
  - Sitio.
  - VISO.
  - datos de prueba.
  - preview.

### [ ] **WEB-OPS-004 — Crear pipeline de validación**
  - lint.
  - tipos.
  - tests.
  - build.
  - migraciones.

### [ ] **WEB-OPS-005 — Crear proceso de migración**
  - respaldo.
  - aplicación.
  - validación.
  - rollback.

### [ ] **WEB-OPS-006 — Crear monitoreo**
  - errores.
  - formularios.
  - publicaciones.
  - rendimiento.
  - storage.

### [ ] **WEB-OPS-007 — Crear alertas**
  - error de publicación.
  - página no disponible.
  - error Supabase.
  - formularios fallidos.

### [ ] **WEB-OPS-008 — Crear runbook de incidentes**
  - sitio caído.
  - publicación incorrecta.
  - medio eliminado.
  - formulario detenido.
  - rollback.

### [ ] **WEB-OPS-009 — Crear respaldo**
  - base de datos.
  - medios.
  - configuración.
  - revisiones.

### [ ] **WEB-OPS-010 — Probar recuperación**
  - restaurar página.
  - restaurar release.
  - restaurar datos.

### [ ] **WEB-OPS-011 — Crear guía editorial**
  - textos.
  - imágenes.
  - SEO.
  - publicación.
  - revisión.

### [ ] **WEB-OPS-012 — Capacitar usuarios**
  - editor.
  - publicador.
  - administrador.

### [ ] **WEB-OPS-013 — Ejecutar lanzamiento progresivo**
  - Página por página.
  - monitoreo.
  - confirmación.

### [ ] **WEB-OPS-014 — Cerrar periodo de estabilización**
  - errores resueltos.
  - métricas estables.
  - legacy archivado.

---

## FASE 17 — FUNCIONES AVANZADAS POSTERIORES

Estas tareas no pertenecen al MVP, pero quedan registradas para evitar pendientes informales.

---

### [ ] **WEB-ADV-001 — Publicación programada**
### [ ] **WEB-ADV-002 — Despublicación programada**
### [ ] **WEB-ADV-003 — Comentarios editoriales**
### [ ] **WEB-ADV-004 — Flujo formal de aprobación**
### [ ] **WEB-ADV-005 — Multiidioma**
### [ ] **WEB-ADV-006 — Traducciones por revisión**
### [ ] **WEB-ADV-007 — Sitios adicionales para marcas**
### [ ] **WEB-ADV-008 — Plantillas compartidas entre marcas**
### [ ] **WEB-ADV-009 — Secciones globales reutilizables**
### [ ] **WEB-ADV-010 — Pruebas A/B**
### [ ] **WEB-ADV-011 — Personalización por audiencia**
### [ ] **WEB-ADV-012 — Generación asistida de copy**
### [ ] **WEB-ADV-013 — Sugerencias SEO asistidas**
### [ ] **WEB-ADV-014 — Integraciones con CRM**
### [ ] **WEB-ADV-015 — Integraciones con campañas**
### [ ] **WEB-ADV-016 — Analítica editorial**
### [ ] **WEB-ADV-017 — Historial visual de cambios**
### [ ] **WEB-ADV-018 — Edición colaborativa en tiempo real**

---

## 18. RUTA CRÍTICA

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

## 19. TRABAJO PARALELIZABLE

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

## 20. RIESGOS PRINCIPALES

### RIESGO 1 — Personalización excesiva

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

### RIESGO 2 — Doble fuente de verdad

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

### RIESGO 3 — Publicación accidental

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

### RIESGO 4 — Medios demasiado pesados

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

### RIESGO 5 — Copia excesiva de Darling

**Problema:** replicar activos o identidad propietaria.

**Mitigación:**

- usar únicamente patrones de UX;
- contenido propio;
- medios propios;
- identidad Vento.

**Tareas vinculadas:**

- `WEB-PRD-011`
- `WEB-BLD-001`
- `WEB-BLD-002`
- `WEB-BLD-003`
- `WEB-BLD-004`
- `WEB-QA-023`

---

### RIESGO 6 — Base de datos sobredimensionada

**Problema:** crear demasiadas tablas o relaciones difíciles de mantener.

**Mitigación:**

- modelo híbrido;
- revisiones JSON;
- entidades empresariales normalizadas;
- ADR previo.

**Tareas vinculadas:**

- `ADR-WEB-001`
- `WEB-ARC-001`
- `WEB-DB-001`
- `WEB-DB-002`
- `WEB-DB-003`
- `WEB-DB-004`
- `WEB-DB-018`
- `WEB-DB-019`

---

## 21. DEFINICIÓN DE MVP

El MVP se considerará completo únicamente cuando:

- [ ] VISO permita editar páginas visualmente.
- [ ] Se puedan agregar y ordenar secciones.
- [ ] Exista preview responsive.
- [ ] Existan borradores.
- [ ] Publicar sea una acción independiente.
- [ ] Exista historial.
- [ ] Exista restauración.
- [ ] Inicio esté migrado.
- [ ] Restaurantes esté migrado.
- [ ] Empleos esté migrado.
- [ ] Ecosistema esté migrado.
- [ ] Eventos esté migrado.
- [ ] Servicios esté migrado.
- [ ] Contacto exista.
- [ ] Header y footer sean administrables.
- [ ] SEO sea administrable.
- [ ] Los medios sean administrables.
- [ ] No existan placeholders visibles.
- [ ] Las páginas críticas funcionen en móvil.
- [ ] Las políticas RLS estén verificadas.
- [ ] Las migraciones estén en `vento-shell`.
- [ ] Exista documentación de operación.

---

## 22. DEFINICIÓN DE PROGRAMA COMPLETO

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

## 23. REGLAS DE ACTUALIZACIÓN DEL PLAN

### 23.1 Identificadores

- Los identificadores nunca se reutilizan.
- Una tarea eliminada se marca `[-]`.
- Una tarea reemplazada debe indicar qué tarea la sustituye.
- No se renumeran tareas aprobadas.

### 23.2 Marcación

El significado de `[x]` depende de la naturaleza de la tarea:

| Tipo de tarea | Significado de `[x]` |
| --- | --- |
| Auditoría, análisis o definición documental | Resultado desarrollado, validado y aprobado documentalmente |
| Implementación, migración, seguridad, QA u operación | Resultado implementado y validado funcionalmente |

Una tarea documental puede marcarse `[x]` aunque las brechas detectadas permanezcan abiertas, siempre que cada brecha tenga:

1. identificador;
2. tarea propietaria;
3. momento de cierre;
4. evidencia de origen;
5. estado vigente.

Una tarea de implementación no se considerará completada por:

- existir una tabla vacía;
- existir una pantalla sin funcionalidad;
- compilar;
- tener un componente parcial;
- tener solo infraestructura;
- funcionar únicamente en local.

### 23.3 Evidencia

Cada tarea completada deberá poder relacionarse con:

- archivo;
- migración;
- pantalla;
- prueba;
- captura;
- resultado funcional;
- decisión aprobada.

### 23.4 Actualización por lotes

Para evitar microactualizaciones ineficientes:

- se podrán completar varias tareas sustantivas;
- posteriormente se consolidará el estado;
- cada puerta de fase deberá actualizarse obligatoriamente;
- ninguna brecha podrá quedar sin tarea asignada.

---

## 24. REGISTRO DE CAMBIOS

| Versión      | Fecha      | Cambio                                                       | Estado      |
| ------------ | ---------- | ------------------------------------------------------------ | ----------- |
| 2026-07-23.1 | 2026-07-23 | Creación inicial del plan canónico                            | Reemplazada |
| 2026-07-23.2 | 2026-07-23 | Incorporación de `WEB-AUD-001` a `WEB-AUD-006`                | Aprobada    |
| 2026-07-23.3 | 2026-07-23 | Incorporación de `WEB-AUD-007` a `WEB-AUD-011`                | Aprobada    |
| 2026-07-23.4 | 2026-07-23 | Consolidación de `WEB-GAP-001` a `WEB-GAP-204`                | Aprobada    |
| 2026-07-23.5 | 2026-07-23 | Cierre documental de Fase 1 y apertura de Fase 2              | Vigente     |
| 2026-07-23.6 | 2026-07-23 | Corrección de estados internos, referencias y jerarquía final | Vigente     |

---

## 25. PUNTO DE CONTINUIDAD

### FASE ACTUAL

**FASE 2 — DEFINICIÓN FUNCIONAL DE VISO WEB STUDIO**

### ÚLTIMA TAREA APROBADA

`WEB-AUD-012 — Consolidar brechas`

### SIGUIENTE TAREA

`WEB-PRD-001 — Definir perfiles de usuario`

### ESTADO DE LA FASE ANTERIOR

**FASE 1 — CERRADA DOCUMENTALMENTE**

Las 204 brechas permanecen `ASIGNADA — ABIERTA` hasta su momento de implementación y validación.

### RESTRICCIONES VIGENTES

- No crear migraciones.
- No modificar Supabase.
- No implementar el renderer.
- No iniciar el editor visual.
- No modificar producción.
- No iniciar la Fase 3 antes de aprobar la puerta completa de la Fase 2.

---

## 26. DECISIÓN RECOMENDADA

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
