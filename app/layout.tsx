import type { Metadata, Viewport } from "next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { getSession } from "@auth0/nextjs-auth0";

import "./globals.css";
import { cn } from "@/lib/utils";
// import { Footer } from "@/components/layout/footer";
// import ScrollToTop from "@/components/ui/scroll-to-top";
// import { AppNavbar } from "@/components/layout/app-navigation";
// import { SiteNavbar } from "@/components/layout/site-navigation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
  description:
    "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
  keywords: [
    "virtual staffing",
    "remote staffing",
    "virtual assistants",
    "Florida staffing agency",
    "remote professionals",
    "Access Virtual Staffing",
    "virtual team",
    "business solutions",
    "top staffing agency Florida",
    "virtual workforce",
    "virtual staffing agency",
    "administrative support staff",
    "data entry staff",
    "customer service staff",
    "specialized skilled staff",
    "staffing agency",
  ],
  authors: [
    {
      name: "Iona Innovation Labs",
      url: "https://www.linkedin.com/company/iona-innovation-labs",
    },
  ],
  publisher: "Vercel",
  metadataBase: new URL("https://www.accessvirtualstaffing.com"),
  alternates: {
    canonical: "https://www.accessvirtualstaffing.com",
  },
  openGraph: {
    title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com", // Replace with your actual URL
    images: "/opengraph-image.jpg", // Replace with your actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    images: "/twitter-image.jpg", // Replace with your actual image URL
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await getSession();
  // console.log(session);
  return (
    <html lang="en">
      <UserProvider>
        <body className={cn(manrope.className)}>{children}</body>
      </UserProvider>
    </html>
  );
}
