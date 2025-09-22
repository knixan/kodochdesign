"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20 animate-gradient-xy"></div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          {/* Section: Om Kod & Design */}
          <section id="kodochdesign" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            <div className="container mx-auto max-w-5xl text-center relative z-10">
              <div className="mb-8">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Om Kod & Design
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full mb-12"></div>
              </div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
                <p className="text-xl text-slate-300 leading-relaxed font-light tracking-wide">
                  Kod & Design är resultatet av min passion för att förena
                  teknik och estetik i digitala lösningar. Som frilansande
                  fullstackutvecklare och grafisk designer erbjuder jag en
                  helhetslösning – från modern, effektiv kod och intuitiva
                  UX/UI-gränssnitt till visuella identiteter med logotyper,
                  banners, profilbilder samt trycksaker. Mitt fokus ligger på
                  att skapa användarvänliga och professionella lösningar som
                  stärker ditt varumärke och engagerar din målgrupp.
                </p>
                <div className="mt-8 text-2xl font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Låt oss tillsammans bygga din nästa digitala upplevelse
                </div>
              </div>
            </div>
          </section>

          {/* Section: Mina tjänster */}
          <section id="tjanster" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50"></div>
            <div className="container mx-auto relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Mina tjänster
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Kort 1 - Webbutveckling */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src="/images/webbutveckling.jpg"
                        alt="Webbutveckling"
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                      Webbutveckling
                    </h3>
                    <p className="text-slate-300 mb-8 leading-relaxed font-light">
                      Skräddarsydda, högpresterande och responsiva webbplatser
                      med React, Next.js och Tailwind CSS.
                    </p>
                    <Link
                      href="/webbutveckling"
                      className="inline-block group/btn"
                    >
                      <button className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-violet-500 to-pink-500 hover:from-violet-600 hover:to-pink-600 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                        <span className="relative z-10">Läs mer</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Kort 2 - UX/UI Design */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-violet-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src="/images/uxuidesign.jpg"
                        alt="UX/UI Design"
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                      UX/UI Design
                    </h3>
                    <p className="text-slate-300 mb-8 leading-relaxed font-light">
                      Jag skapar intuitiva och vackra användarupplevelser som
                      engagerar dina besökare.
                    </p>
                    <Link href="/ux-ui" className="inline-block group/btn">
                      <button className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                        <span className="relative z-10">Läs mer</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Kort 3 - Grafisk Design */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-violet-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                    <div className="relative overflow-hidden rounded-xl mb-6">
                      <Image
                        src="/images/grafiskdesign.jpg"
                        alt="Grafisk Design"
                        width={600}
                        height={400}
                        className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                      Grafisk Design
                    </h3>
                    <p className="text-slate-300 mb-8 leading-relaxed font-light">
                      Bygg din visuella identitet med logotyper, visitkort,
                      flyers, samt profilbilder och banners för sociala medier.
                    </p>
                    <Link
                      href="/grafisk-design"
                      className="inline-block group/btn"
                    >
                      <button className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                        <span className="relative z-10">Läs mer</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
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
    </div>
  );
};

export default HomePage;
