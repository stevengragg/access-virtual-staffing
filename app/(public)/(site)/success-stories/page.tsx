import { ArrowRight } from "lucide-react";

import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";
import { TestimonialCarousel } from "@/components/section/testimonial-carousel";
import HowItWorks3 from "@/components/section/how-it-works-3";

import { TestimonialFeatured } from "@/components/section/testimonial-featured";
import { CTAFooter } from "@/components/section/cta-footer";

export default function SuccessStories() {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* Success Stories Hero Header Section */}
      <HeroHeaderWBgImg
        tagline="Testimonials"
        heading="Client Success Stories"
        description="Discover how our clients have transformed their businesses with Access Virtual Staffing's solutions. From streamlining operations to enhancing productivity, our success stories showcase the impact of our virtual staffing services."
        buttons={[
          {
            navLink: {
              title: "Book a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            variant: "cta1",
            size: "xl",
            icon: () => <ArrowRight className="" />,
          },
          {
            navLink: {
              title: "Check Our Services",
              url: "/services",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
        ]}
        image={{
          src: "/bg/about_bg.webp",
          alt: "About Us Hero Image",
          width: 1920,
          height: 1080,
        }}
      />
      {/* Testimonial Carousel Section */}
      <TestimonialCarousel />
      {/* Testimonial Featured Section */}
      <TestimonialFeatured />
      {/* How it works */}
      <HowItWorks3 />
      {/* CTA Footer section */}
      <CTAFooter
        heading="Stop Doing Everything."
        heading2="Start Leading with Leverage."
        description1="Your next level of growth is waiting. Book your free strategy call today. "
        description2="Discover how our premium virtual assistants can transform your business operations."
        buttons={[
          {
            navLink: {
              title: "Book a Free Strategy Call",
              url: "/book-a-meeting",
              follow: false,
            },
            icon: () => <ArrowRight className="text-deepZinc w-6 h-6" />,
            variant: "cta1",
            size: "xl",
          },
        ]}
      />
    </main>
  );
}
