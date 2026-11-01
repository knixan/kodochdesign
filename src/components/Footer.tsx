"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { useTranslate } from "@/locales";
import LanguageSwitcher from "./language-switcher";

const socials = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/113094350",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/kodochdesign",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=61579831973399",
    label: "Facebook",
  },
];

export default function Footer() {
  const { t } = useTranslate();

  const navLinks = [
    { href: "/#home", label: t("nav.home") },
    { href: "/#tjanster", label: t("nav.services") },
    { href: "/#projekt", label: t("nav.projects") },
    { href: "/#om-mig", label: t("nav.about") },
    { href: "/#kontakt", label: t("nav.contact") },
  ];

  return (
    <footer id="footer" className="border-t border-white/5 px-6 py-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_2fr_1.5fr_auto] gap-10">
        <div>
          <Image
            src="/kodochdesignloggo2.png"
            alt="Logga Kod & Design"
            width={1080}
            height={480}
            className="h-10 w-auto mb-4"
          />
          <p className="text-xs text-slate-500 mb-5">{t("footer.copyright")}</p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-violet-500/50 transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            {t("footer.contactHeading")}
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0" />
              <a
                href="mailto:kontakt@kodochdesign.se"
                className="hover:text-white transition-colors"
              >
                kontakt@kodochdesign.se
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="shrink-0" />
              {t("footer.address")}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">
            {t("footer.navHeading")}
          </h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <LanguageSwitcher openUpward />
        </div>
      </div>
    </footer>
  );
}
