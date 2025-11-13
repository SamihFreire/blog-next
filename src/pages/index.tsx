import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SuportSecion } from "@/components/suport-section";

export default function HomePage() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SuportSecion />
      </article>
    </>
  );
}
