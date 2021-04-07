import { AxiosInstance } from "axios";
import { API_URL, CONFIG } from "../config";
import { metabaseHttpClient } from "../httpClient";
import { LoginResponse } from "../types/metabase";

export const auth = async () => {
  return await login(
    metabaseHttpClient,
    CONFIG.MB_USERNAME,
    CONFIG.MB_PASSWORD
  );
};

export const login = async (
  httpClient: AxiosInstance,
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await httpClient.post<any, LoginResponse>(
      API_URL.SESSION,
      {
        username,
        password,
      }
    );

    const SESSION_ID = response.id;

    httpClient.interceptors.request.use((config) => {
      config.headers[CONFIG.METABASE_HEADER] = SESSION_ID;
      return config;
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async (): Promise<LoginResponse> => {
  try {
    const response = await metabaseHttpClient.delete<any, any>(API_URL.SESSION);
    return response;
  } catch (error) {
    console.error(error);
  }
};
