import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type CtaJobseekerProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CtaJobseeker = (props: CtaJobseekerProps) => {
  const { tagline, heading, description, buttons, image } = {
    ...CtaJobseekerDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 bg-zinc-300">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
          </div>
          <div>
            <Image
              src={image.src}
              className="w-full object-cover"
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const CtaJobseekerDefaults: Props = {
  tagline: "For Talent",
  heading: "Your Career, Your Way – Work from Anywhere",
  description:
    "Access Virtual Staffing connects you with freelance and full-time remote opportunities tailored for developers, designers, marketers, product managers, project managers, virtual assistants, and more. Discover roles with US-based startups and tech companies and find the flexibility to work on your terms from anywhere in the world.",
  buttons: [
    {
      navLink: {
        title: "Learn More",
        url: "/find-work",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
  image: {
    src: "/img/working_remotely.svg",
    alt: "Working Remotely",
    width: 500,
    height: 500,
  },
};
