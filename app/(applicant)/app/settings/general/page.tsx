"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";

import { useUserInfo } from "@/hooks/use-user-info";
import {
  generalSchema,
  GeneralSchema,
} from "@/lib/validation/general-settings-form-validation";

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
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function GeneralSettings() {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const { userInfo, error, isLoading } = useUserInfo();

  const form = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
    },
  });

  React.useEffect(() => {
    if (userInfo) {
      form.reset({
        ...userInfo,
        username: userInfo?.username || "",
      });
    }
  }, [userInfo, form]);

  const onSubmit = async (formData: GeneralSchema) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/settings/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update general settings");

      toast({
        title: "Success",
        description: "General settings updated successfully!",
        variant: "success",
      });
    } catch (error) {
      console.error("Error updating general settings:", error);
      toast({
        title: "Error",
        description: "Failed to update general settings. Please try again.",
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
          Settings / General
        </CardHeader>

        <CardContent className="space-y-8">
          {error ? (
            <p className="text-red-500 text-center">Failed to load profile.</p>
          ) : isLoading ? (
            <p className="text-gray-500 text-center">Loading profile...</p>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-sm text-gray-700">
                  Profile Image
                </h2>
                <div className="flex flex-row gap-5 items-center">
                  <Image
                    src={userInfo?.profileImage || ""}
                    alt="Avatar"
                    className="size-20 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <CldUploadWidget
                    onSuccess={(result: CloudinaryUploadWidgetResults) => {
                      if (typeof result.info !== "string") {
                        // console.log(result.info?.url);
                        console.log(result.info?.secure_url);
                      }
                    }}
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_FOR_AVATARS?.toString() ||
                      "ProfileImagePreset"
                    }
                  >
                    {({ open }) => {
                      return (
                        <Button
                          type="button"
                          variant="primary"
                          onClick={() => open()}
                          disabled={submitting}
                        >
                          Replace
                        </Button>
                      );
                    }}
                  </CldUploadWidget>
                </div>
              </div>

              <Form {...form}>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-sm text-gray-700">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-gray-700"
                          placeholder="First Name"
                          disabled={submitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-sm text-gray-700">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-gray-700"
                          placeholder="Last Name"
                          disabled={submitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-sm text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-gray-700"
                          type="email"
                          placeholder="Email"
                          disabled={submitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-sm text-gray-700">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-gray-700"
                          placeholder="Username"
                          disabled={submitting}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </Form>
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-start space-x-2 my-4">
          <Button
            type="submit"
            variant="primary"
            className="min-w-[150px]"
            disabled={submitting}
          >
            {submitting ? "Saving..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
