"use client";

import clsx from "clsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import { ImageProps } from "@/types/general";
import Image from "next/image";

type VideoProps = {
  image: ImageProps;
  url: string;
};

type TabProps = {
  heading: string;
  description: string;
  image?: ImageProps;
  video?: VideoProps;
};

type Props = {
  heading: string;
  subheading: string;
  tabs: TabProps[];
};

export type Layout28Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesOutline = (props: Layout28Props) => {
  const { tabs, heading, subheading } = {
    // ...Layout28Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section id="services_outline" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl flex flex-col items-start ">
        <div className="mb-12 w-full max-w-xl md:mb-18 lg:mb-20 space-y-6">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl ">
            {heading}
          </h3>
          <p className="text-md font-normal">{subheading}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-1 items-center gap-x-4 gap-y-10">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx("cursor-pointer pl-8", {
                  "border-l-2 border-black": activeTab === index,
                  "border-l-2 border-transparent opacity-50":
                    activeTab !== index,
                })}
              >
                <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {tab.heading}
                </h3>
                <p>{tab.description}</p>
              </div>
            ))}
          </div>
          <div className="flex max-h-full w-full items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {tabs.map((tab, index) => {
                if (activeTab !== index) return null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                  >
                    {tab.image && (
                      <Image
                        src={tab.image.src}
                        alt={tab.image.alt}
                        className=" object-contain w-[616px] h-[640px]"
                        width={tab.image.width}
                        height={tab.image.height}
                      />
                    )}
                    {tab.video && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative flex w-full items-center justify-center">
                            <Image
                              src={tab.video.image.src}
                              alt={tab.video.image.alt}
                              className="size-full object-cover"
                              width={tab.video.image.width}
                              height={tab.video.image.height}
                            />
                            <Play className="absolute z-20 text-white" />
                            <span className="absolute inset-0 z-10 bg-black/50" />
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
                              src={tab.video.url}
                              allow="autoplay; encrypted-media; picture-in-picture"
                              allowFullScreen
                              onLoad={() => setIsIframeLoaded(true)}
                            ></iframe>
                          </DialogContent>
                        </DialogPortal>
                      </Dialog>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Layout28Defaults: Layout28Props = {
//   tabs: [
//     {
//       heading: "General Virtual Staff",
//       description:
//         "Our Basic Plan focuses on recruiting General Virtual Staff with essential skills for everyday tasks. This includes email management, calendar and travel scheduling, data entry, customer service, social media management, content creation, and basic graphic design. Ideal for businesses needing foundational support.",
//       image: {
//         src: "/img/virtual_staff.svg",
//         alt: "Virtual Staff SVG",
//         width: 616,
//         height: 640,
//       },
//     },
//     {
//       heading: "Skilled Staff",
//       description:
//         "For more specialized needs, our Skilled Staff recruitment covers roles such as web developers, SEO experts, architectural designers/CAD operators, HR professionals, and QuickBooks Online (QBO) accountants. This tier ensures you find professionals with the specific skills and expertise required for your business.",
//       image: {
//         src: "/img/skilled_staff.svg",
//         alt: "Skilled Staff SVG",
//         width: 616,
//         height: 640,
//       },
//     },
//     {
//       heading: "High-Level Professional Services",
//       description:
//         "This tier targets niche areas requiring advanced expertise, including legal, financial, and high-level human resources professionals. Perfect for businesses needing specialized knowledge and experience.",
//       image: {
//         src: "/img/professional_staff_certified_staff.svg",
//         alt: "Professional Staff SVG",
//         width: 616,
//         height: 640,
//       },
//     },
//   ],
// };

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
