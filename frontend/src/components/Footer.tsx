import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Newsletter from "./Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const location = useLocation();

  const handleLinkClick = (to: string) => {
    const currentPath = location.pathname;
    const targetPath = to.split("#")[0] || "/";

    if (currentPath !== targetPath) {
      window.location.href = to;
    }
  };

  return (
    <>
      <Newsletter />
      <footer className="bg-[#0d0c0c] text-secondary py-10 px-5 w-full">
        <div className="footer-container flex flex-col items-center text-center md:flex-row md:text-left md:items-start justify-between border-b border-white pb-14 mb-10 max-w-7xl mx-auto">
          <div className="footer-section px-5 flex-1 mb-8 md:mb-0 text-center md:text-left">
            <p className="text-white text-[20px] mb-6">
              © 2025 GUIITAR Council
            </p>
            <p className="text-white text-[20px]">Event Room, Second Floor,</p>
            <p className="text-white text-[20px]">
              Anviksha - GSFC University,
            </p>
            <p className="text-white text-[20px]">Vadodara, Gujarat - 391750</p>
            <p className="text-white text-[20px]">India</p>
          </div>

          <div className="hidden md:block w-[1px] bg-white my-[-10px] mx-5" />

          <div className="footer-section px-5 flex-1 mb-8 md:mb-0 text-center md:text-left">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/workshop#events"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Previous Events
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/contact#ask"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Ask Query
                </HashLink>
              </li>
              <li className="mb-2">
                <a
                  href="https://drive.google.com/file/d/1ZyfsgLfviEvapp_Ey8jDl9grjev1tIIe/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Annual Return
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://drive.google.com/drive/folders/1JXvxN1ys5SzgwIUpajSl8wWqYnuGjkkT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Startup Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section px-5 flex-1 mb-8 md:mb-0 text-center md:text-left">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link
                  to="/funding"
                  onClick={() => handleLinkClick("/funding")}
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Apply for funding
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/droneworkshop"
                  onClick={() => handleLinkClick("/droneworkshop")}
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Drone Workshop
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/3dprintingworkshop"
                  onClick={() => handleLinkClick("/3dprintingworkshop")}
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  3D Printing Workshop
                </Link>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/#faq"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="footer-section px-5 flex-1 mb-8 md:mb-0 text-center md:text-left">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/funding#achievement"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Funding Secured
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/#associations"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Our Associations
                </HashLink>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact"
                  onClick={() => handleLinkClick("/contact")}
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Login"
                  onClick={() => handleLinkClick("/login")}
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom flex flex-col items-center text-center md:flex-row md:justify-between mt-3 max-w-7xl mx-auto px-5">
          <img
            src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743089168/white_logo_trewbg.png"
            alt="GUIITAR Council Logo"
            className="h-[50px] mb-4 md:mb-0"
          />
          <div className="social-links flex gap-4">
            <a
              href="https://www.linkedin.com/company/guiitarcouncil/"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919313262712"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/gsfcuniversity"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/gsfcuniversity"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://x.com/GSFCUniversity"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://www.youtube.com/c/GSFCUniversityOfficial"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="mailto:guiitar@gsfcuniversity.ac.in"
              className="text-white text-[30px] hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>

        <div className="allrsd pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-48 px-5">
          <p className="text-white text-[18px] md:text-[18px] text-center">
            All rights Reserved © 2025
          </p>
          <HashLink
            smooth
            to="/termsandconditions"
            className="text-white text-[18px] hover:text-gray-500"
          >
            Terms & Conditions
          </HashLink>
          <HashLink
            smooth
            to="/privacypolicy"
            className="text-white text-[18px] hover:text-gray-500"
          >
            Privacy Policy
          </HashLink>
          <a
            href="https://ivedantmistry.vercel.app/"
            className="text-white text-[18px] hover:text-gray-500"
          >
            Maintained by Vedant Mistry
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
