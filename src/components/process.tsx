"use client";

import { useTranslate } from "@/locales";
import SectionHeading from "./section-heading";

export default function Process() {
  const { t } = useTranslate();

  const steps = t("process.steps", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  return (
    <section id="arbetssatt" className="py-16 md:py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow={t("process.eyebrow")} className="mb-12">
          {t("process.heading")}
        </SectionHeading>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-sm font-semibold text-white mb-4">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="max-w-2xl mx-auto text-center text-sm text-slate-300 leading-relaxed">
          {t("process.engagement")}
        </p>
      </div>
    </section>
  );
}
