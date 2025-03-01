"use client"

import JobCard from "@/components/submissions/job-card";
import { IJobApplication } from "@/types/jobs";
  
  type ArchivedSubmissionProps = {
    jobApplications: IJobApplication[];
  };
  
  const ArchivedSubmissions = ({ jobApplications }: ArchivedSubmissionProps) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            {jobApplications.map((job) => (
                <JobCard job={job} key={job.id} />
            ))}
            {
              jobApplications.length === 0 && <p className="text-center text-gray-500">No archived submissions</p>
            }
        </div>
    )
}

export default ArchivedSubmissions