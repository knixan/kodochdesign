"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UxUiPage = () => {
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
    <div className="bg-[#001d32] text-white font-sans">
      <Navbar />
      <main>
        {/* Hero */}
        <section
          id="hero-uxui"
          className="relative h-screen flex flex-col justify-center items-center text-center px-4 md:px-0 bg-cover bg-center"
        >
          <Image
            src="/images/uxuidesignar.png"
            alt="UX/UI Design"
            fill
            style={{ objectFit: "cover" }}
            className="z-0"
          />
          <div className="absolute inset-0 bg-[#001d32] opacity-70"></div>
          <div className="z-10 max-w-4xl relative">
            <h1
              id="main-heading"
              className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transform translate-y-full opacity-0 transition-all duration-1000 ease-out"
            >
              Fokus på användaren – från början till slut
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mx-auto">
              Jag sätter användaren i centrum – i varje steg av designprocessen,
              från research till prototyper och slutlig design. Resultatet? En
              webbplats som inte bara ser fantastisk ut, utan också är enkel och
              rolig att använda.
            </p>
          </div>
        </section>

        {/* Vad är UX/UI Design? */}
        <section id="uxui-services" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
              Vad är UX/UI Design?
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              <strong>User Experience (UX)</strong> handlar om hur en användare
              upplever din produkt. Det är processen att skapa en meningsfull
              och relevant upplevelse. <strong>User Interface (UI)</strong> är
              den visuella delen – gränssnittet som användaren interagerar med.
              Jag kombinerar de två för att bygga en webbplats som inte bara ser
              bra ut, utan som också är lätt att använda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* UX Card */}
              <div className="bg-[#002844] p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(236,72,153,0.6)]">
                <h3 className="text-2xl font-semibold mb-2">
                  UX - Användarupplevelse
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Jag skapar användarresor, wireframes och prototyper för att
                  säkerställa att din webbplats är logisk, funktionell och
                  intuitiv.
                </p>
                <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                  Läs mer
                </button>
              </div>
              {/* UI Card */}
              <div className="bg-[#002844] p-6 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_5px_rgba(236,72,153,0.6)]">
                <h3 className="text-2xl font-semibold mb-2">
                  UI - Användargränssnitt
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Jag designar den visuella estetiken, från färgscheman och
                  typografi till knappar och ikoner, för att skapa ett
                  gränssnitt som är både vackert och effektivt.
                </p>
                <button className="px-6 py-3 rounded-lg font-medium transition-colors duration-300 bg-pink-500 hover:bg-pink-600 text-white">
                  Läs mer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Min designprocess */}
        <section id="process-uxui" className="py-20 px-4 bg-[#002844]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
              Min designprocess
            </h2>
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Forskning & Strategi
                  </h3>
                  <p className="text-gray-300">
                    Jag börjar med att djupdyka i din målgrupp och dina
                    affärsmål för att bygga en solid grund för designen.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/uxuidesign1.png"
                    alt="Forskning & Strategi"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.5)]"
                  />
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2">
                  <Image
                    src="/images/uxuidesign2.png"
                    alt="Wireframing & Prototyping"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.5)]"
                  />
                </div>
                <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Wireframing & Prototyping
                  </h3>
                  <p className="text-gray-300">
                    Jag skissar upp strukturen och flödet på webbplatsen för att
                    testa användarvänligheten innan jag lägger till de visuella
                    detaljerna.
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-gradient-to-r from-pink-500 to-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-3xl font-semibold mb-2">
                    Visuell design & Leverans
                  </h3>
                  <p className="text-gray-300">
                    Jag skapar den slutgiltiga designen med färger, typografi
                    och interaktiva element. Därefter levererar jag en komplett
                    design som är redo för utveckling.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/uxuidesign3.png"
                    alt="Visuell design & Leverans"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full transition-all duration-300 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.5)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-[#001d32] text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400">
              Låt mig designa din nästa digitala upplevelse
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Kontakta mig idag för en kostnadsfri konsultation och offert.
            </p>
            <a href="mailto:kontakt@kodochdesign.se">
              <button className="px-8 py-4 rounded-lg font-medium text-lg transition-transform duration-300 hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white shadow-[0_0_25px_rgba(236,72,153,0.5)]">
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

export default UxUiPage;
