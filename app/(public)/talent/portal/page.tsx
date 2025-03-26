import { Metadata } from "next";
import Image from "next/image";
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

const image = {
  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
  alt: "Modern office workspace",
  width: 1920,
  height: 1080,
};

export default function Auth() {
  return (
    <section className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-deepBlue bg-opacity-70"></div>
      </div>

      {/* Centered Card */}
      <div className="relative z-10 w-full max-w-md bg-white p-12 rounded-3xl shadow-[0px_10px_80px_rgba(0,0,0,0.7)] border border-gray-200 bg-opacity-90 backdrop-blur-lg">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Applicant Portal
          </h1>
          <p className="mt-4 text-md text-gray-600 leading-relaxed">
            Find jobs that match your skills and access your account to manage
            applications.
          </p>
        </div>

        {/* Login & Signup Button */}
        <AccessPortalContainer />
      </div>
    </section>
  );
}
