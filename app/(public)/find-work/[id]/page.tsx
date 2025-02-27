import { Banknote, Calendar, MapPin, UserRound } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { ViewJobContent } from "@/components/jobs/view-job-content";
import { ViewJobHeader } from "@/components/jobs/view-job-header";
import { getJobPost } from "@/lib/api/jobs";
import { ViewJobApplyContainer } from "@/components/jobs/view-job-apply-container";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getJobPost(id);

  return {
    title: post ? `${post.item?.title} - Access Virtual Staffing` : "View Job",
  };
}

type Params = Promise<{ id: string }>;
export default async function ViewJob({ params }: { params: Params }) {
  const { id } = await params;
  const post = await getJobPost(id);

  // if (
  //   post?.item?.title?.toLowerCase() !==
  //   id?.split("-")?.splice(1)?.join(" ")?.toLowerCase()
  // ) {
  //   return notFound();
  // }

  if (!post) {
    return notFound();
  }

  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      <ViewJobHeader
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
          // {
          //   label: post?.item?.postedBy || "Not available",
          //   icon: UserRound,
          // },
          {
            label: formatDistanceToNow(new Date(post?.item?.createdAt || ""), {
              addSuffix: true,
            }),
            icon: Calendar,
          },
        ]}
      />
      <ViewJobContent heading="Overview">
        <div
          dangerouslySetInnerHTML={{ __html: post?.item?.description || "" }}
        />
      </ViewJobContent>

      <ViewJobApplyContainer />
    </main>
  );
}
