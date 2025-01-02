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
      <CTAFooter
        heading="Unlock Your Business Potential Today"
        description="Discover our different services or you can send us your requirements or inquiries so that we can start hiring your first Virtual Staff."
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
              title: "Contact Us",
              url: "/contact-us",
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
