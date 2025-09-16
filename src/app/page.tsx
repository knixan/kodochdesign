"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  // (Behåll ev. annan logik om du vill)
  useEffect(() => {}, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <Hero />

        {/* Section: Om Kod & Design */}
        <section id="kodochdesign" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
              Om Kod & Design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Kod & Design är resultatet av min passion för att förena teknik
              och estetik i digitala lösningar. Som frilansande
              fullstackutvecklare och grafisk designer erbjuder jag en
              helhetslösning – från modern, effektiv kod och intuitiva
              UX/UI-gränssnitt till visuella identiteter med logotyper, banners,
              profilbilder samt trycksaker. Mitt fokus ligger på att skapa
              användarvänliga och professionella lösningar som stärker ditt
              varumärke och engagerar din målgrupp. Låt oss tillsammans bygga
              din nästa digitala upplevelse – från kod till design.
            </p>
          </div>
        </section>

        {/* Section: Mina tjänster */}
        <section id="tjanster" className="py-20 px-4 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
              Mina tjänster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kort 1 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(236,72,153,0.6)]">
                <Image
                  src="/images/webbutveckling.jpg"
                  alt="Webbutveckling"
                  width={600}
                  height={400}
                  className="rounded-md mb-4 w-full h-[200px] object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">Webbutveckling</h3>
                <p className="text-gray-300 mb-4">
                  Skräddarsydda, högpresterande och responsiva webbplatser med
                  React, Next.js och Tailwind CSS.
                </p>
                <Link href="/webbutveckling" className="inline-block">
                  <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                    Läs mer
                  </button>
                </Link>
              </div>

              {/* Kort 2 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(236,72,153,0.6)]">
                <Image
                  src="/images/uxuidesign.jpg"
                  alt="UX/UI Design"
                  width={600}
                  height={400}
                  className="rounded-md mb-4 w-full h-[200px] object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">UX/UI Design</h3>
                <p className="text-gray-300 mb-4">
                  Jag skapar intuitiva och vackra användarupplevelser som
                  engagerar dina besökare.
                </p>
                <Link href="/ux-ui" className="inline-block">
                  <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                    Läs mer
                  </button>
                </Link>
              </div>

              {/* Kort 3 */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(236,72,153,0.6)]">
                <Image
                  src="/images/grafiskdesign.jpg"
                  alt="Grafisk Design"
                  width={600}
                  height={400}
                  className="rounded-md mb-4 w-full h-[200px] object-cover"
                />
                <h3 className="text-2xl font-semibold mb-2">Grafisk Design</h3>
                <p className="text-gray-300 mb-4">
                  Bygg din visuella identitet med logotyper, visitkort, flyers,
                  samt profilbilder och banners för sociala medier.
                </p>
                <Link href="/grafisk-design" className="inline-block">
                  <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                    Läs mer
                  </button>
                </Link>
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
