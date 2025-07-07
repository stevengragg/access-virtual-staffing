import type { Metadata } from "next/types";

import { CollectionArchive } from "@/components/cms/CollectionArchive";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import Link from "next/link";
import { Search } from "@/search/Component";
import PageClient from "./page.client";
import { CardPostData } from "@/components/cms/Card";
import { HeroHeaderWBgImg } from "@/components/section/hero-header-short-w-bg-img";
import LinkButton from "@/components/ui/link-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Args = {
  searchParams: Promise<{
    q: string;
  }>;
};
export default async function Page({
  searchParams: searchParamsPromise,
}: Args) {
  const { q: query } = await searchParamsPromise;
  const payload = await getPayload({ config: configPromise });

  const posts = await payload.find({
    collection: "search",
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    // pagination: false reduces overhead if you don't need totalDocs
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                "meta.description": {
                  like: query,
                },
              },
              {
                "meta.title": {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
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
      <div className="container my-8 px-2">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16 text-white">Search</h1>

          <div className="max-w-2xl mx-auto">
            <Search />
          </div>
        </div>
      </div>

      {posts.totalDocs > 0 ? (
        <CollectionArchive posts={posts.docs as CardPostData[]} />
      ) : (
        <div className="container mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-neutralZinc"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutralDarker mb-4">
                No Results Found
              </h3>
              <p className="text-lg text-neutralBase mb-6">
                We couldn&apos;t find any posts matching your search
                {query && (
                  <span className="font-semibold text-neutralDarker">
                    {" "}
                    &ldquo;{query}&rdquo;
                  </span>
                )}
                . Try adjusting your search terms or browse our latest posts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LinkButton
                  navLink={{
                    title: "Browse All Posts",
                    url: "/posts",
                    follow: false,
                  }}
                  variant="primary"
                  size="lg"
                />
                <Link
                  href="/search"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg",
                    }),
                    "rounded-full"
                  )}
                >
                  Clear Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: `Search for Posts - Access Virtual Staffing`,
  };
}
