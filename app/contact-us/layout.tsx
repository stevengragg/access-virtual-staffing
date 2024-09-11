"use client";

import { Toaster } from "@/components/ui/toaster";

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
