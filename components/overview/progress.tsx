"use client";

import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type StepperProps = {
  message: string;
  maxValue: number;
  currentValue: number;
};

const Stepper = ({ message, maxValue, currentValue }: StepperProps) => {
  const router = useRouter();
  return (
    <Card className="w-full border border-gray-200">
      <div className="flex gap-1 mt-2 px-2">
        {Array.from({ length: maxValue }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < currentValue ? "bg-deepBlue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="flex p-4 items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-bold text-lg">
          <UserIcon className="h-6 w-6 text-gray-600 font-bold" />
          <p className="text-sm text-gray-700 font-semibold">{message}</p>
        </div>

        <Button
          variant="ghostPrimary"
          onClick={() => router.push("/app/profile")}
          size="sm"
        >
          Complete your profile
        </Button>
      </div>
    </Card>
  );
};

export default Stepper;
