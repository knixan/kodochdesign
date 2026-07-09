"use client";

import { useState } from "react";
import { useTranslate } from "@/locales";

export default function Contact() {
  const { t } = useTranslate();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
    <section id="kontakt" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            {t("contact.heading")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 text-lg">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
          <form
            onSubmit={handleSubmit}
            className="relative backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-pink-400/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-pink-400/60 focus:bg-white/8 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                {t("contact.messageLabel")}
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder={t("contact.messagePlaceholder")}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-pink-400/60 focus:bg-white/8 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-2xl bg-pink-500 font-semibold text-white shadow-lg shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? t("contact.sending") : t("contact.send")}
            </button>

            {status === "success" && (
              <p className="text-center text-cyan-400 font-medium">
                {t("contact.success")}
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 font-medium">
                {t("contact.error")}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
