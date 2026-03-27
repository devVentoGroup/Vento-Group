import Link from "next/link";

import { ItemCard } from "@/components/item-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getItemHref, type WebsiteItem } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

type CategoryPageProps = {
  title: string;
  description: string;
  items: WebsiteItem[];
  backLabel?: string;
};

export function CategoryPage({ title, description, items, backLabel = "Volver al inicio" }: CategoryPageProps) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    description,
    itemListElement: items.slice(0, 20).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(getItemHref(item)),
    })),
  };

  return (
    <>
      <StructuredData data={itemListSchema} />
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="container hero-panel">
            <div className="eyebrow">Vento Group</div>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-copy">{description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/">
                {backLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cards">
              {items.map((item) => (
                <ItemCard key={item.id} item={item} mediaLabel={`${title} ${item.title}`} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
