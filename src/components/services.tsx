"use client";

import Image from "next/image";
import { useTranslate } from "@/locales";
import SectionHeading from "./section-heading";

const services = [
  // TODO: byt till en egen Figma-bild när den finns
  { key: "design", image: "/images/responsiv.jpg" },
  { key: "frontend", image: "/images/webbdesign.jpg" },
  { key: "graphic", image: "/images/grafiskdesign.jpg" },
  { key: "backend", image: "/images/backend.jpg" },
] as const;

export default function Services() {
  const { t } = useTranslate();

  return (
    <section id="tjanster" className="py-16 md:py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow={t("services.eyebrow")} className="mb-12">
          {t("services.heading")}
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map(({ key, image }) => {
            const title = t(`services.${key}.title`);
            const tags = t(`services.${key}.tags`, {
              returnObjects: true,
            }) as string[];

            return (
              <article
                key={key}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 hover:border-violet-500/40 hover:bg-white/[0.05] transition-colors"
              >
                <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {t(`services.${key}.description`)}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
