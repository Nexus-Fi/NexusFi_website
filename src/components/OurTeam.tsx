"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Logo from "@/app/logo.ico"
import { WavyBackground } from "./ui/wavy-background";

const people = [
  {
    id: 1,
    name: "0xSangeet",
    designation: "Smart Contract Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 2,
    name: "0xNikhil",
    designation: "Devops Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 3,
    name: "0xShikhar",
    designation: "Backend Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 4,
    name: "0xVishal",
    designation: "Frontend Engineer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
];

const OurTeam = () => {
  return (
    <div className="relative h-[50rem] overflow-hidden flex items-center justify-center">
     <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8"> Our Team</h2>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people}/>
        </div>
     </WavyBackground>
    </div>
  );
};

export default OurTeam;
