import { fetchApi } from "@/services/fetch-api";
import { INotification } from "@/types/notification";
import useSWRInfinite from "swr/infinite";

export function useNotifications({ filter = "all" }) {
  const PAGE_SIZE = 10;

  const getKey = (pageIndex: number, previousPageData: any): string | null => {
    if (previousPageData && !previousPageData.notifications.length) return null;
    return `/notifications?page=${
      pageIndex + 1
    }&limit=${PAGE_SIZE}&filter=${filter}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite<{
    notifications: INotification[];
    total: number;
  }>(getKey, fetchApi);

  const notifications = data ? data.flatMap((page) => page.notifications) : [];
  const total = data?.[0]?.total || 0;
  const hasMore = notifications.length < total;

  return {
    notifications,
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
