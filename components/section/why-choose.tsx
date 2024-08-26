"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
} from "@relume_io/relume-ui";
import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { cn } from "@/lib/utils";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
  tagline: string;
  heading: string;
  description: string;
  tabs: TabProps[];
  buttons: LinkButtonProps[];
};

export type Layout500Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const WhyChoose = (props: Layout500Props) => {
  const { tagline, heading, description, tabs, buttons } = {
    ...Layout500Defaults,
    ...props,
  } as Props;
  const [activeTab, setActiveTab] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <section className="px-[5%] py-6 md:py-12 lg:py-14">
      <div className="container-xl">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="text-sm md:text-base">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className=" max-h-screen w-full items-center justify-center overflow-hidden hidden md:flex">
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
                        className="size-full object-cover"
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
                              className={cn(
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
          <div className="grid grid-cols-1 items-center gap-x-4 min-h-screen">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn("cursor-pointer py-4 pl-6 md:pl-8", {
                  "border-l-2 border-black text-primaryBlue":
                    activeTab === index,
                  "border-l-2 border-transparent opacity-25":
                    activeTab !== index,
                })}
              >
                <h3
                  className={cn(
                    "mb-3 text-xl font-bold md:mb-4 md:leading-[1.3] md:text-xl lg:text-2xl",
                    activeTab === index ? "text-primaryBlue" : ""
                  )}
                >
                  {tab.heading}
                </h3>
                <p className="text-sm lg:text-base">{tab.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export const Layout500Defaults: Layout500Props = {
  tagline: "Bridging Talent and Business Success, Crafted to Perfection",
  heading: "Why Choose Access Virtual Staffing?",
  description:
    "With our straightforward, efficient process, Access Virtual Staffing takes the hassle out of hiring and managing virtual staff. From initial request to seamless integration, we’re committed to delivering a smooth experience and ensuring that your business operates at its best. Partner with us today and experience the ease of building a skilled virtual team that perfectly fits your needs.",
  tabs: [
    {
      heading: "Transparent Talent Sourcing",
      description:
        "We handle every step of the talent sourcing process with complete transparency. From identifying and sourcing top candidates to matching their skills with your specific requirements, we ensure a seamless fit through thorough screening and skill validation. Our commitment is to provide you with the best talent, fully aligned with your business needs.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
        width: 1000,
        height: 1000,
      },
    },
    {
      heading: "Diverse Skill Sets",
      description:
        "Our virtual support staff are not only highly proficient in English but also possess a broad range of skills tailored to meet your unique needs. Additionally, we have a pool of bilingual virtual staff fluent in both Spanish and English, ready to effectively serve your diverse client base.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 2",
        width: 1000,
        height: 1000,
      },
      //   video: {
      //     image: {
      //       src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
      //       alt: "Placeholder image 2",
      //       width: 1000,
      //       height: 1000,
      //     },
      //     url: "https://www.youtube.com/embed/6YcofccdkBc?si=No5cUt-ctItN9AiE",
      //   },
    },
    {
      heading: "Customized Solutions",
      description:
        "We offer tiered recruiting services to match your unique needs, from basic administrative support to high-level professional services. Our tiers include Basic Recruiting Service, Tier 1 General Virtual Staff, Tier 2 Skilled Virtual Staff, and Tier 3 High-Level Professional Services.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
        width: 1000,
        height: 1000,
      },
    },
    {
      heading: "All-Inclusive Talent Management",
      description:
        "We offer more than just recruitment; we provide a complete suite of services to ensure your operations run seamlessly. From the initial recruitment phase through to ongoing management, our all-inclusive support covers everything from payroll administration and timekeeping to detailed performance monitoring. This comprehensive approach guarantees smooth operations, optimal efficiency, and peace of mind for you.",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
        width: 1000,
        height: 1000,
      },
    },
  ],
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
        title: "Start Hiring Virtual Staff",
        url: "#",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
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
