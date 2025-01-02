import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <>
      {/* Hero Header Section */}
      <HeroHeaderNormal
        heading="We got your message!"
        context="Thank you for contacting us and we'll get back to you soon!"
      />
      {/* FAQ Footer Section */}
      <FaqFooter />
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
    </>
  );
}
