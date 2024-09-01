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

export default function Home() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeader />
      {/* How it works Section */}
      <HowItWorks />
      {/* Feature 1 Section  */}
      <HeroFeature />
      {/* Why Choose Section */}
      <WhyChoose />
      {/* How We Help Feature Section */}
      <HowWeHelpFeature />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Brands Section */}
      <Brands />
      {/* Contact CTA Section */}
      <ContactCTA />
      {/* Blog Container Section*/}
      <BlogContainer />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
