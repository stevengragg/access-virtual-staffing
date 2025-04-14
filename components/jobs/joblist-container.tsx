import { Banknote, MapPin, UserRound } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { IJobListing } from "@/types/jobs";
import { JobListItemPosition } from "./joblist-item-position";

type Props = {
  heading: string;
  description: string;
  positions: IJobListing[];
  buttons: LinkButtonProps[];
};

export type JobListContainerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobListContainer = (props: JobListContainerProps) => {
  const { heading, description, positions, buttons } = {
    ...props,
  };
  return (
    <section id="joblist_container" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex flex-col gap-6 md:gap-8">
          {positions && positions.length ? (
            positions.map((position, index) => (
              <JobListItemPosition key={index} position={position} />
            ))
          ) : (
            <div className="bg-zinc-300 p-8 lg:p-12 text-center">
              <p className="md:text-md">
                No Jobs available. Please check again later.
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 flex gap-2 md:mt-8">
          {buttons &&
            buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
        </div>
      </div>
    </section>
  );
};
