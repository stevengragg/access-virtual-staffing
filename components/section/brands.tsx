import { ImageProps } from "@/types/general";
import Image from "next/image";
import { Star } from "lucide-react";

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Brands = (props: Logo3Props) => {
  const { heading, logos } = {
    ...Logo3Defaults,
    ...props,
  } as Props;
  return (
    <section
      id="brands"
      className="overflow-hidden py-12 md:py-16 lg:py-20 bg-robinsEggBlueLighter"
    >
      <div className="container mx-auto mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1
          className="text-center text-xl font-bold leading-[1.2] md:text-2xl lg:text-4xl md:leading-[1.2] text-black"
          data-aos="fade-up"
        >
          {heading}
        </h1>
      </div>
      {/* <div className="flex items-center pt-7 md:pt-0">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 animate-loop-horizontally items-center"
            >
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  className="mx-7 max-h-12 shrink-0 md:mx-10 md:max-h-14"
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              ))}
            </div>
          ))}
      </div> */}
      <div
        className="flex items-center pt-7 md:pt-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex justify-center w-full">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-12 h-12 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Logo3Defaults: Logo3Props = {
  heading: "Trusted by a wide range of clients & business globally",
  logos: [
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 1",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 1",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 2",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 2",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 3",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 3",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 4",
      width: 200,
      height: 56,
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 4",
      width: 200,
      height: 56,
    },
  ],
};
