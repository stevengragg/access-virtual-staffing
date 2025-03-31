import Image from "next/image";
import { ImageProps } from "@/types/general";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type CtaFooterJobseekerProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CtaFooterJobseeker = (props: CtaFooterJobseekerProps) => {
  const { heading, description, buttons, image } = {
    ...props,
  } as Props;

  return (
    <section
      id="cta_footer"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-800 overflow-hidden"
    >
      {/* Background Image (inside section) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative container text-center max-w-xl z-10">
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
