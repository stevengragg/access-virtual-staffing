import { gainRefreshedAccessToken } from "./authorization";
import { JobListing } from "@/types/general";

interface FetchJobListingsResponse {
  success: boolean;
  items: JobListing[];
  total: number; //filtered
  all: number; // all total
}

type FetchJobListingsConfig = {
  sort_by: string;
  sort_desc: boolean;
  filters?: Record<string, any>;
  limit?: number;
  offset?: number;
  remember?: boolean;
};

interface FetchJobResponse {
  success: boolean;
  item: JobListing | null;
}

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
      all: 0,
    };
  }

  const data = await response.json();
  console.log(`There are ${data?.items?.length} jobs`);

  const formattedData = data?.items?.map((item: any) => {
    const title =
      item.fields.find((field: any) => field.external_id === "title")?.values[0]
        ?.value || "N/A";

    const estimatedSalary = item.fields.find(
      (field: any) => field.external_id === "estimated-salary"
    )?.values[0];
    console.log(estimatedSalary);
    return {
      id: item.app_item_id,
      title,
      pay: estimatedSalary
        ? `${estimatedSalary.currency} ${parseFloat(
            estimatedSalary.value
          ).toFixed(2)} / hr`
        : "Not provided",
      url: `/find-work/${item.app_item_id}`,
      //"https://podio.com/webforms/29994876/2499223"
      createdAt: item.created_on,
      postedBy: item.created_by.name,
    };
  });

  return {
    success: true,
    items: formattedData,
    total: data?.filtered || 0,
    all: data?.total || 0,
  };
};

export const fetchJob = async (
  accessToken: string,
  appId: string,
  appItemId: string
): Promise<FetchJobResponse> => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `OAuth2 ${accessToken || "invalid"}`,
    },
  };

  const url = `https://api.podio.com/app/${
    appId || "invalid"
  }/item/${appItemId}`;

  const response: any = await fetch(url, options);

  if (response?.error === "unauthorized") {
    console.log("Request unauthorized - please gain new access token");
    return {
      success: false,
      item: null,
    };
  }

  const data = await response.json();
  console.log(data);

  const title =
    data.fields?.find((field: any) => field.external_id === "title")?.values[0]
      ?.value || "N/A";

  const description =
    data.fields?.find((field: any) => field.external_id === "job-description")
      ?.values[0]?.value || "No description provided";

  const estimatedSalary = data.fields.find(
    (field: any) => field.external_id === "estimated-salary"
  )?.values[0];
  const item = {
    id: data.app_item_id,
    title,
    pay: estimatedSalary
      ? `${estimatedSalary.currency} ${parseFloat(
          estimatedSalary.value
        ).toFixed(2)} / hr`
      : "Not provided",
    url: "https://podio.com/webforms/29994876/2499223",
    createdAt: data.created_on,
    postedBy: data.created_by.name,
    description,
  };

  return {
    success: true,
    item,
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

export const getJobPost = async (
  id: string
): Promise<FetchJobResponse | null> => {
  const newAccessToken = await gainRefreshedAccessToken();

  if (!newAccessToken) {
    return null;
  }

  return fetchJob(newAccessToken, "30011142", id);
};
