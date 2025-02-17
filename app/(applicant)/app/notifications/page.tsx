"use client";

import { useState, useEffect } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";

import { INotification } from "@/types/notification";
import { getNotificationIcon } from "@/lib/get-icon-type";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const notifications: INotification[] = [
  {
    id: "1",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 11, 2022",
    type: "recommendation",
    link: "/app/jobs/1",
    isRead: false,
  },
  {
    id: "2",
    title: "Interview Reminder",
    message: "You have an upcoming interview scheduled.",
    date: "Jan 12, 2022",
    type: "reminder",
    link: "/app/interviews/1",
    isRead: false,
  },
  {
    id: "3",
    title: "Profile Update",
    message: "Your profile has been updated successfully.",
    date: "Jan 13, 2022",
    type: "info",
    link: "/app/profile",
    isRead: true,
  },
  {
    id: "4",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 14, 2022",
    type: "recommendation",
    link: "/app/jobs/2",
    isRead: false,
  },
  {
    id: "5",
    title: "Submission Confirmation",
    message: "Your job application has been submitted.",
    date: "Jan 15, 2022",
    type: "update",
    link: "/app/submissions/1",
    isRead: false,
  },
  {
    id: "6",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 16, 2022",
    type: "recommendation",
    link: "/app/jobs/3",
    isRead: false,
  },
  {
    id: "7",
    title: "Interview Reminder",
    message: "You have an upcoming interview scheduled.",
    date: "Jan 17, 2022",
    type: "reminder",
    link: "/app/interviews/2",
    isRead: false,
  },
  {
    id: "8",
    title: "Profile Update",
    message: "Your profile has been updated successfully.",
    date: "Jan 18, 2022",
    type: "info",
    link: "/app/profile",
    isRead: true,
  },
  {
    id: "9",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 19, 2022",
    type: "recommendation",
    link: "/app/jobs/4",
    isRead: false,
  },
  {
    id: "10",
    title: "Submission Confirmation",
    message: "Your job application has been submitted.",
    date: "Jan 20, 2022",
    type: "update",
    link: "/app/submissions/2",
    isRead: false,
  },
  {
    id: "11",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 21, 2022",
    type: "recommendation",
    link: "/app/jobs/5",
    isRead: false,
  },
  {
    id: "12",
    title: "Interview Reminder",
    message: "You have an upcoming interview scheduled.",
    date: "Jan 22, 2022",
    type: "reminder",
    link: "/app/interviews/3",
    isRead: false,
  },
  {
    id: "13",
    title: "Profile Update",
    message: "Your profile has been updated successfully.",
    date: "Jan 23, 2022",
    type: "info",
    link: "/app/profile",
    isRead: true,
  },
  {
    id: "14",
    title: "Submission Confirmation",
    message: "Your job application has been submitted.",
    date: "Jan 24, 2022",
    type: "update",
    link: "/app/submissions/3",
    isRead: false,
  },
  {
    id: "15",
    title: "New Job",
    message: "We found a new job that matches your profile.",
    date: "Jan 25, 2022",
    type: "recommendation",
    link: "/app/jobs/6",
    isRead: false,
  },
];

export default withPageAuthRequired(
  function Notifications() {
    const pageSize = 10;
    const { isLoading, error } = useUser();
    const [notificationsState, setNotificationsState] = useState<INotification[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false);
    const [filterType, setFilterType] = useState<string>("all");
    const [showUnreadOnly, setShowUnreadOnly] = useState<boolean>(false);

    //sample fetch
    const fetchNotifications = async (
      page: number,
      filter: string,
      unreadOnly: boolean
    ): Promise<INotification[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          let filtered = notifications;
          if (filter !== "all") {
            filtered = filtered.filter((notif) => notif.type === filter);
          }
          if (unreadOnly) {
            filtered = filtered.filter((notif) => !notif.isRead);
          }
          const start = (page - 1) * pageSize;
          const end = page * pageSize;
          resolve(filtered.slice(start, end));
        }, 500);
      });
    };

    useEffect(() => {
      const loadInitialNotifications = async () => {
        setIsFetching(true);
        const data = await fetchNotifications(1, filterType, showUnreadOnly);
        setNotificationsState(data);
        setPage(1);
        setHasMore(data.length === pageSize);
        setIsFetching(false);
      };
      loadInitialNotifications();
    }, [filterType, showUnreadOnly]);

    const handleLoadMore = async () => {
      const nextPage = page + 1;
      setIsFetching(true);
      const data = await fetchNotifications(nextPage, filterType, showUnreadOnly);
      setNotificationsState((prev) => [...prev, ...data]);
      setPage(nextPage);
      if (data.length < pageSize) {
        setHasMore(false);
      }
      setIsFetching(false);
    };

    const markAsRead = (id: string) => {
      setNotificationsState((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, isRead: true } : notif
        )
      );
    };

    const markAllAsRead = () => {
      setNotificationsState((prev) =>
        prev.map((notif) => ({ ...notif, isRead: true }))
      );
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
      <div className="h-[calc(100vh-4.5rem)] overflow-auto">
        <section id="joblist_header" className="relative px-[5%] pt-8 md:pt-12">
          <div className="container">
            <div className="w-full flex justify-between items-center">
              <h1 className="text-2xl font-bold md:text-3xl">Notifications</h1>
              <div>
                <Button
                  variant="outline"
                  onClick={markAllAsRead}
                  disabled={notificationsState.every((notif) => notif.isRead)}
                >
                  Mark All as Read
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 md:py-10 px-4 lg:py-12">
          <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 w-[150px]">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="border border-gray-700 rounded p-2 w-full">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem className="hover:bg-gray-100" value="all">All</SelectItem>
                  <SelectItem className="hover:bg-gray-100" value="recommendation">Recommendation</SelectItem>
                  <SelectItem className="hover:bg-gray-100" value="reminder">Reminder</SelectItem>
                  <SelectItem className="hover:bg-gray-100" value="info">Info</SelectItem>
                  <SelectItem className="hover:bg-gray-100" value="update">Update</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Show Unread Only:</label>
              <Switch
                checked={showUnreadOnly}
                onCheckedChange={setShowUnreadOnly}
              />
            </div>


          </div>

          <div className="grid grid-cols-1 gap-4">
            {notificationsState.map((notification) => (
              <a
                key={notification.id}
                href={notification.link}
                className="flex items-start justify-start gap-4 p-4 border rounded-lg cursor-pointer border-gray-200 hover:bg-gray-100"
              >
                <div>{getNotificationIcon(notification.type)}</div>
                <div className="flex justify-between items-center flex-1">
                  <div>
                    <h2 className="font-semibold text-base">{notification.title}</h2>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                  </div>

                  <div className="mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        markAsRead(notification.id);
                      }}
                      disabled={notification.isRead}
                    >
                      {notification.isRead ? "Read" : "Mark as Read"}
                    </Button>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {hasMore && (
            <div className="mt-4 flex justify-center">
              <Button variant="ghost" onClick={handleLoadMore} disabled={isFetching}>
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  },
  { returnTo: "/app/notifications" }
);
