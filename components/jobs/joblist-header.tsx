type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type JobListHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const JobListHeader = (props: JobListHeaderProps) => {
  const { heading, description, image } = {
    ...JobListHeaderDefaults,
    ...props,
  };
  return (
    <section id="header" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
            {heading}
          </h1>
          <p className="text-text-alternative md:text-md">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        {/* <img
          src={image.src}
          className="size-full object-cover"
          alt={image.alt}
        /> */}
        <div className="absolute inset-0 bg-zinc-700" />
      </div>
    </section>
  );
};

export const JobListHeaderDefaults: Props = {
  heading: "Short heading here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
