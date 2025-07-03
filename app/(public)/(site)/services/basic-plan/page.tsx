import { ArrowRight, ChevronRight, CheckCheck } from "lucide-react";
import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { ServicesLeft } from "@/components/section/services-left";
import { HeroHeaderWBgImg2 } from "@/components/section/hero-header-short-w-bg-img-2";
import { WhatWeOffer } from "@/components/section/what-we-offer";
import { ServiceFeatureLeft } from "@/components/section/service-feature-left";
import { ServiceFeatureRight } from "@/components/section/service-feature-right";
import { AllPlans } from "@/components/section/all-services";
import StatsSection from "@/components/section/stats-section";
import { Brands } from "@/components/section/brands";
import { BlogContainer } from "@/components/section/blog-container";
import { FaqFooter } from "@/components/section/faq-footer";

export const metadata: Metadata = {
  title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
  description:
    "Our Basic Plan is designed for businesses needing project-based staff without the hassle of full-time employee management. We handle recruitment and payroll, ensuring you get the right talent for short-term or flexible projects. No timekeeping or benefits administration—just streamlined hiring and payroll processing so you can focus on your business.",
  openGraph: {
    title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
    description:
      "Our Basic Plan is designed for businesses needing project-based staff without the hassle of full-time employee management. We handle recruitment and payroll, ensuring you get the right talent for short-term or flexible projects. No timekeeping or benefits administration—just streamlined hiring and payroll processing so you can focus on your business.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/services/basic-plan",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Plan: Recruiting and Payroll | Access Virtual Staffing",
    description:
      "Our Basic Plan is designed for businesses needing project-based staff without the hassle of full-time employee management. We handle recruitment and payroll, ensuring you get the right talent for short-term or flexible projects. No timekeeping or benefits administration—just streamlined hiring and payroll processing so you can focus on your business.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};

export default function BasicPlan() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderWBgImg2
        tagline="Services"
        heading="Basic Plan: "
        highlight="Recruiting and Payroll"
        description="Our Basic Recruitment and Payroll service is ideal for employers seeking project-based staff. We handle the recruiting and payroll processes, allowing you to focus on the project, without the need for timekeeping or benefits administration."
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
        description="Our Basic Plan is designed for businesses needing project-based staff without the hassle of full-time employee management. We handle recruitment and payroll, ensuring you get the right talent for short-term or flexible projects. No timekeeping or benefits administration—just streamlined hiring and payroll processing so you can focus on your business."
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
          src: "/img/services1.webp",
          alt: "Services Image A",
          width: 616,
          height: 640,
        }}
      />

      {/* What We Offer Section */}
      <WhatWeOffer
        heading="What we offer in our"
        highlight="Basic Plan"
        cards={[
          {
            heading: "General Virtual Staff",
            description:
              "Our general virtual staff are versatile professionals that can handle a variety of tasks that will essentially support ytour daily operations, including administrative support, customer service, data entry, and more.",
            image: {
              src: "/img/diverse_skill_sets_illu.webp",
              alt: "General Virtual Staff",
              width: 304,
              height: 160,
            },
            link: "#general-virtual-staff",
          },
          {
            heading: "Skilled Staff",
            description:
              "Our skilled staff are experts in their fields, providing specialized support for tasks such as architecture, web development, human resource, accounting, and more.",
            image: {
              src: "/img/all_inclusive_talent_management_illu.webp",
              alt: "skilled Staff",
              width: 304,
              height: 160,
            },
            link: "#skilled-staff",
          },
          {
            heading: "High-Level Professionals",
            description:
              "Our high-level professionals are highly experienced and licensed experts who can handle legal, financial, executive-level HR support, and other specialized tasks that require advanced knowledge and skills.",
            image: {
              src: "/img/transparent_talent_sourcing_illu.webp",
              alt: "High-Level Professionals",
              width: 304,
              height: 160,
            },
            link: "#high-level-professionals",
          },
        ]}
        button={{
          navLink: {
            title: "Get Started with Basic Plan",
            url: "/book-a-meeting",
            follow: false,
          },
          variant: "cta1",
          size: "xl",
          icon: () => <ChevronRight className=" w-6 h-6" />,
        }}
      />

      {/* Feature A Section */}
      <ServiceFeatureLeft
        tagline=""
        heading="General Virtual Staff"
        description="Find essential support for daily operations, including:"
        features={[
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Email & calendar management",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Data entry & customer service",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Social media & content creation",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Basic graphic design",
          },
        ]}
        hyperlink="general-virtual-staff"
        image={{
          src: "/img/general-va.webp",
          alt: "General VA Image",
          width: 1000,
          height: 1000,
        }}
      />

      {/* Feature B Section */}
      <ServiceFeatureRight
        tagline=""
        heading="Skilled Staff"
        description="For businesses requiring specialized skills, we recruit:"
        features={[
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Web developers & SEO experts",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "CAD operators & architects",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "HR professionals",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "QuickBooks Online (QBO) accountants",
          },
        ]}
        hyperlink="skilled-staff"
        image={{
          src: "/img/skilled-va.webp",
          alt: "Skilled VA Image",
          width: 1000,
          height: 1000,
        }}
      />

      {/* Feature C Section */}
      <ServiceFeatureLeft
        tagline=""
        heading="High-Level Professionals"
        description="Hire top-tier experts in:"
        features={[
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: " Legal services",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Financial consulting",
          },
          {
            icon: <CheckCheck className="size-6 text-green-400" />,
            paragraph: "Executive HR support",
          },
        ]}
        hyperlink="high-level-professionals"
        image={{
          src: "/img/high-level-professional-va.webp",
          alt: "High-level VA Image",
          width: 1000,
          height: 1000,
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
        description="Find answers to your common questions about our Basic Plan"
        questions={[
          {
            title: "What kind of staff can I hire under the Basic Plan?",
            answer:
              "You can hire General Virtual Staff, Skilled Professionals (like developers or accountants), and High-Level Experts in fields such as legal and finance—perfect for project-based or flexible roles.",
          },
          {
            title: "Do I need to manage timesheets or monitor work hours?",
            answer:
              "No. The Basic Plan does not include timekeeping. We focus on recruiting and managing payroll for short-term or task-based needs, giving you staffing without micromanagement.",
          },
          {
            title: "Is the Basic Plan suitable for long-term hires?",
            answer:
              "This plan is best for short-term or project-based staffing. If you need long-term employees with time tracking and benefits, our Standard Plan would be a better fit.",
          },
          {
            title: "How much does it cost?",
            answer:
              "The cost of our virtual staffing services depends on factors such as the type of tasks, the level of expertise required, and the number of hours needed. For more information, please contact us at support@accessvirtualstaffing.com",
          },
        ]}
        footerDescription="You have other questions?"
        button={{
          navLink: {
            title: "See more",
            url: "/faq",
            follow: false,
          },
          variant: "outline",
          size: "xl",
          icon: () => <ChevronRight className=" text-deepZinc w-6 h-6" />,
        }}
      />
      {/* Blog Section */}
      <BlogContainer />
    </main>
  );
}
