import { Component, OnInit, inject } from '@angular/core';
import { HomeServices } from '../services/homeServices';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ListOfBookComponent } from './list-of-book/list-of-book.component';
import { Book } from '../services/interfaces/book';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CarouselComponent } from '../carousel/carousel.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { TruncatePipe } from '../pipes/TruncatePipe';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ListOfBookComponent, BsDropdownModule, FontAwesomeModule, RouterLink, CarouselComponent, BookDetailComponent, RouterModule,
  HomeFooterComponent, HomeFooterComponent, ListAllBooksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public faUser = faUser;
}
