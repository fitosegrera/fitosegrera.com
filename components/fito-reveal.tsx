"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealSnapshot =
  | { phase: "hidden"; reduced: false }
  | { phase: "shown"; reduced: boolean };

const enterMotion = cn(
  "animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both",
);

type FitoRevealProps = {
  children: ReactNode;
  className?: string;
  /** e.g. `delay-75`, `delay-150` for staggered children */
  delayClass?: string;
};

/**
 * Scroll-triggered entrance using `tw-animate-css`. Skips motion when
 * `prefers-reduced-motion: reduce`. Uses layout effect + in-view sync check to
 * avoid a flash of hidden content for elements already on screen.
 */
export function FitoReveal({ children, className, delayClass }: FitoRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState<RevealSnapshot | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Mount-time viewport / a11y gate (external); IO path updates state from observer callback. */
    /* eslint-disable react-hooks/set-state-in-effect */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReveal({ phase: "shown", reduced: true });
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const inView =
      rect.top < vh * 0.9 && rect.bottom > -Math.min(48, vh * 0.05);
    if (inView) {
      setReveal({ phase: "shown", reduced: false });
      return;
    }

    setReveal({ phase: "hidden", reduced: false });
    /* eslint-enable react-hooks/set-state-in-effect */

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            io.disconnect();
            setReveal({ phase: "shown", reduced: false });
            break;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = reveal?.phase === "hidden";
  const showMotion = reveal?.phase === "shown" && !reveal.reduced;

  return (
    <div
      ref={ref}
      className={cn(
        className,
        hidden && "translate-y-3 opacity-0",
        showMotion && cn(enterMotion, delayClass),
      )}
    >
      {children}
    </div>
  );
}
