import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ChevronRight } from "lucide-react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  tagline: string;
  heading: string;
  description1: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type Header37Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroFeature = (props: Header37Props) => {
  const { tagline, heading, description1, buttons, image } = {
    ...Header37Defaults,
    ...props,
  } as Props;
  return (
    <section className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 bg-primaryBlue">
      <div className="order-2 lg:order-1">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full object-top max-h-screen object-cover"
          width={image.width}
          height={image.height}
        />
      </div>
      <div className="order-1 mx-[5%] sm:max-w-lg md:justify-self-start lg:order-2 lg:ml-20 lg:mr-[5vw]">
        <p className="md:text-md text-white">{tagline}</p>
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
          {heading}
        </h1>
        <p className=" text-sm md:text-md text-white">{description1}</p>
        {/* <br />
        <p className="text-sm md:text-md text-white">{description2}</p> */}
        <div className="mt-6 flex flex-col lg:flex-row gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Header37Defaults: Header37Props = {
  tagline: "Top Virtual Staffing Agency in Florida, USA",
  heading: "Unlock Your Business's Full Potential with Access Virtual Staffing",
  description1:
    "Are backend operations consuming your time and budget? Many businesses struggle with this, but Access Virtual Staffing can help. By outsourcing tasks like data entry and customer service, you can refocus on scaling your business and driving sales. Let us handle the backend so you can focus on what truly matters: scaling your business, increasing sales, and crafting winning strategies.",
  buttons: [
    {
      navLink: {
        title: "Discover Our Services",
        url: "#",
        follow: false,
      },
      variant: "primary",
      size: "xl",
    },
    {
      navLink: {
        title: "Learn more",
        url: "#",
        follow: false,
      },
      variant: "outline",
      size: "xl",
      icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
    },
  ],
  image: {
    src: "/img/heroimage2.webp",
    alt: "Calling image - thanks to Magnet.me",
    width: 1000,
    height: 1000,
  },
};
