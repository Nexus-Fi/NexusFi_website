import HeroSection from "@/components/HeroSection";
import Roadmap from "@/components/Roadmap";
import ContactUs from "@/components/ContactUs";
import OurTeam from "@/components/OurTeam";
import Architecture from "@/components/Architecture";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] dark:bg-black/[0.2] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Architecture />
      <Roadmap />
      <OurTeam />
      <ContactUs />
      <Footer />
    </main>
  );
}
