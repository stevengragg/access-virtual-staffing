"use client";

import AppliedJobs from "@/components/overview/applied-jobs";
import Profile from "@/components/overview/profile";
import Stepper from "@/components/overview/progress";
import RecommendedJobs from "@/components/overview/recommended-jobs";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const stepper = {
  message: "Your application is 50% complete",
  maxValue: 13,
  currentValue: 10,
};

export default withPageAuthRequired(
  function Overview() {
    const { isLoading, error } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
      <div className="h-fit overflow-auto">
        <div className="container flex flex-col mt-4 gap-4 px-4">
          <div className="w-full justify-end items-end py-2">
            <h1 className=" text-end">
              Profile last updated on:{" "}
              <span className="font-medium">Feb 12, 2025</span>
            </h1>
          </div>
          <Stepper />
          <Profile />
          <RecommendedJobs />
          <AppliedJobs />
        </div>
      </div>
    );
  },
  { returnTo: "/app/overview" }
);
