"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";
import { useTranslate } from "@/locales";
import SectionHeading from "./section-heading";
import Lightbox from "./lightbox";

// role: "design" = bara designen, "designDev" = designat och byggt
const projects = [
  { key: "visitum", title: "Visitum", image: "/images/bildexempel/visitum.png", role: "design" },
  { key: "nathanget", title: "Näthänget", image: "/images/bildexempel/nathanget.png", role: "designDev" },
  { key: "knegarloggen", title: "Knegarloggen", image: "/images/bildexempel/knegarloggen.png", role: "designDev" },
  { key: "motionzone", title: "MotionZone", image: "/images/bildexempel/motionzone.png", role: "design" },
  { key: "jonnyEriksson", title: "Jonny Eriksson Konst", image: "/images/bildexempel/jonny-eriksson-konst.png", role: "designDev" },
  { key: "kladerEfterVader", title: "Kläder efter väder", image: "/images/bildexempel/klader-efter-vader.png", role: "designDev" },
  { key: "bMovies", title: "B-Movies", image: "/images/bildexempel/b-movies.png", role: "designDev" },
  { key: "sweetTimeUf", title: "Sweet Time UF", image: "/images/bildexempel/sweettime.png", role: "designDev" },
  { key: "skeningevvs", title: "Skänninge VVS", image: "/images/bildexempel/skeningevvs.png", role: "designDev" },
] as const;

export default function Projects() {
  const { t } = useTranslate();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = projects.map((p) => ({
    src: p.image,
    alt: `${p.title}: ${t(`projects.items.${p.key}.type`)}`,
  }));

  return (
    <section id="projekt" className="py-16 md:py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow={t("projects.eyebrow")} className="mb-3">
          {t("projects.heading")}
        </SectionHeading>
        <p className="text-center text-sm text-slate-400 mb-12">
          {t("projects.subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <article
              key={project.key}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:border-violet-500/40 transition-colors"
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={t("lightbox.open", { name: project.title })}
                className="relative block w-full aspect-[5/4] overflow-hidden bg-white cursor-zoom-in"
              >
                <Image
                  src={project.image}
                  alt={images[i].alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMaximize2 />
                </span>
              </button>
              <div className="p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <p className="text-xs font-medium text-fuchsia-400">
                    {t(`projects.items.${project.key}.type`)}
                  </p>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-slate-300">
                    {t(`projects.roles.${project.role}`)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {t(`projects.items.${project.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </section>
  );
}
