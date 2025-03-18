"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

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
  const form = useForm<NotificationSchema>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      jobRecommendation: false,
      jobSubmission: false,
    },
  });

  const onSubmit = (data: NotificationSchema) => {
    console.log("Notification Data:", data);
  };

  // TODO: Sample code for settings default values
  // React.useEffect(() => {
  //     form.reset({
  //       ...data.profile
  //     })
  // }, [])

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
                      Receive notifications for job submissions and application
                      updates.
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
