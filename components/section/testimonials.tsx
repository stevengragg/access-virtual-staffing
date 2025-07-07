import { ImageProps } from "@/types/general";
import { BiSolidStar } from "react-icons/bi";
import StatsSection from "./stats-section";
import { getInitials } from "@/utils/ui";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import { ArrowRight } from "lucide-react";

type Testimonial = {
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  highlight: string;
  description: string;
  footerText: string;
  testimonials: Testimonial[];
  buttons: LinkButtonProps[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: Testimonial17Props) => {
  const { heading, highlight, description, testimonials, footerText, buttons } =
    {
      ...Testimonial17Defaults,
      ...props,
    } as Props;
  return (
    <section
      id="testimonials"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-primaryBlue"
    >
      <div className="container-xl">
        <div
          className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20"
          data-aos="fade-up"
        >
          <h2 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-white">
            {heading} <span className="text-robinsEggBlue">{highlight}</span>
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        <div
          className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 "
          data-aos-delay="100"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial, index) => {
            return (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-between border rounded-md p-6 md:p-8 bg-robinsEggBlueLighter border-zinc-700 text-center shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight"
              >
                {/* Avatar, Name, Position (row, left aligned) */}
                <div className="mb-5 md:mb-6 flex flex-row items-center w-full text-left">
                  <div className="size-12 min-h-12 min-w-12 rounded-full bg-robinsEggBlue flex items-center justify-center text-zinc-800 font-bold text-lg mr-4">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="flex flex-col text-neutralDarker">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p>
                      {testimonial.position}, {testimonial.companyName}
                    </p>
                  </div>
                </div>
                {/* Quote */}
                <blockquote className="md:text-md text-neutralDarker mb-6 text-left">
                  {testimonial.quote}
                </blockquote>
                {/* Stars */}
                <div className="mb-2 flex justify-start w-full">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <BiSolidStar
                        key={starIndex}
                        className="mr-1 size-6 text-orangeStar"
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="mt-12 flex items-center justify-center gap-4 md:mt-16"
          data-aos="fade-up"
        >
          {buttons.map((button, index) => (
            <LinkButton key={index} {...button} />
          ))}
        </div>
        <div
          className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20"
          data-aos-delay="200"
          data-aos="fade-up"
        >
          <h1 className="mb-5 text-xl font-bold md:mb-6 lg:text-4xl text-white">
            {footerText}
          </h1>
        </div>

        <div
          className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20"
          data-aos-delay="200"
          data-aos="fade-up"
        >
          <StatsSection />
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Testimonial17Props = {
  heading: "Client ",
  highlight: "Success Stories",
  description:
    "Leaders across industries are transforming their businesses with our executive-level virtual assistants.",
  footerText: "Effortless Staffing Solutions",

  testimonials: [
    {
      quote:
        "“I LOVE that Wendy is answering our calls FIRST thing in the morning. It gets busy when we open. Knowing that Wendy is fielding those calls while we tend to our customer at the register is wonderful! Wendy is great with communicating in our Microsoft Teams about her calls with our patients. The calls can be very detail oriented with compounded medications - Wendy captures it all! Staff is saying “Wendy is a lifesaver!”",
      avatar: {
        src: "/img/testimonial1.png",
        alt: "Testimonial avatar 1",
        width: 48,
        height: 48,
      },
      name: "Tracy Christian",
      position: "Owner/Pharmacist",
      companyName: "Premier Custom Pharmacy",
      numberOfStars: 5,
    },
    {
      quote:
        "“We love working with Michie. She is great at following directions on assignments, and her ability to complete assignments accurately and in a timely manner is stellar. Also, her positivity and desire to learn and grow are refreshing to work with.”",
      avatar: {
        src: "/img/testimonial2.png",
        alt: "Testimonial avatar 2",
        width: 48,
        height: 48,
      },
      name: "Kristi",
      position: "Attorney",
      companyName: "Moran Law",
      numberOfStars: 5,
    },
    {
      quote:
        '“Edrich is doing great and adding massive value to our team. Some notable accomplishments are enhancing our employee handbooks, assisting with reporting, and SOP creation. She has been a joy to work with!"',
      avatar: {
        src: "/img/testimonial3.png",
        alt: "Testimonial avatar 3",
        width: 48,
        height: 48,
      },
      name: "Sheryl",
      position: "Partner",
      companyName: "HR Consulting Firm",
      numberOfStars: 5,
    },
  ],
  buttons: [
    {
      navLink: {
        title: "Read more testimonials",
        url: "/success-stories",
        follow: false,
      },
      variant: "cta1",
      size: "xl",
      icon: () => <ArrowRight className="" />,
    },
  ],
};
