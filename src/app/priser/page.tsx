import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiPackage, FiServer, FiRefreshCw, FiExternalLink } from "react-icons/fi";

const packages = [
  {
    icon: FiPackage,
    title: "Engångsprojekt",
    description:
      "Vi bygger din webbplats eller applikation till ett fast pris. Du får källkoden och tar över efter leverans – ingen bindningstid.",
    includes: [
      "Fast projektpris utan dolda kostnader",
      "Deploy ingår",
      "Källkod lämnas över vid full betalning",
      "30 dagars buggfixning efter leverans",
      "Responsiv design för alla enheter",
      "SEO-grundstruktur",
    ],
    badge: null,
  },
  {
    icon: FiServer,
    title: "Projekt + Hosting",
    description:
      "Vi bygger projektet och sköter hosting åt dig – Vercel, S3-bucket för media och liknande – allt på ditt konto och din räkning. Du betalar bara faktiska kostnader plus en liten administrationsavgift.",
    includes: [
      "Allt i Engångsprojekt",
      "Vi sätter upp och konfigurerar hosting",
      "Vercel, S3 eller annan tjänst på ditt konto",
      "Du ser och betalar faktiska kostnader direkt",
      "Vi finns tillgängliga vid driftstörningar",
    ],
    badge: "Populärt",
  },
  {
    icon: FiRefreshCw,
    title: "Projekt + Förvaltning",
    description:
      "Utöver projektet ingår löpande underhåll varje månad – uppdateringar, småändringar och teknisk support. Passar dig som vill ha en långsiktig partner.",
    includes: [
      "Allt i Projekt + Hosting",
      "Löpande underhåll och uppdateringar",
      "Inkluderade timmar varje månad",
      "Prioriterad support",
      "Ändringar och tillägg inom ramen",
    ],
    badge: null,
  },
];

const alwaysIncluded = [
  "Källkod lämnas över vid full betalning",
  "Deploy ingår alltid i projektpriset",
  "30 dagars kostnadsfri buggfixning efter leverans",
  "Responsiv design – mobil, surfplatta och desktop",
  "SEO-grundstruktur från start",
  "3 inkluderade revideringsrundor under projektet",
];

const terms = [
  {
    title: "Förskott",
    text: "30–50% av projektpriset faktureras vid projektstart. Resterande belopp faktureras vid leverans.",
  },
  {
    title: "Ändringar utanför scope",
    text: "Ändringar som tillkommer utöver det avtalade scopet faktureras per timme. Vi informerar alltid innan vi påbörjar tilläggsarbete.",
  },
  {
    title: "Äganderätt",
    text: "Äganderätten till koden övergår till dig vid full betalning. Fram till dess äger Kod & Design koden.",
  },
  {
    title: "Avbrott",
    text: "Om projektet avbryts faktureras nedlagt arbete till dess enligt avtalad timpenning.",
  },
  {
    title: "Betalning",
    text: "Betalningsvillkor 30 dagar netto om inget annat avtalats.",
  },
  {
    title: "GDPR",
    text: "Om vi hanterar personuppgifter åt dig som kund tecknar vi ett personuppgiftsbiträdesavtal (PUB-avtal).",
  },
];

export default function PriserPage() {
  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden min-h-screen">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20" />
      <div className="fixed top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-36 pb-20 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                Priser & Paket
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mb-6" />
              <p className="text-slate-400 text-lg max-w-xl mx-auto">
                Vi anpassar upplägget efter dina behov. Alla projekt inleds med
                ett kostnadsfritt samtal där vi tar fram en offert.
              </p>
            </div>

            {/* Package cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {packages.map((pkg) => (
                <div key={pkg.title} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                  <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl h-full flex flex-col">
                    {pkg.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-pink-500 text-white shadow-lg shadow-pink-500/30">
                        {pkg.badge}
                      </span>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                      <pkg.icon className="text-xl text-pink-400" />
                    </div>
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                      {pkg.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                          <FiCheck className="text-cyan-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/#kontakt"
                      className="block text-center py-3 rounded-xl bg-pink-500 font-semibold text-white text-sm shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      Kontakta för offert
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Always included */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Vad som alltid ingår
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
              </div>
              <div className="relative group max-w-3xl mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur-lg opacity-20" />
                <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {alwaysIncluded.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-slate-300">
                      <FiCheck className="text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prisexempel */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  Prisexempel
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-6" />
                <p className="text-slate-400">Exempel på tidigare projekt och ungefärliga startpriser.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    image: "/images/prisexempel/skeningevvs.png",
                    title: "Skänninge VVS",
                    type: "Företagssajt",
                    description: "Responsiv företagssajt med tjänstesidor, teamsektion, Google Maps och SEO-optimering.",
                    price: "från 10 000 kr",
                  },
                  {
                    image: "/images/prisexempel/fakey-nails.png",
                    title: "Fakey Nails",
                    type: "Sajt med CMS + bokning",
                    description: "Salongsajt med Sanity CMS - kunden redigerar priser och tjänster själv. Inbäddat bokningssystem.",
                    price: "från 20 000 kr",
                  },
                  {
                    image: "/images/prisexempel/sweettimeuf.png",
                    title: "Sweet Time UF",
                    type: "E-handel",
                    description: "Webbshop med produktkatalog, varianthantering, checkout, orderhantering och adminpanel.",
                    price: "från 30 000 kr",
                  },
                  {
                    image: "/images/prisexempel/tassa-in.png",
                    title: "Tassa In",
                    type: "Eget bokningssystem + admin",
                    description: "Bokningssystem för djurvård med eget API, tidshantering, kapacitetskontroll och adminpanel.",
                    price: "från 35 000 kr",
                  },
                  {
                    image: "/images/prisexempel/motionzone.jpg",
                    title: "MotionZone",
                    type: "Boknings- & e-handelsplattform",
                    description: "Dansstudio-plattform med bokningssystem, kurser, e-handel, adminpanel och rollbaserad auth.",
                    price: "från 55 000 kr",
                  },
                  {
                    image: "/images/prisexempel/knegarloggen.png",
                    title: "Knegarloggen",
                    type: "SaaS-applikation",
                    description: "Jobblogg och fakturaverktyg för hantverkare – Stripe-prenumerationer, PDF-fakturor, ROT-avdrag och filuppladdning.",
                    price: "från 75 000 kr",
                  },
                ].map((project) => (
                  <div key={project.title} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-500" />
                    <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden">
                      <div className="relative h-52 bg-slate-800/60 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 640px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/80 text-white backdrop-blur-sm">
                          {project.type}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                        <p className="text-cyan-400 font-bold text-lg">{project.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-500 text-sm mt-6">
                Priserna är ungefärliga startpriser. Slutpriset beror på scope, funktioner och tidsram – kontakta oss för offert.
              </p>
            </div>

            {/* Terms */}
            <div className="mb-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Villkor
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {terms.map((term) => (
                  <div key={term.title} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-300" />
                    <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-xl p-6">
                      <h3 className="font-bold text-white mb-2">{term.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{term.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
                <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl px-12 py-10">
                  <h2 className="text-2xl font-black mb-3 text-white">Redo att sätta igång?</h2>
                  <p className="text-slate-400 mb-6 max-w-md">
                    Berätta om ditt projekt så tar vi fram en offert utan kostnad.
                  </p>
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-pink-500 font-semibold text-white shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Kontakta oss
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
