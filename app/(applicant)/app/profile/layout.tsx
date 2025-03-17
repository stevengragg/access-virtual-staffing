import { ReactNode } from "react";
import EditProfileTabs from "@/components/profile/edit-profile-tabs";
import { ProfileTabProvider } from "@/context/profile-tab-context";
import { ProfileDetailsProvider } from "@/context/profile-details-context";
import { ProfileFilesProvider } from "@/context/profile-files-context";

interface LayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: LayoutProps) {
  return (
    <ProfileTabProvider>
      <ProfileDetailsProvider>
        <ProfileFilesProvider>
          <div className="h-[calc(100vh-4.5rem)] overflow-auto">
            <div className="w-full mx-auto ">
              <section
                id="joblist_header"
                className="relative px-[5%] pt-8 md:pt-12"
              >
                <div className="container">
                  <div className="w-full max-w-lg">
                    <h1 className=" text-2xl font-bold md:text-3xl">
                      Edit your Profile
                    </h1>
                    <p className="text-sm md:text-base">
                      Your profile details will be used when you apply for a
                      job. Please complete all the required details.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="joblist_header"
                className="relative px-[5%] pt-8 md:pt-12"
              >
                <div className="container">{children}</div>
              </section>
            </div>
          </div>
        </ProfileFilesProvider>
      </ProfileDetailsProvider>
    </ProfileTabProvider>
  );
}
