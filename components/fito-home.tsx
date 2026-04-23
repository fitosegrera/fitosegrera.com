import arcticonsMeditationTimerAndLog from "@iconify/icons-arcticons/meditation-timer-and-log";
import arcticonsMeditationassistant from "@iconify/icons-arcticons/meditationassistant";
import mdiEmailOutline from "@iconify/icons-mdi/email-outline";
import mdiWhatsapp from "@iconify/icons-mdi/whatsapp";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

import { CalBookingCta } from "@/components/cal-booking-cta";
import { FitoReveal } from "@/components/fito-reveal";
import {
  arcticonsAtomMeditation,
  arcticonsBrainOut,
  arcticonsEmojiHeartBroken,
  arcticonsLostPlaces,
} from "@/lib/arcticons-problema-icons";
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
  "font-sans text-fito-body font-light",
);

const whatsappIconInteractive = cn(
  "inline-flex rounded-full p-1 text-ink transition-[colors,transform] duration-200 ease-out",
  "hover:scale-105 hover:bg-mint/40",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2",
);

const navTextLink = cn(
  "font-sans text-fito-nav font-light tracking-wide text-ink",
  linkInteractive,
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
            <span className="font-julius text-fito-brand font-bold tracking-[0.2em]">
              FITO SEGRERA
            </span>
          </Link>
          <nav
            aria-label="Principal"
            className="flex shrink-0 items-center gap-5 sm:gap-8"
          >
            {/* <Link href="/blog" className={navTextLink}>
              Blog
            </Link> */}
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
          {/* <h1 className="font-sans mx-auto max-w-2xl text-balance text-fito-kicker font-medium text-ink">
            Meditación y acompañamiento para encontrar paz interior
          </h1> */}
          <h1 className="font-julius mx-auto mt-8 max-w-3xl text-balance text-fito-display font-medium tracking-[0.08em] text-ink sm:mt-10">
            <span className="uppercase">El arte de simplemente ser</span>
          </h1>
          <h2 className="font-sans mx-auto mt-8 max-w-5xl text-pretty text-fito-lead font-light text-ink">
            Al dejar de intentar resolver lo que crees que está mal en ti y
            descansar en lo que realmente eres, la transformación ocurre
            naturalmente.
          </h2>
          <div className="mt-12 flex justify-center">
            <CalBookingCta
              calLink={CAL_BOOKING_LINK}
              calOrigin={CAL_BOOKING_ORIGIN}
              label="Agenda una sesión gratuita"
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
        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-center gap-8 pb-16 md:items-center md:gap-8">
          <Image
            src="/fito-portrait-2.png"
            alt="Fito Segrera"
            width={240}
            height={387}
            className="h-auto w-full max-w-[min(100%,240px)] object-cover object-top"
            priority
          />
          <FitoReveal>
            <p className="text-center font-sans text-fito-kicker font-light text-ink/95">
              Hola, soy Fito. Acompaño a personas a pausar, sentir y
              re-descubrir su paz interior.
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
              <p className="font-sans text-fito-body font-light text-ink/95">
                Durante años viví en una búsqueda constante — tratando de
                entender la vida, sanar y cambiar todo lo que creía que estaba
                mal en mí.
              </p>
              <p className="font-sans text-fito-body font-light text-ink/95">
                Después de más de 20 años de meditación, de viajar por el mundo,
                vivir como monje en India y aprender de maestros y místicos,
                entendí que no había nada que arreglar… y que aquello que
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
        id="problema"
        className="relative bg-white px-5 py-16 sm:px-8 sm:py-24"
        aria-labelledby="problema-heading"
      >
        <FitoReveal>
          <h2
            id="problema-heading"
            className="font-julius text-center text-fito-section font-bold tracking-[0.12em] text-ink"
          >
            ¿TE SIENTES ASÍ?
          </h2>
        </FitoReveal>
        <div className="mx-auto mt-14 grid max-w-6xl gap-14 sm:mt-16 sm:grid-cols-4 sm:gap-x-10 sm:gap-y-14 md:mt-16 md:gap-y-16">
          <FitoReveal className="group text-center">
            <Icon
              ssr
              icon={arcticonsAtomMeditation}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <p className="font-alegreya mx-auto mt-6 max-w-xs text-pretty text-fito-prose font-light text-ink/90 sm:mt-7 md:max-w-sm">
              Ansiedad constante o mente acelerada
            </p>
          </FitoReveal>
          <FitoReveal className="group text-center" delayClass="delay-75">
            <Icon
              ssr
              icon={arcticonsLostPlaces}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <p className="font-alegreya mx-auto mt-6 max-w-xs text-pretty text-fito-prose font-light text-ink/90 sm:mt-7 md:max-w-sm">
              Sensación de estar perdido o sin propósito
            </p>
          </FitoReveal>
          <FitoReveal className="group text-center" delayClass="delay-100">
            <Icon
              ssr
              icon={arcticonsEmojiHeartBroken}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <p className="font-alegreya mx-auto mt-6 max-w-xs text-pretty text-fito-prose font-light text-ink/90 sm:mt-7 md:max-w-sm">
              Intentando sanar, pero sin encontrar resultados reales
            </p>
          </FitoReveal>
          <FitoReveal className="group text-center" delayClass="delay-150">
            <Icon
              ssr
              icon={arcticonsBrainOut}
              className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
              aria-hidden
            />
            <p className="font-alegreya mx-auto mt-6 max-w-xs text-pretty text-fito-prose font-light text-ink/90 sm:mt-7 md:max-w-sm">
              Cansado de sobrepensar y no poder parar
            </p>
          </FitoReveal>
        </div>
        <FitoReveal className="mx-auto mt-14 max-w-3xl text-center sm:mt-16 md:mt-20">
          <p className="font-sans text-fito-prose font-light text-ink/95">
            No estás solo. Y no necesitas seguir intentando arreglarte.
          </p>
        </FitoReveal>
      </section>

      <section
        id="servicios"
        className="relative bg-mint px-5 py-20 sm:px-8 sm:py-28"
        aria-labelledby="servicios-heading"
      >
        <div className="mx-auto max-w-6xl">
          <FitoReveal>
            <h2
              id="servicios-heading"
              className="font-julius mx-auto max-w-4xl text-center text-balance text-fito-section font-bold tracking-[0.12em] text-ink"
            >
              Sesiones de meditación y acompañamiento espiritual
            </h2>
          </FitoReveal>
          <FitoReveal className="mt-10 sm:mt-12 md:mt-14" delayClass="delay-75">
            <p className="font-sans mx-auto max-w-4xl text-center text-fito-body font-light text-ink/95">
              Trabajo contigo en sesiones 1:1, con un enfoque de meditación,
              conciencia y trabajo somático. Según lo que estés atravesando,
              podemos explorar temas como:
            </p>
          </FitoReveal>

          {/* <FitoReveal
            className="mt-14 sm:mt-16 md:mt-20"
            delayClass="delay-100"
          >
            <h3
              id="como-ayudar-heading"
              className="font-julius text-center text-fito-subhead font-bold tracking-[0.12em] text-ink sm:text-fito-body"
            >
              ¿CÓMO PUEDO AYUDARTE?
            </h3>
          </FitoReveal> */}
          <div className="mx-auto mt-10 grid max-w-7xl gap-12 sm:mt-12 md:mt-14 md:grid-cols-3 md:gap-10">
            <FitoReveal className="group text-center">
              <div
                className={cn(
                  "group flex h-full min-h-36 flex-col items-center justify-center rounded-2xl border-2 border-ink/18 bg-white/55 px-5 py-7 text-center text-pretty transition-[border-color,background-color] duration-200 sm:min-h-40 sm:px-7 sm:py-8",
                  "hover:border-ink/35 hover:bg-white/85",
                )}
              >
                <Icon
                  ssr
                  icon={arcticonsMindSpace}
                  className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
                  aria-hidden
                />
                <h4 className="font-julius mt-6 text-balance text-fito-body font-bold tracking-[0.12em] text-ink">
                  Reducir ansiedad y ruido mental
                </h4>
                <p className="font-alegreya mx-auto mt-2 max-w-xs text-pretty text-fito-prose font-light text-ink/90">
                  Aprender a observar la mente sin quedar atrapado en ella.
                </p>
              </div>
            </FitoReveal>
            <FitoReveal className="group text-center" delayClass="delay-75">
              <div
                className={cn(
                  "group flex h-full min-h-36 flex-col items-center justify-center rounded-2xl border-2 border-ink/18 bg-white/55 px-5 py-7 text-center text-pretty transition-[border-color,background-color] duration-200 sm:min-h-40 sm:px-7 sm:py-8",
                  "hover:border-ink/35 hover:bg-white/85",
                )}
              >
                <Icon
                  ssr
                  icon={arcticonsMeditationTimerAndLog}
                  className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
                  aria-hidden
                />
                <h4 className="font-julius mt-6 text-balance text-fito-body font-bold tracking-[0.12em] text-ink">
                  Procesar emociones sin esfuerzo
                </h4>
                <p className="font-alegreya mx-auto mt-2 max-w-xs text-pretty text-fito-prose font-light text-ink/90">
                  Sentir y liberar emociones desde el cuerpo, sin forzar ni
                  analizar.
                </p>
              </div>
            </FitoReveal>
            <FitoReveal className="group text-center" delayClass="delay-150">
              <div
                className={cn(
                  "group flex h-full min-h-36 flex-col items-center justify-center rounded-2xl border-2 border-ink/18 bg-white/55 px-5 py-7 text-center text-pretty transition-[border-color,background-color] duration-200 sm:min-h-40 sm:px-7 sm:py-8",
                  "hover:border-ink/35 hover:bg-white/85",
                )}
              >
                <Icon
                  ssr
                  icon={arcticonsMeditationassistant}
                  className="mx-auto size-18 text-ink/75 transition-transform duration-300 ease-out group-hover:scale-[1.04] group-hover:text-ink/90"
                  aria-hidden
                />
                <h4 className="font-julius mx-auto mt-6 max-w-xs text-balance text-fito-body font-bold tracking-[0.12em] text-ink">
                  Encontrar paz interior
                </h4>
                <p className="font-alegreya mx-auto mt-2 max-w-xs text-pretty text-fito-prose font-light text-ink/90">
                  Descubrir un estado de calma que no depende de cambiar nada.
                </p>
              </div>
            </FitoReveal>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="border-t border-ink/10 bg-white px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <FitoReveal>
            <div className="mx-auto max-w-5xl text-center">
              <h2 className="font-julius text-fito-section font-bold tracking-[0.12em] text-ink">
                Agenda una conversación gratuita
              </h2>
              <p className="font-sans mt-8 text-fito-prose font-light text-ink">
                ¿Te sientes perdido o estancado? Si algo en ti está buscando
                claridad o paz interior, podemos conversar.
              </p>
            </div>
          </FitoReveal>
          <FitoReveal
            className="mt-10 grid gap-10 sm:mt-14 sm:gap-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-24"
            delayClass="delay-100"
          >
            <div className="mt-0 text-left sm:mt-8">
              <p className="font-sans text-fito-body font-light text-ink/95">
                En esta sesión de 30 minutos:
              </p>
              <ul className="font-sans mt-5 text-fito-body font-light text-ink/90 sm:mt-6">
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>Aclaramos qué estás viviendo</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>Resolvemos tus dudas</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink/35" />
                  <span>Exploramos cómo puedo acompañarte</span>
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
              <p className="font-sans text-fito-body font-light text-ink/95">
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
        <FitoReveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-8">
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
            <span className="font-julius text-fito-brand font-bold tracking-[0.2em]">
              FITO SEGRERA
            </span>
          </Link>
          <div className="flex items-center gap-6 sm:gap-8">
            {/* <Link href="/blog" className={navTextLink}>
              Blog
            </Link> */}
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
          </div>
        </FitoReveal>
      </footer>
    </div>
  );
}
