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
          ? "bg-gray-900 bg-opacity-80"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/kodochdesign.png"
            alt="Min bild logga"
            width={80}
            height={80}
            className="full"
          />
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Kod & Design
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/#section1"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            <button className="px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 border border-transparent hover:border-pink-400">
              Hem
            </button>
          </Link>
          <Link
            href="/#section2"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            <button className="px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 border border-transparent hover:border-pink-400">
              Om Oss
            </button>
          </Link>
          <Link
            href="/#section3"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            <button className="px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 border border-transparent hover:border-pink-400">
              Tjänster
            </button>
          </Link>
          <Link
            href="/#footer"
            className="text-white hover:text-pink-400 transition-colors duration-300"
          >
            <button className="px-4 py-2 rounded-lg font-medium transition-transform duration-300 hover:scale-105 border border-transparent hover:border-pink-400">
              Kontakt
            </button>
          </Link>
        </div>

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

      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden w-full bg-gray-800 backdrop-blur-md bg-opacity-90`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link
            href="/#section1"
            onClick={toggleMobileMenu}
            className="w-full text-center"
          >
            <button className="w-4/5 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-pink-600 bg-pink-500 text-white">
              Hem
            </button>
          </Link>
          <Link
            href="/#section2"
            onClick={toggleMobileMenu}
            className="w-full text-center"
          >
            <button className="w-4/5 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-pink-600 bg-pink-500 text-white">
              Om Oss
            </button>
          </Link>
          <Link
            href="/#section3"
            onClick={toggleMobileMenu}
            className="w-full text-center"
          >
            <button className="w-4/5 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-pink-600 bg-pink-500 text-white">
              Tjänster
            </button>
          </Link>
          <Link
            href="/#footer"
            onClick={toggleMobileMenu}
            className="w-full text-center"
          >
            <button className="w-4/5 px-4 py-3 rounded-lg font-medium transition-colors duration-300 hover:bg-pink-600 bg-pink-500 text-white">
              Kontakt
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
