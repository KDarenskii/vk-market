import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type AxiosRequestWithBody<B, R> = (
  data: B,
  config?: AxiosRequestConfig
) => Promise<AxiosResponse<R>>;

export type AxiosRequest<R> = (
  config?: AxiosRequestConfig
) => Promise<AxiosResponse<R>>;
