import { ImageProps } from "@/types/general";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type HeroHeaderWBgImgProps = React.ComponentPropsWithoutRef<"section"> &
  Props;

export const HeroHeaderWBgImg = (props: HeroHeaderWBgImgProps) => {
  const { heading, description, buttons, tagline, image } = props;
  return (
    <section id="hero" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-2xl">
          <p
            className="mb-3 font-semibold text-white md:mb-4"
            data-aos="fade-up"
          >
            {tagline}
          </p>
          <h1
            className="mb-5 text-6xl font-semibold md:text-9xl lg:text-11xl text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {heading}
          </h1>
          <div
            className="text-lg md:text-xl lg:text-2xl text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {description.split(/[.!?]+/).map((sentence, index) => {
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
            className="mt-6 flex flex-wrap gap-4 md:mt-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {buttons &&
              buttons.map((button: LinkButtonProps, index: number) => (
                <LinkButton key={index} {...button} />
              ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};
