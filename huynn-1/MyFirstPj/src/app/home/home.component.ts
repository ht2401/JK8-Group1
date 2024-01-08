import { Component, OnInit, inject } from '@angular/core';
import { HomeServices } from '../services/homeServices';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListOfBookComponent } from './list-of-book/list-of-book.component';
import { Book } from '../services/interfaces/book';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListOfBookComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
