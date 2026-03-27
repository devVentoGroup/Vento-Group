import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
