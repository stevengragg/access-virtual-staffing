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
