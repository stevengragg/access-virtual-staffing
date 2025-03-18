"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

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
  const form = useForm<GeneralSchema>({
    resolver: zodResolver(generalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
    },
  });

  const onSubmit = (data: GeneralSchema) => {
    console.log(data);
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
          Settings / General
        </CardHeader>

        <CardContent className="space-y-8">
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
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>

        <CardFooter className="flex justify-start space-x-2 my-4">
          <Button
            type="submit"
            variant="default"
            className="bg-deepBlue text-white min-w-[150px]"
          >
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
