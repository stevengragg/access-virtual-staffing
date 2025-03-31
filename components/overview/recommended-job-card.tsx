import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PositionProps } from "@/types/general";
import { formatDistanceToNow } from "date-fns";
import { Banknote, MapPin } from "lucide-react";
import LinkButton from "../ui/link-button";

// type JobCardProps = {
//     company: string;
//     logo: string;
//     position: string;
//     location: string;
//     salary: string;
//     isActivelyHiring: boolean;
//     postedDaysAgo: number;
// };

const RecommendedJobCard = ({ position }: PositionProps) => {
  return (
    <Card className="w-full p-2 border border-zinc-300 rounded-lg shadow-sm flex flex-col gap-4 ">
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
            <a
              className="font-semibold text-base lg:text-lg text-zinc-800 underline hover:text-deepBlue"
              href={position.url || "#"}
            >
              {position.title}
            </a>
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
        <div className="flex flex-wrap gap-y-3">
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
    </Card>
  );
};

export default RecommendedJobCard;
