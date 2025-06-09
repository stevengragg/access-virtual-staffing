import { VideoIframe } from "@relume_io/relume-ui";
import { Dialog, DialogContent, DialogTrigger } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type SectionProps = {
  stepNumber: number;
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  sections: SectionProps[];
  buttons: LinkButtonProps[];
  video: string;
  image: ImageProps;
};

export type HowItWorks2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowItWorks2 = (props: HowItWorks2Props) => {
  const { heading, description, buttons, sections, image, video } = {
    ...HowItWorks2Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex flex-col items-center justify-start">
                <h2
                  className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl"
                  data-aos="fade-up"
                >
                  {heading}
                </h2>
                <p className="md:text-md mb-5" data-aos="fade-up">
                  {description}
                </p>
                <div
                  className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2 lg:gap-8 p-2  "
                    >
                      <div className="mb-5 md:mb-6 ">
                        <h1 className="text-[128px] font-extrabold text-deepBlue ">
                          {section.stepNumber}
                        </h1>
                      </div>
                      <div>
                        <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl text-left md:text-center ">
                          {section.heading}
                        </h3>
                        <p className="mb-5 md:mb-6 text-left md:text-center">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
                  {buttons.map((button, index) => (
                    <LinkButton key={index} {...button} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex items-center justify-center rounded-md">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="size-full object-cover rounded-md"
              />
              <span className="absolute inset-0 z-10 bg-black/50 rounded-md" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video={video} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks2Defaults: Props = {
  heading: "How it works?",
  description:
    "Our streamlined process ensures that you get the right virtual staff quickly and effortlessly.",
  buttons: [
    {
      navLink: {
        title: "Get Started",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
      icon: () => <ArrowRight />,
    },
  ],
  image: {
    src: "/img/thumbnail_avs.webp",
    alt: "Thumbnail of the video",
    width: 1000,
    height: 1000,
  },
  video: "https://www.youtube.com/embed/9o4U6hxVnoY?si=xFkU2vrITmJgNsrU",
  sections: [
    {
      stepNumber: 1,
      heading: "Client Intake",
      description: "Fill out a request form, and we’ll review your needs.",
    },
    {
      stepNumber: 2,
      heading: "Sourcing and Screening",
      description: "We find and vet top candidates for you.",
    },
    {
      stepNumber: 3,
      heading: "Onboarding",
      description: "We handle the setup so your hire is ready to go.",
    },
    {
      stepNumber: 4,
      heading: "Integration & Monitoring",
      description:
        "We track performance, manage payroll, and ensure smooth operations.",
    },
  ],
};
