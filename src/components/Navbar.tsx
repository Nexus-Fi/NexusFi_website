"use client";
import React, { useState } from "react";
import Logo from "@/assets/logo.svg";

function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-[#26262680] fixed w-full z-20 top-0 start-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://nexusfi.xyz/" className="flex items-center space-x-3">
          <Logo className="w-10 h-10 fill-white" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            NexusFi
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <a
            href="https://nexusfi-testnet.netlify.app/"
            type="button"
            className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Restake Now
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMenuOpen && "bg-[#181818c5]"
          } w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://litepaper.nexusfi.xyz/"
                className="block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Litepaper
              </a>
            </li>
            <li>
              <a
                href="#Architecture"
                className="block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Architecture
              </a>
            </li>
            <li>
              <a
                href="#Roadmap"
                className="block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#OurTeam"
                className="block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#ContactUs"
                className="block py-2 px-3 rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
