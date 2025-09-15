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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "bg-[#001d32] bg-opacity-90 backdrop-blur-md"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/kodochdesign.png"
            alt="Logga Kod & Design"
            width={80}
            height={80}
            className="h-12 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f6339a] to-[#4cb7d9]">
            Kod & Design
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { href: "/#section1", label: "Hem" },
            { href: "/#kodochdesign", label: "Om Kod&Design" },
            { href: "/#tjanster", label: "Tjänster" },
            { href: "#kontakt", label: "Kontakt" },
            { href: "/ommig", label: "Om mig" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-white transition-colors duration-300"
            >
              <button className="px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 border border-transparent hover:border-[#4cb7d9] hover:text-[#4cb7d9]">
                {link.label}
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden w-full bg-[#001d32] backdrop-blur-md bg-opacity-95`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
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
              className="w-full text-center"
            >
              <button className="w-4/5 px-4 py-3 rounded-lg font-medium transition-colors duration-300 bg-[#f6339a] hover:bg-[#4cb7d9] text-white">
                {link.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
