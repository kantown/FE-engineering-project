import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = `Bearer ${localStorage.getItem('authToken')}`;
  if (config.headers) {
    config.headers.authorization = token;
  }
  return config;
});

export default axiosInstance;