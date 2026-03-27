import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { getItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Restaurantes | Vento Group",
  description: "Portafolio de restaurantes y venues del ecosistema Vento Group.",
  alternates: { canonical: "/restaurantes" },
  openGraph: {
    title: "Restaurantes | Vento Group",
    description: "Portafolio de restaurantes y venues del ecosistema Vento Group.",
    url: "/restaurantes",
    type: "website",
  },
};

export default async function RestaurantesPage() {
  const items = await getItems("restaurant");

  return (
    <CategoryPage
      title="Restaurantes"
      description="Portafolio de conceptos gastronomicos y experiencias del grupo."
      items={items}
    />
  );
}
