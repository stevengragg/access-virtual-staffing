import { ArrowRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesRight } from "@/components/section/services-right";
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
      <h1>....</h1>
      {/* Header Section */}
      {/* <HeroHeaderNormal
        heading="Our Services"
        context="At Access Virtual Staffing, we offer a range of tailored recruitment solutions to meet your business needs. Whether you're seeking general virtual assistance, specialized skills, or high-level professional expertise, our service tiers are designed to provide the right support. From Basic Plan to Specialized Services, we ensure you get the talent and tools necessary to drive your business forward."
        ads={{
          text: "For short-term or specialized projects, we also partner with platforms like Fiverr Pro, offering quick access to top-rated freelancers.",
          url: process.env.NEXT_PUBLIC_FIVERR_AFFILIATE_URL,
        }}
      /> */}
      {/* Services A Section */}
      {/* <ServicesLeft
        heading="Basic Plan:  Recruiting and Payroll"
        description="Our Basic Recruitment and Payroll service is ideal for employers seeking project-based staff. We handle the recruiting and payroll processes, allowing you to focus on the project, without the need for timekeeping or benefits administration."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/basic-plan",
            follow: false,
          },
          variant: "link2",
          className: "py-2 px-0",
          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services1.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      /> */}
      {/* Services B Section */}
      {/* <ServicesRight
        heading="Standard Plan:  Advance Recruiting Solutions"
        description="Our Standard plan offers a comprehensive solution for your staffing needs, including recruiting, payroll, timekeeping, and benefits administration. Ideal for businesses seeking full-service support, this plan ensures seamless management of your workforce, allowing you to focus on your core operations."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/standard-plan",
            follow: false,
          },
          variant: "link2",
          className: "py-2 px-0",
          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services2.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      /> */}

      {/* Services C Section */}
      {/* <ServicesLeft
        heading="Specialized Services"
        description="Our Specialized Services go beyond recruitment to offer tailored training programs that elevate your team’s capabilities. From Complete Staff Work and Basic Management training to Advanced Leadership training, we cover essential skills such as job description writing, goal setting, SWOT analysis, and process improvement to ensure your virtual staff excels and drives your business forward."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/specialized-services",
            follow: false,
          },
          variant: "link2",
          className: "py-2 px-0",
          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services3.webp",
          alt: "Services Image C",
          width: 616,
          height: 640,
        }}
      /> */}

      {/* Hero Feature Section */}
      {/* <HeroFeature /> */}
      {/* Testimonials Section */}
      {/* <Testimonials /> */}
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
    </main>
  );
}
