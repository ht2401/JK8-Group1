import { Injectable, inject } from "@angular/core";
import { Book } from "./interfaces/book";
import { BOOKS_URI, GET_ALL_BOOKS_URI } from "./api";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HomeServices {

    private httpClient = inject(HttpClient);

    constructor() {

    }

    public getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(BOOKS_URI);
    }



    // public async getBooks(): Promise<Book[]> {
    //     try {
    //         const apiUrl = BOOKS_URI;
    //         const response = await fetch(apiUrl);

    //         if (!response.ok) {
    //             throw new Error(`API request failed with status: ${response.status}`);
    //         }

    //         const data: Book[] = await response.json();
    //         return data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // public getBooks() {
    //     return this.httpClient.request('GET', BOOKS_URI, {responseType:'json'});
    // }

}