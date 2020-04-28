import CONSTANTS from "../constants";

export const setToken = (token: string) => {
    window.localStorage.setItem(CONSTANTS.AUTHORIZATION_TOKEN_KEY, token);
};

export const getToken = (): string | null => {
    const storedToken = window.localStorage.getItem(CONSTANTS.AUTHORIZATION_TOKEN_KEY);
    if (storedToken) {
        return storedToken;
    } else {
        return null;
    }
};

export const clearToken = () => {
    return window.localStorage.removeItem(CONSTANTS.AUTHORIZATION_TOKEN_KEY);
};