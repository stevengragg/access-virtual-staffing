import AppliedJobs from "@/components/overview/applied-jobs";
import Profile from "@/components/overview/profile";
import Stepper from "@/components/overview/progress";
import RecommendedJobs from "@/components/overview/recommended-jobs";
import { getJobs } from "@/lib/api/jobs";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Here are the latest updates on the AVS applicant portal with recommended jobs",
};
export default withPageAuthRequired(
  async function Overview() {
    const positionsResponse = await getJobs(
      {
        offset: 0,
        sort_by: "created_on",
        sort_desc: true,
        limit: 3,
        filters: {
          "job-posting-status": 3,
        },
      },
      undefined,
      true
    );

    const positions = Array.isArray(positionsResponse?.items)
      ? positionsResponse.items
      : [];

    return (
      <div className="h-fit overflow-auto">
        <div className="container flex flex-col mt-4 gap-4 px-4">
          {/* <div className="w-full justify-end items-end py-2">
            <h1 className=" text-end">Profile last updated on: <span className="font-medium">Feb 12, 2025</span></h1>
          </div> */}
          <Stepper />
          <Profile />
          <RecommendedJobs positions={positions || []} />
          <AppliedJobs />
        </div>
      </div>
    );
  },
  { returnTo: "/app/overview" }
);
