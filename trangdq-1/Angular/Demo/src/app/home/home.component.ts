import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public message = "Message"
  public age = 0
  public text = ""
  public fruits = ["Apple", "Grape", "Orange"]

  // 2.3 exercise
  public fruits_price = [
    { "name": "Apple", "price": 1, "discount": true },
    { "name": "Grape", "price": -2, "discount": false },
    { "name": "Orange", "price": 3, "discount": true }
  ]

  // 2.5 exercise
  public cities_map = [
    { "city": "--- Chọn tỉnh, thành phố ---", "district": [] },
    { "city": "Quảng Ninh", "districts": ["Cẩm Phả", "Hạ Long", "Móng Cái", "Uông Bí"] },
    { "city": "Nghệ An", "districts": ["Tuyên Quang", "Vinh"] }
  ]
  public districts: Array<string> = ["--- Chọn quận, huyện ---"]

  constructor() { }

  // 2.5 exercise (cont)
  public changeCity(event: any): void {
    let current: string = event.currentTarget.value
    let index = 0
    for (let i = 0; i < this.cities_map.length; i++) {
      if (current == this.cities_map[i].city) {
        index = i
        break
      }
    }
    this.districts = this.cities_map[index].districts !== undefined ? this.cities_map[index].districts! : []
    this.districts.unshift("--- Chọn quận, huyện ---")
  }



  public reset() {
    console.log("Just kidding~");
    this.age = 0
  }

  public displayFruits() {
    return this.fruits
  }

  ngOnInit(): void { }
}
