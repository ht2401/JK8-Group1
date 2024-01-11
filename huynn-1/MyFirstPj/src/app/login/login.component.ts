import { CommonModule } from '@angular/common';
import { Component, Directive, Input, OnInit, Pipe, inject } from '@angular/core';
import { AuthenticationServices } from '../services/loginServices';
import { UserService } from '../services/userServices';
import { UserInfos } from '../services/interfaces/userInfo';
import {
  FormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginResponse } from '../services/responses/authenticationResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [AuthenticationServices, UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private authenticationServices = inject(AuthenticationServices);

  private userServices = inject(UserService);

  private router = inject(Router);

  public username: string = "";

  public password: string = "";

  private listOfUser: UserInfos[] = [];

  public passworrdErr: string = '';

  public usernameErr: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.userServices.getUsers().subscribe({
      next: value => this.listOfUser = value,
      error: err => console.log(err)
    });
  }

  public login() {
    let user = this.listOfUser.find((user) => user.userName === this.username && this.password === this.password);
    if (user?.role === "ADMIN") {
      alert("Hello " + this.username);
      this.router.navigateByUrl("/admin");
    } else if (user?.role === "USER") {
      this.router.navigateByUrl("/home");
    }
  }

  public validatePassword(password: string): string {
    if (password.length < 8) {
      return "Mật khẩu phải có ít nhất 8 ký tự";
    }

    if (password.charAt(0) !== password.charAt(0).toLocaleUpperCase()) {
      return 'Mật khẩu phải có ít nhất một chữ cái viết hoa';
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return 'Mật khẩu không được chứa các ký tự đặc biệt và số';
    }

    if (/\d/.test(password)) {
      return 'Mật khẩu không được chứa các ký tự đặc biệt và số';
    }

    return '';
  }

}
