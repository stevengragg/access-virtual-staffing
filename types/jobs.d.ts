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
  company: string;
  position: string;
  status: "Pending" | "Not Accepted" | "Accepted";
  date: string;
  logo: string;
  job?: IJob;
}