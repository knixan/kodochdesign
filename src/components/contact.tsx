"use client";

import { useState } from "react";
import { FiZap, FiUser, FiHeart, FiArrowRight } from "react-icons/fi";
import { useTranslate } from "@/locales";

const benefitIcons = [FiZap, FiUser, FiHeart];

const inputClass =
  "w-full rounded-lg bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-violet-500/70 transition-colors";

export default function Contact() {
  const { t } = useTranslate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const benefits = t("contact.benefits", { returnObjects: true }) as {
    title: string;
    text: string;
  }[];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400 mb-3">
            {t("contact.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-2">
            {t("contact.heading")}
          </h2>
          <p className="text-slate-400 mb-10">{t("contact.subtitle")}</p>

          <ul className="space-y-6">
            {benefits.map((benefit, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <li key={benefit.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600/20 border border-violet-500/30 text-lg text-violet-300">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {benefit.title}
                    </p>
                    <p className="text-sm text-slate-400">{benefit.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-2">
              {t("contact.nameLabel")}
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder={t("contact.namePlaceholder")}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-2">
              {t("contact.emailLabel")}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder={t("contact.emailPlaceholder")}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-2">
              {t("contact.messageLabel")}
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder={t("contact.messagePlaceholder")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? t("contact.sending") : t("contact.send")}
            {status !== "loading" && (
              <FiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
            )}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-cyan-400 font-medium">
              {t("contact.success")}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 font-medium">
              {t("contact.error")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
