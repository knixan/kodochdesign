"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Carousel from "@/components/carousel";

const HomePage = () => {
  useEffect(() => {}, []);

  return (
    <div className="bg-slate-950 text-white font-sans relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20 animate-gradient-xy"></div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Carousel />
          <About />

          <Services />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
