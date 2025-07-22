import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type Props = {
  tagline: string;
  heading: string;
  highlight: string;
  quote1: string;
  image: ImageProps;
  name: string;
  position: string;
  buttons: LinkButtonProps[];
};

export type HeroHeaderQuoteProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderQuote = (props: HeroHeaderQuoteProps) => {
  const { quote1, image, name, position, highlight, heading, buttons } = {
    ...HeroHeaderQuoteDefaults,
    ...props,
  };

  return (
    <section
      id="owner-quote"
      className="bg-heroHeaderMainBg lg:bg-center bg-no-repeat bg-cover bg-top "
    >
      <div className="px-[5%] py-8 md:py-12 lg:py-14 backdrop-blur-sm bg-black/50  ">
        <div className="container">
          <div className="mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 ">
              <div
                className="flex justify-center flex-shrink-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="hidden lg:block ">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="aspect-square w-4/5 md:w-64 lg:w-72 object-center object-cover rounded-full shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
                    width={image.width}
                    height={image.height}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start ">
                <blockquote
                  className="mb-2 text-3xl font-bold md:mb-4 md:text-9xl lg:text-10xl text-white"
                  data-aos="fade-up"
                >
                  {heading}
                </blockquote>
                <blockquote
                  className="mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-white"
                  data-aos="fade-up"
                >
                  <span className="text-robinsEggBlue">{highlight}</span>
                </blockquote>
                <blockquote
                  className="text-lg font-semibold md:text-xl text-white"
                  data-aos="fade-up"
                >
                  {quote1}
                </blockquote>
                <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                  <div className="lg:hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="aspect-square w-16 h-16 object-center object-cover rounded-full shadow border-2 border-white/30"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div
                    className="text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p className="font-semibold ">{name}</p>
                    <p>{position}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12">
                  {buttons.map((button, index) => (
                    <LinkButton key={index} {...button} />
                  ))}
                </div>
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
  heading: '"If you are not leveraging virtual talent, you are missing out."',
  highlight: "Let us help you focus on what matters most.",
  quote1:
    "Access Virtual Staffing was founded with a singular mission: to help visionary leaders reclaim their time and maximize their impact through strategic deligation.",

  image: {
    src: "/img/phil-image-official-1.jpeg",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
  name: "Phil Wardell",
  position: "Founder & CEO, Access Virtual Staffing",
  buttons: [
    {
      navLink: {
        title: "Schedule your Free Strategy Call",
        url: "/book-a-meeting#calendly",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
};
