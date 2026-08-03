"use client";

import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

import styles from "./route-transition.module.css";

type RouteTransitionProps = {
  children: ReactNode;
};

type TransitionPhase = "idle" | "covering" | "revealing";

function getInternalUrl(target: EventTarget | null): URL | null {
  if (!(target instanceof Element)) return null;
  const anchor = target.closest<HTMLAnchorElement>("a[href]");
  if (!anchor || anchor.hasAttribute("download") || anchor.target === "_blank") return null;
  if (anchor.dataset.noTransition === "true") return null;

  const rawHref = anchor.getAttribute("href");
  if (!rawHref || rawHref.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(rawHref)) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;
  return url;
}

export function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const phaseRef = useRef<TransitionPhase>("idle");
  const navigationTimerRef = useRef<number | null>(null);
  const revealTimerRef = useRef<number | null>(null);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    const clearTimers = () => {
      if (navigationTimerRef.current !== null) window.clearTimeout(navigationTimerRef.current);
      if (revealTimerRef.current !== null) window.clearTimeout(revealTimerRef.current);
      navigationTimerRef.current = null;
      revealTimerRef.current = null;
    };

    const beginNavigation = (url: URL) => {
      if (phaseRef.current !== "idle") return;
      clearTimers();
      phaseRef.current = "covering";
      setPhase("covering");
      navigationTimerRef.current = window.setTimeout(() => {
        router.push(`${url.pathname}${url.search}${url.hash}`);
      }, 240);
    };

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const url = getInternalUrl(event.target);
      if (!url) return;
      event.preventDefault();
      event.stopPropagation();
      beginNavigation(url);
    };

    const onNavigationIntent = (event: Event) => {
      const url = getInternalUrl(event.target);
      if (!url) return;
      router.prefetch(`${url.pathname}${url.search}`);
    };

    document.addEventListener("click", onDocumentClick, true);
    document.addEventListener("pointerover", onNavigationIntent, true);
    document.addEventListener("focusin", onNavigationIntent, true);

    return () => {
      clearTimers();
      document.removeEventListener("click", onDocumentClick, true);
      document.removeEventListener("pointerover", onNavigationIntent, true);
      document.removeEventListener("focusin", onNavigationIntent, true);
    };
  }, [router]);

  useEffect(() => {
    if (phaseRef.current === "idle") return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        phaseRef.current = "revealing";
        setPhase("revealing");
        revealTimerRef.current = window.setTimeout(() => {
          phaseRef.current = "idle";
          setPhase("idle");
          revealTimerRef.current = null;
        }, 560);
      });
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [pathname]);

  return (
    <>
      <div key={pathname} className={styles.pageFrame}>
        {children}
      </div>
      <div
        className={`${styles.transitionLayer} ${phase === "covering" ? styles.covering : ""} ${phase === "revealing" ? styles.revealing : ""}`.trim()}
        aria-hidden="true"
      >
        <span className={styles.transitionMark}>
          <span>V</span>
          <span>G</span>
        </span>
        <span className={styles.transitionLine} />
      </div>
    </>
  );
}
