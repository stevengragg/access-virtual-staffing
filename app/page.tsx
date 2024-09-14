import { BlogContainer } from "@/components/section/blog-container";
import { Brands } from "@/components/section/brands";
import { ContactCTA } from "@/components/section/contact-cta";
import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeader } from "@/components/section/hero-header";
import { HowItWorks } from "@/components/section/how-it-works";
import { HowWeHelpFeature } from "@/components/section/how-we-help-feature";
import { Testimonials } from "@/components/section/testimonials";

import { WhyChoose } from "@/components/section/why-choose";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeader />
      {/* How it works Section */}
      <HowItWorks
        buttons={[
          {
            navLink: {
              title: "Get Started",
              url: "/start-hiring",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
          {
            navLink: {
              title: "Learn more",
              url: "/services",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
      />
      {/* Feature 1 Section  */}
      <HeroFeature />
      {/* Why Choose Section */}
      <WhyChoose />
      {/* How We Help Feature Section */}
      <HowWeHelpFeature />
      {/* Testimonials Section */}
      {/* <Testimonials /> */}
      {/* Brands Section */}
      {/* <Brands /> */}
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Unlock Your Business Potential Today"
        description="Discover our different services or you can send us your requirements so that we can start hiring your first Virtual Staff."
        buttons={[
          {
            navLink: {
              title: "Discover Our Services",
              url: "/services",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
          {
            navLink: {
              title: "Start Hiring",
              url: "/start-hiring",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
      />
      {/* Blog Container Section*/}
      <BlogContainer />
      {/* Contact CTA Section */}
      <ContactCTA />
    </main>
  );
}
