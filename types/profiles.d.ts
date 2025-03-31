export interface IProfileResponse {
  ok: boolean;
  profile: {
    id: number;
    userId: number;
    jobTitle: string;
    whyFit: string;
    whatStrengths: string;
    whatNeedImprovement: string;
    address: string;
    skypeId: string;
    dateOfBirth: string; // Assuming date is stored as a string (ISO format)
    hasPaypal: string;
    numberOfChildren: string;
    internetProvider: string;
    numberOfMonitors: string;
    numberOfExperience: string;
    salaryUnit: string;
    desiredSalary: string;
    howHear: string;
    jobTitle: string;
    whyFit: string;
    whatStrengths: string;
    whatNeedImprovement: string;
    address: string;
    skypeId: string;
    dateOfBirth: string;
    numberOfChildren: string;
    internetProvider: string;
    numberOfMonitors: string;
    numberOfExperience: string;
    referrer?: string;
  };
  phones: { type: string; number: string }[];
  emails: { type: string; address: string }[];
  contentLinks: { link: string }[];
  assessmentTests: { link: string }[];
  workSamples: { link: string }[];
  fileUploads: {
    id: number;
    profileId: number;
    type: string; // "resume", "professional_picture", etc.
    link: string;
    podioFileId: string;
    cloudinaryId: string;
    filename: string;
    createdAt: string; // ISO date string
  }[];
}
