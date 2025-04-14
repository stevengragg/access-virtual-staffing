import { ChevronRight } from "lucide-react";

import { BlogContainer } from "@/components/section/blog-container";
// import { Brands } from "@/components/section/brands";
// import { ContactCTA } from "@/components/section/contact-cta";
import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeader } from "@/components/section/hero-header";
import { HowItWorks } from "@/components/section/how-it-works";
import { HowWeHelpFeature } from "@/components/section/how-we-help-feature";
// import { Testimonials } from "@/components/section/testimonials";
import { WhyChoose } from "@/components/section/why-choose";
import { CtaJobseeker } from "@/components/section/cta-jobseeker";
import { StrategyCallModal } from "@/components/marketing/strategy-call-modal";

export default function Home() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Landing Hero Header Section */}
      <HeroHeader />
      {/* How it works Section */}
      <HowItWorks
        tagline="Seamless Staffing Solutions"
        heading="How It Works"
        subheading="Discover how easy and efficient it is to elevate your team with Access Virtual Staffing. Our streamlined process ensures that you get the right virtual staff quickly and effortlessly. Here’s a quick look at how we make it all happen:"
        sections={[
          {
            stepNumber: 1,
            heading: "Client Intake",
            description:
              "Begin by filling out our virtual staff request form. Once we receive it, we’ll review the details and, if needed, schedule a call to clarify expectations and deliverables.",
          },
          {
            stepNumber: 2,
            heading: "Sourcing and Screening",
            description:
              "We kick off our sourcing and screening process to find the best candidates.",
          },
          {
            stepNumber: 3,
            heading: "Onboarding",
            description:
              "After you’ve selected your preferred candidate, we’ll handle the onboarding process to ensure they are ready for their first day.",
          },
          {
            stepNumber: 4,
            heading: "Integration & Monitoring",
            description:
              "We handle timekeeping, monitor productivity, and manage payroll, providing weekly attendance reports and ensuring accurate, timely compensation for your virtual staff.",
          },
        ]}
        buttons={[
          {
            navLink: {
              title: "Get Started",
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
      {/* <Testimonials /> */}
      {/* Brands Section */}
      {/* <Brands /> */}

      {/* Blog Container Section*/}
      <BlogContainer />
      {/* For Employees Section */}
      <CtaJobseeker />
      {/* Contact CTA Section */}
      {/* <ContactCTA /> */}
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Your shortcut to the best virtual staff for your business"
        description=""
        buttons={[
          {
            navLink: {
              title: "Hire Talent",
              url: "/book-a-meeting",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
          {
            navLink: {
              title: "Find Work",
              url: "/talent",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
      />
      <StrategyCallModal />
    </main>
  );
}
