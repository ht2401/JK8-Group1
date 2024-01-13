import { Component } from '@angular/core';
import { homeService } from './service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // providers: [homeService]
})
export class HomeComponent {
  myInfo = {
    name: 'Tung Beo',
    age: 26,

  };

  homeService:homeService;

  constructor(homeService:homeService){
    this.homeService = homeService;
  }

  users = [
    {
      name: 'Hung',
      age: 23,
    },
    {
      name: 'Le',
      age: 1,
    },
    {
      name: 'kick',
      age: 3,
    },
    {
      name: 'Tung',
      age: 2,
    },
  ];
  //  property binding
  tmp: string = 'number';
  //  event binding
  handle = () => {
    console.log('hi');
  };
  // class binding
  classes: string[] = ['container', 'row'];
}
