import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

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
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
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
              <div className="flex w-full flex-1 flex-col justify-between px-5 py-6 md:p-6">
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
  heading: "Discover Our Latest Blogs",
  description: "Stay informed with our insightful blog posts.",
  button: {
    navLink: {
      title: "View all at Blogger.com",
      url: "https://accessvirtualstaffing.blogspot.com/",
      follow: true,
    },
    variant: "secondary",
    size: "lg",
  },
  blogPosts: [
    {
      url: "#",
      image: {
        src: "/img/blogimg.png",
        alt: "Placeholder image 1",
        width: 1000,
        height: 1000,
      },
      category: "Business",
      readTime: "5 min read",
      title: "The Power of Virtual Staffing",
      description: "Discover how virtual staffing can transform your business.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "/img/blogimg.png",
        alt: "Placeholder image 2",
        width: 1000,
        height: 1000,
      },
      category: "Productivity",
      readTime: "5 min read",
      title: "Boost Your Productivity",
      description:
        "Learn how virtual staffing can help you achieve more in less time.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      url: "#",
      image: {
        src: "/img/blogimg.png",
        alt: "Placeholder image 3",
        width: 1000,
        height: 1000,
      },
      category: "Remote",
      readTime: "5 min read",
      title: "The Future of Remote Work",
      description:
        "Discover the benefits and challenges of remote work in today's world.",
      button: {
        title: "Read more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
