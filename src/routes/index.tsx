import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { PricingTeaser } from "@/components/sections/PricingTeaser";
import { CTA } from "@/components/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CleanNest Pro — Home Cleaning You'll Actually Look Forward To" },
      { name: "description", content: "Professional, eco-friendly home cleaning trusted by 24,000+ homes. Book in 60 seconds. Same-day visits available." },
      { property: "og:title", content: "CleanNest Pro - Professional Home Cleaning" },
      { property: "og:description", content: "Professional, eco-friendly home cleaning trusted by 24,000+ homes." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <BlogPreview />
      <PricingTeaser />
      <CTA />
    </>
  );
}
