"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GraphicDesignPage = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");
    const logoText = document.getElementById("logo-text");

    setTimeout(() => {
      if (logoText) {
        logoText.classList.remove("-translate-x-full", "opacity-0");
        logoText.classList.add("translate-x-0", "opacity-100");
      }
    }, 500);

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
          id="hero-graphic"
          className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0"
        >
          {/* Bakgrundsbild som fyller sektionen */}
          <div className="absolute inset-0">
            <Image
              src="/images/placeholder.jpg"
              alt="Grafisk design bakgrund"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
          </div>

          {/* Den mörka överläggningen */}
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

          {/* Din text och rubriker, nu ovanpå bilden */}
          <div className="z-10 max-w-4xl relative">
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Bygg ditt varumärke med visuell kraft
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mx-auto">
              Från logotyper till tryckt material – jag skapar en konsekvent och professionell visuell identitet som kommunicerar ditt budskap tydligt.
            </p>
          </div>
        </section>

        {/* Section: Tjänster */}
        <section id="graphic-services" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Skräddarsydd grafisk design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Jag hjälper dig att skapa ett bestående intryck med stark och minnesvärd design. Mina tjänster inom grafisk design inkluderar:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Logotypdesign</h3>
                <p className="text-gray-300 leading-relaxed">
                  En unik och professionell logotyp är grunden för ditt varumärke. Jag designar en logga som representerar din verksamhet på bästa sätt.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">Tryckt Material</h3>
                <p className="text-gray-300 leading-relaxed">
                  Från visitkort till flyers och broschyrer – jag designar trycksaker som imponerar och stärker din varumärkesidentitet.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-2">
                  Grafik för Sociala medier
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Professionella bilder och banners skapar ett starkt intryck på sociala plattformar. Jag designar grafik som fångar uppmärksamhet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Process */}
        <section id="process-graphic" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hur jag arbetar
            </h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Brief & Idéutveckling
                  </h3>
                  <p className="text-gray-400">
                    Jag börjar med att lyssna på dina idéer och behov. Jag utforskar din vision för att skapa ett kreativt koncept som matchar din verksamhet.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Idéutvecklingsfas"
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
                    alt="Designfas"
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
                    Skapande & Iteration
                  </h3>
                  <p className="text-gray-400">
                    Jag skapar de första designutkasten. Du får se dem och ge feedback, så att vi tillsammans kan förfina och justera designen tills den är perfekt.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Leverans & Support
                  </h3>
                  <p className="text-gray-400">
                    När designen är godkänd levererar jag alla filer i högupplösta format. Jag ser till att du har allt du behöver för att använda din nya design framgångsrikt.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/placeholder.jpg"
                    alt="Leveransfas"
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
              Låt mig skapa ett starkt varumärkesintryck
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kontakta mig idag för att diskutera din digitala vision och få en kostnadsfri offert.
            </p>
            <Link href="/kontakt">
              <button className="px-8 py-4 rounded-lg font-medium text-lg transition-transform duration-300 hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white">
                Kontakta mig
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GraphicDesignPage;