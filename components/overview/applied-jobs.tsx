"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import JobCard from "@/components/submissions/job-card";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

import { IJobApplication } from "@/types/jobs";

const jobApplications: IJobApplication[] = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    status: "Pending",
    date: "2024-02-28",
    logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
  },
  {
    id: 2,
    company: "Facebook",
    position: "Product Manager",
    status: "Not Accepted",
    date: "2024-02-20",
    logo: "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA",
  },
];

const AppliedJobs = () => {
  return (
    <Card className="w-full p-6 border border-gray-200 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h2 className="font-semibold">Applied Jobs</h2>
          <p className="text-gray-700 text-xs">Jobs you recently applied for</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4">
        {jobApplications.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <Button variant="ghostBlue" size="sm" className="font-medium">
          View All Applied Jobs
        </Button>
      </div>
    </Card>
  );
};

export default AppliedJobs;
