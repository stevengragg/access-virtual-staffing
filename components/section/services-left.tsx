import { ImageProps } from "@/types/general";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  button?: LinkButtonProps;
  image: ImageProps;
};

export type ServicesLeftProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const ServicesLeft = (props: ServicesLeftProps) => {
  const { heading, description, button, image } = {
    ...props,
  } as Props;
  return (
    <section
      id="services_left"
      className="bg-neutralDarker px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="mb-5 text-4xl font-semibold md:mb-6 md:text-6xl lg:text-8xl text-white">
              {heading}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed">
              {description}
            </p>
            <div className="mt-6 md:mt-8">
              {button && <LinkButton {...button} />}
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Image
              src={image.src}
              className="w-full object-cover rounded-lg hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight transition-all duration-300 ease-in-out transform cursor-pointer"
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// export const ServicesLeftDefaults: ServicesLeftProps = {
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
