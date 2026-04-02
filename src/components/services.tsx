import { HiCode, HiDatabase } from "react-icons/hi";
import { MdImportantDevices } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: HiCode,
      title: "Webbutveckling",
      description:
        "Full-stack webbapplikationer med moderna ramverk som React, Next.js och Node.js med responsiv design.",
      link: "#contact",
    },
    {
      icon: MdImportantDevices,
      title: "Responsiv Design",
      description:
        "Mobilanpassade, responsiva webbplatser som ser perfekta ut på alla enheter med hjälp av Tailwind CSS och moderna CSS-tekniker.",
      link: "#contact",
    },
    {
      icon: HiDatabase,
      title: "Backend-lösningar",
      description:
        "Robusta backend-system med PostgreSQL, Prisma, Server Actions och API‑utveckling för skalbara applikationer.",
      link: "#contact",
    },
    {
      icon: FaPaintBrush,
      title: "Grafisk Design",
      description:
        "Logotyper, visitkort, broschyrer, affischer för Instagram och Facebook – attraktiva, varumärkesfokuserade visuella element.",
      link: "#contact",
    },
  ];

  return (
    <section id="tjanster" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            Våra tjänster
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div className="group relative" key={service.title}>
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 p-5 md:p-8 rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl mb-6 flex items-center justify-center h-56 bg-gradient-to-r from-slate-800/40 to-slate-900/30">
                  <service.icon className="text-7xl gradient-text transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
