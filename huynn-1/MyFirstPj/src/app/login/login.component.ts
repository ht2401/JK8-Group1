import { CommonModule } from '@angular/common';
import { Component, Directive, Input, OnInit, Pipe, inject } from '@angular/core';
import { AuthenticationServices } from '../services/loginServices';
import { UserService } from '../services/userServices';
import { UserInfos } from '../services/interfaces/userInfo';
import {
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginServices = inject(AuthenticationServices);

  private userServices = inject(UserService);

  // private listOfUsers: UserInfos[] | undefined;

  public username: string = "";

  public password: string = "";

  constructor(private router: Router) {
  }

  public async login() {
    try {
      let users: UserInfos[] = await this.userServices.getAllUsers();
      let userInfo: UserInfos | undefined = users.find((user) => user.userName === this.username && this.password);
      if (userInfo?.role === "ADMIN") {
        this.router.navigateByUrl('/home');
        alert("Hello "+ userInfo.userName);
      }
    } catch (error) {
      console.error(error);
    }
  }
 
}
