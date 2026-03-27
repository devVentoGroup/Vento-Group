import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { getItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Eventos | Vento Group",
  description: "Agenda de eventos, activaciones y experiencias en Vento Group.",
  alternates: { canonical: "/eventos" },
  openGraph: {
    title: "Eventos | Vento Group",
    description: "Agenda de eventos, activaciones y experiencias en Vento Group.",
    url: "/eventos",
    type: "website",
  },
};

export default async function EventosPage() {
  const items = await getItems("event");

  return (
    <CategoryPage
      title="Eventos"
      description="Lanzamientos, activaciones y agenda de experiencias en las marcas del grupo."
      items={items}
    />
  );
}
