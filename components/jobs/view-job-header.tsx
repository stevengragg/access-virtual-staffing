import { LucideIcon } from "lucide-react";

type Details = {
  label: string;
  icon?: LucideIcon;
};

type Props = {
  heading: string;
  details: Details[];
};

export type ViewJobHeaderProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ViewJobHeader = (props: ViewJobHeaderProps) => {
  const { heading, details } = {
    ...props,
  };
  return (
    <section id="header" className="px-[5%] bg-zinc-200">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
          {heading}
        </h1>
        <ul className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
          {details &&
            details.map((detail, index) => (
              <div key={index} className="flex">
                <div className="mr-3 flex-none">
                  {detail.icon && (
                    <detail.icon className="flex size-6 flex-col items-center justify-center" />
                  )}
                </div>
                <span className="md:text-md">{detail.label}</span>
              </div>
            ))}
        </ul>
      </div>
    </section>
  );
};
