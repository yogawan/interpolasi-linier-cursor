import React, { useState } from "react";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const NavigationMolecules = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#EEEEEE] z-50">
      {/* Navigation Default */}
      <div className="w-full border border-b-[#17171725] px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-thin text-[#171717]">
          <a href="/" className="hover:text-gray-700">Yogawan's Starter Projects</a>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">

            {/* Hamburger Lines */}
            <span
              className={`block h-0.5 bg-[#171717] rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-[#171717] rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-[#171717] rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-[#EEEEEE] flex flex-col items-center justify-center z-50 transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-full scale-95"
        } transition-all duration-500 ease-in-out`}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >


        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className="absolute top-0 left-0 block w-6 h-0.5 bg-[#171717] rounded transform rotate-45"
            ></span>
            <span
              className="absolute top-0 left-0 block w-6 h-0.5 bg-[#171717] rounded transform -rotate-45"
            ></span>
          </div>
        </button>

        {/* Link */}
        <ul className="space-y-[-12px] text-center">
          <li className="flex justify-center items-center hover:border hover:border-b-[#17171725]">
            <a
              href="#"
              className="font-inter mr-3 text-[64px] font-thin text-[#171717] hover:text-gray-600"
              onClick={toggleMenu}
            >
              Home
            </a>
            <Icon icon="material-symbols-light:home-rounded" width="64" height="64" className="text-[#171717]" />
          </li>
          <li className="flex justify-center items-center hover:border hover:border-b-[#17171725]">
            <Icon icon="material-symbols-light:network-intel-node-rounded" width="64" height="64" className="text-[#171717]" />
            <a
              href="#"
              className="font-inter ml-3 text-[64px] font-thin text-[#171717] hover:text-gray-600"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li className="flex justify-center items-center hover:border hover:border-b-[#17171725]">
            <a
              href="#"
              className="font-inter mr-3 text-[64px] font-thin text-[#171717] hover:text-gray-600"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <Icon icon="material-symbols-light:stacks-rounded" width="64" height="64" className="text-[#171717]" />
          </li>
          <li className="flex justify-center items-center hover:border hover:border-b-[#17171725]">
            <Icon icon="material-symbols-light:work" width="64" height="64" className="text-[#171717]" />
            <a
              href="#"
              className="font-inter ml-3 text-[64px] font-thin text-[#171717] hover:text-gray-600"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li className="flex justify-center items-center hover:border hover:border-b-[#17171725]">
            <a
              href="#"
              className="font-inter mr-3 text-[64px] font-thin text-[#171717] hover:text-gray-600"
              onClick={toggleMenu}
            >
              Contacts
            </a>
            <Icon icon="material-symbols-light:contacts-rounded" width="64" height="64" className="text-[#171717]" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMolecules;
