import { Metadata } from "next";

import { ApplicationShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/toaster";
import { OnboardingModal } from "@/components/on-boarding/on-boarding-modal";

export const metadata: Metadata = {
  title: "Applicant Portal - Access Virtual Staffing",
  description:
    "Applicant portal for job seekers that applies and manage job applications - Access Virtual Staffing",

  openGraph: {
    title: "Applicant Portal - Access Virtual Staffing",
    description:
      "Applicant portal for job seekers that applies and manage job applications - Access Virtual Staffing",
    type: "website",
    url: "https://www.accessvirtualstaffing.com", // Replace with your actua l URL
    images: "/opengraph-image.jpg", // Replace with your actual image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Applicant Portal - Access Virtual Staffing",
    description:
      "Applicant portal for job seekers that applies and manage job applications - Access Virtual Staffing",
    images: "/twitter-image.jpg", // Replace with your actual image URL
  },
};

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ApplicationShell>
        {children}
        <Toaster />
      </ApplicationShell>

      <OnboardingModal />
    </>
  );
}
