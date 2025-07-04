import { ArrowRight, CheckCheck, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { HeroHeaderWBgImg2 } from "@/components/section/hero-header-short-w-bg-img-2";
import { WhatWeOffer } from "@/components/section/what-we-offer";
import { ServicesBenefits } from "@/components/section/services-benefits";
import { AllPlans } from "@/components/section/all-services";
import StatsSection from "@/components/section/stats-section";
import { Brands } from "@/components/section/brands";
import { FaqFooter } from "@/components/section/faq-footer";
import { BlogContainer } from "@/components/section/blog-container";

export const metadata: Metadata = {
  title:
    "Specialized Services: Training and Development | Access Virtual Staffing",
  description:
    "Go beyond recruitment with our Specialized Services, designed to enhance your team’s capabilities through targeted training programs. We focus on Complete Staff Work, Basic Management Training, and Advanced Leadership Training, covering essential skills like job description writing, goal setting, SWOT analysis, KPI tracking, and process improvement. Our programs help your virtual staff excel, ensuring they contribute to your company’s efficiency and growth.",
  openGraph: {
    title:
      "Specialized Services: Training and Development | Access Virtual Staffing",
    description:
      "Go beyond recruitment with our Specialized Services, designed to enhance your team’s capabilities through targeted training programs. We focus on Complete Staff Work, Basic Management Training, and Advanced Leadership Training, covering essential skills like job description writing, goal setting, SWOT analysis, KPI tracking, and process improvement. Our programs help your virtual staff excel, ensuring they contribute to your company’s efficiency and growth.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services/specialized-services",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Specialized Services: Training and Development | Access Virtual Staffing",
    description:
      "Go beyond recruitment with our Specialized Services, designed to enhance your team’s capabilities through targeted training programs. We focus on Complete Staff Work, Basic Management Training, and Advanced Leadership Training, covering essential skills like job description writing, goal setting, SWOT analysis, KPI tracking, and process improvement. Our programs help your virtual staff excel, ensuring they contribute to your company’s efficiency and growth.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};

type Props = {};

export default function SpecializedServices({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderWBgImg2
        tagline="Services"
        heading="Specialized Services: "
        highlight="Training and Development"
        description=""
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
              url: "/services/basic-plan#how-it-works",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
        image={{
          src: "/bg/public_pages_bg.webp",
          alt: "About Us Hero Image",
          width: 1920,
          height: 1080,
        }}
      />
      {/* Services A Section */}
      <ServicesLeft
        heading="Overview"
        description="Go beyond recruitment with our Specialized Services, designed to enhance your team’s capabilities through targeted training programs. We focus on Complete Staff Work, Basic Management Training, and Advanced Leadership Training, covering essential skills like job description writing, goal setting, SWOT analysis, KPI tracking, and process improvement. Our programs help your virtual staff excel, ensuring they contribute to your company’s efficiency and growth."
        button={{
          navLink: {
            title: "Start Hiring your VA today",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "cta1",
          size: "xl",
          icon: () => <ChevronRight className=" w-6 h-6" />,
        }}
        image={{
          src: "/img/services3.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />

      {/* What We Offer Section */}
      <WhatWeOffer
        heading="What we offer in our"
        highlight="Specialized Services"
        description="Our Specialized Services focus on skill development and business efficiency through:"
        cards={[
          {
            heading: "Complete Staff Work Training",
            description: "Structured workflows and execution strategies.",
            image: {
              src: "/img/working_remotely.svg",
              alt: "Complete Staff Work Training",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Basic Management Training",
            description: "Foundational leadership and operational skills.",
            image: {
              src: "/img/virtual_staff.svg",
              alt: "Basic Management Training",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Advanced Leadership Training",
            description: "Strategic decision-making and team development.",
            image: {
              src: "/img/recruitment_excellence.svg",
              alt: "Advanced Leadership Training",
              width: 304,
              height: 160,
            },
          },
        ]}
        button={{
          navLink: {
            title: "Get Started with Specialized Services",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "cta1",
          size: "xl",
          icon: () => <ChevronRight className=" w-6 h-6" />,
        }}
      />
      {/* Benefits Section */}
      <ServicesBenefits
        tagline=""
        heading="Benefits of the "
        highlight="Specialized Services"
        description="With our Specialized Services, your team gets the tools and training needed to perform at their best, optimize workflows, and contribute to business success."
        features={[
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph:
              "Enhanced Employee Skills - Equip your team with advanced skills like KPI tracking, SMART goal setting, and leadership principles for higher productivity.",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph:
              "Improved Efficiency - Implement proven frameworks like PDCA (Plan-Do-Check-Act) and process improvement techniques to streamline operations.",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph:
              "Strategic Growth - Develop scalable strategies using SWOT analysis and performance metrics to drive long-term business success.",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph:
              "Informed Decision-Making - Leverage data-driven insights through KPI tracking, SMART objectives, and structured evaluations to refine business strategies.",
          },
        ]}
        image={{
          src: "/img/heroimage3.webp",
          alt: "Benefits of the Specialized Services Plan",
          width: 1000,
          height: 1000,
        }}
        button={{
          navLink: {
            title: "Start Hiring Now",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "cta1",
          size: "xl",
          icon: () => <ChevronRight className=" w-6 h-6" />,
        }}
      />

      {/* All Services Section */}
      <AllPlans
        heading="Our"
        highlight="Services"
        cards={[
          {
            heading: "Basic Plan",
            description:
              "Our Basic Plan offers project-based staffing without the burden of managing full-time employees. We handle recruitment and payroll, so you get the right talent—fast and hassle-free.",

            link: "/services/basic-plan",
            features: [
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "General virtual staff",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Skilled staff",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "High-level professionals",
              },
            ],
          },
          {
            heading: "Standard Plan",
            description:
              "Scale with ease using our Standard Plan—complete recruitment, timekeeping, and payroll management in one. Ideal for businesses needing a structured, all-in-one workforce solution.",

            link: "/services/standard-plan",
            features: [
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Expert Recruitment",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Efficient Timekeeping",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Comprehensive Payroll & Benefits Administration",
              },
            ],
          },
          {
            heading: "Specialized Services",
            description:
              "Enhance your team with our Specialized Services—targeted training in Complete Staff Work, Management, and Leadership. We cover essentials like goal setting, KPIs, and process improvement to boost your virtual staff’s performance and drive growth..",

            link: "/services/specialized-services",
            features: [
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Complete Staff Work Training",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Basic Management Training",
              },
              {
                icon: <CheckCheck className="size-6 text-green-400" />,
                paragraph: "Advanced Leadership Training",
              },
            ],
          },
        ]}
        button={{
          navLink: {
            title: "Start Hiring your VA today",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "cta1",
          size: "xl",
          icon: () => <ChevronRight className=" w-6 h-6" />,
        }}
      />

      {/* Stats Section */}
      <section
        id="testimonials"
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDarker"
      >
        <div className="container-xl">
          <div
            className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20 "
            data-aos-delay="200"
            data-aos="fade-up"
          >
            <h1 className="mb-5 text-xl font-bold md:mb-6 lg:text-4xl text-white">
              Sneak Peek into our Innovative Journey
            </h1>
          </div>

          <div
            className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20"
            data-aos-delay="200"
            data-aos="fade-up"
          >
            <StatsSection />
          </div>
        </div>
      </section>
      {/* Brands Section */}
      <Brands />
      {/* FAQ footer section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to your common questions about our Specialized Services"
        questions={[
          {
            title: "What is included in your training programs?",
            answer:
              "We offer three key programs: Complete Staff Work (workflow & execution), Basic Management Training  (foundational leadership), Advanced Leadership Training (strategic decision-making & development).",
          },
          {
            title: "Who is the training for—managers or virtual assistants?",
            answer:
              "Both. Our programs are designed for virtual staff, team leaders, and managers—anyone looking to improve performance, leadership, or operational efficiency.",
          },
          {
            title: "How will these trainings benefit my business?",
            answer:
              "Your team will gain practical skills like goal setting, KPI tracking, SWOT analysis, and process improvement, which translate directly to better productivity and scalable growth.",
          },
          {
            title: "How much does it cost?",
            answer:
              "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. For more information, please contact us at support@accessvirtualstaffing.com",
          },
        ]}
        footerDescription="Do you have other questions?"
        buttons={[
          {
            navLink: {
              title: "See more",
              url: "/faq",
              follow: false,
            },
            variant: "outline",
            size: "xl",
            icon: () => <ChevronRight className=" text-deepZinc w-6 h-6" />,
          },
          {
            navLink: {
              title: "Contact Us",
              url: "/contact-us",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
      />
      {/* Blog Section */}
      <BlogContainer />
    </main>
  );
}
