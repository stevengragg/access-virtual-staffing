"use client";
import { cn } from "@/utils/ui";
import useClickableCard from "@/hooks/useClickableCard";
import Link from "next/link";
import React from "react";

import type { Post } from "@/payload-types";

import { Media } from "@/components/cms/Media";

export type CardPostData = Pick<Post, "slug" | "categories" | "meta" | "title">;

export const Card: React.FC<{
  alignItems?: "center";
  className?: string;
  doc?: CardPostData;
  relationTo?: "posts";
  showCategories?: boolean;
  title?: string;
}> = (props) => {
  const { card, link } = useClickableCard({});
  const {
    className,
    doc,
    relationTo,
    showCategories,
    title: titleFromProps,
  } = props;

  const { slug, categories, meta, title } = doc || {};
  const { description, image: metaImage } = meta || {};

  const hasCategories =
    categories && Array.isArray(categories) && categories.length > 0;
  const titleToUse = titleFromProps || title;
  const sanitizedDescription = description?.replace(/\s/g, " "); // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`;

  return (
    <article
      className={cn(
        "group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col",
        className
      )}
      ref={card.ref}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 md:h-56 lg:h-48 overflow-hidden">
        {!metaImage && (
          <div className="w-full h-full bg-gradient-to-br from-primaryBlue to-primaryBrightAqua flex items-center justify-center">
            <div className="text-white text-center p-4">
              <div className="w-12 h-12 mx-auto mb-2 opacity-50">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z"/>
                </svg>
              </div>
              <p className="text-sm font-medium">No Image Available</p>
            </div>
          </div>
        )}
        {metaImage && typeof metaImage !== "string" && (
          <Media 
            resource={metaImage} 
            size="33vw"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Categories */}
        {showCategories && hasCategories && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {categories?.map((category, index) => {
                if (typeof category === "object") {
                  const { title: titleFromCategory } = category;
                  const categoryTitle = titleFromCategory || "Untitled category";

                  return (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-semibold text-primaryBlue bg-primaryBrightAqua/10 rounded-full border border-primaryBrightAqua/20 uppercase tracking-wide"
                    >
                      {categoryTitle}
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}

        {/* Title */}
        {titleToUse && (
          <div className="mb-3 flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-neutralDarker leading-tight group-hover:text-primaryBlue transition-colors duration-300">
              <Link 
                href={href} 
                ref={link.ref}
                className="line-clamp-3 hover:text-primaryBlue"
              >
                {titleToUse}
              </Link>
            </h3>
          </div>
        )}

        {/* Description */}
        {description && (
          <div className="mt-auto">
            <p className="text-neutralDarker/70 leading-relaxed line-clamp-3 text-sm md:text-base">
              {sanitizedDescription}
            </p>
          </div>
        )}

        {/* Read More Link */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <Link 
            href={href}
            className="inline-flex items-center text-primaryBlue font-semibold text-sm hover:text-primaryBrightAqua transition-colors duration-300 group"
          >
            Read Article
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};
