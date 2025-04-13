"use client";

import { getUser } from "@/database/queries/users";
import { IUserResponse } from "@/types/users";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { FaFileAlt } from "react-icons/fa";
import { useParams, useRouter } from "next/navigation";
import { useUserInfo } from "@/hooks/use-user-info";
import { useProfileTabContext } from "@/context/profile-tab-context";

const FinishSubmission = () => {
  const { userInfo, isLoading, error } = useUserInfo();
  const { jobSubmissionId } = useProfileTabContext();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full p-4">
        <p className="text-zinc-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full p-4">
        <p className="text-red-500">Error fetching user information.</p>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center min-h-screen w-full p-4">
      <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg shadow-lg bg-white p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <p className="text-lg md:text-xl font-semibold text-center">
          Great job,{" "}
          <span className="text-primaryBrightAqua">{userInfo?.firstName}</span>!
        </p>
        <FaFileAlt className="w-16 h-16 md:w-24 md:h-24 text-primaryBrightAqua" />
        <p className="text-center text-sm md:text-base">
          The employer successfully received your job application.
        </p>
        <Button
          variant="primary"
          onClick={() => router.push(`/app/submissions/v/${jobSubmissionId}`)}
          className="w-full md:w-1/2 py-3 md:py-4 text-sm md:text-base"
        >
          Check it out!
        </Button>
      </div>
    </div>
  );
};

export default FinishSubmission;
