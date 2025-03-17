"use client";

// import ProfileCard from "@/components/profile/profile-overview-card";
import { useProfileTabContext } from "@/context/profile-tab-context";
import { useEffect } from "react";
import UploadFileForm from "@/components/profile/upload-files-form";
import EditProfileForm from "@/components/profile/edit-profile-form";
// import { useForm } from "react-hook-form";
// import {
//   fileUploadSchema,
//   FileUploadSchema,
// } from "@/services/user/update-files";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useProfileFiles } from "@/context/profile-files-context";
import FinishSubmission from "@/components/profile/finish-submission";

export default function ProfilePageClient() {
  const { currentTab } = useProfileTabContext();

  useEffect(() => {
    console.log(currentTab);
  }, [currentTab]);

  return (
    <div className="flex  items-center mb-12">
      {/*<ProfileCard profile={profileData} />*/}
      {currentTab === "Profile" && <EditProfileForm />}
      {currentTab === "Files" && <UploadFileForm />}
      {currentTab === "Finish" && <FinishSubmission />}
    </div>
  );
}
