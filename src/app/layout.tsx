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
    default: "Kod & Design – Webbyrå i Östergötland",
    template: "%s | Kod & Design",
  },
  description:
    "Vi bygger webbplatser och digitala produkter som ser professionella ut och faktiskt funkar – från enkel landingssida till komplex SaaS-applikation. Webbyrå i Östergötland.",
  keywords: [
    "webbyrå",
    "webbutveckling",
    "hemsida",
    "webbdesign",
    "landingssida",
    "SaaS",
    "Next.js",
    "React",
    "grafisk design",
    "Östergötland",
    "Linköping",
    "frilans",
    "backend",
    "responsiv design",
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
    title: "Kod & Design – Webbyrå i Östergötland",
    description:
      "Vi bygger webbplatser och digitala produkter som ser professionella ut och faktiskt funkar – från enkel landingssida till komplex SaaS-applikation.",
    images: [
      {
        url: "/images/kodochdesign-hero.png",
        width: 1200,
        height: 630,
        alt: "Kod & Design – Webbyrå i Östergötland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kod & Design – Webbyrå i Östergötland",
    description:
      "Vi bygger webbplatser och digitala produkter – från enkel landingssida till komplex SaaS-applikation.",
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
