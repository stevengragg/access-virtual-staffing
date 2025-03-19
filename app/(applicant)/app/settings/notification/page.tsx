"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";

import {
  notificationSchema,
  NotificationSchema,
} from "@/lib/validation/notification-settings-form-validation";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function NotificationSettings() {
  const [loading, setLoading] = useState(true); // Track loading state

  const form = useForm<NotificationSchema>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      jobRecommendation: false,
      jobSubmission: false,
    },
  });

  // Fetch existing notification settings on mount
  useEffect(() => {
    async function fetchNotificationSettings() {
      try {
        const response = await fetch("/api/settings/notifications");
        const data = await response.json();

        if (data.ok) {
          console.log("Fetched Data from API:", data);

          form.reset({
            jobRecommendation: data.jobRecommendation === true,
            jobSubmission: data.jobSubmission === true,
          });
        }
      } catch (error) {
        console.error("Error fetching notification settings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNotificationSettings();
  }, [form]);

  const onSubmit = async (data: NotificationSchema) => {
    console.log("Notification Data Before Sending:", data);

    try {
      const response = await fetch("/api/settings/notifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobRecommendation: data.jobRecommendation,
          jobSubmission: data.jobSubmission,
        }),
      });

      const result = await response.json();
      console.log("Response from API:", result);

      if (!response.ok) {
        throw new Error("Failed to update notification preferences");
      }

      alert("Notification settings updated successfully!");
    } catch (error) {
      console.error("Error updating notifications:", error);
      alert("Failed to update notifications");
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-md">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="font-semibold text-gray-700">
          Settings / Notifications
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <h2 className="font-semibold text-deepBlue">Jobs</h2>
            <Separator className="my-4 bg-gray-300" />

            {loading ? (
              <p>Loading notification settings...</p>
            ) : (
              <>
                <FormField
                  control={form.control}
                  name="jobRecommendation"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div>
                        <FormLabel className="font-semibold text-sm text-gray-700">
                          Job Recommendation
                        </FormLabel>
                        <p className="text-xs text-gray-500">
                          Receive notifications when new job recommendations are
                          available.
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          id="jobRecommendation"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobSubmission"
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-between">
                      <div>
                        <FormLabel className="font-semibold text-sm text-gray-700">
                          Job Submission
                        </FormLabel>
                        <p className="text-xs text-gray-500">
                          Receive notifications for job submissions and
                          application updates.
                        </p>
                      </div>
                      <FormControl>
                        <Switch
                          id="jobSubmission"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </>
            )}
          </Form>
        </CardContent>

        <CardFooter className="flex justify-start space-x-2">
          <Button
            type="submit"
            variant="default"
            className="bg-deepBlue text-white min-w-[150px] my-4"
          >
            Update Notifications
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
