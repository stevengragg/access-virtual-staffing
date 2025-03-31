"use client";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { fetchApi } from "@/services/fetch-api";
import { IProfileResponse } from "@/types/profiles";

const TOTAL_STEPS = 11; // Adjusted based on required fields + required uploads

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

  // Required fields
  const requiredFields = [
    profileData?.profile?.jobTitle,
    profileData?.profile?.address,
    profileData?.profile?.skypeId,
    profileData?.profile?.dateOfBirth,
    profileData?.profile?.hasPaypal,
    profileData?.profile?.desiredSalary,
  ];
  const completedFields = requiredFields.filter(Boolean).length;

  // Required file uploads
  const uploadedFileTypes = new Set(
    profileData?.fileUploads?.map((file) => file.type)
  );
  const completedFiles = REQUIRED_FILES.filter((fileType) =>
    uploadedFileTypes.has(fileType)
  ).length;

  // Total completed steps
  const completedSteps = completedFields + completedFiles;
  const isProfileComplete = completedSteps === TOTAL_STEPS;

  const progressMessage = isProfileComplete
    ? "Profile Completed!"
    : `Profile ${((completedSteps / TOTAL_STEPS) * 100).toFixed(0)}% complete`;

  return (
    <Card className="w-full border border-gray-200">
      <div className="flex gap-1 mt-2 px-2">
        {Array.from({ length: TOTAL_STEPS }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < completedSteps ? "bg-primaryBrightAqua" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex p-4 items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-bold text-lg">
          <UserIcon className="h-6 w-6 text-gray-600 font-bold" />
          <p className="text-sm text-gray-700 font-semibold">
            {progressMessage}
          </p>
        </div>

        {isProfileComplete ? (
          <Button
            variant="ghostBlue"
            onClick={() => router.push("/app/profile")}
            size="sm"
            className="text-primaryBrightAqua"
          >
            View Your Profile
          </Button>
        ) : (
          <Button
            variant="ghostBlue"
            onClick={() => router.push("/app/profile")}
            size="sm"
            className="text-primaryBrightAqua"
          >
            Complete Your Profile
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Stepper;
