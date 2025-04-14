"use client";

import useSWR from "swr";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { fetchApi } from "@/services/fetch-api";
import { useUserInfo } from "@/hooks/use-user-info";

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
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { userInfo, error: userInfoError, isLoading } = useUserInfo();

  const form = useForm<NotificationSchema>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      jobRecommendation: false,
      jobSubmission: false,
    },
  });

  React.useEffect(() => {
    if (userInfo) {
      form.reset({
        jobRecommendation: userInfo.jobRecommendationNotifPref === "enabled",
        jobSubmission: userInfo.jobSubmissionNotifPref === "enabled",
      });
    }
  }, [userInfo, form]);

  const onSubmit = async (formData: NotificationSchema) => {
    setSubmitting(true);
    try {
      //  TODO: Infer the return type def of fetchApi here
      const response = await fetchApi<any>("/settings/notifications", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok)
        throw new Error("Failed to update notification preferences");

      toast({
        title: "Success",
        description: "Notification settings updated successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Error updating notifications:", error);
      toast({
        title: "Error",
        description: "Failed to update notifications. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
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
            {userInfoError ? (
              <p className="text-red-500 text-center">
                Failed to load settings.
              </p>
            ) : isLoading ? (
              <p className="text-gray-500 text-center">
                Loading notification settings...
              </p>
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
                          disabled={submitting}
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
                          disabled={submitting}
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
            variant="primary"
            className="min-w-[150px] my-4"
            disabled={submitting}
          >
            {submitting ? "Saving..." : "Update Notifications"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
