"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const galleryItems = [
  {
    title: "Ledningsteknik",
    description:
      "Uppdatering av design och teknik från en äldre webbplats till en modern Next.js-lösning med förbättrad användarupplevelse.",
    src: "/images/carousel/ledningsteknik-mockup.jpg",
    liveUrl: "https://ledningsteknik.vercel.app/",
    accent: "bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400",
  },
  {
    title: "Skeninge VVS",
    description:
      "Litet familje företag som har en VVS firma. Personlig tecknad design på de som jobbar på firman. Enkel navigering för tjänster och kontaktuppgifter.",
    src: "/images/carousel/skeningevvs-mockup.png",
    liveUrl: "https://skeningevvs.se",
    accent: "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500",
  },
  {
    title: "TAI Gym",
    description:
      "Gym med fokus på Prispaket och gymutrustning samt meddlemsskap",
    src: "/images/carousel/taigym-mockup.jpg",
    liveUrl: "/#",
    accent: "bg-gradient-to-r from-orange-400 via-pink-500 to-red-500",
  },
  {
    title: "Jonny Eriksson",
    description: "Personlig portfölj med fokus på konst",
    src: "/images/carousel/jonnyeriksson-mockup.jpg",
    liveUrl: "/#",
    accent: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    title: "Gammelbygg",
    description:
      "Litet byggnadsmåleriföretag med fokus på traditionellt måleri.",
    src: "/images/carousel/gammelbygg-mockup.jpg",
    liveUrl: "https://gammelbyggnadsmaleri.vercel.app/",
    accent: "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500",
  },
];

type GalleryItem = (typeof galleryItems)[number];

export default function WebbsidorPage() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!activeItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
        <div className="absolute right-0 top-16 h-[28rem] w-[28rem] bg-pink-500/20 blur-[180px]" />
        <div className="absolute left-6 bottom-0 h-[22rem] w-[22rem] bg-violet-600/30 blur-[160px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              Webbsidor & case
            </p>
            <h1 className="mt-4 text-4xl font-black text-white md:text-6xl">
              Bildgalleri med kundcase
            </h1>
            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              Klicka på en bild för att öppna den i helskärm och se fler
              detaljer. Varje case länkar till liveversionen så att du kan
              utforska upplevelsen.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {galleryItems.map((item) => (
              <article key={item.title} className="group relative">
                <div
                  className={`absolute -inset-1 rounded-3xl opacity-40 blur-2xl transition duration-500 group-hover:opacity-70 ${item.accent}`}
                />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="w-full"
                    aria-label={`Visa större bild av ${item.title}`}
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-x-4 bottom-4 rounded-full bg-black/40 px-4 py-1 text-center text-xs uppercase tracking-[0.4em] text-white">
                        Klicka för helskärm
                      </div>
                    </div>
                  </button>

                  <div className="p-8 space-y-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.3em] text-pink-200">
                        Next.js · Tailwind · SEO
                      </p>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveItem(item)}
                        className="rounded-2xl border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-pink-400/60"
                      >
                        Visa större
                      </button>
                      <Link
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5"
                      >
                        Öppna live-sida
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-slate-950/80 backdrop-blur"
              onClick={() => setActiveItem(null)}
            />
            <div className="relative max-w-4xl w-full rounded-3xl border border-white/10 bg-slate-950/90 p-6 backdrop-blur-2xl shadow-2xl">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute right-6 top-6 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 hover:text-white"
              >
                Stäng
              </button>
              <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr]">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 text-white">
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                    Live-case
                  </p>
                  <h3 className="text-3xl font-black">{activeItem.title}</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {activeItem.description}
                  </p>
                  <Link
                    href={activeItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:-translate-y-0.5"
                  >
                    Besök live-sidan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
