import Image from "next/image";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ChevronRight } from "lucide-react";
import { ImageProps } from "@/types/general";

type Props = {
  heading: string;
  description: string;
  highlights?: {
    content: string;
    subContent: string;
  }[];
  image: ImageProps;
};

export type Header2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeroHeader2 = (props: Header2Props) => {
  const { heading, description, highlights, image } = {
    ...Header2Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="hero"
      className="grid grid-cols-1 items-center gap-y-16 pt-6 lg:grid-cols-12 lg:pt-0 bg-primaryBlue"
    >
      <div className="mx-[5%] sm:max-w-lg md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-start lg:col-span-7 text-center lg:text-left ">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl text-white">
          {heading}
        </h1>
        <p className="lg:text-base text-sm text-white">{description}</p>
        <div className="mt-6 flex gap-8 md:mt-8">
          {highlights &&
            highlights.length &&
            highlights.map((hg, index) => (
              <div key={index} className="flex flex-col gap-2 text-left">
                <h2 className="text-3xl lg:text-6xl text-white font-bold">
                  {hg.content}
                </h2>
                <p className="font-medium text-lg lg:text-xl text-white">
                  {hg.subContent}
                </p>
              </div>
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
    </section>
  );
};

export const Header2Defaults: Header2Props = {
  heading: "Leading Virtual Staffing Agency Worldwide based in Florida, USA",
  description:
    "At Access Virtual Staffing, we understand that the right talent can make all the difference. We specialize in bridging the gap between your business needs and the talent required for success. Our network across the US and worldwide, combined with our dedicated recruiters, ensures that we find virtual staff crafted to meet your specific needs—whether it’s administrative support, data entry, customer service, or specialized skills. With a focus on perfection, we tailor our services to ensure your business thrives. Together, we are Bridging Talent and Business Success, Crafted to Perfection.",
  // highlights: [
  //   {
  //     content: "50 +",
  //     subContent: "Companies Trust Us",
  //   },
  //   {
  //     content: "200 +",
  //     subContent: "Virtual Staff",
  //   },
  // ],
  image: {
    src: "/img/heroimage3.webp",
    alt: "Hero Image 2",
    width: 2000,
    height: 2000,
  },
};
