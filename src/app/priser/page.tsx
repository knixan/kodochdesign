import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriserContent from "./priser-content";

export const metadata: Metadata = {
  title: "Priser & Paket",
  description:
    "Se våra paket och prisexempel på verkliga projekt – från enkel landingssida från 10 000 kr till komplex SaaS-applikation från 75 000 kr. Kontakta oss för offert.",
  alternates: {
    canonical: "https://kodochdesign.se/priser",
  },
  openGraph: {
    title: "Priser & Paket | Kod & Design",
    description:
      "Paket och prisexempel på verkliga projekt – landingssidor, e-handel, bokningssystem och SaaS-applikationer.",
    url: "https://kodochdesign.se/priser",
  },
};

export default function PriserPage() {
  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20" />
      <div className="fixed top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        <Navbar />
        <PriserContent />
        <Footer />
      </div>
    </div>
  );
}
