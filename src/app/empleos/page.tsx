import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { getItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empleos | Vento Group",
  description: "Vacantes y oportunidades laborales dentro del ecosistema Vento Group.",
  alternates: { canonical: "/empleos" },
  openGraph: {
    title: "Empleos | Vento Group",
    description: "Vacantes y oportunidades laborales dentro del ecosistema Vento Group.",
    url: "/empleos",
    type: "website",
  },
};

export default async function EmpleosPage() {
  const items = await getItems("job");

  return (
    <CategoryPage
      title="Empleos"
      description="Vacantes activas para talento operativo, administrativo y estrategico."
      items={items}
    />
  );
}
