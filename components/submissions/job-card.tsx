"use client";

import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { IJobApplication } from "@/types/jobs";

type JobCardProps = {
  job: IJobApplication;
};

const JobCard = ({ job }: JobCardProps) => {
  const router = useRouter();

  const navigateToJob = () => {
    router.push(`/app/submissions/v/${job.id}`);
  };

  return (
    <div
      className="flex items-center justify-between p-4 border rounded-lg shadow-xl hover:shadow-md transition cursor-pointer"
      onClick={navigateToJob}
    >
      <div className="flex items-center space-x-4">
        <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-md object-contain" />
        <div>
          <h2 className="font-semibold">{job.company}</h2>
          <p className="text-sm text-gray-600">{job.position}</p>
          <p
            className={`text-xs font-semibold mt-1 ${
              job.status === "Pending" ? "text-yellow-500" : "text-red-500"
            }`}
          >
            ● {job.status} <span className="text-gray-400">{job.date}</span>
          </p>
        </div>
      </div>
      <FaChevronRight className="text-gray-400" />
    </div>
  );
};

export default JobCard;
