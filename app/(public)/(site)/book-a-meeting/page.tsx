import { ChevronRight } from "lucide-react";

import { BusinessScalingCTA } from "@/components/section/business-scale-cta";
import { CtaQuickCall } from "@/components/section/cta-quick-call";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderQuote } from "@/components/section/hero-header-quote";
import HowItWorks3 from "@/components/section/how-it-works-3";
import { Brands } from "@/components/section/brands";
import { Testimonials } from "@/components/section/testimonials";

export default function BookAMeeting() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderQuote />

      {/* CTA Section */}
      <CtaQuickCall />

      {/* Calendly Form Section */}
      <BusinessScalingCTA
        heading="AVS Free Strategy Session"
        subheading="Thank you for your interest in AVS! This 15-minute strategy session is designed to help you find the best virtual staffing solutions for your business. During this call, we’ll discuss your goals, challenges, and how AVS can help you scale efficiently with expert virtual support."
        agenda={[
          {
            title: "Discover how AVS can streamline your operations",
            description: "",
          },
          {
            title: "Get insights on building a high-performing remote team",
            description: "",
          },
          {
            title: "Find the right staffing solutions tailored to your needs",
            description: "",
          },
        ]}
        footerText="Following our discussion, we will assess whether our solutions align with your business objectives. If so, we will collaborate to optimize your operations with highly skilled virtual assistants."
        additionalInfo={
          <p className="mt-4 text-zinc-700">
            If you’re unable to find a suitable time, please{" "}
            <a
              href="mailto:support@accessvirtualstaffing.com"
              className="text-deepBlue underline"
            >
              contact us
            </a>
            , and we’ll arrange a suitable time for you.
          </p>
        }
      />

      {/* How it works Section */}
      <HowItWorks3 />

      {/* Brands section */}
      <Brands />
      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Footer Section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to your common questions."
        questions={[
          {
            title: "Why choose Access Virtual Staffing?",
            answer:
              "Choosing Access Virtual Staffing means partnering with a team dedicated to delivering top-notch virtual staffing solutions tailored to your needs. We provide highly skilled professionals who are proficient in English and, in some cases, bilingual in Spanish. Our transparent and efficient process ensures you find the best fit for your business while benefiting from our commitment to quality, integrity, and personalized support. Additionally, our flexible services and advanced technology support help streamline your operations, allowing you to focus on what matters most—growing your business.",
          },
          {
            title: "How do I request for a Virtual Staff?",
            answer:
              "To request a Virtual Staff, simply schedule a free strategy call (www.accessvirtualstaffing.com/book-a-meeting) and we can discuss the necessary details about your staffing needs. Once you book a call with us we will ensure that we fully understand your requirements and are aligned on the expectations before moving forward.",
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
    </main>
  );
}
