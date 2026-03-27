import { getSupabaseClient } from "@/lib/supabase";

export type WebsiteBlock = {
  id: string;
  page_slug: string;
  block_key: string;
  block_type: string;
  title: string | null;
  subtitle: string | null;
  body: string | null;
  cta_label: string | null;
  cta_url: string | null;
  media_url: string | null;
  media_type: "image" | "video" | null;
  sort_order: number;
  is_published: boolean;
};

export type WebsiteItemCategory = "restaurant" | "job" | "service" | "event" | "app";
export type WebsiteMediaType = "image" | "video";

export type HeroSlide = {
  id: string;
  title: string | null;
  subtitle: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  mediaUrl: string | null;
  mediaType: WebsiteMediaType | null;
  sortOrder: number;
};

export type EditorialBand = {
  id: string;
  title: string | null;
  subtitle: string | null;
  body: string | null;
  ctaLabel: string | null;
  ctaUrl: string | null;
  mediaUrl: string | null;
  mediaType: WebsiteMediaType | null;
  sortOrder: number;
};

export type WebsiteItem = {
  id: string;
  category: WebsiteItemCategory;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  location: string | null;
  schedule_text: string | null;
  start_at: string | null;
  end_at: string | null;
  image_url: string | null;
  video_url: string | null;
  action_label: string | null;
  action_url: string | null;
  sort_order: number;
  is_published: boolean;
};

export function getItemHref(item: WebsiteItem): string {
  if (item.action_url && item.action_url !== "#") {
    return item.action_url;
  }

  switch (item.category) {
    case "restaurant":
      return `/restaurantes/${item.slug}`;
    case "job":
      return "/empleos";
    case "service":
      return "/servicios";
    case "event":
      return "/eventos";
    case "app":
      return "/ecosistema";
    default:
      return "/";
  }
}

const FALLBACK_BLOCKS: WebsiteBlock[] = [
  {
    id: "fallback-hero",
    page_slug: "home",
    block_key: "hero_main",
    block_type: "hero",
    title: "Vento Group",
    subtitle: "Ecosistema completo para restaurantes y trabajadores",
    body: "Conecta restaurantes, empleos, servicios, eventos y herramientas digitales desde un solo lugar.",
    cta_label: "Ver Ecosistema",
    cta_url: "/ecosistema",
    media_url: null,
    media_type: null,
    sort_order: 10,
    is_published: true,
  },
  {
    id: "fallback-home-media-1",
    page_slug: "home",
    block_key: "hero_slide_1",
    block_type: "hero_slide",
    title: "Experiencias premium",
    subtitle: "Slot dinamico para imagen o video principal",
    body: "Carga aqui media de impacto desde VISO.",
    cta_label: null,
    cta_url: null,
    media_url: null,
    media_type: null,
    sort_order: 20,
    is_published: true,
  },
  {
    id: "fallback-home-media-2",
    page_slug: "home",
    block_key: "hero_slide_2",
    block_type: "hero_slide",
    title: "Equipos y comunidad",
    subtitle: "Segundo slot dinamico",
    body: "Tambien puedes cargar video vertical u horizontal.",
    cta_label: null,
    cta_url: null,
    media_url: null,
    media_type: null,
    sort_order: 30,
    is_published: true,
  },
  {
    id: "fallback-editorial-1",
    page_slug: "home",
    block_key: "home_editorial_1",
    block_type: "editorial_band",
    title: "Un portfolio de venues para cada momento",
    subtitle: "Morning to midnight hospitality",
    body: "Diseña esta sección como bloque editorial: imagen grande, copy curado y CTA directo a cada venue.",
    cta_label: "Explorar restaurantes",
    cta_url: "/restaurantes",
    media_url: null,
    media_type: null,
    sort_order: 40,
    is_published: true,
  },
  {
    id: "fallback-editorial-2",
    page_slug: "home",
    block_key: "home_editorial_2",
    block_type: "editorial_band",
    title: "Eventos corporativos y celebraciones privadas",
    subtitle: "Spaces crafted for unforgettable moments",
    body: "Presenta salones, terrazas y configuraciones de evento desde una narrativa premium.",
    cta_label: "Ver eventos",
    cta_url: "/eventos",
    media_url: null,
    media_type: null,
    sort_order: 50,
    is_published: true,
  },
  {
    id: "fallback-event-spaces",
    page_slug: "home",
    block_key: "home_event_spaces_feature",
    block_type: "event_spaces",
    title: "Event Spaces",
    subtitle: "Host your next event with Vento Group",
    body: "Media destacada + resumen de venues ideales para celebraciones, corporativos y experiencias privadas.",
    cta_label: "Planear evento",
    cta_url: "/eventos",
    media_url: null,
    media_type: null,
    sort_order: 60,
    is_published: true,
  },
];

