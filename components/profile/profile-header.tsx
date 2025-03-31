"use client";

import { Button } from "@/components/ui/button";
import { useProfileDetails } from "@/context/profile-details-context";
import { useProfileFiles } from "@/context/profile-files-context";
import { useProfileTabContext } from "@/context/profile-tab-context";
import { FileUploadSchema } from "@/lib/validation/update-files-form-validation";

// import ProfileOverviewDialog from "@/components/profile/profile-overview-dialog";

const ProfileHeader = () => {
  const { currentTab, setCurrentTab } = useProfileTabContext();
  const {
    handleSubmit: handleSubmitFiles,
    control: controlFiles,
    watch,
    formState,
  } = useProfileFiles();
  const profileDetailsForm = useProfileDetails();

  const onFileSubmit = (data: FileUploadSchema) => {
    console.log(
      "📤 Data before FormData conversion:",
      JSON.stringify(data, null, 2)
    );

    const formData = new FormData();

    Object.entries(data).forEach(([key, files]) => {
      if (Array.isArray(files)) {
        files.forEach(({ file }) => {
          if (file) formData.append(key, file);
        });
      }
    });

    console.log("📤 FormData Contents:");
    Array.from(formData.entries()).forEach(([key, value]) => {
      console.log(
        `${key}:`,
        value instanceof File
          ? `(File: ${value.name}, Size: ${value.size} bytes)`
          : value
      );
    });
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
    })();
  };

  if (currentTab === "Finish") return null;

  return (
    <section id="joblist_header" className="relative px-[5%] pt-8 md:pt-12">
      <div className="container">
        <div className="w-full flex items-center justify-between border-t border-b p-2">
          <h1 className=" text-2xl font-bold md:text-3xl">Profile</h1>
          <div className="flex gap-2">
            {/* {currentTab === "Profile" && <ProfileOverviewDialog />} */}
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
