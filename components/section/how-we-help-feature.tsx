"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import clsx from "clsx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  heading: string;
  description: string;
  highlights: string[];
  buttons: LinkButtonProps[];
  video: string;
  image: ImageProps;
};

export type Header21Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowWeHelpFeature = (props: Header21Props) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const { heading, description, buttons, video, image, highlights } = {
    ...Header21Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue ">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <Dialog>
            <DialogTrigger className="order-2 lg:order-1">
              <div className="relative flex w-full max-w-full items-center justify-center ">
                <Image
                  src={image.src}
                  className="w-full object-cover rounded-lg"
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
                <Play className="absolute z-20 size-20 text-white" />
                <span className="absolute inset-0 z-10 " />
              </div>
            </DialogTrigger>
            <DialogPortal>
              <DialogOverlay className="bg-black/90" />
              <DialogContent>
                {!isIframeLoaded && (
                  <Loading className="mx-auto size-16 text-white" />
                )}
                <iframe
                  className={clsx(
                    "z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]",
                    {
                      visible: isIframeLoaded,
                      hidden: !isIframeLoaded,
                    }
                  )}
                  src={video}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsIframeLoaded(true)}
                ></iframe>
              </DialogContent>
            </DialogPortal>
          </Dialog>
          <div className="order-1 lg:order-2">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
              {heading}
            </h1>
            <p className="text-sm md:text-md text-white mb-5">{description}</p>
            <div className="space-y-4">
              {highlights.map((text, idx) => (
                <h4
                  className="text-base md:text-2xl lg:text-4xl font-bold text-white"
                  key={idx}
                >
                  {text}
                </h4>
              ))}
            </div>

            <div className="mt-6 flex gap-x-4 md:mt-8">
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
    "We help your business grow by providing reliable virtual staff who handle the tasks that take up your time. At Access Virtual Staffing, we manage hiring and administrative processes, freeing you to focus on what truly matters---strategic growth. Let us reduce your overhead and operational complexities, so you can invest your energy where it counts. ",
  highlights: ["Managed Hiring Process.", "Reduced Administrative Tasks."],
  buttons: [
    {
      navLink: {
        title: "Start Hiring Virtual Staff",
        url: "#",
        follow: false,
      },
      variant: "primary",
      size: "xl",
    },
  ],

  video: "https://www.youtube.com/embed/6YcofccdkBc?si=No5cUt-ctItN9AiE",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
    alt: "Placeholder image",
    width: 1000,
    height: 1000,
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
