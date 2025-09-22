"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-2xl"
          : "backdrop-blur-sm bg-slate-950/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-xl p-2">
              <Image
                src="/images/kodochdesign.png"
                alt="Logga Kod & Design"
                width={80}
                height={80}
                className="h-10 w-8 object-contain"
              />
            </div>
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Kod & Design
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-2">
          {[
            { href: "/#section1", label: "Hem" },
            { href: "/#kodochdesign", label: "Om Kod&Design" },
            { href: "/#tjanster", label: "Tjänster" },
            { href: "#kontakt", label: "Kontakt" },
            { href: "/ommig", label: "Om mig" },
          ].map((link, i) => (
            <Link key={i} href={link.href} className="group relative">
              <button className="relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/25">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-violet-300">
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="relative p-3 text-white focus:outline-none group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-xl p-2">
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } md:hidden overflow-hidden transition-all duration-500 ease-in-out backdrop-blur-xl bg-slate-900/90 border-t border-white/10`}
      >
        <div className="flex flex-col items-center py-6 space-y-3 px-6">
          {[
            { href: "/#section1", label: "Hem" },
            { href: "/#kodochdesign", label: "Om Kod&Design" },
            { href: "#tjanster", label: "Tjänster" },
            { href: "#kontakt", label: "Kontakt" },
            { href: "/ommig", label: "Om mig" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={toggleMobileMenu}
              className="w-full group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <button className="relative w-full px-6 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 backdrop-blur-xl bg-slate-800/60 border border-white/20 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-violet-500/25">
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-pink-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
