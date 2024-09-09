import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesRight } from "@/components/section/services-right";
import { Testimonials } from "@/components/section/testimonials";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function Services({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Our Services"
        context="At Access Virtual Staffing, we offer a range of tailored recruitment solutions to meet your business needs. Whether you're seeking general virtual assistance, specialized skills, or high-level professional expertise, our service tiers are designed to provide the right support. From basic virtual staff to specialized training, we ensure you get the talent and tools necessary to drive your business forward."
      />
      {/* Services A Section */}
      <ServicesLeft
        heading="Basic Tier: Recruiting Only"
        description="The Basic Tier offers recruitment for General Virtual Staff, Skilled Staff, and High-level Professionals."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/basic-tier",
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
      {/* Services B Section */}
      <ServicesRight
        heading="Premium Tier: Advance Recruiting Solutions"
        description="Our Premium Tier provides an all-in-one solution for businesses, combining expert recruitment with streamlined timekeeping and payroll administration. This tier is designed to alleviate the complexities of workforce management so you can concentrate on growing your business."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/premium-tier",
            follow: false,
          },
          variant: "link2",
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
        heading="Specialized Training"
        description="In addition to our recruitment services, we offer specialized training programs aimed at skill and process improvement, as well as objective setting."
        button={{
          navLink: {
            title: "Learn More",
            url: "/services/specialized-training",
            follow: false,
          },
          variant: "link2",
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
