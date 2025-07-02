import { ArrowRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesRight } from "@/components/section/services-right";
import { Testimonials } from "@/components/section/testimonials";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";
import { HeroFeature2 } from "@/components/section/hero-feature-2";
import HowItWorks3 from "@/components/section/how-it-works-3";
// import { Testimonials } from "@/components/section/testimonials";

export const metadata: Metadata = {
  title: "Our Services | Access Virtual Staffing",
  description:
    "Explore the range of tailored recruitment solutions offered by Access Virtual Staffing. From general virtual assistance to specialized skills and high-level professional expertise, our service tiers are designed to meet your business needs and drive your success.",
  openGraph: {
    title: "Our Services | Access Virtual Staffing",
    description:
      "Explore the range of tailored recruitment solutions offered by Access Virtual Staffing. From general virtual assistance to specialized skills and high-level professional expertise, our service tiers are designed to meet your business needs and drive your success.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Access Virtual Staffing",
    description:
      "Explore the range of tailored recruitment solutions offered by Access Virtual Staffing. From general virtual assistance to specialized skills and high-level professional expertise, our service tiers are designed to meet your business needs and drive your success.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};
type Props = {};

export default function Services({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderWBgImg
        tagline="Find the Right Talent for Your Business"
        heading="Check Out Our Services"
        description="Running a business is easier when you have the right team. At Access Virtual Staffing, we connect you with skilled professionals to help your business grow."
        buttons={[
          {
            navLink: {
              title: "Book a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            variant: "cta1",
            size: "xl",
            icon: () => <ArrowRight className="" />,
          },
          {
            navLink: {
              title: "Learn More",
              url: "/services#how-it-works",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
        image={{
          src: "/bg/about_bg.webp",
          alt: "About Us Hero Image",
          width: 1920,
          height: 1080,
        }}
      />

      {/* Services A Section */}
      <ServicesLeft
        heading="Basic Plan:  Recruiting and Payroll"
        description="Our Basic Recruitment and Payroll service is ideal for employers seeking project-based staff. We handle the recruiting and payroll processes, allowing you to focus on the project, without the need for timekeeping or benefits administration."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/basic-plan",
            follow: false,
          },
          variant: "outline",

          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services1.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />
      {/* Services B Section */}
      <ServicesRight
        heading="Standard Plan:  Advance Recruiting Solutions"
        description="Our Standard plan offers a comprehensive solution for your staffing needs, including recruiting, payroll, timekeeping, and benefits administration. Ideal for businesses seeking full-service support, this plan ensures seamless management of your workforce, allowing you to focus on your core operations."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/standard-plan",
            follow: false,
          },
          variant: "outline",

          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services2.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />

      {/* Services C Section */}
      <ServicesLeft
        heading="Specialized Services"
        description="Our Specialized Services go beyond recruitment to offer tailored training programs that elevate your team’s capabilities. From Complete Staff Work and Basic Management training to Advanced Leadership training, we cover essential skills such as job description writing, goal setting, SWOT analysis, and process improvement to ensure your virtual staff excels and drives your business forward."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/specialized-services",
            follow: false,
          },
          variant: "outline",

          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services3.webp",
          alt: "Services Image C",
          width: 616,
          height: 640,
        }}
      />

      {/* Hero Feature Section */}
      <HeroFeature2 />
      {/* How it works Section */}
      <HowItWorks3 />
      {/* Testimonials Section */}
      <Testimonials />
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Stop Doing Everything."
        heading2="Start Leading with Leverage."
        description1="Your next level of growth is waiting. Book your free strategy call today. "
        description2="Discover how our premium virtual assistants can transform your business operations."
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
    </main>
  );
}
