type Props = {
  quote: string;
  author: string;
  children: React.ReactNode;
};

export type Content2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LongFormContent2 = (props: Content2Props) => {
  const { quote, author, children } = {
    ...Content2Defaults,
    ...props,
  } as Props;
  return (
    <section id="long_form_content" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container-xl">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="prose">{children}</div>
          </div>
          <div>
            <h2 className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {quote}
            </h2>
            <p className="text-md font-normal">{author}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content2Defaults: Content2Props = {
  quote:
    "“I want to share the blueprint of our success with fellow small business CEOs, not just as a strategy, but as a belief in the limitless potential of people. By harnessing the power of global talent, we've unlocked a new dimension of growth and innovation. My goal is to help others do the same, empowering businesses to thrive by tapping into the diverse, skilled, and dedicated professionals that the world has to offer.”",
  author: "Phil Wardell",
  children: (
    <div>
      <p>
        Access Virtual Staffing was born out of a desire to extend this proven
        model to businesses worldwide, enabling them to achieve their goals with
        the support of highly skilled, dedicated professionals. Our mission is
        to bridge talent and business success, fostering long-lasting
        partnerships that drive growth and innovation.
      </p>
    </div>
  ),
};
