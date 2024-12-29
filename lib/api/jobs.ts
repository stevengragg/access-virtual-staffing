import axios from "axios";

interface JobListing {
  item_id: number;
  fields: {
    field_id: number;
    label: string;
    values: Array<{ value: string }>;
  }[];
}

interface FetchJobListingsResponse {
  items: JobListing[];
  total: number;
}

export const fetchJobListings = async (
  accessToken: string,
  appId: string
): Promise<FetchJobListingsResponse> => {
  const url = `https://api.podio.com/item/app/${appId}/filter`;

  try {
    const response = await axios.post<FetchJobListingsResponse>(
      url,
      {
        sort_by: "created_on",
        sort_desc: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `OAuth2 ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch job listings");
  }
};
