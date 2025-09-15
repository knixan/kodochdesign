import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-6 md:mb-0">
          <Image
            src="/images/kodochdesign.png"
            alt="Footer logga"
            width={300}
            height={300}
            className="full mx-auto md:mx-0 h-16 w-14 object-contain"
          />
        </div>

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 id="kontakt" className="text-white font-bold mb-2">
            Kontakt
          </h4>
          <p>Josefine Eriksson</p>
          <p>E-post: kontakt@kodochdesign.se</p>
          <br />
          <p>Mjölby SVERIGE</p>
          <div className="flex justify-center text-cyan-400 md:justify-start space-x-4 mt-4  text-2xl">
            <a
              href="https://www.linkedin.com/in/josefine-eriksson-349498345/"
              aria-label="LinkedIn"
              target="_blank"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579831973399"
              aria-label="Facebook"
              target="_blank"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/kodochdesign"
              aria-label="Instagram"
              target="_blank"
              className="hover:text-pink-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className="text-white font-bold mb-2">Länkar</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#section1"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Hem
              </Link>
            </li>
            <li>
              <Link
                href="/ommig"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Om Mig
              </Link>
            </li>
            <li>
              <Link
                href="/#tjanster"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Tjänster
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © Kod och Design Josefine Eriksson 2025
      </div>
    </footer>
  );
};

export default Footer;
