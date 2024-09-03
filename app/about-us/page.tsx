import { CTAFooter } from "@/components/section/cta-footer";
import { HeroHeader2 } from "@/components/section/hero-header-2";
import { LongFormContent } from "@/components/section/long-form-content";
import { LongFormContent2 } from "@/components/section/long-form-content2";
import { LongFormHeader } from "@/components/section/long-form-header";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* About Us Hero Header Section */}
      <HeroHeader2 />
      {/* Long Form Content Header Section */}
      <LongFormHeader />
      {/* Long Form Content Section */}
      <LongFormContent />
      {/* Long Form Content 2 Section */}
      <LongFormContent2 />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
