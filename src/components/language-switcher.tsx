"use client";

import { useState, useRef, useEffect } from "react";
import { useLocales, useTranslate } from "@/locales";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { allLangs, currentLang } = useLocales();
  const { onChangeLang, t } = useTranslate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t("nav.language")}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="relative flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/25"
      >
        <span className="text-lg leading-none">{currentLang.icon}</span>
        <span className="text-sm uppercase">{currentLang.value}</span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-40 rounded-xl backdrop-blur-xl bg-slate-900/95 border border-white/10 shadow-2xl overflow-hidden z-50"
        >
          {allLangs.map((lang) => (
            <button
              key={lang.value}
              type="button"
              role="option"
              aria-selected={lang.value === currentLang.value}
              onClick={() => {
                onChangeLang(lang.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors duration-200 ${
                lang.value === currentLang.value
                  ? "bg-white/10 text-violet-300"
                  : "text-white hover:bg-white/5"
              }`}
            >
              <span className="text-lg leading-none">{lang.icon}</span>
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
