import { Component, OnInit, inject } from '@angular/core';
import { Book } from '../../services/interfaces/book';
import { HomeServices } from '../../services/homeServices';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { TruncatePipe } from '../../pipes/TruncatePipe';

@Component({
  selector: 'app-list-all-books',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule, RouterLink, TruncatePipe],
  providers: [HomeServices],
  templateUrl: './list-all-books.component.html',
  styleUrl: './list-all-books.component.scss'
})
export class ListAllBooksComponent implements OnInit {

  private router = inject(Router);

  private homeServices = inject(HomeServices);

  public bookList: Book[] = [];

  public listOfAllBookLimitedLength: Book[] = [];

  constructor() {

  }

  ngOnInit(): void {
    this.homeServices.getBooks().subscribe(
      {
        next: (value) => {
          this.bookList = value;
          if (value.length > 8) {
            this.listOfAllBookLimitedLength = value.slice(0, 8);
          }
        }, error(err) {
          console.log(err);
        }
      }
    )
  }

  public navigateToBookDetail(bookId: any) {
    this.router.navigate(['/home/book-detail', { bookId: bookId }]);
  }

}
