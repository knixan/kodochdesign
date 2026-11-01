import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Process from "@/components/process";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <div className="bg-[#060818] text-white font-sans relative overflow-hidden min-h-screen">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute top-[40%] -left-40 w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-3xl" />
      <div className="pointer-events-none absolute top-[65%] -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-700/10 blur-3xl" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <Process />
          <AboutUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
