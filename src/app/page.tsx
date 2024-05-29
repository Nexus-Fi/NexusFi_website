import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Spotlight } from "@/components/ui/Spotlight";
import Roadmap from "@/components/Roadmap";
import ContactUs from "@/components/ContactUs";
import OurTeam from "@/components/OurTeam";
import About from "@/components/About";
import Architecture from "@/components/Architecture";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="flex mt-8 text-2xl flex-col items-center justify-center">
        {" "}
      </h1>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <HeroSection />
      <Roadmap />
      <Architecture />
      <ContactUs />
      <OurTeam />
      <About />
    </main>
  );
}
