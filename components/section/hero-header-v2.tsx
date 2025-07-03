import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

import { ImageProps } from "@/types/general";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  heading: string;
  highlight: string;
  description1: string;
  description2: string;
  buttons: LinkButtonProps[];
  images: ImageProps[];
};

export type HeroHeaderV2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderV2 = (props: HeroHeaderV2Props) => {
  const { heading, highlight, description1, description2, buttons, images } = {
    ...HeroHeaderV2Defaults,
    ...props,
  };
  return (
    <section
      id="hero"
      className="bg-heroHeaderMainBg lg:bg-center bg-no-repeat bg-cover bg-top"
    >
      <div className="px-[5%] py-16 md:py-24 lg:py-28 ">
        <div className="container-xl flex flex-col ">
          <div className="flex flex-col items-center justify-center   text-center  mb-12 md:mb-16 lg:mb-32 ">
            <h1
              className="text-6xl font-semibold md:text-9xl lg:text-11xl text-white"
              data-aos="fade-up"
            >
              {heading} <span className="text-robinsEggBlue">{highlight}</span>
            </h1>

            <p
              className="text-lg md:text-xl lg:text-2xl text-white"
              data-aos="fade-up"
            >
              {description1}
            </p>
            <p
              className="text-lg md:text-xl lg:text-2xl text-white"
              data-aos="fade-up"
            >
              {description2}
            </p>
            <div
              className="mt-12 flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-4 md:mt-16"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {buttons.map((button, index) => (
                <LinkButton key={index} {...button} />
              ))}
            </div>
          </div>
          <div className="container flex flex-col items-center  rb-12 mb-12 md:mb-18 lg:mb-20 ">
            <div className="flex w-screen justify-start overflow-hidden">
              <div className="grid shrink-0 grid-cols-1 gap-y-4">
                <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
                  {[...new Array(2)].map((e, index) => (
                    <div
                      key={index}
                      className="grid w-full grid-flow-col gap-4"
                    >
                      {images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] "
                        >
                          <Image
                            className="absolute inset-0 size-full object-cover rounded-lg"
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="grid w-full animate-marquee-bottom grid-cols-2 gap-4 self-center">
                  {[...new Array(2)].map((e, index) => (
                    <div
                      key={index}
                      className="grid w-full grid-flow-col gap-4"
                    >
                      {images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] "
                        >
                          <Image
                            className="absolute inset-0 size-full object-cover rounded-lg"
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                          />
                        </div>
                      ))}
                    </div>
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

export const HeroHeaderV2Defaults: Props = {
  heading: "Scale Smarter with",
  highlight: "Global Talent",
  description1:
    "Access top-tier professionals while saving up to 70% on salaries and 90% on operations. ",
  description2:
    "Our tailored solutions help your business grow efficiently—with expert support every step of the way.",
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
        url: "/#how-it-works",
        follow: false,
      },
      variant: "outline",
      size: "xl",
    },
  ],

  images: [
    {
      src: "/img/carousel_img1.webp",
      alt: " placeholder image 1",
      width: 1000,
      height: 1000,
    },

    {
      src: "/img/carousel_img2.webp",
      alt: " placeholder image 2",
      width: 1000,
      height: 1000,
    },

    {
      src: "/img/carousel_img3.webp",
      alt: " placeholder image 3",
      width: 1000,
      height: 1000,
    },

    {
      src: "/img/carousel_img4.webp",
      alt: " placeholder image 4",
      width: 1000,
      height: 1000,
    },

    {
      src: "/img/carousel_img5.webp",
      alt: " placeholder image 5",
      width: 1000,
      height: 1000,
    },

    {
      src: "/img/carousel_img6.webp",
      alt: " placeholder image 6",
      width: 1000,
      height: 1000,
    },
  ],
};
