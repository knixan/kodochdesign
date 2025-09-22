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
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-purple-950/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <div className="fixed top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
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
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90"></div>
            <div className="absolute inset-0 backdrop-blur-[2px]"></div>

            <div className="z-20 max-w-6xl relative">
              <h1
                id="main-heading"
                className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transform translate-y-full opacity-0 transition-all duration-1000 ease-out leading-tight tracking-tight"
              >
                Fokus på användaren
              </h1>
              <div className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-pink-300 to-violet-300 bg-clip-text text-transparent">
                – från början till slut
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                  Jag sätter användaren i centrum – i varje steg av
                  designprocessen, från research till prototyper och slutlig
                  design. Resultatet? En webbplats som inte bara ser fantastisk
                  ut, utan också är enkel och rolig att använda.
                </p>
              </div>
            </div>
          </section>

          {/* Vad är UX/UI Design? */}
          <section id="uxui-services" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
            <div className="container mx-auto max-w-6xl text-center relative z-10">
              <div className="mb-16">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Vad är UX/UI Design?
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mb-12"></div>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-16">
                <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                  <span className="text-2xl font-semibold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    User Experience (UX)
                  </span>{" "}
                  handlar om hur en användare upplever din produkt. Det är
                  processen att skapa en meningsfull och relevant upplevelse.{" "}
                  <span className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    User Interface (UI)
                  </span>{" "}
                  är den visuella delen – gränssnittet som användaren
                  interagerar med. Jag kombinerar de två för att bygga en
                  webbplats som inte bara ser bra ut, utan som också är lätt att
                  använda.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* UX Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                        UX - Användarupplevelse
                      </h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-8 font-light text-lg">
                      Jag skapar användarresor, wireframes och prototyper för
                      att säkerställa att din webbplats är logisk, funktionell
                      och intuitiv.
                    </p>
                    <button className="group/btn relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25">
                      <span className="relative z-10">Läs mer</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>

                {/* UI Card */}
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-10 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        UI - Användargränssnitt
                      </h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-8 font-light text-lg">
                      Jag designar den visuella estetiken, från färgscheman och
                      typografi till knappar och ikoner, för att skapa ett
                      gränssnitt som är både vackert och effektivt.
                    </p>
                    <button className="group/btn relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                      <span className="relative z-10">Läs mer</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Min designprocess */}
          <section id="process-uxui" className="py-32 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50"></div>
            <div className="container mx-auto max-w-7xl relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                  Min designprocess
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-32">
                {/* Step 1 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-violet-500 to-pink-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform rotate-3">
                      1
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                        Forskning & Strategi
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag börjar med att djupdyka i din målgrupp och dina
                        affärsmål för att bygga en solid grund för designen.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/uxuidesign1.png"
                          alt="Forskning & Strategi"
                          width={600}
                          height={400}
                          className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/uxuidesign2.png"
                          alt="Wireframing & Prototyping"
                          width={600}
                          height={400}
                          className="rounded-3xl shadow-2xl w-full transform transition-all duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform -rotate-3">
                      2
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                        Wireframing & Prototyping
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag skissar upp strukturen och flödet på webbplatsen för
                        att testa användarvänligheten innan jag lägger till de
                        visuella detaljerna.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-3xl flex items-center justify-center text-white font-black text-3xl shadow-2xl transform rotate-3">
                      3
                    </div>
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10">
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                        Visuell design & Leverans
                      </h3>
                      <p className="text-slate-300 text-xl leading-relaxed font-light">
                        Jag skapar den slutgiltiga designen med färger,
                        typografi och interaktiva element. Därefter levererar
                        jag en komplett design som är redo för utveckling.
                      </p>
                    </div>
                  </div>
                  <div className="lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-3xl">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-violet-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                      <div className="relative">
                        <Image
                          src="/images/uxuidesign3.png"
                          alt="Visuell design & Leverans"
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/20 to-transparent"></div>
            <div className="container mx-auto max-w-4xl relative z-10">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-16">
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Låt mig designa din nästa digitala upplevelse
                </h2>
                <p className="text-xl text-slate-300 mb-12 font-light leading-relaxed">
                  Kontakta mig idag för en kostnadsfri konsultation och offert.
                </p>
                <a
                  href="mailto:kontakt@kodochdesign.se"
                  className="inline-block group"
                >
                  <button className="relative px-12 py-6 rounded-2xl font-bold text-xl text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 hover:from-violet-600 hover:via-pink-600 hover:to-cyan-600 transform hover:scale-105 shadow-2xl hover:shadow-violet-500/30">
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

export default UxUiPage;
