import { ImageProps } from "@/types/general";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
  highlight?: string;
};

export type HeroHeaderWBgImg2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeaderWBgImg2 = (props: HeroHeaderWBgImg2Props) => {
  const { tagline, heading, description, buttons, image, highlight } = props;
  return (
    <section id="hero" className="relative px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container relative z-10 max-w-4xl text-center">
        <p
          className="mb-3 font-semibold text-text-alternative md:mb-4"
          data-aos="fade-up"
        >
          {tagline}
        </p>
        <h1
          className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-11xl"
          data-aos="fade-up"
        >
          {heading}
        </h1>
        <h1
          className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-11xl"
          data-aos="fade-up"
        >
          <span className="text-robinsEggBlue">{highlight}</span>
        </h1>
        <div
          className="text-lg md:text-xl lg:text-2xl text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description &&
            description?.split(/[.!?]+/).map((sentence, index) => {
              const trimmedSentence = sentence.trim();
              if (!trimmedSentence) return null;
              return (
                <p key={index} className="mb-2 last:mb-0">
                  {trimmedSentence}
                  {index < description.split(/[.!?]+/).length - 2 ? "." : ""}
                </p>
              );
            })}
        </div>
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8"
          data-aos="fade-up"
        >
          {buttons &&
            buttons.map((button: LinkButtonProps, index: number) => (
              <LinkButton key={index} {...button} />
            ))}
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {image && (
          <Image
            src={image.src}
            className="size-full object-cover"
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/50 " />
      </div>
    </section>
  );
};
