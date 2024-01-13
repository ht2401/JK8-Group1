import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HomeFooterComponent } from '../home-footer/home-footer.component';
import { BookDetailDataComponent } from './book-detail-data/book-detail-data.component';
import { HttpClientModule } from '@angular/common/http';
import { BookServices } from '../../services/bookServices';
import { Book } from '../../services/interfaces/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeFooterComponent, BookDetailDataComponent, HttpClientModule],
  providers: [BookServices],
  templateUrl: './book-detail.component.html',
  // styleUrl: '/src/app/home/home.component.scss'
  styleUrl: '../home.component.scss'
})
export class BookDetailComponent {

  

}
