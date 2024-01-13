import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllBooksComponent } from './list-all-books.component';

describe('ListAllBooksComponent', () => {
  let component: ListAllBooksComponent;
  let fixture: ComponentFixture<ListAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAllBooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
