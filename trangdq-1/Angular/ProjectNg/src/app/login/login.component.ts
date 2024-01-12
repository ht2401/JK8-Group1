import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ErrorMessage } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent { 
  public errors$: Array<ErrorMessage> = [{},{}]
  public username: string = ""
  public password: string = ""
  
  constructor(private authService: AuthService) { }

  public login(): void {
    this.authService.login(this.username, this.password)
    this.errors$ = this.authService.getErrors() 
  } 
}
