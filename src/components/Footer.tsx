import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-slate-950 text-slate-300 py-20 px-4 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-900/20 to-pink-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-900/20 to-cyan-900/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto">
        {/* Main footer content */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
            {/* Logo Section */}
            <div className="text-center lg:text-left group">
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-2xl p-4">
                  <Image
                    src="/kodochdesignloggo2.png"
                    alt="Footer logga"
                    width={300}
                    height={300}
                    className="h-18 w-32 object-contain"
                  />
                </div>
              </div>
             
              <p className="text-slate-400 mt-2 font-light">
                © 2025 Kod & Design
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center lg:text-left">
              <h4
                id="kontakt"
                className="text-2xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent"
              >
                Kontakt
              </h4>
              <div className="space-y-3 text-lg">
                <p className="font-semibold text-white">Kod & Design</p>
                <div className="group">
                  <a
                    href="mailto:josefineeriksson@live.se"
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    kontakt@kodochdesign.se
                  </a>
                </div>
                <p className="text-slate-400">Östergötland, Sverige</p>
              </div>

              {/* Social Media */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                {[
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/josefine-eriksson-349498345/",
                    label: "LinkedIn",
                  },
                  {
                    icon: FaFacebook,
                    href: "https://www.facebook.com/profile.php?id=61579831973399",
                    label: "Facebook",
                  },
                  {
                    icon: FaInstagram,
                    href: "https://www.instagram.com/kodochdesign",
                    label: "Instagram",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center backdrop-blur-xl bg-slate-800/60 border border-white/20 rounded-xl text-cyan-400 hover:text-white transform hover:scale-110 transition-all duration-300">
                      <Icon className="text-xl" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section */}
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Navigation
              </h4>
              <ul className="space-y-4">
                {[
                  { href: "/#section1", label: "Hem" },
                  { href: "/omoss", label: "Om oss" },
                  { href: "/#tjanster", label: "Tjänster" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group relative inline-block"
                    >
                      <span className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-lg group-hover:translate-x-2 transform transition-transform duration-300 inline-block">
                        {link.label}
                      </span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
