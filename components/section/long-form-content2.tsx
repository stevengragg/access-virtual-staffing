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

export type LongFormContent2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const LongFormContent2 = (props: LongFormContent2Props) => {
  const { quote, author, description, description2, button, image } = {
    ...props,
  } as Props;
  return (
    <section id="long_form_content" className="px-[5%] py-4 lg:py-6">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="order-first mx-auto">
            <Image
              src={image.src}
              className="object-cover rounded-lg "
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
          <div className="order-last">
            <h1 className="mb-5 text-2xl font-bold md:mb-6 lg:text-4xl">
              {quote}
            </h1>
            <p className="text-xs lg:text-sm font-normal">{author}</p>

            <div className="mt-6 md:mt-8">
              {button && <LinkButton {...button} className="py-2 px-0" />}
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-14">
          <p className="text-md lg:text-lg font-medium">{description}</p>

          <p className="text-md lg:text-lg font-medium mt-4">{description2}</p>
        </div>
      </div>
    </section>
  );
};

// export const LongFormContent2Defaults: LongFormContent2Props = {
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
