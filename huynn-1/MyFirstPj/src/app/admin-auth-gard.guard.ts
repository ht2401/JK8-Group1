import { CanActivateFn } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

export const adminAuthGardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');

  if (token == null || token.toString() === '' || token == undefined) {
    return false;
  }

  if (token === "USER") {
    route.component = HomeComponent;
    return false;
  } else if (token === "ADMIN") {
    route.component = AdminComponent;
    return true;
  }

  return false;
};
