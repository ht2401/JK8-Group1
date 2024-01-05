import { Injectable } from "@angular/core";
import { Book } from "./interfaces/book";
import { BOOKS_URI, GET_ALL_BOOKS_URI } from "./api";

@Injectable({
    providedIn: 'root'
})
export class HomeServices {

    constructor() {

    }

    public getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            const apiUrl = BOOKS_URI;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`API request failed with status: ${response.status}`);
                    }
                    return response.json() as Promise<Book[]>;
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}