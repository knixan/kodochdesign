import Image from "next/image";
import Link from "next/link";
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

  const badges = ["Frilans", "Byråklar", "SEO-anpassad"];

  const packages = [
    {
      name: "Bas",
      subtitle: "Startsida",
      price: "från 4.900 kr",
      timeline: "ca 5 dagar+",
      detail:
        "En enkel, ren och responsiv 1-sides webbplats byggd i modern frontend-teknik. Perfekt för portfolios, presentationer eller små projekt.",
    },
    {
      name: "Standard",
      subtitle: "Företagssida",
      price: "från 7.900 kr",
      timeline: "ca 10 dagar+",
      detail:
        "En professionell fler-sides webbplats 2-4 sidor med modern design, responsiv layout och förbättrad struktur. Perfekt för småföretag som behöver mer innehåll.",
    },
    {
      name: "Premium",
      subtitle: "Komplett hemside paket",
      price: "från 14.900 kr",
      timeline: "ca 14 dagar+",
      detail:
        "En komplett, skräddarsydd webbplats 5-7 sidor med avancerad design, flera sidor och full kodleverans. Inkluderar designanpassning, innehållsuppladdning och enhetlig stil.",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden py-20 px-4">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-slate-300">
              <span className="block h-2 w-2 rounded-full bg-gradient-to-r from-pink-400 to-cyan-400" />
              Fullstack + design
            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Digitala upplevelser
              <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                som bygger varumärken
              </span>
            </h1>

            <p className="text-lg text-slate-300 md:text-xl">
              Jag skapar och designar hemsidor som fångar essensen av ditt
              företag och presenterar ditt budskap på ett tydligt och visuellt
              tilltalande sätt.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#kontakt"
                className="group relative inline-flex items-center justify-center rounded-2xl border border-transparent bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform hover:-translate-y-0.5"
              >
                Vill du bli uppringd? Maila mig!
              </Link>
              <Link
                href="/webbsidor"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:border-pink-400/60 hover:text-pink-200"
              >
                Se exempel på webbsidor
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid gap-6 pt-4 sm:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {pkg.timeline}
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {pkg.price}
                  </p>
                  <p className="text-sm font-semibold text-pink-200">
                    {pkg.name} · {pkg.subtitle}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{pkg.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Techstack jag levererar med
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/40 px-3 py-2 text-sm text-slate-200"
                  >
                    <tech.icon
                      className="text-lg"
                      style={{ color: tech.color }}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 opacity-40 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-2xl shadow-2xl">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/josefineE.png"
                  alt="Josefine Eriksson"
                  width={540}
                  height={640}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Process
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Workshop → Design → Kod → Lansering
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Jag guidar dig genom varje steg.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Tillgänglighet
                  </p>
                  <p className="mt-2 text-3xl font-black text-cyan-300">
                    Jan 2026
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    1 plats kvar för helhetsprojekt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
