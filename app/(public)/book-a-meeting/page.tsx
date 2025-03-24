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
      <section className="flex flex-col md:flex-row px-[5%] py-16 md:py-24 lg:py-28 items-start justify-center align gap-x-6 md:gap-x-10 bg-gray-100">
        {/* Left Pane */}
        <div className="md:w-1/3 text-center md:text-left mt-3">
          {/* Heading & Subheading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Scale Your Business Efficiently with Top Virtual Talent
          </h2>
          <p className="text-lg font-semibold text-primaryBrightAqua mt-2">
            Get the Support You Need to Focus on Growth
          </p>

          {/* Agenda Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900">
              What We&apos;ll Cover:
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-primaryBrightAqua">✔</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Understand Your Business Needs:
                  </p>
                  <p className="text-gray-600">
                    We’ll discuss your challenges and how a virtual team can
                    help optimize operations.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primaryBrightAqua">✔</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Identify the Right Virtual Assistant:
                  </p>
                  <p className="text-gray-600">
                    Discover the skill set needed to streamline your daily tasks
                    and boost efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primaryBrightAqua">✔</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Build a Scalable Virtual Staffing Plan:
                  </p>
                  <p className="text-gray-600">
                    Learn how to integrate a remote team that supports your
                    long-term business goals.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <p className="text-gray-600">
              Can’t find a suitable time?{" "}
              <a
                href="mailto:support@accessvirtualstaffing.com"
                className="text-primaryBrightAqua font-semibold"
              >
                Email us
              </a>
              , and we’ll set up a custom session for you.
            </p>
            <p className="mt-3 text-gray-600">
              Looking for a VA role?{" "}
              <a href="/apply" className="text-primaryBrightAqua font-semibold">
                Apply Here!
              </a>{" "}
              Join our team and make an impact.
            </p>
          </div>
        </div>

        {/* Right Pane - Calendly Form */}
        <div className="md:w-1/3">
          <CalendlyForm />
        </div>
      </section>

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
