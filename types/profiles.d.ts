export interface IProfileResponse {
  ok: boolean;
  profile: {
    desiredSalary: string;
    hasPaypal: string;
    salaryUnit: string;
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
}
