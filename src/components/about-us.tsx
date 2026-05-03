"use client";

import Image from "next/image";
import { useTranslate } from "@/locales";

export default function AboutUs() {
  const { t } = useTranslate();

  const teamMembers = [
    {
      name: "Josefine",
      role: t("about.josefine_role"),
      bio: t("about.josefine_bio"),
      image: "/images/josefineeriksson.png",
    },
    {
      name: "Niklas",
      role: t("about.niklas_role"),
      bio: t("about.niklas_bio"),
      image: null,
    },
    {
      name: "Tobias",
      role: t("about.tobias_role"),
      bio: t("about.tobias_bio"),
      image: null,
    },
  ];

  return (
    <section id="omoss" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight tracking-tight">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div id="about" className="mb-12">
          <div
            id="kodochdesign"
            className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {t("about.team_title")}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`Profilbild av ${member.name}`}
                        width={180}
                        height={180}
                        className="relative rounded-full border-4 border-white/20 shadow-xl object-cover w-44 h-44"
                      />
                    ) : (
                      <div className="relative w-44 h-44 rounded-full border-4 border-white/20 shadow-xl bg-slate-800/60 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-slate-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
