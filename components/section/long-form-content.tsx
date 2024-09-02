type Props = {
  quote: string;
  author: string;
  children: React.ReactNode;
};

export type Content1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LongFormContent = (props: Content1Props) => {
  const { quote, author, children } = {
    ...Content1Defaults,
    ...props,
  } as Props;
  return (
    <section id="long_form_content1" className="px-[5%] py-8 md:py-12 lg:py-14">
      <div className="container-xl">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="rb-5 mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
              {quote}
            </h2>
            <p className="text-md font-normal">{author}</p>
          </div>
          <div>
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content1Defaults: Content1Props = {
  quote:
    "“Our people are the heart of our success. When you genuinely care for your employees and invest in their well-being, they respond with unparalleled dedication and excellence. I place my trust in them, not just because of their skills, but because I believe in their potential to achieve greatness.”",
  author: "Phil Wardell",
  children: (
    <div>
      <p>
        This philosophy of mutual respect, integrity, trust and professionalism
        didn&apos;t just drive the success of Access Insurance Underwriting—it
        became the cornerstone of Access Virtual Staffing&apos;s unique
        approach. Unlike traditional recruitment agencies, we go beyond simply
        matching skills to roles. We integrate highly skilled offshore talent
        into your core operations, fostering a seamless extension of your team.
        As our business grew, CEOs from various small businesses took notice,
        eager to understand the secret behind our sustained success.
      </p>
      <p>
        Phil&apos;s innovative model offers more than just a staffing solution;
        it provides a strategic advantage that empowers businesses to scale
        efficiently, adapt quickly, and outperform competitors. Access Virtual
        Staffing stands apart by offering more than just personnel—we deliver a
        partnership that fuels growth, innovation, and long-term success.
      </p>
    </div>
  ),
};
