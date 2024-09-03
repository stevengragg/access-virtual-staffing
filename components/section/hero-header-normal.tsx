type Props = {
  heading: string;
  context: string;
};

export type HeroHeaderNormalProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderNormal = (props: HeroHeaderNormalProps) => {
  const { heading, context } = {
    ...props,
  } as Props;
  return (
    <section
      id="long_form_header1"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue "
    >
      <div className="container-xl flex flex-col items-start">
        <div className="mb-12 w-full space-y-6">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl text-white">
            {heading}
          </h3>
          <p className="text-md font-normal text-white">{context}</p>
        </div>
      </div>
    </section>
  );
};
