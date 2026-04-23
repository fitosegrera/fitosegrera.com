import { getSiteUrl } from "@/lib/site";

const DESCRIPTION =
  "Sesiones de meditación y acompañamiento espiritual para reducir ansiedad, soltar el estrés y encontrar paz interior. Agenda tu sesión gratis.";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fito Segrera",
    url,
    description: DESCRIPTION,
    jobTitle: "Coach espiritual",
    knowsAbout: [
      "Meditación",
      "Mindfulness",
      "Acompañamiento espiritual",
      "Terapia somática",
      "Ansiedad",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
