"use client";

import Link from "next/link";
import { FiFigma, FiCode, FiMonitor, FiServer, FiArrowRight } from "react-icons/fi";
import { useTranslate } from "@/locales";

export default function Hero() {
  const { t } = useTranslate();

  const serviceIcons = [
    { icon: FiFigma, label: t("hero.iconDesign") },
    { icon: FiCode, label: t("hero.iconFrontend") },
    { icon: FiMonitor, label: t("hero.iconResponsive") },
    { icon: FiServer, label: t("hero.iconBackend") },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5"
    >
      {/* Background image, faded out towards the text on the left */}
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] bg-no-repeat"
        style={{ backgroundImage: "url('/images/kodochdesign-hero.png')" }}
      />
      <div className="absolute inset-0 bg-[#060818]/75 md:bg-transparent md:bg-gradient-to-r md:from-[#060818] md:via-[#060818]/80 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060818] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium text-fuchsia-200 mb-6">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400" />
            {t("hero.badge")}
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-5">
            <span className="text-white">{t("hero.titleStart")}</span>
            <br />
            <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              {t("hero.titleHighlight")}
            </span>
          </h1>

          <p className="text-white text-lg font-medium mb-3">
            {t("hero.subtitle")}
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            {t("hero.description")}
          </p>

          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {serviceIcons.map(({ icon: Icon, label }) => (
              <li key={label} className="flex flex-col gap-2">
                <Icon className="text-2xl text-fuchsia-400" />
                <span className="text-xs text-slate-300">{label}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-shadow"
            >
              {t("hero.cta")}
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/#projekt"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
