import { CalendlyForm } from "@/components/form/calendly-form";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { StrategyCallHeroHeader } from "@/components/section/strategy-call-hero-header";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function BookAMeeting({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <StrategyCallHeroHeader />
      {/* <HeroHeaderNormal
        heading="Book a Free Discovery Call Today"
        context="Book a discovery call with the professional team from Access Virtual Staffing today to learn how we can help you reduce your staffing costs by up to 70% with our talented Virtual Staff."
      /> */}
      {/* Calendly Form Section */}
      <CalendlyForm />
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
        heading="For Business Owners"
        description="Want to know everything about how to work with Virtual Staff and how we close the gap? Schedule a Free strategy call now!"
        buttons={[
          {
            navLink: {
              title: "Schedule a Strategy Session",
              url: "/book-a-meeting#book",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },

          {
            navLink: {
              title: "Discover Our Services",
              url: "/services",
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
