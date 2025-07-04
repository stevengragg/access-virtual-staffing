import { ChevronRight } from "lucide-react";

import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <>
      {/* Hero Header Section */}
      <HeroHeaderNormal
        heading="We got your message!"
        context="Thank you for contacting us and we'll get back to you soon!"
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
    </>
  );
}
