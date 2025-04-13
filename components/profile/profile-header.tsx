"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useProfileDetails } from "@/context/profile-details-context";
import { useProfileTabContext } from "@/context/profile-tab-context";
import { fetchApi } from "@/services/fetch-api";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const ProfileHeader = () => {
  const router = useRouter();
  const params = useParams();
  const jobId = params.id;
  const { toast } = useToast();
  const { currentTab, setCurrentTab, setJobSubmissionId } =
    useProfileTabContext();

  const profileDetailsForm = useProfileDetails();
  const [loading, setLoading] = React.useState<boolean>(false);

  const onFileSubmit = async () => {
    setLoading(true);
    try {
      // TODO: Infer the return type of the fetchApi here
      const response = await fetchApi<any>("/submissions", {
        method: "POST",
        body: JSON.stringify({ jobId }),
      });
      console.log("Response from file submit:", response);
      if (!response.ok) {
        toast({
          title: "Error",
          description: `Failed to submit job application. ${
            response.message || "Please try again."
          }`,
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      toast({
        title: "Success",
        description:
          "Job application submitted successfully. Redirecting to submissions page...",
        variant: "success",
      });
      setLoading(false);
      setTimeout(() => {
        setCurrentTab("Finish");
        setJobSubmissionId(response.applicationId);
      }, 2000);
    } catch (error) {
      console.error("Error submitting job application:", error);
      toast({
        title: "Error",
        description: "Failed to submit job application. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const onDetailsSubmit = async () => {
    const result = await profileDetailsForm.trigger(); // Manually validate the form

    if (!result) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
      return;
    }

    profileDetailsForm.handleSubmit(async (data) => {
      setLoading(true);
      try {
        //  TODO: Infer the return type of the fetchApi here
        const response = await fetchApi<any>("/profile/update-profile", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          toast({
            title: "Error",
            description: "Failed to update profile. Please try again.",
            variant: "destructive",
          });
        }

        setLoading(false);
        setCurrentTab("Files");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast({
          title: "Error",
          description: "Failed to update profile. Please try again.",
          variant: "destructive",
        });
      }
    })();
  };

  if (currentTab === "Finish") return null;

  return (
    <section id="joblist_header" className="relative px-[5%] pt-8 md:pt-12">
      <div className="container">
        <div className="w-full flex items-center justify-between border-t border-b p-2">
          <h1 className=" text-2xl font-bold md:text-3xl">Profile</h1>
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => router.push(`/app/jobs/v/${jobId}`)}
            >
              Cancel
            </Button>
            {currentTab === "Profile" && (
              <Button
                variant="primary"
                size="sm"
                onClick={onDetailsSubmit}
                disabled={loading}
              >
                {loading ? "Loading..." : "Share Profile Details"}{" "}
                <ArrowRight />
              </Button>
            )}
            {currentTab === "Files" && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="primary" size="sm" disabled={loading}>
                    {loading ? "Loading..." : " Share Profile Attachments"}{" "}
                    <ArrowRight />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zinc-300">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to proceed?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      By continuing, you are confirming that you want to share
                      your profile details and attachments with the employer.
                      <br />
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button
                        className="bg-deepBlue hover:bg-deepBlue/75 text-white"
                        size="sm"
                        disabled={loading}
                        onClick={onFileSubmit}
                      >
                        {loading ? "Sharing..." : "Continue"}
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
