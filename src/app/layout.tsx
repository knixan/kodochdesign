import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LocalizationProvider } from "@/locales";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodochdesign.se"),
  title: {
    default: "Kod & Design | UI-designer och fullstackutvecklare i Östergötland",
    template: "%s | Kod & Design",
  },
  description:
    "Jag är UI-designer och fullstackutvecklare med fokus på frontend. Jag designar i Figma och bygger färdiga webbplatser i React och Next.js, med backend när projektet kräver det. Baserad i Östergötland.",
  keywords: [
    "UI-design",
    "Figma",
    "frontendutvecklare",
    "frontendkonsult",
    "fullstackutvecklare",
    "konsult",
    "webbdesign",
    "webbutveckling",
    "Next.js",
    "React",
    "responsiv design",
    "grafisk design",
    "frilans",
    "Östergötland",
    "Linköping",
  ],
  authors: [{ name: "Kod & Design", url: "https://kodochdesign.se" }],
  creator: "Kod & Design",
  publisher: "Kod & Design",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://kodochdesign.se",
    siteName: "Kod & Design",
    title: "Kod & Design | UI-designer och fullstackutvecklare i Östergötland",
    description:
      "UI-designer och fullstackutvecklare med fokus på frontend. Design i Figma och färdiga webbplatser i React och Next.js.",
    images: [
      {
        url: "/images/kodochdesign-hero.png",
        width: 1200,
        height: 630,
        alt: "Kod & Design | UI-designer och fullstackutvecklare i Östergötland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kod & Design | UI-designer och fullstackutvecklare i Östergötland",
    description:
      "UI-designer och fullstackutvecklare. Från Figma till färdig kod.",
    images: ["/images/kodochdesign-hero.png"],
  },
  alternates: {
    canonical: "https://kodochdesign.se",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${poppins.variable} antialiased`}>
        <LocalizationProvider>{children}</LocalizationProvider>
      </body>
    </html>
  );
}
