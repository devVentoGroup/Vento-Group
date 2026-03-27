const FALLBACK_SITE_URL = "https://ventogroup.co";

export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  if (!raw) {
    return FALLBACK_SITE_URL;
  }

  try {
    const parsed = new URL(raw);
    return parsed.origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl());
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, getSiteUrl()).toString();
}

export function truncateForMeta(input: string | null | undefined, max = 160): string {
  const value = (input ?? "").trim();
  if (!value) return "";
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
}
