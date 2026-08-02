import { HeroSection } from "@/sections/hero-section";
import { ServicesPreview } from "@/sections/services-preview";
import { FeaturedWork } from "@/sections/featured-work";
import { ProcessGlimpse } from "@/sections/process-glimpse";
import { FinalCTA } from "@/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProcessGlimpse />
      <FeaturedWork />
      <FinalCTA />
    </>
  );
}
