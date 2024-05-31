"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const Architecture = () => {
  return (
    <div
      className=" h-[50rem] mb-10 w-full dark:bg-white bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2]
    relative flex flex-col items-center justify-center overflow-hidden mt-10"
    >
      <div className="flex justify-center items-center mt-3">
        <h1 className="text-white text-4xl font-bold leading-11">
          Architecture Highlights
        </h1>
      </div>
      <div className="h-[30rem] rounded-md w-full flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      " Our architecture is designed to be modular, allowing for easy upgrades and integration of new features.",
    title: "Modular Design",

  },
  {
    quote: "  Built to handle large volumes of transactions efficiently.",
    title: "Scalability",

  },
  {
    quote: " Multiple layers of security to protect against potential threats.",
    title: "Security Layers",

  },
  {
    quote:
      " Supports cross-chain interactions to maximize flexibility and usability.",
    title: "Interoperability Framework",

  },
  {
    quote:
      "  Leveraging robust and audited smart contracts to ensure reliability and security.",
    title: "Smart Contracts",
  },
];

export default Architecture
