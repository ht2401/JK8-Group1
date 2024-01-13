import { Component, inject } from '@angular/core';
import { ActivatedRoute, ROUTER_CONFIGURATION } from '@angular/router';
import { BookServices } from '../../../services/bookServices';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Book } from '../../../services/interfaces/book';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-book-detail-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  providers: [BookServices],
  templateUrl: './book-detail-data.component.html',
  // styleUrl: './book-detail-data.component.scss'
  styleUrl: '../../home.component.scss'
})
export class BookDetailDataComponent {

  private route = inject(ActivatedRoute);

  private bookServices = inject(BookServices);

  public book: Book = {
    id: '',
    name: '',
    image: '',
    price: 0,
    detail: '',
    author: '',
    quantity: 0,
    publishedDate: '',
    bookType: '',
    publisher: ''
  };

  constructor() {
    this.getBookData();
  }

  public getBookData() {
    const bookId: string | null = this.route.snapshot.paramMap.get('bookId');
    if (bookId) {
      this.bookServices.getBook(bookId).subscribe(
        (data) => {
          if (data.image == '') {
            data.image = "https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.webp";
            this.book = data;
            return;
          }
          return;
        }
      )
    }
  }

}
