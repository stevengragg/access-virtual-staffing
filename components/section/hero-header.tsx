import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";

import { ImageProps } from "@/types/general";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type Header36Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeader = (props: Header36Props) => {
  const { heading, description, buttons, image } = {
    ...Header36Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="hero"
      className="bg-heroHeaderBg bg-center bg-no-repeat bg-cover"
    >
      <div className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-12 lg:pt-0 bg-primaryBlue/85  ">
        <div className="mx-[5%] sm:max-w-lg md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-start lg:col-span-7 text-center lg:text-left ">
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
            {heading}
          </h1>
          <p className="lg:text-base text-sm text-white font-semibold">
            {description}
          </p>
          <div className="mt-6 flex gap-x-2 md:mt-8">
            {buttons.map((button, index) => (
              <LinkButton key={index} {...button} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full object-fit lg:object-cover  lg:h-screen lg:max-h-[60rem]"
            width={image.width}
            height={image.height}
          />
          {/* <span className=" absolute bottom-0 px-2 text-xs">
          Photo by{" "}
          <a href="https://unsplash.com/@wocintechchat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Christina @ wocintechchat.com
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/shallow-focus-photo-of-woman-in-gray-jacket-0Zx1bDv5BNY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </span> */}
        </div>
      </div>
    </section>
  );
};

export const Header36Defaults: Header36Props = {
  heading:
    "Bridging Offshore Talent with Up to 70% Savings, Crafting Business Success to Perfection",
  description:
    "At Access Virtual Staffing, we’re not just connecting you with global talent; we’re helping your business save up to 70% in salaries and 90% in operational expenses. We craft tailored solutions that empower your business to thrive while optimizing costs. Your success is our mission, and we’re here to make it happen—seamlessly, confidently, and with a touch of care.",
  buttons: [
    {
      navLink: {
        title: "Free Strategy Call",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "light",
      size: "xl",
    },
    {
      navLink: {
        title: "Learn more",
        url: "/talent",
        follow: false,
      },
      variant: "secondary",
      size: "xl",
    },
  ],
  image: {
    src: "/img/heroimage.webp",
    alt: "Business meeting - thanks to Amy Hirschi",
    width: 2000,
    height: 2000,
  },
};
