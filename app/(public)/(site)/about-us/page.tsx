import { Metadata } from "next";

import { CTAFooter } from "@/components/section/cta-footer";
import { HeroHeader2 } from "@/components/section/hero-header-2";
import { LongFormContent } from "@/components/section/long-form-content";
import { LongFormContent2 } from "@/components/section/long-form-content2";
import { LongFormHeader } from "@/components/section/long-form-header";

export const metadata: Metadata = {
  title: "About Us | Access Virtual Staffing",
  description:
    "Learn more about Access Virtual Staffing, Florida's top virtual staffing agency. Discover our mission, values, and the team dedicated to providing exceptional virtual staffing solutions.",
};

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* About Us Hero Header Section */}
      <HeroHeader2 />
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
              title: "Free Startegy Call",
              url: "/book-a-meeting",
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
