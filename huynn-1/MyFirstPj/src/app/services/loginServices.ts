import { Injectable, inject } from '@angular/core';
import axios from 'axios';
import { BOOKS_URI, USERS_URI } from './api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from './responses/authenticationResponse';
import { Observable, catchError, retry } from 'rxjs';
import { UserInfos } from './interfaces/userInfo';
import { UserInfo } from 'os';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationServices {

    private httpClient = inject(HttpClient);

    constructor() {

    }

    // login(username: string, password: string, role: string) {
    //     const data = {
    //         username: username,
    //         password: password,
    //         role: role
    //     };

    //     return axios.post(BOOKS_URI, data);
    // }

}
