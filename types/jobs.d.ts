export type JobSearchFilter = {
  searchText: string;
};

export interface ISearchParams {
  [key: string]: string | string[] | undefined;
}
