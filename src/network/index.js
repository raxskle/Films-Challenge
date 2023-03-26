import axios from "axios";

// const ConfigBaseURL = "http://localhost:8081";
const ConfigBaseURL = "https://demo.raxskle.fun/";

let axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  timeout: 3000,
  baseURL: ConfigBaseURL, //接口请求地址
});

export default axiosInstance;
