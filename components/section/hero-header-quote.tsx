import { ImageProps } from "@/types/general";
import Image from "next/image";
import React from "react";

type Props = {
  tagline: string;
  heading: string;
  highlight: string;
  quote1: string;
  image: ImageProps;
  name: string;
  position: string;
};

export type HeroHeaderQuoteProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderQuote = (props: HeroHeaderQuoteProps) => {
  const { quote1, image, name, position, highlight, heading } = {
    ...HeroHeaderQuoteDefaults,
    ...props,
  };

  return (
    <section
      id="owner-quote"
      className="px-[5%] py-8 md:py-12 lg:py-14 bg-primaryBlue"
    >
      <div className="container-xl">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="aspect-square w-3/4 max-w-md object-center object-cover rounded-full shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="flex flex-col items-start">
            <blockquote
              className="mb-2 text-6xl font-bold md:mb-4 md:text-9xl lg:text-10xl text-white"
              data-aos="fade-up"
            >
              {heading}
            </blockquote>
            <blockquote
              className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white"
              data-aos="fade-up"
            >
              <span className="text-robinsEggBlue">{highlight}</span>
            </blockquote>
            <blockquote
              className="text-xl font-semibold md:text-2xl text-white"
              data-aos="fade-up"
            >
              {quote1}
            </blockquote>
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              <div
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="font-semibold ">{name}</p>
                <p>{position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroHeaderQuoteDefaults: Props = {
  tagline: "Access Virtual Staffing",
  heading:
    '"If you don’t have an executive assistant, you’re doing the work of one."',
  highlight: "Let us help you focus on what matters most.",
  quote1:
    "Access Virtual Staffing was founded with a singular mission: to help visionary leaders reclaim their time and maximize their impact through strategic deligation.",

  image: {
    src: "/img/phil-new.webp",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
  name: "Phil Wardell",
  position: "Founder & CEO, Access Virtual Staffing",
};
