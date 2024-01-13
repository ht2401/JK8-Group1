import { Component, OnInit, inject } from '@angular/core';
import { AdminHeaderComponent } from '../../admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../../services/interfaces/book';
import { BookServices } from '../../../services/bookServices';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [AdminHeaderComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './add-book.component.html',
  providers: [BookServices],
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {

  private bookServices = inject(BookServices);

  public name: string = "";

  public image: any = "";

  public author: string = "";

  public price: number = 0;

  public quantity: number = 0;

  public publishedDate: string = '';

  public publisher: string = '';

  public bookType: string = '';

  public validationError: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  public validateInput(bookData: Book): boolean {
    if (!bookData.name || !bookData.author || !bookData.price || !bookData.quantity || !bookData.publishedDate || !bookData.publisher || !bookData.bookType) {
      this.validationError = 'Vui lòng điền đầy đủ thông tin.';
      return false;
    }

    if (isNaN(bookData.price) || isNaN(bookData.quantity)) {
      this.validationError = 'Giá và số lượng phải là số.';
      return false;
    }

    this.validationError = '';
    return true;
  }

  public addBook() {
    let bookData: Book = {
      id: "",
      name: this.name,
      author: this.author,
      bookType: this.bookType,
      detail: "",
      image: this.image,
      price: this.price,
      publishedDate: this.publishedDate,
      publisher: this.publisher,
      quantity: this.quantity
    }

    if (this.validateInput(bookData)) {
      this.bookServices.addBook(bookData).subscribe(
        {
          next: (value) => {
            if (value != undefined) {
              alert("Thêm phẩm thành công");
              return;
            }
          },
          error: err => {
            alert("Thêm thất bại");
            return;
          }
        }
      );
    }
  }

}