const FALLBACK_ITEMS: WebsiteItem[] = [
  {
    id: "app-pass",
    category: "app",
    slug: "vento-pass",
    title: "Vento Pass",
    excerpt: "Membresias, beneficios y experiencia de cliente.",
    body: null,
    location: null,
    schedule_text: null,
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Descargar",
    action_url: "#",
    sort_order: 10,
    is_published: true,
  },
  {
    id: "app-anima",
    category: "app",
    slug: "vento-anima",
    title: "Anima",
    excerpt: "Cultura, bienestar y experiencia del trabajador.",
    body: null,
    location: null,
    schedule_text: null,
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Descargar",
    action_url: "#",
    sort_order: 20,
    is_published: true,
  },
  {
    id: "app-os",
    category: "app",
    slug: "vento-os",
    title: "Vento OS",
    excerpt: "Centro operativo para equipos y marcas.",
    body: null,
    location: null,
    schedule_text: null,
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Abrir",
    action_url: "#",
    sort_order: 30,
    is_published: true,
  },
  {
    id: "restaurant-placeholder",
    category: "restaurant",
    slug: "restaurante-destacado",
    title: "Restaurante destacado",
    excerpt: "Bloque listo para subir foto, info y link de reserva.",
    body: null,
    location: "Ubicacion por definir",
    schedule_text: "Horario por definir",
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Ver restaurante",
    action_url: "#",
    sort_order: 10,
    is_published: true,
  },
  {
    id: "job-placeholder",
    category: "job",
    slug: "vacante-destacada",
    title: "Vacante destacada",
    excerpt: "Publica aqui una vacante activa desde VISO.",
    body: null,
    location: "Sede principal",
    schedule_text: "Tiempo completo",
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Aplicar",
    action_url: "#",
    sort_order: 10,
    is_published: true,
  },
  {
    id: "service-placeholder",
    category: "service",
    slug: "servicio-destacado",
    title: "Servicio destacado",
    excerpt: "Consultoria, tecnologia, operaciones o soporte corporativo.",
    body: null,
    location: null,
    schedule_text: null,
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Conocer servicio",
    action_url: "#",
    sort_order: 10,
    is_published: true,
  },
  {
    id: "event-placeholder",
    category: "event",
    slug: "evento-destacado",
    title: "Evento destacado",
    excerpt: "Bloque para lanzamiento, evento especial o calendario.",
    body: null,
    location: "Por confirmar",
    schedule_text: "Fecha por confirmar",
    start_at: null,
    end_at: null,
    image_url: null,
    video_url: null,
    action_label: "Ver evento",
    action_url: "#",
    sort_order: 10,
    is_published: true,
  },
];

function fallbackItemsByCategory(category: WebsiteItemCategory): WebsiteItem[] {
  return FALLBACK_ITEMS.filter((item) => item.category === category).sort((a, b) => a.sort_order - b.sort_order);
}

export function getBlock(blocks: WebsiteBlock[], key: string): WebsiteBlock | null {
  return blocks.find((block) => block.block_key === key) ?? null;
}

