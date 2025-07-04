import { ArrowRight, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";

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
          src: "/img/services3.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />
    </main>
  );
}
