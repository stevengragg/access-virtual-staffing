import { CalendlyForm } from "@/components/form/calendly-form";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function BookAMeeting({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Book a Free Discovery Call Today"
        context="Book a discovery call with the professional team from Access Virtual Staffing today to learn how we can help you reduce your staffing costs by up to 70% with our talented Virtual Staff."
      />
      {/* Calendly Form Section */}
      <CalendlyForm />
      {/* FAQ Footer Section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to your common questions."
        questions={[
          {
            title: "Who can join AVS?",
            answer:
              "Whether you’re a developer, designer, or marketer, join Arc to find freelance and full-time remote jobs. With Arc, you can receive job matches tailored to your profile, speak directly with hiring managers, and get hired!",
          },
          {
            title: "Is it free to join AVS?",
            answer: "Yes, it is completely free.",
          },
          {
            title: "Who are the hiring companies/clients?",
            answer:
              "AVS work with different companies and clients that requests a virtual staff or a team.",
          },
          {
            title: "What type of jobs can I find on AVS?",
            answer:
              "There are full-time, freelance/part-time jobs here at AVS. Once you sign up and get access to our Applicant Portal, you'll receive recommendation and access number of job openings that you search.",
          },
        ]}
        footerDescription="You have other questions?"
        button={{
          navLink: {
            title: "Contact Us",
            url: "/contact-us",
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
        description="Discover our different services or you can send us your requirements so that we can start hiring your first Virtual Staff."
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
              title: "Start Hiring",
              url: "/start-hiring",
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
