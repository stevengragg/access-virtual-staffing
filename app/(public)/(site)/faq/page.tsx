import { Metadata } from "next";

import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";

export const metadata: Metadata = {
  title: "FAQs | Access Virtual Staffing",
  description:
    "Find answers to common questions about Access Virtual Staffing and our services.",
};
type Props = {};

export default function FAQ({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderWBgImg
        tagline=""
        heading="Frequently Asked Questions"
        description="Find answers to common questions about Access Virtual Staffing and our services."
        buttons={[]}
        image={{
          src: "/bg/resources_bg.webp",
          alt: "Resources Background",
          width: 1920,
          height: 1080,
        }}
      />

      {/* FAQ Main Content Section */}
      <FaqContent />
    </main>
  );
}
