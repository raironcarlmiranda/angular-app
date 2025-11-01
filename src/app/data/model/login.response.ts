import { User } from "../../domain/entities/user";

export interface LoginResponse {
    user: User;
    access_token: string;
    refresh_token: string;
    abilities: string[];
}