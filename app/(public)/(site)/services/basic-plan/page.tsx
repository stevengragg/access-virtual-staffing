import { ArrowRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesOutline } from "@/components/section/services-outline";

// import { ServicesRight } from "@/components/section/services-right";
// import { Testimonials } from "@/components/section/testimonials";

export const metadata: Metadata = {
  title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
  description:
    "Discover our Basic Recruitment and Payroll service, designed for employers who need project-based staff without the complexity of managing full-time employees. We handle recruitment and payroll efficiently, allowing you to focus on your project's success.",
  openGraph: {
    title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
    description:
      "Discover our Basic Recruitment and Payroll service, designed for employers who need project-based staff without the complexity of managing full-time employees. We handle recruitment and payroll efficiently, allowing you to focus on your project's success.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services/basic-plan",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
    description:
      "Discover our Basic Recruitment and Payroll service, designed for employers who need project-based staff without the complexity of managing full-time employees. We handle recruitment and payroll efficiently, allowing you to focus on your project's success.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};

type Props = {};

export default function BasicPlan({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Basic Plan:  Recruiting and Payroll"
        context=""
      />
      {/* Services A Section */}
      <ServicesLeft
        heading="Overview"
        description="The Basic Recruitment and Payroll service is designed for employers who require project-based staff without the complexity of managing full-time employees. We take care of the recruitment process, sourcing the right talent for your specific project needs, and manage payroll for your temporary workforce. This service is streamlined, as we do not provide timekeeping or benefits administration, making it perfect for short-term, flexible staffing solutions. Focus on your project’s success, while we handle the recruitment and payroll efficiently."
        button={{
          navLink: {
            title: "Free Strategy Call",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "secondary",
          size: "xl",
          icon: () => (
            <ChevronRight className="text-neutralLightZinc w-6 h-6" />
          ),
        }}
        image={{
          src: "/img/services1.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />

      <ServicesOutline
        heading="What We Offer"
        subheading="The Basic Plan offers recruitment and payroll services for General Virtual Staff, Skilled Staff, and High-level Professionals."
        tabs={[
          {
            heading: "General Virtual Staff",
            description:
              "Our Basic Plan focuses on recruiting General Virtual Staff with essential skills for everyday tasks. This includes email management, calendar and travel scheduling, data entry, customer service, social media management, content creation, and basic graphic design. Ideal for businesses needing foundational support.",
            image: {
              src: "/img/virtual_staff.svg",
              alt: "Virtual Staff SVG",
              width: 616,
              height: 640,
            },
          },
          {
            heading: "Skilled Staff",
            description:
              "For more specialized needs, our Skilled Staff recruitment covers roles such as web developers, SEO experts, architectural designers/CAD operators, HR professionals, and QuickBooks Online (QBO) accountants. This tier ensures you find professionals with the specific skills and expertise required for your business.",
            image: {
              src: "/img/skilled_staff.svg",
              alt: "Skilled Staff SVG",
              width: 616,
              height: 640,
            },
          },
          {
            heading: "High-Level Professional Services",
            description:
              "This tier targets niche areas requiring advanced expertise, including legal, financial, and high-level human resources professionals. Perfect for businesses needing specialized knowledge and experience.",
            image: {
              src: "/img/professional_staff_certified_staff.svg",
              alt: "Professional Staff SVG",
              width: 616,
              height: 640,
            },
          },
        ]}
      />
      {/* Hero feature Section */}
      <HeroFeature />
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
