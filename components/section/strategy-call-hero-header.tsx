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
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-deepBlue"
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
          <div>
            <Image
              src={image.src}
              className="size-full object-cover rounded-lg "
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
  heading: "Free Strategy Session",
  description:
    "Book a strategy session with the professional team from Access Virtual Staffing today to learn how we can help you reduce your staffing costs by up to 70% with our talented Virtual Staff.",
  buttons: [
    {
      navLink: {
        title: "Schedule a Strategy Session",
        url: "/book-a-meeting#book",
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
