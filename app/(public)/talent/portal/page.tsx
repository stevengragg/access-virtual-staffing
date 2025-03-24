import { Metadata } from "next";
import { AccessPortalContainer } from "@/components/auth/access-portal-container";

export const metadata: Metadata = {
  title: "Applicant Portal | Access Virtual Staffing",
  description:
    "Find work and access your applicant portal account to manage your job applications, profile, and advanced job search.",
  openGraph: {
    title: "Applicant Portal | Access Virtual Staffing",
    description:
      "Find work and access your applicant portal account to manage your job applications, profile, and advanced job search.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/auth",
    images: "/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applicant Portal | Access Virtual Staffing",
    description:
      "Find work and access your applicant portal account to manage your job applications, profile, and advanced job search.",
    images: "/twitter-image.jpg",
  },
};

export default function Auth() {
  return (
    <section className="flex items-center justify-center min-h-screen px-6 bg-gray-50">
      <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-2xl border border-gray-200">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Applicant Portal</h1>
          <p className="mt-3 text-lg text-gray-600">
            Find jobs that match your skills and access your account to manage
            applications.
          </p>
        </div>

        {/* Login & Signup Buttons */}
        <div className="mt-8">
          <AccessPortalContainer />
        </div>
      </div>
    </section>
  );
}
