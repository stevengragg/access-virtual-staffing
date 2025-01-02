import { Metadata } from "next";

import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";
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

type Props = {
  title: string;
  description: string;
};

export type AuthProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export default function Auth(props: AuthProps) {
  const { title, description } = {
    ...AuthDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%]">
      <div className="relative flex min-h-svh flex-col justify-start overflow-auto py-24 lg:py-20">
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8">
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {title}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <AccessPortalContainer />
        </div>
      </div>
    </section>
  );
}

export const AuthDefaults: Props = {
  title: "Applicant Portal",
  description:
    "Discover jobs that fits your skills and access your account to manage your profile and job applications.",
};
