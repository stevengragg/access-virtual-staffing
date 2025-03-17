"use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useState } from "react";

// import { authenticationSchema, AuthenticationSchema } from "@/services/settings/authentication";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { FiEye, FiEyeOff } from "react-icons/fi";

export default function DeleteAccount() {
  return (
    <Card className="w-full max-w-2xl shadow-md">
      <CardHeader className="font-semibold text-gray-700">
        Settings / Delete account
      </CardHeader>

      <CardContent className="space-y-8">
        <h3>
          Send us an email for account deletion request:{" "}
          <a
            className="underline text-green-800 font-semibold"
            href="mailto:support@accessvirtualstaffing.com"
          >
            support@accessvirtualstaffing.com
          </a>
        </h3>
      </CardContent>

      <CardFooter className="flex justify-strart space-x-2"></CardFooter>
    </Card>
  );
}
