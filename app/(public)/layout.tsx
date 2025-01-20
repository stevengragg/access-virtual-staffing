import { SpeedInsights } from "@vercel/speed-insights/next";
import { Product, WithContext, WebSite, BreadcrumbList } from "schema-dts";

import { Footer } from "@/components/layout/footer";
import { SiteNavbar } from "@/components/layout/site-navigation";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default async function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        name: "Hire a Virtual Staff",
        item: "https://www.accessvirtualstaffing.com/start-hiring",
      },
    ],
  };

  return (
    <>
      <SiteNavbar />
      {children}
      <Footer />
      <SpeedInsights />
      <ScrollToTop />
    </>
  );
}
