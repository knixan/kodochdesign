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
          id="hero-webb"
          className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0"
        >
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <Image
            src="/images/placebolder.jpg"
            alt="Webbutveckling bakgrund"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
            height={400}
            width={800}
          />
          <div className="z-10 max-w-4xl relative">
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Kraftfulla webbplatser med modern teknik
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mx-auto">
              Vi bygger skräddarsydda, snabba och responsiva webbplatser i
              **React** och **Next.js** för att ge dig den bästa digitala
              närvaron.
            </p>
          </div>
        </section>

        {/* Section: Tjänster */}
        <section id="web-services" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Våra webblösningar
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Vi bygger inte bara webbplatser, vi skapar digitala plattformar
              som växer med ditt företag. Vi specialiserar oss på:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  Statisk webbplats
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Perfekt för små företag, portföljer eller enklare
                  landningssidor som behöver vara blixtsnabba och säkra.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  Webbapplikationer
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Komplexa webblösningar med databaser, användarautentisering
                  och dynamiskt innehåll för att hantera dina affärsbehov.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Teknologier */}
        <section id="technologies" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Teknologier vi använder
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Next.js</h3>
                <p className="text-gray-300">
                  Ett kraftfullt ramverk för server-side rendering och statisk
                  generering.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">React</h3>
                <p className="text-gray-300">
                  Grundbulten för moderna, interaktiva och återanvändbara
                  användargränssnitt.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">TypeScript</h3>
                <p className="text-gray-300">
                  Gör koden mer robust, säker och enklare att underhålla.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Tailwind CSS</h3>
                <p className="text-gray-300">
                  Ett snabbt och flexibelt verktyg för att bygga stilren och
                  responsiv design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-20 px-4 bg-gray-700 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Redo att bygga din drömwebbplats?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kontakta oss idag för att få en kostnadsfri konsultation och en
              skräddarsydd offert.
            </p>
            <Link href="/#footer">
              <button className="px-8 py-4 rounded-lg font-medium text-lg transition-transform duration-300 hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white">
                Kontakta oss
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
