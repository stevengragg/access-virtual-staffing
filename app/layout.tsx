import type { Metadata, Viewport } from "next";

import { Manrope, Montserrat } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
const manrope = Manrope({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

// TODO: SEO-related tasks
// - [x] Meta Data
// - [x] View Port
// - [ ] Robot txt
// - [ ] Sitemap
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
  openGraph: {
    title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com", // Replace with your actual URL
    images: "https://www.accessvirtualstaffing.com/og-image.jpg", // Replace with your actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
    description:
      "Whether you're looking for administrative support, data entry, customer service, or specialized skills, Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
    images: "https://www.accessvirtualstaffing.com/twitter-image.jpg", // Replace with your actual image URL
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
      <body className={cn(manrope.className, montserrat.className)}>
        {children}
      </body>
    </html>
  );
}
