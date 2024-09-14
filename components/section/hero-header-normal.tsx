type Props = {
  heading: string;
  context: string;
  ads?: {
    text?: string;
    url?: string;
  };
};

export type HeroHeaderNormalProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderNormal = (props: HeroHeaderNormalProps) => {
  const { heading, context, ads } = {
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
          {ads && (
            <div className="mt-4 lg:mt-8">
              <p className="text-md font-normal text-white">{ads.text || ""}</p>
              {ads.url && (
                <div className="text-md font-normal text-white">
                  <a
                    href={ads.url || "#"}
                    target="_blank"
                    className="underline text-white hover:text-yellow-500 text-md font-semibold mr-1"
                  >
                    Click Here
                  </a>
                  to learn more.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
