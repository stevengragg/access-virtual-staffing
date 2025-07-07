import { ImageProps } from "@/types/general";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  tagline: string;
  heading: string;
  highlight: string;
  quote1: string;
  quote2: string;
  quote3: string;
  image: ImageProps;
  buttons: LinkButtonProps[];
};

export type HeroFeature2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroFeature2 = (props: HeroFeature2Props) => {
  const {
    quote1,
    quote2,
    quote3,
    image,
    buttons,
    highlight,
    tagline,
    heading,
  } = {
    ...HeroFeature2Defaults,
    ...props,
  };

  return (
    <section
      id="owner-quote"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter"
    >
      <div className="container-xl">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div
            className="order-last md:order-first shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full object-cover rounded-lg "
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="flex flex-col items-start">
            <p
              data-aos="fade-up"
              className="mb-3 font-semibold md:mb-4 text-neutralDarker md:text-md lg:text-lg"
            >
              {tagline}
            </p>
            <h2
              className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-neutralDarker"
              data-aos="fade-up"
            >
              {heading} <span className="text-robinsEggBlue">{highlight}</span>
            </h2>
            <blockquote
              className="text-xl font-semibold md:text-2xl text-neutralDarker"
              data-aos="fade-up"
            >
              {quote1}
            </blockquote>
            <br />
            <blockquote
              className="text-xl font-semibold md:text-2xl text-neutralDarker"
              data-aos="fade-up"
            >
              {quote2}
            </blockquote>
            <br />
            <blockquote
              className="text-xl font-semibold md:text-2xl text-neutralDarker"
              data-aos="fade-up"
            >
              {quote3}
            </blockquote>
            <div
              className="mt-12 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 md:mt-16"
              data-aos="fade-up"
            >
              {buttons.map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroFeature2Defaults: Props = {
  tagline: "WORLD'S PREMIER VIRTUAL STAFFING AGENCY",
  heading: "Scale Your Business with Top Remote Talent—",
  highlight: "No Hiring Headaches",
  quote1:
    "Access Virtual Staffing connects you with exceptional remote professionals.",
  quote2: "No recruitment hassles, no benefits management, no hidden costs.",
  quote3: "Just ready-to-work talent that drives your business forward.",
  image: {
    src: "/img/heroimage3.webp",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
  buttons: [
    {
      navLink: {
        title: "Book a Free Strategy Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
    {
      navLink: {
        title: "Learn How it Works",
        url: "/services#how-it-works",
        follow: false,
      },
      variant: "outline",
      size: "xl",
    },
  ],
};
