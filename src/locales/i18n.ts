"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./langs/en.json";
import translationSe from "./langs/se.json";

i18n.use(initReactI18next).init({
  lng: "sv",
  resources: {
    en: { translations: translationEn },
    sv: { translations: translationSe },
  },
  supportedLngs: ["en", "sv"],
  fallbackLng: "sv",
  debug: false,
  ns: ["translations"],
  defaultNS: "translations",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
