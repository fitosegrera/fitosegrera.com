import type { ReactNode } from "react";
import Link from "next/link";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** Intro + outline; expand for stronger SEO. */
  children: ReactNode;
};

function ArticleShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="font-sans text-fito-body font-light text-ink/95">
      <h1 className="font-julius text-balance text-fito-title font-bold tracking-[0.08em] text-ink">
        {title}
      </h1>
      <div className="mt-10 space-y-6 sm:mt-12">
        {children}
      </div>
      <p className="mt-14 text-fito-caption text-ink/75">
        <Link
          href="/#contacto"
          className="underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          Agenda una sesión gratuita
        </Link>{" "}
        y conversamos sin compromiso.
      </p>
    </article>
  );
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-dejar-de-sobrepensar",
    title: "Cómo dejar de sobrepensar",
    description:
      "Prácticas de meditación y mindfulness para observar la mente, reducir el ruido mental y recuperar calma.",
    children: (
      <ArticleShell title="Cómo dejar de sobrepensar">
        <p>
          Sobrepensar suele sentirse como un bucle: más intentas resolverlo con
          la cabeza, más se enciende la ansiedad. Un enfoque de{" "}
          <strong>coach espiritual</strong> y <strong>mindfulness</strong> no
          trata de “ganarle” a la mente, sino de verla con claridad.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Observar sin juzgar
        </h2>
        <p>
          La invitación es notar el pensamiento cuando aparece, sin empujarlo ni
          seguirlo. Con el tiempo, el hábito de sobrepensar pierde combustible.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Anclaje en el cuerpo
        </h2>
        <p>
          Breves pausas en la respiración y en las sensaciones físicas ayudan a
          salir del túnel mental y a volver al presente.
        </p>
      </ArticleShell>
    ),
  },
  {
    slug: "como-encontrar-paz-interior",
    title: "Cómo encontrar paz interior",
    description:
      "Paz interior no es ausencia de problemas: es un contacto más honesto contigo, desde la meditación y el acompañamiento espiritual.",
    children: (
      <ArticleShell title="Cómo encontrar paz interior">
        <p>
          Muchas personas buscan <strong>paz interior</strong> como si fuera un
          logro futuro. En sesiones de <strong>meditación</strong> y
          acompañamiento, a menudo descubrimos que la calma es un espacio al que
          se vuelve, no un premio que se gana arreglando todo afuera.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Menos fuerza, más presencia
        </h2>
        <p>
          Soltar la tensión de “tener que estar bien” abre espacio para sentir lo
          que hay, sin dramatizarlo. Ahí la respiración y el cuerpo se vuelven
          aliados.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Acompañamiento 1:1
        </h2>
        <p>
          En un proceso guiado, la paz deja de ser una idea abstracta y se vuelve
          experiencia cotidiana, aunque sea en pequeños momentos al principio.
        </p>
      </ArticleShell>
    ),
  },
  {
    slug: "que-es-la-terapia-somatica",
    title: "Qué es la terapia somática",
    description:
      "Qué es la terapia somática y cómo se integra con meditación y sanación emocional para liberar estrés guardado en el cuerpo.",
    children: (
      <ArticleShell title="Qué es la terapia somática">
        <p>
          La <strong>terapia somática</strong> entiende que emociones y trauma
          no viven solo en la historia que contamos: también viven en tensión,
          postura y sensaciones. Por eso se complementa tan bien con{" "}
          <strong>mindfulness</strong> y prácticas contemplativas.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Escuchar al cuerpo
        </h2>
        <p>
          En lugar de forzar insights desde la mente, se facilita que la
          experiencia física se complete y se mueva, con seguridad y a un ritmo
          respetuoso.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Integración
        </h2>
        <p>
          El objetivo no es “sacudir” emociones a la fuerza, sino integrar lo que
          el sistema nervioso está listo para soltar.
        </p>
      </ArticleShell>
    ),
  },
  {
    slug: "como-manejar-la-ansiedad",
    title: "Cómo manejar la ansiedad",
    description:
      "Estrategias desde la meditación y el trabajo somático para reducir ansiedad, sobrepensamiento y sensación de desconexión.",
    children: (
      <ArticleShell title="Cómo manejar la ansiedad">
        <p>
          La <strong>ansiedad</strong> puede sentirse como alerta constante:
          pecho apretado, mente acelerada, anticipación del peor escenario. Un
          enfoque que combina <strong>meditación</strong>, conciencia y cuerpo
          ayuda a bajar la intensidad sin negar lo que se siente.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Regular el sistema nervioso
        </h2>
        <p>
          Respiración lenta, contacto con el entorno y micro-pausas en el día
          envían señales de seguridad al cuerpo.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Relación con los pensamientos
        </h2>
        <p>
          Ver los pensamientos como eventos pasajeros —no como órdenes— reduce la
          espiral de <strong>sobrepensamiento</strong> típica de la ansiedad.
        </p>
      </ArticleShell>
    ),
  },
  {
    slug: "no-necesitas-cambiar-para-sanar",
    title: "No necesitas cambiar para sanar",
    description:
      "Una mirada espiritual y humana: la sanación emocional puede empezar cuando dejas de tratarte como un proyecto roto.",
    children: (
      <ArticleShell title="No necesitas cambiar para sanar">
        <p>
          Mucha <strong>sanación emocional</strong> falla porque parte de la
          creencia de que hay algo fundamentalmente malo en ti. Esa presión
          activa más vergüenza y más mente analítica, no más ternura.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Curiosidad en lugar de corrección
        </h2>
        <p>
          Cuando el acompañamiento invita a sentir lo presente con curiosidad, el
          cuerpo puede soltar lo que ya no necesita cargar.
        </p>
        <h2 className="font-julius text-fito-subhead font-bold tracking-[0.1em] text-ink">
          Ser y sanar
        </h2>
        <p>
          No se trata de no cambiar nunca: se trata de no confundir sanación con
          “arreglarte”. Desde ahí, lo que es auténtico suele ordenarse solo.
        </p>
      </ArticleShell>
    ),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
