"use client"
import React from 'react'
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const Roadmap = () => {
  return (
    <div>
      <div className="text-center flex flex-col justify-center relative ">
        <div className="">
          <h3 className="text-3xl mb-2 leading-10 font-bold text-white dark:text-black">
            Progression
          </h3>
        </div>
        <div>
          <h1 className="text-6xl mt-4 mb-4 leading-10 font-extrabold text-blue-400">
            {" "}
            Roadmap
          </h1>
        </div>
      </div>
      <TracingBeam className="px-6">
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white dark:text-black  rounded-full text-3xl font-bold leading-2 w-fit px-1 py-1 mb-4">
                {item.badge}
              </h2>

              <p className="text-3xl text-white dark:text-black font-semibold mb-4">
                {item.title}
              </p>

              <div className="text-lg text-white dark:text-black prose prose-sm dark:prose-invert">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
const dummyContent = [
  {
    title: "Design and Prototyping (Q2 2024)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Architecture Design :-{" "}
          </span>{" "}
          Design the architecture of the restaking platform, including smart
          contracts and the Nexus Pod system.
        </p>
        <p>
          <span className="text-2xl font-semibold"> Prototyping :- </span> Build
          a prototype of the platform to validate key concepts and
          functionalities
        </p>
      </>
    ),
    badge: "Phase 1 :-",
  },

  {
    title: "Development (Q3 2024)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold ">
            Smart Contract Development :-
          </span>
          Develop and test the smart contracts for token locking, staking, and
          slashing mechanisms.
        </p>
        <p>
          <span className="text-2xl font-semibold">
            Nexus Pod Development :-
          </span>
          Implement the Nexus Pod system for monitoring validator balances and
          enforcing slashing.
        </p>

        <p>
          <span className="text-2xl font-semibold">
            User Interface Development :-
          </span>
          Create a user-friendly interface for interacting with the restaking
          platform.
        </p>

        <p>
          <span className="text-2xl font-semibold">Integration :-</span>
          Integrate the platform with Nibirus ecosystem and other relevant
          systems.
        </p>
      </>
    ),
    badge: "Phase 2 :-",
  },

  {
    title: "Testing and Auditing (Q3 2024)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold">Internal Testing:-</span>
          Conduct extensive internal testing to identify and fix bugs and
          issues.
        </p>
        <p>
          <span className="text-2xl font-semibold"> Security Audits:- </span>{" "}
          Engage third-party security firms to perform comprehensive audits of
          the smart contracts and platform.
        </p>

        <p>
          <span className="text-2xl font-semibold"> Testnet Launch:- </span>{" "}
          Launch a testnet of the platform to a broader audience for real-world
          testing and feedback.
        </p>
      </>
    ),
    badge: "Phase 3 :-",
  },

  {
    title: "Launch Preparation (Q4 2024)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Pre-Launch Marketing :-{" "}
          </span>{" "}
          Intensify marketing efforts to build anticipation and awareness ahead
          of the official launch.
        </p>
        <p>
          <span className="text-2xl font-semibold"> Beta Launch :- </span> Early
          Mainnet access to a broader audience(approx 2000 users) for real-world
          testing and feedback.
        </p>

        <p>
          <span className="text-2xl font-semibold"> Token Design :- </span>{" "}
          Design the native token for the restaking platform, including its
          economic model and utility within the ecosystem.
        </p>

        <p>
          <span className="text-2xl font-semibold"> Documentation :- </span>{" "}
          Prepare detailed documentation for users, including guides, tutorials,
          and FAQs.
        </p>
        <p>
          <span className="text-2xl font-semibold"> Final Adjustments :- </span>{" "}
          Make final adjustments based on beta testing feedback and audit
          results.
        </p>
      </>
    ),
    badge: "Phase 4 :-",
  },

  {
    title: "Official Launch (Q1 2025)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Official Public Launch :-{" "}
          </span>{" "}
          Officially launch the restaking platform on Nibiru for everyone.
        </p>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Audits and Testing :-{" "}
          </span>{" "}
          Conduct security audits and testing of the token contracts to ensure
          robustness and security.
        </p>
        <p>
          <span className="text-2xl font-semibold"> Ongoing Support :- </span>{" "}
          Provide ongoing support and updates to users, ensuring a smooth
          transition and addressing any post-launch issues.
        </p>

        <p>
          <span className="text-2xl font-semibold"> Token Launch :- </span> If
          applicable, launch the native token associated with the restaking
          platform, including an initial distribution event (e.g., ICO or
          airdrop).
        </p>
      </>
    ),
    badge: "Phase 5 :-",
  },

  {
    title: "Improvement and Development (Q2 2025)",
    description: (
      <>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Smart Contract Development :-{" "}
          </span>{" "}
          Develop the smart contracts required for the tokens functionality and
          distribution.
        </p>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Initial Distribution Event :-{" "}
          </span>{" "}
          Conduct an initial distribution event, such as an ICO or airdrop, to
          launch the native token.
        </p>

        <p>
          <span className="text-2xl font-semibold"> Exchange Listings :- </span>{" "}
          List the token on major exchanges and enable trading.
        </p>
        <p>
          <span className="text-2xl font-semibold">
            {" "}
            Community Engagement :-{" "}
          </span>{" "}
          Intensify marketing efforts to build anticipation and awareness around
          the token launch.
        </p>
      </>
    ),
    badge: "Phase 6 :-",
  },
];
export default Roadmap
