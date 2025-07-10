import { ArrowRight, CheckCheck, ChevronRight } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesOutline } from "@/components/section/services-outline";
import { HeroHeaderWBgImg2 } from "@/components/section/hero-header-short-w-bg-img-2";
import { WhatWeOffer } from "@/components/section/what-we-offer";
import { ServiceFeatureLeft } from "@/components/section/service-feature-left";
import { ServicesBenefits } from "@/components/section/services-benefits";
import { AllPlans } from "@/components/section/all-services";
import { BlogContainer } from "@/components/section/blog-container";
import { FaqFooter } from "@/components/section/faq-footer";
import { Brands } from "@/components/section/brands";
import StatsSection from "@/components/section/stats-section";
// import { ServicesRight } from "@/components/section/services-right";
// import { Testimonials } from "@/components/section/testimonials";

export const metadata: Metadata = {
  title: "Standard plan: High-touch Services | Access Virtual Staffing",
  description:
    "Experience high-touch support with our Standard Plan. We go beyond recruitment to provide personalized onboarding, regular performance check-ins, and dedicated account management. This ensures your VA integrates seamlessly, stays aligned with your goals, and delivers maximum impact for your business.",
  openGraph: {
    title: "Standard plan: High-touch Services | Access Virtual Staffing",
    description:
      "Experience high-touch support with our Standard Plan. We go beyond recruitment to provide personalized onboarding, regular performance check-ins, and dedicated account management. This ensures your VA integrates seamlessly, stays aligned with your goals, and delivers maximum impact for your business.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services/standard-plan",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Standard plan: High-touch Services | Access Virtual Staffing",
    description:
      "Experience high-touch support with our Standard Plan. We go beyond recruitment to provide personalized onboarding, regular performance check-ins, and dedicated account management. This ensures your VA integrates seamlessly, stays aligned with your goals, and delivers maximum impact for your business.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};

type Props = {};

export default function StandardPlan({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderWBgImg2
        tagline="Services"
        heading="Standard plan: "
        highlight="High-touch Services"
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
        description="Experience high-touch support with our Standard Plan. We go beyond recruitment to provide personalized onboarding, regular performance check-ins, and dedicated account management. This ensures your VA integrates seamlessly, stays aligned with your goals, and delivers maximum impact for your business."
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
          src: "/img/services2.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />
      {/* What We Offer Section */}
      <WhatWeOffer
        heading="What we offer in our"
        highlight="Standard Plan"
        description="Our Standard Plan streamlines recruitment and workforce management by covering:"
        cards={[
          {
            heading: "Expert Recruitment",
            description:
              "We source and recruit top talent suited to your business needs, ensuring you have the right team in place.",
            image: {
              src: "/img/skilled_staff.svg",
              alt: "Expert Recruitment",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Efficient Timekeeping",
            description:
              "Accurate tracking of employee work hours to boost productivity and ensure transparency.",
            image: {
              src: "/img/timekeeping.svg",
              alt: "Timekeeping",
              width: 304,
              height: 160,
            },
          },
          {
            heading: "Payroll & Benefits Administration",
            description:
              "We manage salaries, taxes, and benefits, ensuring smooth payroll processing and legal compliance.",
            image: {
              src: "/img/payroll_admin.svg",
              alt: "Payroll & Benefits Administration",
              width: 304,
              height: 160,
            },
          },
        ]}
        button={{
          navLink: {
            title: "Get Started with Standard Plan",
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
        highlight="Standard Plan"
        description="With our Standard Plan, you get a fully managed recruitment and payroll solution, giving your business the efficiency and structure it needs to thrive."
        features={[
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Hassle-free workforce management",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Precise time tracking & reporting",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Reliable payroll & benefits handling",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "More time to focus on business growth",
          },
        ]}
        image={{
          src: "/img/laptop-desk-image.webp",
          alt: "Benefits of the Standard Plan",
          width: 1000,
          height: 1000,
        }}
        button={{
          navLink: {
            title: "Start Hiring with Standard Plan",
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
              "Experience high-touch support with our Standard Plan. We go beyond recruitment to provide personalized onboarding, regular performance check-ins, and dedicated account management. This ensures your VA integrates seamlessly, stays aligned with your goals, and delivers maximum impact for your business.",

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
      {/* Brands Section */}
      <Brands />
      {/* Stats Section */}
      <section
        id="testimonials"
        className="px-[5%] py-16 md:py-24 lg:py-28 bg-white"
      >
        <div className="container-xl">
          <div
            className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20 "
            data-aos-delay="200"
            data-aos="fade-up"
          >
            <h1 className="mb-5 text-xl font-bold md:mb-6 lg:text-4xl text-neutralDarker">
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
      {/* FAQ footer section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to your common questions about our Standard Plan"
        questions={[
          {
            title: "How is the Standard Plan different from the Basic Plan?",
            answer:
              "The Standard Plan includes recruitment, timekeeping, and payroll with benefits, making it ideal for businesses needing a fully managed and structured workforce system—not just short-term hires.",
          },
          {
            title: "What kind of timekeeping system do you use?",
            answer:
              "We use accurate and transparent time tracking tools to monitor work hours, helping boost productivity and ensure payroll accuracy.",
          },
          {
            title: "Can you handle benefits and tax compliance?",
            answer:
              "Yes. We manage salaries, government compliance, and employee benefits so you don’t have to deal with administrative burdens.",
          },
          {
            title: "How much does it cost?",
            answer:
              "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. For more information, please contact us at support@accessvirtualstaffing.com",
          },
        ]}
        footerDescription="You have other questions?"
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
