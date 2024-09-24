import axios from "axios";
import { API_BASE_URL, AUTH_URLS } from "./apiUrls";
import { ACCESS_TOKEN } from "./constants";


const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token && config.headers && !config.url.includes(AUTH_URLS.REGISTER)) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;