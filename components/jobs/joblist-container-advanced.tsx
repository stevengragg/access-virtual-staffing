import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { JobListing } from "@/types/general";
import { JobListItemPosition } from "./joblist-item-position";

type Props = {
  positions: JobListing[];
  buttons: LinkButtonProps[];
};

export type JobListContainerAdvancedProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const JobListContainerAdvanced = (
  props: JobListContainerAdvancedProps
) => {
  const { positions, buttons } = {
    ...props,
  };
  return (
    <section id="joblist_container" className="px-[5%] py-4 md:py-8 ">
      <div className="container">
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
