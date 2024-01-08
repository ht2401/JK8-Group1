import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteConfigLoadStart, RouterEvent, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfBookComponent } from './home/list-of-book/list-of-book.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes';
import { Router } from 'express';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HomeComponent,
    ListOfBookComponent,
    LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyFirstPj';
}
