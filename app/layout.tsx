import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Geist, Geist_Mono, Julius_Sans_One } from "next/font/google";

import { CalEmbedInit } from "@/components/cal-embed-init";
import { SiteJsonLd } from "@/components/site-json-ld";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const juliusSansOne = Julius_Sans_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-julius-stack",
});

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-stack",
});

const SITE_TITLE = "Coach espiritual y meditación | Fito Segrera";
const SITE_DESCRIPTION =
  "Sesiones de meditación y acompañamiento espiritual para reducir ansiedad, soltar el estrés y encontrar paz interior. Agenda tu sesión gratis.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "Fito Segrera",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK?.trim();
  const calOrigin = process.env.NEXT_PUBLIC_CAL_ORIGIN?.trim() || "https://cal.com";

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${juliusSansOne.variable} ${alegreyaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        {calLink ? <CalEmbedInit calOrigin={calOrigin} /> : null}
        {children}
      </body>
    </html>
  );
}
