import axios from "axios";
import { gainRefreshedAccessToken } from "./authorization";

export interface JobListing {
  id: string;
  url: string;
  title: string;
  pay?: string;
  createdAt: string;
  postedBy: string;
}

interface FetchJobListingsResponse {
  success: boolean;
  items: JobListing[];
  total: number;
}

type FetchJobListingsConfig = {
  sort_by: string;
  sort_desc: boolean;
  filters?: Record<string, any>;
  limit?: number;
  offset?: number;
  remember?: boolean;
};

export const fetchJobListings = async (
  accessToken: string,
  appId: string,
  config?: FetchJobListingsConfig
): Promise<FetchJobListingsResponse> => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `OAuth2 ${accessToken || "invalid"}`,
    },
    body: JSON.stringify(config),
  };

  const url = `https://api.podio.com/item/app/${appId || "invalid"}/filter`;

  const response: any = await fetch(url, options);

  if (response?.error === "unauthorized") {
    console.log("Request unauthorized - please gain new access token");
    return {
      success: false,
      items: [],
      total: 0,
    };
  }

  const position = await response.json();
  console.log(`There are ${position.items?.length} jobs`);

  const formattedData = position.items.map((item: any) => {
    const title =
      item.fields.find((field: any) => field.external_id === "title")?.values[0]
        ?.value || "N/A";

    const estimatedSalary = item.fields.find(
      (field: any) => field.external_id === "estimated-salary"
    )?.values[0];
    return {
      id: item.item_id,
      title,
      pay: `${estimatedSalary.currency} ${parseFloat(
        estimatedSalary.value
      ).toFixed(2)} / hr`,
      url: "https://podio.com/webforms/29994876/2499223",
      createdOn: item.created_on,
      postedBy: item.created_by.name,
    };
  });

  return {
    success: true,
    items: formattedData,
    total: formattedData.length,
  };
};

export const getJobs = async (
  config: FetchJobListingsConfig
): Promise<FetchJobListingsResponse | null> => {
  const newAccessToken = await gainRefreshedAccessToken();

  if (!newAccessToken) {
    return null;
  }

  return fetchJobListings(newAccessToken, "30011142", config);
};
