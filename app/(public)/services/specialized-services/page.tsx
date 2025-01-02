import { ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesBenefits } from "@/components/section/services-benefits";
import { ServicesLeft } from "@/components/section/services-left";

// import { ServicesOutline } from "@/components/section/services-outline";
// import { ServicesRight } from "@/components/section/services-right";
// import { Testimonials } from "@/components/section/testimonials";

export const metadata: Metadata = {
  title:
    "Specialized Services: Training and Development | Access Virtual Staffing",
  description:
    "Explore our Specialized Services, offering in-depth training programs designed to enhance your team's skills and effectiveness. From Complete Staff Work to Advanced Leadership training, we cover all crucial areas to ensure your virtual staff exceeds your business needs.",
  openGraph: {
    title:
      "Specialized Services: Training and Development | Access Virtual Staffing",
    description:
      "Explore our Specialized Services, offering in-depth training programs designed to enhance your team's skills and effectiveness. From Complete Staff Work to Advanced Leadership training, we cover all crucial areas to ensure your virtual staff exceeds your business needs.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services/specialized-services",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Specialized Services: Training and Development | Access Virtual Staffing",
    description:
      "Explore our Specialized Services, offering in-depth training programs designed to enhance your team's skills and effectiveness. From Complete Staff Work to Advanced Leadership training, we cover all crucial areas to ensure your virtual staff exceeds your business needs.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};

type Props = {};

export default function SpecializedServices({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal heading="Specialized Services" context="" />
      {/* Services A Section */}
      <ServicesLeft
        heading="Overview"
        description="Our Specialized Services provide more than just recruitment; we offer in-depth training programs designed to enhance your team’s skills and effectiveness. Our training includes Complete Staff Work, Basic Management training, and Advanced Leadership training. These programs cover crucial areas such as writing job descriptions, setting goals and objectives, performing SWOT analysis, and understanding KRA and KPI metrics. We also focus on identifying gaps and bottlenecks and implementing process improvements. By investing in these specialized training programs, we help ensure that your virtual staff not only meets but exceeds your business needs, driving efficiency and growth in every aspect of your operations."
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
          src: "/img/services3.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />

      {/* Services Benefits Section */}
      <ServicesBenefits
        heading="Benefits of the Specialized Services"
        description="Our Specialized Services offer targeted training programs designed to enhance your team’s skills and efficiency. With offerings such as Complete Staff Work, Basic Management Training, and Advanced Leadership Training, our programs are tailored to address critical areas like job description writing, goal setting, SWOT analysis, and process improvement."
        cards={[
          {
            heading: "Enhanced Employee Skills",
            description:
              "Equip your team with advanced skills and methodologies, including KPI tracking and SMART goal setting, to boost their performance and efficiency.",
            image: {
              src: "/img/computer.svg",
              alt: "Enhanced Employee Skills",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Improved Efficiency",
            description:
              "Streamline operations using frameworks like PDCA (Plan-Do-Check-Act) and process improvement techniques to reduce bottlenecks and enhance workflow.",
            image: {
              src: "/img/circle-fading-arrow-up.svg",
              alt: "Improved Efficiency",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Strategic Growth",
            description:
              "Develop and execute growth strategies using SWOT analysis and other strategic planning tools to set clear, actionable objectives and drive your business forward.",
            image: {
              src: "/img/shrub.svg",
              alt: "Informed Decision-Making",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Informed Decision-Making",
            description:
              "Utilize comprehensive frameworks such as KPI metrics, SMART criteria, and PDCA cycles to make data-driven decisions and achieve superior business outcomes.",
            image: {
              src: "/img/chart-line.svg",
              alt: "Informed Decision-Making",
              width: 304,
              height: 160,
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
