import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { LongFormContent } from "@/components/section/long-form-content";
import { LongFormContent2 } from "@/components/section/long-form-content2";
import { LongFormHeader } from "@/components/section/long-form-header";
import { ArrowRight } from "lucide-react";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";

export const metadata: Metadata = {
  title: "About Us | Access Virtual Staffing",
  description:
    "Learn more about Access Virtual Staffing, World's top virtual staffing agency. Discover our mission, values, and the team dedicated to providing exceptional virtual staffing solutions.",
};

export default function AboutUs() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* About Us Hero Header Section */}
      <HeroHeaderWBgImg
        tagline="Our Story"
        heading="How it all started"
        description="Access Virtual Staffing was born out of a vision to revolutionize the way businesses connect with talent. Our founder, Phil Wardell, recognized the immense potential of leveraging global expertise to drive local success. With a commitment to excellence and a passion for people, he set out to create a staffing solution that transcends traditional boundaries."
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
              title: "Check Our Services",
              url: "/services",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
        image={{
          src: "/bg/about_bg.webp",
          alt: "About Us Hero Image",
          width: 1920,
          height: 1080,
        }}
      />

      {/* Long Form Content Header Section */}
      <LongFormHeader />
      {/* Long Form Content Section */}
      <LongFormContent
        quote="“Our people are the heart of our success. When you genuinely care for your employees and invest in their well-being, they respond with unparalleled dedication and excellence. I place my trust in them, not just because of their skills, but because I believe in their potential to achieve greatness.”"
        author="- shares Phil Wardell"
        description="This philosophy of mutual respect, integrity, trust and professionalism didn't just drive the success of Access Insurance Underwriting—it became the cornerstone of Access Virtual Staffing's unique approach. Unlike traditional recruitment agencies, we go beyond simply matching skills to roles. We integrate  highly skilled offshore talent into your core operations, fostering a seamless extension of your team. As our business grew, CEOs from various small businesses took notice, eager to understand the secret behind our sustained success."
        description2="
Phil's innovative model offers more than just a staffing solution; it provides a strategic advantage that empowers businesses to scale efficiently, adapt quickly, and outperform competitors. Access Virtual Staffing stands apart by offering more than just personnel—we deliver a partnership that fuels growth, innovation, and long-term success."
        image={{
          src: "/img/phil_wardell.webp",
          alt: "Phil Image 1",
          width: 450,
          height: 500,
        }}
      />
      {/* Long Form Content 2 Section */}
      <LongFormContent2
        quote="“I want to share the blueprint of our success with fellow small business CEOs, not just as a strategy, but as a belief in the limitless potential of people. By harnessing the power of global talent, we've unlocked a new dimension of growth and innovation. My goal is to help others do the same, empowering businesses to thrive by tapping into the diverse, skilled, and dedicated professionals that the world has to offer.”"
        author="- Phil Wardell expresses with passion"
        description="Access Virtual Staffing was born out of a desire to extend this proven model to businesses worldwide, enabling them to achieve their goals with the support of highly skilled, dedicated professionals. Our mission is to bridge talent and business success, fostering long-lasting partnerships that drive growth and innovation."
        image={{
          src: "/img/phil_wardell_w_wife.webp",
          alt: "Phil Image 2",
          width: 450,
          height: 500,
        }}
      />
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Stop Doing Everything."
        heading2="Start Leading with Leverage."
        description1="Your next level of growth is waiting. Book your free strategy call today. "
        description2="Discover how our premium virtual assistants can transform your business operations."
        buttons={[
          {
            navLink: {
              title: "Book a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            icon: () => <ArrowRight className="text-deepZinc w-6 h-6" />,
            variant: "cta1",
            size: "xl",
          },
        ]}
      />
    </main>
  );
}
