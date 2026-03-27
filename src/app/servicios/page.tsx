import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { getItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios | Vento Group",
  description: "Servicios del ecosistema Vento Group para operación, calidad y crecimiento.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | Vento Group",
    description: "Servicios del ecosistema Vento Group para operación, calidad y crecimiento.",
    url: "/servicios",
    type: "website",
  },
};

export default async function ServiciosPage() {
  const items = await getItems("service");

  return (
    <CategoryPage
      title="Servicios"
      description="Servicios internos y externos para acelerar operacion, calidad y crecimiento."
      items={items}
    />
  );
}
