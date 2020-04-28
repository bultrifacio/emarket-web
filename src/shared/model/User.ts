import {Role} from "./Role";

export interface User {
    id: string;
    username: String;
    roles: Array<Role>;
    enabled: boolean;
}