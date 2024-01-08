import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
        component: HomeComponent
    }
];
