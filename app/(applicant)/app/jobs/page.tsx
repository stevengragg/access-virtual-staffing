import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Metadata } from "next";

import { ISearchParams } from "@/types/jobs";
import { getJobs } from "@/lib/api/jobs";
import { JobListSearchFormContainer } from "@/components/jobs/joblist-search-form-container";
import { JobListContainerAdvanced } from "@/components/jobs/joblist-container-advanced";
import { JobListItemPosition } from "@/components/jobs/joblist-item-position";

export const metadata: Metadata = {
  title: "Explore Jobs - Access Virtual Staffing",
};

export const dynamic = "force-dynamic";

export default withPageAuthRequired(
  async function Jobs({ searchParams }: { searchParams?: ISearchParams }) {
    const resolvedSearchParams = searchParams;

    const page = parseInt(resolvedSearchParams?.page as string, 10) || 1;
    const offset = (page - 1) * 10;
    const positions = await getJobs(
      {
        offset,
        sort_by: "created_on",
        sort_desc: true,
        limit: 10,
        filters: {
          "job-posting-status": 3,
          title: resolvedSearchParams?.search || undefined,
        },
      },
      true
    );

    const totalFilteredCount = positions?.success ? positions.total : 0;

    return (
      <div className="h-[calc(100vh-4.5rem)] overflow-auto">
        <div className="w-full mx-auto ">
          <section
            id="joblist_header"
            className="relative px-[5%] pt-8 md:pt-12"
          >
            <div className="container ">
              <div className="w-full max-w-lg">
                <h1 className=" text-2xl font-bold md:text-3xl">
                  Explore Jobs
                </h1>
              </div>
            </div>
          </section>
          <JobListSearchFormContainer
            totalSearchResult={totalFilteredCount}
            searchText={
              Array.isArray(resolvedSearchParams?.search)
                ? resolvedSearchParams.search[0]
                : resolvedSearchParams?.search || ""
            }
          />

          <JobListContainerAdvanced>
            <div className="flex flex-col gap-6 md:gap-8">
              {positions && positions.items.length ? (
                positions.items.map((position, index) => (
                  <JobListItemPosition key={index} position={position} />
                ))
              ) : (
                <div className="bg-zinc-300 p-8 lg:p-12 text-center">
                  <p className="md:text-md">
                    No Jobs available. Please check again later.
                  </p>
                </div>
              )}
            </div>
          </JobListContainerAdvanced>
        </div>
      </div>
    );
  },
  { returnTo: "/app/jobs" }
);
