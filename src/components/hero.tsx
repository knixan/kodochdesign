import Link from "next/link";
import Image from "next/image";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
  SiMui,
  SiSanity,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

export default function Hero() {
  const techStack = [
    { icon: SiReact, name: "React", color: "#f472b6" },
    { icon: RiNextjsLine, name: "Next.js", color: "#f472b6" },
    { icon: SiNodedotjs, name: "Node.js", color: "#f472b6" },
    { icon: SiTypescript, name: "TypeScript", color: "#f472b6" },
    { icon: SiJavascript, name: "JavaScript", color: "#f472b6" },
    { icon: SiHtml5, name: "HTML", color: "#f472b6" },
    { icon: SiCss3, name: "CSS", color: "#f472b6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#f472b6" },
    { icon: SiShadcnui, name: "Shadcn", color: "#f472b6" },
    { icon: SiMui, name: "MUI", color: "#f472b6" },
    { icon: SiSanity, name: "Sanity", color: "#f472b6" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#f472b6" },
    { icon: SiPrisma, name: "Prisma", color: "#f472b6" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#f472b6" },
    { icon: SiAdobelightroom, name: "Lightroom", color: "#f472b6" },
    { icon: SiAdobeillustrator, name: "Illustraitor", color: "#f472b6" },
  ];


const badges = ["Frilans", "Byråklar", "SEO vänligt"];

  return (
    <section id="home" className="pt-36 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">
              Vi skapar din{" "}
              <span className="gradient-text text-pink-500">Digitala Lösning</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Hemsidor, webbapplikationer & design – skräddarsytt efter dina behov
            </p>
  <div className="flex flex-col gap-4 sm:flex-row">
              <Link
               href="/#kontakt"
               className="group relative inline-flex items-center justify-center rounded-2xl border border-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:-translate-y-0.5"
              >
                Kontakta oss!
              </Link>
              <Link
               href="/#tjanster"
               className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-pink-400/60 hover:text-pink-200"
             >
               Tjänster
             </Link>
          </div> 
            {/* Tech Icons */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="text-center p-3 rounded-lg hero-gradient hover:scale-110 transition-transform"
                >
                  <tech.icon
                    className="text-3xl mx-auto"
                    style={{ color: tech.color }}
                  />
                  <p className="text-xs mt-2">{tech.name}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full text-sm bg-[#311048]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Decorative element */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-pink-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-white/10 backdrop-blur-xl bg-white/5 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Image src="/kodochdesignloggo2.png" alt="Kod & Design" width={600} height={400} className="w-58 h-auto object-contain mx-auto" />
                  <p className="text-sm text-slate-400 font-light">Webb &bull; Design &bull; Kod</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
