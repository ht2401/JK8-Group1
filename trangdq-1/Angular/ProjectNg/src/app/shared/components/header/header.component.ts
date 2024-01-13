import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>
  public isAdmin$: Observable<boolean> = new Observable<boolean>

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn()
    this.isAdmin$ = this.authService.isAdmin()
  }

  logout(): void {
    this.authService.logout()
  }
}
