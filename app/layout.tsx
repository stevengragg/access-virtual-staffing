import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  subsets: ["latin"],
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
  authors: [{ name: "Steven Gragg", url: "https://github.com/stevengragg" }],
  creator: "Steven Gragg",
  publisher: "Iona Innovation Laboratories",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://access-virtual-staffing.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    type: "website",
    url: "https://access-virtual-staffing.vercel.app", // Replace with your actual URL
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
