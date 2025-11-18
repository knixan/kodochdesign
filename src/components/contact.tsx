"use client";

import { SiFiverr } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 text-center">
          Ready to start your project? Reach out on Fiverr or via email.
        </p>

        <div className="card-gradient rounded-xl p-8 gradient-border">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-300">
              Contact me on Fiverr:
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
              <a
                href="https://www.fiverr.com/kodochdesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#1b1e28] border border-[#311048] hover:scale-105 transition"
              >
                <SiFiverr className="text-2xl text-green-400" />
                <span className="text-sm md:text-base">
                  Contact me on Fiverr
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
