import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

import { IJobApplicationHeaderDetails } from "@/types/jobs";

type JobHeaderProps = {
  jobApplication: IJobApplicationHeaderDetails;
};

const JobHeader = ({ jobApplication }: JobHeaderProps) => {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src={"/avs_logo.webp"}
        alt="Company logo"
        width={72}
        height={72}
        className="w-18 h-18 rounded-md object-contain border border-zinc-300"
      />
      <div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-base lg:text-lg text-zinc-800">
            {jobApplication?.title || "..."}
          </h3>
          <p className="text-sm text-zinc-600">Access Virtual Staffing</p>
        </div>
        <p className="text-xs font-semibold mt-1">
          Applied{" "}
          {jobApplication?.submittedAt
            ? formatDistanceToNow(new Date(jobApplication.submittedAt), {
                addSuffix: true,
              })
            : "Submission date not available"}
        </p>
      </div>
    </div>
  );
};

export default JobHeader;
