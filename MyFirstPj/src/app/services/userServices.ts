import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USERS_URI } from './api';
import { UserInfo } from 'os';
import { UserInfos } from './interfaces/userInfo';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getAllUsers(): Promise<UserInfos[]> {
        return new Promise<UserInfos[]>((resolve, reject) => {
            fetch(USERS_URI)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`API request failed with status: ${response.status}`);
                    }
                    return response.json() as Promise<UserInfos[]>;
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    }
}
