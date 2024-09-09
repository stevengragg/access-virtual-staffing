import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesOutline } from "@/components/section/services-outline";
import { ServicesRight } from "@/components/section/services-right";
import { Testimonials } from "@/components/section/testimonials";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function BasicTier({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal heading="Basic Tier: Recruiting Only" context="" />
      {/* Services A Section */}
      <ServicesLeft
        heading="Basic Tier"
        description="The Basic Tier offers recruitment for 3 different types of Virtual Staff. The General Virtual Staff are for essential tasks such as email management, data entry, and social media management, providing foundational support for businesses. The Skilled Staff focuses on specialized roles like web developers, SEO experts, and accountants, catering to specific business needs. The High-Level Professional Services targets niche areas, offering advanced expertise in fields like legal, financial, and human resources for businesses seeking specialized knowledge."
        button={{
          navLink: {
            title: "Start Hiring",
            url: "/start-hiring",
            follow: false,
          },
          variant: "link2",
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

      <ServicesOutline
        heading="What We Offer"
        subheading="The Basic Tier offers recruitment for General Virtual Staff, Skilled Staff, and High-level Professionals."
        tabs={[
          {
            heading: "General Virtual Staff",
            description:
              "Our Basic Tier focuses on recruiting General Virtual Staff with essential skills for everyday tasks. This includes email management, calendar and travel scheduling, data entry, customer service, social media management, content creation, and basic graphic design. Ideal for businesses needing foundational support.",
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
      {/* FAQ Footer Section */}
      <Testimonials />
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Unlock Your Business Potential Today"
        description="Send us your requirements or inquiries so that we can start hiring your first Virtual Staff."
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
              title: "Contact Us",
              url: "/contact-us",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
      />
    </main>
  );
}
