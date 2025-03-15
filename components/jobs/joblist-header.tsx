import { ImageProps } from "@/types/general";
import { Button } from "@relume_io/relume-ui";

import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type JobListHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobListHeader = (props: JobListHeaderProps) => {
  const { heading, description, buttons, tagline, image } = {
    ...JobListHeaderDefaults,
    ...props,
  };
  return (
    <section
      id="joblist_header"
      className="relative px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold text-text-alternative md:mb-4">
            {tagline}
          </p>
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <p className="text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>
    </section>
  );
};

export const JobListHeaderDefaults: Props = {
  tagline: "For Talents",
  heading: "Your Career, Your Way – Work from Anywhere",
  description:
    "Access Virtual Staffing connects you with freelance and full-time remote opportunities tailored for developers, designers, marketers, product managers, project managers, virtual assistants, and more. Discover roles with US-based startups and companies and find the flexibility to work on your terms from anywhere in the world.",
  buttons: [
    {
      navLink: {
        title: "Join Now",
        url: "/talent/portal",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
  image: {
    src: "/bg/root_homebg1.webp",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
};
