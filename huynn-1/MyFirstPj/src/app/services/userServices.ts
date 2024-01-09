import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { USERS_URI } from './api';
import { UserInfo } from 'os';
import { UserInfos } from './interfaces/userInfo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private httpClient = inject(HttpClient);

    constructor() {

    }

    public getUsers(): Observable<UserInfos[]> {
        return this.httpClient.get<UserInfos[]>(USERS_URI);
    }
}
