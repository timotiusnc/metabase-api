import Axios, { AxiosInstance, AxiosResponse } from "axios";
import { CONFIG } from "./config";

const metabaseHttpClient: AxiosInstance = Axios.create({
  baseURL: CONFIG.MB_BASE_API_URL,
});

const handleResponse = ({ data }: AxiosResponse) => {
  return data;
};
const handleError = (error: any) => {
  console.error(error.response.data);
  return Promise.reject({
    status: error.response.status,
    data: error.response.data,
  });
};

metabaseHttpClient.interceptors.response.use(handleResponse, handleError);

metabaseHttpClient.interceptors.request.use((request) => {
  console.log(request.method, request.url);
  return request;
});

export { metabaseHttpClient };
