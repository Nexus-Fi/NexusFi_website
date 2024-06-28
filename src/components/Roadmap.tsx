"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const Roadmap = () => {
  return (
    <div id="Roadmap">
      <div className="text-center flex flex-col justify-center relative ">
        <div className="">
          <h3 className="text-xl mb-2 leading-10 text-white dark:text-black">
            Progression
          </h3>
        </div>
        <div>
          <h1 className="text-6xl mt-4 mb-4 leading-10 font-extrabold text-blue-400">
            Roadmap
          </h1>
        </div>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-blue-200 dark:text-black  rounded-full text-xl leading-2 w-fit px-1 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-3xl text-blue-300 dark:text-black font-semibold mb-4">
                {item.title}
              </p>

              <div className="text-md text-white dark:text-black prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};
const dummyContent = [
  {
    title: "Q3 2024",
    description: (
      <>
        <div>
          <ul className="text-lg font-semibold list-disc ">
            <li> Nibiru EVM Integration </li>
            <li>Start integration with Nibiru EVM.</li>
            <li>Develop necessary smart contracts.</li>
            <li>Conduct preliminary testing.</li>
          </ul>
        </div>
      </>
    ),
    badge: "Phase 1 :-",
  },
  {
    title: "Q4 2024",
    description: (
      <>
        <div>
          <ul className="text-lg font-semibold list-disc ">
            <li>Building a Scalable and Secure Platform for AVS Onboarding </li>
            <li> Develop AVS infrastructure.</li>
            <li>Implement security protocols.</li>
            <li>Begin AVS onboarding process.</li>
          </ul>
        </div>
      </>
    ),
    badge: "Phase 2 :-",
  },
  {
    title: "Q1 2025",
    description: (
      <>
        <div>
          <ul className="text-lg font-semibold list-disc ">
            <li> Token Launch </li>
            <li>Mint and distribute tokens.</li>
            <li>List tokens on major exchanges.</li>
          </ul>
        </div>
      </>
    ),
    badge: "Phase 3 :-",
  },
];
export default Roadmap;

// Q3 2024
// Nibiru EVM Integration
// Start integration with Nibiru EVM.
// Develop necessary smart contracts.
// Conduct preliminary testing.
// Q4 2024
// Building a Scalable and Secure Platform for AVS Onboarding
// Develop AVS infrastructure.
// Implement security protocols.
// Begin AVS onboarding process.
// Q1 2025
// Token Launch
// Mint and distribute tokens.
// List tokens on major exchanges.
