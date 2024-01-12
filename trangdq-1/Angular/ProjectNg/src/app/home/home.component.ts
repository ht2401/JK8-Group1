import { Component } from '@angular/core'; 
import { SERVER_URL } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, take } from 'rxjs';

type Book = {
  id: number,
  name: string,
  price: string,
  description: string,
  inStock: number,
  images: Array<string>
  category: string,
  discount: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public products: Observable<Array<Book>> = this.getProducts()
  constructor(private http: HttpClient) {}

  ngOnInit(): void { 
  }

  getProducts() {
    return this.http.get<Array<Book>>(`${SERVER_URL}\0`)
      .pipe(
        take(1),  
        catchError(error => {
          console.error('Error fetching products:', error); 
          return []
        })
      );
  }

}
