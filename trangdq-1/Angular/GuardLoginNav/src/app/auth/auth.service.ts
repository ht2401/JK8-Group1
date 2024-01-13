import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(private router: Router) { }

  public login(user: string): void {
    console.log("login(): user = " + user);
    if (user) {
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }
  }

  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }


  public logout(): void {
    console.log("logout()");
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }


}
