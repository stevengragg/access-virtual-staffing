import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import { IJobApplication } from "@/types/jobs";
import { getProgressReadableText, getProgressColor } from "@/lib/get-progress";

type JobApplicationCardProps = {
  jobApplication: IJobApplication;
};

const JobApplicationCard = ({ jobApplication }: JobApplicationCardProps) => {
  return (
    <Link
      className="flex items-center justify-between p-4 border rounded-lg shadow-xl hover:shadow-md transition cursor-pointer"
      href={`/app/submissions/v/${jobApplication?.applicationPublicId}`}
    >
      <div className="flex items-center space-x-4">
        <Image
          src={"/avs_logo.webp"}
          alt="Company logo"
          width={64}
          height={64}
          className="w-12 h-12 rounded-md object-contain border border-zinc-300"
        />
        <div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-base lg:text-lg text-zinc-800">
              {jobApplication?.job?.title || "..."}
            </h3>
            <p className="text-sm text-gray-600">Access Virtual Staffing</p>
          </div>
          <p
            className={`text-xs font-semibold mt-1 ${getProgressColor(
              jobApplication?.progress
            )}`}
          >
            ● {getProgressReadableText(jobApplication?.progress)}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-xs text-gray-400">
          {formatDistanceToNow(new Date(jobApplication?.submittedAt), {
            addSuffix: true,
          })}
        </span>
        <FaChevronRight className="text-gray-400" />
      </div>
    </Link>
  );
};

export default JobApplicationCard;
