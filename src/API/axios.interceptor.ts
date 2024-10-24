import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  function (config) {
    config.baseURL = "http://127.0.0.1:3001/";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
