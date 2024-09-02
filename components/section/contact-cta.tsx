import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
};

export type Cta7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ContactCTA = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-oceanBlue">
      <div className="container-xl grid w-full grid-cols-1 items-center justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg text-center lg:text-left">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl text-white">
              {heading}
            </h2>
            <p className="text-sm md:text-md text-white">{description}</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Cta7Defaults: Cta7Props = {
  heading: "Talk To Us",
  description:
    "You can book a call through our Calendly page and we'll explain the whole process or you can directly send us your inquiry through our Contact Us page.",
  buttons: [
    {
      navLink: {
        title: "Book a Discovery Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "outline",
      size: "xl",
    },
    {
      navLink: {
        title: "Contact Us",
        url: "/contact-us",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
};
