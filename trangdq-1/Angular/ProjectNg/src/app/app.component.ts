import { Component } from '@angular/core';

export type User = {
  username: string;
  role: "ROLE_ADMIN" | "ROLE_USER" | undefined
}
export type ErrorMessage = {
  message?: string;
}
export type Book = {
  id: number,
  name: string,
  price: string,
  description: string,
  inStock: number,
  images: Array<string>
  category: string,
  discount: number
}

export const SERVER_URL = "http://localhost:8080"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjectNg';
}
