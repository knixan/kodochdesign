import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutMePage = () => {
  return (
    <>
      <Navbar />
      <main className="py-20 px-4 min-h-screen flex items-center mt-6 justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-8">
            <Image
              src="/images/josefineErikssonProfilBild.jpg"
              alt="Profilbild av mig"
              width={200}
              height={200}
              className="rounded-full mx-auto"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hej! Jag är Josefine.
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Jag är en passionerad fullstackutvecklare som älskar att skapa
            digitala upplevelser från grunden. Min resa inom IT började redan
            2007 när jag gick IT-programmet på Kristinehamns folkhögskola.
            Samtidigt designade jag banners och bloggar åt vänner och bekanta –
            ofta fick jag frågor om hur man lade in koden. Även om jag inte
            kunde det då, tog jag snabbt reda på hur det fungerade, och snart
            hade jag designat hundratals bloggar på plattformar som Blogg.se och
            Blogspot. När bloggandet senare minskade i popularitet fortsatte jag
            att utforska digitalt skapande genom att designa kläder i spel och
            skriva enklare script – fortfarande på hobbynivå.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            År 2016 startade jag en egen webbutik där jag sålde egendesignade
            posters, nyckelringar och andra produkter, både via min egen
            plattform och genom återförsäljare som Fyndiq. Efter några år kände
            jag dock att entreprenörskapet tog mer fokus från min kreativitet,
            och jag valde att ta en paus från IT-världen.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Idag är jag tillbaka där jag trivs bäst – i IT. Jag har utbildat mig
            till fullstackutvecklare för att kunna förena min erfarenhet inom
            grafisk design och webbdesign med systemutveckling, och på så sätt
            bygga helhetslösningar från backend till frontend. Det jag
            uppskattar mest är att få följa en idé hela vägen – från en enkel
            skiss till en färdig, interaktiv webbplats. För mig är kod och
            design en kreativ process där varje beslut bidrar till en bättre
            användarupplevelse. Jag drivs av utmaningen att skapa lösningar som
            är både estetiska och funktionella, och jag ser fram emot att bidra
            till att förverkliga digitala visioner.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutMePage;
