import { Component, OnInit } from '@angular/core';
import { HomeServices } from '../services/homeServices';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {

  public name1: string = "huynem";

  public alertHello(): void {
    alert("ccc");
  }

  
}
