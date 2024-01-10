import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Angular Project';
  public isShowing: boolean = true;

  public num1: number = 0;
  public num2: number = 0;
  public total: number = 0;

  totalNumber() {
    this.total = this.num1 + this.num2;
  }
}


