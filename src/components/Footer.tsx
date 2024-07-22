import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Nexus Finance revolutionizes the world of decentralized finance by
            simplifying the process of restaking.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Architecure"
                className="hover:text-white transition-colors duration-300"
              >
                Architecure
              </a>
            </li>
            <li>
              <a
                href="#Roadmap"
                className="hover:text-white transition-colors duration-300"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#OurTeam"
                className="hover:text-white transition-colors duration-300"
              >
                Our Team
              </a>
            </li>

            <li>
              <a
                href="#ContactUs"
                className="hover:text-white transition-colors duration-300"
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex flex-col justify-start ">
            <a
              href="https://x.com/nexusfi_xyz"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://github.com/Nexus-Fi"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>

          <p>Email: hi@nexusfi.xyz </p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Nexus Finance. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
