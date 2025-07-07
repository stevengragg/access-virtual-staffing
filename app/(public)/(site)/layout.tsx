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

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useMediaQuery("(max-width: 991px)");

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
        item: "https://www.accessvirtualstaffing.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://www.accessvirtualstaffing.com/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Free Strategy Call",
        item: "https://www.accessvirtualstaffing.com/book-a-meeting",
      },
    ],
  };

  return (
    <>
      <SiteNavigation2 />
      <div className={cn(!isMobile && "pt-[60px]")}>{children}</div>
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
