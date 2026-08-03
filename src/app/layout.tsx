import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";

import { RouteTransition } from "@/components/route-transition";
import { PersistentSiteHeader, type HeaderVenue } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { getItems } from "@/lib/content";
import { getMetadataBase } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vento Group",
  description: "Ecosistema de restaurantes, talento, servicios y eventos de Vento Group.",
  metadataBase: getMetadataBase(),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vento Group",
    description: "Pagina central del ecosistema Vento Group.",
    url: "/",
    siteName: "Vento Group",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vento Group",
    description: "Pagina central del ecosistema Vento Group.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurants = await getItems("restaurant", 12);
  const headerVenues: HeaderVenue[] = restaurants.map((restaurant) => ({
    id: restaurant.id,
    title: restaurant.title,
    href: `/restaurantes/${restaurant.slug}`,
    excerpt: restaurant.excerpt,
    imageUrl: restaurant.image_url,
    videoUrl: restaurant.video_url,
  }));

  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>
        <SmoothScroll />
        <Script id="vento-number-wheel-guard" strategy="afterInteractive">
          {`(() => {
            if (window.__ventoNumberWheelGuard) return;
            window.__ventoNumberWheelGuard = true;
            document.addEventListener('wheel', (event) => {
              const target = event.target;
              if (!(target instanceof Element)) return;
              const input = target.closest('input[type="number"]');
              if (!input) return;
              if (document.activeElement === input) {
                input.blur();
                event.preventDefault();
              }
            }, { passive: false });
          })();`}
        </Script>
        <PersistentSiteHeader venues={headerVenues} />
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
