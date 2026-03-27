import { MediaSlot } from "@/components/media-slot";
import { getItemHref, type WebsiteItem } from "@/lib/content";

type ItemCardProps = {
  item: WebsiteItem;
  mediaLabel: string;
};

export function ItemCard({ item, mediaLabel }: ItemCardProps) {
  const href = getItemHref(item);
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <article className="card">
      <div className="card-media">
        <MediaSlot
          label={mediaLabel}
          mediaUrl={item.video_url ?? item.image_url}
          mediaType={item.video_url ? "video" : "image"}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{item.title}</h3>
        {item.location || item.schedule_text ? (
          <p className="card-meta">{[item.location, item.schedule_text].filter(Boolean).join(" · ")}</p>
        ) : null}
        <p className="card-description">{item.excerpt ?? "Completa este bloque desde VISO."}</p>
        <a
          className="card-action"
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noreferrer noopener" : undefined}
        >
          {item.action_label ?? "Ver mas"}
        </a>
      </div>
    </article>
  );
}
