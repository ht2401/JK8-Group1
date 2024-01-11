import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit, inject } from "@angular/core";
import { Book } from "./interfaces/book";
import { Observable } from "rxjs";
import { BOOKS_URI } from "./api";

@Injectable({
    providedIn: 'root'
})
export class BookServices implements OnInit {


    public httpClient = inject(HttpClient);

    constructor() {

    }

    ngOnInit(): void {

    }

    public addBook(bookData: Book): Observable<Book> {
        return this.httpClient.post<Book>(BOOKS_URI, bookData)
    }

    public getBooks(): Observable<Book[]> {
        return this.httpClient.get<Book[]>(BOOKS_URI);
    }

    public getBook(id: string): Observable<Book> {
        return this.httpClient.get<Book>(BOOKS_URI.concat("/" + id));
    }

    public updateBook(id: string, data: Book): Observable<Book> {
        return this.httpClient.put<Book>(BOOKS_URI.concat("/" + id), data);
    }
}