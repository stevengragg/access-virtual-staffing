import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
};

export type CtaFooterJobseekerProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CtaFooterJobseeker = (props: CtaFooterJobseekerProps) => {
  const { heading, description, buttons } = {
    // ...CtaFooterJobseekerDefaults,
    ...props,
  } as Props;
  return (
    <section
      id="cta_footer"
      className=" px-[5%] py-16 md:py-24 lg:py-28 border border-zinc-800 bg-primaryBlue   bg-center bg-no-repeat bg-cover bg-blend-multiply"
    >
      <div className="container text-center max-w-xl ">
        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white">
          {heading}
        </h2>
        <p className="md:text-md text-white">{description}</p>
        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};
