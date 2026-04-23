import arcticonsMeditationTimerAndLog from "@iconify/icons-arcticons/meditation-timer-and-log";
import arcticonsMeditationassistant from "@iconify/icons-arcticons/meditationassistant";
import mdiEmailOutline from "@iconify/icons-mdi/email-outline";
import mdiWhatsapp from "@iconify/icons-mdi/whatsapp";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import { CalBookingCta } from "@/components/cal-booking-cta";
import { FitoReveal } from "@/components/fito-reveal";
import { cn } from "@/lib/utils";

/** E.164 without +: Colombia (+57) 314 7668729. */
const WHATSAPP_PHONE_E164 = "573147668729";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_PHONE_E164}`;
const WHATSAPP_LABEL = "(+57) 314 766 8729";
const EMAIL = "fitosegrera@gmail.com";

const CAL_BOOKING_LINK = process.env.NEXT_PUBLIC_CAL_LINK?.trim() ?? "";
const CAL_BOOKING_ORIGIN =
  process.env.NEXT_PUBLIC_CAL_ORIGIN?.trim() || undefined;

/** `arcticons:mind-space` — not yet in `@iconify/icons-arcticons@1.2.77`; synced from Iconify API. */
const arcticonsMindSpace = {
  width: 48,
  height: 48,
  body: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.777 12.748c-3.017.461-6.377 3.823-6.839 6.839c-.02.103-.176.103-.195 0c-.461-3.015-3.822-6.378-6.839-6.839c-.103-.02-.103-.176 0-.195c3.017-.462 6.378-3.822 6.839-6.84c.02-.103.176-.103.195 0c.462 3.018 3.822 6.379 6.84 6.84c.103.02.102.176 0 .195m-.284 8.39c.066 6.58-2.899 11.98-10.038 14.242c-.936.297-1.341 1.396-.797 2.213L34.92 42.5m-17.074-.357c-.643-4.358-2.784-6.317-4.501-7.109c-2.457-1.132-7.645-1.214-8.145-3.93s2.608-7.787 2.608-7.787c-3.93-3.644-1.93-5.787 4-8.43c2.43-6.93 5.71-10.106 17.019-9.25"/>',
};

/** Taller strip (72u): slightly larger swell than the original 56u art. */
const WAVE_FILL_D =
  "M0 36c120-23 240-23 360 0s240 23 360 0s240-23 360 0s240 23 360 0v36H0V36Z";

/** One stroked subpath for 0–2880u (two periods chained with `c`) so the seam is not doubled. */
const WAVE_LINE_D =
  "M0 45c160-22 320-22 480 0s320 22 480 0s320-22 480 0s160 22 320 0c160-22 320-22 480 0s320 22 480 0s320-22 480 0s160 22 320 0";

function SectionWave() {
  return (
    <div className="relative -mb-px h-20 w-full overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 block h-20 w-[200%]"
        viewBox="0 0 2880 72"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <g className="fito-wave-slide-fill">
          <path d={WAVE_FILL_D} fill="currentColor" className="text-mint" />
          <g transform="translate(1440 0)">
            <path d={WAVE_FILL_D} fill="currentColor" className="text-mint" />
          </g>
        </g>
        <g className="fito-wave-slide-line pointer-events-none">
          <path
            d={WAVE_LINE_D}
            fill="none"
            stroke="currentColor"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeWidth={1.2}
            vectorEffect="nonScalingStroke"
            className="text-ink/45"
          />
        </g>
      </svg>
    </div>
  );
}

function PortraitClipDefs() {
  return (
    <svg width={0} height={0} className="absolute" aria-hidden>
      <defs>
        <clipPath id="fito-portrait-clip" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.78 C0.82,0.9 0.62,0.82 0.5,0.88 C0.38,0.94 0.18,0.86 0,0.9 V0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const linkInteractive = cn(
  "transition-[colors,transform,opacity] duration-200 ease-out",
  "hover:-translate-y-px hover:opacity-80",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2",
);

const contactChannelLink = cn(
  linkInteractive,
  "font-sans text-lg font-light sm:text-xl md:text-2xl",
);

const whatsappIconInteractive = cn(
  "inline-flex rounded-full p-1 text-ink transition-[colors,transform] duration-200 ease-out",
  "hover:scale-105 hover:bg-mint/40",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2",
);

export function FitoHome() {
  return (
    <div className="min-w-0 overflow-x-clip text-ink">
      <header className="relative overflow-hidden bg-white">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-7 sm:px-8">
          <Link
            href="/"
            className={cn("flex items-center gap-3 text-ink", linkInteractive)}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={31}
              height={38}
              className="block h-9 w-auto shrink-0"
              priority
              aria-hidden
            />
            <span className="font-julius text-sm font-bold tracking-[0.2em] sm:text-xl">
              FITO SEGRERA
            </span>
          </Link>
          <nav aria-label="WhatsApp">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={whatsappIconInteractive}
              aria-label="Escribir por WhatsApp"
            >
              <Icon ssr icon={mdiWhatsapp} className="size-10" aria-hidden />
            </a>
          </nav>
        </div>
      </header>

      <section className="relative bg-white px-5 pb-10 pt-4 sm:px-8 sm:pb-14 sm:pt-16">
        <div className="fito-hero-stagger relative mx-auto max-w-5xl text-center">
          <h1 className="font-julius mx-auto max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[0.08em] text-ink sm:text-4xl md:text-6xl md:leading-[1.12] lg:text-7xl">
            EL ARTE DE SIMPLEMENTE SER
          </h1>
          <p className="font-sans mx-auto mt-8 max-w-5xl text-pretty text-base font-light leading-snug text-ink sm:text-lg md:text-xl lg:text-[24px] lg:leading-tight">
            Al dejar de intentar resolver lo que crees que está mal en ti y
            descansas en lo que realmente eres, la transformación ocurre
            naturalmente.
          </p>
          <div className="mt-12 flex justify-center">
            <CalBookingCta
              calLink={CAL_BOOKING_LINK}
              calOrigin={CAL_BOOKING_ORIGIN}
            />
          </div>
        </div>
      </section>

      <SectionWave />

      <section
        id="bienvenida"
        className="relative bg-mint px-5 pt-12 sm:px-8 sm:pb-20 sm:pt-16"
      >
        <PortraitClipDefs />
        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center gap-8 pb-16 md:items-center md:gap-8">
          <Image
            src="/fito-portrait-2.png"
            alt="Fito Segrera"
            width={240}
            height={387}
            className="h-auto w-full max-w-[min(100%,240px)] object-cover object-top"
            priority
          />
          <FitoReveal>
            <p className="text-center text-3xl font-light leading-tight text-ink/95 sm:text-4xl md:text-[40px]">
              Hola, soy Fito. Acompaño a personas a pausar, sentir y descubrir
              su paz interior.
            </p>
          </FitoReveal>
        </div>
      </section>

      <section
        id="historia"
        className="relative bg-white px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <FitoReveal className="min-w-0">
            <Image
              src="/meditation.png"
              alt="Fito Segrera"
              width={520}
              height={387}
              className="h-auto w-full object-cover object-top opacity-80"
              priority
            />
          </FitoReveal>
          <FitoReveal className="min-w-0" delayClass="delay-100">
            <div className="flex flex-col items-start gap-8 text-left">
              <p className="text-lg font-light leading-snug text-ink/95 sm:text-xl md:text-2xl md:leading-tight">
                Durante años viví en una búsqueda constante — tratando de
                entender la vida, encontrar mi propósito, sanar y cambiar todo
                lo que creía que estaba mal en mí.
              </p>
              <p className="text-lg font-light leading-snug text-ink/95 sm:text-xl md:text-2xl md:leading-tight">
                Después de más de 20 años de meditación, de viajar por el mundo,
                vivir como monje en India y aprender de maestros y místicos,
                entendí que no había nada que arreglar, y que aquello que
                buscaba siempre había estado aquí.
              </p>
              <div className="mt-4 flex justify-start">
                <CalBookingCta
                  calLink={CAL_BOOKING_LINK}
                  calOrigin={CAL_BOOKING_ORIGIN}
                />
              </div>
            </div>
          </FitoReveal>
        </div>
      </section>

      <section
        className="relative bg-mint px-5 py-16 sm:px-8 sm:py-24"
        aria-labelledby="como-ayudar-heading"
      >
        <FitoReveal>
          <h2
            id="como-ayudar-heading"
            className="font-julius text-center text-2xl font-bold tracking-[0.12em] text-ink sm:text-3xl md:text-4xl"
          >
            ¿CÓMO PUEDO AYUDAR?
          </h2>
        </FitoReveal>
        <div className="mx-auto mt-14 grid max-w-6xl gap-14 md:mt-16 md:grid-cols-3 md:gap-10">
          <FitoReveal className="group text-center">
            <Icon
              ssr
              icon={arcticonsMindSpace}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <h3 className="font-julius font-bold mt-6 text-2xl tracking-[0.18em] text-ink">
              MENTE
            </h3>
            <p className="font-alegreya mx-auto mt-4 max-w-xs text-pretty text-xl font-light leading-tight text-ink/90">
              Liberar el ruido mental, el estrés y el conflicto contigo mismo.
            </p>
          </FitoReveal>
          <FitoReveal className="group text-center" delayClass="delay-75">
            <Icon
              ssr
              icon={arcticonsMeditationTimerAndLog}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <h3 className="font-julius font-bold mt-6 text-2xl tracking-[0.18em] text-ink">
              CUERPO
            </h3>
            <p className="font-alegreya mx-auto mt-4 max-w-xs text-pretty text-xl font-light leading-tight text-ink/90">
              Sentir y procesar emociones de manera segura y sin esfuerzo.
            </p>
          </FitoReveal>
          <FitoReveal className="group text-center" delayClass="delay-150">
            <Icon
              ssr
              icon={arcticonsMeditationassistant}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <h3 className="font-julius font-bold mt-6 text-2xl tracking-[0.18em] text-ink">
              CONCIENCIA
            </h3>
            <p className="font-alegreya mx-auto mt-4 max-w-xs text-pretty text-xl font-light leading-tight text-ink/90">
              Descubrir tu verdadera naturaleza y el sentido más profundo de la
              vida.
            </p>
          </FitoReveal>
        </div>
      </section>

      <section id="contacto" className="bg-white px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <FitoReveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className="font-sans text-2xl font-light leading-tight text-ink sm:text-3xl md:text-4xl lg:text-5xl">
                ¿Te sientes perdido o estancado?
              </p>
              <p className="font-sans mt-4 font-light leading-tight text-ink/90 sm:mt-5 sm:text-3xl md:text-4xl lg:text-5xl">
                Si algo en ti está buscando más claridad o bienestar, me
                encantaría conversar contigo.
              </p>
            </div>
          </FitoReveal>
          <FitoReveal
            className="mt-10 grid gap-10 sm:mt-14 sm:gap-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-24"
            delayClass="delay-100"
          >
            <div className="mt-0 text-left sm:mt-8">
              <p className="font-sans text-lg font-light leading-relaxed text-ink/95 sm:text-xl md:text-2xl">
                Agenda una charla gratuita de 30 minutos para:
              </p>
              <ul className="font-sans mt-5 text-base font-light leading-snug text-ink/90 sm:mt-6 sm:text-lg md:text-xl md:leading-relaxed">
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>
                    Aclarar qué estás viviendo y hacia dónde quieres ir.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>Conocer mi enfoque y hacer cualquier pregunta.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>
                    Explorar cómo puedo acompañarte con sesiones y herramientas.
                  </span>
                </li>
              </ul>
              <div className="mt-10">
                <CalBookingCta
                  calLink={CAL_BOOKING_LINK}
                  calOrigin={CAL_BOOKING_ORIGIN}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 font-sans font-light text-ink/95 sm:mt-8 md:pt-1">
              <p className="text-2xl font-light leading-tight text-ink/95">
                Escribime por WhatsApp o correo electrónico
              </p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex min-h-11 items-center gap-3 text-ink",
                  contactChannelLink,
                )}
              >
                <Icon
                  ssr
                  icon={mdiWhatsapp}
                  className="size-8 shrink-0 text-ink transition-transform duration-200 ease-out group-hover:scale-105"
                  aria-hidden
                />
                <span>{WHATSAPP_LABEL}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className={cn(
                  "group inline-flex min-h-11 items-center gap-3 break-all text-ink",
                  contactChannelLink,
                )}
              >
                <Icon
                  ssr
                  icon={mdiEmailOutline}
                  className="size-8 shrink-0 text-ink transition-transform duration-200 ease-out group-hover:scale-105"
                  aria-hidden
                />
                <span>{EMAIL}</span>
              </a>
            </div>
          </FitoReveal>
        </div>
      </section>

      <footer className="border-t border-ink/15 bg-white">
        <FitoReveal className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-8 sm:px-8">
          <Link
            href="/"
            className={cn("flex items-center gap-3 text-ink", linkInteractive)}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={28}
              height={34}
              className="block h-8 w-auto shrink-0"
              aria-hidden
            />
            <span className="font-julius text-sm font-bold tracking-[0.2em] sm:text-base">
              FITO SEGRERA
            </span>
          </Link>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(whatsappIconInteractive, "shrink-0")}
            aria-label="Escribir por WhatsApp"
          >
            <Icon
              ssr
              icon={mdiWhatsapp}
              className="size-9 sm:size-10"
              aria-hidden
            />
          </a>
        </FitoReveal>
      </footer>
    </div>
  );
}
