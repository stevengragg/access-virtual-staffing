'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { IJobApplication } from "@/types/jobs";
import ApplicationContent from "./tabs/application";
import ApplicationDescription from "./tabs/description";
import CompanyDisplay from "./tabs/company";

type JobContentProps = {
    jobData: IJobApplication;
};

const JobContent = ({ jobData }: JobContentProps) => {
    return (
        <Tabs defaultValue="application" className="w-full mt-4">
            <TabsList className="border-b pb-2 text-gray-600 text-sm">
                <TabsTrigger className="text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2" value="application">Application</TabsTrigger>
                <TabsTrigger className="text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2" value="description">Job description</TabsTrigger>
                <TabsTrigger className="text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2" value="company">Company info</TabsTrigger>
            </TabsList>

            <TabsContent value="application">
                <ApplicationContent resume={jobData.job.resume} status={jobData.status} />
            </TabsContent>

            <TabsContent value="description">
                <ApplicationDescription
                    id={jobData.job.id}
                    position={jobData.position}
                    salaryMin={jobData.job.salaryMin}
                    salaryMax={jobData.job.salaryMax}
                    salaryCurrency={jobData.job.salaryCurrency}
                    location={jobData.job.location}
                    jobEquity={jobData.job.jobEquity}
                    about={jobData.job.about}
                    responsibilities={jobData.job.responsibilities}
                    requirements={jobData.job.requirements}
                    relocation={jobData.job.relocation}
                    experience={jobData.job.experience}
                />
            </TabsContent>

            <TabsContent value="company">
                <CompanyDisplay />
            </TabsContent>
        </Tabs>
    );
};

export default JobContent;
