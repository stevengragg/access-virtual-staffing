import { ReactNode } from "react";
import ProfileTabs from "@/components/profile/tabs";

interface LayoutProps {
  children: ReactNode;
}

export default function EditProfileLayout({ children }: LayoutProps) {
  return (
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
                    </div>
                </div>
            </section>

            <section
                id="joblist_header"
                className="relative px-[5%] pt-8 md:pt-12"
            >  
                <div className="container">
                    <ProfileTabs />
                </div>
            </section>
            
            <section
                id="joblist_header"
                className="relative px-[5%] pt-8 md:pt-12"
            >  
                <div className="container">
                    {children}
                </div>
            </section>
        </div>
    </div>
  );
}
