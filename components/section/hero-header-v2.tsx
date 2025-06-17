import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

import { ImageProps } from "@/types/general";
import { ArrowRight } from "lucide-react";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  images: ImageProps[];
};

export type HeroHeaderV2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderV2 = (props: HeroHeaderV2Props) => {
  const { heading, description, buttons, images } = {
    ...HeroHeaderV2Defaults,
    ...props,
  };
  return (
    <section
      id="hero"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-midnightBlue"
    >
      <div className="container flex flex-col items-center">
        <div className="rb-12 mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h1
            className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-white"
            data-aos="fade-up"
          >
            {heading}
          </h1>
          <p className="md:text-md text-white" data-aos="fade-up">
            {description}
          </p>
          <div
            className="mt-6 flex items-center justify-center gap-x-4 md:mt-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
        </div>

        <div className="flex w-screen justify-start overflow-hidden">
          <div className="grid shrink-0 grid-cols-1 gap-y-4">
            <div className="grid w-full animate-marquee-top auto-cols-fr grid-cols-2 gap-4 self-center">
              {[...new Array(2)].map((e, index) => (
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] border border-deepZinc rounded-md"
                    >
                      <Image
                        className="absolute inset-0 size-full object-cover"
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
                <div key={index} className="grid w-full grid-flow-col gap-4">
                  {images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] border border-deepZinc rounded-md"
                    >
                      <Image
                        className="absolute inset-0 size-full object-cover"
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
    </section>
  );
};

export const HeroHeaderV2Defaults: Props = {
  heading: "Scale Smarter with Global Talent",
  description:
    "Access top-tier professionals while saving up to 70% on salaries and 90% on operations. Our tailored solutions help your business grow efficiently—with expert support every step of the way.",
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
