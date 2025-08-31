"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");

    // Låter huvudrubriken och underrubriken glida in från botten
    setTimeout(() => {
      if (mainHeading) {
        mainHeading.classList.remove("translate-y-full", "opacity-0");
        mainHeading.classList.add("translate-y-0", "opacity-100");
      }
      if (subHeading) {
        subHeading.classList.remove("translate-y-full", "opacity-0");
        subHeading.classList.add("translate-y-0", "opacity-100");
      }
    }, 800);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        {/* Section 1: Hero */}
        <section
          id="section1"
          className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/kodar.png")' }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="z-10 relative">
            <h1 className="animate-bounce font-bold text-3xl text-pink-500">
              Webbplatsen är för närvarande under utveckling.
            </h1>
            <p className="text-2xl font-semibold text-cyan-400 italic">
              Under min utbildning skapar jag ett antal webbplatser i syfte att öva, <br /> och jag tar därför gärna emot förfrågningar från dig som är intresserad av en ny hemsida. <br /> Vänligen kontakta mig med din förfrågan.
            </p>
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-4 mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Digitala helhetslösningar – från kod till design
            </h1>
            <p
              id="sub-heading"
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              "En kombination av <strong>modern kod</strong> och <strong>kreativ design</strong> – allt på ett ställe."
            </p>
            <Link href="#section3" className="inline-block">
              <button className="px-8 py-4 rounded-lg font-bold text-lg  bg-pink-500 hover:bg-pink-600 text-white transform transition-transform duration-300 hover:scale-105">
                Se mina tjänster
              </button>
            </Link>
          </div>
        </section>

        {/* Section 2: Om Kod och Design */}
        <section id="kodochdesign" className="py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
              Om Kod & Design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Kod & Design är resultatet av min passion för att förena teknik och estetik i digitala lösningar. Som frilansande fullstackutvecklare och grafisk designer erbjuder jag en helhetslösning – från modern, effektiv kod och intuitiva UX/UI-gränssnitt till visuella identiteter med logotyper, banners, profilbilder samt trycksaker som visitkort och flyers.

Mitt fokus ligger på att skapa användarvänliga och professionella lösningar som stärker ditt varumärke och engagerar din målgrupp. Genom nära samarbete med varje kund säkerställer jag att resultatet inte bara uppfyller, utan överträffar förväntningarna – oavsett om det gäller en enkel landningssida, en skräddarsydd webbapplikation eller en komplett grafisk profil.

Jag erbjuder flexibla och prisvärda lösningar som gör det möjligt för både företag och privatpersoner att förverkliga sina digitala idéer. Låt oss tillsammans bygga din nästa digitala upplevelse – från kod till design. </p>
          </div>
        </section>

        {/* Section 3: Mina tjänster */}
        <section id="tjanster" className="py-20 bg-gray-800 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
              Mina tjänster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kort 1: Webbutveckling */}
              <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/webbutveckling.jpg"
                  alt="Webbutveckling"
                  width={600}
                  height={400}
                  className="w-[600px] h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Webbutveckling
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Jag bygger skräddarsydda, högpresterande och responsiva webbplatser med den senaste tekniken React, Next.js och Tailwind CSS.
                  </p>
                  <Link href="/webbutveckling" className="inline-block">
                    <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                      Läs mer
                    </button>
                  </Link>
                </div>
              </div>
              {/* Kort 2: UX/UI Design */}
              <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                <Image
                  src="/images/uxuidesign.jpg"
                  alt="UX/UI Design"
                  width={600}
                  height={400}
                  className="w-[600px] h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">UX/UI Design</h3>
                  <p className="text-gray-300 mb-4">
                    Jag skapar intuitiva och vackra användarupplevelser som engagerar dina besökare.
                  </p>
                  <Link href="/ux-ui" className="inline-block">
                    <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                      Läs mer
                    </button>
                  </Link>
                </div>
              </div>
              {/* Kort 3: Grafisk Design */}
              <div className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
               <Image
                  src="/images/grafiskdesign.jpg"
                  alt="UX/UI Design"
                  width={600}
                  height={400}
                  className="w-[600px] h-[400px] object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Grafisk Design
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Jag hjälper dig att bygga din visuella identitet med professionell grafisk design för logotyper, visitkort, flyers, samt anpassade profilbilder och banners för sociala medier.
                  </p>
                  <Link href="/grafisk-design" className="inline-block">
                    <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                      Läs mer
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;