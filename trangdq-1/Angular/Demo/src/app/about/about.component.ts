import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent { // implements OnInit
  public loginName = "Esther"
  public role = "user"
  public color = "yellow"
    
  constructor() {
  }

  // ngOnInit(): void {}
}