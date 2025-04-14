import { JobListing } from "./general";

export type JobSearchFilter = {
  searchText: string;
};

export interface ISearchParams {
  [key: string]: string | string[] | undefined;
}

export interface IJobApplicationDetails {
  id: number;
  resume: string;
  salaryMin: number;
  salaryMax: number;
  salaryCurrency: string;
  location: string;
  jobEquity: string;
  about: string;
  responsibilities: string;
  requirements: string;
  relocation: boolean;
  experience: string;
}

export interface IJobApplication {
  id: number;
  status: "on_going" | "archived";
  progress:
    | "in_review"
    | "reviewed"
    | "declined_initial_interview"
    | "initial_interview"
    | "for_client_interview"
    | "declined_after_interview"
    | "make_offer"
    | "hired_signed"
    | "endorsed"
    | "reserved_for_future_opening";
  submittedAt: string;
  job: JobListing;
  applicationPublicId: string;
}
