import { CTAFooter } from "@/components/section/cta-footer";
import { HeroFeature } from "@/components/section/hero-feature";
import { HeroHeaderNormal } from "@/components/section/hero-header-normal";
import { ServicesBenefits } from "@/components/section/services-benefits";
import { ServicesLeft } from "@/components/section/services-left";
import { ServicesOutline } from "@/components/section/services-outline";
import { ServicesRight } from "@/components/section/services-right";
import { Testimonials } from "@/components/section/testimonials";
import { ChevronRight } from "lucide-react";

type Props = {};

export default function SpecializedServices({}: Props) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Header Section */}
      <HeroHeaderNormal heading="Specialized Services" context="" />
      {/* Services A Section */}
      <ServicesLeft
        heading="Specialized Services"
        description="In addition to our recruitment services, we offer Specialized Services programs aimed at skill and process improvement, as well as objective setting. Our training helps enhance the capabilities of your virtual staff, ensuring they meet and exceed your business needs."
        button={{
          navLink: {
            title: "Start Hiring",
            url: "/start-hiring",
            follow: false,
          },
          variant: "link2",
          size: "xl",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
        image={{
          src: "/img/services3.webp",
          alt: "Services Image B",
          width: 616,
          height: 640,
        }}
      />

      {/* Services Benefits Section */}
      <ServicesBenefits
        heading="Benefits of the Specialized Services"
        description="You can add this services along side the other tier to enhance the capability of your dream team."
        cards={[
          {
            heading: "Benefits A",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Benefits A",
              width: 1000,
              height: 1000,
            },
          },
          {
            heading: "Benefits B",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Benefits B",
              width: 1000,
              height: 1000,
            },
          },
          {
            heading: "Benefits C",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Benefits C",
              width: 1000,
              height: 1000,
            },
          },
          {
            heading: "Benefits D",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
            image: {
              src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
              alt: "Benefits D",
              width: 1000,
              height: 1000,
            },
          },
        ]}
      />
      {/* Hero feature Section */}
      <HeroFeature />
      {/* FAQ Footer Section */}
      <Testimonials />
      {/* CTA Footer Section */}
      <CTAFooter
        heading="Unlock Your Business Potential Today"
        description="Send us your requirements or inquiries so that we can start hiring your first Virtual Staff."
        buttons={[
          {
            navLink: {
              title: "Get Started",
              url: "/start-hiring",
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
