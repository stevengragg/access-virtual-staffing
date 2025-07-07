import type { Metadata } from "next/types";

import { CollectionArchive } from "@/components/cms/CollectionArchive";
import { PageRange } from "@/components/cms/PageRange";
import { Pagination } from "@/components/cms/Pagination";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import PageClient from "./page.client";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Page() {
  const payload = await getPayload({ config: configPromise });

  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  });

  return (
    <main className="w-full mx-auto bg-primaryBlue overflow-hidden">
      <PageClient />

      <HeroHeaderWBgImg
        tagline=""
        heading="The AVS Blog"
        description="Find the latest news and insights about Virtual Staffing and
              Remote Talents."
        buttons={[]}
        image={{
          src: "/bg/resources_bg.webp",
          alt: "Resources Background",
          width: 1920,
          height: 1080,
        }}
      />

      <div className="container my-8">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
        />
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="container mb-16 md:mb-24 ">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </main>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `The Access Virtual Staffing Blog - Find the latest news and insights about Virtual Staffing and Remote Talents`,
  };
}
