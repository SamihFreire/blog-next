import { CallToAction } from "@/components/call-to-action";
import { CustomerStorySection } from "@/components/customer-story-section";
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
        <CustomerStorySection />
        <CallToAction />
      </article>
    </>
  )
}
