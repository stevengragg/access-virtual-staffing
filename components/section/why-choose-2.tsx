import { ImageProps } from "@/types/general";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ArrowRight } from "lucide-react";

type SectionProps = {
  heading: string;
  description: string;
};

type Props = {
  heading: string;
  description: string;
  leftSections: SectionProps[];
  rightSections: SectionProps[];
  footerText: string;
  image: ImageProps;
  buttons: LinkButtonProps[];
};

export type WhyChoose2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const WhyChoose2 = (props: WhyChoose2Props) => {
  const {
    heading,
    description,
    leftSections,
    rightSections,
    footerText,
    image,
    buttons,
  } = {
    ...props,
    ...WhyChoose2Defaults,
  };

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-midnightBlue"
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h2
              className="mb-5 text-5xl font-semibold md:mb-6 md:text-7xl lg:text-8xl text-white"
              data-aos="fade-up"
            >
              {heading}
            </h2>
            <p className="md:text-md text-white" data-aos="fade-up">
              {description}
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <FeatureSection sections={leftSections} />
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-cover rounded-md"
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
          <FeatureSection sections={rightSections} />
        </div>
        <div
          className="mt-12 text-center gap-4 md:mt-18 lg:mt-20"
          data-aos="fade-up"
        >
          <h3 className="text-xl md:text-2xl lg:text-4xl text-white">
            {footerText}
          </h3>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({ sections }: { sections: SectionProps[] }) => (
  <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 text-white">
    {sections.map((section, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-4xl">
          {section.heading}
        </h3>
        <p>{section.description}</p>
      </div>
    ))}
  </div>
);

export const WhyChoose2Defaults: Props = {
  heading: "Why Choose Access Virtual Staffing?",
  description: "Save Money, Work Smarter, Scale Faster!",
  leftSections: [
    {
      heading: "Cut Costs",
      description:
        "No office space, no extra expenses—just top talent at a fraction of the cost.",
    },
    {
      heading: "Skilled Professionals",
      description:
        "Hire experts for admin, customer support, tech, and more—ready to work.",
    },
  ],
  rightSections: [
    {
      heading: "Flexible & Scalable",
      description: "Scale your team up or down as your business grows.",
    },
    {
      heading: "Hassle-Free Management",
      description:
        "We handle hiring, payroll, and timekeeping—you focus on success.",
    },
  ],
  footerText: "More Productivity. Less Overhead. Better Results.",
  image: {
    src: "/img/heroimage.webp",
    alt: "Business meeting - thanks to Amy Hirschi",
    width: 1000,
    height: 1000,
  },
  buttons: [
    {
      navLink: {
        title: "Find your perfect VA match",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
};
