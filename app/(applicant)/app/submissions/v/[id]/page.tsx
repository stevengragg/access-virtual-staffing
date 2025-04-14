import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { notFound } from "next/navigation";

import { AppRouterWithNormalParamsWithId } from "@/types/general";
import JobHeader from "@/components/submissions/job/job-header";
import { getJobApplicationWithJobDetails, getJobPost } from "@/lib/api/jobs";
import JobContent from "@/components/submissions/job/job-contents";

export default withPageAuthRequired(
  async function ViewJobSubmission({
    params,
  }: AppRouterWithNormalParamsWithId) {
    const fetchedJobApplication = await getJobApplicationWithJobDetails(
      params?.id || ""
    );

    if (!fetchedJobApplication) {
      return notFound();
    }

    return (
      <div className="h-fit overflow-auto p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <JobHeader
          jobApplication={{
            title: fetchedJobApplication.job.title,
            submittedAt: fetchedJobApplication.submittedAt,
          }}
        />

        <JobContent jobApplicationDetails={fetchedJobApplication} />
      </div>
    );
  },
  { returnTo: "/app/submissions/v/:id" }
);
