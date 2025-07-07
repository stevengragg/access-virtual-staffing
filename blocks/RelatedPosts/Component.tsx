import clsx from "clsx";
import React from "react";
import RichText from "@/components/cms/RichText";

import type { Post } from "@/payload-types";

import { Card } from "@/components/cms/Card";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export type RelatedPostsProps = {
  className?: string;
  docs?: Post[];
  introContent?: SerializedEditorState;
};

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props;

  return (
    <div className={clsx("w-full", className)}>
      {introContent && (
        <div className="mb-12 text-center">
          <RichText data={introContent} enableGutter={false} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {docs?.map((doc, index) => {
          if (typeof doc === "string") return null;

          return (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Card
                doc={doc}
                relationTo="posts"
                showCategories
                className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-xl overflow-hidden"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
