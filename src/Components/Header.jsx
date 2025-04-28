import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility on mobile

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu after selecting a link on mobile
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex justify-between bg-amber-100 items-center p-8 shadow-md fixed w-full z-50"
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <a href="/">
          <span className="text-black">SYED</span>
          <span className="text-teal-500">ELIYAS</span>
        </a>
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-orange-500 hover:text-orange-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links for desktop and mobile */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:gap-8 md:items-center absolute md:static bg-amber-100 md:bg-transparent p-8 md:p-0 top-16 left-0 right-0`}
      >
        {/* Mobile navigation in columns */}
        <div className="flex flex-col md:flex-row md:gap-8 md:items-center">
          <a
            href="#about"
            onClick={() => handleLinkClick("about")}
            className={`text-orange-500 font-semibold hover:text-orange-600 ${
              activeLink === "about" ? "border-b-2 border-orange-500 text-orange-600" : ""
            } mb-4 md:mb-0`}
          >
            About Me
          </a>
          <a
            href="#skills"
            onClick={() => handleLinkClick("skills")}
            className={`text-orange-500 font-semibold hover:text-orange-600 ${
              activeLink === "skills" ? "border-b-2 border-orange-500 text-orange-600" : ""
            } mb-4 md:mb-0`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => handleLinkClick("projects")}
            className={`text-orange-500 font-semibold hover:text-orange-600 ${
              activeLink === "projects" ? "border-b-2 border-orange-500 text-orange-600" : ""
            } mb-4 md:mb-0`}
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={() => handleLinkClick("education")}
            className={`text-orange-500 font-semibold hover:text-orange-600 ${
              activeLink === "education" ? "border-b-2 border-orange-500 text-orange-600" : ""
            } mb-4 md:mb-0`}
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick("contact")}
            className={`text-orange-500 font-semibold hover:text-orange-600 ${
              activeLink === "contact" ? "border-b-2 border-orange-500 text-orange-600" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
