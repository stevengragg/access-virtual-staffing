"use client";

import { createContext, useContext } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileSchema, EditProfileSchema } from "@/services/user/update-profile";

const ProfileDetailsContext = createContext<boolean>(false); // Just a flag to ensure provider is used

export const ProfileDetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const formMethods = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      fullName: "",
      whyFit: "",
      whatStrengths: "",
      whatNeedImprovement: "",
      address: "",
      skypeId: "",
      hasPaypal: false,
      phone: [{ type: "mobile", number: "" }],
      emailAddress: [{ type: "", address: "" }],
      workSamples: [],
      assessmentTests: [],
      contentLinks: [],
      videoLinks: [],
      numberOfChildren: 0,
      internetProvider: "",
      numberOfMonitors: "",
      numberOfExperience: "",
      salaryUnit: "",
      desiredSalary: 1000,
      howKnow: "",
      howHear: "",
      someoneName: "",
      referrer: "",
    },
  });

  return (
    <ProfileDetailsContext.Provider value={true}>
      <FormProvider {...formMethods}>{children}</FormProvider>
    </ProfileDetailsContext.Provider>
  );
};

// Hook to access form context
export const useProfileDetails = () => {
  const context = useContext(ProfileDetailsContext);
  if (!context) {
    throw new Error("useProfileDetails must be used within a ProfileDetailsProvider");
  }
  return useFormContext<EditProfileSchema>();
};
