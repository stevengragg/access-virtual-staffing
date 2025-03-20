"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";

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
import {
  generalSchema,
  GeneralSchema,
} from "@/lib/validation/general-settings-form-validation";
import Image from "next/image";

export default function GeneralSettings() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true); // Start with true to indicate loading
  const [submitting, setSubmitting] = useState(false); // Separate state for form submission

  const form = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      pfp: undefined,
    },
  });

  // Fetch user settings
  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await fetch("/api/settings/general");
        if (!response.ok) throw new Error("Failed to fetch user settings");

        const data = await response.json();
        form.reset(data);
      } catch (error) {
        console.error("Error fetching general settings:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    }

    fetchSettings();
  }, [form]);

  const onSubmit = async (data: GeneralSchema) => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/settings/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update general settings");

      alert("General settings updated successfully!");
    } catch (error) {
      console.error("Error updating general settings:", error);
      alert("Failed to update general settings");
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
          {loading ? (
            <p className="text-gray-500 text-center">Loading profile...</p>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-sm text-gray-700">
                  Account Profile Image
                </h2>
                <Image
                  src={user?.picture || ""}
                  alt="Avatar"
                  className="size-20 rounded-full object-cover"
                  width={50}
                  height={50}
                />
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
                          disabled={loading || submitting}
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
                          disabled={loading || submitting}
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
                          disabled={loading || submitting}
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
                          disabled={loading || submitting}
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
            variant="default"
            className="bg-deepBlue text-white min-w-[150px]"
            disabled={loading || submitting}
          >
            {submitting ? "Saving..." : "Submit"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
