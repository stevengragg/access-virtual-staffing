import type { Metadata } from "next";
import { getServerSideURL } from "./getURL";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  description:
    "Whether you're looking for administrative support, data entry, customer service, or specialized skills - Access Virtual Staffing, Florida's top virtual staffing agency, can take care of the hiring and administrative processes so you can focus on what matters most - growing your business.",
  images: [
    {
      url: `${getServerSideURL()}/opengraph-image.jpg`,
    },
  ],
  url: "https://www.accessvirtualstaffing.com",
  siteName: "Access Virtual Staffing",
  title: "Top Virtual Staffing Agency in Florida | Access Virtual Staffing",
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
