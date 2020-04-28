import axios, { AxiosRequestConfig } from 'axios';
import {getToken} from "../service/localStorage.service";

const enableRequestInterceptor = () => {
    axios.interceptors.request.use(
        (requestConfig: AxiosRequestConfig) => {
            const token = getToken();
            if (token) {
                    requestConfig.headers['Authorization'] = `Bearer ${token}`;
            }
            return requestConfig;
        },
        (error: Error) => {
            return Promise.reject(error);
        },
    );
};

export default enableRequestInterceptor;
