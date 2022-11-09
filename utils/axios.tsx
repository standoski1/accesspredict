import axios from "axios";
import https from 'https'

export const axiosInstance = axios.create({
  baseURL: "https://api.fulltime-predict.com/",
  timeout: 360000,
  httpsAgent: new https.Agent({ keepAlive: true }),
});
