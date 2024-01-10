import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { // implements OnInit
  public message = "Message"
  public age = 0
  public text = ""
  public fruits = ["Apple", "Grape", "Orange"]
  public fruits_price = [
    {"name":"Apple","price":1, "discount": true},
    {"name":"Grapes","price":-2, "discount": false},
    {"name":"Orange","price":3, "discount": true}
  ]

  constructor() {
  }

  public reset() {
    console.log("Just kidding~");
    this.age = 0
  }

  public displayFruits() {
    return this.fruits    
  }

  // ngOnInit(): void {}
}
