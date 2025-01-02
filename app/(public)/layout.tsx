import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer } from "@/components/layout/footer";
import { SiteNavbar } from "@/components/layout/site-navigation";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default async function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
