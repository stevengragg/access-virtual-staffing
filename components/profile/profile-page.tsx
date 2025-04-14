"use client";

import { useProfileTabContext } from "@/context/profile-tab-context";
import UploadFileForm from "@/components/profile/upload-files-form";
import EditProfileForm from "@/components/profile/edit-profile-form";

import FinishSubmission from "@/components/profile/finish-submission";

export default function ProfilePageClient() {
  const { currentTab } = useProfileTabContext();

  return (
    <div className="flex  items-center mb-12">
      {/*<ProfileCard profile={profileData} />*/}
      {currentTab === "Profile" && <EditProfileForm />}
      {currentTab === "Files" && <UploadFileForm />}
      {currentTab === "Finish" && <FinishSubmission />}
    </div>
  );
}
