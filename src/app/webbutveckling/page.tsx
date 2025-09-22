"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WebDevelopmentPage = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");

    setTimeout(() => {
      if (mainHeading) {
        mainHeading.classList.remove("translate-y-full", "opacity-0");
        mainHeading.classList.add("translate-y-0", "opacity-100");
      }
    }, 800);
  }, []);

  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-emerald-950/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <div className="fixed top-1/4 right-16 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 left-16 w-72 h-72 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Hero */}
          <section
            id="hero-web"
            className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 bg-cover bg-center"
          >
            <Image
              src="/images/kodar.png"
              alt="Webbutveckling"
              fill
              style={{ objectFit: "cover" }}
              className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>

            <div className="z-20 max-w-6xl relative">
              <h1
                id="main-heading"
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent transform translate-y-full opacity-0 transition-all duration-1000 ease-out leading-tight tracking-tight"
              >
                Kraftfulla webblösningar
              </h1>
              <div className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                för din digitala framtid
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                  Jag bygger moderna och högpresterande webbplatser som inte
                  bara ser fantastiska ut, utan också fungerar felfritt på alla
                  enheter.
                </p>
              </div>
            </div>
          </section>

          {/* Tjänster */}
          <section id="web-services" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
            <div className="container mx-auto max-w-6xl text-center relative z-10">
              <div className="mb-16">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Vad jag erbjuder
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full mb-12"></div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-16">
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Jag skapar webbplatser med den senaste tekniken för att
                  garantera snabbhet, säkerhet och en utmärkt
                  användarupplevelse.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Responsiv design",
                    text: "Jag säkerställer att din webbplats ser perfekt ut och fungerar felfritt, oavsett enhet.",
                    icon: "📱",
                    gradient: "from-blue-500 to-cyan-500",
                    glowColor: "blue-500/25",
                  },
                  {
                    title: "SEO-optimerad kod",
                    text: "Med SEO-vänlig struktur och snabb laddningstid ökar jag din synlighet på Google.",
                    icon: "🚀",
                    gradient: "from-cyan-500 to-teal-500",
                    glowColor: "cyan-500/25",
                  },
                  {
                    title: "Skalbar arkitektur",
                    text: "Jag bygger din webbplats på en solid grund som är enkel att utöka med nya funktioner i framtiden.",
                    icon: "🏗️",
                    gradient: "from-teal-500 to-emerald-500",
                    glowColor: "teal-500/25",
                  },
                  {
                    title: "Modern teknik",
                    text: "Jag använder Next.js, React och Tailwind CSS för snabba och säkra webbapplikationer.",
                    icon: "⚡",
                    gradient: "from-emerald-500 to-green-500",
                    glowColor: "emerald-500/25",
                  },
                ].map((service, i) => (
                  <div key={i} className="group relative">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500`}
                    ></div>
                    <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto text-2xl`}
                        >
                          {service.icon}
                        </div>
                        <h3
                          className={`text-3xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed font-light text-lg">
                        {service.text}
                      </p>
                      <div className="mt-8">
                        <button
                          className={`group/btn relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:scale-105 shadow-lg hover:shadow-${service.glowColor}`}
                        >
                          <span className="relative z-10">Läs mer</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="process-web" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50"></div>
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Min utvecklingsprocess
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-32">
                {/* Steg 1 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform rotate-3">
                      1
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Strategi & Planering
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag börjar med att förstå dina mål, din målgrupp och din
                        vision.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/webutveckling1.png"
                          alt="Strategi & Planering"
                          width={600}
                          height={400}
                          className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Steg 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/webutveckling2.png"
                          alt="Design & Utveckling"
                          width={600}
                          height={400}
                          className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform -rotate-3">
                      2
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                        Design & Utveckling
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag skapar elegant design och översätter den till ren,
                        effektiv kod.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Steg 3 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform rotate-3">
                      3
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        Lansering & Support
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag ser till att din webbplats lanseras smidigt och är
                        redo för dina besökare. Jag erbjuder support och
                        underhåll efter lansering.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/webutveckling3.png"
                          alt="Lansering & Support"
                          width={600}
                          height={400}
                          className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-32 px-4 relative text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-16">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                  Redo att förvandla dina idéer till verklighet?
                </h2>
                <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                  Kontakta mig idag för att diskutera ditt projekt och få en
                  kostnadsfri offert.
                </p>
                <a
                  href="mailto:kontakt@kodochdesign.se"
                  className="inline-block group"
                >
                  <button className="relative px-12 py-6 rounded-2xl font-bold text-xl text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 hover:from-blue-600 hover:via-cyan-600 hover:to-emerald-600 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30">
                    <span className="relative z-10">Skicka E-post</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
