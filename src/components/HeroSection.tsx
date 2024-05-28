import React from 'react'
import Link from 'next/link';
import { Button} from './ui/moving-border';


const HeroSection = () => {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center 
    relative overflow-hidden mx-auto py-10 md:py-0"
    >
     
      <div className="p-4 relative z-10 w-full text-center text-gray-300">
        <h1
          className="mt-8 pb-3 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent
         bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          NexusFi Restaking Nibru
        </h1>
        <p className="mt-6 font-bold text-base md:text-lg  text-neutral-300 max-w-2xl mx-auto">
          The platform facilitates stakers in participating in the validation of
          new software modules within the Nibi ecosystem. Stakers can opt in by
          granting the Nexus smart contracts permission to enforce additional
          slashing conditions on their staked tokens. This opt-in mechanism
          enables stakers to validate various types of modules, such as
          consensus protocols, data availability layers, virtual machines,
          keeper networks, oracle networks, bridges, threshold cryptography
          schemes, and trusted execution environments.
        </p>
      </div>
      <div className='mt-4'>
        <Link href={"/"}>
          <Button borderRadius='1.75rem'
          className='bg-black dark:bg-white text-white dark:text-black border-slate-700 dark:border-neutral-200'>
          Explore Restaking
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection
