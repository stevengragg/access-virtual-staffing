import { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Contact Us | Access Virtual Staffing",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {children}
      <Toaster />
    </main>
  );
}
