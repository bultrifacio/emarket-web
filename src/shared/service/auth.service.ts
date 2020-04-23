import {User} from "../model/User";

export const userService = {login};

const API_URL = "http://localhost:8080";
const ACCESS_TOKEN = 'accessToken';

function login(user: User) {
    return request({
        url: `${API_URL}/login`,
        method: 'POST',
        body: JSON.stringify(user)
    }).then(handleResponse);
}

const request = (options: any) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)

};

function handleResponse(response: any) {
    if (!response.ok) {
        return Promise.reject(`Error ${response.status}`)
    }
    saveToken(response);
    return getLoggedUser().then(resp =>
        resp.json().then(json => {
            if (!resp.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}

function saveToken(response: any) {
    const token = response.headers.get("Authorization").split(" ")[1];
    localStorage.setItem(ACCESS_TOKEN, token);
}

function getLoggedUser() {
    return request({
        url: `${API_URL}/api/user/me`,
        method: 'GET',
    });
}