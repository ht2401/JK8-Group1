import { Component } from '@angular/core';

export type User = {
  username: string;
  role: "ROLE_ADMIN" | "ROLE_USER" | undefined
}
export type ErrorMessage = {
  message?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjectNg';
}
