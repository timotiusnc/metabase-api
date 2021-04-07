import { API_URL } from "../config";
import { metabaseHttpClient } from "../httpClient";
import { replaceAll } from "../util";

export const queryCard = async ({ id }) => {
  try {
    return await metabaseHttpClient.post<any, any>(
      API_URL.CARD_QUERY.replace(":card_id", id.toString())
    );
  } catch (error) {
    console.log(error);
  }
};

export const getEmbeddedCardDashboard = async ({
  token,
  dashcardId,
  cardId,
}) => {
  try {
    return await metabaseHttpClient.get<any, any>(
      replaceAll(API_URL.CARD_EMBED_DASHBOARD, {
        ":token": token,
        ":dashcard_id": dashcardId,
        ":card_id": cardId,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
