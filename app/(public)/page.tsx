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
import { CtaJobseeker } from "@/components/section/cta-jobseeker";

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
              url: "/start-hiring",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
          {
            navLink: {
              title: "Find Work",
              url: "/find-work",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
      />
    </main>
  );
}

// import { HeroHeaderLanding } from "@/components/section/hero-header-landing";

// export default function Home() {
//   return (
//     <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
//       {/* Landing Hero Header Section */}
//       <HeroHeaderLanding />
//     </main>
//   );
// }
