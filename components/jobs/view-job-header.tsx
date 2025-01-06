type Tag = {
  url: string;
  label: string;
};

type Props = {
  heading: string;
  description: string;
  tags: Tag[];
};

export type ViewJobHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ViewJobHeader = (props: ViewJobHeaderProps) => {
  const { heading, description, tags } = {
    ...ViewJobHeaderDefaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">{description}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
          {tags.map((tag, index) => (
            <li key={index} className="flex">
              <a
                href={tag.url}
                className="bg-background-secondary px-2 py-1 text-sm font-semibold"
              >
                {tag.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const ViewJobHeaderDefaults: Props = {
  heading: "Project name here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  tags: [
    {
      label: "Tag one",
      url: "#",
    },
    {
      label: "Tag two",
      url: "#",
    },
    {
      label: "Tag three",
      url: "#",
    },
  ],
};
