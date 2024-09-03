import { CTAFooter } from "@/components/section/cta-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { HowWeHelpFeature } from "@/components/section/how-we-help-feature";
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
        context="With our straightforward, efficient process, Access Virtual Staffing takes the hassle out of hiring and managing virtual staff. From initial request to seamless integration, we’re committed to delivering a smooth experience and ensuring that your business operates at its best. Partner with us today and experience the ease of building a skilled virtual team that perfectly fits your needs."
      />
      {/* Services A Section */}
      <ServicesLeft
        heading="Client Intake"
        description="Begin by filling out our virtual staff request form. Once we receive it, we’ll review the details and, if needed, schedule a call to clarify expectations and deliverables."
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
              title: "Learn More",
              url: "#",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
        image={{
          src: "/img/services1.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />
      {/* Services B Section */}
      <ServicesRight
        heading="Sourcing and Screening"
        description="We kick off our sourcing and screening process to find the best candidates. Once we have shortlisted potential hires, we will present a candidate portfolio. You can then choose to either hire directly or schedule interviews with the candidates."
        buttons={[
          {
            navLink: {
              title: "Learn More",
              url: "#",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
        image={{
          src: "/img/services2.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />

      {/* Services C Section */}
      <ServicesLeft
        heading="Onboarding"
        description="After you’ve selected your preferred candidate, we’ll handle the onboarding process to ensure they are ready for their first day. While you will be responsible for training them on your specific protocols, policies, and tools, we’ll always be available to assist if needed."
        buttons={[
          {
            navLink: {
              title: "Learn More",
              url: "#",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
        image={{
          src: "/img/services3.webp",
          alt: "Services Image C",
          width: 616,
          height: 640,
        }}
      />
      {/* Services D Section */}
      <ServicesRight
        heading="Integration and Monitoring"
        description="In this phase, we manage timekeeping and monitor the staff to ensure productivity. We’ll provide you with a weekly attendance report to support seamless operational management. Additionally, we handle all payroll administration, including processing and issuing payments, to ensure accurate and timely compensation for your virtual staff."
        buttons={[
          {
            navLink: {
              title: "Learn More",
              url: "#",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
        image={{
          src: "/img/services4.webp",
          alt: "Services Image D",
          width: 616,
          height: 640,
        }}
      />
      {/* How it works Section */}
      <HowWeHelpFeature />
      {/* FAQ Footer Section */}
      <Testimonials />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
