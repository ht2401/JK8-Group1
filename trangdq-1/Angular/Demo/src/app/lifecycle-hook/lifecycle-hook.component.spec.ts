import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHookComponent } from './lifecycle-hook.component';

describe('LifecycleHookComponent', () => {
  let component: LifecycleHookComponent;
  let fixture: ComponentFixture<LifecycleHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifecycleHookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
