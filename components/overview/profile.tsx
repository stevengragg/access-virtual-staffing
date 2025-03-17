"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

import { useUser } from "@auth0/nextjs-auth0/client";
import ProfileOverviewDialog from "../profile/profile-overview-dialog";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <Card className="w-full p-6 border border-gray-200 flex flex-col justify-between">
      <div className=" flex justify-between items-start gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={user?.picture || ""}
              alt="Avatar"
              className="size-20 rounded-full object-cover"
              width={150}
              height={150}
            />
          </div>
          <div className="">
            <div className="mb-4">
              <h2 className="text-lg font-semibold">{user?.name}</h2>
              <p className="text-sm text-gray-500">Lead Developer @ MedSurf</p>
              <p className="text-sm text-gray-500">Philippines</p>
            </div>
          </div>
        </div>
        <div>
          <ProfileOverviewDialog />
          <Button
            variant="ghostBlue"
            size="sm"
            className="font-medium"
            onClick={() => router.push("/app/profile")}
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <p className="text-sm font-semibold">
          Where are you in your job search?
        </p>
        <p className="text-sm text-gray-500">
          Keep your job status up-to-date to inform employers of your search.
        </p>
        <Select>
          <SelectTrigger className="mt-2 bg-white">
            <SelectValue placeholder="Ready to Interview" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="ready">Ready to Interview</SelectItem>
            <SelectItem value="actively-looking">Actively Looking</SelectItem>
            <SelectItem value="open-but-not-looking">
              Open but Not Looking
            </SelectItem>
            <SelectItem value="not-interested">Not Interested</SelectItem>
          </SelectContent>
        </Select>{" "}
      </div>
    </Card>
  );
};

export default Profile;
