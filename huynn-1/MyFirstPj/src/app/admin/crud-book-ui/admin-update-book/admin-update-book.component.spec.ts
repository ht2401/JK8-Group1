import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateBookComponent } from './admin-update-book.component';

describe('AdminUpdateBookComponent', () => {
  let component: AdminUpdateBookComponent;
  let fixture: ComponentFixture<AdminUpdateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
