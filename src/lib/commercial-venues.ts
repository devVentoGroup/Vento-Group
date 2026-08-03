import { getServerSupabaseClient } from "@/lib/supabase";

export type CommercialVenueHour = {
  isoWeekday: number;
  dayLabel: string;
  opensAt: string | null;
  closesAt: string | null;
  isClosed: boolean;
};

export type CommercialVenue = {
  businessId: string;
  businessCode: string;
  name: string;
  subtitle: string | null;
  tags: string[];
  logoUrl: string | null;
  cardLogoUrl: string | null;
  headerLogoUrl: string | null;
  reviewUrl: string | null;
  mapsUrl: string | null;
  accentColor: string | null;
  primaryColor: string | null;
  backgroundColor: string | null;
  siteId: string;
  siteCode: string;
  siteName: string;
  siteType: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  hours: CommercialVenueHour[];
};

type SatelliteRow = {
  id: string;
  code: string;
  name: string;
  subtitle: string | null;
  tags: string[] | null;
  logo_url: string | null;
  card_logo_url: string | null;
  header_logo_url: string | null;
  review_url: string | null;
  maps_url: string | null;
  address_override: string | null;
  latitude_override: number | null;
  longitude_override: number | null;
  accent_color: string | null;
  primary_color: string | null;
  background_color: string | null;
  site_id: string;
  sort_order: number;
};

type SiteRow = {
  id: string;
  code: string;
  name: string;
  site_type: string;
  address: string | null;
  latitude: number | string | null;
  longitude: number | string | null;
  is_active: boolean;
  is_public: boolean;
};

type BusinessHourRow = {
  iso_weekday: number;
  opens_at: string | null;
  closes_at: string | null;
  is_closed: boolean;
};

const WEEKDAYS = [
  "",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
] as const;

const SCHEMA_WEEKDAYS = [
  "",
  "https://schema.org/Monday",
  "https://schema.org/Tuesday",
  "https://schema.org/Wednesday",
  "https://schema.org/Thursday",
  "https://schema.org/Friday",
  "https://schema.org/Saturday",
  "https://schema.org/Sunday",
] as const;

function cleanText(value: string | null | undefined): string | null {
  const cleaned = value?.trim();
  return cleaned ? cleaned : null;
}

