import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { ImageProps } from "@/types/general";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

type FeaturesProps = {
  icon: React.JSX.Element;
  paragraph: string;
};

type Card = {
  heading: string;
  description: string;

  link: string;
  features?: FeaturesProps[];
};

type Props = {
  tagline?: string;
  heading: string;
  highlight?: string;
  description?: string;
  cards: Card[];
  button?: LinkButtonProps;
};

export type AllPlansProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const AllPlans = (props: AllPlansProps) => {
  const { tagline, heading, highlight, description, cards, button } =
    props as Props;
  return (
    <section id="feature_list" className="bg-primaryBlue py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          {tagline && (
            <p className="mb-3 font-semibold md:mb-4 text-robinsEggBlue text-base md:text-lg">
              {tagline}
            </p>
          )}
          <h2 className="mb-4 md:mb-5 text-4xl md:text-6xl lg:text-9xl xl:text-10xl font-semibold text-white leading-tight">
            {heading}{" "}
            {highlight && (
              <span className="text-robinsEggBlue">{highlight}</span>
            )}
          </h2>
          {description && (
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {/* Cards Grid */}
        <div
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
          data-aos="fade-up"
        >
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        {button && (
          <div
            className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-center gap-4 px-4"
            data-aos="fade-up"
          >
            <LinkButton {...button} />
          </div>
        )}
      </div>
    </section>
  );
};

const Card = (card: Card) => {
  return (
    <div className="flex flex-col h-full bg-robinsEggBlueLighter border border-zinc-800 rounded-lg p-6 md:p-8 text-center hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight transition-all duration-300 ease-in-out transform">
      <div className="flex flex-col flex-1 space-y-4 md:space-y-6">
        {/* Image Container - Fixed height for consistency */}

        {/* Content Container - Flexible height */}
        <div className="flex flex-col flex-1 space-y-3 md:space-y-4">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-robinsEggBlue underline">
            {card.heading}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-neutralDarker leading-relaxed flex-1">
            {card.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:gap-4 py-2">
          {card.features &&
            card.features.map((feature, index) => (
              <div key={index} className="flex flex-row  gap-3 md:gap-4">
                <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                <p className=" text-left text-sm md:text-base lg:text-lg leading-relaxed font-medium text-neutralDarker break-words">
                  {feature.paragraph}
                </p>
              </div>
            ))}
        </div>

        {/* Button Container - Fixed at bottom */}
        <div className="pt-2 md:pt-4">
          <LinkButton
            navLink={{
              title: "Learn more",
              url: card.link,
              follow: false,
            }}
            variant="outline"
            size="default"
            icon={() => <ChevronRight className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
};