export function getHeroSlides(blocks: WebsiteBlock[]): HeroSlide[] {
  const primary = blocks
    .filter((block) => block.block_type === "hero_slide" || block.block_key.startsWith("hero_slide_"))
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((block) => ({
      id: block.id,
      title: block.title,
      subtitle: block.subtitle ?? block.body,
      ctaLabel: block.cta_label,
      ctaUrl: block.cta_url,
      mediaUrl: block.media_url,
      mediaType: block.media_type,
      sortOrder: block.sort_order,
    }));

  if (primary.length > 0) {
    return primary;
  }

  const legacy = ["home_media_1", "home_media_2"]
    .map((key) => blocks.find((block) => block.block_key === key))
    .filter(Boolean)
    .map((block) => ({
      id: block!.id,
      title: block!.title,
      subtitle: block!.subtitle ?? block!.body,
      ctaLabel: block!.cta_label,
      ctaUrl: block!.cta_url,
      mediaUrl: block!.media_url,
      mediaType: block!.media_type,
      sortOrder: block!.sort_order,
    }));

  return legacy;
}

export function getHomeEditorialBands(blocks: WebsiteBlock[]): EditorialBand[] {
  return blocks
    .filter((block) => block.block_type === "editorial_band" || block.block_key.startsWith("home_editorial_"))
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((block) => ({
      id: block.id,
      title: block.title,
      subtitle: block.subtitle,
      body: block.body,
      ctaLabel: block.cta_label,
      ctaUrl: block.cta_url,
      mediaUrl: block.media_url,
      mediaType: block.media_type,
      sortOrder: block.sort_order,
    }));
}

export function getHomeEventSpacesFeature(blocks: WebsiteBlock[]): EditorialBand | null {
  const block =
    blocks.find((item) => item.block_type === "event_spaces") ??
    blocks.find((item) => item.block_key === "home_event_spaces_feature");

  if (!block) {
    return null;
  }

  return {
    id: block.id,
    title: block.title,
    subtitle: block.subtitle,
    body: block.body,
    ctaLabel: block.cta_label,
    ctaUrl: block.cta_url,
    mediaUrl: block.media_url,
    mediaType: block.media_type,
    sortOrder: block.sort_order,
  };
}

export async function getPageBlocks(pageSlug: string): Promise<WebsiteBlock[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return pageSlug === "home" ? FALLBACK_BLOCKS : [];
  }

  const { data, error } = await supabase
    .from("website_blocks")
    .select(
      "id,page_slug,block_key,block_type,title,subtitle,body,cta_label,cta_url,media_url,media_type,sort_order,is_published",
    )
    .eq("page_slug", pageSlug)
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.warn(`website_blocks query error (${pageSlug}):`, error.message);
    return pageSlug === "home" ? FALLBACK_BLOCKS : [];
  }

  if (!data || data.length === 0) {
    return pageSlug === "home" ? FALLBACK_BLOCKS : [];
  }

  return data as WebsiteBlock[];
}

export async function getPageBlocksFromCandidates(pageSlugs: string[]): Promise<WebsiteBlock[]> {
  for (const slug of pageSlugs) {
    const blocks = await getPageBlocks(slug);
    if (blocks.length > 0) {
      return blocks;
    }
  }
  return [];
}

export async function getItems(category: WebsiteItemCategory, limit?: number): Promise<WebsiteItem[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return fallbackItemsByCategory(category);
  }

  let query = supabase
    .from("website_items")
    .select(
      "id,category,slug,title,excerpt,body,location,schedule_text,start_at,end_at,image_url,video_url,action_label,action_url,sort_order,is_published",
    )
    .eq("category", category)
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (limit && limit > 0) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.warn(`website_items query error (${category}):`, error.message);
    return fallbackItemsByCategory(category);
  }

  if (!data || data.length === 0) {
    return fallbackItemsByCategory(category);
  }

  return data as WebsiteItem[];
}

export async function getItemByCategoryAndSlug(
  category: WebsiteItemCategory,
  slug: string,
): Promise<WebsiteItem | null> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return (
      FALLBACK_ITEMS.find(
        (item) => item.category === category && item.slug.toLowerCase() === slug.toLowerCase(),
      ) ?? null
    );
  }

  const { data, error } = await supabase
    .from("website_items")
    .select(
      "id,category,slug,title,excerpt,body,location,schedule_text,start_at,end_at,image_url,video_url,action_label,action_url,sort_order,is_published",
    )
    .eq("category", category)
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.warn(`website_items single query error (${category}/${slug}):`, error.message);
    return null;
  }

  return (data as WebsiteItem | null) ?? null;
}
