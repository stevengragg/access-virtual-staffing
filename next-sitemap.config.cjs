const SITE_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "https://www.accessvirtualstaffing.com";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: [
    "/admin/*",
    "/api/*",
    "/_next/*",
    "/posts-sitemap.xml",
    "/pages-sitemap.xml",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/admin/*", "/api/*"],
      },
    ],
    additionalSitemaps: [
      `${SITE_URL}/pages-sitemap.xml`,
      `${SITE_URL}/posts-sitemap.xml`,
    ],
  },
  // Add static routes that aren't in CMS
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/faq"),
    await config.transform(config, "/about-us"),
    await config.transform(config, "/contact-us"),
    await config.transform(config, "/book-a-meeting"),
    await config.transform(config, "/services/basic-plan"),
    await config.transform(config, "/services/standard-plan"),
    await config.transform(config, "/services/specialized-services"),
    await config.transform(config, "/success-stories"),
    await config.transform(config, "/search"),
    await config.transform(config, "/posts"),
  ],
  // Transform function to add proper metadata
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/faq": 0.8,
      "/about-us": 0.8,
      "/contact-us": 0.8,
      "/book-a-meeting": 0.8,
      "/services/basic-plan": 0.7,
      "/services/standard-plan": 0.7,
      "/services/specialized-services": 0.7,
      "/success-stories": 0.8,
      "/search": 0.6,
      "/posts": 0.6,
    };

    const changeFrequencies = {
      "/": "monthly",
      "/faq": "monthly",
      "/about-us": "monthly",
      "/contact-us": "monthly",
      "/book-a-meeting": "monthly",
      "/services/basic-plan": "monthly",
      "/services/standard-plan": "monthly",
      "/services/specialized-services": "monthly",
      "/success-stories": "monthly",
      "/search": "weekly",
      "/posts": "daily",
    };

    return {
      loc: `${config.siteUrl}${path}`,
      changefreq: changeFrequencies[path] || "monthly",
      priority: priorities[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
