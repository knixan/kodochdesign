"use client";

import { useEffect } from "react";
import Link from "next/link";
import ImageCarousel from "./image-carousel";

const Hero = () => {
  useEffect(() => {
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");
    requestAnimationFrame(() => {
      setTimeout(() => {
        mainHeading?.classList.remove("translate-y-8", "opacity-0");
        subHeading?.classList.remove("translate-y-8", "opacity-0");
      }, 200);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center w-full pt-40 pb-20 px-4 md:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/20 to-cyan-950/20"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Top text block */}
      <div className="relative z-10 max-w-6xl w-full text-center mb-16">
        <h1
          id="main-heading"
          className="text-5xl md:text-8xl font-black mb-8 bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-700 ease-out translate-y-8 opacity-0 leading-tight tracking-tight"
        >
          Digitala helhetslösningar
        </h1>
        <div className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
          – från kod till design
        </div>

        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
          <p
            id="sub-heading"
            className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light transition-all duration-700 ease-out delay-100 translate-y-8 opacity-0"
          >
            En kombination av{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              modern kod
            </span>{" "}
            och{" "}
            <span className="font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              kreativ design
            </span>{" "}
            – allt på ett ställe.
          </p>
        </div>

        <Link href="#tjanster" className="inline-block group">
          <button className="relative px-12 py-6 rounded-2xl font-bold text-xl text-white overflow-hidden transition-all duration-300 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 hover:from-violet-600 hover:via-pink-600 hover:to-cyan-600 transform hover:scale-105 shadow-2xl hover:shadow-violet-500/30">
            <span className="relative z-10">Se mina tjänster</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </Link>
      </div>

      {/* Enhanced Carousel */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>

          {/* Carousel container */}
          <div className="relative backdrop-blur-xl bg-slate-900/20 border border-white/10 rounded-3xl p-4 shadow-2xl">
            <ImageCarousel
              images={[
                {
                  src: "/images/mockup-alldevice-graphicdesign-tai.jpg",
                  alt: "Responsiv webbplats på flera enheter",
                },
                {
                  src: "/images/mockup-alldevice-graphicdesign-bygg.jpg",
                  alt: "UX/UI wireframes och prototyper",
                },
              ]}
              interval={5000}
              autoPlay
              rounded
            />
          </div>

          {/* Additional glow effects */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-20 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
