"use client";

import ProfileCard from "@/components/profile/profile-overview-card";
import { useProfileTabContext } from "@/context/profile-tab-context";
import { useEffect } from "react";
import FileUploadForm from "@/components/profile/files/page";
import EditProfile from "@/components/profile/edit/page";
import { useForm } from "react-hook-form";
import { fileUploadSchema, FileUploadSchema } from "@/services/user/update-files";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfileFiles } from "@/context/profile-files-context";
import FinishPage from "@/components/profile/finish/page";


export default function ProfilePageClient() {
  const { currentTab } = useProfileTabContext();

  useEffect(() => {
    console.log(currentTab)
  }, [currentTab])

  return (
    <div className="flex  items-center mb-12">
      {/*<ProfileCard profile={profileData} />*/}
      {
        currentTab === "Profile" && <EditProfile />
      }
      {
        currentTab === "Files" && <FileUploadForm />
      }
      {
        currentTab === "Finish" && <FinishPage/>
      }

    </div>
  );
}
