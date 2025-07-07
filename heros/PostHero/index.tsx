import { formatDateTime } from "@/utils/formatDateTime";
import React from "react";

import type { Post } from "@/payload-types";

import { Media } from "@/components/cms/Media";
import { formatAuthors } from "@/utils/formatAuthors";

export const PostHero: React.FC<{
  post: Post;
}> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post;

  const hasAuthors =
    populatedAuthors &&
    populatedAuthors.length > 0 &&
    formatAuthors(populatedAuthors) !== "";

  return (
    <div className="relative -mt-[10.4rem] flex items-end min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImage && typeof heroImage !== "string" && (
          <Media
            fill
            priority
            imgClassName="object-cover w-full h-full"
            resource={heroImage}
          />
        )}
        {/* Dark Overlays for Better Text Contrast */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-primaryBlue/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-[5%] py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="container max-w-4xl mx-auto text-white pt-20 md:pt-24 lg:pt-28">
          {/* Categories */}
          {categories && categories.length > 0 && (
            <div className="mb-6 md:mb-8">
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base font-medium uppercase tracking-wider">
                {categories.map((category, index) => {
                  if (typeof category === "object" && category !== null) {
                    const { title: categoryTitle } = category;
                    const titleToUse = categoryTitle || "Untitled category";
                    const isLast = index === categories.length - 1;

                    return (
                      <React.Fragment key={index}>
                        <span className="px-3 py-1 bg-primaryBrightAqua/20 backdrop-blur-sm rounded-full border border-primaryBrightAqua/30">
                          {titleToUse}
                        </span>
                        {!isLast && (
                          <span className="text-primaryBrightAqua">•</span>
                        )}
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          )}

          {/* Title */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight">
              {title}
            </h1>
          </div>

          {/* Author and Date */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 text-white/90">
            {hasAuthors && (
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-medium text-primaryBrightAqua uppercase tracking-wide">
                  Author
                </p>
                <p className="text-base md:text-lg font-semibold">
                  {formatAuthors(populatedAuthors)}
                </p>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-2">
                <p className="text-sm md:text-base font-medium text-primaryBrightAqua uppercase tracking-wide">
                  Published
                </p>
                <time
                  dateTime={publishedAt}
                  className="text-base md:text-lg font-semibold"
                >
                  {formatDateTime(publishedAt)}
                </time>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
