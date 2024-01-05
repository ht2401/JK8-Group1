import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: "home",
        component: HomeComponent
    },
    {
        path: 'login',
        title: 'login',
        component: LoginComponent
    }
];
