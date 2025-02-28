"use client";

import { createContext, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { fileUploadSchema, FileUploadSchema } from "@/services/user/update-files";
import { zodResolver } from "@hookform/resolvers/zod";

type ProfileFilesContextType = UseFormReturn<FileUploadSchema>;

const ProfileFilesContext = createContext<ProfileFilesContextType | null>(null);

export const ProfileFilesProvider = ({ children }: { children: React.ReactNode }) => {
  const formMethods = useForm<FileUploadSchema>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      resume: [],
      pfp: [],
      internetScreenshot: [],
      computerSpecsScreenshot: [],
      workstationPhoto: [],
      attachments: [],
    },
  });

  return (
    <ProfileFilesContext.Provider value={formMethods}>
      {children}
    </ProfileFilesContext.Provider>
  );
};

export const useProfileFiles = () => {
  const context = useContext(ProfileFilesContext);
  if (!context) {
    throw new Error("useProfileFiles must be used within a ProfileFilesProvider");
  }
  return context;
};
