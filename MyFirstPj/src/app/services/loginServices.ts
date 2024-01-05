import { Injectable } from '@angular/core';
import axios from 'axios';
import { BOOKS_URI } from './api';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationServices {

    constructor() {
        
    }

    login(username: string, password: string, role: string) {
        const data = {
            username: username,
            password: password,
            role: role
        };

        return axios.post(BOOKS_URI, data);
    }
}
