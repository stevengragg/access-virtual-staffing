import { CTAFooter } from "@/components/section/cta-footer";
import { FaqContent } from "@/components/section/faq-content";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* FAQ Hero Header Section */}
      <HeroHeaderNormal />
      {/* FAQ Main Content Section */}
      <FaqContent />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
