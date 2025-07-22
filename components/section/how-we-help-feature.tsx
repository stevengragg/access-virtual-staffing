"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";
import { ImageProps } from "@/types/general";

type Props = {
  heading: string;
  description: string;
  highlights: string[];
  description2: string;
  buttons: LinkButtonProps[];
  video?: string;
  image: ImageProps;
};

export type Header21Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowWeHelpFeature = (props: Header21Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const {
    heading,
    description,
    description2,
    buttons,
    video,
    image,
    highlights,
  } = {
    ...Header21Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="feature2"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue "
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className=" flex max-w-full items-center justify-center ">
            <Image
              src={image.src}
              className=" object-cover rounded-lg"
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
              {heading}
            </h1>
            <p className="text-sm md:text-md text-white mb-5">{description}</p>
            <div className="space-y-4 mb-5 md:mb-6">
              {highlights.map((text, idx) => (
                <h4
                  className="text-xl lg:text-4xl font-bold text-white"
                  key={idx}
                >
                  {text}
                </h4>
              ))}
            </div>
            <p className="text-sm md:text-md text-white mb-5">{description2}</p>

            <div className="mt-6 flex flex-col lg:flex-row gap-4 md:mt-8">
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

export const Header21Defaults: Header21Props = {
  heading: "How we help your business grow?",
  description:
    "We help your business grow by providing reliable virtual staff while saving you up to 70% on salaries and 90% on operational expenses. At Access Virtual Staffing, we manage hiring and administrative processes, freeing you to focus on what truly matters—strategic growth. Let us streamline your operations and reduce overhead, so you can drive your business forward with greater efficiency.",
  highlights: ["Ready to Take Your Business to the Next Level?"],
  description2:
    "Explore our services and discover how Access Virtual Staffing can help your business achieve its goals. Contact us today and start building your dream team.",
  buttons: [
    {
      navLink: {
        title: "Discover Our Services",
        url: "/services",
        follow: false,
      },
      variant: "primary",
      size: "xl",
    },
    {
      navLink: {
        title: "Start Hiring",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "outline",
      size: "xl",
    },
  ],

  image: {
    src: "/img/phil-image-official-2.jpeg",
    alt: "Placeholder image",
    width: 450,
    height: 400,
  },
};

const Play = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.333 32C5.333 17.272 17.273 5.333 32 5.333A26.667 26.667 0 0 1 58.666 32c0 14.728-11.939 26.667-26.666 26.667-14.728 0-26.667-11.94-26.667-26.667ZM27.12 43.413l15.546-9.706a2.027 2.027 0 0 0 0-3.414l-15.6-9.706A2 2 0 0 0 24 22.267v19.466a2 2 0 0 0 3.12 1.68Z"
      />
    </svg>
  );
};

const Loading = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor">
        <path
          strokeDasharray={60}
          strokeDashoffset={60}
          strokeOpacity={0.3}
          d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="1.3s"
            values="60;0"
          />
        </path>
        <path
          strokeDasharray={15}
          strokeDashoffset={15}
          d="M12 3a9 9 0 0 1 9 9"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="15;0"
          />
          <animateTransform
            attributeName="transform"
            dur="1.5s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </path>
      </g>
    </svg>
  );
};
