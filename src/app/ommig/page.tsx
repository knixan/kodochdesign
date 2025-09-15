import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-[#001d32] text-gray-300 min-h-screen pt-28 pb-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Profilbild */}
          <div className="mb-10 relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f6339a] to-[#4cb7d9] blur-lg opacity-70 animate-pulse"></div>
            <Image
              src="/images/josefineErikssonProfilBild.jpg"
              alt="Profilbild av Josefine Eriksson"
              width={220}
              height={220}
              className="relative rounded-full mx-auto border-4 border-[#4cb7d9] shadow-lg"
            />
          </div>

          {/* Rubrik */}
          <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9]">
            Hej! Jag är Josefine
          </h1>

          {/* Intro-text */}
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
            Fullstackutvecklare & grafisk designer som brinner för att kombinera{" "}
            <span className="text-[#f6339a] font-semibold">kreativitet</span>{" "}
            och <span className="text-[#4cb7d9] font-semibold">teknik</span> i
            digitala lösningar. Här är min resa.
          </p>

          {/* Biografi */}
          <div className="space-y-6 text-left bg-[#002844] bg-opacity-70 rounded-2xl shadow-lg p-8 backdrop-blur-md">
            <p>
              Min resa inom IT började redan 2007 när jag gick IT-programmet på
              Kristinehamns folkhögskola. Samtidigt designade jag banners och
              bloggar åt vänner och bekanta – ofta fick jag frågor om hur man
              lade in koden. Även om jag inte kunde det då, tog jag snabbt reda
              på hur det fungerade, och snart hade jag designat hundratals
              bloggar på plattformar som Blogg.se och Blogspot.
            </p>

            <p>
              När bloggandet senare minskade i popularitet fortsatte jag att
              utforska digitalt skapande genom att designa kläder i spel och
              skriva enklare script – fortfarande på hobbynivå. 2016 startade
              jag en egen webbutik där jag sålde egendesignade posters,
              nyckelringar och andra produkter, både via min egen plattform och
              genom återförsäljare som Fyndiq.
            </p>

            <p>
              Efter några år kände jag dock att entreprenörskapet tog mer fokus
              från min kreativitet, och jag valde att ta en paus från
              IT-världen. Idag är jag tillbaka där jag trivs bäst – i IT. Jag
              har utbildat mig till fullstackutvecklare för att kunna förena min
              erfarenhet inom grafisk design och webbdesign med
              systemutveckling.
            </p>

            <p>
              Det jag uppskattar mest är att få följa en idé hela vägen – från
              en enkel skiss till en färdig, interaktiv webbplats. För mig är
              kod och design en kreativ process där varje beslut bidrar till en
              bättre användarupplevelse. Jag drivs av utmaningen att skapa
              lösningar som är både estetiska och funktionella, och jag ser fram
              emot att bidra till att förverkliga digitala visioner.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutMePage;
