require("dotenv").config();

const baseUrl = process.env.METABASE_BASE_URL;
const username = process.env.METABASE_USERNAME;
const password = process.env.METABASE_PASSWORD;

export const CONFIG = {
  MB_BASE_API_URL: baseUrl,
  METABASE_HEADER: "X-Metabase-Session",
  MB_USERNAME: username,
  MB_PASSWORD: password,
};

export const API_URL = {
  SESSION: "/session",
  CARD_QUERY: "/card/:card_id/query",
  CARD_EMBED_DASHBOARD:
    "/embed/dashboard/:token/dashcard/:dashcard_id/card/:card_id",
};
