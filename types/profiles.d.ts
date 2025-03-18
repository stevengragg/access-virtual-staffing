export interface IProfileResponse {
  ok: boolean;
  profile: {
    desiredSalary: string;
    hasPaypal: string;
    salaryUnit: string;
    howHear: string;
  };
  phones: { type: string; number: string }[];
  emails: { type: string; address: string }[];
  contentLinks: { link: string }[];
  assessmentTests: { link: string }[];
  workSamples: { link: string }[];
}
