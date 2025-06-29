import { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { PodioForm } from "@/components/form/podio-form";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { HowItWorks } from "@/components/section/how-it-works";

export const metadata: Metadata = {
  title: "Free Strategy Call | Access Virtual Staffing",
  description:
    "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, World's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
  keywords: [
    "virtual staffing",
    "remote staffing",
    "virtual assistants",
    "Florida staffing agency",
    "US staffing agency",
    "remote professionals",
    "Access Virtual Staffing",
    "virtual team",
    "business solutions",
    "top staffing agency Florida",
    "top staffing agency Worldwide",
    "virtual workforce",
    "virtual staffing agency",
    "administrative support staff",
    "data entry staff",
    "customer service staff",
    "specialized skilled staff",
    "staffing agency",
    "hire virtual staff",
    "hire remote staff",
    "hire freelance staff",
    "florida virtual staffing agency",
    "Worldwide virtual staffing agency",
  ],

  openGraph: {
    title: "Free Strategy Call | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, World's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/start-hiring", // Replace with your actual URL
    images: "/opengraph-image.jpg", // Replace with your actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Strategy Call | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    images: "/twitter-image.jpg", // Replace with your actual image URL
  },
};

type Props = {};

export default function StartHiring({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Ready to Hire your Virtual Staff?"
        context="We prepared a form for you to fill-up so that we can get started with your requirements."
      />
      {/* Podio Form Section */}
      <PodioForm />
      {/* How it wo<rks Section */}
      <HowItWorks
        tagline="Your Career, Your Way – Work from Anywhere"
        heading="How to get hired on AVS"
        subheading="Get hired in 4 simple steps:"
        sections={[
          {
            stepNumber: 1,
            heading: "Create your profile",
            description:
              "Share some basic details and your past work experience.",
          },
          {
            stepNumber: 2,
            heading: "Apply to jobs",
            description: "Submit the application form to the job you chosen.",
          },
          {
            stepNumber: 3,
            heading: "Receive interview invites",
            description:
              "Interview directly with hiring managers and get job offers.",
          },
          {
            stepNumber: 4,
            heading: "Start working",
            description:
              "Continue to receive support from AVS after you start a new role or contract.",
          },
        ]}
        buttons={[]}
      />
      {/* FAQ Footer Section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to common questions about Access Virtual Staffing and our services."
        questions={[
          {
            title: "Why choose Access Virtual Staffing?",
            answer:
              "Choosing Access Virtual Staffing means partnering with a team dedicated to delivering top-notch virtual staffing solutions tailored to your needs. We provide highly skilled professionals who are proficient in English and, in some cases, bilingual in Spanish. Our transparent and efficient process ensures you find the best fit for your business while benefiting from our commitment to quality, integrity, and personalized support. Additionally, our flexible services and advanced technology support help streamline your operations, allowing you to focus on what matters most—growing your business.",
          },
          {
            title: "How do I request for a Virtual Staff?",
            answer:
              "To request a Virtual Staff, simply fill out our web form (www.accessvirtualstaffing.com/start-hiring) with the necessary details about your staffing needs. Once we receive your submission, our team will evaluate your request and then reach out to you for a quick verification call. This ensures that we fully understand your requirements and are aligned on the expectations before moving forward.",
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
          variant: "link2",
          size: "lg",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
      />
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Unlock Your Business Potential Today"
        description="Discover our different services or you can send us your requirements or inquiries so that we can start hiring your first Virtual Staff."
        buttons={[
          {
            navLink: {
              title: "Discover Our Services",
              url: "/services",
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
