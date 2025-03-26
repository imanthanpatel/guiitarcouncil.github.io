// src/Components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";
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

const logo1 = "/white.png";

const Footer: React.FC = () => {
  return (
    <>
      <Newsletter />
      <footer className="bg-[#0d0c0c] text-secondary py-10 px-5 w-full">
        {/* Footer Container */}
        <div className="footer-container flex flex-col md:flex-row justify-between border-b border-white pb-14 mb-10 max-w-7xl mx-auto">
          {/* Section 1: Address */}
          <div className="footer-section px-5 flex-1 mb-8 md:mb-0">
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

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-white my-[-10px] mx-5" />

          {/* Section 2: Links */}
          <div className="footer-section px-5 flex-1 mb-8 md:mb-0">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/programs#phe-hea"
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

          {/* Section 3: Links */}
          <div className="footer-section px-5 flex-1 mb-8 md:mb-0">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/funding"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Apply for Funding
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/programs#programs-achievements"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Drone Workshop
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/programs#programs-achievements"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  3D Printing Workshop
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink
                  smooth
                  to="/"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Section 4: Links */}
          <div className="footer-section px-5 flex-1 mb-8 md:mb-0">
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link
                  to="/about"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  About Us
                </Link>
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
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-white text-[20px] hover:text-gray-500"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center mt-3 max-w-7xl mx-auto px-5">
          <img
            src={logo1}
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

        {/* All Rights Reserved Section */}
        <div className="allrsd pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-48 px-5">
          <p className="text-white text-[18px] md:text-[18px] text-center">
            All rights Reserved © 2025
          </p>
          <HashLink
            smooth
            to="/terms"
            className="text-white text-[18px] hover:text-gray-500"
          >
            Terms & Conditions
          </HashLink>
          <HashLink
            smooth
            to="/privacy"
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
