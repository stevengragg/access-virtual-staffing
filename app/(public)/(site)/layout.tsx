"use client";

import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Product, WithContext, WebSite, BreadcrumbList } from "schema-dts";
import AOS from "aos";
import "aos/dist/aos.css";

import { Footer } from "@/components/layout/footer";
import {
  SiteNavbar,
  SiteNavbarDefaultProps,
} from "@/components/layout/site-navigation";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { CtaNewsLetter } from "@/components/section/cta-newsletter";
import { SiteNavigation2 } from "@/components/layout/site-navigation-2";
import LiveChatWidget from "@/components/livechat/live-chat-widget";

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  const jsonLd: WithContext<BreadcrumbList> = {
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
      {children}
      <ScrollToTop />
      <LiveChatWidget />
      <CtaNewsLetter />
      <Footer />
      <SpeedInsights />
    </>
  );
}
