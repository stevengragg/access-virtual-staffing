"use client"

import { ReactNode, useState } from "react";
import ProfileTabs from "@/components/profile/tabs";
import { Button } from "@/components/ui/button";
import { ProfileTabProvider, useProfileTabContext } from "@/context/profile-tab-context";
import ProfileHeader from "@/components/profile/profile-header";
import { ProfileFilesProvider } from "@/context/profile-files-context";
import { ProfileDetailsProvider } from "@/context/profile-details-context";

interface LayoutProps {
  children: ReactNode;
}

export default function EditProfileLayout({ children }: LayoutProps) {
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
                                <ProfileTabs/>
                            </div>
                        </section>
                        <ProfileHeader/>               
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
            </ProfileFilesProvider>
            </ProfileDetailsProvider>
        </ProfileTabProvider>
    );
}
