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
        heading="Overview"
        description="Elevate your business operations with our Standard Plan, offering advanced recruitment solutions along with integrated timekeeping and payroll administration. Designed for growing businesses, this tier provides enhanced support and management to ensure seamless and efficient workforce operations. We manage salaries, benefits, and all related administrative tasks, allowing you to focus on growing your business. This tier is designed to streamline operations and ensure smooth management of your workforce."
        button={{
          navLink: {
            title: "Start Hiring",
            url: "/start-hiring",
            follow: false,
          },
          variant: "secondary",
          size: "xl",
          icon: () => (
            <ChevronRight className="text-neutralLightZinc w-6 h-6" />
          ),
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
        description="Experience seamless workforce management with our Standard Plan. Enjoy the benefits of comprehensive recruiting, precise time monitoring, efficient payroll processing, and hassle-free benefits administration. This all-in-one solution streamlines your operations, boosts productivity, and ensures your team is well-supported, so you can focus on driving your business forward."
        cards={[
          {
            heading: "Recruiting",
            description:
              "We handle the entire recruitment process from start to finish, ensuring you attract and hire top talent tailored to your specific business needs. Our expert team leverages a vast network and advanced sourcing techniques to find candidates who not only have the right skills but also fit your company culture. With us managing recruitment, you gain access to a pool of high-caliber candidates efficiently and cost-effectively, saving you valuable time and resources.",
            image: {
              src: "/img/handshake.svg",
              alt: "Recruiting",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Time Monitoring",
            description:
              "Our robust time monitoring service ensures accurate tracking of employee hours and productivity. We provide detailed, actionable reports that help you manage and optimize your workforce effectively. Beyond just tracking time, our system helps identify areas for improvement and ensures compliance with labor regulations, ultimately enhancing operational efficiency and minimizing administrative burdens.",
            image: {
              src: "/img/clock.svg",
              alt: "Time Monitoring",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Payroll",
            description:
              "Leave the complexities of payroll to us. We manage all aspects of payroll processing, including accurate salary disbursements, tax withholdings, and compliance with wage laws. Our streamlined payroll system ensures that your staff is paid on time and without errors, reducing the risk of costly mistakes and freeing you to focus on growing your business.",
            image: {
              src: "/img/wallet-cards.svg",
              alt: "Payroll",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Benefits Administration",
            description:
              "Our comprehensive benefits administration service takes the hassle out of managing employee benefits. We handle everything from enrollment to ongoing management and compliance, ensuring your team receives the full range of benefits they are entitled to. By outsourcing this function, you can offer competitive benefits packages without the administrative burden, improving employee satisfaction and retention.",
            image: {
              src: "/img/book-heart.svg",
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
