"use client";

import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import EditProfileForm from "@/components/profile/edit-profile-form";
import UploadFileForm from "@/components/profile/upload-files-form";
// import ProfileCard from "@/components/profile/profile-overview-card";
// import ProfileOverviewDialog from "@/components/profile/profile-overview-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ISearchParams } from "@/types/jobs";

// const profileData = {
//   resume: "https://example.com/resume.pdf",
//   fullName: "Kobe Brian Santos",
//   email: "kobe@example.com",
//   phoneNumber: "+1 234 567 8901",
//   address: "Manila, Philippines",
//   skypeID: "kobe.santos",
//   whyFit: "I am a highly motivated developer...",
//   whatStrengths: "Strong problem-solving skills...",
//   whatNeedImprovement: "Need to work on public speaking...",
//   dateOfBirth: "1995-06-15",
//   hasPaypal: true,
//   contentLinks: ["https://example.com/portfolio"],
//   numberOfChildren: 2,
//   videoLinks: ["https://youtube.com/demo", "facebook.com"],
//   assessmentTests: ["https://example.com/assessment"],
//   internetProvider: "PLDT Fiber",
//   numberOfMonitors: "2",
//   numberOfExperience: "5",
//   salaryUnit: "PHP",
//   desiredSalary: "100,000",
//   workSamples: ["https://example.com/work-sample"],
// };

export default withPageAuthRequired(
  function ProfilePage({ searchParams }: { searchParams?: ISearchParams }) {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(
      searchParams?.active?.toString() || "profile"
    );

    const handleTabChange = (tab: string) => {
      setActiveTab(tab);
      router.push(`/app/profile?active=${tab}`);
    };

    return (
      <div className="flex flex-col items-center mb-12 w-full">
        <Tabs
          className="w-full max-w-2xl"
          value={activeTab}
          onValueChange={handleTabChange}
        >
          <TabsList className="flex justify-start mb-12 w-full">
            {/* <TabsTrigger
              value="overview"
              className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2"
            >
              Overview
            </TabsTrigger> */}
            <TabsTrigger
              value="profile"
              className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="files"
              className="text-md text-gray-700 data-[state=active]:border-gray-700 rounded-none border-white border-b-2"
            >
              Files
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="overview">
            <ProfileCard profile={profileData} />
          </TabsContent> */}
          <TabsContent value="profile">
            <EditProfileForm />
          </TabsContent>
          <TabsContent value="files">
            <UploadFileForm />
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  {
    returnTo: "/app/profile",
  }
);
