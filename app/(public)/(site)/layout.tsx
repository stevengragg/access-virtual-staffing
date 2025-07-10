"use client";

import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WithContext, BreadcrumbList } from "schema-dts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "@relume_io/relume-ui";

import { Footer } from "@/components/layout/footer";

import ScrollToTop from "@/components/ui/scroll-to-top";
import { CtaNewsLetter } from "@/components/section/cta-newsletter";
import { SiteNavigation2 } from "@/components/layout/site-navigation-2";
import LiveChatWidget from "@/components/livechat/live-chat-widget";
import { StrategyCallModal } from "@/components/marketing/strategy-call-modal";
import { cn } from "@/lib/utils";
import { CTAFooter } from "@/components/section/cta-footer";
import { ArrowRight } from "lucide-react";
import { MEDIA_QUERIES } from "@/lib/breakpoints";

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useMediaQuery(MEDIA_QUERIES.mobile);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-sine",
      disable: "mobile",
    });
  });

  const _jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.accessvirtualstaffing.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.accessvirtualstaffing.com/about-us",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Success Stories",
        item: "https://www.accessvirtualstaffing.com/success-stories",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact Us",
        item: "https://www.accessvirtualstaffing.com/contact-us",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Book a Free Strategy Call",
        item: "https://www.accessvirtualstaffing.com/book-a-meeting",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Basic Plan",
        item: "https://www.accessvirtualstaffing.com/services/basic-plan",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Standard Plan",
        item: "https://www.accessvirtualstaffing.com/services/standard-plan",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Specialized Services",
        item: "https://www.accessvirtualstaffing.com/services/specialized-services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(_jsonLd) }}
      />
      <SiteNavigation2 />
      <div className={cn(!isMobile && "pt-[120px]")}>{children}</div>
      <StrategyCallModal />
      <ScrollToTop />
      <LiveChatWidget />
      <CtaNewsLetter />
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
            icon: () => <ArrowRight className="" />,
            variant: "cta1",
            size: "xl",
          },
        ]}
      />
      <Footer />
      <SpeedInsights />
    </>
  );
}
