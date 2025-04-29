// app/page.tsx
import Hero from "@/components/Hero";
import Features from "@/components/Fatures";
import Methodology from "@/components/Methodology";
import Team from "@/components/Team";
import Capabilities from "@/components/Capabilities";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#13141e] to-[#0d0e17]">
      <Hero />
      <Features />
      <Methodology />
      <Capabilities />
      <Team />
      <CTA />
    </main>
  );
}
