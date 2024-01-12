import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorMessage, User } from '../../app.component';

const pattern = /^[A-Z][a-zA-Z0-9]{7}$/;

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private admin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private user: User | undefined
  private errors: Array<ErrorMessage> = []
  constructor(private router: Router) { }

  public logout(): void {
    this.user = undefined
    this.loggedIn.next(false)
    this.admin.next(false)
    this.router.navigate(['/login'])
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }

  public isAdmin(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }

  public getErrors(): Array<ErrorMessage> {
    return this.errors
  }

  public login(username: string, password: string): void {
    this.errors = [{}, {}]
    let should = true
    username = username.trim()
    if (!username) {
      this.errors[0].message = "*Username is not available."
      should = false
    }
    if (!password.match(pattern)) {
      this.errors[1].message = "*Invalid password."
      should = false
    }

    if (should) {
      this.user = {
        username: username,
        role: "ROLE_ADMIN",
      }
      if (this.user.role === "ROLE_ADMIN") this.admin.next(true)
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }
  }


}
