"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import OngoingSubmission from "./ongoing-submission";
import ArchivedSubmissions from "./archived-submission";

const SubmissionPages = () => {
  return (
    <div className="container px-6 py-8 md:px-2 md:py-10 lg:py-4">
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className=" text-zinc-600 text-sm">
          <TabsTrigger
            className="text-zinc-700 data-[state=active]:border-zinc-700 rounded-none border-white border-b-2"
            value="ongoing"
          >
            Ongoing
          </TabsTrigger>
          <TabsTrigger
            className="text-zinc-700 data-[state=active]:border-zinc-700 rounded-none border-white border-b-2"
            value="archived"
          >
            Archived
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ongoing">
          <OngoingSubmission />
        </TabsContent>

        <TabsContent value="archived">
          <ArchivedSubmissions />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionPages;
