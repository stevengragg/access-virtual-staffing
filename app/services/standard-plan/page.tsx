import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesBenefits } from "@/components/section/services-benefits";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesOutline } from "@/components/section/services-outline";
import { ServicesRight } from "@/components/section/services-right";
import { Testimonials } from "@/components/section/testimonials";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function StandardPlan({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Standard Plan: Advance Recruiting Solutions"
        context=""
      />
      {/* Services A Section */}
      <ServicesLeft
        heading="Standard Plan"
        description="Elevate your business operations with our Standard Plan, offering advanced recruitment solutions along with integrated timekeeping and payroll administration. Designed for growing businesses, this tier provides enhanced support and management to ensure seamless and efficient workforce operations. We manage salaries, benefits, and all related administrative tasks, allowing you to focus on growing your business. This tier is designed to streamline operations and ensure smooth management of your workforce."
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
          src: "/img/services2.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />
      {/* What we offer Section */}
      <ServicesOutline
        heading="What We Offer"
        subheading="Our Standard Plan provides an all-in-one solution for businesses, combining expert recruitment with streamlined timekeeping and payroll administration. This tier is designed to alleviate the complexities of workforce management so you can concentrate on growing your business."
        tabs={[
          {
            heading: "Recruitment Excellence",
            description:
              "We source and recruit top talent tailored to your specific needs, ensuring you have the right people for the job.",
            image: {
              src: "/img/recruitment_excellence.svg",
              alt: "Virtual Staff SVG",
              width: 616,
              height: 640,
            },
          },
          {
            heading: "Efficient Timekeeping",
            description:
              "We handle accurate tracking of work hours to maintain productivity and transparency.",
            image: {
              src: "/img/timekeeping.svg",
              alt: "Skilled Staff SVG",
              width: 616,
              height: 640,
            },
          },
          {
            heading: "Payroll Administration",
            description:
              "From managing salaries to administering benefits, we take care of all payroll-related tasks, including compliance with relevant regulations.",
            image: {
              src: "/img/payroll_admin.svg",
              alt: "Professional Staff SVG",
              width: 616,
              height: 640,
            },
          },
        ]}
      />
      {/* Services Benefits Section */}
      <ServicesBenefits
        heading="Benefits of the Standard Plan"
        description="Choose our Standard Plan for a seamless staffing experience that supports your business’s success and growth, allowing you to concentrate on what you do best."
        cards={[
          {
            heading: "Streamlined Operations",
            description:
              "By consolidating recruitment, timekeeping, and payroll into one service, we simplify your administrative processes, saving you time and reducing overhead.",
            image: {
              src: "/img/handshake.svg",
              alt: "Streamlined Operations",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Enhanced Focus",
            description:
              "With administrative tasks managed by our team, you can focus on strategic business growth and core operations.",
            image: {
              src: "/img/focus.svg",
              alt: "Enhanced Focus",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Consistency and Accuracy",
            description:
              "Our dedicated team ensures precise payroll processing and timely benefit administration, minimizing errors and ensuring your employees are satisfied.",
            image: {
              src: "/img/check-check.svg",
              alt: "Consistency and Accuracy",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Scalable Solutions",
            description:
              "As your business grows, our services adapt to meet your evolving needs, providing a flexible and scalable solution.",
            image: {
              src: "/img/scaling.svg",
              alt: "Scalable Solutions",
              width: 304,
              height: 160,
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
