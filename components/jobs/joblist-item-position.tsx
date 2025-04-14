import { Banknote, MapPin, UserRound } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { PositionProps } from "@/types/jobs";
import LinkButton from "../ui/link-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const JobListItemPosition2 = ({ position }: PositionProps) => {
  return (
    <div className="border border-zinc-300 p-4 md:p-6 rounded-lg hover:border-primaryBlue hover:bg-primaryBrightAqua/10">
      <div className="mb-3 flex flex-col lg:flex-row justify-between gap-4 md:mb-4">
        <div>
          <h3 className="text-lg font-semibold md:text-xl">{position.title}</h3>
        </div>
        <p className="self-start  px-2 py-1 text-sm font-semibold">
          {formatDistanceToNow(new Date(position.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>

      <div className="flex flex-wrap gap-y-3">
        <div className="mr-6 flex items-center">
          <div className="mr-3 flex-none">
            <MapPin className="flex size-6 flex-col items-center justify-center" />
          </div>
          <span className="md:text-md">Remote</span>
        </div>
        <div className="mr-6 flex items-center">
          <div className="mr-3 flex-none">
            <Banknote className="flex size-6 flex-col items-center justify-center" />
          </div>
          <span className="md:text-md">{position.pay || "Not specified"}</span>
        </div>
        {/* <div className="mr-6 flex items-center">
          <div className="mr-3 flex-none">
            <UserRound className="flex size-6 flex-col items-center justify-center" />
          </div>
          <span className="md:text-md">{position.postedBy}</span>
        </div> */}
      </div>
      <div className="mt-6 md:mt-8">
        <LinkButton
          navLink={{
            title: "I'm interested",
            url: position.url || "#",
            follow: false,
          }}
        />
      </div>
    </div>
  );
};

export const JobListItemPosition = ({ position }: PositionProps) => {
  return (
    <Card className="w-full p-2 border border-zinc-300 rounded-lg shadow-sm flex flex-col gap-4 hover:border-zinc-500  hover:bg-primaryBrightAqua/10">
      <CardHeader className="flex flex-col lg:flex-row justify-between gap-4">
        <CardTitle className="flex items-center gap-4">
          <Image
            src={"/avs_logo.webp"}
            alt="Company logo"
            width={64}
            height={64}
            className="rounded-md border border-zinc-300 "
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-base lg:text-lg text-zinc-800">
              {position.title}
            </h3>
            <p className="text-sm text-gray-600">Access Virtual Staffing</p>
          </div>
        </CardTitle>
        <CardDescription>
          <p className=" text-xs md:text-sm font-semibold">
            {formatDistanceToNow(new Date(position.createdAt), {
              addSuffix: true,
            })}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="text-sm text-zinc-600"
          dangerouslySetInnerHTML={{
            __html:
              (position.description ?? "").length > 200
                ? `${(position.description ?? "").slice(0, 200)}...`
                : position.description ?? "",
          }}
        />
        <div className="flex flex-wrap gap-y-3 mt-2 md:mt-4">
          <div className="mr-6 flex items-center">
            <div className="mr-3 flex-none">
              <MapPin className="flex size-4 flex-col items-center justify-center text-orange-600" />
            </div>
            <span className="text-xs md:text-sm ">Remote</span>
          </div>
          <div className="mr-6 flex items-center">
            <div className="mr-3 flex-none">
              <Banknote className="flex size-4 flex-col items-center justify-center text-green-800" />
            </div>
            <span className="text-xs md:text-sm">
              {position.pay || "Not specified"}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <LinkButton
          variant="secondary"
          navLink={{
            title: "I'm interested",
            url: position.url || "#",
            follow: false,
          }}
        />
      </CardFooter>
    </Card>
  );
};
