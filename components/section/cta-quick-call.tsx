import { ArrowRight } from "lucide-react";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
};

export type CtaQuickCallProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CtaQuickCall = (props: CtaQuickCallProps) => {
  const { heading, description, buttons } = {
    ...CtaQuickCallDefaults,
    ...props,
  } as Props;

  return (
    <section
      id="cta-quick-call"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue "
    >
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl text-white ">
            {heading}
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const CtaQuickCallDefaults: Props = {
  heading: "SCHEDULE AN APPOINTMENT NOW",
  description: "Your business will never be the same after the call",
  buttons: [
    {
      navLink: {
        title: "Schedule your Free Strategy Call",
        url: "/book-a-meeting#calendly",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
};
