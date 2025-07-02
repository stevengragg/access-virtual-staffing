import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import LinkButton, { LinkButtonProps } from "../ui/link-button";
import Image from "next/image";
import { ImageProps } from "@/types/general";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Post } from "@/payload-types";

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

export const BlogContainer = async (props: Blog44Props) => {
  const { heading, description, button } = {
    ...Blog44Defaults,
    ...props,
  } as Props;

  // Fetch latest 3 posts from Payload CMS
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 3,
    sort: "-createdAt",
    overrideAccess: false,
  });

  // Transform Payload posts to match BlogPost type
  const blogPosts = posts.docs.map((post: Post) => ({
    url: `/posts/${post.slug}`,
    image: {
      src:
        post.meta?.image && typeof post.meta.image !== "number"
          ? post.meta.image.url
          : "/blog/blog1.webp", // Fallback image if none provided
      alt:
        post.meta?.image && typeof post.meta.image !== "number"
          ? post.meta.image.alt
          : post.title,
      width: 1000,
      height: 1000,
    },
    category:
      post.categories?.[0] && typeof post.categories[0] !== "number"
        ? post.categories[0].title
        : "Blog",
    readTime: "5 min read", // You might want to calculate this based on content length
    title: post.title,
    description: post.meta?.description || "",
  }));

  return (
    <section
      id="blog"
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-neutralDarker"
    >
      <div className="container-xl">
        <div className="mb-12 grid grid-cols-1 items-start justify-start gap-y-8 md:mb-18 md:grid-cols-[1fr_max-content] md:items-end md:justify-between md:gap-x-12 md:gap-y-4 lg:mb-20 lg:gap-x-20">
          <div className="w-full max-w-lg" data-aos="fade-up">
            <h1 className="mb-5 text-6xl font-semibold md:mb-6 md:text-9xl lg:text-10xl text-white">
              {heading}
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              className="flex size-full flex-col items-center justify-start border border-deepZinc rounded-b-lg bg-softZinc"
            >
              <div className="relative w-full overflow-hidden pt-[66%]">
                <Image
                  src={post.image.src || ""}
                  alt={post.image.alt || ""}
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
                    variant="ghost"
                    size="sm"
                    className="mt-6 flex items-center justify-center gap-x-1 rounded-lg bg-deepBlue text-white "
                  >
                    Click to View post
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center" data-aos="fade-up">
          <LinkButton {...button} />
        </div>
      </div>
    </section>
  );
};

export const Blog44Defaults: Blog44Props = {
  heading: "The AVS Blog",
  description:
    "Stay informed with our insightful blog posts and helpful links.",
  button: {
    navLink: {
      title: "Read more insights",
      url: "/posts",
      follow: false,
    },
    variant: "secondary",
    size: "xl",
  },
  blogPosts: [], // This will be populated from Payload CMS
};
