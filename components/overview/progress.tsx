"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { fetchApi } from "@/services/fetch-api";
import { IProfileResponse } from "@/types/profiles";

const TOTAL_STEPS = 22; // Adjusted based on required fields + required uploads

const REQUIRED_FILES = [
  "resume",
  "professional_picture",
  "internet",
  "computer_specs",
  "work_station",
];

const Stepper = () => {
  const router = useRouter();

  const { data: profileData } = useSWR<IProfileResponse>("/profile", fetchApi);

  const requiredFields = [
    profileData?.profile?.jobTitle,
    profileData?.profile?.whyFit,
    profileData?.profile?.whatStrengths,
    profileData?.profile?.whatNeedImprovement,
    profileData?.phones,
    profileData?.emails,
    profileData?.profile?.address,
    profileData?.profile?.skypeId,
    profileData?.profile?.dateOfBirth,
    profileData?.profile?.hasPaypal,
    profileData?.profile?.desiredSalary,
    profileData?.profile?.numberOfChildren,
    profileData?.contentLinks,
    profileData?.profile?.internetProvider,
    profileData?.profile?.numberOfMonitors,
    profileData?.profile?.numberOfExperience,
    profileData?.profile?.numberOfExperience,
  ];
  const completedFields = requiredFields.filter(Boolean).length;

  const uploadedFileTypes = new Set(
    profileData?.fileUploads?.map((file) => file.type)
  );
  const completedFiles = REQUIRED_FILES.filter((fileType) =>
    uploadedFileTypes.has(fileType)
  ).length;

  const completedSteps = completedFields + completedFiles;
  const isProfileComplete = completedSteps === TOTAL_STEPS;

  const progressMessage = isProfileComplete
    ? "Profile Completed!"
    : `Profile ${((completedSteps / TOTAL_STEPS) * 100).toFixed(0)}% complete`;

  return (
    <Card className="w-full border border-zinc-200">
      <div className="flex gap-1 mt-2 px-2">
        {Array.from({ length: TOTAL_STEPS }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < completedSteps ? "bg-deepBlue" : "bg-zinc-300"
            }`}
          />
        ))}
      </div>

      <div className="flex p-4 items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-bold text-lg">
          <UserIcon className="h-6 w-6 text-zinc-600 font-bold" />
          <p className="text-sm text-zinc-700 font-semibold">
            {progressMessage}
          </p>
        </div>

        {isProfileComplete ? (
          <Button
            variant="ghostPrimary"
            onClick={() => router.push("/app/profile")}
            size="sm"
            className="text-deepBlue"
          >
            View Your Profile
          </Button>
        ) : (
          <Button
            variant="ghostPrimary"
            onClick={() => router.push("/app/profile")}
            size="sm"
            className="text-deepBlue"
          >
            Complete Your Profile
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Stepper;
