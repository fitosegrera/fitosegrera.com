"use client";

import solarMeditationRoundOutline from "@iconify/icons-solar/meditation-round-outline";
import { Icon } from "@iconify/react";

import { cn } from "@/lib/utils";

/**
 * Set `NEXT_PUBLIC_CAL_LINK` in `.env.local` to your Cal event path (e.g.
 * `username/30min`). Optional: `NEXT_PUBLIC_CAL_ORIGIN` for self-hosted Cal
 * (defaults to `https://cal.com` in the embed init).
 */

/** Same pill styles as the main landing CTA in `fito-home.tsx`. */
const ctaClassName = cn(
  "inline-flex w-full max-w-[min(100%,24rem)] flex-wrap items-center justify-center gap-2.5 text-balance rounded-full bg-ink px-6 py-3.5 text-center sm:w-auto sm:max-w-none sm:gap-3 sm:px-12 sm:py-4",
  "font-sans text-fito-cta font-light tracking-wide text-white",
  "shadow-[0_0_0_1.5px_rgba(255,255,255,0.92),0_0_0_4px_rgba(255,255,255,0.1)]",
  "transition-[colors,transform,box-shadow] duration-200 ease-out",
  "hover:scale-[1.01] hover:bg-ink/90 hover:shadow-[0_0_0_1.5px_rgba(255,255,255,0.85),0_0_0_4px_rgba(255,255,255,0.12)]",
  "active:scale-[0.98]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
);

export type CalBookingCtaProps = {
  className?: string;
  /** Cal path after hostname, e.g. `username/event-slug`. Empty → `#contacto`. */
  calLink: string;
  /** When set, forwarded as `data-cal-origin` for self-hosted Cal. */
  calOrigin?: string;
  /** Button / link label. Defaults to “Agendar sesión gratis”. */
  label?: string;
};

const DEFAULT_CTA_LABEL = "Agendar sesión gratis";

export function CalBookingCta({
  className,
  calLink,
  calOrigin,
  label = DEFAULT_CTA_LABEL,
}: CalBookingCtaProps) {
  const link = calLink.trim();
  if (!link) {
    return (
      <a href="#contacto" className={cn(ctaClassName, className)}>
        <Icon
          ssr
          icon={solarMeditationRoundOutline}
          className="size-7 shrink-0 text-white sm:size-8"
          aria-hidden
        />
        <span>{label}</span>
      </a>
    );
  }

  const origin = calOrigin?.trim();

  return (
    <button
      type="button"
      className={cn(ctaClassName, className)}
      data-cal-link={link}
      {...(origin ? { "data-cal-origin": origin } : {})}
    >
      <Icon
        ssr
        icon={solarMeditationRoundOutline}
        className="size-7 shrink-0 text-white sm:size-8"
        aria-hidden
      />
      <span>{label}</span>
    </button>
  );
}
