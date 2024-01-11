import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import path from 'path';
import { title } from 'process';
import { AddBookComponent } from './admin/crud-book-ui/add-book/add-book.component';
import { AdminBookListComponent } from './admin/crud-book-ui/admin-book-list/admin-book-list.component';
import { AdminUpdateBookComponent } from './admin/crud-book-ui/admin-update-book/admin-update-book.component';
import { adminAuthGardGuard } from './admin-auth-gard.guard';
import { BookDetailComponent } from './home/book-detail/book-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix'
    },
    {
        path: 'login',
        title: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        title: 'home',
        component: HomeComponent,
    },
    {
        path: 'home/book-detail',
        title: 'book-detail',
        component: BookDetailComponent,
    },
    {
        path: 'admin',
        title: 'admin-home-page',
        component: AdminComponent,
        canActivate: [adminAuthGardGuard],
        children: [
            {
                path: 'add-book',
                title: 'add-book',
                component: AddBookComponent,
            },
            {
                path: 'book-list',
                title: 'list-of-books',
                component: AdminBookListComponent,
            },
            {
                path: 'update-book',
                title: 'update-book',
                component: AdminUpdateBookComponent,
            }
        ]
    }
];
