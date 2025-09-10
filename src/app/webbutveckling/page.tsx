"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebDevelopmentPage = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");

    // Låter huvudrubriken glida in från botten
    setTimeout(() => {
      if (mainHeading) {
        mainHeading.classList.remove("translate-y-full", "opacity-0");
        mainHeading.classList.add("translate-y-0", "opacity-100");
      }
    }, 800);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        {/* Section: Hero */}
        <section
          id="hero-web"
          className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/placebolder.jpg"
              alt="Webbutveckling bakgrund"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <div className="z-10 max-w-4xl relative">
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Kraftfulla webblösningar för din digitala framtid
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mx-auto">
              Jag bygger moderna och högpresterande webbplatser som inte bara
              ser fantastiska ut, utan också fungerar felfritt på alla enheter.
            </p>
          </div>
        </section>

        {/* Section: Tjänster */}
        <section id="web-services" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Vad jag erbjuder
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Jag skapar webbplatser med den senaste tekniken för att garantera
              snabbhet, säkerhet och en utmärkt användarupplevelse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  Responsiv design
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Jag säkerställer att din webbplats ser perfekt ut och fungerar
                  felfritt, oavsett om besökaren använder en mobil, surfplatta
                  eller dator.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  SEO-optimerad kod
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Med en SEO-vänlig struktur och snabb laddningstid ökar jag din
                  synlighet på sökmotorer som Google, så att fler hittar dig.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  Skalbar arkitektur
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Jag bygger din webbplats på en solid grund som gör den enkel
                  att utöka med nya funktioner i framtiden.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Modern teknik</h3>
                <p className="text-gray-300 leading-relaxed">
                  Jag använder branschledande ramverk som Next.js, React och
                  Tailwind CSS för att leverera snabba och säkra
                  webbapplikationer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Process */}
        <section id="process-web" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Min utvecklingsprocess
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Strategi & Planering
                  </h3>
                  <p className="text-gray-400">
                    Jag börjar med att förstå dina mål, din målgrupp och din
                    vision. Tillsammans skapar vi en tydlig plan för projektet.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Strategi & Planering"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Design & Utveckling"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Design & Utveckling
                  </h3>
                  <p className="text-gray-400">
                    Jag skapar en elegant och intuitiv design, och översätter
                    den sedan till ren, effektiv och välstrukturerad kod.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Lansering & Support
                  </h3>
                  <p className="text-gray-400">
                    Jag ser till att din webbplats lanseras smidigt och är redo
                    för dina besökare. Efter lanseringen finns jag här för att
                    hjälpa dig med support och underhåll.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Lansering & Support"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-20 px-4 bg-gray-700 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Redo att förvandla dina idéer till verklighet?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kontakta mig idag för att diskutera ditt projekt och få en
              kostnadsfri offert.
            </p>
            <a href="mailto:kontakt@kodochdesign.se">
              <button className="px-8 py-4 rounded-lg font-medium text-lg transition-transform duration-300 hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white">
                Skicka E-post
              </button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
