import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ChevronRight } from "lucide-react";

type SectionProps = {
  stepNumber: number;
  heading: string;
  description: string;
};

type Props = {
  tagline: string;
  heading: string;
  context: string;
  context2?: string;
  sections?: SectionProps[];
  buttons?: LinkButtonProps[];
};

export type LongFormHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LongFormHeader = (props: LongFormHeaderProps) => {
  const { heading, tagline, context, context2, buttons, sections } = {
    ...props,
    ...LongFormHeaderDefaults,
  } as Props;
  return (
    <section id="long_form_header1" className="px-[5%] py-4 lg:py-6">
      <div className="container-xl flex flex-col items-start">
        <div className="mb-0 w-full space-y-6">
          <p className="text-sm lg:text-base font-normal">{tagline}</p>
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl ">
            {heading}
          </h2>
          <p className="text-md lg:text-lg font-medium">{context}</p>
          <p className="text-md lg:text-lg font-medium mt-4">{context2}</p>
        </div>
        {sections && (
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-2 lg:gap-8 p-2  "
              >
                <div className="mb-5 md:mb-6 ">
                  <h1 className="text-[128px] font-extrabold ">
                    {section.stepNumber}
                  </h1>
                </div>
                <div>
                  <h3 className="mb-5 text-xl font-bold md:mb-6 md:text-2xl ">
                    {section.heading}
                  </h3>
                  <p className="mb-5 md:mb-6 ">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {buttons && (
          <div className="mt-6 flex gap-x-2 md:mt-8">
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export const LongFormHeaderDefaults: LongFormHeaderProps = {
  tagline: "Bridging Talent & Business Success, Crafted to Perfection",
  heading: "Our Story",
  context:
    "Access Virtual Staffing is rooted in the unwavering commitment to excellence and people-centric leadership exemplified by our founder, Phil Wardell. Together with his wife Lisa, Phil previously launched Access Insurance Underwriting, LLC, a venture that quickly became a beacon of small business success in the insurance industry. Their relentless pursuit of innovation and quality led them to explore new avenues for growth, which brought them to the shores of the Philippines.",
  context2:
    "During this transformative journey, Phil discovered a wealth of talent among Filipino professionals. Recognizing the potential of these offshore workers, he embraced a new business model that revolutionized his approach to staffing. He believed in not just hiring people but in nurturing and empowering them.",
};
