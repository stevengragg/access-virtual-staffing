"use client";

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ChangePassword() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  if (!user) return null;

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.sub, email: user.email }),
      });

      if (!response.ok) throw new Error("Failed to send password reset email");

      toast({
        title: "Success",
        description: "Password reset email sent successfully!",
        variant: "success",
      });

      setTimeout(() => {
        window.location.href = "/api/auth/logout";
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      console.error("Error sending password reset email:", errorMessage);

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-md">
      <CardHeader className="font-semibold text-gray-700">
        Settings / Authentication
      </CardHeader>
      <CardContent className="text-gray-600">
        Click the button below to update your password.
      </CardContent>
      <CardFooter className="flex justify-start space-x-2">
        <Button
          onClick={handleChangePassword}
          disabled={loading}
          className="bg-deepBlue text-white min-w-[150px] my-4"
        >
          {loading ? "Updating..." : "Reset Password via Email"}
        </Button>
      </CardFooter>

      {/* 
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardHeader className="font-semibold text-gray-700">
          Settings / Authentication
        </CardHeader>

        <CardContent className="space-y-8">
          <Form {...form}>
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-sm text-gray-700">
                    Current Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="Current Password"
                        className="border-gray-700 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowCurrentPassword((prev) => !prev)}
                      >
                        {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-sm text-gray-700">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showNewPassword ? "text" : "password"}
                        placeholder="New Password"
                        className="border-gray-700 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowNewPassword((prev) => !prev)}
                      >
                        {showNewPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-sm text-gray-700">
                    Confirm New Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showConfirmNewPassword ? "text" : "password"}
                        placeholder="Confirm New Password"
                        className="border-gray-700 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() =>
                          setShowConfirmNewPassword((prev) => !prev)
                        }
                      >
                        {showConfirmNewPassword ? <FiEyeOff /> : <FiEye />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </Form>
        </CardContent>

        <CardFooter className="flex justify-strart space-x-2">
          <Button
            type="submit"
            variant="default"
            className="bg-deepBlue text-white min-w-[150px] my-4"
          >
            Update Password
          </Button>
        </CardFooter>
      </form>
      */}
    </Card>
  );
}
