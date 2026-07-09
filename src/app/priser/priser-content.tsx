"use client";

import Link from "next/link";
import Image from "next/image";
import { FiCheck, FiPackage, FiServer, FiRefreshCw } from "react-icons/fi";
import { useTranslate } from "@/locales";

const exampleProjects = [
  {
    key: "skeningevvs",
    image: "/images/prisexempel/skeningevvs.png",
    title: "Skänninge VVS",
  },
  {
    key: "fakeyNails",
    image: "/images/prisexempel/fakey-nails.png",
    title: "Fakey Nails",
  },
  {
    key: "sweetTimeUf",
    image: "/images/prisexempel/sweettimeuf.png",
    title: "Sweet Time UF",
  },
  {
    key: "tassaIn",
    image: "/images/prisexempel/tassa-in.png",
    title: "Tassa In",
  },
  {
    key: "motionzone",
    image: "/images/prisexempel/motionzone.png",
    title: "MotionZone",
  },
  {
    key: "knegarloggen",
    image: "/images/prisexempel/knegarloggen.png",
    title: "Knegarloggen",
  },
] as const;

export default function PriserContent() {
  const { t } = useTranslate();

  const packages = [
    {
      icon: FiPackage,
      key: "oneTime",
      badge: null as string | null,
    },
    {
      icon: FiServer,
      key: "hosting",
      badge: t("pricing.packages.hosting.badge"),
    },
    {
      icon: FiRefreshCw,
      key: "maintenance",
      badge: null as string | null,
    },
  ];

  const alwaysIncluded = t("pricing.alwaysIncluded.items", {
    returnObjects: true,
  }) as string[];

  const terms = t("pricing.terms.items", {
    returnObjects: true,
  }) as { title: string; text: string }[];

  return (
    <main className="pt-36 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            {t("pricing.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg) => {
            const includes = t(`pricing.packages.${pkg.key}.includes`, {
              returnObjects: true,
            }) as string[];
            return (
              <div key={pkg.key} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-8 shadow-2xl h-full flex flex-col">
                  {pkg.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-pink-500 text-white shadow-lg shadow-pink-500/30">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <pkg.icon className="text-xl text-pink-400" />
                  </div>
                  <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    {t(`pricing.packages.${pkg.key}.title`)}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {t(`pricing.packages.${pkg.key}.description`)}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <FiCheck className="text-cyan-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#kontakt"
                    className="block text-center py-3 rounded-xl bg-pink-500 font-semibold text-white text-sm shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {t("pricing.ctaButton")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Always included */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {t("pricing.alwaysIncluded.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
          </div>
          <div className="relative group max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur-lg opacity-20" />
            <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {alwaysIncluded.map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-300">
                  <FiCheck className="text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prisexempel */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              {t("pricing.examples.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400">{t("pricing.examples.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {exampleProjects.map((project) => (
              <div key={project.key} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-500" />
                <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative h-52 bg-slate-800/60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/80 text-white backdrop-blur-sm">
                      {t(`pricing.examples.projects.${project.key}.type`)}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {t(`pricing.examples.projects.${project.key}.description`)}
                    </p>
                    <p className="text-cyan-400 font-bold text-lg">
                      {t(`pricing.examples.projects.${project.key}.price`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            {t("pricing.examples.note")}
          </p>
        </div>

        {/* Terms */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              {t("pricing.terms.heading")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {terms.map((term) => (
              <div key={term.title} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-300" />
                <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-xl p-6">
                  <h3 className="font-bold text-white mb-2">{term.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {term.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500" />
            <div className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl px-12 py-10">
              <h2 className="text-2xl font-black mb-3 text-white">
                {t("pricing.final.heading")}
              </h2>
              <p className="text-slate-400 mb-6 max-w-md">
                {t("pricing.final.text")}
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-pink-500 font-semibold text-white shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                {t("pricing.final.button")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
