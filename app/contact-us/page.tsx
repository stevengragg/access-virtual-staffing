import { ContactForm } from "@/components/form/contact-form";
import { ContactHeader } from "@/components/section/contact-header";
import { CTAFooter } from "@/components/section/cta-footer";
import { FaqFooter } from "@/components/section/faq-footer";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Contact Us Hero Header Section */}
      <ContactHeader />
      {/* Contact Form Section */}
      <ContactForm />
      {/* FAQ Footer Section */}
      <FaqFooter />
      {/* CTA Footer Section */}
      <CTAFooter />
    </main>
  );
}
