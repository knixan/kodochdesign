import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#001d32] text-gray-300 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Image
            src="/images/kodochdesign.png"
            alt="Footer logga"
            width={300}
            height={300}
            className="mx-auto md:mx-0 h-16 w-14 object-contain"
          />
        </div>

        {/* Kontakt */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 id="kontakt" className="text-white font-bold mb-2">
            Kontakt
          </h4>
          <p>Josefine Eriksson</p>
          <p>E-post: kontakt@kodochdesign.se</p>
          <br />
          <p>Mjölby, Sverige</p>

          {/* Sociala medier */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-2xl text-[#4cb7d9]">
            <a
              href="https://www.linkedin.com/in/josefine-eriksson-349498345/"
              aria-label="LinkedIn"
              target="_blank"
              className="hover:text-[#f6339a] transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579831973399"
              aria-label="Facebook"
              target="_blank"
              className="hover:text-[#f6339a] transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/kodochdesign"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-[#f6339a] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Länkar */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-white font-bold mb-2">Länkar</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#section1"
                className="hover:text-[#4cb7d9] transition-colors duration-300"
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                href="/ommig"
                className="hover:text-[#4cb7d9] transition-colors duration-300"
              >
                Om Mig
              </Link>
            </li>
            <li>
              <Link
                href="/#tjanster"
                className="hover:text-[#4cb7d9] transition-colors duration-300"
              >
                Tjänster
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-[#002844] pt-6">
        © Kod och Design Josefine Eriksson 2025
      </div>
    </footer>
  );
};

export default Footer;
