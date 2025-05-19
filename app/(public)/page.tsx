import { ArrowRight, ChevronRight } from "lucide-react";

import { BlogContainer } from "@/components/section/blog-container";
// import { ContactCTA } from "@/components/section/contact-cta";
import { CTAFooter } from "@/components/section/cta-footer";
// import { HeroFeature } from "@/components/section/hero-feature";
// import { HeroHeader } from "@/components/section/hero-header";
import { HowItWorks } from "@/components/section/how-it-works";
// import { HowWeHelpFeature } from "@/components/section/how-we-help-feature";
// import { WhyChoose } from "@/components/section/why-choose";
// import { CtaJobseeker } from "@/components/section/cta-jobseeker";
import { StrategyCallModal } from "@/components/marketing/strategy-call-modal";
import { HeroHeaderV2 } from "@/components/section/hero-header-v2";
import { Brands } from "@/components/section/brands";
import { Testimonials } from "@/components/section/testimonials";
import { WhyChoose2 } from "@/components/section/why-choose-2";
import { HowItWorks2 } from "@/components/section/how-it-works-2";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-white overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeaderV2 />
      {/* Why Choose Section */}
      <WhyChoose2 />
      {/* How it works Section */}
      <HowItWorks2 />
      {/* Feature 1 Section  */}
      {/* <HeroFeature /> */}

      {/* How We Help Feature Section */}
      {/* <HowWeHelpFeature /> */}

      {/* Brands section */}
      <Brands />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Blog Container Section*/}
      <BlogContainer />
      {/* For Employees Section */}
      {/* <CtaJobseeker /> */}
      {/* Contact CTA Section */}
      {/* <ContactCTA /> */}
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Take the First Step with"
        heading2="Access Virtual Staffing"
        description="Focus on what matters—let us handle the rest. Get the right virtual assistant for your needs."
        buttons={[
          {
            navLink: {
              title: "Schedule a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            icon: () => <ArrowRight className="text-deepZinc w-6 h-6" />,
            variant: "outline",
            size: "xl",
          },
        ]}
      />
      <StrategyCallModal />
    </main>
  );
}
