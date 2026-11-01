"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useTranslate } from "@/locales";
import LanguageSwitcher from "./language-switcher";

const sectionIds = ["home", "tjanster", "projekt", "om-mig", "kontakt"];

export default function Navbar() {
  const { t } = useTranslate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("home");

  const navLinks = [
    { id: "home", label: t("nav.home") },
    { id: "tjanster", label: t("nav.services") },
    { id: "projekt", label: t("nav.projects") },
    { id: "om-mig", label: t("nav.about") },
    { id: "kontakt", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link for the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-[#060818]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex justify-between items-center">
        <Link href="/" aria-label="Kod & Design">
          <Image
            src="/kodochdesignloggo2.png"
            alt="Logga Kod & Design"
            width={1080}
            height={480}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              className={clsx(
                "relative py-2 text-sm font-medium transition-colors",
                activeId === link.id
                  ? "text-fuchsia-400"
                  : "text-slate-300 hover:text-white",
              )}
            >
              {link.label}
              <span
                className={clsx(
                  "absolute left-0 -bottom-0.5 h-0.5 w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 transition-transform origin-left",
                  activeId === link.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={t("nav.openMenu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col px-6 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={clsx(
                "py-3 text-base font-medium border-b border-white/5 last:border-0",
                activeId === link.id ? "text-fuchsia-400" : "text-slate-300",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
