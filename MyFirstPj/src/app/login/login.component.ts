import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthenticationServices } from '../services/loginServices';
import { UserService } from '../services/userServices';
import { UserInfos } from '../services/interfaces/userInfo';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private loginServices = inject(AuthenticationServices);

  private userServices = inject(UserService);

  private listOfUsers: UserInfos[] | undefined;

  constructor() {
    this.getUsers();
  }

  public login(userName: string, password: string, role: string) {

  }

  public async getUsers() {
    this.userServices.getAllUsers().
      then((result) => {
        this.listOfUsers = result;
        console.log(this.listOfUsers);
        return result;
      }).catch((err) => {
        console.log(err);
        return err;
      })
  }

}
