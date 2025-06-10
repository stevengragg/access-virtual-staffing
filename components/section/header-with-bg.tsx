import LinkButton, { LinkButtonProps } from "@/components/ui/link-button";
import { ImageProps } from "@/types/general";
import Image from "next/image";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  image: ImageProps;
};

export type HeaderWithBgProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const HeaderWithBg = (props: HeaderWithBgProps) => {
  const { heading, description, buttons, tagline, image } = {
    ...HeaderWithBgDefaults,
    ...props,
  };
  return (
    <section
      id="relume"
      className="bg-heroHeaderBg bg-center bg-no-repeat bg-cover "
    >
      <div className=" bg-primaryBlue/80   ">
        <div className="container relative px-[5%] py-16 md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold text-text-alternative md:mb-4">
              {tagline}
            </p>
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  navLink={button.navLink}
                  variant={button.variant}
                  size={button.size}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          className="object-contain"
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div> */}
    </section>
  );
};

export const HeaderWithBgDefaults: Props = {
  tagline: "About Us",
  heading: "Find the Right Talent for Your Business",
  description:
    "Running a business is easier when you have the right team. At Access Virtual Staffing, we connect you with skilled professionals to help your business grow.",
  buttons: [],
  image: {
    src: "/bg/heroheaderbg.webp",
    alt: "Hero background image",
    width: 1920,
    height: 500,
  },
};
