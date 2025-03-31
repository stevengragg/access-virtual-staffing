import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type StrategyCallHeroHeaderProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const StrategyCallHeroHeader = (props: StrategyCallHeroHeaderProps) => {
  const { heading, description, buttons, image } = {
    ...StrategyCallHeroHeaderDefaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue"
    >
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
                {heading}
              </h1>
              <p className="md:text-md text-white">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <LinkButton
                    className={cn(
                      button.navLink.title === "Schedule a Strategy Session"
                        ? "animate-bounce"
                        : ""
                    )}
                    key={index}
                    {...button}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="group">
            <Image
              src={image.src}
              className="size-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 "
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

export const StrategyCallHeroHeaderDefaults: Props = {
  heading: "Schedule A Call With Us",
  description:
    "In this personalized call, we’ll take the time to understand you, your business, and your virtual staffing needs. With years of experience helping businesses optimize their workforce, we’ll guide you in identifying key areas where hiring remote professionals can make the biggest impact. We’ll also introduce you to how AVS can support your growth with top-tier staffing solutions. Our goal is for you to leave this session with a clear understanding of your hiring priorities and actionable insights to move forward with confidence.",
  buttons: [
    {
      navLink: {
        title: "Schedule a Strategy Session",
        url: "/book-a-meeting#calendly",
        follow: false,
      },
      variant: "outline",
      size: "xl",
    },
    {
      navLink: {
        title: "Check our Services",
        url: "/services",
        follow: false,
      },
      variant: "primary",
      size: "xl",
    },
  ],
  image: {
    src: "/img/book-a-meeting.jpg",
    alt: "Header image",
    width: 1000,
    height: 1000,
  },
};
