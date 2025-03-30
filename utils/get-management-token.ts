import axios from "axios";

export const getManagementApiToken = async (): Promise<string> => {
  const url = `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`;

  const response = await axios.post(url, {
    grant_type: "client_credentials",
    client_id: process.env.AUTH0_OAUTH_CLIENT_ID,
    client_secret: process.env.AUTH0_OAUTH_CLIENT_SECRET,
    audience: process.env.AUTH0_OAUTH_AUDIENCE?.toString(),
  });

  return response.data.access_token;
};
