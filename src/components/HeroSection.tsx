import React from 'react'
import Link from 'next/link';
import { Button} from './ui/moving-border';
import { Spotlight } from "@/components/ui/Spotlight";


const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center 
    relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 mt-10 relative z-10 w-full text-center text-gray-300">
        <h1
          className="mt-1 mb-8  pb-3 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Restaking Made Simple for Enhanced Security
        </h1>
        <p className="mt-2 font-bold text-base md:text-lg  text-neutral-300 max-w-2xl mx-auto">
          "Nexus Finance revolutionizes the world of decentralized finance by
          simplifying the process of restaking. Our platform leverages the power
          of blockchain to provide seamless, secure, and efficient restaking
          solutions. By enabling shared security, Nexus Finance enhances the
          robustness and resilience of the entire DeFi ecosystem. Join us in
          creating a more secure and interconnected financial future."
        </p>
      </div>
      <div className="mt-4">
        <Link href={"/"}>
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
}

export default HeroSection
