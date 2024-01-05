import { Component, inject } from '@angular/core';
import { HomeServices } from '../../services/homeServices';
import { Book } from '../../services/interfaces/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-of-book',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './list-of-book.component.html',
  styleUrl: './list-of-book.component.scss'
})
export class ListOfBookComponent {

  private homeService = inject(HomeServices);

  public listOfBooks: Book[] | undefined;

  constructor() {
    this.getBooks();
  }

  public async getBooks() {
    this.homeService.getBooks().
    then((result) => {
      this.listOfBooks = result;
      return result;
    }).catch((err) => {
      return err;
    })
  }
}
