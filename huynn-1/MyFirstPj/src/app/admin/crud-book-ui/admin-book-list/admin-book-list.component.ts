import { Component, OnInit, inject } from '@angular/core';
import { BookServices } from '../../../services/bookServices';
import { Router } from 'express';
import { Book } from '../../../services/interfaces/book';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-book-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterModule],
  providers: [BookServices],
  templateUrl: './admin-book-list.component.html',
  styleUrl: './admin-book-list.component.scss'
})
export class AdminBookListComponent implements OnInit {

  private bookServices = inject(BookServices);

  public listOfBooks: Book[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.bookServices.getBooks().subscribe(
      (data) => {
        this.listOfBooks = data;
      }
    )
  }

}
