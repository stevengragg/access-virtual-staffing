import { INotification } from "@/types/notification";
import { useState, useEffect } from "react";

export function useNotifications({ page = 1, filter = "all" }) {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      setLoading(true);
      try {
        // TODO: Lee fetchApi
        const response = await fetch(
          `/api/notifications?page=${page}&limit=10&filter=${filter}`
        );

        if (!response.ok) throw new Error("Failed to fetch notifications");

        const data = await response.json();

        setNotifications((prev) =>
          page === 1 ? data.notifications : [...prev, ...data.notifications]
        );
        setHasMore(data.notifications.length > 0);
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, [page, filter]);

  return { notifications, loading, error, hasMore };
}
