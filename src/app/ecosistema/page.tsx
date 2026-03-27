import type { Metadata } from "next";

import { CategoryPage } from "@/components/category-page";
import { getItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ecosistema | Vento Group",
  description: "Descarga Vento Pass, Anima y conecta con Vento OS desde la página central.",
  alternates: { canonical: "/ecosistema" },
  openGraph: {
    title: "Ecosistema | Vento Group",
    description: "Descarga Vento Pass, Anima y conecta con Vento OS desde la página central.",
    url: "/ecosistema",
    type: "website",
  },
};

export default async function EcosistemaPage() {
  const items = await getItems("app");

  return (
    <CategoryPage
      title="Ecosistema"
      description="Descarga Vento Pass, Anima y conecta con Vento OS desde la pagina central."
      items={items}
    />
  );
}
