"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BiSolidStar } from "react-icons/bi";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import StatsSection from "./stats-section";

type Testimonial = {
  quote: string;
  name: string;
  position: string;
  companyName: string;
  numberOfStars: number;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type TestimonialCarouselProps =
  React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const TestimonialCarousel = (props: TestimonialCarouselProps) => {
  const { heading, description, testimonials } = {
    ...TestimonialCarouselDefaults,
    ...props,
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      id="testimonials"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDarker"
    >
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20 mx-auto w-full max-w-2xl text-center">
          <h2 className="rb-5 mb-5 text-6xl font-semibold md:mb-6 md:text-9xl  text-white">
            {heading}
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        {/* for all available options: https://www.embla-carousel.com/api/options/ */}
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="ml-0">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-[95%] pl-0 pr-6 sm:basis-[80%] md:basis-1/2 md:pr-8 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="rt-8 mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-light": current !== index + 1,
                  })}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <CarouselPrevious className="static right-0 top-0 size-12 -translate-y-0" />
              <CarouselNext className="static right-0 top-0 size-12 -translate-y-0" />
            </div>
          </div>
        </Carousel>
        <div
          className="mx-auto mt-12 w-full max-w-lg text-center md:mt-18 lg:mb-20"
          data-aos-delay="200"
          data-aos="fade-up"
        >
          <h1 className="mb-5 text-xl font-bold md:mb-6 lg:text-4xl text-white">
            Effortless Staffing Solutions
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

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border rounded-md p-6 md:p-8 bg-zinc-800 border-zinc-700 text-center shadow transition-transform duration-200 hover:scale-105 hover:shadow-[0_4px_32px_0_var(--tw-shadow-color)] hover:shadow-robinsEggBlueLight">
      {/* Stars */}
      <div className="mb-5 md:mb-6 flex justify-start w-full">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <BiSolidStar
              key={starIndex}
              className="mr-1 size-6 text-orangeStar"
            />
          ))}
      </div>
      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-white mb-6 text-left leading-relaxed">
        {testimonial.quote}
      </blockquote>
      {/* Name and Position */}
      <div className="mt-5 flex w-full flex-col items-start text-left">
        <p className="font-semibold text-white text-lg">{testimonial.name}</p>
        <p className="text-white">
          {testimonial.position}, {testimonial.companyName}
        </p>
      </div>
    </div>
  );
};

const testimonial1 = {
  quote:
    "I LOVE that Wendy is answering our calls FIRST thing in the morning. It gets busy when we open. Knowing that Wendy is fielding those calls while we tend to our customer at the register is wonderful! Wendy is great with communicating in our Microsoft Teams about her calls with our patients. The calls can be very detail oriented with compounded medications - Wendy captures it all! Staff is saying 'Wendy is a lifesaver!'",
  name: "Tracy Christian",
  position: "Owner/Pharmacist",
  companyName: "Premier Custom Pharmacy",
  numberOfStars: 5,
};

const testimonial2 = {
  quote:
    "We love working with Michie. She is great at following directions on assignments, and her ability to complete assignments accurately and in a timely manner is stellar. Also, her positivity and desire to learn and grow are refreshing to work with.",
  name: "Kristi",
  position: "Attorney",
  companyName: "Moran Law",
  numberOfStars: 5,
};

const testimonial3 = {
  quote:
    "Edrich is doing great and adding massive value to our team. Some notable accomplishments are enhancing our employee handbooks, assisting with reporting, and SOP creation. She has been a joy to work with!",
  name: "Sheryl",
  position: "Partner",
  companyName: "HR Consulting Firm",
  numberOfStars: 5,
};
const testimonial4 = {
  quote:
    "It has been so great to have Noreen on our team, she has been a breath of fresh air in supporting all the little things that I need to get done as the founder of this business. Not only has she done great work, she has also embraced her inner creativity to enhance how we are leveraging our tools and optimizing processes and workflows. She has delivered massively for our team and is truly a blessing.",
  name: "Terri Moy",
  position: "Owner/Founder",
  companyName: "Favored Events",
  numberOfStars: 5,
};
const testimonial5 = {
  quote:
    "Wobby has been a phenomenal video editor, he has picked up our systems quickly, is handling a big workload, and has allowed me to take back more of my time for more important strategic focus as we grow and scale our business. We can clearly see how easily we can save over $250k by leveraging virtual assistants as we build Snack.io.",
  name: "Danny Cruden",
  position: "Founder",
  companyName: "Snack.io",
  numberOfStars: 5,
};
export const TestimonialCarouselDefaults: Props = {
  heading: "SEE WHAT OUR CLIENTS ARE SAYING ABOUT US",
  description:
    "We transformed the business operations of our clients significantly. We got receipts of how well we do our job. ",
  testimonials: [
    testimonial1,
    testimonial2,
    testimonial3,
    testimonial4,
    testimonial5,
  ],
};
