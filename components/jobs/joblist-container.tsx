import { Button } from "@relume_io/relume-ui";
import { UserRound } from "lucide-react";
// import type { ButtonProps } from "@relume_io/relume-ui";
// import { LuMapPin, LuPersonStanding } from "react-icons/lu";
// import { MdAccessTime } from "react-icons/md";

type PositionProps = {
  id: string;
  url: string;
  title: string;
  createdAt: string;
  postedBy: string;
};

type PositionCardProps = {
  position: PositionProps;
};

type Props = {
  heading: string;
  description: string;
  positions: PositionProps[];
};

export type JobListContainerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobListContainer = (props: JobListContainerProps) => {
  const { heading, description, positions } = {
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
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
              <PositionCard key={index} position={position} />
            ))
          ) : (
            <div className="bg-zinc-300 p-8 lg:p-12 text-center">
              <p className="md:text-md">
                No Jobs available. Please check again later.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const PositionCard: React.FC<PositionCardProps> = ({ position }) => {
  return (
    <div className="border border-border-primary p-6 md:p-8 rounded-lg">
      <div className="mb-3 flex justify-between gap-4 md:mb-4">
        <a href={position.url} className="hover:underline">
          <h3 className="text-xl font-bold md:text-2xl">{position.title}</h3>
        </a>
        <p className="self-start bg-background-secondary px-2 py-1 text-sm font-semibold">
          {position.createdAt}
        </p>
      </div>

      <div className="flex flex-wrap gap-y-3">
        <div className="mr-6 flex items-center">
          <div className="mr-3 flex-none">
            <UserRound className="flex size-6 flex-col items-center justify-center" />
          </div>
          <span className="md:text-md">{position.postedBy}</span>
        </div>
      </div>
      <div className="mt-6 md:mt-8">
        <Button
          asChild
          className="rounded-lg bg-zinc-300 text-zinc-800 font-bold"
        >
          <a href={position.url}>Apply Now</a>
        </Button>
      </div>
    </div>
  );
};

// const position: PositionProps = {
//   url: "#",
//   title: "Job Title",
//   department: "Department",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//   location: "Location",
//   contractType: "Contract Type",
//   button: {
//     title: "Apply Now",
//     variant: "secondary",
//     size: "sm",
//   },
// };

// export const JobListContainerDefaults: Props = {
//   heading: "Current Job Openings",
//   description: "Find your ideal virtual job with us today.",
//   positions: [position, position, position],
// };
