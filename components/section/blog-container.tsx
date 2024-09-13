import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";
import { ImageProps } from "@/types/general";

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  button: LinkButtonProps;
  blogPosts: BlogPost[];
};

export type Blog44Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const BlogContainer = (props: Blog44Props) => {
  const { heading, description, button, blogPosts } = {
    ...Blog44Defaults,
    ...props,
  } as Props;
  return (
    <section id="blog_list" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg">
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className="flex size-full flex-col items-center justify-start border border-deepZinc rounded-b-lg bg-softGray"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  className="absolute inset-0 size-full object-cover"
                  width={post.image.width}
                  height={post.image.height}
                />
              </div>
              <div className="flex w-full flex-1 flex-col  px-5 py-6 md:p-6">
                <div className="mb-4 flex items-center">
                  <p className="mr-4 bg-oceanBlue px-2 py-1 text-sm font-semibold rounded-xl text-white">
                    {post.category}
                  </p>
                  <p className="inline text-sm font-semibold">
                    {post.readTime}
                  </p>
                </div>

                <div className="flex w-full flex-col items-start justify-start">
                  <h2 className="mb-2 text-xl font-bold md:text-2xl">
                    {post.title}
                  </h2>
                  <p>{post.description}</p>
                  <Button
                    variant={post.button.variant}
                    size={post.button.size}
                    iconRight={post.button.iconRight}
                    iconLeft={post.button.iconLeft}
                    className="mt-6 flex items-center justify-center gap-x-1"
                  >
                    {post.button.title}
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <LinkButton {...button} />
        </div>
      </div>
    </section>
  );
};

export const Blog44Defaults: Blog44Props = {
  heading: "Trends and Insights",
  description:
    "Stay informed with our insightful blog posts and helpful links.",
  button: {
    navLink: {
      title: "Read more insights",
      url: "https://accessvirtualstaffing.blogspot.com/",
      follow: true,
    },
    variant: "secondary",
    size: "lg",
  },
  blogPosts: [
    {
      url: "https://accessvirtualstaffing.blogspot.com/2024/09/how-virtual-staffing-supercharged.html",
      image: {
        src: "/blog/blog1.webp",
        alt: "Blog 1 Image",
        width: 1000,
        height: 1000,
      },
      category: "Virtual Staffing",
      readTime: "5 min read",
      title:
        "How Virtual Staffing Supercharged Access Insurance Underwriting: Our Transformation Story",
      description:
        "Access Insurance Underwriting, led by CEO Phil Wardell, transformed their business with virtual staffing, cutting costs, boosting efficiency, and driving unexpected growth. Here’s the full story.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://accessvirtualstaffing.blogspot.com/2024/09/why-virtual-staffing-is-key-to-growing.html",
      image: {
        src: "/blog/blog2.webp",
        alt: "Blog 2 image",
        width: 1000,
        height: 1000,
      },
      category: "Business",
      readTime: "5 min read",
      title: "Why Virtual Staffing is Key to Growing Your Business in Florida",
      description:
        "Virtual staffing, particularly through Access Virtual Staffing's bilingual team, enables Florida businesses to cut overhead costs and strategically expand by reaching a broader, diverse audience. Read the full article.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "https://accessvirtualstaffing.blogspot.com/2024/09/why-philippines-is-go-to-hub-for.html",
      image: {
        src: "/blog/blog3.webp",
        alt: "Blog image 3",
        width: 1000,
        height: 1000,
      },
      category: "Virtual Staffing",
      readTime: "5 min read",
      title: "Why the Philippines Is the Go-To Hub for Offshore Virtual Staff",
      description:
        "Have you ever wondered why so many companies are tapping into the virtual talent pool in the Philippines?. Here’s the full story.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
