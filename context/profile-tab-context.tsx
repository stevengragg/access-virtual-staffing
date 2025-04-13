"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ProfileTabContextType = {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  jobSubmissionId: string | null;
  setJobSubmissionId: (id: string | null) => void;
};

// Create the context
const ProfileTabContext = createContext<ProfileTabContextType | undefined>(
  undefined
);

// Custom hook for consuming the context
export function useProfileTabContext() {
  const context = useContext(ProfileTabContext);
  if (!context) {
    throw new Error(
      "useProfileTabContext must be used within a ProfileTabProvider"
    );
  }
  return context;
}

// Context provider component
export function ProfileTabProvider({ children }: { children: ReactNode }) {
  const [currentTab, setCurrentTab] = useState("Profile");
  const [jobSubmissionId, setJobSubmissionId] = useState<string | null>(null);

  return (
    <ProfileTabContext.Provider
      value={{ currentTab, setCurrentTab, jobSubmissionId, setJobSubmissionId }}
    >
      {children}
    </ProfileTabContext.Provider>
  );
}

export default ProfileTabContext;
