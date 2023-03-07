import axios, { AxiosInstance } from 'axios';
import { API_URL, REQUEST_TIMEOUT } from 'shareds/config';

export const createAPI = (): AxiosInstance => {

  const api = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
