import { VideoIframe } from "@relume_io/relume-ui";
import { Dialog, DialogContent, DialogTrigger } from "@relume_io/relume-ui";
import { FaCirclePlay } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ImageProps } from "@/types/general";

type Props = {
  heading: string;
  description: string;
  buttons: LinkButtonProps[];
  video1: string;
  video2: string;
  image1: ImageProps;
  image2: ImageProps;
};

export type TestimonialFeaturedProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const TestimonialFeatured = (props: TestimonialFeaturedProps) => {
  const { heading, description, buttons, image1, video1, image2, video2 } = {
    ...TestimonialFeaturedDefaults,
    ...props,
  };
  return (
    <section
      id="featured"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter"
    >
      <div className="container-xl">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex flex-col items-center justify-start">
                <h2
                  className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-neutralDarker"
                  data-aos="fade-up"
                >
                  {heading}
                </h2>
                <p
                  className="text-neutralDarker text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
                  data-aos="fade-up"
                >
                  {description}
                </p>
              </div>
            </div>
          </div>
          <Dialog>
            <DialogTrigger
              className="relative flex items-center justify-center rounded-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src={image1.src}
                alt={image1.alt}
                width={image1.width}
                height={image1.height}
                className="size-1/2 object-cover rounded-md"
              />
              <span className="absolute inset-0 z-10 bg-black/50 rounded-md" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video={video1} />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger
              className="relative flex items-center justify-center rounded-md mt-12 md:mt-24"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src={image2.src}
                alt={image2.alt}
                width={image2.width}
                height={image2.height}
                className="size-1/2 object-cover rounded-md"
              />
              <span className="absolute inset-0 z-10 bg-black/50 rounded-md" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video={video2} />
            </DialogContent>
          </Dialog>
        </div>
        <div
          className="mt-6 flex items-center justify-center gap-4 md:mt-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialFeaturedDefaults: Props = {
  heading: "GET TO KNOW US, LIKE US, AND TRUST US",
  description:
    "Our streamlined process ensures that you get the right virtual staff quickly and effortlessly.",
  buttons: [
    {
      navLink: {
        title: "Start Hiring your VA today",
        url: "/book-a-meeting",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
  image1: {
    src: "/img/Client_Testimonial1.jpg",
    alt: "Thumbnail of the video",
    width: 1000,
    height: 1000,
  },
  image2: {
    src: "/img/Client_Testimonial2.jpg",
    alt: "Thumbnail of the video",
    width: 1000,
    height: 1000,
  },
  video1:
    "https://player.cloudinary.com/embed/?cloud_name=dlzwxjgup&public_id=avs_assets%2Ftestimonials%2FTERRY_TESTIMONIAL_fd6cou&player[autoplay]=true",
  video2:
    "https://player.cloudinary.com/embed/?cloud_name=dlzwxjgup&public_id=avs_assets%2Ftestimonials%2FTESTIMONIAL_02-06-25_mavrts&player[autoplay]=true",
};
