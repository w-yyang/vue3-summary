import axios, { AxiosInstance, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from "axios";

axios.defaults.baseURL = 'http://localhost:4000/api';

class AxiosRequest {
  public axiosReqInstance: AxiosRequest | undefined;
  public axiosInstace: AxiosInstance
  static axiosReqInstance: any;

  constructor(reqConfig: CreateAxiosDefaults) {
    this.axiosInstace = axios.create(reqConfig);
  }

  static getInstance(reqConfig: CreateAxiosDefaults) {
    if (this.axiosReqInstance) {
      return this.axiosReqInstance;
    } else {
      this.axiosReqInstance = new AxiosRequest(reqConfig);
      return this.axiosReqInstance;
    }
  }

  initInstance({ requestCb, responseCb }: { requestCb?: (value: any) => Promise<InternalAxiosRequestConfig<any>>, responseCb?: (value?: any) => Promise<AxiosResponse<any>>}) {
    if (requestCb && typeof requestCb === 'function') {
      this.axiosInstace.interceptors.request.use(requestCb);
    }
    if (responseCb && typeof responseCb === 'function') {
      this.axiosInstace.interceptors.response.use(responseCb);
    }
    return this.axiosInstace;
  }
}

const axiosInstance = AxiosRequest.getInstance({});

const responseCb = (backVal: any) => {
  const { data } = backVal;
  return data;
}

export const Http = axiosInstance.initInstance({
  responseCb,
});