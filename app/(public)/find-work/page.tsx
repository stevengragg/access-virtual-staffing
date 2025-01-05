import { Metadata } from "next";

import { JobListContainer } from "@/components/jobs/joblist-container";
// import { JobListHeader } from "@/components/jobs/joblist-header";

export const metadata: Metadata = {
  title: "Browse Jobs | Access Virtual Staffing",
  description:
    "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
  keywords: [
    "virtual staffing",
    "remote staffing",
    "virtual assistants",
    "Florida staffing agency",
    "remote professionals",
    "Access Virtual Staffing",
    "virtual team",
    "business solutions",
    "top staffing agency Florida",
    "virtual workforce",
    "virtual staffing agency",
    "administrative support staff",
    "data entry staff",
    "customer service staff",
    "specialized skilled staff",
    "staffing agency",
    "remote jobs",
    "virtual staffing jobs",
    "VA jobs",
    "virtual assistant jobs",
    "freelancing",
    "freelancer",
    "remote work",
    "online jobs",
    "work from home",
    "remote employment",
    "virtual job opportunities",
    "freelance jobs",
    "gig economy",
    "remote career",
    "virtual assistant services",
    "remote job listings",
    "freelance opportunities",
    "virtual employment",
    "remote job search",
    "virtual assistant positions",
    "freelance work",
    "remote job openings",
  ],
  openGraph: {
    title: "Browse Jobs | Access Virtual Staffing",
    description:
      "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
    type: "website",
    url: "https://www.accessvirtualstaffing.com/find-work",
    images: "/opengraph-image.jpg", // Use the specified image URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse Jobs | Access Virtual Staffing",
    description:
      "Explore a wide range of job opportunities with Access Virtual Staffing. Create an account, log in to your applicant portal, and apply for jobs that match your skills and career goals.",
    images: "/twitter-image.jpg", // Use the specified image URL
  },
};
export const dynamic = "force-dynamic";

export default async function Jobs() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "OAuth2 601aa5d5db72e26f74c1806c15246383",
    },
    body: JSON.stringify({
      sort_by: "created_on",
      sort_desc: true,
    }),
  };

  const data = await fetch(
    "https://api.podio.com/item/app/30011142/filter",
    options
  );

  const position = await data.json();

  const formattedData = position.items.map((item: any) => ({
    id: item.item_id,
    title:
      item.fields.find((field: any) => field.external_id === "title")?.values[0]
        ?.value || "N/A",
    url: item.link || "#",
    createdOn: item.created_on,
    postedBy: item.created_by.name,
  }));

  console.log(formattedData);

  return (
    <main className="w-full mx-auto bg-neutralLightZinc overflow-hidden">
      {/* <JobListHeader /> */}

      <JobListContainer
        heading="Current Job Openings"
        description="Find your ideal virtual job with us today."
        positions={formattedData}
      />
    </main>
  );
}
