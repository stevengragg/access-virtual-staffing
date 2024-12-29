import axios from "axios";

interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export const gainRefreshedAccessToken =
  async (): Promise<RefreshTokenResponse> => {
    const url = "https://api.podio.com/oauth/token/v2";

    try {
      const response = await axios.post<RefreshTokenResponse>(
        url,
        {
          grant_type: "refresh_token",
          client_id: process.env.NEXT_PODIO_AVS_CLIENT_ID,
          client_secret: process.env.NEXT_PODIO_AVS_CLIENT_SECRET,
          refresh_token: process.env.NEXT_PODIO_API_REFRESH_TOKEN,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error("Failed to refresh access token");
    }
  };
