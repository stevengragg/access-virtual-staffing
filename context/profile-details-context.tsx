"use client";

import { createContext, useContext } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  editProfileSchema,
  EditProfileSchema,
} from "@/lib/validation/update-profile-form-validation";

const ProfileDetailsContext = createContext<boolean>(false);
ed;

export const ProfileDetailsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formMethods = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    mode: "onTouched",
    reValidateMode: "onBlur",
    defaultValues: {
      jobTitle: "",
      whyFit: "",
      whatStrengths: "",
      whatNeedImprovement: "",
      address: "",
      skypeId: "",
      hasPaypal: "",
      phone: [{ type: "", number: "" }],
      emailAddress: [{ type: "", address: "" }],
      workSamples: [],
      assessmentTests: [],
      contentLinks: [],
      numberOfChildren: "",
      internetProvider: "",
      numberOfMonitors: "",
      numberOfExperience: "",
      salaryUnit: "",
      desiredSalary: 0,
      howHear: "",
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
    throw new Error(
      "useProfileDetails must be used within a ProfileDetailsProvider"
    );
  }
  return useFormContext<EditProfileSchema>();
};
