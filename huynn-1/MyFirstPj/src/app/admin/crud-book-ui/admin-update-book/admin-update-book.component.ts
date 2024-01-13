import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../services/interfaces/book';
import { HttpClientModule } from '@angular/common/http';
import { BookServices } from '../../../services/bookServices';

@Component({
  selector: 'app-admin-update-book',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [BookServices],
  templateUrl: './admin-update-book.component.html',
  styleUrls: ['./admin-update-book.component.scss']
})
export class AdminUpdateBookComponent implements OnInit {

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
    const bookId: string | null = this.route.snapshot.paramMap.get('id');
    if (bookId !== null) {
      this.bookServices.getBook(bookId).subscribe((data) => {
        this.book = data;
      });
    }
  }

  // handling update book
  public updateBook() {
    const bookId: string | null = this.route.snapshot.paramMap.get('id');

    if (bookId !== null) {

      this.bookServices.getBook(bookId).subscribe(
        (data) => {
          let book = data;

          const bookInput: Book = {
            id: bookId,
            name: this.name ? this.name : book.name,
            image: this.image ? this.image : book.image,
            price: this.price ? this.price : book.price,
            detail: '',
            author: this.author ? this.author : book.author,
            quantity: this.quantity ? this.quantity : book.quantity,
            publishedDate: this.publishedDate ? this.publishedDate : book.publishedDate,
            bookType: this.bookType ? this.bookType : book.bookType,
            publisher: this.publisher ? this.publisher : book.publisher
          };

          // Hiển thị hộp thoại xác nhận
          const isConfirmed = window.confirm('Bạn có chắc chắn muốn cập nhật thông tin này không?');

          if (isConfirmed) {
            // Nếu người dùng chấp nhận xác nhận, thực hiện cập nhật
            this.bookServices.updateBook(bookId, bookInput).subscribe(
              {
                next: (value) => {
                  if (value) {
                    alert('Cập nhật thành công!');
                  }
                },
                error: err => {
                  console.log(err);
                  alert('Có lỗi xảy ra khi cập nhật!');
                }
              }
            );
          } else {
            console.log('Người dùng đã hủy cập nhật.');
          }
        }
      );
    }
  }

  public deletBook(bookId: string) {
    const isConfirmed = window.confirm('Bạn có chắc chắn muốn xóa sách này không?');
    if (isConfirmed) {
      this.bookServices.deleteBook(bookId).subscribe(
        {
          next: (value) => {
            if (value) {
              alert("Xóa thành công");
              return;
            }
          },
          error: (err) => {
            alert("Đã xảy ra lỗi");
            console.log(err);
            return;
          }
        }
      )
    }
  }
}
