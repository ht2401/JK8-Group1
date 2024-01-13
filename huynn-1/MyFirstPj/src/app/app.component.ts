import { Component, NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfBookComponent } from './home/list-of-book/list-of-book.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddBookComponent } from './admin/crud-book-ui/add-book/add-book.component';
import { NgbModal, NgbModule, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookDetailComponent } from './home/book-detail/book-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgbModule,
    RouterModule,
    HomeComponent,
    ListOfBookComponent,
    LoginComponent,
    AdminComponent,
    AddBookComponent,
    BookDetailComponent],
  providers: [NgbModalConfig, NgbModal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'MyFirstPj';

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
}
