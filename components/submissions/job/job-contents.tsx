"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IJobApplication } from "@/types/jobs";
import ApplicationContent from "./tabs/application";
import ApplicationDescription from "./tabs/description";

type JobContentProps = {
  jobApplicationDetails: IJobApplication;
};

const JobContent = ({ jobApplicationDetails }: JobContentProps) => {
  const jobDetails = jobApplicationDetails.job;

  return (
    <Tabs defaultValue="application" className="w-full mt-4">
      <TabsList className="pb-2 text-zinc-600 text-sm">
        <TabsTrigger
          className="text-zinc-700 data-[state=active]:border-zinc-700 rounded-none border-white border-b-2"
          value="application"
        >
          Application
        </TabsTrigger>
        <TabsTrigger
          className="text-zinc-700 data-[state=active]:border-zinc-700 rounded-none border-white border-b-2"
          value="description"
        >
          Job Description
        </TabsTrigger>
      </TabsList>

      <TabsContent value="application">
        <ApplicationContent
          status={jobApplicationDetails.status}
          progress={jobApplicationDetails.progress}
        />
      </TabsContent>

      <TabsContent value="description">
        <ApplicationDescription
          title={jobDetails.title}
          description={jobDetails.description ?? "Not specified"}
          pay={jobDetails.pay ?? "Not specified"}
          location="Remote"
        />
      </TabsContent>
    </Tabs>
  );
};

export default JobContent;
