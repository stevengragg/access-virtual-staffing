import { JobListContainer } from "@/components/jobs/joblist-container";
import { JobListHeader } from "@/components/jobs/joblist-header";

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
