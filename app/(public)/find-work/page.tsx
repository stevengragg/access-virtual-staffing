import { Metadata } from "next";

import { getJobs } from "@/lib/api/jobs";
import { CtaFooterJobseeker } from "@/components/section/cta-footer-jobseeker";
import { JobListHeaderCta } from "@/components/jobs/joblist-header-cta";
import { JobListContainerAdvanced } from "@/components/jobs/joblist-container-advanced";
import { JobListPaginationContainer } from "@/components/jobs/joblist-pagination-container";
import { JobListSearchFormContainer } from "@/components/jobs/joblist-search-form-container";

export const metadata: Metadata = {
  title:
    "Browse Remote Jobs and Find Virtual Staff Opportunities | Access Virtual Staffing",
  description:
    "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
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
    title: "Browse Jobs | Access Virtual Staffing",
    description:
      "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/find-work",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Jobs | Access Virtual Staffing",
    description:
      "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};
export const dynamic = "force-dynamic";
type SearchParams = { [key: string]: string | string[] | undefined };
export default async function FindWork({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  const page = parseInt(resolvedSearchParams.page as string, 10) || 1;
  const offset = (page - 1) * 10;
  const positions = await getJobs({
    offset,
    sort_by: "created_on",
    sort_desc: true,
    limit: 10,
    filters: {
      "job-posting-status": 3,
      title: resolvedSearchParams.search || undefined,
    },
  });

  const totalFilteredCount = positions?.success ? positions.total : 0;
  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      <JobListHeaderCta />

      <JobListSearchFormContainer
        totalSearchResult={totalFilteredCount}
        searchText={
          Array.isArray(resolvedSearchParams.search)
            ? resolvedSearchParams.search[0]
            : resolvedSearchParams.search || ""
        }
      />

      <JobListContainerAdvanced
        positions={positions?.success ? positions.items : []}
        buttons={[]}
      />

      <JobListPaginationContainer
        totalCount={totalFilteredCount}
        siblingCount={1}
        pageSize={10}
      />

      <CtaFooterJobseeker
        heading="Remote Jobs: Work and Grow From Anywhere"
        description=""
        buttons={[
          {
            navLink: {
              title: "Find Jobs",
              url: "/auth",
              follow: false,
            },
            variant: "outline",
            size: "xl",
          },
          {
            navLink: {
              title: "Hire a Virtual Staff",
              url: "/talent",
              follow: false,
            },
            variant: "secondary",
            size: "xl",
          },
        ]}
      />
    </main>
  );
}
