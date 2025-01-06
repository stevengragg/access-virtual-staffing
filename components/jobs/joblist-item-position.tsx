import { Banknote, MapPin, UserRound } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import { Position } from "@/types/general";
import LinkButton from "../ui/link-button";

export const JobListItemPosition: React.FC<Position> = ({ position }) => {
  return (
    <div className="border border-border-primary p-6 md:p-8 rounded-lg">
      <div className="mb-3 flex flex-col lg:flex-row justify-between gap-4 md:mb-4">
        <a href={`/find-work/${position.id}`} className="hover:underline">
          <h3 className="text-xl font-bold md:text-2xl">{position.title}</h3>
        </a>
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
        <div className="mr-6 flex items-center">
          <div className="mr-3 flex-none">
            <UserRound className="flex size-6 flex-col items-center justify-center" />
          </div>
          <span className="md:text-md">{position.postedBy}</span>
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <LinkButton
          navLink={{
            title: "Apply Now",
            url: position.url || "#",
            follow: false,
          }}
        />
      </div>
    </div>
  );
};
