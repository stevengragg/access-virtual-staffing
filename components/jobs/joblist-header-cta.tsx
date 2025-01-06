import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type JobListHeaderCtaProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobListHeaderCta = (props: JobListHeaderCtaProps) => {
  const { heading, description, buttons, image } = {
    ...JobListHeaderCtaDefaults,
    ...props,
  };
  return (
    <section id="cta" className="px-[5%] py-4 md:py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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

export const JobListHeaderCtaDefaults: Props = {
  heading: "Remote Jobs",
  description:
    "Discover your dream remote job on AVS. Speed up your job search to find roles that match your skills and time zone. Get noticed by leading companies and startups worldwide. Land a high-paying remote job or freelance gig faster with AVS!",
  buttons: [
    {
      navLink: {
        title: "Join Now",
        url: "/auth",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
  image: {
    src: "/img/remote_job.svg",
    alt: "Working Remotely",
    width: 500,
    height: 500,
  },
};
