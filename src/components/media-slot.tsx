type MediaSlotProps = {
  label: string;
  mediaUrl: string | null;
  mediaType?: "image" | "video" | null;
  className?: string;
};

export function MediaSlot({ label, mediaUrl, mediaType, className }: MediaSlotProps) {
  const type = mediaType ?? inferMediaType(mediaUrl);

  if (!mediaUrl) {
    return (
      <div className={`media-shell ${className ?? ""}`}>
        <div className="placeholder">{label} · media pendiente</div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <div className={`media-shell ${className ?? ""}`}>
        <video className="media" src={mediaUrl} autoPlay muted loop playsInline controls={false} />
      </div>
    );
  }

  return (
    <div className={`media-shell ${className ?? ""}`}>
      <img className="media" src={mediaUrl} alt={label} loading="lazy" />
    </div>
  );
}

function inferMediaType(mediaUrl: string | null): "image" | "video" {
  if (!mediaUrl) {
    return "image";
  }

  const lowered = mediaUrl.toLowerCase();

  if (
    lowered.endsWith(".mp4") ||
    lowered.endsWith(".webm") ||
    lowered.endsWith(".mov") ||
    lowered.includes("/video/")
  ) {
    return "video";
  }

  return "image";
}
