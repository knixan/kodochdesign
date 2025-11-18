export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div
        id="kodochdesign"
        className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Om Kod & Design
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            Jag har en bred grund inom full-stack webbutveckling, men mitt
            huvudfokus och min största passion ligger i frontend. Jag
            specialiserar mig på att omvandla idéer till visuellt tilltalande
            och funktionella webbplatser. Mitt engagemang ligger i att fånga
            essensen av ditt varumärke och leverera ett resultat som är både
            modernt och effektivt.
          </p>

          <p>
            Jag är redo att ta mig an projekt som innefattar allt från
            personliga portfolior och mindre företagswebbplatser till utvalda
            delar av större applikationer. Min tekniska överblick innefattar en
            aktuell stack där jag arbetar med ramverken React och Next.js,
            språken TypeScript och Node.js, samt databasen PostgreSQL. Jag
            säkerställer responsiv design med Tailwind CSS och levererar
            intuitiva och användarvänliga upplevelser genom ren kod och moderna
            designprinciper.
          </p>

          <p>
            Min designkompetens från grafisk design ger mig dessutom en
            värdefull helhetssyn. Detta hjälper mig att skapa en konsekvent
            varumärkesupplevelse – från utformningen av logotyp och tryckt
            material till webbplatsens stil och känsla.
          </p>
        </div>

        <div className="mt-8 text-2xl font-medium bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-center">
          Låt oss tillsammans bygga din nästa digitala upplevelse
        </div>
      </div>
    </section>
  );
}