function numericValue(value: number | string | null | undefined): number | null {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

export function normalizeCommercialSlug(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatTime(value: string | null): string | null {
  if (!value) return null;
  return value.slice(0, 5);
}

function buildMapsUrl(
  explicitUrl: string | null,
  address: string | null,
  latitude: number | null,
  longitude: number | null,
): string | null {
  if (explicitUrl) return explicitUrl;

  if (latitude !== null && longitude !== null) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${latitude},${longitude}`)}`;
  }

  if (address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }

  return null;
}

export async function getCommercialVenueBySlug(
  slug: string,
  title?: string | null,
): Promise<CommercialVenue | null> {
  const supabase = getServerSupabaseClient();
  if (!supabase) return null;

  const { data: satellitesData, error: satellitesError } = await supabase
    .schema("pass")
    .from("pass_satellites")
    .select(
      "id,code,name,subtitle,tags,logo_url,card_logo_url,header_logo_url,review_url,maps_url,address_override,latitude_override,longitude_override,accent_color,primary_color,background_color,site_id,sort_order",
    )
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (satellitesError) {
    console.warn("pass_satellites query error:", satellitesError.message);
    return null;
  }

  const targetSlug = normalizeCommercialSlug(slug);
  const targetTitle = title ? normalizeCommercialSlug(title) : "";
  const satellite = ((satellitesData ?? []) as SatelliteRow[]).find((row) => {
    const candidates = [normalizeCommercialSlug(row.name), normalizeCommercialSlug(row.code)];
    return candidates.includes(targetSlug) || Boolean(targetTitle && candidates.includes(targetTitle));
  });

  if (!satellite?.site_id) return null;

  const { data: siteData, error: siteError } = await supabase
    .from("sites")
    .select("id,code,name,site_type,address,latitude,longitude,is_active,is_public")
    .eq("id", satellite.site_id)
    .eq("is_active", true)
    .eq("is_public", true)
    .maybeSingle();

  if (siteError) {
    console.warn(`sites query error (${satellite.site_id}):`, siteError.message);
    return null;
  }

  const site = siteData as SiteRow | null;
  if (!site) return null;

  const { data: hoursData, error: hoursError } = await supabase
    .schema("pass")
    .from("site_business_hours")
    .select("iso_weekday,opens_at,closes_at,is_closed")
    .eq("site_id", site.id)
    .order("iso_weekday", { ascending: true });

  if (hoursError) {
    console.warn(`site_business_hours query error (${site.id}):`, hoursError.message);
  }

  const latitude = numericValue(satellite.latitude_override) ?? numericValue(site.latitude);
  const longitude = numericValue(satellite.longitude_override) ?? numericValue(site.longitude);
  const address = cleanText(satellite.address_override) ?? cleanText(site.address);
  const mapsUrl = buildMapsUrl(cleanText(satellite.maps_url), address, latitude, longitude);

  const hours = ((hoursData ?? []) as BusinessHourRow[]).map((row) => ({
    isoWeekday: row.iso_weekday,
    dayLabel: WEEKDAYS[row.iso_weekday] || `Día ${row.iso_weekday}`,
    opensAt: formatTime(row.opens_at),
    closesAt: formatTime(row.closes_at),
    isClosed: row.is_closed,
  }));

  return {
    businessId: satellite.id,
    businessCode: satellite.code,
    name: satellite.name,
    subtitle: cleanText(satellite.subtitle),
    tags: (satellite.tags ?? []).map((tag) => tag.trim()).filter(Boolean),
    logoUrl:
      cleanText(satellite.header_logo_url) ??
      cleanText(satellite.card_logo_url) ??
      cleanText(satellite.logo_url),
    cardLogoUrl: cleanText(satellite.card_logo_url) ?? cleanText(satellite.logo_url),
    headerLogoUrl: cleanText(satellite.header_logo_url) ?? cleanText(satellite.logo_url),
    reviewUrl: cleanText(satellite.review_url),
    mapsUrl,
    accentColor: cleanText(satellite.accent_color),
    primaryColor: cleanText(satellite.primary_color),
    backgroundColor: cleanText(satellite.background_color),
    siteId: site.id,
    siteCode: site.code,
    siteName: site.name,
    siteType: site.site_type,
    address,
    latitude,
    longitude,
    hours,
  };
}

export function formatCommercialVenueHours(hours: CommercialVenueHour[]): string | null {
  const ordered = [...hours].sort((a, b) => a.isoWeekday - b.isoWeekday);
  const groups: Array<{
    start: CommercialVenueHour;
    end: CommercialVenueHour;
    key: string;
  }> = [];

  for (const hour of ordered) {
    const key = hour.isClosed ? "closed" : `${hour.opensAt ?? ""}-${hour.closesAt ?? ""}`;
    const previous = groups.at(-1);

    if (previous && previous.key === key && previous.end.isoWeekday + 1 === hour.isoWeekday) {
      previous.end = hour;
      continue;
    }

    groups.push({ start: hour, end: hour, key });
  }

  const formatted = groups
    .filter((group) => group.key !== "closed")
    .map((group) => {
      const dayLabel =
        group.start.isoWeekday === group.end.isoWeekday
          ? group.start.dayLabel
          : `${group.start.dayLabel} a ${group.end.dayLabel}`;
      return `${dayLabel}: ${group.start.opensAt}–${group.start.closesAt}`;
    });

  return formatted.length > 0 ? formatted.join(" · ") : null;
}

export function getOpeningHoursSpecification(hours: CommercialVenueHour[]) {
  return hours
    .filter((hour) => !hour.isClosed && hour.opensAt && hour.closesAt)
    .map((hour) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SCHEMA_WEEKDAYS[hour.isoWeekday],
      opens: hour.opensAt,
      closes: hour.closesAt,
    }));
}
