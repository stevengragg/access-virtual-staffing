"use client";

import { useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import { getNotificationIcon } from "@/lib/get-icon-type";
import { Button } from "@/components/ui/button";
import { useNotifications } from "@/hooks/use-notifications";
import { INotification } from "@/types/notification";

import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function NotificationsPage() {
  const { user, isLoading: userLoading } = useUser();
  const [page, setPage] = useState(1);
  const [filterType, setFilterType] = useState("all");
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const { notifications, loading, error, hasMore } = useNotifications({
    page,
    filter: filterType,
  });

  const handleLoadMore = () => {
    if (hasMore) setPage((prev) => prev + 1);
  };

  if (userLoading) return <p>Loading user...</p>;

  return (
    <div className="h-[calc(100vh-4.5rem)] overflow-auto">
      <section className="relative px-[5%] pt-8 md:pt-12">
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold md:text-3xl">Notifications</h1>
          </div>
        </div>
      </section>

      {/* Filters and Unread Toggle */}
      <div className="container py-8 md:py-10 px-4 lg:py-12">
        <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4 w-[150px]">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="border border-gray-700 rounded p-2 w-full">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {/* <SelectItem value="all">All</SelectItem>
                <SelectItem value="recommendation">Recommendation</SelectItem>
                <SelectItem value="reminder">Reminder</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="update">Update</SelectItem> */}

                <SelectItem value="all">All</SelectItem>
                <SelectItem value="job_submissions">Recommendation</SelectItem>
                <SelectItem value="jobs">Jobs</SelectItem>
                <SelectItem value="info">Info</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Unread Toggle */}
          {/* <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Show Unread Only:</label>
            <Switch
              checked={showUnreadOnly}
              onCheckedChange={setShowUnreadOnly}
            />
          </div> */}
        </div>

        {/* Notifications List */}

        {loading ? (
          <p>Loading notifications...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {error && <p className="text-red-500">Error: {error}</p>}
            {notifications.length === 0 && !loading && (
              <p>No notifications found.</p>
            )}

            {notifications.map((notification: INotification) => (
              <a
                key={notification.id}
                href={notification.link}
                className="flex items-start gap-4 p-4 border rounded-lg cursor-pointer border-gray-200 hover:bg-gray-100"
              >
                <div>{getNotificationIcon(notification.type)}</div>
                <div>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.date}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-4 flex justify-center">
            {/* TODO Lee: make the blank spinner */}
            <Button variant="ghost" onClick={handleLoadMore} disabled={loading}>
              {loading ? " " : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default withPageAuthRequired(NotificationsPage, {
  returnTo: "/app/notifications",
});
