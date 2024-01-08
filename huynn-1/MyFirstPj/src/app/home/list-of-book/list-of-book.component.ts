import { Component, Injectable, OnInit, inject } from '@angular/core';
import { HomeServices } from '../../services/homeServices';
import { Book } from '../../services/interfaces/book';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-of-book',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HomeServices],// need to add this to use httpclient
  templateUrl: './list-of-book.component.html',
  styleUrls: ['./list-of-book.component.scss', './style/style.scss']
})
export class ListOfBookComponent implements OnInit {

  public listOfBooks: Book[] | undefined;

  constructor(private homeService: HomeServices) {
    
  }

  ngOnInit(): void {
    this.homeService.getBooks().subscribe((book) => {
      this.listOfBooks = book;
    })
  }
}
