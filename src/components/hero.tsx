"use client";

import Link from "next/link";
import { FiCode, FiMonitor, FiServer, FiPenTool } from "react-icons/fi";
import { useTranslate } from "@/locales";

export default function Hero() {
  const { t } = useTranslate();

  const serviceIcons = [
    { icon: FiCode, label: t("hero.iconWebDev") },
    { icon: FiMonitor, label: t("hero.iconResponsive") },
    { icon: FiServer, label: t("hero.iconBackend") },
    { icon: FiPenTool, label: t("hero.iconGraphic") },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/kodochdesign-hero.png')" }}
      />
      {/* Overlay so text stays readable */}
      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 max-w-3xl px-8 pt-32 pb-20 mx-auto md:mx-0 md:pl-20 lg:pl-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
          <span className="text-white">{t("hero.titleWe")}</span>
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t("hero.titleWebsites")}
          </span>
          <br />
          <span className="text-white">{t("hero.titleAnd")}</span>
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t("hero.titleProducts")}
          </span>
        </h1>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-4 max-w-xl font-semibold">
          {t("hero.subtitle")}
        </p>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          {t("hero.description")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {serviceIcons.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:border-pink-400/50 group-hover:bg-pink-500/10 transition-all duration-300">
                <Icon className="text-2xl text-pink-400 group-hover:text-pink-300 transition-colors" />
              </div>
              <span className="text-xs text-slate-400 text-center leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/#kontakt"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-semibold text-base hover:border-pink-400/60 hover:bg-pink-500/10 transition-all duration-300 group"
        >
          {t("hero.cta")}
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
