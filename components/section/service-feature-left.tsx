import Image from "next/image";

import { ImageProps } from "@/types/general";
import React from "react";

type FeaturesProps = {
  icon: React.JSX.Element;
  paragraph: string;
};

type Props = {
  hyperlink?: string;
  tagline: string;
  heading: string;
  description: string;
  image: ImageProps;
  features: FeaturesProps[];
};

export type ServiceFeatureLeftProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const ServiceFeatureLeft = (props: ServiceFeatureLeftProps) => {
  const { tagline, heading, description, image, features, hyperlink } = props;

  return (
    <section
      id={hyperlink ?? "feature"}
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDark"
    >
      <div className="container">
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
            className="order-1 md:order-2 text-white w-full"
            data-aos="fade-up"
          >
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h2 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h2>
            <p className="mb-5 md:mb-6 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
              {description}
            </p>
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
            <p className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
              and many more...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
