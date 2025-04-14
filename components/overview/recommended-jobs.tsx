import { Card } from "@/components/ui/card";

import RecommendedJobCard from "./recommended-job-card";
import { IJobListing } from "@/types/jobs";

const RecommendedJobs = ({ positions }: { positions: IJobListing[] }) => {
  return (
    <Card className="w-full p-6 border border-gray-200 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-semibold">Recommended Jobs</h2>
          {/* <p className="text-gray-700 text-xs">
            Jobs where you&apos;re a top applicant based on your profile job
            search
          </p> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4">
        {positions && positions?.length ? (
          positions.map((position: IJobListing, index: number) => (
            <RecommendedJobCard key={index} position={{ ...position }} />
          ))
        ) : (
          <div className="bg-zinc-300 p-8 lg:p-12 text-center">
            <p className="md:text-md">
              No Jobs available. Please check again later.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecommendedJobs;
