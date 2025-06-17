import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  heading2: string;
  description: string;
  buttons: LinkButtonProps[];
};

export type Cta25Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const CTAFooter = (props: Cta25Props) => {
  const { heading, heading2, description, buttons } = {
    // ...Cta25Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="cta_footer"
      className=" px-[5%] py-16 md:py-24 lg:py-28 border border-zinc-800 bg-primaryBlue/80 bg-ctaFooterBg2 bg-center bg-no-repeat bg-cover bg-blend-multiply"
    >
      <div className="container text-center max-w-lg ">
        <h2
          className=" text-5xl font-bold  md:text-7xl lg:text-8xl text-white"
          data-aos="fade-up"
        >
          {heading}
        </h2>
        <h2
          className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-robinsEggBlue"
          data-aos="fade-up"
        >
          {heading2}
        </h2>
        <p
          className="md:text-md text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description}
        </p>
        <div
          className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-4 md:mt-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

// export const Cta25Defaults: Cta25Props = {
//   heading: "Unlock Your Business Potential Today",
//   description:
//     "Send us your requirements or inquiries so that we can start hiring your first Virtual Staff.",
//   buttons: [
//     {
//       navLink: {
//         title: "Discover Our Services",
//         url: "/services",
//         follow: false,
//       },
//       variant: "secondary",
//       size: "xl",
//     },
//     {
//       navLink: {
//         title: "Start Hiring",
//         url: "/start-hiring",
//         follow: false,
//       },
//       variant: "outline",
//       size: "xl",
//     },
//   ],
// };
