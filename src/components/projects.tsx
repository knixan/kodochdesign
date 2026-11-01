"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";
import { useTranslate } from "@/locales";
import SectionHeading from "./section-heading";
import Lightbox from "./lightbox";

const projects = [
  { key: "motionzone", title: "MotionZone", image: "/images/prisexempel/motionzone.png" },
  { key: "fakeyNails", title: "Fakey Nails", image: "/images/prisexempel/fakey-nails.png" },
  { key: "skeningevvs", title: "Skänninge VVS", image: "/images/prisexempel/skeningevvs.png" },
  { key: "sweetTimeUf", title: "Sweet Time UF", image: "/images/prisexempel/sweettimeuf.png" },
  { key: "tassaIn", title: "Tassa In", image: "/images/prisexempel/tassa-in.png" },
  { key: "knegarloggen", title: "Knegarloggen", image: "/images/prisexempel/knegarloggen.png" },
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
                className="relative block w-full aspect-[16/10] overflow-hidden cursor-zoom-in"
              >
                <Image
                  src={project.image}
                  alt={images[i].alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMaximize2 />
                </span>
              </button>
              <div className="p-5">
                <p className="text-xs font-medium text-fuchsia-400 mb-1">
                  {t(`projects.items.${project.key}.type`)}
                </p>
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
