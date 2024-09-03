import { PodioForm } from "@/components/form/podio-form";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { HowItWorks } from "@/components/section/how-it-works";

type Props = {};

export default function StartHiring({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal
        heading="Ready to Hire your Virtual Staff?"
        context="We prepared a form for you to fill-up so that we can get started with your requirements."
      />
      {/* Podio Form Section */}
      <PodioForm />
      {/* How it wo<rks Section */}
      <HowItWorks buttons={[]} />
      {/* FAQ Footer Section */}
      <FaqFooter />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
