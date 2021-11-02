import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentalsDetailComponent } from './user-rentals-detail.component';

describe('UserRentalsDetailComponent', () => {
  let component: UserRentalsDetailComponent;
  let fixture: ComponentFixture<UserRentalsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRentalsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRentalsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
