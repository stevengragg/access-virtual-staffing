import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type WhyChooseUsProps = {
  tagline: string;
  heading: string;
  description?: string;
  bulletPoints: string[];
  image: ImageProps;
  buttons: LinkButtonProps[];
};

export const WhyChooseUs = ({
  tagline,
  heading,
  description,
  bulletPoints,
  buttons,
  image,
}: WhyChooseUsProps) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-[5%] py-16 md:py-24 lg:py-28">
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-sm font-semibold text-deepBlue uppercase">
          {tagline}
        </p>
        <h2 className="text-3xl font-bold text-zinc-900 leading-tight mt-2">
          {heading}
        </h2>
        {description && <p className="text-zinc-600 mt-4">{description}</p>}

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3">
          {bulletPoints.map((item, index) => (
            <li key={index} className="flex items-center space-x-3">
              <span className="text-deepBlue">✔</span>
              <p className="text-zinc-700">{item}</p>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-full h-80 md:h-full overflow-hidden rounded-lg group">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
