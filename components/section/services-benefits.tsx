import Image from "next/image";

import { ImageProps } from "@/types/general";
import React from "react";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type FeaturesProps = {
  icon: React.JSX.Element;
  paragraph: string;
};

type Props = {
  hyperlink?: string;
  highlight?: string;
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps;
  features: FeaturesProps[];
  button: LinkButtonProps;
};

export type ServicesBenefitsProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesBenefits = (props: ServicesBenefitsProps) => {
  const {
    tagline,
    heading,
    description,
    image,
    features,
    hyperlink,
    button,
    highlight,
  } = props;

  return (
    <section
      id={hyperlink ?? "feature"}
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1" data-aos="fade-up">
            {image && (
              <Image
                src={image.src}
                className="w-full object-cover aspect-square rounded-lg shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            )}
          </div>
          <div
            className="order-1 md:order-2 text-neutralDarker w-full"
            data-aos="fade-up"
          >
            {tagline && (
              <p className="mb-3 font-semibold md:mb-4 text-robinsEggBlue text-base md:text-lg">
                {tagline}
              </p>
            )}
            <h2 className="mb-4 md:mb-5 text-4xl md:text-6xl lg:text-9xl xl:text-10xl font-semibold  leading-tight">
              {heading}{" "}
              {highlight && (
                <span className="text-robinsEggBlue">{highlight}</span>
              )}
            </h2>
            {description && (
              <p className=" text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            )}
            <div className="grid grid-cols-1 gap-4 py-2">
              {features &&
                features.map((feature, index) => (
                  <div key={index} className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      {feature.icon}
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-2xl  leading-relaxed font-semibold">
                      {feature.paragraph}
                    </p>
                  </div>
                ))}
            </div>

            {button && (
              <div className="mt-8 md:mt-12 lg:mt-16  " data-aos="fade-up">
                <LinkButton {...button} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
