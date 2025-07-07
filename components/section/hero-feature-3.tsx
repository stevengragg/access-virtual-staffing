import Image from "next/image";
import { RxChevronRight } from "react-icons/rx";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  questionBold?: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type HeroFeature3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroFeature3 = (props: HeroFeature3Props) => {
  const { tagline, heading, description, buttons, image, questionBold } = {
    ...HeroFeature3Defaults,
    ...props,
  };
  return (
    <section id="cta" className="px-[5%] py-8 md:py-12 bg-primaryBlue">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="text-white">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-3 font-semibold md:mb-4"
            >
              {tagline}
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
            >
              {heading}
            </h1>
            <p data-aos="fade-up" data-aos-delay="300" className="md:text-md">
              <b>{questionBold}</b>
              {description}
            </p>
            <div
              data-aos="fade-up"
              className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
            >
              {buttons.map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-cover rounded-lg"
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroFeature3Defaults: Props = {
  tagline: "World's Premier Virtual Staffing Agency",
  heading: "Scale Your Business with Top Remote Talent—No Hiring Headaches",
  questionBold: "Need Skilled Staff Without the Overhead? ",
  description:
    "Access Virtual Staffing connects you with exceptional remote professionals. No recruitment hassles, no benefits management, no hidden costs. Just ready-to-work talent that drives your business forward.",
  buttons: [
    {
      navLink: {
        title: "Start Hiring Today",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
    },
  ],
  image: {
    src: "/img/talent-feature-img.webp",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
};
