import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Mission } from "@/components/Mission";
import { Governance } from "@/components/Governance";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Mission />
      <Governance />
      <Roadmap />
      <Community />
    </main>
    <Footer />
  </div>
);

export default Index;
