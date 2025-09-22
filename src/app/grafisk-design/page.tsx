"use client";

import { useEffect } from "react";
import Image from "next/image";
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
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-rose-950/30 to-cyan-950/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <div className="fixed top-1/3 left-20 w-72 h-72 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/3 right-20 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Section: Hero */}
          <section
            id="hero-graphic"
            className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0"
          >
            {/* Bakgrundsbild */}
            <div className="absolute inset-0">
              <Image
                src="/images/graphicdesigner.png"
                alt="Grafisk design bakgrund"
                fill
                style={{ objectFit: "cover" }}
                className="z-0"
              />
            </div>

            {/* Enhanced overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>

            {/* Hero text */}
            <div className="z-20 max-w-6xl relative">
              <h1
                id="main-heading"
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transform translate-y-full opacity-0 transition-all duration-1000 ease-out leading-tight tracking-tight"
              >
                Bygg ditt varumärke
              </h1>
              <div className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
                med visuell kraft
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                  Från logotyper till tryckt material – jag skapar en konsekvent
                  och professionell visuell identitet som kommunicerar ditt
                  budskap tydligt.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tjänster */}
          <section id="graphic-services" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/10 to-transparent"></div>
            <div className="container mx-auto max-w-6xl text-center relative z-10">
              <div className="mb-16">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Skräddarsydd grafisk design
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-cyan-500 mx-auto rounded-full mb-12"></div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-16">
                <p className="text-xl text-slate-300 leading-relaxed font-light">
                  Jag hjälper dig att skapa ett bestående intryck med stark och
                  minnesvärd design. Mina tjänster inom grafisk design
                  inkluderar:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: "Logotypdesign",
                    text: "En unik och professionell logotyp är grunden för ditt varumärke. Jag designar en logga som representerar din verksamhet på bästa sätt.",
                    icon: "🎨",
                    gradient: "from-rose-500 to-pink-500",
                    glowColor: "rose-500/25",
                  },
                  {
                    title: "Tryckt Material",
                    text: "Från visitkort till flyers och broschyrer – jag designar trycksaker som imponerar och stärker din varumärkesidentitet.",
                    icon: "📄",
                    gradient: "from-pink-500 to-purple-500",
                    glowColor: "pink-500/25",
                  },
                  {
                    title: "Grafik för Sociala medier",
                    text: "Professionella bilder och banners skapar ett starkt intryck på sociala plattformar. Jag designar grafik som fångar uppmärksamhet.",
                    icon: "📱",
                    gradient: "from-purple-500 to-cyan-500",
                    glowColor: "cyan-500/25",
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

          {/* Section: Process */}
          <section id="process-graphic" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50"></div>
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Hur jag arbetar
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-32">
                {[
                  {
                    step: "1",
                    title: "Brief & Idéutveckling",
                    text: "Jag börjar med att lyssna på dina idéer och behov. Jag utforskar din vision för att skapa ett kreativt koncept som matchar din verksamhet.",
                    image: "/images/grafiskdesign1.png",
                    reverse: false,
                    gradient: "from-rose-500 to-pink-500",
                  },
                  {
                    step: "2",
                    title: "Skapande & Iteration",
                    text: "Jag skapar de första designutkasten. Du får se dem och ge feedback, så att vi tillsammans kan förfina och justera designen tills den är perfekt.",
                    image: "/images/grafiskdesign2.png",
                    reverse: true,
                    gradient: "from-pink-500 to-purple-500",
                  },
                  {
                    step: "3",
                    title: "Leverans & Support",
                    text: "När designen är godkänd levererar jag alla filer i högupplösta format. Jag ser till att du har allt du behöver för att använda din nya design framgångsrikt.",
                    image: "/images/grafiskdesign3.png",
                    reverse: false,
                    gradient: "from-purple-500 to-cyan-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${
                      item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                    } items-center justify-between gap-12`}
                  >
                    <div className="lg:w-1/2 relative">
                      <div
                        className={`absolute ${
                          item.reverse ? "-top-4 -right-4" : "-top-4 -left-4"
                        } w-20 h-20 bg-gradient-to-r ${
                          item.gradient
                        } rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform ${
                          item.reverse ? "-rotate-3" : "rotate-3"
                        }`}
                      >
                        {item.step}
                      </div>
                      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                        <h3
                          className={`text-4xl font-bold mb-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-slate-300 text-xl leading-relaxed font-light">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-1/2 group">
                      <div className="relative overflow-hidden rounded-3xl">
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`}
                        ></div>
                        <div className="relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={400}
                            className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: CTA */}
          <section className="py-32 px-4 relative text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-900/20 to-transparent"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-16">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-rose-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Låt mig skapa ett starkt varumärkesintryck
                </h2>
                <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                  Kontakta mig idag för att diskutera din digitala vision och få
                  en kostnadsfri offert.
                </p>
                <a
                  href="mailto:kontakt@kodochdesign.se"
                  className="inline-block group"
                >
                  <button className="relative px-12 py-6 rounded-2xl font-bold text-xl text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-rose-500 via-pink-500 to-cyan-500 hover:from-rose-600 hover:via-pink-600 hover:to-cyan-600 transform hover:scale-105 shadow-2xl hover:shadow-rose-500/30">
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

export default GraphicDesignPage;
