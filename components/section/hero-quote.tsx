import { ImageProps } from "@/types/general";
import Image from "next/image";
import React from "react";
import { BiSolidStar } from "react-icons/bi";

type Props = {
  tagline: string;
  heading: string;
  highlight: string;
  quote1: string;
  quote2: string;
  quote3: string;
  image: ImageProps;
  name: string;
  position: string;
  avatar: ImageProps;
};

export type HeroQuoteProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroQuote = (props: HeroQuoteProps) => {
  const {
    quote1,
    quote2,
    quote3,
    image,
    name,
    position,
    avatar,
    highlight,
    tagline,
    heading,
  } = {
    ...HeroQuoteDefaults,
    ...props,
  };

  return (
    <section
      id="owner-quote"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDark"
    >
      <div className="container-xl">
        <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
          <div className="order-last md:order-first shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight">
            <Image
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full object-cover rounded-lg "
              width={image.width}
              height={image.height}
              data-aos="fade-up"
            />
          </div>
          <div className="flex flex-col items-start">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-3 font-semibold md:mb-4 text-white md:text-md lg:text-lg"
            >
              {tagline}
            </p>
            <h2
              className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {heading} <span className="text-robinsEggBlue">{highlight}</span>
            </h2>
            <blockquote
              className="text-xl font-semibold md:text-2xl text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {quote1}
            </blockquote>
            <br />
            <blockquote
              className="text-xl font-semibold md:text-2xl text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {quote2}
            </blockquote>
            <br />
            <blockquote
              className="text-xl font-semibold md:text-2xl text-white"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {quote3}
            </blockquote>
            <br />
            <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
              {/* Avatar */}
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={avatar.width}
                height={avatar.height}
                className="rounded-full aspect-square mr-3 object-cover"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <div
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="200"
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

export const HeroQuoteDefaults: Props = {
  tagline: "MEET YOUR STRATEGIC PARTNER",
  heading: "Elevating Leaders Through",
  highlight: "Strategic Support",
  quote1:
    "Access Virtual Staffing was founded with a singular mission: to help visionary leaders reclaim their time and maximize their impact through strategic deligation.",
  quote2:
    "After witnessing countless talented executives, entrepreneurs, and pastors burning out from handling tasks that didn'tleverage their unique gifts, we built a solution that provides not just assistance, but true strategic partnership.",
  quote3:
    "Our team of premium virtual assistants is meticulously selected and trained to deliver excellence in every interaction, allowing you to lead with greater focus, clarity, and effectiveness.",
  image: {
    src: "/img/talent-feature-img.webp",
    alt: "Working Remotely",
    width: 1000,
    height: 1000,
  },
  name: "Phil Wardell",
  position: "Founder & CEO, Access Virtual Staffing",
  avatar: {
    src: "/img/phil_wardell.webp",
    alt: "Phil Wardell Avatar",
    width: 100,
    height: 100,
  },
};
