import type { Metadata } from "next/types";
import { notFound } from "next/navigation";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";

import { CollectionArchive } from "@/components/cms/CollectionArchive";
import { PageRange } from "@/components/cms/PageRange";
import { Pagination } from "@/components/cms/Pagination";
import PageClient from "./page.client";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";

export const revalidate = 600;

type Args = {
  params: Promise<{
    pageNumber: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise;
  const payload = await getPayload({ config: configPromise });

  const sanitizedPageNumber = Number(pageNumber);

  if (!Number.isInteger(sanitizedPageNumber)) notFound();

  const posts = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
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

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise;
  return {
    title: `Access Virtual Staffing Posts Page ${pageNumber || ""}`,
  };
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const { totalDocs } = await payload.count({
    collection: "posts",
    overrideAccess: false,
  });

  const totalPages = Math.ceil(totalDocs / 10);

  const pages: { pageNumber: string }[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) });
  }

  return pages;
}
