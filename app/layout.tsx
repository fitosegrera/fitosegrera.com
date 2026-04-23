import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Geist, Geist_Mono, Julius_Sans_One } from "next/font/google";

import { CalEmbedInit } from "@/components/cal-embed-init";
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

export const metadata: Metadata = {
  title: "Fito Segrera",
  description:
    "Facilito espacios para pausar, sentir y permitir que algo profundo en ti se transforme.",
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
        {calLink ? <CalEmbedInit calOrigin={calOrigin} /> : null}
        {children}
      </body>
    </html>
  );
}
