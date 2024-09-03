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
  subheading: string;
  sections: SectionProps[];
  buttons: LinkButtonProps[];
};

export type Layout242Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HowItWorks = (props: Layout242Props) => {
  const { heading, tagline, subheading, buttons, sections } = {
    ...props,
    ...Layout242Defaults,
  } as Props;
  return (
    <section id="how_it_works" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl flex flex-col items-start">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20 space-y-6">
          <p className="text-sm lg:text-base font-normal">{tagline}</p>
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl ">
            {heading}
          </h3>
          <p className="text-md font-normal">{subheading}</p>
        </div>
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
        <div className="mt-6 flex gap-2 md:mt-8">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout242Defaults: Layout242Props = {
  tagline: "Seamless Staffing Solutions",
  heading: "How It Works",
  subheading:
    "Discover how easy and efficient it is to elevate your team with Access Virtual Staffing. Our streamlined process ensures that you get the right virtual staff quickly and effortlessly. Here’s a quick look at how we make it all happen:",
  sections: [
    {
      stepNumber: 1,
      heading: "Client Intake",
      description:
        "Begin by filling out our virtual staff request form. Once we receive it, we’ll review the details and, if needed, schedule a call to clarify expectations and deliverables.",
    },
    {
      stepNumber: 2,
      heading: "Sourcing and Screening",
      description:
        "We kick off our sourcing and screening process to find the best candidates.",
    },
    {
      stepNumber: 3,
      heading: "Onboarding",
      description:
        "After you’ve selected your preferred candidate, we’ll handle the onboarding process to ensure they are ready for their first day.",
    },
    {
      stepNumber: 4,
      heading: "Integration & Monitoring",
      description:
        "We handle timekeeping, monitor productivity, and manage payroll, providing weekly attendance reports and ensuring accurate, timely compensation for your virtual staff.",
    },
  ],
  buttons: [
    {
      navLink: {
        title: "Get Started",
        url: "/start-hiring",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
    {
      navLink: {
        title: "Learn more",
        url: "/services",
        follow: false,
      },
      variant: "link2",
      size: "xl",
      icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
    },
  ],
};
