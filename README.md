# Vento Group Web

Sitio web publico central de Vento Group (inspiracion estructural tipo Darling Group), con contenido dinamico desde Supabase para que VISO administre textos y media.

## Stack

- Next.js (App Router)
- TypeScript
- Supabase (tablas `website_blocks` y `website_items`)

## Ejecutar local

1. Instalar dependencias:

```bash
npm install
```

2. Crear `.env.local` desde `.env.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://ventogroup.co
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

3. Levantar servidor:

```bash
npm run dev
```

## Migracion SQL

El esquema inicial para CMS dinamico esta en:

`supabase/migrations/20260326120500_website_cms.sql`

Incluye:
- bloques por pagina (`website_blocks`) para hero/medias/textos.
- items por categoria (`website_items`) para restaurantes, empleos, servicios, eventos y apps.
- RLS para lectura publica solo de contenido publicado.
- seeds iniciales con placeholders.

## SEO tecnico incluido

- Metadata base + Open Graph + Twitter cards.
- Metadata dinamica por restaurante en `/restaurantes/[slug]`.
- JSON-LD (`Organization`, `WebSite`, `ItemList`, `Restaurant`, `BreadcrumbList`).
- `robots.txt` y `sitemap.xml` (incluye rutas dinamicas de restaurantes).

## Flujo con VISO

- VISO puede escribir en estas tablas con service role.
- Esta web solo lee contenido publicado.
- Si falta media (`media_url`/`image_url`/`video_url`), se renderiza placeholder visual automaticamente.
