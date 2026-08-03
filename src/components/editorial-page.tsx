import Link from "next/link";
import type { ReactNode } from "react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";

import styles from "./editorial-page.module.css";

export type EditorialAction = {
  label: string;
  href: string;
};

type EditorialPageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  mediaUrl: string | null;
  mediaType?: "image" | "video" | null;
  primaryAction?: EditorialAction;
  secondaryAction?: EditorialAction;
  mediaLabel?: string;
  scrollLabel?: string;
};

type EditorialIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  action?: EditorialAction;
  aside?: ReactNode;
};

type EditorialMediaBandProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  mediaUrl: string | null;
  mediaType?: "image" | "video" | null;
  action?: EditorialAction;
  mediaLabel?: string;
};

type EditorialClosingProps = {
  eyebrow: string;
  title: string;
  copy: string;
  actions: EditorialAction[];
  dark?: boolean;
};

type EditorialSectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  action?: EditorialAction;
};

function ActionLink({ action, className }: { action: EditorialAction; className: string }) {
  if (/^(?:mailto:|tel:|https?:\/\/)/i.test(action.href)) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href}>
      {action.label}
    </Link>
  );
}

export function EditorialPageHero({
  eyebrow,
  title,
  copy,
  mediaUrl,
  mediaType,
  primaryAction,
  secondaryAction,
  mediaLabel = title,
  scrollLabel = "Descubre más",
}: EditorialPageHeroProps) {
  return (
    <section className={styles.hero} data-header-theme="dark">
      <div className={styles.heroMedia} aria-hidden="true">
        <MediaSlot label={mediaLabel} mediaUrl={mediaUrl} mediaType={mediaType} />
      </div>
      <div className={styles.heroShade} aria-hidden="true" />

      <div className={styles.shell}>
        <Reveal className={styles.heroContent} mode="once" threshold={0.08}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <div className={styles.heroFooter}>
            <p>{copy}</p>
            {(primaryAction || secondaryAction) && (
              <div className={styles.heroActions}>
                {primaryAction ? <ActionLink action={primaryAction} className={styles.primaryLink} /> : null}
                {secondaryAction ? <ActionLink action={secondaryAction} className={styles.secondaryLink} /> : null}
              </div>
            )}
          </div>
        </Reveal>

        <span className={styles.scrollCue} aria-hidden="true">
          {scrollLabel}
        </span>
      </div>
    </section>
  );
}

export function EditorialIntro({ eyebrow, title, copy, action, aside }: EditorialIntroProps) {
  return (
    <section className={styles.intro} data-header-theme="light">
      <div className={`${styles.shell} ${styles.introGrid}`}>
        <Reveal mode="once" threshold={0.15}>
          <span className={styles.eyebrow}>{eyebrow}</span>
        </Reveal>

        <Reveal className={styles.introMain} delayMs={90} mode="once" threshold={0.15}>
          <h2>{title}</h2>
          <div className={styles.introCopyRow}>
            <p>{copy}</p>
            {action ? <ActionLink action={action} className={styles.textLink} /> : null}
          </div>
        </Reveal>

        {aside ? (
          <Reveal className={styles.introAside} delayMs={150} mode="once" threshold={0.15}>
            {aside}
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

export function EditorialSectionHeading({ eyebrow, title, copy, action }: EditorialSectionHeadingProps) {
  return (
    <div className={styles.sectionHeading}>
      <Reveal mode="once" threshold={0.15}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>
      {(copy || action) && (
        <Reveal className={styles.sectionHeadingAside} delayMs={90} mode="once" threshold={0.15}>
          {copy ? <p>{copy}</p> : null}
          {action ? <ActionLink action={action} className={styles.textLink} /> : null}
        </Reveal>
      )}
    </div>
  );
}

export function EditorialMediaBand({
  eyebrow,
  title,
  copy,
  mediaUrl,
  mediaType,
  action,
  mediaLabel = title,
}: EditorialMediaBandProps) {
  return (
    <section className={styles.mediaBand} data-header-theme="dark">
      <div className={styles.mediaBandMedia} aria-hidden="true">
        <MediaSlot label={mediaLabel} mediaUrl={mediaUrl} mediaType={mediaType} />
      </div>
      <div className={styles.mediaBandShade} aria-hidden="true" />

      <div className={`${styles.shell} ${styles.mediaBandContent}`}>
        <Reveal mode="once" threshold={0.1}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
        </Reveal>

        {(copy || action) && (
          <Reveal className={styles.mediaBandAside} delayMs={100} mode="once" threshold={0.1}>
            {copy ? <p>{copy}</p> : null}
            {action ? <ActionLink action={action} className={styles.lightLink} /> : null}
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function EditorialClosing({ eyebrow, title, copy, actions, dark = false }: EditorialClosingProps) {
  return (
    <section
      className={`${styles.closing} ${dark ? styles.closingDark : ""}`.trim()}
      data-header-theme={dark ? "dark" : "light"}
    >
      <div className={styles.shell}>
        <Reveal mode="once" threshold={0.14}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
          <div className={styles.closingActions}>
            {actions.map((action) => (
              <ActionLink
                key={`${action.label}-${action.href}`}
                action={action}
                className={dark ? styles.lightLink : styles.textLink}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
