"use client";

import { Button } from "@/components/ui/button";
import { useProfileDetails } from "@/context/profile-details-context";
import { useProfileFiles } from "@/context/profile-files-context";
import { useProfileTabContext } from "@/context/profile-tab-context";
import { FileUploadSchema } from "@/lib/validation/update-files-form-validation";
import { fetchApi } from "@/services/fetch-api";

const ProfileHeader = () => {
  const { currentTab, setCurrentTab } = useProfileTabContext();
  const {
    handleSubmit: handleSubmitFiles,
    control: controlFiles,
    watch,
    formState,
  } = useProfileFiles();
  const profileDetailsForm = useProfileDetails();

  const jobId = "123"; // Replace with actual logic to get jobId

  const onFileSubmit = async (data: FileUploadSchema) => {
    // try {
    //   const response = await fetchApi("/submissions", {
    //     method: "POST",
    //     body: JSON.stringify({ jobId, files: data }),
    //   });
    //   console.log("Job application submitted successfully:", response);
    // } catch (error) {
    //   console.error("Error submitting job application:", error);
    // }
  };

  const onDetailsSubmit = async () => {
    console.log("clicked");

    const result = await profileDetailsForm.trigger(); // Manually validate the form

    if (!result) {
      console.log(
        "Validation failed, showing errors:",
        profileDetailsForm.formState.errors
      );
      return;
    }

    profileDetailsForm.handleSubmit((data) => {
      console.log("clicked 2");
      console.log("Profile Details:", data);
      setCurrentTab("Files");
    })();
  };

  if (currentTab === "Finish") return null;

  return (
    <section id="joblist_header" className="relative px-[5%] pt-8 md:pt-12">
      <div className="container">
        <div className="w-full flex items-center justify-between border-t border-b p-2">
          <h1 className=" text-2xl font-bold md:text-3xl">Profile</h1>
          <div className="flex gap-2">
            {currentTab === "Profile" && (
              <Button
                variant="primaryBlue"
                size="sm"
                className="font-medium"
                onClick={onDetailsSubmit}
              >
                Submit Profile
              </Button>
            )}
            {currentTab === "Files" && (
              <Button
                variant="primaryBlue"
                size="sm"
                className="font-medium"
                onClick={handleSubmitFiles(onFileSubmit)}
              >
                Submit Files
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
