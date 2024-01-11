import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailDataComponent } from './book-detail-data.component';

describe('BookDetailDataComponent', () => {
  let component: BookDetailDataComponent;
  let fixture: ComponentFixture<BookDetailDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
