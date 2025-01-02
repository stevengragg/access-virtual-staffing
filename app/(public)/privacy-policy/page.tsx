import { Metadata } from "next";

// import { CTAFooter } from "@/components/section/cta-footer";
// import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";

export const metadata: Metadata = {
  title: "Privacy Policy | Access Virtual Staffing",
  description:
    "Learn about how Access Virtual Staffing collects, uses, and protects your personal information. Our privacy policy outlines our commitment to safeguarding your data and ensuring your privacy.",
};

type Props = {};

export default function PrivacyPolicy({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderNormal heading="Privacy Policy" context="" />
    </main>
  );
}
