type Props = {
  heading: string;
  children: React.ReactNode;
};

export type ViewJobContentProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ViewJobContent = (props: ViewJobContentProps) => {
  const { heading, children } = {
    ...props,
  };
  return (
    <section id="viewjob_content" className="px-[5%] py-4 md:py-8 ">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12  md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
