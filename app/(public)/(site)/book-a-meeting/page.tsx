import { BusinessScalingCTA } from "@/components/section/business-scale-cta";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { StrategyCallHeroHeader } from "@/components/section/strategy-call-hero-header";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function BookAMeeting({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      <h1>....</h1>
      {/* Header Section */}
      {/* <StrategyCallHeroHeader /> */}
      {/* <HeroHeaderNormal
        heading="Book a Free Discovery Call Today"
        context="Book a discovery call with the professional team from Access Virtual Staffing today to learn how we can help you reduce your staffing costs by up to 70% with our talented Virtual Staff."
      /> */}
      {/* Calendly Form Section */}
      {/* <BusinessScalingCTA
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
            <br />
            Are you applying as a Virtual Assistant?{" "}
            <a href="/talent/portal" className="text-deepBlue underline">
              Create a free account here
            </a>{" "}
            or{" "}
            <a href="/talent" className="text-deepBlue underline">
              Explore jobs.
            </a>
          </p>
        }
      /> */}

      {/* FAQ Footer Section */}
      {/* <FaqFooter
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
      /> */}
      {/* CTA Footer Section */}
      <CTAFooter
        heading="For Business Owners"
        description="Want to know everything about how to work with Virtual Staff and how we close the gap? Schedule a Free strategy call now!"
        buttons={[
          {
            navLink: {
              title: "Schedule a Strategy Session",
              url: "/book-a-meeting#calendly",
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
