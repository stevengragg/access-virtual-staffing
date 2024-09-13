import { ContactForm } from "@/components/form/contact-form";
import { ContactHeader } from "@/components/section/contact-header";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <>
      {/* Contact Us Hero Header Section */}
      <ContactHeader />
      {/* Contact Form Section */}
      <ContactForm />
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
