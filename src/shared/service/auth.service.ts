import {Credentials} from "../model/Credentials";

import axios, {AxiosResponse} from "axios";
import {setToken} from "./localStorage.service";
import {User} from "../model/User";

const API_URL = "http://localhost:8080";


export const login = (user: Credentials): Promise<User> => {
    return axios.post(`${API_URL}/login`, user)
        .then((response: AxiosResponse) => {
            setToken(response.headers['authorization'].split(" ")[1]);
            return getUserInfo();
        });
};

export const getUserInfo = (): Promise<User> => {
    return axios.get(`${API_URL}/api/user/me`);
};