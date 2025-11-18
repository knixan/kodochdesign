import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutMePage = () => {
  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background layers */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-indigo-950/20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>

      {/* Floating elements */}
      <div className="fixed top-1/3 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-1/3 left-20 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen pt-32 pb-32 px-4">
          <div className="container mx-auto max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-20">
              {/* Profilbild */}
              <div className="mb-12 relative inline-block group">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-xl opacity-60 animate-pulse group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 blur-lg opacity-40"></div>
                <div className="relative">
                  <Image
                    src="/images/josefineeriksson.png"
                    alt="Profilbild av Josefine Eriksson"
                    width={280}
                    height={280}
                    className="relative rounded-full mx-auto border-4 border-white/20 shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent"></div>
                </div>
              </div>

              {/* Rubrik */}
              <h1 className="text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
                Hej! Jag är Josefine
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-12"></div>

              {/* Intro-text */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
                <p className="text-2xl text-slate-200 leading-relaxed font-light">
                  Fullstackutvecklare & grafisk designer som brinner för att
                  kombinera{" "}
                  <span className="font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                    kreativitet
                  </span>{" "}
                  och{" "}
                  <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    teknik
                  </span>{" "}
                  i digitala lösningar. Här är min resa.
                </p>
              </div>
            </div>

            {/* Biografi */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-3xl blur-lg opacity-50"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl shadow-2xl p-12">
                <div className="space-y-8 text-left">
                  {/* Timeline item 1 */}
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-purple-500 to-pink-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <div className="mb-2">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 rounded-full text-sm font-semibold text-purple-300">
                        2007 - Början
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Min resa inom IT började redan 2007 när jag gick
                      IT-programmet på Kristinehamns folkhögskola. Samtidigt
                      designade jag banners och bloggar åt vänner och bekanta –
                      ofta fick jag frågor om hur man lade in koden. Även om jag
                      inte kunde det då, tog jag snabbt reda på hur det
                      fungerade, och snart hade jag designat hundratals bloggar
                      på plattformar som Blogg.se och Blogspot.
                    </p>
                  </div>

                  {/* Timeline item 2 */}
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-pink-500 to-rose-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                    <div className="mb-2">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-300/30 rounded-full text-sm font-semibold text-pink-300">
                        Kreativ period
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      När bloggandet senare minskade i popularitet fortsatte jag
                      att utforska digitalt skapande genom att designa kläder i
                      spel och skriva enklare script – fortfarande på hobbynivå.
                      2016 startade jag en egen webbutik där jag sålde
                      egendesignade posters, nyckelringar och andra produkter,
                      både via min egen plattform och genom återförsäljare som
                      Fyndiq.
                    </p>
                  </div>

                  {/* Timeline item 3 */}
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-rose-500 to-cyan-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full"></div>
                    <div className="mb-2">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-rose-500/20 to-cyan-500/20 border border-rose-300/30 rounded-full text-sm font-semibold text-rose-300">
                        Reflektion
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Efter några år kände jag dock att entreprenörskapet tog
                      mer fokus från min kreativitet, och jag valde att ta en
                      paus från IT-världen. Idag är jag tillbaka där jag trivs
                      bäst – i IT. Jag har utbildat mig till fullstackutvecklare
                      för att kunna förena min erfarenhet inom grafisk design
                      och webbdesign med systemutveckling.
                    </p>
                  </div>

                  {/* Timeline item 4 */}
                  <div className="relative pl-8 border-l-2 border-gradient-to-b from-cyan-500 to-blue-500">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    <div className="mb-2">
                      <span className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-300/30 rounded-full text-sm font-semibold text-cyan-300">
                        Idag - Passion
                      </span>
                    </div>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Det jag uppskattar mest är att få följa en idé hela vägen
                      – från en enkel skiss till en färdig, interaktiv
                      webbplats. För mig är kod och design en kreativ process
                      där varje beslut bidrar till en bättre användarupplevelse.
                      Jag drivs av utmaningen att skapa lösningar som är både
                      estetiska och funktionella, och jag ser fram emot att
                      bidra till att förverkliga digitala visioner.
                    </p>
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Låt oss skapa något fantastiskt tillsammans
                    </h3>
                    <p className="text-slate-300 mb-6 font-light">
                      Redo att förverkliga din digitala vision?
                    </p>
                    <a
                      href="mailto:josefineeriksson@live.se"
                      className="inline-block group"
                    >
                      <button className="relative px-10 py-4 rounded-xl font-bold text-lg text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                        <span className="relative z-10">Kontakta mig</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutMePage;
