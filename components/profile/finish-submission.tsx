"use client";

import { getUser } from "@/database/queries/users";
import { IUserResponse } from "@/types/users";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import { FaFileAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const FinishSubmission = () => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(2);
      console.log(user);
      setUser(user);
    };
    fetchUser();
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-start justify-center min-h-screen w-full p-4">
      <div className="flex flex-col items-center justify-center space-y-4 border rounded-lg shadow-lg bg-white p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <p className="text-lg md:text-xl font-semibold text-center">
          Awesome resume,{" "}
          <span className="text-primaryBrightAqua">
            {user?.user?.firstName}
          </span>
          !
        </p>
        <FaFileAlt className="w-16 h-16 md:w-24 md:h-24 text-primaryBrightAqua" />
        <p className="text-center text-sm md:text-base">
          <span className="font-bold">JOB NAME</span> successfully received your
          resume.
        </p>
        <Button
          variant="primaryBlue"
          onClick={() => router.push("/app/submissions")}
          className="w-full md:w-1/2 py-3 md:py-4 text-sm md:text-base"
        >
          View Job
        </Button>
      </div>
    </div>
  );
};

export default FinishSubmission;
