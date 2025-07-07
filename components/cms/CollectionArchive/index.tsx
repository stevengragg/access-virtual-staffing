import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@relume_io/relume-ui";

import { CardPostData } from "@/components/cms/Card";
import type { Media } from "@/payload-types";

export type Props = {
  posts: CardPostData[];
};

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props;

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {posts?.map((result, index) => {
            if (typeof result === "object" && result !== null) {
              const { slug, categories, meta, title } = result;
              const { description, image: metaImage } = meta || {};

              // Get the first category
              const category =
                categories?.[0] && typeof categories[0] !== "number"
                  ? categories[0].title
                  : "Blog";

              // Get image URL with proper type checking
              const imageUrl =
                metaImage && typeof metaImage === "object" && "url" in metaImage
                  ? (metaImage as Media).url
                  : "/blog/blog1.webp"; // Fallback image

              const imageAlt =
                metaImage && typeof metaImage === "object" && "alt" in metaImage
                  ? (metaImage as Media).alt
                  : title;

              return (
                <Link
                  key={index}
                  href={`/posts/${slug}`}
                  className="flex size-full flex-col items-center justify-start border border-deepZinc rounded-b-lg bg-softZinc hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full overflow-hidden pt-[66%]">
                    <Image
                      src={imageUrl || "/blog/blog1.webp"}
                      alt={imageAlt || title || "Blog post"}
                      className="absolute inset-0 size-full object-cover"
                      width={1000}
                      height={600}
                    />
                  </div>
                  <div className="flex w-full flex-1 flex-col px-5 py-6 md:p-6">
                    <div className="mb-4 flex items-center">
                      <p className="mr-4 bg-oceanBlue px-2 py-1 text-sm font-semibold rounded-xl text-white">
                        {category}
                      </p>
                      <p className="inline text-sm font-semibold text-zinc-600">
                        5 min read
                      </p>
                    </div>

                    <div className="flex w-full flex-col items-start justify-start">
                      <h2 className="mb-2 text-xl font-bold md:text-2xl text-zinc-900">
                        {title}
                      </h2>
                      {description && (
                        <p
                          className="text-zinc-700 mb-4 overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {description}
                        </p>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-auto flex items-center justify-center gap-x-1 rounded-lg bg-deepBlue text-white hover:bg-oceanBlue"
                      >
                        Read Full Article
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
};
