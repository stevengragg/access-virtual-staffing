import { fetchApi } from "@/services/fetch-api";
import { IJobApplication } from "@/types/jobs";
import useSWRInfinite from "swr/infinite";

export function useJobSubmissions({ filter = "on_going" }) {
  const PAGE_SIZE = 10;

  const getKey = (pageIndex: number, previousPageData: any): string | null => {
    if (previousPageData && !previousPageData.jobApplications.length)
      return null;
    return `/submissions?page=${
      pageIndex + 1
    }&limit=${PAGE_SIZE}&filter=${filter}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite<{
    jobApplications: IJobApplication[];
    total: number;
  }>(getKey, fetchApi);

  const jobApplications = data
    ? data.flatMap((page) => page.jobApplications)
    : [];
  const total = data?.[0]?.total || 0;
  const hasMore = jobApplications.length < total;

  return {
    jobApplications,
    loading: isValidating && size === 1,
    error: error
      ? error instanceof Error
        ? error.message
        : "An unknown error occurred"
      : null,
    hasMore,
    loadMore: () => setSize(size + 1),
  };
}
