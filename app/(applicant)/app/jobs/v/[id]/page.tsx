import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { formatDistanceToNow } from "date-fns";
import { Banknote, Calendar, MapPin } from "lucide-react";
import { notFound } from "next/navigation";

import { ViewJobHeader } from "@/components/jobs/view-job-header";
import LinkButton from "@/components/ui/link-button";
import { getJobPost } from "@/lib/api/jobs";
import { AppRouterWithNormalParamsWithId } from "@/types/general";
import { ViewJobContent } from "@/components/jobs/view-job-content";
import { getJobApplication } from "@/database/queries/job_applications";
import { Button } from "@/components/ui/button";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getJobPost(id);

  return {
    title: post ? `${post.item?.title}` : "View Job",
  };
}

export default withPageAuthRequired(
  async function ViewJob({ params }: AppRouterWithNormalParamsWithId) {
    const post = await getJobPost(
      Array.isArray(params?.id) ? params?.id[0] : params?.id || ""
    );
    const jobApplication = await getJobApplication(params?.id || "");
    const alreadyApplied = jobApplication.ok && jobApplication.application;

    if (!post) {
      return notFound();
    }

    return (
      <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
        <ViewJobHeader
          jobId={post?.item?.id}
          heading={post?.item?.title || "..."}
          details={[
            {
              label: "Remote",
              icon: MapPin,
            },
            {
              label: post?.item?.pay || "Not specified",
              icon: Banknote,
            },
            {
              label: formatDistanceToNow(
                new Date(post?.item?.createdAt || ""),
                {
                  addSuffix: true,
                }
              ),
              icon: Calendar,
            },
          ]}
          applyBtn={
            alreadyApplied ? (
              <Button
                size="xl"
                variant="outline"
                disabled
                className=" disabled:cursor-not-allowed"
              >
                You already applied
              </Button>
            ) : (
              <LinkButton
                size="xl"
                variant="primary"
                navLink={{
                  title: "APPLY FOR THIS JOB",
                  url: `/app/jobs/v/${params?.id}/apply`,
                  follow: false,
                }}
              />
            )
          }
        />
        <ViewJobContent heading="Overview">
          <div
            dangerouslySetInnerHTML={{ __html: post?.item?.description || "" }}
          />
        </ViewJobContent>
      </main>
    );
  },
  { returnTo: "/app/jobs/v/:id" }
);
