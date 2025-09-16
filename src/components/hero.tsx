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
      className="relative flex flex-col items-center w-full pt-32 pb-10 px-4 md:px-6 lg:px-8 bg-gray-900"
    >
      {/* Top text block */}
      <div className="relative z-10 max-w-5xl w-full text-center mb-8">
        <h1
          id="main-heading"
          className="text-4xl md:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-400 transition-all duration-700 ease-out translate-y-8 opacity-0"
        >
          Digitala helhetslösningar – från kod till design
        </h1>
        <p
          id="sub-heading"
          className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-700 ease-out delay-100 translate-y-8 opacity-0"
        >
          En kombination av <strong>modern kod</strong> och{" "}
          <strong>kreativ design</strong> – allt på ett ställe.
        </p>
        <Link href="#tjanster" className="inline-block">
          <button className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-[1.03] bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-500/30">
            Se mina tjänster
          </button>
        </Link>
      </div>

      {/* Carousel */}
      <div className="h-full w-3/4 ">
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
    </section>
  );
};

export default Hero;
