"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OngoingSubmission from "./ongoing-submission";
import ArchivedSubmissions from "./archived-submission";
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
    }
];

const archivedJobApplications: IJobApplication[] = [
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      status: "Pending",
      date: "2024-02-28",
      logo: "https://img.freepik.com/free-vector/illustration-share-icon_53876-5622.jpg?t=st=1740838725~exp=1740842325~hmac=1bdde57aac4f22cc04dcc750a2aa75b5d232f9d6751040794ca0706ed5941658&w=740",
    },
    {
      id: 2,
      company: "Facebook",
      position: "Product Manager",
      status: "Not Accepted",
      date: "2024-02-20",
      logo: "https://img.freepik.com/free-vector/illustration-share-icon_53876-5622.jpg?t=st=1740838725~exp=1740842325~hmac=1bdde57aac4f22cc04dcc750a2aa75b5d232f9d6751040794ca0706ed5941658&w=740",
    }
];

const SubmissionPages = () => {
    return (
        <div className="container px-6 py-8 md:px-2 md:py-10 lg:py-4">
            <Tabs defaultValue="ongoing" className="w-full">
                <TabsList className="border-b pb-2 text-gray-600 text-sm">
                    <TabsTrigger className="text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2" value="ongoing">Ongoing</TabsTrigger>
                    <TabsTrigger className="text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2" value="archived">Archived</TabsTrigger>
                </TabsList>

                <TabsContent value="ongoing">
                    <OngoingSubmission jobApplications={jobApplications} />
                </TabsContent>

                <TabsContent value="archived">
                    <ArchivedSubmissions jobApplications={archivedJobApplications} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default SubmissionPages;