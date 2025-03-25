import { Metadata } from "next";
import { ChevronRight } from "lucide-react";

import { JobListContainer } from "@/components/jobs/joblist-container";
import { JobListHeader } from "@/components/jobs/joblist-header";
import { getJobs } from "@/lib/api/jobs";
import { HowItWorks } from "@/components/section/how-it-works";
import { CtaFooterJobseeker } from "@/components/section/cta-footer-jobseeker";
import { FaqFooter } from "@/components/section/faq-footer";
import { WhyChooseUs } from "@/components/section/why-choose-us";
// import { JobListHeader } from "@/components/jobs/joblist-header";

export const metadata: Metadata = {
  title:
    "Remote jobs for virtual staff professionals | Access Virtual Staffing",
  description:
    "Get matched to your ideal freelance or full-time remote job at US-based startups and companies. Join AVS today!",
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
    "remote jobs",
    "virtual staffing jobs",
    "VA jobs",
    "virtual assistant jobs",
    "freelancing",
    "freelancer",
    "remote work",
    "online jobs",
    "work from home",
    "remote employment",
    "virtual job opportunities",
    "freelance jobs",
    "gig economy",
    "remote career",
    "virtual assistant services",
    "remote job listings",
    "freelance opportunities",
    "virtual employment",
    "remote job search",
    "virtual assistant positions",
    "freelance work",
    "remote job openings",
  ],
  openGraph: {
    title:
      "Remote jobs for virtual staff professionals | Access Virtual Staffing",
    description:
      "Get matched to your ideal freelance or full-time remote job at US-based startups and companies. Join AVS today!",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/talent",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Remote jobs for virtual staff professionals | Access Virtual Staffing",
    description:
      "Get matched to your ideal freelance or full-time remote job at US-based startups and companies. Join AVS today!",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};
export const dynamic = "force-dynamic";
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
export default async function Talent({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  console.log("search params: ", { searchParams });

  const positions = await getJobs({
    sort_by: "created_on",
    sort_desc: true,
    limit: 10,
    filters: { "job-posting-status": 3 },
  });

  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      <JobListHeader />
      {/* How it works Section */}
      <HowItWorks
        tagline="Your Career, Your Way – Work from Anywhere"
        heading="How to get hired on AVS"
        subheading="Get hired in 4 simple steps:"
        sections={[
          {
            stepNumber: 1,
            heading: "Create your profile",
            description:
              "Share some basic details and your past work experience.",
          },
          {
            stepNumber: 2,
            heading: "Apply to jobs",
            description: "Submit the application form to the job you chosen.",
          },
          {
            stepNumber: 3,
            heading: "Receive interview invites",
            description:
              "Interview directly with hiring managers and get job offers.",
          },
          {
            stepNumber: 4,
            heading: "Start working",
            description:
              "Continue to receive support from AVS after you start a new role or contract.",
          },
        ]}
        buttons={[
          {
            navLink: {
              title: "Join Now",
              url: "/talent/portal",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
      />

      <JobListContainer
        heading="Current Job Openings"
        description=""
        positions={positions?.success ? positions.items : []}
        buttons={[
          {
            navLink: {
              title: "View All",
              url: "/talent/find-work",
              follow: false,
            },
            variant: "link2",
            size: "xl",
            icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
          },
        ]}
      />

      <WhyChooseUs
        tagline="Why Choose Us?"
        heading="Scale Your Business with Dedicated Virtual Talent"
        description="We provide top-tier virtual assistants to help entrepreneurs and businesses focus on growth. Our team of skilled professionals ensures your daily operations run smoothly."
        bulletPoints={[
          "Hire pre-vetted, highly skilled virtual assistants.",
          "Reduce operational costs while improving efficiency.",
          "Focus on strategic growth while we handle the tasks.",
        ]}
        buttons={[
          {
            navLink: {
              title: "Book a Consultation",
              url: "/book-consultation",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
          {
            navLink: {
              title: "Apply as a VA →",
              url: "/apply",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Businesswoman working in office",
          width: 600,
          height: 400,
        }}
      />

      {/* FAQ Footer Section */}
      <FaqFooter
        heading="FAQs"
        description="Find answers to your common questions."
        questions={[
          {
            title: "Who can join AVS?",
            answer:
              "Whether you’re a developer, designer, or marketer, join Arc to find freelance and full-time remote jobs. With Arc, you can receive job matches tailored to your profile, speak directly with hiring managers, and get hired!",
          },
          {
            title: "Is it free to join AVS?",
            answer: "Yes, it is completely free.",
          },
          {
            title: "Who are the hiring companies/clients?",
            answer:
              "AVS work with different companies and clients that requests a virtual staff or a team.",
          },
          {
            title: "What type of jobs can I find on AVS?",
            answer:
              "There are full-time, freelance/part-time jobs here at AVS. Once you sign up and get access to our Applicant Portal, you'll receive recommendation and access number of job openings that you search.",
          },
        ]}
        footerDescription="You have other questions?"
        button={{
          navLink: {
            title: "Contact Us",
            url: "/contact-us",
            follow: false,
          },
          variant: "link2",
          size: "lg",
          icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
        }}
      />

      {/* CTA footer for jobseeker */}
      <CtaFooterJobseeker
        heading="Join AVS today and start working the way you want"
        description=""
        buttons={[
          {
            navLink: {
              title: "Join now",
              url: "/talent/portal",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
          {
            navLink: {
              title: "Looking to hire?",
              url: "/book-a-meeting",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
        image={{
          src: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Meeting with team",
          width: 1000,
          height: 1000,
        }}
      />
    </main>
  );
}
