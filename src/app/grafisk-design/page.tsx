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
    <div className="bg-[#001d32] text-gray-200 font-sans">
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

          {/* Mörk overlay */}
          <div className="absolute inset-0 bg-[#001d32] opacity-80"></div>

          {/* Hero text */}
          <div className="z-10 max-w-4xl relative">
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9] transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Bygg ditt varumärke med visuell kraft
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mx-auto">
              Från logotyper till tryckt material – jag skapar en konsekvent och
              professionell visuell identitet som kommunicerar ditt budskap
              tydligt.
            </p>
          </div>
        </section>

        {/* Section: Tjänster */}
        <section id="graphic-services" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9]">
              Skräddarsydd grafisk design
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Jag hjälper dig att skapa ett bestående intryck med stark och
              minnesvärd design. Mina tjänster inom grafisk design inkluderar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Logotypdesign",
                  text: "En unik och professionell logotyp är grunden för ditt varumärke. Jag designar en logga som representerar din verksamhet på bästa sätt.",
                },
                {
                  title: "Tryckt Material",
                  text: "Från visitkort till flyers och broschyrer – jag designar trycksaker som imponerar och stärker din varumärkesidentitet.",
                },
                {
                  title: "Grafik för Sociala medier",
                  text: "Professionella bilder och banners skapar ett starkt intryck på sociala plattformar. Jag designar grafik som fångar uppmärksamhet.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-[#002844] p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/30"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-[#4cb7d9]">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Process */}
        <section id="process-graphic" className="py-20 px-4 bg-[#002844]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9]">
              Hur jag arbetar
            </h2>
            <div className="space-y-16">
              {[
                {
                  step: "1",
                  title: "Brief & Idéutveckling",
                  text: "Jag börjar med att lyssna på dina idéer och behov. Jag utforskar din vision för att skapa ett kreativt koncept som matchar din verksamhet.",
                  image: "/images/grafiskdesign1.png",
                  reverse: false,
                },
                {
                  step: "2",
                  title: "Skapande & Iteration",
                  text: "Jag skapar de första designutkasten. Du får se dem och ge feedback, så att vi tillsammans kan förfina och justera designen tills den är perfekt.",
                  image: "/images/grafiskdesign2.png",
                  reverse: true,
                },
                {
                  step: "3",
                  title: "Leverans & Support",
                  text: "När designen är godkänd levererar jag alla filer i högupplösta format. Jag ser till att du har allt du behöver för att använda din nya design framgångsrikt.",
                  image: "/images/grafiskdesign3.png",
                  reverse: false,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    item.reverse ? "md:flex-row-reverse" : "md:flex-row"
                  } items-center justify-between gap-8`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-[#f6339a] to-[#4cb7d9] rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
                      {item.step}
                    </div>
                    <h3 className="text-3xl font-semibold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.text}</p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-20 px-4 bg-[#001d32] text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9]">
              Låt mig skapa ett starkt varumärkesintryck
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kontakta mig idag för att diskutera din digitala vision och få en
              kostnadsfri offert.
            </p>
            <a href="mailto:kontakt@kodochdesign.se">
              <button className="px-8 py-4 rounded-xl font-medium text-lg transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-[#f6339a] to-[#4cb7d9] text-white shadow-lg">
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

export default GraphicDesignPage;
