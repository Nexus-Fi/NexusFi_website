"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Logo from "@/app/logo.ico";
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "0xSangeet",
    designation: "Smart Contract Engineer",
    image: "https://i.ibb.co/52GWQMk/IMG-20240601-161938-908.jpg",
  },
  {
    id: 2,
    name: "ftNikhil.eth",
    designation: "Devops Engineer",
    image: "https://i.ibb.co/SVk2SHw/Screenshot-2024-06-01-at-16-41-08.png",
  },
  {
    id: 3,
    name: "0xShikhar",
    designation: "Backend Engineer",
    image:
      "https://pbs.twimg.com/profile_images/1708431007198937088/FWSlBbaL_400x400.png",
  },
  {
    id: 4,
    name: "0xVishal",
    designation: "Frontend Engineer",
    image:
      "https://pbs.twimg.com/profile_images/1780210768337629184/OXXMzNFK_400x400.jpg",
  },
];

const OurTeam = () => {
  return (
    <div
      id="OurTeam"
      className="relative h-[50rem] overflow-hidden flex items-center justify-center"
    >
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          {" "}
          Our Team
        </h2>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default OurTeam;
