export interface IJobListing {
  id: string;
  url: string;
  title: string;
  pay?: string;
  description?: string;
  createdAt: string;
  postedBy: string;
}

export type PositionProps = {
  position: IJobListing;
};

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
  status: Status;
  progress: Progress;
  submittedAt: Date;
  job: IJobListing;
  applicationPublicId: string;
}

export type Status = "on_going" | "archived";
export type Progress =
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

export interface IJobApplicationHeaderDetails {
  title: string;
  submittedAt: Date;
}
