"use client"

import JobCard from "@/components/submissions/job-card";
import {IJobApplication} from "@/types/jobs";
  
  type OngoingSubmissionProps = {
    jobApplications: IJobApplication[];
  };
  
  const OngoingSubmission = ({ jobApplications }: OngoingSubmissionProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {jobApplications.map((job) => (
                <JobCard job={job} key={job.id} />
            ))}
            {
              jobApplications.length === 0 && <p className="text-center text-gray-500">No ongoing submissions</p>
            }
        </div>
    )
}

export default OngoingSubmission