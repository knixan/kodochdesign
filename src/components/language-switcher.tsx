"use client";

import { useState, useRef, useEffect } from "react";
import { useLocales, useTranslate } from "@/locales";

export default function LanguageSwitcher({
  openUpward = false,
}: {
  openUpward?: boolean;
}) {
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
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
      >
        <span className="text-base leading-none">{currentLang.icon}</span>
        <span className="uppercase">{currentLang.value}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          className={`absolute right-0 ${openUpward ? "bottom-full mb-2" : "mt-2"} w-40 rounded-xl bg-[#0b1028] border border-white/10 shadow-2xl overflow-hidden z-50`}
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
