import type { Metadata } from "next";

import { RelatedPosts } from "@/blocks/RelatedPosts/Component";
import { PayloadRedirects } from "@/components/cms/PayloadRedirects";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import React, { cache } from "react";
import RichText from "@/components/cms/RichText";

import type { Post } from "@/payload-types";

import { PostHero } from "@/heros/PostHero";
import { generateMeta } from "@/utils/generateMeta";
import PageClient from "./page.client";
import { LivePreviewListener } from "@/components/cms/LivePreviewListener";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const posts = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  const params = posts.docs.map(({ slug }) => {
    return { slug };
  });

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = "" } = await paramsPromise;
  const url = "/posts/" + slug;
  const post = await queryPostBySlug({ slug });

  if (!post) return <PayloadRedirects url={url} />;

  return (
    <article className="min-h-screen bg-white">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      {/* Main Content Section */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
        <div className="container max-w-4xl mx-auto">
          <RichText
            className="prose prose-lg md:prose-xl lg:prose-2xl max-w-none mx-auto leading-relaxed"
            data={post.content}
            enableGutter={false}
            enableProse={true}
          />
        </div>
      </section>

      {/* Related Posts Section */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-robinsEggBlueLighter">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutralDarker mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-neutralDarker/80 max-w-2xl mx-auto">
                Discover more insights and expert perspectives on virtual
                staffing
              </p>
            </div>
            <RelatedPosts
              docs={post.relatedPosts.filter(
                (post) => typeof post === "object"
              )}
            />
          </div>
        </section>
      )}
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const post = await queryPostBySlug({ slug });

  return generateMeta({ doc: post });
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();

  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "posts",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs?.[0] || null;
});
