"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useTranslate } from "@/locales";

export default function AboutUs() {
  const { t } = useTranslate();

  return (
    <section id="om-mig" className="py-16 md:py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-14 items-center">
        <div className="relative mx-auto w-full max-w-64 md:max-w-sm">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-fuchsia-600/30 to-blue-600/30 blur-2xl" />
          {/* Gradient ring around the photo */}
          <div className="relative rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 p-1">
            <div className="relative aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/team/josefine.png"
                alt={t("about.imageAlt")}
                fill
                sizes="(min-width: 768px) 384px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-3">
            {t("about.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-6">
            {t("about.headingStart")}
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t("about.headingHighlight")}
            </span>
          </h2>
          <div className="space-y-4 text-slate-300 leading-relaxed mb-8">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </div>
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-shadow"
          >
            {t("about.cta")}
            <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
