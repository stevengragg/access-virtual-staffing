import { ChevronRight } from "lucide-react";

import { BlogContainer } from "@/components/section/blog-container";
// import { Brands } from "@/components/section/brands";
import { ContactCTA } from "@/components/section/contact-cta";
import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeader } from "@/components/section/hero-header";
import { HowItWorks } from "@/components/section/how-it-works";
import { HowWeHelpFeature } from "@/components/section/how-we-help-feature";
// import { Testimonials } from "@/components/section/testimonials";

import { WhyChoose } from "@/components/section/why-choose";
import { Testimonials } from "@/components/section/testimonials";
import { HowItWorks2 } from "@/components/section/how-it-works-2";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeader />
      {/* How it works Section */}
      <HowItWorks
        tagline="Your Career, Your Way – Work from Anywhere"
        heading="How to get hired on AVS"
        subheading="Get hired in 4 simple steps:"
        sections={[
          {
            stepNumber: 1,
            heading: "Create your profile",
            description:
              "Share some basic details and your past work experience.",
          },
          {
            stepNumber: 2,
            heading: "Apply to jobs",
            description: "Submit the application form to the job you chosen.",
          },
          {
            stepNumber: 3,
            heading: "Receive interview invites",
            description:
              "Interview directly with hiring managers and get job offers.",
          },
          {
            stepNumber: 4,
            heading: "Start working",
            description:
              "Continue to receive support from AVS after you start a new role or contract.",
          },
        ]}
        buttons={[
          {
            navLink: {
              title: "Free Strategy Call",
              url: "/book-a-meeting",
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
      <Testimonials />
      {/* Brands Section */}
      {/* <Brands /> */}
      <HowItWorks2 />
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
              title: "Free Strategy Call",
              url: "/book-a-meeting",
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
