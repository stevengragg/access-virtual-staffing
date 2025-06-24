import { ArrowRight } from "lucide-react";

import { BlogContainer } from "@/components/section/blog-container";
import { CTAFooter } from "@/components/section/cta-footer";
import { StrategyCallModal } from "@/components/marketing/strategy-call-modal";
import { HeroHeaderV2 } from "@/components/section/hero-header-v2";
import { Brands } from "@/components/section/brands";
import { Testimonials } from "@/components/section/testimonials";
import { WhyChoose2 } from "@/components/section/why-choose-2";
import { HeroFeature3 } from "@/components/section/hero-feature-3";
import HowItWorks3 from "@/components/section/how-it-works-3";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeaderV2 />
      {/* How it works Section */}
      <HowItWorks3 />
      {/* Why Choose Section */}
      <WhyChoose2 />
      {/* Brands section */}
      <Brands />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Feature 1 Section  */}
      <HeroFeature3 />
      {/* Blog Container Section*/}
      <BlogContainer />
      {/* CTA Footer */}
      <CTAFooter
        heading="Stop Doing Everything."
        heading2="Start Leading with Leverage."
        description="Your next level of growth is waiting. Book your free strategy call today and discover how our premium virtual assistants can transform your business operations."
        buttons={[
          {
            navLink: {
              title: "Book a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            icon: () => <ArrowRight className="text-deepZinc w-6 h-6" />,
            variant: "cta1",
            size: "xl",
          },
        ]}
      />
      <StrategyCallModal />
    </main>
  );
}
