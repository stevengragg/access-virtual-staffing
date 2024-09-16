import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.accessvirtualstaffing.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://accessvirtualstaffing.com/faq",
    },
    {
      url: "https://accessvirtualstaffing.com/about-us",
    },
    {
      url: "https://accessvirtualstaffing.com/contact-us",
    },
    // {
    //   url: "https://accessvirtualstaffing.com/book-a-meeting",
    // },
    {
      url: "https://accessvirtualstaffing.com/start-hiring",
    },
    {
      url: "https://accessvirtualstaffing.com/services",
    },

    {
      url: "https://accessvirtualstaffing.com/services/basic-plan",
    },

    {
      url: "https://accessvirtualstaffing.com/services/standard-plan",
    },

    {
      url: "https://accessvirtualstaffing.com/services/specialized-services",
    },
  ];
}
