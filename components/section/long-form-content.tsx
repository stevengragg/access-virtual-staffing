import { ImageProps } from "@/types/general";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Props = {
  quote: string;
  author: string;
  description: string;
  description2?: string;
  button?: LinkButtonProps;
  image: ImageProps;
};

export type LongFormContentProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LongFormContent = (props: LongFormContentProps) => {
  const { quote, author, description, description2, button, image } = {
    ...props,
  } as Props;
  return (
    <section
      id="long_form_content"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDark"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="relative lg:order-last w-full order-first duration-200 hover:scale-105">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="mx-auto w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full  aspect-square object-center shadow transition-transform hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
              data-aos="fade-up"
            />
          </div>
          <div className="" data-aos="fade-up" data-aos-delay="200">
            <h1 className="mb-5 text-white text-lg sm:text-xl md:text-2xl lg:text-4xl max-w-2xl mx-auto leading-relaxed text-center lg:text-left">
              {quote}
            </h1>
            <p className="text-sm sm:text-md lg:text-lg font-semibold text-white leading-relaxed text-center lg:text-left">
              {author}
            </p>

            <div className="mt-6 md:mt-8 text-center lg:text-left">
              {button && <LinkButton {...button} className="py-2 px-0" />}
            </div>
          </div>
        </div>
        <div
          className="mt-8 md:mt-12 lg:mt-14 text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
            {description}
          </p>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mt-4 px-4">
            {description2}
          </p>
        </div>
      </div>
    </section>
  );
};

// export const LongFormContentDefaults: LongFormContentProps = {
//   heading: "Medium length hero heading goes here",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
//   buttons: [
//     {
//       navLink: {
//         title: "Get Started",
//         url: "/start-hiring",
//         follow: false,
//       },
//       variant: "secondary",
//       size: "xl",
//     },
//     {
//       navLink: {
//         title: "Learn More",
//         url: "/start-hiring",
//         follow: false,
//       },
//       variant: "link2",
//       size: "xl",
//       icon: () => <ChevronRight className="text-deepZinc w-6 h-6" />,
//     },
//   ],
//   image: {
//     src: "/img/services1.webp",
//     alt: "Services Image A",
//     width: 616,
//     height: 640,
//   },
// };
