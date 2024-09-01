import { ImageProps } from "@/types/general";
import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";

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

  testimonials: Testimonial[];
};

export type Testimonial17Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonials = (props: Testimonial17Props) => {
  const { heading, testimonials } = {
    ...Testimonial17Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-softGray">
      <div className="container-xl">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20 bg-gre">
          <h1 className="mb-5 text-xl font-bold md:mb-6 lg:text-4xl">
            {heading}
          </h1>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex w-full flex-col items-start justify-between border border-deepZinc rounded-md p-6 md:p-8"
            >
              <div className="mb-5 md:mb-6">
                <div className="mb-6 flex">
                  {Array(testimonial.numberOfStars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <BiSolidStar
                        key={starIndex}
                        className="mr-1 size-6 text-orangeStar"
                      />
                    ))}
                </div>
                <blockquote className="md:text-md">
                  {testimonial.quote}
                </blockquote>
              </div>
              <div className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center">
                <Image
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt}
                  width={testimonial.avatar.width}
                  height={testimonial.avatar.height}
                  className="mb-4 mr-0 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p>
                    {testimonial.position}, {testimonial.companyName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial17Defaults: Testimonial17Props = {
  heading: "Our Satisfied Clients Say About Us",

  testimonials: [
    {
      quote:
        '"Access Virtual Staffing has been instrumental in helping us find top-tier talent. Their personalized approach and efficiency have exceeded our ...."',
      avatar: {
        src: "/img/avatar1.png",
        alt: "Testimonial avatar 1",
        width: 48,
        height: 48,
      },
      name: "John Doe",
      position: "CEO",
      companyName: "XYZ Company",
      numberOfStars: 5,
    },
    {
      quote:
        '"Working with Access Virtual Staffing has been a game-changer for our company. The quality of talent they provide is unmatched."',
      avatar: {
        src: "/img/avatar2.png",
        alt: "Testimonial avatar 2",
        width: 48,
        height: 48,
      },
      name: "Jane Smith",
      position: "Marketing Manager",
      companyName: "ABC Inc.",
      numberOfStars: 4,
    },
    {
      quote:
        '"Access Virtual Staffing has truly transformed our business. Their professionalism and dedication have made a significant impact."',
      avatar: {
        src: "/img/avatar3.png",
        alt: "Testimonial avatar 3",
        width: 48,
        height: 48,
      },
      name: "Mark Johnson",
      position: "COO",
      companyName: "XYZ Corporation ",
      numberOfStars: 5,
    },
  ],
};
