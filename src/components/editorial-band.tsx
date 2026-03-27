import Link from "next/link";

import { MediaSlot } from "@/components/media-slot";
import type { EditorialBand } from "@/lib/content";

type EditorialBandProps = {
  band: EditorialBand;
  reverse?: boolean;
};

export function HomeEditorialBand({ band, reverse = false }: EditorialBandProps) {
  return (
    <article className={`editorial-band ${reverse ? "editorial-band-reverse" : ""}`}>
      <div className="editorial-band-media">
        <MediaSlot
          label={band.title ?? "Editorial media"}
          mediaUrl={band.mediaUrl}
          mediaType={band.mediaType}
        />
      </div>
      <div className="editorial-band-body">
        {band.subtitle ? <div className="eyebrow">{band.subtitle}</div> : null}
        <h3 className="editorial-band-title">{band.title ?? "Editorial section"}</h3>
        {band.body ? <p className="editorial-band-copy">{band.body}</p> : null}
        {band.ctaLabel && band.ctaUrl ? (
          <Link className="button button-primary" href={band.ctaUrl}>
            {band.ctaLabel}
          </Link>
        ) : null}
      </div>
    </article>
  );
}
