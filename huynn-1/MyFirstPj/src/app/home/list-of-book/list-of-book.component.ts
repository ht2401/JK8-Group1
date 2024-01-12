import { Component, Injectable, OnInit, inject } from '@angular/core';
import { HomeServices } from '../../services/homeServices';
import { Book } from '../../services/interfaces/book';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TruncatePipe } from '../../pipes/TruncatePipe';

@Component({
  selector: 'app-list-of-book',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, RouterLink, TruncatePipe],
  providers: [HomeServices],// need to add this to use httpclient
  templateUrl: './list-of-book.component.html',
  styleUrls: ['./list-of-book.component.scss', './style/style.scss']
})
export class ListOfBookComponent implements OnInit {

  private router = inject(Router)

  public listOfBooks: Book[] | undefined;

  public limitedListOfBooks: Book[] = []; 

  public listOfNewBooksLimited: Book[] = [];

  constructor(private homeService: HomeServices) {
    
  }

  ngOnInit(): void {
    this.homeService.getBooks().subscribe((book) => {
      this.listOfBooks = book;
      this.newBooks();
    })
  }

  private newBooks(): void {
    if (this.listOfBooks) {
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 1);

      this.listOfNewBooksLimited = this.listOfBooks.filter(book =>
        new Date(book.publishedDate) >= oneMonthAgo
      ).slice(0, 8);
    }
  }

  public navigateToBookDetail(bookId: any) {
    this.router.navigate(['/home/book-detail', {bookId: bookId}]);
  }
}
