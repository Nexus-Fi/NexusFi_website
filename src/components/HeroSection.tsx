"use client";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "./ui/moving-border";
import { Spotlight } from "@/components/ui/Spotlight";

const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center 
    relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 mt-10 relative z-10 w-full text-center">
        <h1
          className="mt-1 mb-8  pb-3 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-white"
        >
          Resktake your NIBI&apos;s to{" "}
          <span>
            <Typewriter
              words={["Secure", "Validate", "Earn"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-2 text-base md:text-lg  text-neutral-300 max-w-2xl mx-auto">
          Nexus Finance enables seamless restaking and validation on the Nibiru
          platform, empowering users to secure, validate, and earn. <br />{" "}
          <br />
          Join us in creating a more secure and interconnected financial future.
        </p>
      </div>
      <div className="mt-4">
        <Link href={"https://litepaper.nexusfi.xyz/"}>
          <Button
            borderRadius="1.75rem"
            className="bg-black dark:bg-white text-white dark:text-black border-slate-700 dark:border-neutral-200"
          >
            Explore Restaking
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
