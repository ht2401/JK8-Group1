import { Component } from '@angular/core';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddBookComponent } from './crud-book-ui/add-book/add-book.component';
import { AdminBookListComponent } from './crud-book-ui/admin-book-list/admin-book-list.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminHeaderComponent, AddBookComponent, AdminBookListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
