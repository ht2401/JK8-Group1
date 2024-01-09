import { Component } from '@angular/core';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AddBookComponent } from './crud-book-ui/add-book/add-book.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AdminHeaderComponent, AddBookComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
